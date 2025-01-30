
'use server'

import { createCommunity } from "@/storage/server/database/communities";
import { createClient } from "@/storage/supabase/supabase-svr";
import { uploadAsset } from "@/storage/server/file/assets";
export async function submitCreateCommunity(
    name: string,
    description: string,
    visibility: 'PUBLIC' | 'RESTRICTED' |'PRIVATE',
    iconData?: ArrayBuffer|null,
    bannerData?: ArrayBuffer|null,
    topics?: string[],

) {

    const supabase = await createClient();

    const { data, error } = await supabase.auth.getUser()
    if (error || !data.user) {
        return false
    }

    let icon_url: string | null = null

    if (iconData) {

        console.log('icon', iconData)

        icon_url = await uploadAsset(iconData, 'icon')
        if (!icon_url) {
            console.log('icon upload failed')
            return false
        }
    }

    let banner_url: string | null = null
    if (bannerData) {
        banner_url = await uploadAsset(bannerData, 'banner')
        if (!banner_url) {
            console.log('banner upload failed')
            return false
        }
    }
    console.log('icon_url', icon_url)
    console.log('banner_url', banner_url)
    return !!await createCommunity(name, description, visibility, data.user.id, icon_url, banner_url, topics)
}