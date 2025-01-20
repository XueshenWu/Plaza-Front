'use client'
import Link from "next/link"
import { Drawer, DrawerContent, DrawerHeader, DrawerTrigger } from "../ui/drawer"
import { ReviewButton, type ReviewButtonData, type ReviewUpdateAction } from "../ui/review-button"
import { useCopyToClipboard } from 'usehooks-ts'
import { Ellipsis } from "lucide-react"
import { useMemo } from "react"

export type ReviewPlateProps =
    ReviewButtonData & {
        comments: number,
        postId: string,
        previewType?: 'compact' | 'card'
    }



const Comment = ({ previewType, postId, comments }: {
    previewType: 'compact' | 'card',
    postId: string,
    comments: number
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


    if (previewType === 'card') {
        return <Link href={`posts/${postId}`} className="bg-slate-200 hover:bg-slate-300  transition-colors rounded-3xl px-3 py-1 flex flex-row items-center justify-center gap-x-1">
            <img src="comment.svg" />
            <div className="text-[10px] text-gray-700">
                {parsedComments}
            </div>
        </Link>
    } else {
        return <Link href={`posts/${postId}`} className="text-[10px] text-gray-700">
            {parsedComments} comments
        </Link>
    }
}



export const ReviewPlate = ({ comments, postId, previewType = 'compact', ...reviewButtonDataSync }: ReviewPlateProps) => {
    const [copiedText, copy] = useCopyToClipboard()
    const reviewButtonData = Promise.resolve(reviewButtonDataSync)

    const updateReview = async (action: ReviewUpdateAction) => {

    }

    return (
        <div className="flex flex-row items-center justify-start gap-x-3 text-xs w-full">
          
            <ReviewButton data={reviewButtonData} update={updateReview} />
            <Comment previewType={previewType} postId={postId} comments={comments} />
            <Drawer>
                <DrawerTrigger className="*:text-[10px]" >

                    <div className={previewType === 'card' ? "flex bg-slate-200 hover:bg-slate-300 transition-colors rounded-3xl px-3 py-2 cursor-pointer" : "text-xs text-gray-700 cursor-pointer"}>
                        {previewType === 'card' ? <img src="award.svg" /> : "Award"}
                    </div>

                </DrawerTrigger>
                <DrawerContent>
                    Building...
                </DrawerContent>
            </Drawer>
            {previewType === 'card' ? <div className="bg-slate-200 hover:bg-slate-300 transition-colors rounded-3xl  px-3 py-2 cursor-pointer">
                <img src="forward.svg" onClick={() => {
                    copy("localhost:xxxx/post/" + postId).then(() => {
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
                            <img src="report.svg" />
                            Report
                        </div>
                        <div className="flex items-center justify-center gap-x-6"

                            onClick={() => {
                                copy("localhost:xxxx/post/" + postId).then(() => {
                                    alert("Copied!")
                                })
                            }}
                        >
                            <img src="share.svg" />
                            Share
                        </div>
                    </div>

                </DrawerContent>
            </Drawer>}

        </div>)
}