import { CreatePostForm } from "@/components/form/create-post-form"
import { createClient } from "@/storage/supabase/supabase-svr"

export default async function Page({ params }: {
    params: Promise<{
        communityId: string
    }>,
}) {

    const supabase = await createClient()
    const { data: { user }, error } = await supabase.auth.getUser()
    if (error || !user) {
        console.error(error)
        return <div>Failed to load user</div>
    }
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
                <CreatePostForm userId={user.id} communityId={communityId} />

            </div>

        </div>
    )
}