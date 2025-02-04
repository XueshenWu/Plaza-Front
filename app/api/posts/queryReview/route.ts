import { queryReviewStatus } from "@/actions/server/queryReviewStatus"


export async function POST(req: Request) {
    const body = await req.json()
    const res = await queryReviewStatus(body.postId)
    return Response.json(res)
}