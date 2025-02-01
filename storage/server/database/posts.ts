import { and, asc, desc, eq, isNull, lte, or } from "drizzle-orm";
import { newDrizzle } from "./drizzle-client";
import * as schema from "@/drizzle/schema";
import { FeedPreviewProps } from "@/components/segment/feed-preview";
import { queryCommunity, queryUserCommunities } from "./communities";


function parseMediaJsonb(media: unknown) {
    return media as {
        mediaType: | "VIDEO" | "IMAGE" | "EXTERNAL_LINK",
        mediaUrl: string[],
        mediaPreview: {
            src: string,
            meta: string
        }
    }
}


export async function queryUserReviews(userId: string) {
    const db = newDrizzle()
    const res = await db.query.profiles.findFirst({
        where: eq(schema.profiles.id, userId),
        columns: {
            upvoted_posts: true,
            downvoted_posts: true
        }
    })
    return res
}


export async function queryPostById(id: string) {
    const db = newDrizzle()
    const res = await db.query.posts.findFirst({
        where: eq(schema.posts.id, id)
    })
    return res
}



type Cursor = {
    position: Date,
    limit: number,
    reversed?: boolean
}

export async function getFeedsPreviewByTime({ position, limit, reversed = false, userId, }: Cursor & { userId: string }): Promise<FeedPreviewProps[]> {
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



    const userSubscribedCommunity = await db.query.community_user.findMany({
        where: eq(schema.community_user.user_id, userId),
    })


    const userReviewedPosts = await queryUserReviews(userId)


    const subscriptionSet = userSubscribedCommunity ? new Set(userSubscribedCommunity.map(sub => sub.community_id)) : new Set()
    const upvotedSet = userReviewedPosts?.upvoted_posts ? new Set(userReviewedPosts.upvoted_posts) : new Set()
    const downvotedSet = userReviewedPosts?.downvoted_posts ? new Set(userReviewedPosts.downvoted_posts) : new Set()



    const resultMap = new Map<string, FeedPreviewProps>()

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
                    preview: post.media.mediaPreview.src,
                    meta: post.media.mediaPreview.meta
                } : null
            }
        })
    })

    return Array.from(resultMap.values())





}


export async function getFeedsPreviewFromCommunityByTime({ position, limit, reversed = false, userId, communityId }: Cursor & { userId: string, communityId: string }): Promise<FeedPreviewProps[]> {
    const db = newDrizzle()

    const community = await queryCommunity(communityId)
    if (!community) {
        throw new Error("Community not found")
    }

    const posts = (await db
        .select(
            {
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
            }
        )
        .from(schema.posts)
        .where(and(lte(schema.posts.createdAt, position), eq(schema.posts.community_id, communityId)))
        .limit(limit)
        .orderBy(reversed ? asc(schema.posts.createdAt) : desc(schema.posts.createdAt))
    ).map(post => ({
        ...post,
        media: post.media ? parseMediaJsonb(post.media) : null,
    }))

    const userReviewedPosts = await queryUserReviews(userId)

    const upvotedSet = userReviewedPosts?.upvoted_posts ? new Set(userReviewedPosts.upvoted_posts) : new Set()
    const downvotedSet = userReviewedPosts?.downvoted_posts ? new Set(userReviewedPosts.downvoted_posts) : new Set()


    return posts.map(post => ({
        meta: {
            post: {
                updatedAt: post.updatedAt.toLocaleDateString(),
                createdAt: post.createdAt?.toLocaleDateString(),
                postId: post.postId,
                isUserSubscribed: true
            },
            community: {
                communityId: community.id,
                communityName: community.name,
                communityIcon: community.icon

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
                preview: post.media.mediaPreview.src,
                meta: post.media.mediaPreview.meta
            } : null
        }
    }))
}






export async function createPost(
    authorId: string,
    communityId: string,
    title: string,
    content: string[],
    media?: {
        mediaType: "VIDEO" | "IMAGE" | "EXTERNAL_LINK",
        mediaUrl: string[],
        mediaPreview: {
            src: string,
            meta: string
        }
    },
): Promise<boolean> {
    const db = newDrizzle()

    const [res] = await db.insert(schema.posts).values({
        author_id: authorId,
        community_id: communityId,
        title,
        content,
        updatedAt: new Date(),
        media: media ? {
            mediaType: media.mediaType,
            mediaUrl: media.mediaUrl,
            mediaPreview: {
                src: media.mediaPreview.src,
                meta: media.mediaPreview.meta
            }
        } : undefined
    }).returning()

    if (!res || res.author_id !== authorId || res.community_id !== communityId) {
        console.log("Failed to create post")
        return false
    }

    return true
}