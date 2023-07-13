import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MdKeyboardArrowDown, MdClose } from 'react-icons/md'

const counterVariants = cva(
    "hover:cursor-pointer bg-transparent rounded-full p-1 flex flex-row justify-center items-center gap-2 font-primary text-14 font-normal break-normal",
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
    name?: string | null;
    surname?: string;
    role?: string;
    close?: boolean;
}

const Account = React.forwardRef<HTMLDivElement, AccountProps>(
    ({ className, variant, size, name, surname, role, close = false, ...props }, ref) => {
        return (
            <div
                className={`${cn(counterVariants({ variant, size, className }))}`}
                {...props}
            >
                <Avatar className="h-9 w-9">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-0">
                    <p>{name} {surname}</p>
                    {role && <p className="text-xs font-normal">{role}</p>}
                </div>
                {close ?
                    <MdClose size='24' />
                    :
                    <MdKeyboardArrowDown size='24' />
                }
            </div>
        )
    })

export default Account;