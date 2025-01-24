'use server'

import { confirmSchema } from '@/schemas/resetPasswordSchema'
import { createClient } from '@/storage/supabase/supabase-svr'
import { z } from 'zod'

type ResetPasswordConfirmDto = z.infer<typeof confirmSchema>

export async function resetPasswordConfirm(resetPasswordDto: ResetPasswordConfirmDto, token_hash: string) {



    const supabase = await createClient()
    try {
        const { error: otpError, data } = await supabase.auth.verifyOtp({
            type: 'recovery',
            token_hash,

        })
        if (otpError) {
            throw new Error(`Error verifying otp: ${otpError.message}`)
        }

        const { user } = data
        if(!user){
            throw new Error('User not found')
        }
        const email = user.email
        const { error: confirmError } = await supabase.auth.updateUser({
            email,
            password: resetPasswordDto.newPassword,
        })
        if (confirmError) {
            throw new Error('Error updating user')
        }
        return true
    } catch (e) {
        console.error(e)

        return false
    }

}