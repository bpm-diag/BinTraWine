import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/utils"

const buttonVariants = cva(
  "hover:opacity-80 disabled:bg-disabled focus:border-2 focus:border-primary_light focus:bg-white focus:text-primary_light rounded-sm bg-primary_light text-white",
  {
    variants: {
      variant: {
        text: "active:bg-primary active:text-white hover:bg-primary_light",
        link: "disabled:text-disabled disabled:bg-white active:text-primary bg-white text-primary_light"
      },
      size: {
        default: "h-10 px-4 py-2",
      },
    },
    defaultVariants: {
      variant: "text",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        className={`${cn(buttonVariants({ variant, size, className }))} flex justify-center items-center gap-5`}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
