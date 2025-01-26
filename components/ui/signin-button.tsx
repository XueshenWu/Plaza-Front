'use client'


import { createClient } from "@/storage/supabase/supabase-cli"
import type { ButtonProps } from "./button";
import { Fragment, useState } from "react";

import { useUIAuthStore } from "@/storage/client/zustand/authStore"
import { useRouter } from "next/navigation";
import { Button } from "./button";

import { Dialog, DialogPortal, DialogTitle, DialogContent, } from "./dialog";

import { SignSwith } from "../segment/sign-switch";

type SigninButtonProps = Pick<ButtonProps, 'variant' | 'size' | "className"> & {
    toAuthenticateLabel?: React.ReactNode,
    toDeauthenticatedLabel?: React.ReactNode,
    signinMode: 'route' | 'dialog' | 'external',
    signinCallback?: (useDefault: () => void) => void

}



export function SigninButton({ className, variant, size, toAuthenticateLabel, toDeauthenticatedLabel, signinMode, signinCallback }: SigninButtonProps
) {
    const { authenticated } = useUIAuthStore();

    const [showDialog, setShowDialog] = useState(false);

    const handleRouteSignin = async () => {
        router.push('/auth/signin');
    }

    const handleDialogSignin = async () => {
        setShowDialog(true);
    }

    const handleExternalSignin = async () => {

    }

    const supabase = createClient();
    const router = useRouter();
    return (
        <Fragment>
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
                            case 'dialog':
                                signinCallback?.(handleDialogSignin) || handleDialogSignin();
                                break;
                            case 'external':
                                signinCallback?.(handleExternalSignin) || handleExternalSignin();
                                break;
                        }
                    }
                }}>
                {authenticated ? toDeauthenticatedLabel ?? "Sign out" : toAuthenticateLabel ?? "Sign in"}

            </Button>
            {signinMode === 'dialog' && <Dialog open={showDialog} onOpenChange={setShowDialog}>

                <DialogPortal >
                    <DialogContent className="[&>button]:hidden px-6 py-4">
                        <DialogTitle className="hidden">Sign in</DialogTitle>
                        <div className="rounded-xl">
                            <SignSwith onClose={() => { setShowDialog(false) }} />
                        </div>

                    </DialogContent>
                </DialogPortal>
            </Dialog>}
        </Fragment>
    )
}