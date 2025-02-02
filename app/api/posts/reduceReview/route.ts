import { reducePostReview } from "@/storage/server/database/posts"


export async function POST(request: Request) {
    const body = await request.json()

    const res = await reducePostReview(
        body
    )

    return Response.json({
        data: res
    })
}