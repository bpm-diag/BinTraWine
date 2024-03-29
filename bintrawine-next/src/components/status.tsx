import * as React from "react"
import { cn } from "@/utils"

export interface StatusItemProps
    extends React.HTMLAttributes<HTMLDivElement> {
    completed: boolean
}

const Status = (props: StatusItemProps) => {
        const { className, completed } = props
        return (
            <div className={cn(className, "p-1 self-start rounded-sm", completed ? "bg-aqua" : "bg-purple")}>
                <p className="text-primary font-primary font-normal text-sm">{completed ? "COMPLETATO" : "IN CORSO"}</p>
            </div>
        )
    };

export default Status;