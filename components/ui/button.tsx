import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-[#d93900] text-white hover:bg-[#c72e00] rounded-3xl dark:bg-slate-800",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        default:
          "bg-[#f0f0f0] text-black hover:bg-[#e0e0e0]",
        ghost: "hover:bg-accent hover:text-accent-foreground active:bg-accent/70",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-3xl px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        mobile: "h-7 px-2 py-1 ",
      },
      v_disabled: {
        true: "bg-gray-400 text-gray-800 cursor-not-allowed hover:bg-gray-400",
        false: "",
      },
      
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      v_disabled: false,
    },
  }
)

type ButtonProps =
    React.ButtonHTMLAttributes<HTMLButtonElement>
    & VariantProps<typeof buttonVariants>
    & {
        children?: React.ReactNode,
        className?: string,
        asChild?: boolean
    }


const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, v_disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className, v_disabled }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants, type ButtonProps }
