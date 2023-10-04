import React, { useState } from 'react';
import { cn } from "@/utils";
import { Button } from '@/components/ui/button';
import BarChart from '@/components/charts/barChart';
import { api } from '@/utils/api';
import Loader from "@/components/loading";
import { ChartData, Charts } from '@/types/chainTypes';
import { Separator } from '@/components/ui/separator';
import { MdOutlineAgriculture, MdOutlineLocalShipping, MdOutlineWineBar, MdProductionQuantityLimits, MdOutlineLocalFlorist, MdOutlineSell } from "react-icons/md";


export interface AnalyticsProps extends React.HTMLAttributes<HTMLDivElement> {
}

const getCharts = (charts: Charts, currentSelected: string): ChartData[] => {
    switch (currentSelected) {
        case "agronomo":
            return charts.agronomo
        case "viticoltore":
            return charts.viticoltore
        case "distributore":
            return charts.distributore
        case "imbottigliatore":
            return charts.imbottigliatore
        case "produttore":
            return charts.produttore
        case "rivenditore":
            return charts.rivenditore
        default:
            return charts.agronomo
    }
}

const Analytics = React.forwardRef<HTMLDivElement, AnalyticsProps>(
    ({ className }, ref) => {

        const analytics = api.blockChainRouter.getAnalytics.useQuery();

        const buttons: { id: string, name: string, icon: React.ElementType }[] = [
            {
                id: "agronomo",
                name: "Agronomo",
                icon: MdOutlineAgriculture
            },
            {
                id: "distributore",
                name: "Distributore",
                icon: MdOutlineLocalShipping
            },
            {
                id: "imbottigliatore",
                name: "Imbottigliatore",
                icon: MdOutlineWineBar
            },
            {
                id: "produttore",
                name: "Produttore",
                icon: MdProductionQuantityLimits
            },
            {
                id: "rivenditore",
                name: "Rivenditore",
                icon: MdOutlineSell
            },
            {
                id: "viticoltore",
                name: "Viticoltore",
                icon: MdOutlineLocalFlorist
            }
        ]

        const [currentAnalytic, setCurrentAnalytic] = useState<string>("agronomo")

        return (
            <div className={cn("flex flex-col gap-10 w-full", className)}>
                <div className='flex flex-row bg-white border-b-black_dim border-b-2 p-2 gap-4 items-center'>
                    <div className="bg-white py-2 px-2 flex flex-row gap-4 items-center">
                        <h1 className="font-primary font-semibold text-2xl">Data Aggregation</h1>
                    </div>
                    <Separator orientation="vertical" className="h-8 bg-black_dim" />
                    <div className='flex flex-row lg:justify-around md:justify-around items-center gap-4 flex-wrap'>
                        {
                            buttons.map((element) => {
                                return (
                                    <Button key={element.id} variant="text" onClick={() => setCurrentAnalytic(element.id)} className={`flex flex-row rounded-md border-primary border bg-white text-primary justify-center items-center ${element.id === currentAnalytic ? "bg-accent" : ""} `}>
                                        {element.name}
                                        <element.icon size={20} />
                                    </Button>)
                            })
                        }
                    </div>
                </div>
                <div className='m-8 flex flex-row flex-wrap justify-center'>
                    {analytics.isLoading && <Loader />}
                    {analytics.isError && <p className='text-base font-semibold text-red-500'>Errore nel caricamento, provare a ricaricare la pagina</p>}
                    {
                        analytics.isFetched &&
                        getCharts(analytics.data!, currentAnalytic).map((currentChart, index) => {
                            return (
                                <div key={index} className='m-4 flex flex-col gap-4 justify-center items-center bg-surface rounded-sm'>
                                    <p className='text-primary text-lg font-semibold'>{currentChart.title}</p>
                                    <BarChart title={currentChart.title} labels={currentChart.labels} values={currentChart.values} />
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        );
    });

export default Analytics;