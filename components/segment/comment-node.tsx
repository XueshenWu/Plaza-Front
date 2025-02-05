'use client'


import { use, useState } from "react"
import { ReviewPlateProps } from "./review-plate"
import { Code } from "lucide-react"

export type CommentNodeProps = {
    author: {
        authorId: string,
        displayName?: string,
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


export function CommentNode({ author, content, updatedAt, reviews, recursiveCountdown }: CommentNodeProps & {
    recursiveCountdown: number
}) {
    const [isExpanded, setIsExpanded] = useState(false)

    const [childrenComments, setChildrenComments] = useState<CommentNodeProps[]>([])

    if (recursiveCountdown === 0) {
        return
    }


    if (!isExpanded) {
        return (<div>

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
                    {childrenComments.length < reviews.commentChildren.length && <div>
                        Load more
                    </div>}
                </div>
            </div>
        </div>)
    }




}