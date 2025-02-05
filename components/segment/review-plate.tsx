'use client'
import Link from "next/link"
import { Drawer, DrawerContent, DrawerHeader, DrawerTrigger } from "../ui/drawer"
import { ReviewButton, type ReviewButtonData, type ReviewUpdateAction } from "../ui/review-button"
import { useCopyToClipboard } from 'usehooks-ts'
import { Ellipsis } from "lucide-react"
import { useMemo, useState } from "react"

export type ReviewPlateProps =
    ReviewButtonData & {
        comments: number,
        targetId: string,
    }



const Comment = ({ targetId, comments, mode }: {
    targetId: string,
    comments: number,
    mode: {
        content: 'Post' | 'Comment',
        display: 'Card' | 'Compact'
    }

}) => {

    const parsedComments = useMemo(() => {
        if (comments > 999) {
            return (comments / 1000).toFixed(1) + "k"
        } else if (comments > 99) {
            return `${(comments / 100).toFixed(0)}00+`
        }
        else {
            return comments
        }
    }, [comments])


    if (mode.display === 'Card') {
        if (mode.content === "Post") {
            return <Link href={`/posts/${targetId}`} className="bg-slate-200 hover:bg-slate-300 py-2 transition-colors rounded-3xl px-3  flex flex-row items-center justify-center gap-x-1">
                <img src="/comment.svg" />
                <div className="text-[10px] text-gray-700">
                    {parsedComments}
                </div>
            </Link>
        } else {
            //FIXME: Fix this as reply button
            return <Link href={`/comments/${targetId}`} className="bg-slate-200 hover:bg-slate-300 py-2 transition-colors rounded-3xl px-3  flex flex-row items-center justify-center gap-x-1">
                <img src="/comment.svg" />
                <div className="text-[10px] text-gray-700">
                    {parsedComments}
                </div>
            </Link>
        }
    } else {
        return <Link href={`/posts/${targetId}`} className="text-[10px] text-gray-700">
            {parsedComments} comments
        </Link>
    }
}



export const ReviewPlate = ({ comments, targetId, mode, ...reviewButtonDataSync }: ReviewPlateProps & {
    mode: {
        content: 'Post' | 'Comment',
        display: 'Card' | 'Compact'
    }
}) => {
    const [copiedText, copy] = useCopyToClipboard()


    const apiPath = useMemo(() => {
        return mode.content === 'Post' ? `/api/posts/${targetId}/reduceReview` : `/api/comments/${targetId}/ReduceReview`
    }, [mode, targetId])

    const [reviewData, setReviewData] = useState<ReviewButtonData>(reviewButtonDataSync)

    const updateReview = async (action: ReviewUpdateAction) => {
        const res = await fetch(apiPath, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                targetId,
                action
            })
        })
        const data = await res.json().then((resp) => {
            const data = resp.data
            return {
                upvotes: data.upvotes,
                downvotes: data.downvotes,
                userReviewed: data.reviewState
            }
        })
        setReviewData(data)

    }

    return (
        <div className="flex flex-row items-center justify-start gap-x-3 text-xs w-full">

            <ReviewButton data={reviewData} update={updateReview} />
            <Comment mode={mode} targetId={targetId} comments={comments} />
            <Drawer>
                <DrawerTrigger className="*:text-[10px]" >

                    <div className={mode.display === 'Card' ? "flex bg-slate-200 hover:bg-slate-300 transition-colors rounded-3xl px-3 py-2 cursor-pointer" : "text-xs text-gray-700 cursor-pointer"}>
                        {mode.display === 'Card' ? <img src="/award.svg" /> : "Award"}
                    </div>

                </DrawerTrigger>
                <DrawerContent>
                    Building...
                </DrawerContent>
            </Drawer>
            {mode.display === 'Card' ? <div className="bg-slate-200 hover:bg-slate-300 transition-colors rounded-3xl  px-3 py-2 cursor-pointer">
                <img src="/forward.svg" onClick={() => {
                    copy("localhost:xxxx/post/" + targetId).then(() => {
                        alert("Copied!")
                    })

                }} />
            </div> : <Drawer>

                <DrawerTrigger>
                    <Ellipsis className="cursor-pointer" />
                </DrawerTrigger>
                <DrawerContent >
                    <DrawerHeader className="text-left font-bold text-blue-950">
                        Options
                    </DrawerHeader>
                    <div className="*:cursor-pointer flex flex-col gap-y-2 items-start justify-start py-6 border-t-2 border-gray-300 px-8">
                        <div className="flex items-center justify-center gap-x-6">
                            <img src="/report.svg" />
                            Report
                        </div>
                        <div className="flex items-center justify-center gap-x-6"

                            onClick={() => {
                                copy("/post/" + targetId).then(() => {
                                    alert("Copied!")
                                })
                            }}
                        >
                            <img src="/share.svg" />
                            Share
                        </div>
                    </div>

                </DrawerContent>
            </Drawer>}

        </div>)
}