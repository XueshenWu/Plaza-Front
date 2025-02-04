'use server'

import { queryPostReviewStatus } from "@/storage/server/database/posts"
import { createClient } from "@/storage/supabase/supabase-svr"

export async function queryReviewStatus(postId: string) {

    const supabase = await createClient()
    const { data: { user }, error } = await supabase.auth.getUser()
    if (error) {
        throw error
    }


    return queryPostReviewStatus({ postId, userId: user?.id })
}