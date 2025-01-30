import { createClient } from "@/storage/supabase/supabase-cli";

const BUCKET = 'icons'

export async function downloadAsset(file: string) {
    const supabase = createClient();
    const { data, error } = await supabase.storage.from(BUCKET).download(file)
    if (error) {
        console.error(error)
        return null
    }
    return data
}