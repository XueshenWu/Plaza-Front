import { ReadonlyURLSearchParams, redirect } from "next/navigation"
import { EmailOtpType } from "@supabase/supabase-js"
import { createClient } from "@/storage/supabase/supabase-svr"
import { ResetPasswordConfirmForm } from "@/components/segment/reset-password-confirm-form"


export default async function Page() {


   
return (<ResetPasswordConfirmForm  />)


    
   
}