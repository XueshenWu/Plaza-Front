import { reduceReview } from "@/actions/server/reduceReview"
import { reducePostReview } from "@/storage/server/database/posts"


export async function POST(request: Request) {
    const body = await request.json()

    const res = await reduceReview(body.postId, body.action)

    return Response.json({
        data: res
    })
}