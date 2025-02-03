import { newDrizzle } from "@/storage/server/database/drizzle-client";
import * as schema from "@/drizzle/schema";
import { v4 } from "uuid";
import { and, eq } from "drizzle-orm";


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

    const clean = async () => {
        await db.delete(schema.profiles).where(eq(schema.profiles.id, userId))
        await db.delete(schema.communities).where(eq(schema.communities.id, communityId))
        await db.delete(schema.community_user).where(and(
            eq(schema.community_user.user_id, userId), eq(schema.community_user.community_id, communityId)
        ))
    }


    return {
        userId,
        communityId,
        clean
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
            await db.insert(schema.posts).values({
                author_id: authors[i],
                community_id: communities[j],
                title: `Test Post ${i}-${j}`,
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
            })

        }
    }

    const clean = async () => {
        for (let i = 0; i < numberOfAuthors; i++) {
            for (let j = 0; j < numberOfCommunities; j++) {
                await db.delete(schema.posts).where(and(
                    eq(schema.posts.author_id, authors[i]), eq(schema.posts.community_id, communities[j])
                ))
            }
            await db.delete(schema.profiles).where(eq(schema.profiles.id, authors[i]))
        }

        for (let i = 0; i < numberOfCommunities; i++) {
            await db.delete(schema.community_user).where(and(
                eq(schema.community_user.community_id, communities[i]), eq(schema.community_user.user_id, userId)))
            await db.delete(schema.communities).where(eq(schema.communities.id, communities[i]))
        }

        await db.delete(schema.profiles).where(eq(schema.profiles.id, userId))
    }

    return {
        userId,
        authors,
        communities,
        clean
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

    postId = _postRecord.id

    const clean = async () => {
        await db.delete(schema.posts).where(eq(schema.posts.id, postId))
        await db.delete(schema.communities).where(eq(schema.communities.id, communityId))
        await db.delete(schema.community_user).where(and(
            eq(schema.community_user.user_id, authorId), eq(schema.community_user.community_id, communityId)
        ))
        await db.delete(schema.profiles).where(eq(schema.profiles.id, userId))
        await db.delete(schema.profiles).where(eq(schema.profiles.id, authorId))
    }


    return {
        userId,
        postId,
        authorId,
        communityId,
        clean
    }
}

export async function useClearVotesPreset(userId: string, postId: string) {
    const db = newDrizzle()

    await db.update(schema.posts).set({
        upvotes: 0,
        downvotes: 0
    }).where(eq(schema.posts.id, postId))

    await db.update(schema.profiles).set({
        upvoted_posts: [],
        downvoted_posts: []
    }).where(eq(schema.profiles.id, userId))

}

export async function useConcurrentRequestsPreset() {

    const db = newDrizzle()

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

    const concurrentUserRecords = await db.insert(schema.profiles).values([
        { id: v4() },
        { id: v4() },
        { id: v4() }
    ]).returning({
        id: schema.profiles.id
    })
    const concurrentUserId1 = concurrentUserRecords[0].id
    const concurrentUserId2 = concurrentUserRecords[1].id
    const concurrentUserId3 = concurrentUserRecords[2].id

    const clean = async () => {
        
        await db.delete(schema.community_user).where(and(
            eq(schema.community_user.user_id, authorId), eq(schema.community_user.community_id, communityId)
        ))
        await db.delete(schema.posts).where(eq(schema.posts.id, postId))
        await db.delete(schema.communities).where(eq(schema.communities.id, communityId))
        await db.delete(schema.profiles).where(eq(schema.profiles.id, authorId))


        await db.delete(schema.profiles).where(eq(schema.profiles.id, concurrentUserId1))
        await db.delete(schema.profiles).where(eq(schema.profiles.id, concurrentUserId2))
        await db.delete(schema.profiles).where(eq(schema.profiles.id, concurrentUserId3))
    }

    return {
        postId,
        concurrentUserId1,
        concurrentUserId2,
        concurrentUserId3,
        clean
    }

}