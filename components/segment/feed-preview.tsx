'use client'

//TODO: Add external link to story

import { Button } from "../ui/button"
import { MediaPreviewImage, type MediaPreview } from "../ui/media-preview"
import { ReviewPlate, ReviewPlateProps } from "./review-plate"
import Link from "next/link"
import { fromNow } from "@/utils/fromNow"

export type FeedPreviewProps = {

    meta: {
        post: {
            updatedAt: string,
            publishedAt: string,
            isUserSubscribed: boolean,
            postId: string
        },
        community: {
            communityId: string,
            communityName: string,
            communityIcon: string,
        },
        review: Omit<ReviewPlateProps, 'postId'>
    },
    content: {
        title: string,
        media?: MediaPreview
    },

}

//FIXME: adjust the size of the image(ImagePreview Component)
//FIXME: adjust the size of the updated time to make everything in straight line

export function FeedPreview({ meta, content }: FeedPreviewProps) {
    return (
        <div className="py-2  flex flex-col items-start  border-b border-slate-300 text-xs w-full">
            <div className="flex flex-row items-center justify-between w-full">
                <div className="flex items-center gap-x-1 flex-col mobile-sm:flex-row">
                  <div className="flex flex-row gap-2 items-center mobile-sm:gap-1">
                    <Link href={`localhost:xxxx/community/${meta.community.communityId}`} >
                        <img className="w-8 h-8 rounded-full" src={meta.community.communityIcon} />
                    </Link>
                    <div className="flex flex-col mobile-sm:flex-row mobile-sm:gap-1">
                    <Link href={`localhost:xxxx/community/${meta.community.communityId}`} className="text-gray-700 font-semibold">
                        r/{meta.community.communityName}
                    </Link>
                    
                    <span className="mobile-sm:block hidden">&#x2022;</span>
                    
                    <div className="text-[12px]">
                        {/* {meta.post.updatedAt} */}
                        {fromNow(meta.post.updatedAt)}
                    </div>
                    </div>
                    </div>
                </div>
                <div>
                    <Button variant={'primary'} size={'mobile'} className="bg-[#0a449b] hover:bg-[#0a2f6c] text-[9px] " >
                        {meta.post.isUserSubscribed ? "Unsubscribe" : "Subscribe"}
                    </Button>
                </div>
            </div>
            <div className="flex flex-row gap-2 items-center justify-between w-full p-1">
                <div className="flex-grow w-full cursor-pointer py-4">
                    {content.title}
                </div>
                <div>
                    {content.media && <MediaPreviewImage  {...content.media} />}
                </div>
            </div>
            <ReviewPlate {...meta.review} previewType="compact" postId={meta.post.postId} />
        </div>
    )
}