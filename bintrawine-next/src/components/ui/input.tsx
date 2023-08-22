import * as React from "react"
import { cn } from "@/utils"
import { MdSearch } from "react-icons/md"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  searchIcon?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, searchIcon, ...props }, ref) => {
    return (
      <div className={cn("flex flex-row items-center gap-2 h-10 w-full rounded-md border-2 text-primary active:bg-primary active:text-white border-primary bg-white px-3 py-2 text-sm", className)}>
        {searchIcon && <MdSearch size={24} />}
        <input
          className="text-primary"
          type={type}
          ref={ref}
          {...props}
        />

      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
