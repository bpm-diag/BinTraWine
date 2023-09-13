import ProductCard from "@/components/productCard";
import { TabProps } from "../../pages";
import React from 'react';
import { Input } from "@/components/ui/input";
import Paginator from "@/components/paginator";
import { cn } from "@/utils";

export interface CatalogProps
    extends React.HTMLAttributes<HTMLDivElement> {
    number_of_chains: number;
    setTabs: React.Dispatch<React.SetStateAction<TabProps[]>>
}

const Catalog = React.forwardRef<HTMLDivElement, CatalogProps>(
    ({ className, number_of_chains, setTabs }, ref) => {

        return (
            <div className={cn("flex flex-col gap-14", className)}>
                <div className="bg-white py-2 px-8 flex flex-row gap-4 items-center border-b-2 border-b-black_dim">
                    <h1 className="font-primary font-semibold text-2xl">Catalogo (221)</h1>
                </div>
                <div className="flex justify-center items-center">
                    <Input className="w-1/3 rounded-none text-sm" placeholder="Cerca per Lotto o Terreno" />
                </div>
                <div className="p-4 grid grid-cols-4 grid-rows-2 gap-4">
                    {
                        Array.apply(0, Array(number_of_chains)).map(function (x, i) {
                            return <ProductCard key={i} setTabs={setTabs} idLotto={`${x}`} name={`Lotto ${x}`} status={i === (number_of_chains - 1) ? "IN CORSO" : "COMPLETATO"} lastUpdate="14/06/2023, 13:48" avatars={["https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300"]} />;
                        })
                    }
                </div>
                <div className="flex justify-center items-center">
                    <Paginator numberOfPages={5} selectedPage={3} />
                </div>
            </div>
        );
    });

export default Catalog;