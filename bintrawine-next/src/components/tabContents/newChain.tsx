import React from "react";
import Chain from "../chain";
import Account from "../account";
import { MdOutlineBubbleChart, MdAddCircleOutline, MdCircle } from "react-icons/md";
import { Separator } from "../ui/separator";
import { cn } from "@/utils";
import { Button } from "../ui/button";

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
                        <div className="flex flex-col flex-1 justify-between">
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
                    <div className="bg-surface col-span-3 rounded-sm grid grid-cols-5">
                        {/* Lista Filiera */}
                        <div className="bg-surface col-span-1">
                            <Chain chainType="Agronomo" completed />
                            <Chain chainType="Viticoltore" completed />
                            <Chain chainType="Produttore" />
                            <Chain chainType="Imbottigliatore" />
                            <Chain chainType="Distributore" />
                            <Chain chainType="rivenditore" />
                            <Chain chainType="Ente Certificatore" />
                        </div>
                        {/* Dettaglio Catena */}
                        <div className="p-7 flex flex-col col-span-2 gap-4 justify-between bg-white">
                            {/* Titolo */}
                            <div>
                                <p className="text-primary font-primary text-xl font-bold">Imbottigliatore</p>
                            </div>
                            {/* Created By */}
                            <div className="flex flex-col items-start">
                                <p className="text-primary font-primary text-base font-semibold">Creato da</p>
                                <Account className="bg-accent" icon={false} variant='selected' name="Fabio" surname="D'Adda" />
                            </div>
                            {/* Aggiunta Persone */}
                            <div className="flex flex-col gap-4">
                                {/* Titoli */}
                                <div className="flex flex-row items-start">
                                    <div className="flex flex-col basis-1/2">
                                        <p className="text-primary font-primary text-base font-semibold">Collaboratori:</p>
                                        <p className="text-black_dim font-primary text-base font-semibold">Compila il form insieme al tuo team</p>
                                    </div>
                                    <div className="flex flex-row basis-1/2 justify-end items-center hover:cursor-pointer">
                                        <p className="font-primary text-base font-semibold">Aggiungi collaboratori</p>
                                        <MdAddCircleOutline size={24} className="text-primary" />
                                    </div>
                                </div>
                                {/* Persone aggiunte */}
                                <div className="flex flex-wrap gap-2">
                                    <Account className="bg-accent_light" close variant='selected' name="Fabio" surname="D'Adda" />
                                    <Account className="bg-accent_light" close variant='selected' name="Fabio" surname="D'Adda" />
                                    <Account className="bg-accent_light" close variant='selected' name="Fabio" surname="D'Adda" />
                                    <Account className="bg-accent_light" close variant='selected' name="Fabio" surname="D'Adda" />
                                </div>
                                <Separator className="bg-surface_dark" />
                            </div>
                            {/* Compilation Mode */}
                            <div className="flex flex-col gap-4">
                                <div>
                                    <p className="text-primary font-primary text-base font-semibold">Modalità di compilazione:</p>
                                    <p className="text-black_dim font-primary text-base font-semibold">Inserisci le informazioni necessarie e verifica i dati inseriti automaticamente</p>
                                </div>
                                <div>
                                    <Button variant="compilation">Inserzione manuale</Button>
                                    <Button variant="compilation">Raccolta Automatica</Button>
                                    <Button variant="compilation">Dati Produttore</Button>
                                    <Button variant="compilation">Dati Agronomo</Button>
                                </div>
                            </div>
                        </div>
                        {/* Form Dettaglio Catena */}
                        <div className="bg-gray-800 col-span-2"></div>
                    </div>
                </div>
            </div>
        );
    });

export default NewChain;