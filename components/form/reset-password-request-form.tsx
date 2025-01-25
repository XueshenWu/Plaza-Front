'use client';



import { useFormState } from 'react-hook-form';

import { useResetPasswordRequestForm } from '@/hooks/form/reset-password';
import { Button } from '../ui/button';
import { Form } from '../ui/form';
import { sendResetPasswordEmail } from '@/actions/server/form/resetpassword-email';
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile';
import { useRef } from "react";
import { useRouter } from 'next/navigation';

type ResetPasswordRequestFormProps = {
    onSigninClick?: () => void
    signinLink?: string
}

export function ResetPasswordRequestForm() {
    const { emailField, formObj } = useResetPasswordRequestForm();

    const { isSubmitting, isValid } = useFormState(formObj);
    const captchaRef = useRef<TurnstileInstance>(null);
    const router = useRouter()

    return (
        <div>
            <div className='space-y-3 '>
                <h1 className='text-2xl'>Reset your password</h1>
                <p className='text-xs text-gray-500'>Enter your email address or username and we’ll send you a link to reset your password</p>
            </div>
            <Form {...formObj}>
                <form onSubmit={formObj.handleSubmit(async (data) => {
                    if (!captchaRef.current || isSubmitting) {
                        return
                    }
                    const captchaToken = await captchaRef.current.getResponsePromise()
                    if (!captchaToken) {
                        alert('Please complete the captcha')
                        captchaRef.current.reset()
                        return
                    }
                    const res = await sendResetPasswordEmail(data, captchaToken)
                    formObj.reset()
                    if (res) {
                        alert('Password reset email sent!')
                        router.push('/')

                    } else {
                        alert('An error occurred, please try again later')
                        captchaRef.current.reset()
                    }

                })} className='space-y-3 py-4 h-full flex-grow flex flex-col items-center justify-between'>
                    <div className='space-y-2'>
                        {emailField}
                        <Turnstile
                            ref={captchaRef}
                            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_Site_Key!}
                            onExpire={() => captchaRef.current?.reset()}
                        />
                        <div>
                            <a target='_blank' className='text-blue-500 text-sm hover:text-blue-400 transition-colors cursor-pointer duration-150'>Need Help?</a>
                        </div>
                    </div>
                    <Button type="submit" variant={(isSubmitting || !isValid) ? 'disabled' : "primary"} size={'full'} >Reset Password</Button>
                </form>
            </Form>

        </div>
    )
}