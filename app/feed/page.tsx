import { FeedPreviewContainer } from "@/components/segment/feed-preview-container"
import { sample } from "./data"

export default async function Page() {

   

    return (
        <FeedPreviewContainer initialFeeds={sample(5)} />
    )
}