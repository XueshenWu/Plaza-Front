import { createClient } from "@/storage/supabase/supabase-svr";
import { v4 } from 'uuid'
const BUCKET = 'media'
const BASE = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/`

export async function uploadMedia(file: string, fileType: 'image' | 'video'): Promise<string | null> {
    const supabase = await createClient();
    const path = `${fileType}/${v4()}`

    const { data, error } = await supabase.storage.from(BUCKET).upload(path, file)
    if (error) {
        console.error(error)
        return null
    }
    return BASE + data.fullPath

}

