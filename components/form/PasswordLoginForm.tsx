'use client';

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { usePasswordLoginForm } from '@/hooks/form/password-login';
import { passwordLogin } from "@/actions/form/password-login";
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile'
import { useRef } from "react";
import { useRouter } from "next/navigation";


// TODO: add storybook

export function PasswordLoginForm() {
    const { emailField, passwordField, formObj } = usePasswordLoginForm();
    const captchaRef = useRef<TurnstileInstance>(null);
    const router = useRouter()

    return (
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


            })}>
                {emailField}
                {passwordField}
                <Turnstile
                    ref={captchaRef}
                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_Site_Key!}
                    onExpire={() => captchaRef.current?.reset()}

                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}

