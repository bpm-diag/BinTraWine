import * as React from "react"
import { cn } from "@/utils"

export interface StatusItemProps
    extends React.HTMLAttributes<HTMLDivElement> {
    completed: boolean
}

const Status = React.forwardRef<HTMLDivElement, StatusItemProps>(
    ({ className, completed }, ref) => {

        return (
            <div className={cn(className, "p-1", completed ? "bg-aqua" : "bg-purple")}>
                <p className="text-primary font-primary font-normal text-sm">{completed ? "COMPLETATO" : "IN CORSO"}</p>
            </div>
        )
    });

export default Status;