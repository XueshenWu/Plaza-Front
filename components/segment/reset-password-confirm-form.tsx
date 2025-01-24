'use client';



import { useFormState } from 'react-hook-form';

import { useResetPasswordConfirmForm } from '@/hooks/form/reset-password';
import { Button } from '../ui/button';
import { Form } from '../ui/form';
import { resetPasswordConfirm } from '@/actions/form/resetpassword-confirm';
import { useRouter, useSearchParams } from 'next/navigation';
import { EmailOtpType } from '@supabase/supabase-js';
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile';
import { useRef } from 'react';

type ResetPasswordConfirmFormProps = {

}


export function ResetPasswordConfirmForm({ }: ResetPasswordConfirmFormProps) {
    const { newPasswordField, confirmPasswordField, formObj } = useResetPasswordConfirmForm();
    const router = useRouter()
    const { isSubmitting, isValid } = useFormState(formObj);

    const searchParams = useSearchParams()
    const token_hash = searchParams.get('token_hash')
    const type = searchParams.get('type') as EmailOtpType | null

    if (!token_hash || !(type === 'recovery')) {
        router.push('/auth/signin')
        return null
    }


    return (
        <div>
            <div className='space-y-3 '>
                <h1 className='text-2xl'>Reset your password</h1>
                <p className='text-xs text-gray-500'>Enter your email address or username and we'll send you a link to reset your password</p>
            </div>
            <Form {...formObj}>
                <form onSubmit={formObj.handleSubmit(async (data) => {
                    if (isSubmitting) {
                        return
                    }

                    const res = await resetPasswordConfirm(data, token_hash)
                    formObj.reset()
                    if (res) {
                        alert('Password has been reset!')
                        router.push('/auth/signin')
                    } else {
                        alert('An error occurred, please try again later')
                    }

                })} className='space-y-3 py-4'>
                    {newPasswordField}
                    {confirmPasswordField}



                    <Button type="submit" variant={(isSubmitting || !isValid) ? 'disabled' : "primary"} size={'full'} >Reset Password</Button>
                </form>
            </Form>

        </div>
    )
}