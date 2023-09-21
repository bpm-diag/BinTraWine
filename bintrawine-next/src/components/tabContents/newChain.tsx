import React, { useEffect, useState } from "react";
import { MdOutlineBubbleChart } from "react-icons/md";
import { Separator } from "../ui/separator";
import { cn } from "@/utils";
import ChainForm from "@/components/chainForms/chainForm";
import DoughnutChart from "@/components/charts/doughnut";
import { api } from "@/utils/api";
import { useSession } from 'next-auth/react';
import Loader from "@/components/loading";
import { totalPercentage, userPercentage } from "@/utils/utilsFunctions";

export interface NewChainProps
    extends React.HTMLAttributes<HTMLDivElement> {
    idLotto: string
}

const NewChain = React.forwardRef<HTMLDivElement, NewChainProps>(
    ({ className, idLotto }, ref) => {

        const utils = api.useContext()
        const getLotto = api.blockChainRouter.getManualData.useQuery(Number(idLotto))
        const sensori = api.blockChainRouter.getSensoriData.useQuery(Number(idLotto));
        const setSensori = api.blockChainRouter.setSensoriData.useMutation()
        console.log(sensori.data)
        useEffect(() => {
            if (sensori.isFetched) {
                if (!sensori.data!.completed) {
                    setSensori.mutate(Number(idLotto))
                }
            }
        }, [sensori])

        const { data: session, status } = useSession();

        return (
            <div className={cn("flex flex-col w-full", className)}>
                {/* Titolo */}
                <div className="bg-white py-2 px-8 flex flex-row gap-4 items-center border-b-2 border-b-black_dim">
                    <h1 className="font-primary font-normal text-2xl">Compilazione</h1>
                    <h1 className="font-primary font-semibold text-2xl">Lotto {idLotto}</h1>
                </div>
                {/* Compilazione */}
                {
                    (getLotto.isLoading || sensori.isLoading || !sensori.data?.completed) ?
                        <Loader className="justify-center items-center" /> :
                        (getLotto.isError || sensori.isError) ?
                            <p>Error on Loading</p> :
                            <div className="p-7 grid grid-cols-4 gap-4">
                                {/* Stato compilazione */}
                                <div className="bg-surface flex flex-col gap-8 p-8 rounded-sm">
                                    <div className="flex flex-row gap-2 items-center">
                                        <MdOutlineBubbleChart size={32} className='text-primary' />
                                        <p className="text-primary font-primary text-4xl font-normal">Lotto {idLotto}</p>
                                    </div>
                                    <Separator className="bg-surface_dark" />
                                    <div className="flex flex-col flex-1 gap-10">
                                        <div>
                                            <p className="font-primary text-primary text-xl font-normal">Stato Compilazione</p>
                                        </div>
                                        <div className="flex flex-row sm:flex-col gap-8 items-center">
                                            <p className="basis-1/2 font-primary text-primary text-xl font-normal">Percentuale di compilazione dei <span className="font-bold">tuoi dati</span></p>
                                            <div className="basis-1/2">
                                                <DoughnutChart percentage={userPercentage(getLotto.data, session?.user.roles ?? [])} fullData />
                                            </div>
                                        </div>
                                        <div className="flex flex-row sm:flex-col-reverse gap-8 items-center">
                                            <div className="basis-1/2">
                                                <DoughnutChart percentage={totalPercentage(getLotto.data)} />
                                            </div>
                                            <p className="basis-1/2 font-primary text-primary text-xl font-normal">Percentuale di compilazione di <span className="font-bold">tutti i dati della filiera</span></p>
                                        </div>
                                    </div>
                                </div>
                                {/* Filiera */}
                                <ChainForm idLotto={Number(idLotto)} filieraChainSensori={sensori.data!} filieraChain={getLotto.data!} />
                            </div>
                }
            </div>
        );
    });

export default NewChain;