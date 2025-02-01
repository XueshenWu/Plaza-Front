'use server'


import { FeedCardProps } from "@/components/segment/feed-card"
import type { FeedPreviewProps } from "@/components/segment/feed-preview"
import { getFeedsByTime2 } from "@/storage/server/database/posts"
import { createClient } from "@/storage/supabase/supabase-svr"

export type GetFeedsParams = {
    filter?: {
        authorId?: string,
        communityId?: string,
        primary?: string,
        secondary?: string,
    },
    cursor?: {
        position: number,
        limit: number
    },
}
export async function getFeeds(params: GetFeedsParams & {
    type: "Preview"
}): Promise<FeedPreviewProps[]>;
export async function getFeeds(params: GetFeedsParams & {
    type: "Full"
}): Promise<FeedCardProps[]>;
export async function getFeeds({ filter = {}, cursor = {
    position: 0,
    limit: 5
}, type }: GetFeedsParams & {
    type: "Preview" | "Full"
}) {

    const supabase = await createClient()
    const { data: { user }, error } = await supabase.auth.getUser()
    if (error) {
        throw error
    }

    const userId = user?.id


    if (type === "Preview") {
        return getFeedsByTime2({
            userId,
            limit: cursor.limit,
            position: cursor.position,
            authorId: filter.authorId,
            communityId: filter.communityId,
            reversed: false,
            type
        })
    } else {
        return getFeedsByTime2({
            userId,
            limit: cursor.limit,
            position: cursor.position,
            authorId: filter.authorId,
            communityId: filter.communityId,
            reversed: false,
            type
        })

    }

}