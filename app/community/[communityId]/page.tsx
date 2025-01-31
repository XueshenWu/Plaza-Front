import { CommunityHeader } from "@/components/segment/community-header";
import { ReadonlyURLSearchParams } from "next/navigation";
import { FeedFilter } from "@/components/segment/feed-filter";
import { FeedPreviewContainer } from "@/components/segment/feed-preview-container";
import { FeedCardContainer } from "@/components/segment/feed-card-container";
import { sampleCompact } from "@/app/feed/data";
import { sampleCard } from "@/app/feed/data";


const primaryFilterOptions = ['Best', 'Hot', 'New', 'Top', 'Rising']
const secondaryFilterOptions = new Map<string, string[]>()
secondaryFilterOptions.set('Best', ["Everywhere", "US", "CA", "CN", "Local"])
secondaryFilterOptions.set('Hot', ["Today", "This-Week", "This-Month", "This-Year", "All-Time"])


export default async function Page({ params, searchParams }: {
    params: Promise<{
        communityId: string
    }>,
    searchParams: Promise<{
        [key: string]: string | string[] | undefined
    }>
}) {




    const communityId = (await params).communityId

    const queries = await searchParams

    let primary = queries.primary || "Best"

    if (typeof primary !== 'string') {
        primary = 'Best'
    }

    let secondary = queries.secondary
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

    let view = queries.viewType
    if (view !== 'compact' && view !== 'card') {
        view = 'compact'
    }


    return <div className="w-full">
        <CommunityHeader communityId={communityId} />

        <div className="px-4">
            <FeedFilter base={`/community/${communityId}`} primary={primaryArg} secondary={secondaryArg} view={view as 'compact' | 'card'} />
              {view === 'compact' ? <FeedPreviewContainer initialFeeds={sampleCompact(5)} /> : <FeedCardContainer initialFeeds={sampleCard(5)} />}
        </div>



    </div>
}