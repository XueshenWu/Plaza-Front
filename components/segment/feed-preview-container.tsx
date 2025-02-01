'use client'
// import {  sampleCompact } from "@/app/feed/data"
import { FeedPreview, type FeedPreviewProps } from "./feed-preview"
import { useEffect, useState, useTransition } from "react"
import InfiniteScroll from "react-infinite-scroll-component"


type FeedPreviewContainerProps = {
    initialFeeds?: FeedPreviewProps[],
    filter?: {
        authorId?: string,
        communityId?: string,
        primary?: string,
        secondary?: string,
    }
}

export const FeedPreviewContainer = ({ initialFeeds = [], filter }: FeedPreviewContainerProps) => {


    const [feeds, setFeeds] = useState<FeedPreviewProps[]>(initialFeeds)
    const [hasMore, setHasMore] = useState(true)

    const loadMore = async () => {
        console.log('loadMore')
        const newFeeds = await fetch('/api/getFeeds', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                type: 'Preview',
                cursor: {
                    position: feeds.length,
                    limit: 5
                },
                filter
            })
        }).then(res => res.json()).then(res => res.data)

        if (newFeeds.length === 0) {
            setHasMore(false)
            return
        }
        setFeeds((prev) => [...prev, ...newFeeds])
    }


    useEffect(() => {
        // if (initialFeeds.length === 0) {
        //     loadMore()
        // }
    }, [])

    return (<InfiniteScroll

        dataLength={feeds.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
            <p style={{ textAlign: 'center' }} className="text-gray-700 text-xs">
                <b>Yay! You have seen it all</b>
            </p>
        }

        refreshFunction={loadMore}
        pullDownToRefresh
        pullDownToRefreshThreshold={50}
        pullDownToRefreshContent={
          <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
        }
        releaseToRefreshContent={
          <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
        }
    >
        <div className="flex flex-col w-full px-4">
            {feeds.map((feed, index) => <FeedPreview

                show={filter?.communityId ? 'author' : 'community'}
                key={index} {...feed} />)}
        </div>
    </InfiniteScroll>

    )
}