import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/utils"

const counterVariants = cva(
    "rounded-full bg-disabled text-primary font-primary justify-center items-center flex",
    {
        variants: {
            variant: {
                default: "",
                selected: "bg-primary text-white",
            },
            size: {
                default: "px-4",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface CounterProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof counterVariants> {
    selected?: boolean;
}

const Counter = (props: CounterProps) => {
        const { className, variant, size, selected = false } = props
        return (
            <div
                className={`${cn(counterVariants({ variant, size, className }))}`}
                {...props}
            >
            </div>
        );
    };

export default Counter;