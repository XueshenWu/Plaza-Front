'use client'
import { sampleCard } from "@/app/feed/data"
import { FeedPreview, type FeedPreviewProps } from "./feed-preview"
import { useEffect, useState, useTransition } from "react"
import { FeedCard, FeedCardProps } from "./feed-card"



type FeedCardContainerProps = {
    initialFeeds?: FeedCardProps[]
}

export const FeedCardContainer = ({ initialFeeds = [] }: FeedCardContainerProps) => {

    const [feeds, setFeeds] = useState<FeedCardProps[]>(initialFeeds)
    const [isPending, startTransition] = useTransition()
    const [cursor, setCursor] = useState(initialFeeds.length)



    const getMoreFeed = (cursor: number) => {
        if (isPending) return

        startTransition(async () => {
            const newFeeds = await Promise.resolve(sampleCard(5))
            setFeeds((prev) => [...prev, ...newFeeds])
            setCursor(cursor + 5)
        })

    }

    const handleScroll = () => {
        if (document.body.scrollHeight - 300 < window.scrollY + window.innerHeight) {
            getMoreFeed(cursor)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

  



    return (

        <div className="flex flex-col w-full px-4">
            {feeds.map((feed, i) => (
                <FeedCard key={i} {...feed} />

            ))}
        </div>

    )
}