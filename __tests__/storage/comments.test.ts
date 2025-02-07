import { afterAll, beforeAll, it, test, expect, afterEach } from "vitest";
import { queryCommentById, queryCommentByRootId } from "@/storage/server/database/comments";
import { addComment } from "@/storage/server/database/posts";
import { newDrizzle } from "@/storage/server/database/drizzle-client";
import * as schema from "@/drizzle/schema";
import { beforeEach, describe } from "node:test";
import { eq } from "drizzle-orm";
import { usePostPreset, useReviewPostPreset } from "./server/database/preset-utils/preset";

describe("queryComment", async () => {
    let authorId: string;
    let postId: string;
    let communityId: string;
    let commentId: string;
    let release: () => Promise<void>;
    let db: ReturnType<typeof newDrizzle>

    beforeAll(async () => {
        db = newDrizzle()

        const res = await useReviewPostPreset()
        postId = res.postId
        authorId = res.authorId
        communityId = res.communityId
        release = res.release

        commentId = await addComment({
            userId: authorId,
            content: "Text Content",
            target: {
                id: postId,
                type: "Post"
            }
        })??''

        expect(commentId).toBeTruthy()

    })

    afterAll(async() => {
        await db.delete(schema.comments).where(eq(schema.comments.id, commentId));
    })

    it("should get post by id", async () => {
        const res = await queryCommentById(commentId!)
        expect(res).toBeTruthy()
    })

    it("should get post by root id", async () => {
        const res = await queryCommentByRootId(postId)
        expect(res).toBeTruthy()
    })
})