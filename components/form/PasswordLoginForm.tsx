'use client';

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { usePasswordLoginForm } from '@/hooks/form/password-login';
import { passwordLogin } from "@/actions/form/password-login";
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile'
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { Hr } from "../ui/hr";
import { useFormState } from "react-hook-form";
import Link from "next/link";


// TODO: add storybook

type PasswordLoginFormProps = {
    useOauth?: boolean,
    onSignupClick?: () => void
}

export function PasswordLoginForm({ useOauth, onSignupClick }: PasswordLoginFormProps) {
    const { emailField, passwordField, formObj } = usePasswordLoginForm();
    const captchaRef = useRef<TurnstileInstance>(null);
    const router = useRouter()
    const { isValid } = useFormState(formObj)

    return (
        <div className="flex flex-col items-center justify-start py-2">
            <h1 className="font-bold text-2xl w-full text-left">
                Login
            </h1>
            <div>
                {`<Agreement/>`}
            </div>
            {useOauth && <div className="*:w-full flex flex-col items-center justify-center">
                <div >
                    {`<OAuth-Github/>`}
                </div>
                <div>
                    {`<OAuth-Google/>`}
                </div>
            </div>}
            {useOauth && <Hr text="Or" />}
            <Form {...formObj}>
                <form onSubmit={formObj.handleSubmit(async (data) => {

                    if (!captchaRef.current) {
                        return
                    }


                    const token = await captchaRef.current.getResponsePromise();
                    if (!token) {
                        alert('Please complete the captcha')
                        return
                    }

                    const res = await passwordLogin(data, token)
                    if (res) {
                        alert('Login Success')
                        router.replace("/auth/whoami")
                    } else {
                        alert('Login Failed')
                        formObj.reset()
                    }


                })} className="space-y-3">
                    {emailField}
                    {passwordField}
                    <Turnstile
                        ref={captchaRef}
                        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_Site_Key!}
                        onExpire={() => captchaRef.current?.reset()}
                    />
                    <div className="text-blue-500 text-xs space-y-2">
                        <div className="cursor-pointer">Forgot Password?</div>
                        {onSignupClick && <div className="space-x-1"><span className="text-black">New to OR?</span> <span className="cursor-pointer" onClick={onSignupClick}>Sign Up</span></div>}
                    </div>

                    <Button type="submit" variant={isValid ? 'primary' : "disabled"} size={'full'} >Submit</Button>
                </form>
            </Form>
        </div>
    )
}

