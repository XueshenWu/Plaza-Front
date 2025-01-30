import { FeedPreviewContainer } from "@/components/segment/feed-preview-container"
import { sampleCard, sampleCompact } from "./data"
import { FeedCard } from "@/components/segment/feed-card"
import { Fragment } from "react"
import { FeedFilter, PreviewType } from "@/components/segment/feed-filter"
import { FeedCardContainer } from "@/components/segment/feed-card-container"

const primaryFilterOptions = ['Best', 'Hot', 'New', 'Top', 'Rising']
const secondaryFilterOptions = new Map<string, string[]>()
secondaryFilterOptions.set('Best', ["Everywhere", "US", "CA", "CN", "Local"])
secondaryFilterOptions.set('Hot', ["Today", "This-Week", "This-Month", "This-Year", "All-Time"])



export default async function Page({ searchParams }: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    
    const params = (await searchParams)


    let primary = params.primary || "Best"

    if (typeof primary !== 'string') {
        primary = 'Best'
    }

    let secondary = params.secondary
    if (typeof secondary !== 'string' || !secondaryFilterOptions.get(primary)?.includes(secondary)) {
        secondary = secondaryFilterOptions.get(primary)?.[0]
    }

    const primaryArg = {
        options: primaryFilterOptions,
        selected: primary
    }

    const secondaryArg = secondary ? {
        options: secondaryFilterOptions.get(primary) ?? [],
        selected: secondary
    } : undefined


    let view = params.viewType
    if (view !== 'compact' && view !== 'card') {
        view = 'compact'
    }

 

    return (
        <Fragment>
            <FeedFilter primary={primaryArg} secondary={secondaryArg} view={view as 'compact' | 'card'} />
            {view === 'compact' ? <FeedPreviewContainer initialFeeds={sampleCompact(5)} /> : <FeedCardContainer initialFeeds={sampleCard(5)} />}
        </Fragment>

    )

}