import ProductCard from "@/components/productCard";
import { TabProps } from "../../pages";
import React from 'react';
import { Input } from "@/components/ui/input";
import Paginator from "@/components/paginator";
import { cn } from "@/utils";
import { api } from "@/utils/api";
import Loader from "@/components/loading";
import { getNumberOfLotti, getCompleted, checkIdLotto } from "@/utils/utilsFunctions";
import { useState } from "react";

export interface CatalogProps
    extends React.HTMLAttributes<HTMLDivElement> {
    number_of_chains: number;
    setTabs: React.Dispatch<React.SetStateAction<TabProps[]>>
}

const getNumberOfPages = (numberOfLotti: number, lottiPerPage: number): number => {
    return Math.ceil(numberOfLotti / lottiPerPage);
}

const Catalog = React.forwardRef<HTMLDivElement, CatalogProps>(
    ({ className, number_of_chains, setTabs }, ref) => {

        const [currentPage, setCurrentPage] = useState<number>(1);
        const getLatestLotto = api.blockChainRouter.getManualData.useQuery(checkIdLotto(number_of_chains))
        if (getLatestLotto.isFetched) {
            console.log(checkIdLotto(number_of_chains), getLatestLotto.data)
        }

        return (
            <div className={cn("flex flex-col gap-10 w-full", className)}>
                <div className="bg-white py-2 px-8 flex flex-row gap-4 items-center border-b-2 border-b-black_dim">
                    <h1 className="font-primary font-semibold text-2xl">Catalogo (221)</h1>
                </div>
                <div className="flex justify-center items-center">
                    <Input className="w-1/3 rounded-none text-sm" placeholder="Cerca per Lotto o Terreno" />
                </div>
                <div className="p-4 grid grid-cols-4 grid-rows-2 gap-4">
                    {
                        getLatestLotto.isLoading ?
                            <Loader /> :
                            getLatestLotto.isError ?
                                <p>Error on fetching data</p> :
                                Array.from(Array(getNumberOfLotti(Number(number_of_chains)))).map(function (_, i) {
                                    return <ProductCard key={i + 1} setTabs={setTabs} idLotto={`${i + 1}`} name={`Lotto ${i + 1}`} status={getCompleted(Number(number_of_chains), Number(i + 1), getLatestLotto.data.completed) ? "COMPLETATO" : "IN CORSO"} lastUpdate="14/06/2023, 13:48" avatars={["https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300"]} />;
                                })
                    }
                </div>
                <div className="flex justify-center items-center">
                    {number_of_chains > 8 && <Paginator numberOfPages={getNumberOfPages(number_of_chains, 8)} selectedPage={currentPage} />}
                </div>
            </div>
        );
    });

export default Catalog;