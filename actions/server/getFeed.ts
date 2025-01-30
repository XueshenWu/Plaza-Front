'use server'
import { PrismaClient as _PgClient } from "@/prisma/postgres/postgres-client"

import type { FeedPreviewProps } from "@/components/segment/feed-preview"

type getFeedsParams = {
    filter?: {
        communityId?: string,
        primary?: string,
        secondary?: string
    },
    cursor?: {
        position: number,
        limit: number
    },
    type:"preview" | "full"
}


export async function getFeeds({ filter, cursor, type }: getFeedsParams) {
    const { communityId, primary, secondary } = filter ?? {}
    const { position, limit } = cursor ?? { position: 0, limit: 5 }

    const pgClient = new _PgClient()

    const posts = await pgClient.posts.findMany({
        where: {
            community_id: communityId,
            
        },
        skip: position,
        take: limit,
        omit:{
            createdAt:true,
            mediaUrls:true,
        },
        
    })

    if(type==='preview'){
        posts.map(post=>({
            meta:{
                post:{
                    postId:post.id,
                    updatedAt:post.updatedAt,
                    createdAt:post.updatedAt,
                },
                community:{
                    communityId:post.community_id,
                    communityName:post.community_name,
                    communityIcon:post.community_icon
                },
                review:{
                    rating:post.rating,
                    reviewCount:post.reviewCount,
                    reviewCountText:post.reviewCountText
                }
            },
            content:{
                title:post.title,
                media:{
                    type:post.mediaType,
                    url:post.mediaUrl
                }
            }
        }))
    }

}