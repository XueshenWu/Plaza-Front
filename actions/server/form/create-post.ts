'use server'

import { createPost } from "@/storage/server/database/posts"


export type CreatePostDto = {
    authorId: string,
    communityId: string,
    title: string,
    content: string[],
    media?: {
        mediaType: "VIDEO" | "IMAGE" | "EXTERNAL_LINK",
        mediaUrl: string[],
        mediaPreview: {
            link: string,
            meta: string
        }
    }
}


export async function submitCreatePost(createPostDto: CreatePostDto) {
    return await createPost(
        createPostDto.authorId,
        createPostDto.communityId,
        createPostDto.title,
        createPostDto.content,
        createPostDto.media
    )
}