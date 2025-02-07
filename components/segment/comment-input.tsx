'use client'

import { useState } from "react"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { z, ZodError } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { submitComment } from "@/actions/server/form/add-comment";
import { Form, FormField } from "../ui/form";

//FIXME: Need to add media support

type CommentPlateProps = {
    target: {
        id: string,
        type: 'Post' | 'Comment'
    },
    onCancel?: () => void
}




const schema = z.object({
    content: z.string().min(20, 'Comment must be at least 20 characters')
})



export function CommentInput({ target, onCancel }: CommentPlateProps) {


    const [commentValue, setCommentValue] = useState<string>('')

    const [isInputOpen, setIsInputOpen] = useState(false)



    if (!isInputOpen && target.type !== 'Comment') {


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
        <form onSubmit={async (e) => {
            e.preventDefault()
         
            try {
                const comment = schema.parse({ content: commentValue })
                const res = submitComment({ target, content: comment.content })
                if(!res){
                    console.log('Comment failed to submit')
                    setCommentValue('')
                }else{
                    setCommentValue('')
                    setIsInputOpen(false)
                    console.log('Comment submitted')
                }

            } catch (e) {

                
                alert((e as ZodError).errors[0].message)
            }



        }} >
            <div tabIndex={0} style={{ borderWidth: '1px', borderStyle: 'solid' }} className="flex flex-col  w-full px-3 py-2   focus-within:outline-none focus-within:ring-2 focus-within:ring-ring  focus-within:ring-[#029dd5] rounded-md focus:outline-none focus:ring-2 focus:ring-ring  focus:ring-[#029dd5]">
                <Textarea
                    onChange={(e) => setCommentValue(e.target.value)}
                    value={commentValue}

                    onInput={(e) => {

                        const target = e.target as HTMLTextAreaElement;
                        target.style.height = '0px';
                        target.style.height = target.scrollHeight + 4 + 'px';
                    }}


                    className="min-h-[60px] h-full border-none px-0 py-0 ring-0 focus-visible:ring-0 outline-none w-full"
                />


                <div className="w-full flex items-center justify-end gap-x-2">
                    <Button variant={'default'} className="text-sm"

                        onClick={(e) => {
                            
                            e.preventDefault()
                            onCancel?.call(null)
                            setCommentValue('')
                            setIsInputOpen(false)
                        }}

                    >Cancel</Button>
                    <Button
                        type="submit"
                        className=" bg-[#0a449b] text-sm hover:bg-[#0a2f6c] text-white hover:text-white" variant={'primary'}>Comment</Button>
                </div>
            </div>
        </form>

    )
}