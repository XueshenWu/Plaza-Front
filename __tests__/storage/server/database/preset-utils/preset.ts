import { newDrizzle } from "@/storage/server/database/drizzle-client";
import * as schema from "@/drizzle/schema";
import { v4 } from "uuid";
import { and, eq } from "drizzle-orm";
import { a } from "vitest/dist/chunks/suite.BJU7kdY9.js";
import { createPost } from "@/storage/server/database/posts";


export async function usePostPreset() {
    const db = newDrizzle()
    let userId: string;
    let communityId: string;

    const [_userRecord] = await db.insert(schema.profiles).values({
        id: v4()
    }).returning()
    userId = _userRecord.id

    const [_communityRecord] = await db.insert(schema.communities).values({
        id: v4(),
        name: `Community ${Math.random().toFixed(5)}`,
        description: "Test Community Description",
    }).returning()
    communityId = _communityRecord.id

    const [_community_userRecord] = await db.insert(schema.community_user).values({
        user_id: userId,
        community_id: communityId
    }).returning()

    const reset = async () => {
        await db.delete(schema.posts).where(eq(schema.posts.author_id, userId))
    }

    const release = async () => {
        await db.delete(schema.community_user).where(and(
            eq(schema.community_user.user_id, userId), eq(schema.community_user.community_id, communityId)
        ))
        await db.delete(schema.profiles).where(eq(schema.profiles.id, userId))
        await db.delete(schema.communities).where(eq(schema.communities.id, communityId))
    }


    return {
        userId,
        communityId,
        reset,
        release
    }
}

export async function useFeedPreset(numberOfAuthors: number, numberOfCommunities: number) {

    const db = newDrizzle()
    const authors = new Array<string>(numberOfAuthors);
    const communities = new Array<string>(numberOfCommunities);
    let userId: string;

    const [_userRecord] = await db.insert(schema.profiles).values({
        id: v4()
    }).returning()
    userId = _userRecord.id

    for (let i = 0; i < numberOfCommunities; i++) {
        const [_communityRecord] = await db.insert(schema.communities).values({
            id: v4(),
            name: `Community ${Math.random().toFixed(5)}`,
            description: "Test Community Description",
        }).returning()
        communities[i] = _communityRecord.id
    }

    for (let i = 0; i < numberOfAuthors; i++) {
        const [_userRecord] = await db.insert(schema.profiles).values({
            id: v4()
        }).returning()
        authors[i] = _userRecord.id
    }

    // subscribe user to communities
    for (let i = 0; i < numberOfCommunities; i++) {
        const [_community_userRecord] = await db.insert(schema.community_user).values({
            user_id: userId,
            community_id: communities[i]
        }).returning()
    }

    // each author creates a post in each community
    for (let i = 0; i < numberOfAuthors; i++) {
        for (let j = 0; j < numberOfCommunities; j++) {
            // await db.insert(schema.posts).values({
            //     author_id: authors[i],
            //     community_id: communities[j],
            //     title: `Test Post ${i}-${j}`,
            //     content: ["Test Content"],
            //     media: {
            //         mediaType: "IMAGE",
            //         mediaUrl: ["https://example.com/image.jpg"],
            //         mediaPreview: {
            //             src: "https://example.com/image.jpg",
            //             meta: "Test Image"
            //         }
            //     },
            //     updatedAt: new Date()
            // })
            await createPost(authors[i], communities[j], `Test Post ${i}-${j}`, ["Test Content"],
                {
                    mediaType: "IMAGE",
                    mediaUrl: ["https://example.com/image.jpg"],
                    mediaPreview: {
                        src: "https://example.com/image.jpg",
                        meta: "Test Image"
                    }
                })

        }
    }

    const release = async () => {

        for (let i = 0; i < numberOfCommunities; i++) {
            await db.delete(schema.community_user).where(and(
                eq(schema.community_user.community_id, communities[i]), eq(schema.community_user.user_id, userId)))
            await db.delete(schema.communities).where(eq(schema.communities.id, communities[i]))
        }
        for (let i = 0; i < numberOfAuthors; i++) {
            for (let j = 0; j < numberOfCommunities; j++) {
                await db.delete(schema.posts).where(and(
                    eq(schema.posts.author_id, authors[i]), eq(schema.posts.community_id, communities[j])
                ))
            }
            await db.delete(schema.profiles).where(eq(schema.profiles.id, authors[i]))
        }

        await db.delete(schema.profiles).where(eq(schema.profiles.id, userId))
    }

    return {
        userId,
        authors,
        communities,
        release,
    }

}

