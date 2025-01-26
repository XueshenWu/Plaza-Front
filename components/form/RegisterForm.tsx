'use client';
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { useRegisterForm } from '@/hooks/form/register';
import { register } from "@/actions/server/form/register";
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile'
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { useFormState } from "react-hook-form";
import { Hr } from "../ui/hr";
import { Agreement } from "../segment/agreement";
import { OauthButton } from "../ui/oauth-button";


type RegisterFormProps = {
    useOauth?: boolean
    onSigninClick?: () => void,
    signinLink?: string
}



export function RegisterForm({ useOauth, onSigninClick, signinLink }: RegisterFormProps) {
    const { emailField, passwordField, formObj } = useRegisterForm();

    const captchaRef = useRef<TurnstileInstance>(null);
    const router = useRouter()
    const { isValid } = useFormState(formObj)

    return (
        <div className="flex flex-col items-center justify-start py-2 space-y-1">
            <div className="w-full">
                <h1 className="font-bold text-2xl w-full text-left">
                    Sign up
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
                    const res = await register(data, token)
                    if (res) {
                        alert('Register Success, please check your email to activate your account')
                        router.replace("/auth/signin")
                    } else {
                        alert('Register Failed')
                        formObj.reset()
                        captchaRef.current.reset()
                    }





                })} className="space-y-3 w-full h-full flex-grow flex flex-col items-center justify-between">
                    <div className="w-full">
                        {emailField}
                        {passwordField}
                        <div className="grid place-content-center">
                            <Turnstile
                                ref={captchaRef}
                                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_Site_Key!}
                                onExpire={() => captchaRef.current?.reset()}


                            />
                        </div>
                        <div className="text-blue-500 text-xs space-y-2">
                            {(onSigninClick || signinLink) && <div className="space-x-1"><span className="text-black">Already a ORer?</span> <span className="cursor-pointer" onClick={() => {
                                if (onSigninClick) {
                                    onSigninClick()
                                } else {
                                    router.replace(signinLink!)
                                }
                            }}>Sign in</span></div>}
                        </div>
                    </div>
                    <Button type="submit" variant={isValid ? 'primary' : "disabled"} size={'full'} >Submit</Button>
                </form>

            </Form>
        </div>
    )
}

