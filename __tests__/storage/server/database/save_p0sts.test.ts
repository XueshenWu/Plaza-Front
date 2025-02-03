import { afterAll, beforeAll, it, test, expect } from "vitest";
import { createPost, getFeedsByTime2, queryPostReviewStatus, reducePostReview } from "@/storage/server/database/posts";
import { newDrizzle } from "@/storage/server/database/drizzle-client";
import { v4 } from "uuid";
import * as schema from "@/drizzle/schema";
import { beforeEach, describe } from "node:test";
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


describe('review post', async () => {
    let userId: string;
    let postId: string;
    let db: ReturnType<typeof newDrizzle>

    beforeAll(async () => {
        db = newDrizzle();

        
        const [_userRecord] = await db.insert(schema.profiles).values({
            id: v4()
        }).returning()
        userId = _userRecord.id


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

        postId = _postRecord.id

    })


    beforeEach(async () => {
        await db.update(schema.posts).set({
            upvotes: 0,
            downvotes: 0
        }).where(eq(schema.posts.id, postId))

        await db.update(schema.profiles).set({
            upvoted_posts: [],
            downvoted_posts: []
        }).where(eq(schema.profiles.id, userId))
    })


    it('should upvote a post', async () => {

        const res = await reducePostReview({
            userId,
            postId,
            action: 'up'
        })
        expect(res.reviewState).toBe('up')
        expect(res.upvotes).toBe(1)
        expect(res.downvotes).toBe(0)

        const postRecordAfter = await db.query.posts.findFirst({
            where: eq(schema.posts.id, postId)
        })

        expect(postRecordAfter).toBeTruthy()
        expect(postRecordAfter!.upvotes).toBe(1)

        const userPostReview = await db.query.profiles.findFirst({
            where: eq(schema.profiles.id, userId)
        })

        expect(userPostReview).toBeTruthy()
        expect(userPostReview!.upvoted_posts).toContain(postId)

    })

    it('should downvote a post', async () => {
        const res = await reducePostReview({
            userId,
            postId,
            action: 'down'
        })
        expect(res.reviewState).toBe('down')
        expect(res.upvotes).toBe(0)
        expect(res.downvotes).toBe(1)

        const postRecordAfter = await db.query.posts.findFirst({
            where: eq(schema.posts.id, postId)
        })

        expect(postRecordAfter).toBeTruthy()
        expect(postRecordAfter!.downvotes).toBe(1)

        const userPostReview = await db.query.profiles.findFirst({
            where: eq(schema.profiles.id, userId)
        })

        expect(userPostReview).toBeTruthy()
        expect(userPostReview!.downvoted_posts).toContain(postId)
    })

    it('should cancel action of a post', async () => {


 

        const res1 = await reducePostReview({
            userId,
            postId,
            action: 'up'
        })
        // console.log('res1', res1)
        expect(res1.reviewState).toBe('up')
        expect(res1.upvotes).toBe(1)
        expect(res1.downvotes).toBe(0)

        const res2 = await reducePostReview({
            userId,
            postId,
            action:'up'
        })
        // console.log('res2', res2)
        expect(res2.reviewState).toBe('none')
        expect(res2.upvotes).toBe(0)
        expect(res2.downvotes).toBe(0)

        const postRecordAfter = await db.query.posts.findFirst({
            where: eq(schema.posts.id, postId)
        })

        expect(postRecordAfter).toBeTruthy()
        expect(postRecordAfter!.upvotes).toBe(0)
        expect(postRecordAfter!.downvotes).toBe(0)

        const userPostReview = await db.query.profiles.findFirst({
            where: eq(schema.profiles.id, userId)
        })

        expect(userPostReview).toBeTruthy()
        expect(userPostReview!.upvoted_posts).not.toContain(postId)
        expect(userPostReview!.downvoted_posts).not.toContain(postId)
    })

    it('should convert upvote to downvote', async () => {
        await reducePostReview({
            userId,
            postId,
            action: 'up'
        })

        const res = await reducePostReview({
            userId,
            postId,
            action: 'down'
        })
        expect(res.reviewState).toBe('down')
        expect(res.upvotes).toBe(0)
        expect(res.downvotes).toBe(1)

        const postRecordAfter = await db.query.posts.findFirst({
            where: eq(schema.posts.id, postId)
        })

        expect(postRecordAfter).toBeTruthy()
        expect(postRecordAfter!.upvotes).toBe(0)
        expect(postRecordAfter!.downvotes).toBe(1)

        const userPostReview = await db.query.profiles.findFirst({
            where: eq(schema.profiles.id, userId)
        })

        expect(userPostReview).toBeTruthy()
        expect(userPostReview!.upvoted_posts).not.toContain(postId)
        expect(userPostReview!.downvoted_posts).toContain(postId)
    })

})


