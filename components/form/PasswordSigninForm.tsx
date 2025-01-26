'use client';

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { usePasswordSigninForm } from '@/hooks/form/password-signin';
import { passwordSignin } from "@/actions/client/form/password-signin";
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile'
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Hr } from "../ui/hr";
import { useFormState } from "react-hook-form";

import { OauthButton } from "../ui/oauth-button";
import { Agreement } from "../segment/agreement";

// import { useAuthStore } from "@/storage/client/zustand/authStore";



type PasswordSigninFormProps = {
    useOauth?: boolean,
    onSignupClick?: () => void
    signupLink?: string
    onResetPasswordClick?: () => void
    resetPasswordLink?: string
}


export function PasswordSigninForm({ useOauth, onSignupClick, signupLink, onResetPasswordClick, resetPasswordLink }: PasswordSigninFormProps) {
    const { emailField, passwordField, formObj } = usePasswordSigninForm();
    const captchaRef = useRef<TurnstileInstance>(null);
    const router = useRouter()
    const { isValid } = useFormState(formObj)


    return (
        <div className="flex flex-col items-center justify-start py-2 space-y-1">
            <div className="w-full space-y-1">
                <h1 className="font-bold text-2xl w-full text-left">
                    Sign in
                </h1>

                <Agreement />
            </div>


            {useOauth && <div className="w-full space-y-2 flex flex-col items-center justify-center">
                <OauthButton icon={<img src='/github-mark.svg' className="icon" />} provider="github" />
                <OauthButton icon={<img src='/google-icon.svg' className="icon" />} provider="google" />
            </div>}


            {useOauth && <Hr text="OR" />}
            <Form {...formObj}>
                <form onSubmit={formObj.handleSubmit(async (data) => {

                    if (!captchaRef.current) {
                        return
                    }
                    const token = await captchaRef.current.getResponsePromise();
                    if (!token) {
                        alert('Please complete the captcha')
                        captchaRef.current.reset()
                        return
                    }

                    const res = await passwordSignin(data, token)
                    if (res) {
                        alert('Signin Success')

                        router.replace("/auth/whoami")


                    } else {
                        alert('Signin Failed')
                        formObj.reset()
                        captchaRef.current.reset()
                    }


                })} className="w-full space-y-2 h-full flex-grow flex flex-col items-center justify-between">
                    <div className="w-full">
                        {emailField}
                        {passwordField}
                        <div className="flex justify-center">
                            <Turnstile
                                ref={captchaRef}
                                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_Site_Key!}
                                onExpire={() => captchaRef.current?.reset()}
                            />
                        </div>
                        <div className="text-blue-500 text-xs space-y-2">
                            {(resetPasswordLink || onResetPasswordClick) && <div className="cursor-pointer text-blue-500 hover:text-blue-400 transition-colors duration-100" onClick={() => {
                                if (onResetPasswordClick) {
                                    onResetPasswordClick()
                                } else {
                                    router.push(resetPasswordLink!)
                                }
                            }}>Forgot Password?</div>}

                            {(signupLink || onSignupClick) && <div className="space-x-1"><span className="text-black">New to OR?</span> <span className="cursor-pointer" onClick={() => {
                                if (onSignupClick) {
                                    onSignupClick()
                                } else {
                                    router.push(signupLink!)
                                }
                            }}>Sign up</span></div>}
                        </div>

                    </div>

                    <Button type="submit" variant={isValid ? 'primary' : "disabled"} size={'full'} >Submit</Button>
                </form>
            </Form>



        </div>
    )
}

