import { newDrizzle } from "./drizzle-client"
import * as schema from "@/drizzle/schema";
import { and, asc, desc, eq } from "drizzle-orm";

export async function queryCommentById(commentId: string) {
    const db = newDrizzle()
    const res = await db.query.comments.findFirst({
        where: eq(schema.comments.id, commentId),
    })

    if (!res) {
        return null
    }

    return res
}


export async function queryCommentByRootId(root_id: string) {
    const db = newDrizzle()
    const res = await db.query.comments.findFirst({
        where: eq(schema.comments.root_id, root_id),
    })

    if (!res) {
        return null
    }

    return res
}
