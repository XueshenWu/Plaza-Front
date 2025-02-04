import * as React from "react"

import { cn } from "@/lib/utils"


type TextareaProps = React.ComponentProps<"textarea"> & {
  autoHeight?: boolean
}


const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(({ className, autoHeight = false, ...props }, ref) => {
  return (
    <textarea

  
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring  focus-visible:ring-[#029dd5] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}

      onInput={(e) => {
        if (!autoHeight) return;
        const target = e.target as HTMLTextAreaElement;
        target.style.height = '0px';
        target.style.height = target.scrollHeight + 4 + 'px';
      }}

      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
