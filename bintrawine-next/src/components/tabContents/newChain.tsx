import React from "react";
import Chain from "../chain";
import Account from "../account";
import { MdOutlineBubbleChart, MdAddCircleOutline } from "react-icons/md";
import { Separator } from "../ui/separator";
import { cn } from "@/utils";
import ChainForm from "@/components/chainForms/chainForm";

export interface NewChainProps
    extends React.HTMLAttributes<HTMLDivElement> {
}

const NewChain = React.forwardRef<HTMLDivElement, NewChainProps>(
    ({ className }, ref) => {

        return (
            <div className={cn("flex flex-col", className)}>
                {/* Titolo */}
                <div className="bg-white py-2 px-8 flex flex-row gap-4 items-center border-b-2 border-b-black_dim">
                    <h1 className="font-primary font-normal text-2xl">Compilazione</h1>
                    <h1 className="font-primary font-semibold text-2xl">Lotto 9</h1>
                </div>
                {/* Compilazione */}
                <div className="p-7 grid grid-cols-4 gap-4">
                    {/* Stato compilazione */}
                    <div className="bg-surface flex flex-col gap-8 p-8 rounded-sm">
                        <div className="flex flex-row gap-2 items-center">
                            <MdOutlineBubbleChart size={32} className='text-primary' />
                            <p className="text-primary font-primary text-4xl font-normal">Lotto 9</p>
                        </div>
                        <Separator className="bg-surface_dark" />
                        <div className="flex flex-col flex-1 gap-10">
                            <div>
                                <p className="font-primary text-primary text-xl font-normal">Stato Compilazione</p>
                            </div>
                            <div className="flex flex-row items-center">
                                <p className="basis-1/2 font-primary text-primary text-xl font-normal">Percentuale di compilazione dei <span className="font-bold">tuoi dati</span></p>
                                <div className="basis-1/2">Garfico 1</div>
                            </div>
                            <div className="flex flex-row items-center">
                                <div className="basis-1/2">Garfico 2</div>
                                <p className="basis-1/2 font-primary text-primary text-xl font-normal">Percentuale di compilazione di <span className="font-bold">tutti i dati della filiera</span></p>
                            </div>
                        </div>
                    </div>
                    {/* Filiera */}
                    <ChainForm />
                </div>
            </div>
        );
    });

export default NewChain;