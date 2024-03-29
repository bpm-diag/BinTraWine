import React from "react";
import { Input } from '@/components/ui/input';
import { cn } from "@/utils";

export interface ShowDataProps
    extends React.HTMLAttributes<HTMLDivElement> {
    title: string,
    preTitle: string,
    data: {
        label: string,
        value: string
    }[]
}

const ShowData = (props: ShowDataProps) => {
        const { className, title, data, preTitle } = props;
        return (
            <div className={cn("flex-1 p-7 flex flex-col gap-8", className)}>
                <div className="">
                    <p className="text-primary font-primary text-xl font-normal">{preTitle} <span className="font-bold">{title}</span></p>
                </div>
                <div className="flex-1 flex flex-col gap-4">
                    {
                        data.map((insertedData, index) => {
                            return (
                                <div key={index} className="flex flex-col gap-4">
                                    <p className="text-primary font-primary text-xl font-normal">{insertedData.label}</p>
                                    <Input readOnly type="text" value={insertedData.value} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    };

export default ShowData;