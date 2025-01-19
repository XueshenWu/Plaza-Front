'use server'


import type { MediaPreview } from "../ui/media-preview"

type FeedPreviewProps = {
    meta: {
        communityId: string,
        communityName: string,
        communityIcon: string,
        updatedAt: string,
        publishedAt: string,
        isUserSubscribed: boolean
    },
    content: {
        title: string,
        media?: MediaPreview
    },
    review:{
        upvotes:number,
        downvotes:number,
        comments:number,
        userReviewed:"up" | "down" | null
    }

}


export async function FeedPreview() {

}