'use server'

import Link from "next/link"
import * as React from "react"

import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"


const NavLinkVariants = cva(
    'inline-flex gap-x-2  duration-100 items-center entry-default justify-start  pl-6 pr-6 py-3', {
    variants: {
        variant: {
            default: "",
            sub: " rounded-l-none border-l hover:border-l-[#b8b8b8] border-l-[#e6e6e6]",
            
        },
        active: {
            true: 'bg-[#e5ebee] hover:bg-[#e5ebee]',
            false: ''
        },

    },
    defaultVariants: {
        variant: "default",
        active: false
    }
}
)

type NavLinkProps =
    React.AnchorHTMLAttributes<typeof Link>
    & VariantProps<typeof NavLinkVariants>
    & {
        icon?: React.ReactNode,
        label?: string,
        plain?: boolean
    }




export async function NavLink({ icon, href, label, variant, className, active, plain, ...props }: NavLinkProps) {

    if (!!plain) {
        return (
            <Link href={href ?? "/"} className={cn(className, 'hover:text-blue-400 text-blue-500 cursor-pointer')}>
                {label}
            </Link>
        )
    } else {

        return (

            <Link href={href ?? "/"} className={cn(NavLinkVariants({ variant, active, className }))}>
                <span>{icon}</span>  {label}
            </Link>

        )
    }
}