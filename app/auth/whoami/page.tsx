import { createClient } from "@/storage/supabase/supabase-svr";

export default async function Page() {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.getUser();
    // if (error) {
    //     return <div>{error.message}</div>
    // }
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-y-12">
            <h1 className="text-3xl">Who Am I?</h1>
            <p className="text-5xl">{data.user?.email ?? "Don't Know"}</p>
        </div>
    )

}   