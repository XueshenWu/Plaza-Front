'use server'

import { queryCommunity } from "@/storage/server/database/communities"
import { Code2, Plus } from "lucide-react"
import { notFound, ReadonlyURLSearchParams } from "next/navigation"
import { SingleFormDialog } from "./single-form-dialog"
import { FeedFilter } from "./feed-filter"
import Link from "next/link"


type CommunityHeaderProps = {
    communityId: string
}

export async function CommunityHeader({ communityId }: CommunityHeaderProps) {

    const communityInfo = await queryCommunity(communityId)




    if (!communityInfo) {
        notFound()
    }

    return (<div>

        <div className="flex flex-col items-start w-full">
            {communityInfo.banner ? <img src={communityInfo.banner} alt="" className="h-16 w-full object-cover" /> : <div className="h-16 w-full bg-gradient-to-l from-slate-500 to-slate-800" />}
            <div className="flex flex-col px-6 pt-8 gap-y-4 w-full items-start ">
                <div className="flex items-center justify-start gap-x-4  w-full">
                    {communityInfo.icon ? <img src={communityInfo.icon} alt="" className="border-4 h-12 w-12 rounded-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" /> : <Code2 className="h-12 w-12 rounded-full" />}
                    <div className="flex flex-col items-start w-full">
                        <div className="text-lg font-semibold">
                            r/{communityInfo.name}
                        </div>
                        <div className="flex flex-row items-center justify-between text-sm w-full">
                            <div className="inline-flex flex-row items-center gap-x-2 text-sm">
                                <div>
                                    909k members
                                </div>
                                <div>
                                    47 online
                                </div>
                            </div>
                            <div className=" underline cursor-pointer hover:text-slate-600">
                                About
                            </div>

                        </div>
                    </div>

                </div>
                <div className="flex items-center justify-start">
                    <div>
                        {/* <SingleFormDialog form="create-post" trigger={
                            <div className="border-[#333d42]  text-xs font-semibold  flex items-center  gap-x-2 px-3 py-2 border rounded-3xl">
                                <Plus className="h-4 w-4" />
                                <div>Create Post</div>
                            </div>
                        } /> */}
                        <Link href={`/community/${communityId}/submit`}>
                        <div className="border-[#333d42]  text-xs font-semibold  flex items-center  gap-x-2 px-3 py-2 border rounded-3xl">
                                <Plus className="h-4 w-4" />
                                <div>Create Post</div>
                            </div></Link>
                    </div>
                </div>

            </div>
        </div>
    </div>)
}