export async function useReviewPostPreset() {
    const db = newDrizzle()

    let userId: string;
    let postId: string;
    let authorId: string;
    let communityId: string;

    const [_userRecord] = await db.insert(schema.profiles).values({
        id: v4()
    }).returning()
    userId = _userRecord.id


    const [_authorRecord] = await db.insert(schema.profiles).values({
        id: v4()
    }).returning()
    authorId = _authorRecord.id

    const [_communityRecord] = await db.insert(schema.communities).values({
        id: v4(),
        name: `Community ${Math.random().toFixed(5)}`,
        description: "Test Community Description",
    }).returning()

    communityId = _communityRecord.id

    const [_community_userRecord] = await db.insert(schema.community_user).values({
        user_id: authorId,
        community_id: communityId
    }).returning()

    const [_postRecord] =
        await db.insert(schema.posts).values({
            author_id: authorId,
            community_id: communityId,
            title: `Test Post`,
            content: ["Test Content"],
            media: {
                mediaType: "IMAGE",
                mediaUrl: ["https://example.com/image.jpg"],
                mediaPreview: {
                    src: "https://example.com/image.jpg",
                    meta: "Test Image"
                }
            },
            updatedAt: new Date()}).returning()

    postId = _postRecord.id

    const reset = async () => {
        await db.update(schema.posts).set({
            upvotes: 0,
            downvotes: 0
        }).where(eq(schema.posts.id, postId))

        await db.update(schema.profiles).set({
            upvoted_posts: [],
            downvoted_posts: []
        }).where(eq(schema.profiles.id, userId))
    }

    const release = async () => {
        await db.delete(schema.posts).where(eq(schema.posts.id, postId))
        await db.delete(schema.community_user).where(and(
            eq(schema.community_user.user_id, authorId), eq(schema.community_user.community_id, communityId)
        ))
        await db.delete(schema.communities).where(eq(schema.communities.id, communityId))
        await db.delete(schema.profiles).where(eq(schema.profiles.id, userId))
        await db.delete(schema.profiles).where(eq(schema.profiles.id, authorId))
    }

    return {
        userId,
        postId,
        authorId,
        communityId,
        reset,
        release
    }
}

export async function useConcurrentRequestsPreset(numberOfConcurrentUsers: number) {

    const db = newDrizzle()

    const concurrentUserId = new Array<string>(numberOfConcurrentUsers)

    const [_authorRecord] = await db.insert(schema.profiles).values({
        id: v4()
    }).returning()
    const authorId = _authorRecord.id

    const [_communityRecord] = await db.insert(schema.communities).values({
        id: v4(),
        name: `Community ${Math.random().toFixed(5)}`,
        description: "Test Community Description",
    }).returning()

    const communityId = _communityRecord.id

    const [_community_userRecord] = await db.insert(schema.community_user).values({
        user_id: authorId,
        community_id: communityId
    }).returning()

    const [_postRecord] = await db.insert(schema.posts).values({
        author_id: authorId,
        community_id: communityId,
        title: `Test Post`,
        content: ["Test Content"],
        media: {
            mediaType: "IMAGE",
            mediaUrl: ["https://example.com/image.jpg"],
            mediaPreview: {
                src: "https://example.com/image.jpg",
                meta: "Test Image"
            }
        },
        updatedAt: new Date()
    }).returning()

    const postId = _postRecord.id

    for (let i = 0; i < numberOfConcurrentUsers; i++) {
        const [concurrentUserRecord] = await db.insert(schema.profiles).values(
            { id: v4() }
        ).returning({
            id: schema.profiles.id
        })
        concurrentUserId[i] = concurrentUserRecord.id
        await db.insert(schema.community_user).values({
            user_id: concurrentUserId[i],
            community_id: communityId
        }).returning()
    }

    const release = async () => {

        await db.delete(schema.community_user).where(and(
            eq(schema.community_user.user_id, authorId), eq(schema.community_user.community_id, communityId)
        ))
        await db.delete(schema.posts).where(eq(schema.posts.id, postId))
        await db.delete(schema.communities).where(eq(schema.communities.id, communityId))
        await db.delete(schema.profiles).where(eq(schema.profiles.id, authorId))

        for (let i = 0; i < numberOfConcurrentUsers; i++) {
            await db.delete(schema.community_user).where(and(
                eq(schema.community_user.user_id, concurrentUserId[i]), eq(schema.community_user.community_id, communityId)
            ))
            await db.delete(schema.profiles).where(eq(schema.profiles.id, concurrentUserId[i]))
        }
    }

    return {
        postId,
        authorId,
        concurrentUserId,
        communityId,
        release
    }

}