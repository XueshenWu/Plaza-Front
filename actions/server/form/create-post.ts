'use server'

import { createPost } from "@/storage/server/database/posts"
import { uploadMedia } from "@/storage/server/file/media"
import { createClient } from "@/storage/supabase/supabase-svr"


export type CreatePostDto = {
    communityId: string,
    title: string,
    content: string[],
    media?: {
        mediaType: "VIDEO" | "IMAGE" | "EXTERNAL_LINK",
        payload: {
            mimeType: string,
            data: ArrayBuffer
        }[],
        mediaPreview: {
            src: string,
            meta: string
        }
    }
}


export async function submitCreatePost({
    communityId,
    title,
    content,
    media: raw_media
}: CreatePostDto) {

    const supabase = await createClient()

    const { data: { user }, error } = await supabase.auth.getUser()
    if (error || !user) {
        return false
    }

    try {
        const media = raw_media ?
            raw_media.mediaType === "EXTERNAL_LINK" ?
                {
                    mediaType: raw_media.mediaType,
                    mediaUrl: [raw_media.mediaPreview.src],
                    mediaPreview: raw_media.mediaPreview
                } :
                {
                    mediaType: raw_media.mediaType,
                    mediaUrl: await Promise.all(raw_media.payload.map(async (file) => {
                        const url = await uploadMedia(file.data, file.mimeType)
                        if (!url) {
                            throw new Error("Failed to upload media")
                        }
                        return url
                    })),
                    mediaPreview: raw_media.mediaPreview
                } : undefined

        return await createPost(
            user.id,
            communityId,
            title,
            content,
            media
        )
    } catch (e) {
        console.error(e)
        return false
    }




}