import * as React from "react"
import { cn } from "@/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        className={cn("bg-white px-3 py-2 text-primary font-normal border border-primary text-sm w-full rounded-md", className)}
        type={type}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
