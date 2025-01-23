'use client';
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { useRegisterForm } from '@/hooks/form/register';
import { register } from "@/actions/form/register";
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile'
import { useRouter } from "next/navigation";
import { useRef } from "react";

export function RegisterForm() {
    const { emailField, passwordField, formObj } = useRegisterForm();

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
                const res = await register(data, token)
                if(res){
                    alert('Register Success, please check your email to activate your account')
                    router.replace("/auth/login")
                }else{
                    alert('Register Failed')
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

