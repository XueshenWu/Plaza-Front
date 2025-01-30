import { createClient } from "@/storage/supabase/supabase-svr";
import { v4 } from 'uuid'
const BUCKET = 'icons'

const BASE = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/`

export async function uploadAsset(file: ArrayBuffer, fileBase: 'icon' | 'banner') {
    const supabase = await createClient();
    const path = `${fileBase}/${v4()}`
    const { data, error } = await supabase.storage.from(BUCKET).upload(path, file, {
        contentType: 'image/png'
    })
    if (error) {
        console.error(error)
        return null
    }
    return BASE + data.fullPath
}