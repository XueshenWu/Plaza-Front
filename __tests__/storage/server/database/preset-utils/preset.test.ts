import { describe, expect, it, test } from "vitest";
import { useConcurrentRequestsPreset, useFeedPreset, usePostPreset, useReviewPostPreset } from "./preset";
import { newDrizzle } from "@/storage/server/database/drizzle-client";
import { and, eq } from "drizzle-orm";
import * as schema from "@/drizzle/schema";
import { createPost } from "@/storage/server/database/posts";
import { number } from "zod";


describe("preset method for post method", async () => {
    const db = newDrizzle()
    const res = await usePostPreset()
    let userId = res.userId
    let communityId = res.communityId
    let reset = res.reset
    let release = res.release

    it("should create a user", async () => {
        const authorRecordAfter = await db.query.profiles.findFirst({
            where: eq(schema.profiles.id, userId)
        })

        expect(authorRecordAfter).toBeTruthy()
    })

    it("should create a community", async () => {
        const communityRecordAfter = await db.query.communities.findFirst({
            where: eq(schema.communities.id, communityId)
        })

        expect(communityRecordAfter).toBeTruthy()
    })

    it("should create the relation", async () => {
        const cuRecordAfter = await db.query.community_user.findFirst({
            where: and(eq(schema.community_user.user_id, userId), eq(schema.community_user.community_id, communityId))
        })

        expect(cuRecordAfter).toBeTruthy()
    })

    it("should reset the post", async () => {
        const posetRecordAfter = await db.query.posts.findFirst({
            where: and(eq(schema.posts.author_id, userId), eq(schema.posts.community_id, communityId))
        })

        expect(posetRecordAfter).toBeTruthy()

        await reset()

        const postRecordAfter = await db.query.posts.findFirst({
            where: eq(schema.posts.author_id, userId)
        })

        expect(postRecordAfter).toBeFalsy()
    })

    it("should release all post", async () => {

        await release()

        const authorRecordAfter = await db.query.profiles.findFirst({
            where: eq(schema.profiles.id, userId)
        })

        expect(authorRecordAfter).toBeFalsy()

        const communityRecordAfter = await db.query.communities.findFirst({
            where: eq(schema.communities.id, communityId)
        })

        expect(communityRecordAfter).toBeFalsy()

        const cuRecordAfter = await db.query.community_user.findFirst({
            where: and(eq(schema.community_user.user_id, userId), eq(schema.community_user.community_id, communityId))
        })

        expect(cuRecordAfter).toBeFalsy()
    })


});

describe("preset for get feed method", async () => {
    const db = newDrizzle()
    const numberOfAuthors = 2
    const numberOfCommunities = 3
    const res = await useFeedPreset(numberOfAuthors, numberOfCommunities)
    let userId = res.userId
    let authors = Array<string>(numberOfAuthors);
    authors = res.authors
    let communities = Array<string>(numberOfCommunities);
    communities = res.communities
    let release = res.release

    it("should create a user", async () => {
        const userRecordAfter = await db.query.profiles.findFirst({
            where: eq(schema.profiles.id, userId)
        })

        expect(userRecordAfter).toBeTruthy()
    })

    it("should create several communities", async () => {
        for (let i = 0; i < numberOfCommunities; i++) {
            const communityRecordAfter = await db.query.communities.findFirst({
                where: eq(schema.communities.id, communities[i])
            })

            expect(communityRecordAfter).toBeTruthy()
        }
    })

    it("should create several authors", async () => {
        for (let i = 0; i < numberOfAuthors; i++) {
            const authorRecordAfter = await db.query.profiles.findFirst({
                where: eq(schema.profiles.id, authors[i])
            })

            expect(authorRecordAfter).toBeTruthy()
        }
    })

    it("should create the relation and post", async () => {
        for (let i = 0; i < numberOfAuthors; i++) {
            for (let j = 0; j < numberOfCommunities; j++) {
                const cuRecordAfter = await db.query.community_user.findFirst({
                    where: and(eq(schema.community_user.user_id, authors[i]), eq(schema.community_user.community_id, communities[j]))
                })

                expect(cuRecordAfter).toBeTruthy()

                const postRecordAfter = await db.query.posts.findFirst({
                    where: eq(schema.posts.author_id, authors[i])
                })

                expect(postRecordAfter).toBeTruthy()
            }
        }

    })

    it("should release all post", async () => {

        await release()

        const userRecordAfter = await db.query.profiles.findFirst({
            where: eq(schema.profiles.id, userId)
        })

        expect(userRecordAfter).toBeFalsy()

        for (let i = 0; i < numberOfAuthors; i++) {
            for (let j = 0; j < numberOfCommunities; j++) {
                const cuRecordAfter = await db.query.community_user.findFirst({
                    where: and(eq(schema.community_user.user_id, authors[i]), eq(schema.community_user.community_id, communities[j]))
                })

                expect(cuRecordAfter).toBeFalsy()
            }

            const postRecordAfter = await db.query.posts.findFirst({
                where: eq(schema.posts.author_id, authors[i])
            })

            expect(postRecordAfter).toBeFalsy()

            const authorRecordAfter = await db.query.profiles.findFirst({
                where: eq(schema.profiles.id, authors[i])
            })

            expect(authorRecordAfter).toBeFalsy()
        }
    })

});

