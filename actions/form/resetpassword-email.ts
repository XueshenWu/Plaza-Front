'use server'

import { requestSchema } from "@/schemas/resetPasswordSchema"
import { createClient } from "@/storage/supabase/supabase-svr"
import { z } from 'zod'

type ResetPasswordDto = z.infer<typeof requestSchema>

export async function sendResetPasswordEmail(resetPasswordDto: ResetPasswordDto, captchaToken: string) {
    try {
        const data = requestSchema.parse(resetPasswordDto)
        const supabase = await createClient()
        const { error } = await supabase.auth.resetPasswordForEmail(data.email, {
            captchaToken
        })
        if (error) {
            throw error
        }
        return true
    } catch (e) {
        console.error(e)
        return false
    }
}