import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MdKeyboardArrowDown, MdClose } from 'react-icons/md'

const counterVariants = cva(
    "bg-transparent rounded-full p-1 flex flex-row items-center gap-2 font-primary text-14 font-normal break-normal",
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
    icon?: boolean;
    close?: boolean;
}

const Account = React.forwardRef<HTMLDivElement, AccountProps>(
    ({ className, variant, size, name, surname, role, icon = true, close = false, ...props }, ref) => {
        return (
            <div
                className={`${cn(counterVariants({ variant, size, className }))}`}
                {...props}
            >
                <Avatar className="h-9 w-9">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start gap-0">
                    <p className="text-sm font-primary font-normal">{name} {surname}</p>
                    {role && <p className="text-xs font-normal">{role}</p>}
                </div>
                {icon ? close ?
                    <MdClose className="hover:cursor-pointer" size='24' />
                    :
                    <MdKeyboardArrowDown className="hover:cursor-pointer" size='24' />
                    : <></>
                }
            </div>
        )
    })

export default Account;