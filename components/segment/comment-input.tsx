'use client'

import { useState } from "react"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"

type CommentPlateProps = {
    postId: string
}



export function CommentInput({ postId }: CommentPlateProps) {


    const [isInputOpen, setIsInputOpen] = useState(false)


    if (!isInputOpen) {


        return (

            <div className="min-h-[60px]">
                <Button

                    size={'full'}
                    onClick={() => setIsInputOpen(true)}

                    variant={'outline'}>
                    Join the conversation
                </Button>
            </div>
        )
    }


    return (
        <div tabIndex={0} style={{ borderWidth: '1px', borderStyle: 'solid' }} className="flex flex-col  w-full px-3 py-2   focus-within:outline-none focus-within:ring-2 focus-within:ring-ring  focus-within:ring-[#029dd5] rounded-md focus:outline-none focus:ring-2 focus:ring-ring  focus:ring-[#029dd5]">
            <Textarea
                onInput={(e) => {

                    const target = e.target as HTMLTextAreaElement;
                    target.style.height = '0px';
                    target.style.height = target.scrollHeight + 4 + 'px';
                }}


                className="min-h-[60px] h-full border-none px-0 py-0 ring-0 focus-visible:ring-0 outline-none w-full"
            />
            <div className="w-full flex items-center justify-end gap-x-2">
                <Button variant={'default'} className="text-sm"

                    onClick={() => setIsInputOpen(false)}

                >Cancel</Button>
                <Button className=" bg-[#0a449b] text-sm hover:bg-[#0a2f6c] text-white hover:text-white" variant={'primary'}>Comment</Button>
            </div>
        </div>

    )
}