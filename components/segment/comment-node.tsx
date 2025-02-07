'use client'


import { use, useEffect, useState, useTransition } from "react"
import { ReviewPlateProps } from "./review-plate"
import { Code } from "lucide-react"
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
    const [isExpanded, setIsExpanded] = useState(false)

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
        return (<div className="flex">
            <div className=""

                onClick={() => setIsExpanded(true)}
            >
                +
            </div>
            <div>
                {author.displayName ?? author.authorId.substring(0, 5)} &bull; {fromNow(updatedAt)}
            </div>
        </div>)
    } else {

        return (<div
            className="flex flex-col items-start"
        >

            {/* layer1: header */}
            <div>
                <div>
                    {/* TODO: add a general avatar component */}
                    {author.avatar ? <img className="w-8" src={author.avatar} /> : <Code className="w-8 h-8" />}
                </div>
                <div>
                    {author.displayName ?? author.authorId.substring(0, 5)}
                </div>
            </div>

            {/* layer2: content  & threads */}
            <div className="flex flex-row">

                {/* threads */}
                <div className={`mix-w-8 ${childrenComments.length > 0 ? 'border-l-2 border-gray-300 rounded-bl-xl' : ''}`}>

                </div>
                <div>
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