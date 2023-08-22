import React from "react";
import { cn } from "@/utils";

export interface NewChainProps
    extends React.HTMLAttributes<HTMLDivElement> {

}

const NewChain = React.forwardRef<HTMLDivElement, NewChainProps>(
    ({ className }, ref) => {

        return (
            <div className={cn("bg-surface_dark min-h-screen flex flex-col", className)}>
                <div className="bg-white py-2 px-8 flex flex-row gap-4 items-center border-b-2 border-b-black_dim">
                    <h1 className="font-primary font-normal text-2xl">Dati</h1>
                    <h1 className="font-primary font-semibold text-2xl">Lotto 1</h1>
                </div>
            </div>
        );
    });

export default NewChain;