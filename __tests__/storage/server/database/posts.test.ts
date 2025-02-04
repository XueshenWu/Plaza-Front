import { afterAll, beforeAll, it, test, expect } from "vitest";
import { addComment, createPost, getFeedsByTime2, queryPostReviewStatus, reducePostReview } from "@/storage/server/database/posts";
import { newDrizzle } from "@/storage/server/database/drizzle-client";
import { v4 } from "uuid";
import * as schema from "@/drizzle/schema";
import { beforeEach, describe } from "node:test";
import { eq } from "drizzle-orm";
import { useClearVotesPreset, useConcurrentRequestsPreset, useFeedPreset, usePostPreset, useReviewPostPreset } from "./preset-utils/preset";


describe('createPost', async () => {


    let userId: string;
    let communityId: string;
    let release: () => Promise<void>;
    let db: ReturnType<typeof newDrizzle>

    beforeAll(async () => {
        db = newDrizzle()

        const res = await usePostPreset()
        userId = res.userId
        communityId = res.communityId
        release = res.release

    })

    it('should create a post with plain content', async () => {
        const res = await createPost(userId, communityId, "Test Post", ["Test Content"])

        expect(res).toBeTruthy()

        // await db.delete(schema.posts).where(eq(schema.posts.author_id, userId))

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

        // await db.delete(schema.posts).where(eq(schema.posts.author_id, userId))

    })



    it('should not create a post if user is not subscribed to the community', async () => {
        const [newUserRecord] = await db.insert(schema.profiles).values({
            id: v4()
        }).returning()
        const newUserId = newUserRecord.id

        const res = await createPost(newUserId, communityId, "Test Post", ["Test Content"])
        expect(res).toBeFalsy()

        // await db.delete(schema.profiles).where(eq(schema.profiles.id, newUserId))

    })


    afterAll(async () => {
        await release()
    })


})


