import { FeedCard } from "@/components/segment/feed-card";
import { queryPostDetailById } from "@/storage/server/database/posts";
import { createClient } from "@/storage/supabase/supabase-svr";
import { notFound } from "next/navigation";


export default async function Page({ params }: {
    params: Promise<{ postId: string }>
}) {
    const { postId } = await params;

    const supabase = await createClient()
    const { data: { user }, error } = await supabase.auth.getUser()
    if (error) {
        notFound()
    }

    const data = await queryPostDetailById({
        userId: user?.id,
        postId
    })

    if (!data) {
        notFound()
    }

    return (<div className="px-4 pt-6">
        <FeedCard {...data}
            mode="full"
            show="community"
        />
    </div>)
}