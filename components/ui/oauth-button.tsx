'use client'

type OAuthButtonProps = {
    provider: string // github, google
    icon: string
    className?: string
}



export function OAuthButton({provider, icon, className}:OAuthButtonProps) {
    return (
        <div>
            <button>OAuth</button>
        </div>
    )
}