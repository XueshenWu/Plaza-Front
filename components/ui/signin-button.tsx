'use client'


import { createClient } from "@/storage/supabase/supabase-cli"
import type { ButtonProps } from "./button";

import { useUIAuthStore } from "@/storage/client/zustand/authStore"
import { useRouter } from "next/navigation";
import { Button } from "./button";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import useSWR from "swr";

type SigninButtonProps = Pick<ButtonProps, 'variant' | 'size' | "className"> & {
    toAuthenticateLabel?: React.ReactNode,
    toDeauthenticatedLabel?: React.ReactNode,
    signinMode: 'route' | 'modal' | 'state',
    signinCallback?: (useDefault: () => void) => void

}



export function SigninButton({ className, variant, size, toAuthenticateLabel, toDeauthenticatedLabel, signinMode, signinCallback }: SigninButtonProps
) {
    const { authenticated } = useUIAuthStore();



    const handleRouteSignin = async () => {
        router.push('/auth/signin');
    }

    const handleModalSignin = async () => {
        
    }

    const handleStateSignin = async () => {

    }

    const supabase = createClient();
    const router = useRouter();
    return (
        <Button
            className={className} variant={variant} size={size}
            onClick={async () => {

                const { data, error } = await supabase.auth.getUser();

                if (data.user) {

                    const { error } = await supabase.auth.signOut();
                    if (error) {
                        console.log(error);
                    }

                    router.push('/');
                } else {
                    switch (signinMode) {
                        case 'route':
                            signinCallback?.(handleRouteSignin) || handleRouteSignin();
                            break;
                        case 'modal':
                            signinCallback?.(handleModalSignin) || handleModalSignin();
                            break;
                        case 'state':
                            signinCallback?.(handleStateSignin) || handleStateSignin();
                            break;
                    }
                }
            }}>
            {authenticated ? toDeauthenticatedLabel ?? "Sign out" : toAuthenticateLabel ?? "Sign in"}
        </Button>
    )
}