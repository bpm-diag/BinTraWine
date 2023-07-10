import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/utils"

const tagVariants = cva(
    "rounded-full font-primary font-primary px-4 py-2 justify-center items-center hover:cursor-pointer flex grow-0 border-2 border-primary",
    {
        variants: {
            variant: {
                enabled: "",
                selected: "bg-primary hover:opacity-80 text-white",
            },
            size: {
                default: "text-xl",
                small: "text-xs",
            },
        },
        defaultVariants: {
            variant: "enabled",
            size: "default",
        },
    }
)

export interface TagProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tagVariants> {
    selected?: boolean;
    small?: boolean;
}

const Tag = React.forwardRef<HTMLDivElement, TagProps>(
    ({ className, variant, size, selected = false, ...props }, ref) => {

        return (
            <div
                className={`${cn(tagVariants({ variant, size, className }))}`}
                {...props}
            >
            </div>
        );
    });

export default Tag;