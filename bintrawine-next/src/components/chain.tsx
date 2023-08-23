import * as React from "react"
import { MdDone, MdHourglassEmpty } from "react-icons/md";
import { cn } from "@/utils";

export interface ChainProps
    extends React.HTMLAttributes<HTMLDivElement> {
    chainType: string;
    completed?: boolean;
}

const Chain = React.forwardRef<HTMLDivElement, ChainProps>(
    ({ className, chainType, completed = false }, ref) => {

        return (
            <div className={cn("flex flex-col p-7 hover:cursor-pointer hover:bg-surface_dark", className)}>
                <p className="text-primary font-primary font-normal text-xl">{chainType}</p>
                <div className="flex flex-row gap-1 items-center">
                    {completed ? <MdDone size={24} /> : <MdHourglassEmpty size={24} />}
                    <p className="text-primary font-primary font-normal text-sm">{completed ? "Compilazione completata" : "Compilazione in corso"}</p>
                </div>
            </div>
        )
    });

export default Chain;