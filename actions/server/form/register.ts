'use server';


import { z } from 'zod'
import schema from '@/schemas/registerSchema'
import { createClient } from '@/storage/supabase/supabase-svr'

type RegisterDto = z.infer<typeof schema>

export async function register(formData: RegisterDto, captchaToken: string) {
    const supabase = await createClient()
    try{
        const data = schema.parse(formData)
        const { error } = await supabase.auth.signUp({
            email: data.email,
            password: data.password,
            options:{
                captchaToken,
            }
        })
        console.log('signup:', error)
        if (error) {
            throw new Error(error.message)
        }

    }catch{
       return false
    }
    return true
}