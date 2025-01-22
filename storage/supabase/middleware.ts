import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "./supabase-svr";

export async function updateSession(request: NextRequest) {

    let supabaseResponse = NextResponse.next({
        request
    })

    const supabase = await createClient()
    
    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (
        !user &&
        !request.nextUrl.pathname.startsWith("/auth") &&
        request.nextUrl.pathname !== "/" &&
        !request.nextUrl.pathname.startsWith('/error')&&
        !request.nextUrl.pathname.startsWith('/api/auth')
    ) {
        const url = request.nextUrl.clone()
        url.pathname = '/auth/login'
        return NextResponse.redirect(url)
    }

    return supabaseResponse


}