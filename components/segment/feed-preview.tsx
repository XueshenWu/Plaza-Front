'use client'


//TODO: Preview Title Style: Link and hover effect

import { Button } from "../ui/button"
import { MediaPreviewImage, type MediaPreview } from "../ui/media-preview"
import { ReviewPlate, ReviewPlateProps } from "./review-plate"
import Link from "next/link"
import { fromNow } from "@/utils/fromNow"
import { Code2 } from "lucide-react"

export type FeedPreviewProps = {

    meta: {
        post: {
            updatedAt: Date,
            createdAt: Date,
            isUserSubscribed: boolean,
            postId: string
        },
        community: {
            communityId: string,
            communityName: string,
            communityIcon?: string | null,
        },
        author: {
            authorId: string,
            displayName?: string,
            avatar?: string | null,
        }
        review: Omit<ReviewPlateProps, 'postId'>
    },
    content: {
        title: string,
        media?: MediaPreview | null
    },

}

export function FeedPreview({ meta, content, show = 'community' }: FeedPreviewProps & {
    show?: "author" | "community"
}) {

    const showLink = show === 'author' ? `/user/${meta.author.authorId}` : `/community/${meta.community.communityId}`
    const showIcon = show === 'author' ? meta.author.avatar : meta.community.communityIcon
    const showName = show === 'author' ? `u/${meta.author.displayName ?? `${meta.author.authorId.substring(0, 6)}`}` : `r/${meta.community.communityName}`


    return (
        <div className="py-2  flex flex-col items-start  border-b border-slate-300 text-xs w-full">
            <div className="flex flex-row items-center justify-between w-full">
                <div className="flex items-center gap-x-1 flex-col mobile-sm:flex-row">
                    <div className="flex flex-row gap-2 items-center mobile-sm:gap-1">
                        <Link href={showLink} >
                            {showIcon ? <img className="w-8 h-8 rounded-full" src={showIcon} /> : <Code2 className="w-8 h-8 rounded-full" />}
                        </Link>
                        <div className="flex flex-col mobile-sm:flex-row mobile-sm:gap-1">
                            <Link href={showLink} className="text-gray-700 font-semibold">
                                {showName}
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
                <div className="flex-grow w-full cursor-pointer py-4 text-2xl font-semibold">
                    <Link href={`/post/${meta.post.postId}`} >
                        {content.title}
                    </Link>
                </div>

                {content.media && <MediaPreviewImage  {...content.media} />}

            </div>
            <ReviewPlate {...meta.review} mode={{
                display: 'Compact',
                content: 'Post'
            }} targetId={meta.post.postId} />
        </div>
    )
}