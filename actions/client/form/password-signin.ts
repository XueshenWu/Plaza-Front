'use client';
import { createClient } from "@/storage/supabase/supabase-cli";
import schema from "@/schemas/passwordSigninSchema";
import { z } from "zod";


type PasswordSigninDto = z.infer<typeof schema>


export async function passwordSignin(formData: PasswordSigninDto, captchaToken: string) {
    const supabase =  createClient();
    try {
        const data = schema.parse(formData);
     
        const authres = await supabase.auth.signInWithPassword({
            email: data.email,
            password: data.password,
            options: {
                captchaToken
            }
        })
     
        if (authres.error) {
            throw new Error(authres.error.message)
        }
        // TODO: add enum return type to specify failure reason: auth failed or captcha failed
    } catch (e) {
        console.log('error', e)
        return false
    }
    return true

}