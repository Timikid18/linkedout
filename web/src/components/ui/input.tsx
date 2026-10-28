import * as React from "react"
import { cn } from "cn"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-9 w-full min-w-0 border border-white/15 bg-transparent px-3 py-1 text-base text-white shadow-xs transition-[color,border-color] outline-none selection:bg-[#C7F36B] selection:text-[#0B0D0C] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-white placeholder:text-white/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-[#C7F36B]",
        "aria-invalid:border-[#FF6259]",
        className
      )}
      {...props}
    />
  )
}

export { Input }
