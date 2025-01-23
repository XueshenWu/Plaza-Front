'use server'

import { z } from 'zod'
import Message from '@/schemas/message'
import { insertMessage } from '@/storage/server/database/message'

export async function submitMessageForm({ name, text }: z.infer<typeof Message>): Promise<boolean> {
    console.log('submitting message form', { name, text })
    try {
        const messageObject = Message.parse({ name, text })
        const res = await insertMessage({
            name: messageObject.name+"-server",
            text: messageObject.text+"-server"
        })
        console.log('message inserted', JSON.stringify(res))
        return true
    } catch (e) {
        return false
    }


}