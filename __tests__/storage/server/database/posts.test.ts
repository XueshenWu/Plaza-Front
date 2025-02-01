import { afterAll, beforeAll, it, test, expect } from "vitest";
import { createPost, getFeedsByTime2 } from "@/storage/server/database/posts";
import { newDrizzle } from "@/storage/server/database/drizzle-client";
import { v4 } from "uuid";
import * as schema from "@/drizzle/schema";
import { describe } from "node:test";
import { eq } from "drizzle-orm";




describe('createPost', async () => {


    let userId: string;
    let communityId: string;
    let db: ReturnType<typeof newDrizzle>

    beforeAll(async () => {
        db = newDrizzle()
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


    })

    it('should create a post with plain content', async () => {
        const res = await createPost(userId, communityId, "Test Post", ["Test Content"])

        expect(res).toBeTruthy()

        await db.delete(schema.posts).where(eq(schema.posts.author_id, userId))

    })

    it('should create a post with media ', async () => {
        const res = await createPost(userId, communityId, "Test Post", ["Test Content"], {
            mediaType: "IMAGE",
            mediaUrl: ["https://example.com/image.jpg"],
            mediaPreview: {
                src: "https://example.com/image.jpg",
                meta: "Test Image"
            }
        })

        expect(res).toBeTruthy()

        await db.delete(schema.posts).where(eq(schema.posts.author_id, userId))

    })



    it('should not create a post if user is not subscribed to the community', async () => {
        const [newUserRecord] = await db.insert(schema.profiles).values({
            id: v4()
        }).returning()
        const newUserId = newUserRecord.id

        const res = await createPost(newUserId, communityId, "Test Post", ["Test Content"])
        expect(res).toBeFalsy()

        await db.delete(schema.profiles).where(eq(schema.profiles.id, newUserId))

    })


    afterAll(async () => {
        const db = newDrizzle()
        await db.delete(schema.profiles).where(eq(schema.profiles.id, userId))
        await db.delete(schema.communities).where(eq(schema.communities.id, communityId))

    })


})


describe("getFeed", async () => {

    const authors = new Array<string>(3); // 3 authors
    const communities = new Array<string>(2); // 2 communities

    let userId: string;
    let db: ReturnType<typeof newDrizzle>;

    beforeAll(async () => {

        db = newDrizzle()

        const [_userRecord] = await db.insert(schema.profiles).values({
            id: v4()
        }).returning()
        userId = _userRecord.id

        for (let i = 0; i < 2; i++) {
            const [_communityRecord] = await db.insert(schema.communities).values({
                id: v4(),
                name: `Community ${Math.random().toFixed(5)}`,
                description: "Test Community Description",
            }).returning()
            communities[i] = _communityRecord.id
        }

        for (let i = 0; i < 3; i++) {
            const [_userRecord] = await db.insert(schema.profiles).values({
                id: v4()
            }).returning()
            authors[i] = _userRecord.id
        }

        // subscribe user to communities
        for (let i = 0; i < 2; i++) {
            const [_community_userRecord] = await db.insert(schema.community_user).values({
                user_id: userId,
                community_id: communities[i]
            }).returning()
        }

        // each author creates a post in each community
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 2; j++) {
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

    })


    it('should get feed from all posts', async () => {

        const res = await getFeedsByTime2({
            userId,
            limit: 10,
            position: 0,
            type: "Preview",
        })

        expect(res.length).gte(6)

    })

    it('should get feed from all posts with specified limit', async () => {
        const res = await getFeedsByTime2({
            userId,
            limit: 3,
            position: 4,
            type: "Preview",
        })

        expect(res.length).gte(3)
    })

    it('should get feed length 0 from all posts with position+limit > length ', async () => {
        const res = await getFeedsByTime2({
            userId,
            limit: 100,
            position: 600,
            type: "Preview",
        })

        expect(res).toHaveLength(0)
    })

    it('should get feed from specific community', async () => {
        const res = await getFeedsByTime2({
            userId,
            limit: 10,
            position: 0,
            type: "Preview",
            communityId: communities[0]
        })

        expect(res).toHaveLength(3)
    })

    it('should get feed from specific author', async () => {
        const res = await getFeedsByTime2({
            userId,
            limit: 10,
            position: 0,
            type: "Preview",
            authorId: authors[0]
        })

        expect(res).toHaveLength(2)
    })

    it('should get feed from specific author and community', async () => {
        const res = await getFeedsByTime2({
            userId,
            limit: 10,
            position: 0,
            type: "Preview",
            authorId: authors[0],
            communityId: communities[0]
        })

        expect(res).toHaveLength(1)
    })






})


