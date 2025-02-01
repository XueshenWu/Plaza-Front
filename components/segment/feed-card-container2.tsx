// 'use client'

// import { FeedPreview, type FeedPreviewProps } from "./feed-preview"
// import { useState } from "react"
// import _ from 'lodash'
// import InfiniteScroll from "react-infinite-scroller"


// type FeedPreviewContainerProps = {
//     initialFeeds?: FeedPreviewProps[]
// }

// export const FeedPreviewContainer = ({ initialFeeds = [], filter }: FeedPreviewContainerProps & {
//     filter?: {
//         authorId?: string,
//         communityId?: string,
//         primary?: string,
//         secondary?: string,
//     }
// }) => {

//     const [feeds, setFeeds] = useState<FeedPreviewProps[]>(initialFeeds)
//     // const [isPending, startTransition] = useTransition()
//     const [cursor, setCursor] = useState(initialFeeds.length)
//     const [hasMore, setHasMore] = useState(true)




//     const handleLoadMore = async (page: number) => {
//         const newFeeds = await getFeeds({
//             type: 'Preview',
//             cursor: {
//                 position: cursor,
//                 limit: 5
//             },
//             filter
//         })
//         setFeeds((prev) => [...prev, ...newFeeds])
//         setCursor(cursor + 5)

//     }






//     return (
//         <InfiniteScroll
//             pageStart={0}
//             loadMore={handleLoadMore}
//             hasMore={hasMore}
//             loader={<div key={0}>waiting...</div>}
//         >
//             <div className="flex flex-col w-full">
//                 {feeds.map((feed, i) => (
//                     <FeedPreview key={i} {...feed} />

//                 ))}
//             </div>
//         </InfiniteScroll>
//     )
// }