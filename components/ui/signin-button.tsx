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
    toDeauthenticatedLabel?: React.ReactNode
}



export function SigninButton({ className, variant, size, toAuthenticateLabel, toDeauthenticatedLabel }: SigninButtonProps
) {
    const {authenticated} = useUIAuthStore();
 

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
                    router.push('/auth/signin');
                }
            }}>
            {authenticated ? toDeauthenticatedLabel ?? "Sign out" : toAuthenticateLabel ?? "Sign in"}
        </Button>
    )
}