describe("preset for review post method", async () => {

    const db = newDrizzle()
    const res = await useReviewPostPreset()
    let userId = res.userId
    let postId = res.postId
    let authorId = res.authorId
    let communityId = res.communityId
    let release = res.release
    let reset = res.reset

    it("should create user and author", async () => {
        const authorRecordAfter = await db.query.profiles.findFirst({
            where: eq(schema.profiles.id, authorId)
        })

        expect(authorRecordAfter).toBeTruthy()

        const userRecordAfter = await db.query.profiles.findFirst({
            where: eq(schema.profiles.id, userId)
        })

        expect(userRecordAfter).toBeTruthy()
    })

    it("should create a community", async () => {
        const communityRecordAfter = await db.query.communities.findFirst({
            where: eq(schema.communities.id, communityId)
        })

        expect(communityRecordAfter).toBeTruthy()
    })

    it("should create the relation", async () => {
        const cuRecordAfter = await db.query.community_user.findFirst({
            where: and(eq(schema.community_user.user_id, authorId), eq(schema.community_user.community_id, communityId))
        })

        expect(cuRecordAfter).toBeTruthy()
    })

    it("should create a post", async () => {
        const posetRecordAfter = await db.query.posts.findFirst({
            where: eq(schema.posts.id, postId)
        })

        expect(posetRecordAfter).toBeTruthy()
    })

    it("should reset the post", async () => {
        await reset()

        const postRecordAfter = await db.query.posts.findFirst({
            where: eq(schema.posts.id, postId)
        })

        expect(postRecordAfter?.upvotes).toBe(0)
        expect(postRecordAfter?.downvotes).toBe(0)
    })

    it("should release the post", async () => {

        await release()

        const postRecordAfter = await db.query.posts.findFirst({
            where: eq(schema.posts.id, postId)
        })

        expect(postRecordAfter).toBeFalsy()

        const cuRecordAfter = await db.query.community_user.findFirst({
            where: and(eq(schema.community_user.user_id, userId), eq(schema.community_user.community_id, communityId))
        })

        expect(cuRecordAfter).toBeFalsy()

        const userRecordAfter = await db.query.profiles.findFirst({
            where: eq(schema.profiles.id, userId)
        })

        expect(userRecordAfter).toBeFalsy()

        const authorRecordAfter = await db.query.profiles.findFirst({
            where: eq(schema.profiles.id, authorId)
        })

        expect(authorRecordAfter).toBeFalsy()

        const communityRecordAfter = await db.query.communities.findFirst({
            where: eq(schema.communities.id, communityId)
        })

        expect(communityRecordAfter).toBeFalsy()


    })

})

describe("preset for concurrent request", async () => {
    const db = newDrizzle()
    const numberOfConcurrentUsers = 3
    const res = await useConcurrentRequestsPreset(numberOfConcurrentUsers)
    let concurrentUserId = res.concurrentUserId
    let postId = res.postId
    let authorId = res.authorId
    let communityId = res.communityId
    let release = res.release

    it("should create all users", async () => {
        for (let i = 0; i < numberOfConcurrentUsers; i++) {
            const userRecordAfter = await db.query.profiles.findFirst({
                where: eq(schema.profiles.id, concurrentUserId[i])
            })

            expect(userRecordAfter).toBeTruthy()
        }

        const authorRecordAfter = await db.query.profiles.findFirst({
            where: eq(schema.profiles.id, authorId)
        })

        expect(authorRecordAfter).toBeTruthy()
    })

    it("should create the relation to community", async () => {
        for (let i = 0; i < numberOfConcurrentUsers; i++) {
            const cuRecordAfter = await db.query.community_user.findFirst({
                where: and(eq(schema.community_user.user_id, concurrentUserId[i]), eq(schema.community_user.community_id, communityId))
            })

            expect(cuRecordAfter).toBeTruthy()
        }

        const cuRecordAfter = await db.query.community_user.findFirst({
            where: and(eq(schema.community_user.user_id, authorId), eq(schema.community_user.community_id, communityId))
        })
        
        expect(cuRecordAfter).toBeTruthy()

    })

    
    it("should create a post", async () => {

        const postRecordAfter = await db.query.posts.findFirst({
            where: and(eq(schema.posts.id, postId), eq(schema.posts.author_id, authorId), eq(schema.posts.community_id, communityId))
        })

        expect(postRecordAfter).toBeTruthy()
    })

    it("should release all users", async () => {

        await release()

        for (let i = 0; i < numberOfConcurrentUsers; i++) {
            const userRecordAfter = await db.query.profiles.findFirst({
                where: eq(schema.profiles.id, concurrentUserId[i])
            })

            expect(userRecordAfter).toBeFalsy()

            const cuRecordAfter = await db.query.community_user.findFirst({
                where: and(eq(schema.community_user.user_id, concurrentUserId[i]), eq(schema.community_user.community_id, communityId))
            })

            expect(cuRecordAfter).toBeFalsy()
        }

        const authorRecordAfter = await db.query.profiles.findFirst({
            where: eq(schema.profiles.id, authorId)
        })

        expect(authorRecordAfter).toBeFalsy()

        const cuRecordAfter = await db.query.community_user.findFirst({
            where: and(eq(schema.community_user.user_id, authorId), eq(schema.community_user.community_id, communityId))
        })

        expect(cuRecordAfter).toBeFalsy()

        const postRecordAfter = await db.query.posts.findFirst({
            where: and(eq(schema.posts.id, postId), eq(schema.posts.author_id, authorId), eq(schema.posts.community_id, communityId))
        })

        expect(postRecordAfter).toBeFalsy()

    })

});