'use server'
import { reducePostReview } from "@/storage/server/database/posts"
import { createClient } from "@/storage/supabase/supabase-svr"

export async function reduceReview(postId: string, action: "up" | "down"): ReturnType<typeof reducePostReview> {

    const supabase = await createClient()
    const { data: { user }, error } = await supabase.auth.getUser()
    if (error) {
        throw error
    }
    if (!user) {
        return {
            reviewState: "none",
            upvotes: 0,
            downvotes: 0,
            commentsCount: 0
        }
    }

    return reducePostReview({ postId, action, userId: user.id })
}