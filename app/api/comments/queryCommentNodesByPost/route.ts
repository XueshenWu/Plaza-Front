import { queryCommentNodesByPostId } from "@/storage/server/database/comments";

export async function POST(request: Request) {

    const body = await request.json()



    const { postId } = body;

    const comments = await queryCommentNodesByPostId(postId)

    return Response.json({
        data: comments
    })
}