describe("getFeed", async () => {

    const numberOfAuthors = 3; // 3 authors
    const numberOfCommunities = 2; // 2 communities

    let authors = new Array<string>(numberOfAuthors);
    let communities = new Array<string>(numberOfCommunities);

    let userId: string;
    let db: ReturnType<typeof newDrizzle>;
    let clean: () => Promise<void>;

    beforeAll(async () => {

        db = newDrizzle()

        const res = await useFeedPreset(numberOfAuthors, numberOfCommunities)

        userId = res.userId
        authors = res.authors
        communities = res.communities
        clean = res.clean

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

    afterAll(async () => {
        await clean()
    })
})


describe('review post', async () => {
    let userId: string;
    let postId: string;
    let db: ReturnType<typeof newDrizzle>
    let clean: () => Promise<void>

    beforeAll(async () => {
        db = newDrizzle();

        const res = await useReviewPostPreset()
        userId = res.userId
        postId = res.postId
        clean = res.clean

    })


    beforeEach(async () => {
        useClearVotesPreset(userId, postId)
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
            action: 'up'
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

    afterAll(async () => {
        await clean()
    })

})


describe('should work fine with concurrent requests', async () => {


    let concurrentUserId1: string;
    let concurrentUserId2: string;
    let concurrentUserId3: string;
    let postId: string;
    let db: ReturnType<typeof newDrizzle>
    let clean: () => Promise<void>


    beforeAll(async () => {
        db = newDrizzle()

        const res = await useConcurrentRequestsPreset()
        postId = res.postId
        concurrentUserId1 = res.concurrentUserId1
        concurrentUserId2 = res.concurrentUserId2
        concurrentUserId3 = res.concurrentUserId3
        clean = res.clean

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

        await clean()
    })


})

// TODO: modify this?
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



describe('comment a post', () => {

    let userId: string;
    let postId: string;
    let db: ReturnType<typeof newDrizzle>

    //TODO: Release and Clean function
    let clean: () => Promise<void>

    beforeAll(async () => {
        db = newDrizzle();

        const res = await useReviewPostPreset()
        userId = res.userId
        postId = res.postId
        clean = res.clean
    })

    it('should comment on a post', async () => {


        const commentContent = v4()

        const commentId = await addComment({
            userId,
            target: {
                type: 'Post',
                id: postId
            },
            content: commentContent
        })

        expect(commentId).toBeTruthy()

        const commentRecord = await db.query.comments.findFirst({
            where: eq(schema.comments.id, commentId!)
        })

        expect(commentRecord).toBeTruthy()
        expect(commentRecord!.content).toBe(commentContent)
        expect(commentRecord!.author_id).toBe(userId)
        expect(commentRecord!.root_id).toBe(postId)

        const postRecord = await db.query.posts.findFirst({
            where: eq(schema.posts.id, postId)
        })

        expect(postRecord?.comments_count).toBe(1)


        await db.delete(schema.comments).where(eq(schema.comments.id, commentId!))
        await db.update(schema.posts).set({
            comments_count: 0
        }).where(eq(schema.posts.id, postId))

    })

    it('shoud comment on a comment', async () => {

        const [parentComment] = await db.insert(schema.comments).values({
            author_id: userId,
            content: "Parent Comment",
            root_id: postId
        }).returning()


        const commentContent = v4()

        const commentId = await addComment({
            userId,
            target: {
                type: 'Comment',
                id: parentComment.id
            },
            content: commentContent
        })

        expect(commentId).toBeTruthy()

        const commentRecord = await db.query.comments.findFirst({
            where: eq(schema.comments.id, commentId!)
        })

        expect(commentRecord).toBeTruthy()
        expect(commentRecord!.content).toBe(commentContent)
        expect(commentRecord!.author_id).toBe(userId)
        expect(commentRecord!.root_id).toBe(postId)
        expect(commentRecord!.parent_id).toBe(parentComment.id)

        const postRecord = await db.query.posts.findFirst({
            where: eq(schema.posts.id, postId)
        })

        expect(postRecord?.comments_count).toBe(1)


        await db.delete(schema.comments).where(eq(schema.comments.id, commentId!))
        await db.delete(schema.comments).where(eq(schema.comments.id, parentComment.id))
        await db.update(schema.posts).set({
            comments_count: 0
        }).where(eq(schema.posts.id, postId))

    })


    afterAll(async () => {
        await clean()
    })


})



describe('comment on a post with concurrent requests', () => {
    let userIds: string[];
    let postId: string;
    let db: ReturnType<typeof newDrizzle>
    const garbage: string[] = []
    //Release and Clean function
    let clean: () => Promise<void>

    beforeAll(async () => {
        db = newDrizzle();

        //TODO:add parameters
        const res = await useConcurrentRequestsPreset()
        userIds = [res.concurrentUserId1, res.concurrentUserId2, res.concurrentUserId3]
        postId = res.postId
        clean = res.clean
    })


    it.concurrent('single user comment on a post 5 times', async () => {
        const res = await Promise.all(Array(5).fill(0).map(async (_, i) => {
            return await addComment({
                userId: userIds[1],
                target: {
                    type: 'Post',
                    id: postId
                },
                content: `Comment ${i}`
            })
        }))

        // 5 in total

        expect(res.filter(id => id !== null).length).toBe(5)
        garbage.push(...res.filter(id => id !== null))
    })

    it.concurrent('multiple user comment on a post', async () => {
        const res = await Promise.all(userIds.map(async (userId, i) => {
            return await addComment({
                userId,
                target: {
                    type: 'Post',
                    id: postId
                },
                content: `Comment ${i}`
            })
        }))
        // 3 in total
        expect(res.filter(id => id !== null).length).toBe(3)
        garbage.push(...res.filter(id => id !== null))

    })

    afterAll(async () => {
        const postRecord = await db.query.posts.findFirst({
            where: eq(schema.posts.id, postId)
        })

        expect(postRecord?.comments_count).toBe(8)

        await clean()
        garbage.forEach(async (id) => {
            await db.delete(schema.comments).where(eq(schema.comments.id, id))
        })


    });

})