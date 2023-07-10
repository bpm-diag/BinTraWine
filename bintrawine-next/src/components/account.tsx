import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/utils"

const counterVariants = cva(
    "hover:cursor-pointer bg-surface rounded-full p-1 flex flex-row justify-center items-center gap-1 font-primary text-14 font-normal break-normal",
    {
        variants: {
            variant: {
                default: "",
                selected: "bg-primary text-white",
            },
            size: {
                default: "px-2",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface AccountProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof counterVariants> {
}

const Account = React.forwardRef<HTMLDivElement, AccountProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <div
                className={`${cn(counterVariants({ variant, size, className }))}`}
                {...props}
            >

            </div>
        )
    })

export default Account;