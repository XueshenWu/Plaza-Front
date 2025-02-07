import { eq, inArray } from "drizzle-orm";
import { newDrizzle } from "./drizzle-client";
import * as schema from '@/drizzle/schema'
import { CommentNodeProps } from "@/components/segment/comment-node";



const case_map = (review?: "UP" | "DOWN" | "NONE") => {
    switch (review) {
        case "UP":
            return 'up'
        case "DOWN":
            return 'down'
        default:
            return 'none'
    }
}


// to be tested
export async function queryCommentNodesById(commentIds: string[], userId?: string) {

    const db = newDrizzle()

    const reviews = userId ? await db.query.comment_reviews.findMany({
        where: eq(schema.comment_reviews.user_id, userId),
    }) : [];

    const reviewsMap: Map<string, 'UP' | 'DOWN' | 'NONE'> = new Map(reviews.map((review) => [review.comment_id, review.review]))


    const res: CommentNodeProps[] = (await db.query.comments.findMany({
        where: inArray(schema.comments.id, commentIds),
        with: {
            profiles: true,
        }
    })).map((data) => ({
        id: data.id,
        author: {
            authorId: data.author_id,
            displayName: data.profiles.display_name,
            avatar: data.profiles.avatar
        },
        content: data.content,
        updatedAt: data.updatedAt,
        reviews: {
            commentChildren: data.children_comments,
            reviewPlateProps: {
                comments: NaN,
                upvotes: data.upvotes,
                downvotes: data.downvotes,
                targetId: data.id,
                userReviewed: case_map(reviewsMap.get(data.id))
            }

        }
    } satisfies CommentNodeProps))

    return res

}