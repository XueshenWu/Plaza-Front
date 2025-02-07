'use client'


import { use, useEffect, useState, useTransition } from "react"
import { ReviewPlate, ReviewPlateProps } from "./review-plate"
import { Code, PlusCircle } from "lucide-react"
import { fromNow } from "@/utils/fromNow"
import { useRouter } from "next/navigation"

export type CommentNodeProps = {
    id: string,
    author: {
        authorId: string,
        displayName?: string | null,
        avatar?: string | null,
    },
    content: string,
    updatedAt: Date,
    reviews: {
        reviewPlateProps: ReviewPlateProps,
        commentChildren: string[]
    }

}

const PRE_LOAD_COUNT = 2;


export function CommentNode({ id, author, content, updatedAt, reviews, recursiveCountdown }: CommentNodeProps & {
    recursiveCountdown: number
}) {
    const [isExpanded, setIsExpanded] = useState(true)

    const [isPending, startTransition] = useTransition()

    const [childrenComments, setChildrenComments] = useState<CommentNodeProps[]>([])

    const router = useRouter();


    useEffect(() => {
        if (recursiveCountdown > 0) {
            fetch('/api/comments/queryCommentNodes', {
                method: 'POST',
                body: JSON.stringify({
                    commentIds: reviews.commentChildren.slice(0, PRE_LOAD_COUNT),
                })
            })
                .then(resp => resp.json())
                .then(json => setChildrenComments(json.data))
        } else {
            setChildrenComments([])
        }
    }, [recursiveCountdown])







    const handleLoadAll = () => {

        if (isPending) {
            return
        }


        if (recursiveCountdown <= 0) {

            router.push(`/comments/${id}`)
            return
        }



        startTransition(async () => {
            const resp = await fetch('/api/comments/queryCommentNodes', {
                method: 'POST',
                body: JSON.stringify({
                    commentIds: reviews.commentChildren,
                })
            })

            const json = await resp.json()
            setChildrenComments(json.data)
        })
    }





    if (!isExpanded) {
        return (<div className="flex items-center gap-x-2">
            <div className="cursor-pointer"

                onClick={() => setIsExpanded(true)}
            >
                <PlusCircle className="w-4" />
            </div>
            <div>
                {author.displayName ?? author.authorId.substring(0, 5)} &bull; {fromNow(updatedAt)}
            </div>
        </div>)
    } else {

        return (<div
            className="flex flex-col items-start "
        >

            {/* layer1: header */}
            <div className="flex items-center gap-x-2">
                <div>
                    {/* TODO: add a general avatar component */}
                    {author.avatar ? <img className="w-8" src={author.avatar} /> : <Code className="w-6 h-6" />}
                </div>
                <div>
                    {author.displayName ?? author.authorId.substring(0, 5)}
                </div>
            </div>


            {/* layer2: content,  subs  & threads */}
            <div className="flex flex-row px-2 mx-2">

                {/* threads */}
                <div className={`min-w-8 ${childrenComments.length > 0 ? 'border-l rounded-bl-xl' : ''}`}>

                </div>
                <div>
                    <div>
                        {content}
                    </div>
                    <ReviewPlate
                    
                    mode={{
                        content:'Comment',
                        display:'Card'
                    }}
                    {...reviews.reviewPlateProps} />
                    {childrenComments.map((comment, index) => (<CommentNode
                        key={index}
                        {...comment}
                        recursiveCountdown={recursiveCountdown - 1}
                    />))}
                    {childrenComments.length < reviews.commentChildren.length && <div

                        onClick={handleLoadAll}
                    >
                        Load {reviews.commentChildren.length - childrenComments.length} more comments
                    </div>}
                </div>
            </div>
        </div>)
    }




}