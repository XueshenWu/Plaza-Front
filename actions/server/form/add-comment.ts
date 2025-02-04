'use server'

import { addComment } from "@/storage/server/database/posts"
import { createClient } from "@/storage/supabase/supabase-svr"


export async function submitComment({ target, content }: {
    target: {
        id: string,
        type: 'Post' | 'Comment'
    }, content: string
}) {
    const supabase = await createClient()

    const { data: { user }, error } = await supabase.auth.getUser()

    if (error || !user) {
        throw new Error('User not found')
    }

    return await addComment({
        target,
        content,
        userId: user.id
    })

}