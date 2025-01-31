'use server'


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
    
   

}