import { CreatePostForm } from "@/components/form/create-post-form"
import { createClient } from "@/storage/supabase/supabase-svr"

export default async function Page({ params }: {
    params: Promise<{
        communityId: string
    }>,
}) {

  
    const communityId = (await params).communityId


    return (
        <div className="px-4 pt-4 flex flex-col gap-y-3">
            <div className="flex items-center justify-between">
                <div className="text-2xl font-semibold">
                    Create Post
                </div>
                <div className="text-sm text-slate-500 cursor-pointer">
                    Drafts
                </div>
            </div>
            <div className="">
                <CreatePostForm  communityId={communityId} />

            </div>

        </div>
    )
}