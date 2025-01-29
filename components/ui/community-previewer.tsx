'use client'

import { Code2Icon } from "lucide-react"
import { Textarea } from "./textarea"

type CommunityPreviewerProps = {
    name?: string
    description?: string
    icon?: FileList
    banner?: FileList
    plain?: boolean
}

export function CommunityPreviewer({ name, description, icon, banner, plain = false }: CommunityPreviewerProps) {

    const bannerFile = banner?.[0]
    const bannerUrl = bannerFile ? URL.createObjectURL(bannerFile) : null
    const iconFile = icon?.[0]
    const iconUrl = iconFile ? URL.createObjectURL(iconFile) : null

    return (<div className={` shadow-[0_3px_10px_rgb(0,0,0,0.2)] ${plain || 'rounded-t-xl'}`}>
        {plain ? null : !!bannerUrl ? <img src={bannerUrl} alt="banner" className="w-full h-9 object-cover rounded-t-xl" /> : <div className="w-full h-9 rounded-t-xl bg-slate-100" />}
        <div className="p-4 ">


            <div className="flex items-center gap-x-4">
                {plain ? null : !!iconUrl ? <img src={iconUrl} alt="icon" className="w-8 h-8 rounded-full" /> : <Code2Icon className="w-8 h-8 rounded-full" />}
                <div >
                    <div className="text-lg font-semibold">
                        r/{name || 'communityname'}
                    </div>
                    <div className="text-sm text-gray-500">
                        1 member &bull; 1 online
                    </div>
                </div>
            </div>
            {/* <p className="text-gray-600 break-words text-wrap w-full  ">
                {description?.substring(0,3) || 'Your community description'}
            </p> */}
            <Textarea 
              ref={(textarea) => {
                if (textarea) {
                     textarea.style.height = "0px";
                    textarea.style.height = textarea.scrollHeight + "px";
                          }
                    }}
            value={description|| 'Your community description'} className="text-gray-600  break-words text-wrap w-full border-none focus-visible:ring-0"  readOnly/>
        </div>
    </div>)
}