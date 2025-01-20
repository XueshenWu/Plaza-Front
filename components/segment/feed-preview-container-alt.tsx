'use client'
import { sample } from "@/app/feed/data"
import { FeedPreview, type FeedPreviewProps } from "./feed-preview"
import {  useState } from "react"
import _ from 'lodash'
import InfiniteScroll from "react-infinite-scroller"


type FeedPreviewContainerProps = {
    initialFeeds?: FeedPreviewProps[]
}

export const FeedPreviewContainer = ({ initialFeeds = [] }: FeedPreviewContainerProps) => {

    const [feeds, setFeeds] = useState<FeedPreviewProps[]>(initialFeeds)
    // const [isPending, startTransition] = useTransition()
    const [cursor, setCursor] = useState(initialFeeds.length)
    const [hasMore, setHasMore] = useState(true)




    const handleLoadMore = async (page: number) => {
        const newFeeds = sample(5)
        setFeeds((prev)=>[...prev, ...newFeeds])
        setCursor(cursor + 5)
     
    }






    return (
        <InfiniteScroll
            pageStart={0}
            loadMore={handleLoadMore}
            hasMore={hasMore}
            loader={<div key={0}>waiting...</div>}
        >
            <div className="flex flex-col w-full">
                {feeds.map((feed, i) => (
                    <FeedPreview key={i} {...feed} />
                  
                ))}
            </div>
        </InfiniteScroll>
    )
}