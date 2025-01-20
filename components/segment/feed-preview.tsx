'use client'


import { Button } from "../ui/button"
import { MediaPreviewImage, type MediaPreview } from "../ui/media-preview"
import { ReviewPlate, ReviewPlateProps } from "./review-plate"

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

const fromNow = (timestampBySecs: string) => {
    const secondsAgo = Math.floor(Date.now() / 1000) - parseInt(timestampBySecs, 10);
    if (secondsAgo < 180) {
        return "just now";
    } else if (secondsAgo < 3600) {
        return `${Math.floor(secondsAgo / 60)} minutes ago`;
    } else if (secondsAgo < 86400) {
        return `${Math.floor(secondsAgo / 3600)} hours ago`;
    } else {
        return `${Math.floor(secondsAgo / 86400)} days ago`;
    }
}

export  function FeedPreview({ meta, content }: FeedPreviewProps) {
    return (
        <div className="py-2 flex flex-col items-start gap-y-2 border-b border-slate-300 text-xs w-full">
            <div className="flex flex-row items-center justify-between w-full">
                <div className="flex items-center justtiy-start  gap-x-1">
                    <img className="w-8 h-8 rounded-full" src={meta.community.communityIcon} />
                    <div className="text-gray-700 font-semibold">
                        r/{meta.community.communityName}
                    </div>
                    &#x2022;
                    <div className="text-[10px]">
                        {/* {meta.post.updatedAt} */}
                        {fromNow(meta.post.updatedAt)}
                    </div>
                </div>
                <div>
                    <Button variant={'primary'} size={'mobile'} className="bg-[#0a449b] hover:bg-[#0a2f6c] text-[9px] " >
                        {meta.post.isUserSubscribed ? "Unsubscribe" : "Subscribe"}
                    </Button>
                </div>
            </div>
            <div className="flex flex-row items-center justify-between w-full">
                <div className="flex-grow w-full">
                    {content.title}
                </div>

                {content.media && <MediaPreviewImage size={{ width: 128, height: 90 }}  {...content.media} />}

            </div>
            <ReviewPlate {...meta.review} previewType="compact" postId={meta.post.postId} />
        </div>
    )
}