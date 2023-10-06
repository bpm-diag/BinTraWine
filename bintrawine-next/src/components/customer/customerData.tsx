import * as React from "react"
import { cn } from "@/utils"
import { MdOpenInNew } from "react-icons/md"

export interface CustomerDataProps
    extends React.HTMLAttributes<HTMLDivElement> {
    title: string
    value: string
}

const CustomerData = (props: CustomerDataProps) => {
        const { className, title, value } = props
        return (
            <div className={cn(className, "flex flex-col bg-white")}>
                <p className="text-primary text-lg font-primary font-thin">{title}</p>
                <p className="text-primary text-lg font-primary font-semibold">{value}</p>
            </div>
        )
    };

export default CustomerData;