import * as React from "react"
import { MdDone, MdHourglassEmpty } from "react-icons/md";
import { cn } from "@/utils";


export interface ChainProps
    extends React.HTMLAttributes<HTMLDivElement> {
    chainType: string;
    completed?: boolean;
    disabled?: boolean;
}

const Chain = React.forwardRef<HTMLDivElement, ChainProps>(
    ({ className, chainType, completed = false, disabled = false, ...props }, ref) => {

        return (
            <div className={cn("flex flex-col p-7", disabled ? "hover:cursor-not-allowed" : "hover:cursor-pointer hover:bg-surface_dark focus:bg-surface_dark", className)} {...props}>
                <p className={`font-primary font-normal text-xl ${disabled ? 'text-black_dim' : 'text-primary'}`}>{chainType}</p>
                <div className={`flex flex-row gap-1 items-center ${disabled ? 'text-black_dim' : 'text-primary'}`}>
                    {completed ? <MdDone size={24} /> : <MdHourglassEmpty size={24} />}
                    <p className={`font-primary font-normal text-sm ${disabled ? 'text-black_dim' : 'text-primary'}`}>{completed ? "Compilazione completata" : "Compilazione in corso"}</p>
                </div>
            </div>
        )
    });

export default Chain;