describe('should work fine with concurrent requests', async () => {


    let concurrentUserId1: string;
    let concurrentUserId2: string;
    let concurrentUserId3: string;
    let postId: string;
    let db: ReturnType<typeof newDrizzle>


    beforeAll(async () => {
        db = newDrizzle()
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

        postId = _postRecord.id

        const concurrentUserRecords = await db.insert(schema.profiles).values([
            { id: v4() },
            { id: v4() },
            { id: v4() }
        ]).returning({
            id: schema.profiles.id
        })
        concurrentUserId1 = concurrentUserRecords[0].id
        concurrentUserId2 = concurrentUserRecords[1].id
        concurrentUserId3 = concurrentUserRecords[2].id
    })


    it.concurrent("click upvote a post 3 times", async () => {
        const res = await Promise.all(Array(3).fill(0).map(async () => {
            return await reducePostReview({
                userId: concurrentUserId1,
                postId,
                action: 'up'
            })
        }))

        // effect : 1 upvote
        const userPostReview = await db.query.profiles.findFirst({
            where: eq(schema.profiles.id, concurrentUserId1)
        })
        expect(userPostReview).toBeTruthy()
        expect(userPostReview!.upvoted_posts).toContain(postId)
        expect(userPostReview!.downvoted_posts).not.toContain(postId)


    });

    it.concurrent("click downvote a post 5 times", async () => {
        await Promise.all(Array(5).fill(0).map(async () => {
            return await reducePostReview({
                userId: concurrentUserId2,
                postId,
                action: 'down'
            })
        }))
        // effect : 1 downvote
        const userPostReview = await db.query.profiles.findFirst({
            where: eq(schema.profiles.id, concurrentUserId2)
        })
        expect(userPostReview).toBeTruthy()
        expect(userPostReview!.downvoted_posts).toContain(postId)
    })

    it.concurrent("click upvote 8 times", async () => {
        await Promise.all(Array(8).fill(0).map(async () => {
            return reducePostReview({
                userId: concurrentUserId3,
                postId,
                action: 'up'
            })

        }))

        const userPostReview = await db.query.profiles.findFirst({
            where: eq(schema.profiles.id, concurrentUserId3)
        })
        expect(userPostReview).toBeTruthy()
        expect(userPostReview!.upvoted_posts).not.toContain(postId)
        expect(userPostReview!.downvoted_posts).not.toContain(postId)

    })

    afterAll(async () => {
        const postRecordAfterConcurrent = await db.query.posts.findFirst({
            where: eq(schema.posts.id, postId)
        })

 
        expect(postRecordAfterConcurrent).toBeTruthy()
        expect(postRecordAfterConcurrent!.upvotes).toBe(1)
        expect(postRecordAfterConcurrent!.downvotes).toBe(1)

        await db.delete(schema.profiles).where(eq(schema.profiles.id, concurrentUserId1))
        await db.delete(schema.profiles).where(eq(schema.profiles.id, concurrentUserId2))
        await db.delete(schema.profiles).where(eq(schema.profiles.id, concurrentUserId3))
    })


})


test('query review status', async () => {


    const db = newDrizzle();


    const [_userRecord] = await db.insert(schema.profiles).values({
        id: v4()
    }).returning()
    const userId = _userRecord.id


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

    await reducePostReview({
        userId,
        postId,
        action: 'up'
    })

    const res = await queryPostReviewStatus({
        userId,
        postId
    })
    expect(res).toBeTruthy()

    expect(res!.userReviewed).toBe('up')
    expect(res!.upvotes).toBe(1)
    expect(res!.downvotes).toBe(0)

    const anonRes = await queryPostReviewStatus({
        postId
    })
    expect(anonRes).toBeTruthy()
    expect(anonRes!.userReviewed).toBe('none')
    expect(anonRes!.upvotes).toBe(1)
    expect(anonRes!.downvotes).toBe(0)

    await db.delete(schema.posts).where(eq(schema.posts.id, postId))
    await db.delete(schema.profiles).where(eq(schema.profiles.id, userId))
    await db.delete(schema.profiles).where(eq(schema.profiles.id, authorId))
    await db.delete(schema.communities).where(eq(schema.communities.id, communityId))
    await db.delete(schema.community_user).where(eq(schema.community_user.user_id, authorId))

    
})


