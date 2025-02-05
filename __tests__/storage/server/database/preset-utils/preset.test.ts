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
    let release = res.release

    it("should create a user, community and relation", async () => {
        const authorRecordAfter = await db.query.profiles.findFirst({
            where: eq(schema.profiles.id, userId)
        })

        expect(authorRecordAfter).toBeTruthy()

        const communityRecordAfter = await db.query.communities.findFirst({
            where: eq(schema.communities.id, communityId)
        })

        expect(communityRecordAfter).toBeTruthy()

        const cuRecordAfter = await db.query.community_user.findFirst({
            where: and(eq(schema.community_user.user_id, userId), eq(schema.community_user.community_id, communityId))
        })

        expect(cuRecordAfter).toBeTruthy()
    })

    it("should release all resources", async () => {

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

    it("should create a user, several communities, authors, relation and posts", async () => {
        const userRecordAfter = await db.query.profiles.findFirst({
            where: eq(schema.profiles.id, userId)
        })

        expect(userRecordAfter).toBeTruthy()

        for (let i = 0; i < numberOfCommunities; i++) {
            const communityRecordAfter = await db.query.communities.findFirst({
                where: eq(schema.communities.id, communities[i])
            })

            expect(communityRecordAfter).toBeTruthy()
        }

        for (let i = 0; i < numberOfAuthors; i++) {
            const authorRecordAfter = await db.query.profiles.findFirst({
                where: eq(schema.profiles.id, authors[i])
            })

            expect(authorRecordAfter).toBeTruthy()
        }

        for (let i = 0;i<numberOfCommunities;i++){
            const cuRecordAfter = await db.query.community_user.findFirst({
                where: and(eq(schema.community_user.user_id, userId), eq(schema.community_user.community_id, communities[i]))
            })

            expect(cuRecordAfter).toBeTruthy()
        }

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

    it("should release all resources", async () => {

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

    it("should create user, author, community, relation", async () => {
        const authorRecordAfter = await db.query.profiles.findFirst({
            where: eq(schema.profiles.id, authorId)
        })

        expect(authorRecordAfter).toBeTruthy()

        const userRecordAfter = await db.query.profiles.findFirst({
            where: eq(schema.profiles.id, userId)
        })

        expect(userRecordAfter).toBeTruthy()

        const communityRecordAfter = await db.query.communities.findFirst({
            where: eq(schema.communities.id, communityId)
        })

        expect(communityRecordAfter).toBeTruthy()

        const cuRecordAfter = await db.query.community_user.findFirst({
            where: and(eq(schema.community_user.user_id, authorId), eq(schema.community_user.community_id, communityId))
        })

        expect(cuRecordAfter).toBeTruthy()
    })

    it("should create and reset a post", async () => {
        const posetRecordAfter = await db.query.posts.findFirst({
            where: eq(schema.posts.id, postId)
        })

        expect(posetRecordAfter).toBeTruthy()

        await reset()

        const postRecordAfter = await db.query.posts.findFirst({
            where: eq(schema.posts.id, postId)
        })

        expect(postRecordAfter?.upvotes).toBe(0)
        expect(postRecordAfter?.downvotes).toBe(0)
    })

    it("should release the resources", async () => {

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

    it("should create all users, community, relations and post", async () => {
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

        const communityRecordAfter = await db.query.communities.findFirst({
            where: eq(schema.communities.id, communityId)
        })

        expect(communityRecordAfter).toBeTruthy()

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

        const postRecordAfter = await db.query.posts.findFirst({
            where: and(eq(schema.posts.id, postId), eq(schema.posts.author_id, authorId), eq(schema.posts.community_id, communityId))
        })

        expect(postRecordAfter).toBeTruthy()
    })

    it("should release all users and posts", async () => {

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