'use client'

import formSchema from "@/schemas/message"
import { useState, useOptimistic, use, useEffect, useTransition } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { submitMessageForm } from "@/actions/form/test-submit-message"
import { getMessages } from "@/storage/database/message"

type Message = z.infer<typeof formSchema>

type localMessage = Message & {
    synchronized: boolean
}

export function MessageForm() {
    const form = useForm<Message>({
        resolver: zodResolver(formSchema),
        mode: 'onChange',
        defaultValues: {
            name: '',
            text: ''
        }
    });
    const [messages, setMessages] = useState<Message[]>([])
    useEffect(() => {
        getMessages().then((messages) => {
            setMessages(messages)
        })
    }, [])




    const [localMessages, insertLocalMessage] = useOptimistic<localMessage[], Message | null>(messages.map(m => ({ synchronized: true, ...m })), (prev, m) => m ? [{ synchronized: false, ...m }, ...prev] : messages.map(m => ({ synchronized: true, ...m })));

    const [isPending, startTransition] = useTransition()
    return (<div><Form {...form}>
        <form onSubmit={form.handleSubmit(async (data) => {

            if (isPending) return
            startTransition(async () => {

                insertLocalMessage(data)
                await new Promise((resolve) => setTimeout(resolve, 1000))
                const res = await submitMessageForm(data)

                if (res) {
                    const res = await getMessages()
                    setMessages(res)
                    // alert('Message Submission Successful!')
                    form.reset()
                } else {
                    alert('Message Submission Failed!')
                    insertLocalMessage(null)
                }
            })

        })} className="flex flex-col gap-y-4 px-4 ">

            <FormField
                control={form.control}
                name='name'
                render={({ field }) => (<FormItem>
                    <FormLabel >Name</FormLabel>
                    <FormControl>
                        <Input placeholder="Please Input Your Name" {...field} />
                    </FormControl>
                    <FormDescription>What's your name?</FormDescription>
                    <FormMessage />
                </FormItem>)}
            />

            <FormField
                control={form.control}
                name="text"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel >Text</FormLabel>
                        <FormControl>
                            <Input placeholder="Please Leave Your Message" {...field} />
                        </FormControl>
                        <FormDescription>What's your message?</FormDescription>
                        <FormMessage />
                    </FormItem>
                )} />
            <Button className={isPending?"cursor-not-allowed bg-gray-200":""} type="submit">Submit</Button>
        </form>
    </Form>

        <div>
            <h2>Messages</h2>
            <ul className="space-y-2">
                {localMessages.map((message, index) => (
                    <li key={index} className={`bg-slate-100 rounded-xl p-4 flex flex-row gap-x-4 ${message.synchronized ? 'text-black' : 'text-gray-500'}`}>
                        <div>{message.name}</div>
                        <div>{message.text}</div>
                    </li>
                ))}
            </ul>
        </div>

    </div>)


}

