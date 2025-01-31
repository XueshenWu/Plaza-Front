import { asc, desc, eq, isNull, lte, or } from "drizzle-orm";
import { newDrizzle } from "./drizzle-client";
import * as schema from "@/drizzle/schema";
import { FeedPreviewProps } from "@/components/segment/feed-preview";


function parseMediaJsonb(media: unknown) {
    return media as {
        mediaType: | "VIDEO" | "IMAGE" | "EXTERNAL_LINK",
        mediaUrl: string[],
        mediaPreview: {
            link: string,
            meta: string
        }
    }
}


export async function queryPostById(id: string) {
    const db = newDrizzle()
    const res = await db.query.posts.findFirst({
        where: eq(schema.posts.id, id)
    })
    return res
}

type getFeedsParams = {
    filter: {
        communityId?: string,
        primary?: string,
        secondary?: string
    },
    cursor: {
        position: Date,
        limit: number,
        reversed?: boolean
    },
    type: "preview" | "full",
    userId: string
}

type Cursor = {
    position: Date,
    limit: number,
    reversed?: boolean
}

export async function getFeedPreviewByTimeCursor({ position, limit, reversed = false, userId, }: Cursor & { userId: string }) {
    const db = newDrizzle()
    const posts = (await db
        .select({
            updatedAt: schema.posts.updatedAt,
            createdAt: schema.posts.createdAt,
            postId: schema.posts.id,

            communityId: schema.communities.id,
            communityName: schema.communities.name,
            communityIcon: schema.communities.icon,

            upvotes: schema.posts.upvotes,
            downvotes: schema.posts.downvotes,
            comments: schema.posts.comments_count,

            title: schema.posts.title,
            media: schema.posts.media,
        })
        .from(schema.posts)
        .where(lte(schema.posts.createdAt, position))
        .limit(limit)
        .orderBy(reversed ? asc(schema.posts.createdAt) : desc(schema.posts.createdAt))
        .innerJoin(schema.communities, eq(schema.posts.community_id, schema.communities.id)))
        .map(post => ({
            ...post,
            media: post.media ? parseMediaJsonb(post.media) : null,
        }))



    const userSubscribedCommunity = await db
        .select()
        .from(schema.community_user)
        .where(eq(schema.community_user.user_id, userId))



    const userReviewedPosts = await db.query.profiles.findFirst({
        where: eq(schema.profiles.id, userId),
        columns: {
            upvoted_posts: true,
            downvoted_posts: true
        }
    })


    const subscriptionSet = new Set(userSubscribedCommunity.map(sub => sub.community_id))
    const upvotedSet = userReviewedPosts?.upvoted_posts ? new Set(userReviewedPosts.upvoted_posts) : new Set()
    const downvotedSet = userReviewedPosts?.downvoted_posts ? new Set(userReviewedPosts.downvoted_posts) : new Set()

    type ResultType = FeedPreviewProps

    const resultMap = new Map<string, ResultType>()

    posts.forEach(post => {
        resultMap.set(post.postId, {
            meta: {
                post: {
                    updatedAt: post.updatedAt.toLocaleDateString(),
                    createdAt: post.createdAt?.toLocaleDateString(),
                    postId: post.postId,
                    isUserSubscribed: subscriptionSet.has(post.communityId)
                },
                community: {
                    communityId: post.communityId,
                    communityName: post.communityName,
                    communityIcon: post.communityIcon
                },
                review: {
                    comments: post.comments,
                    upvotes: post.upvotes,
                    downvotes: post.downvotes,
                    userReviewed: upvotedSet.has(post.postId) ? "up" : downvotedSet.has(post.postId) ? "down" : "none"
                }
            },
            content: {
                title: post.title,
                media: post.media ? {
                    type: post.media.mediaType,
                    preview: post.media.mediaPreview.link,
                    meta: post.media.mediaPreview.meta
                } : null
            }
        })
    })

    return Array.from(resultMap.values())





}


export async function getFeedsFromCommunity({ filter, cursor, type, userId }: getFeedsParams) {
    const db = newDrizzle()
    const { communityId, primary, secondary } = filter
    const { position, limit } = cursor

    if (communityId) {

    }

    // const feeds = db
    //     .select()
    //     .from(schema.community_user)
    //     .leftJoin(,
    //         eq(schema.posts.community_id, schema.community_user.community_id)
    //     )




}