import React, { useState } from 'react';
import { cn } from "@/utils";
import { Button } from '@/components/ui/button';
import BarChart from '@/components/charts/barChart';
import { MdOutlineAgriculture, MdOutlineLocalShipping, MdOutlineWineBar, MdProductionQuantityLimits, MdOutlineLocalFlorist, MdOutlineSell } from "react-icons/md";


export interface AnalyticsProps extends React.HTMLAttributes<HTMLDivElement> {
}

const Analytics = React.forwardRef<HTMLDivElement, AnalyticsProps>(
    ({ className }, ref) => {

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
                <div className="bg-white py-2 px-8 flex flex-row gap-4 items-center border-b-2 border-b-black_dim">
                    <h1 className="font-primary font-semibold text-2xl">Analytics</h1>
                </div>
                <div className='flex flex-row justify-around items-center'>
                    {
                        buttons.map((element) => {
                            return (<Button id={element.id} variant="text" onClick={() => setCurrentAnalytic(element.id)} className={`flex flex-row rounded-full justify-center items-center ${element.id === currentAnalytic ? "bg-accent" : ""} `}>
                                {element.name}
                                <element.icon size={20} />
                            </Button>)
                        })
                    }
                </div>
                <div className='m-8 flex flex-row flex-wrap justify-center'>
                    <div className='m-4 flex flex-col gap-4 justify-center items-center bg-surface rounded-sm'>
                        <p className='text-primary text-lg font-semibold'>Pioggia</p>
                        <BarChart />
                    </div>
                    <div className='m-4 flex flex-col gap-4 justify-center items-center bg-surface rounded-sm'>
                        <p className='text-primary text-lg font-semibold'>Pioggia</p>
                        <BarChart />
                    </div>
                    <div className='m-4 flex flex-col gap-4 justify-center items-center bg-surface rounded-sm'>
                        <p className='text-primary text-lg font-semibold'>Pioggia</p>
                        <BarChart />
                    </div>
                    <div className='m-4 flex flex-col gap-4 justify-center items-center bg-surface rounded-sm'>
                        <p className='text-primary text-lg font-semibold'>Pioggia</p>
                        <BarChart />
                    </div>
                    <div className='m-4 flex flex-col gap-4 justify-center items-center bg-surface rounded-sm'>
                        <p className='text-primary text-lg font-semibold'>Pioggia</p>
                        <BarChart />
                    </div>
                </div>
            </div>
        );
    });

export default Analytics;