'use server'

import Link from "next/link"
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"


const NavLinkVariants = cva(
    'inline-flex gap-x-2 transition-colors duration-100 items-center justify-start bg-white hover:bg-[#f6f8f9] pl-6 pr-6 py-3', {
    variants: {
        variant: {
            default: "rounded-lg",
            sub: " rounded-r-lg border-l hover:border-l-[#b8b8b8] border-l-[#e6e6e6]"
        },
        active: {
            true: 'bg-[#e5ebee] hover:bg-[#e5ebee]',
            false: ''
        }
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
    }




export async function NavLink({ icon, href, label, variant, className, active, ...props }: NavLinkProps) {

    return (

        <Link href={href ?? "/"} className={cn(NavLinkVariants({ variant, active, className }))}>
            {icon} {label}
        </Link>

    )
}