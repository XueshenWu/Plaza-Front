import { getFeeds, type GetFeedsParams } from "@/actions/server/getFeed";



export async function POST(request: Request) {
    const body = await request.json()

    const res = await getFeeds(
        body
    )

   

    return Response.json({
        data: res
    })
}