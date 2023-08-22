import ProductCard from "@/components/productCard";
import { TabProps } from "../../pages";
import React from 'react';
import { Input } from "@/components/ui/input";
import Paginator from "@/components/paginator";
import { cn } from "@/utils";

export interface CatalogProps
    extends React.HTMLAttributes<HTMLDivElement> {
    setTabs: React.Dispatch<React.SetStateAction<TabProps[]>>
}

const Catalog = React.forwardRef<HTMLDivElement, CatalogProps>(
    ({ className, setTabs }, ref) => {

        return (
            <div className={cn("flex flex-col gap-14", className)}>
                <div className="bg-white py-2 px-8 flex flex-row gap-4 items-center border-b-2 border-b-black_dim">
                    <h1 className="font-primary font-semibold text-2xl">Catalogo (221)</h1>
                </div>
                <div className="flex justify-center items-center">
                    <Input className="w-1/3 rounded-none text-sm" searchIcon placeholder="Cerca per Lotto o Terreno" />
                </div>
                <div className="p-4 grid grid-cols-4 grid-rows-2 gap-4">
                    <ProductCard setTabs={setTabs} idLotto="lotto_1" name="Lotto 1" status="COMPLETATO" lastUpdate="14/06/2023, 13:48" avatars={["https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300"]} />
                    <ProductCard setTabs={setTabs} idLotto="lotto_2" name="Lotto 2" status="COMPLETATO" lastUpdate="14/06/2023, 13:48" avatars={["https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300"]} />
                    <ProductCard setTabs={setTabs} idLotto="lotto_3" name="Lotto 3" status="COMPLETATO" lastUpdate="14/06/2023, 13:48" avatars={["https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300"]} />
                    <ProductCard setTabs={setTabs} idLotto="lotto_4" name="Lotto 4" status="COMPLETATO" lastUpdate="14/06/2023, 13:48" avatars={["https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300"]} />
                    <ProductCard setTabs={setTabs} idLotto="lotto_5" name="Lotto 5" status="COMPLETATO" lastUpdate="14/06/2023, 13:48" avatars={["https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300"]} />
                    <ProductCard setTabs={setTabs} idLotto="lotto_6" name="Lotto 6" status="COMPLETATO" lastUpdate="14/06/2023, 13:48" avatars={["https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300"]} />
                    <ProductCard setTabs={setTabs} idLotto="lotto_7" name="Lotto 7" status="COMPLETATO" lastUpdate="14/06/2023, 13:48" avatars={["https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300"]} />
                    <ProductCard setTabs={setTabs} idLotto="lotto_8" name="Lotto 8" status="COMPLETATO" lastUpdate="14/06/2023, 13:48" avatars={["https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300"]} />
                </div>
                <div className="flex justify-center items-center">
                    <Paginator numberOfPages={5} selectedPage={3} />
                </div>
            </div>
        );
    });

export default Catalog;