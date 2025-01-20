'use client'
import { sample } from "@/app/feed/data"
import { FeedPreview, type FeedPreviewProps } from "./feed-preview"
import { Suspense, useEffect, useRef, useState, useTransition, useCallback } from "react"
import _ from 'lodash'


type FeedPreviewContainerProps = {
    initialFeeds?: FeedPreviewProps[]
}

export const FeedPreviewContainer = ({ initialFeeds = [] }: FeedPreviewContainerProps) => {

    const [feeds, setFeeds] = useState<FeedPreviewProps[]>(initialFeeds)
    // const [isPending, startTransition] = useTransition()
    const [cursor, setCursor] = useState(initialFeeds.length)
    const scrollPosition = useRef(window.scrollY)

    const handleScroll = useCallback(
        _.debounce(() => {
            if (document.body.scrollHeight - 300 < window.scrollY + window.innerHeight) {
                fetchMoreFeeds()
            }
        })
        , [])
    useEffect(() => {


        window.scrollTo(0, scrollPosition.current)
    }, [feeds])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)


        if (feeds.length === 0) {
            fetchMoreFeeds()
        }

        return () => {
            handleScroll.cancel()
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    const fetchMoreFeeds = useCallback(async () => {
        if (window.scrollY > 100) {
            scrollPosition.current = window.scrollY
        }

        const response = sample(5)
        const newFeeds = response

        setFeeds([...feeds, ...newFeeds])
        setCursor(cursor + newFeeds.length)
    }, [])


    // const fetchMoreFeeds2 = async () => {
    //     if (isPending) return

    //     startTransition(async () => {
    //         // alert('scrollPosition: ' + window.scrollY)
    //         if (window.scrollY > 100) {
    //             scrollPosition.current = window.scrollY
    //         }


    //         // alert('scrollPosition: ' + scrollPosition.current)
    //         // const response = await fetch(`/api/feeds?cursor=${cursor}`)
    //         // const newFeeds = (await response.json()).data as FeedPreviewProps[]
    //         const response = sample(5)
    //         const newFeeds = response

    //         setFeeds([...feeds, ...newFeeds])
    //         setCursor(cursor + newFeeds.length)

    //     })
    // }




    return (
        <div className="flex flex-col w-full">
            {feeds.map((feed, index) => (
                <Suspense key={index} fallback={<div>Loading...</div>}>
                    <FeedPreview key={`feed-${index}`} {...feed} />
                </Suspense>
            ))}
        </div>
    )
}