'use client'

type OauthButtonProps = {
    provider: string // github, google
    icon?: string
    className?: string
}



export function OauthButton({provider, icon, className}:OauthButtonProps) {
    return (
        <div>
           {`<OauthButton provider=${provider} />`}
        </div>
    )
}