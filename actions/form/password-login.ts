'use server';
import { createClient } from "@/storage/supabase/supabase-svr";
import schema from "@/schemas/passwordLoginSchema";
import { z } from "zod";
import { redirect } from 'next/navigation'
import { revalidatePath } from "next/cache";

type PasswordLoginDto = z.infer<typeof schema>


export async function passwordLogin(formData: PasswordLoginDto, captchaToken: string) {
    const supabase = await createClient();
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
    } catch (e) {
        console.log('error', e)
        return false
    }
    return true

}