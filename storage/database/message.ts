'use server'

import PrismaClientInstance from "./prisma-client-instance"
import Message from "@/schemas/message"
import { z } from 'zod';


async function insertMessage(message: z.infer<typeof Message>) {
    return await PrismaClientInstance.message.create({
        data: {
            name: message.name,
            text: message.text
        }
    })
}


async function getMessages() {
    return await PrismaClientInstance.message.findMany({
        select:{
            name:true,
            text:true
        },
        orderBy:{
            time:'desc'
        }
    })

}

export {
    insertMessage,
    getMessages
}