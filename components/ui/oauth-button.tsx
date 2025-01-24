'use client'

import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { Button } from "./button"
import React from "react"
import { createClient } from "@/storage/supabase/supabase-cli"

type OauthButtonProps = {
    provider: string // github, google
    icon?: React.ReactNode
    className?: string
}



export function OauthButton({ provider, icon, className }: OauthButtonProps) {
    const supabase = createClient();
    return (
        <Button onClick={() => {
            switch (provider) {
                case 'github': {
                    const res = supabase.auth.signInWithOAuth({
                        provider: 'github',
                        options: {
                            redirectTo: "http://localhost:3000/api/auth/callback/github-oauth"
                        }
                    })
                    break
                }
                default: {
                    alert('Not implemented')
                }
            }
        }} size={"full"} variant={'outline'} className=" text-gray-900 relative ">
            <span className="absolute left-6">{icon}</span>   {`Continue with ${provider}`}
        </Button>
    )
}