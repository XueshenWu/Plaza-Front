'use client'

import { ArrowBigDown, ArrowBigUp } from "lucide-react"
import { useMemo, useState, useOptimistic, use, useTransition } from "react"


export type ReviewUpdateAction = 'Upvote' | "Downvote" | "CancelUpvote" | "CancelDownvote" | 'SwitchToUpvote' | "SwitchToDownvote"

export type UserReviewState = "up" | "down" | 'none'


export type ReviewButtonData = {
    upvotes: number,
    downvotes: number,
    userReviewed: UserReviewState
}

type ReviewButtonProps = {
    data: ReviewButtonData,
    update: (action: ReviewUpdateAction) => Promise<void>
}


export function ReviewButton({ data, update }: ReviewButtonProps) {



    const { upvotes, downvotes, userReviewed } = data
  




    const [isPending, startTransition] = useTransition()

    const [optReviewData, updateOptReviewData] = useOptimistic<ReviewButtonData, ReviewUpdateAction>(
        { upvotes, downvotes, userReviewed },
        (state, action) => {
            switch (action) {
                case 'Upvote': {
                    return { userReviewed: "up", upvotes: state.upvotes + 1, downvotes: state.downvotes }
                }
                case 'Downvote': {
                    return { userReviewed: "down", upvotes: state.upvotes, downvotes: state.downvotes + 1 }
                }
                case 'CancelUpvote': {
                    return { userReviewed: 'none', upvotes: state.upvotes - 1, downvotes: state.downvotes }
                }
                case 'CancelDownvote': {
                    return { userReviewed: 'none', upvotes: state.upvotes, downvotes: state.downvotes - 1 }
                }
                case 'SwitchToUpvote': {
                    return { userReviewed: "up", upvotes: state.upvotes + 1, downvotes: state.downvotes - 1 }
                }
                case 'SwitchToDownvote': {
                    return { userReviewed: "down", upvotes: state.upvotes - 1, downvotes: state.downvotes + 1 }
                }
            }
        })
    const parsedRatings = useMemo(() => {

        const { upvotes, downvotes } = optReviewData

        if (upvotes === 0 && downvotes === 0) {
            return 'vote'
        }

        const balance = upvotes - downvotes



        if (balance > 999) {
            return (balance / 1000).toFixed(1) + "k"
        }
        else {
            return balance
        }
    }, [optReviewData])


    const style = useMemo<{
        upvote: string,
        downvote: string,
        container: string,
        iconComtainer: string,

    }>(() => {
        switch (optReviewData.userReviewed) {
            case 'up': {
                return {
                    upvote: "stroke-white fill-white",
                    downvote: "stroke-white fill-none ",
                    container: "  bg-[#d93900] text-white",
                    iconComtainer: "hover:bg-[#ae2c00]",

                }
            }
            case 'down': {
                return {
                    upvote: "stroke-white fill-none",
                    downvote: "stroke-white fill-white",
                    container: "bg-[#6a5cff] text-white",
                    iconComtainer: "hover:bg-[#523dff]",

                }
            }
            default: {
                return {
                    upvote: "fill-none stroke-black fill-none group-hover:stroke-[#d93900]",
                    downvote: "fill-none stroke-black fill-none group-hover:stroke-[#6a5cff]",
                    container: " bg-slate-200 text-black",
                    iconComtainer: "hover:bg-slate-300"
                }
            }
        }
    }, [optReviewData.userReviewed])

    const updateOptimistically = (action: ReviewUpdateAction) => {
        startTransition(async () => {
            updateOptReviewData(action)
            await update(action)
        })
    }

    const handleUpvote = () => {

        if (isPending) return

        if (optReviewData.userReviewed === "up") {
            updateOptimistically('CancelUpvote')


        } else if (optReviewData.userReviewed === "down") {
            updateOptimistically('SwitchToUpvote')
        }
        else {
            updateOptimistically('Upvote')
        }
    }

    const handleDownvote = () => {

        if (isPending) return

        if (optReviewData.userReviewed === "down") {
            updateOptimistically('CancelDownvote')

        } else if (optReviewData.userReviewed === "up") {
            updateOptimistically('SwitchToDownvote')
        }
        else {
            updateOptimistically('Downvote')
        }
    }



    return (
        <div className={`flex flex-row items-center justify-center  gap-x-1  rounded-3xl *:transition-all transition-all duration-100 ${style.container}`}>
            <div className={`rounded-full p-1 group ${style.iconComtainer}`}>
                <ArrowBigUp className={`${style.upvote} w-5 h-5  transition-all cursor-pointer stroke-1`} onClick={handleUpvote} />

            </div>
            <span className=" select-none text-xs">
                {parsedRatings}
            </span>
            <div className={`rounded-full p-1 group ${style.iconComtainer}`}>
                <ArrowBigDown className={`${style.downvote} w-5 h-5 transition-all cursor-pointer stroke-1`} onClick={handleDownvote} />

            </div>
        </div>
    )
}