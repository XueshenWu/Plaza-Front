import { queryCommentNodesById } from "@/storage/server/database/comments"

export async function POST(request: Request) {


    const body = await request.json()
    const { commentIds } = body

    const comments = await queryCommentNodesById(commentIds)

    return Response.json({
        data: comments
    })

}