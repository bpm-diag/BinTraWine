import * as React from "react"
import DataItem from "@/components/actorItem";
import { ActorItemType } from "./actorItem";
import { cn } from "@/utils"

export type ActorData = {
    name: string,
    lastUpdate: string,
    actorItemData: ActorItemType[]
}

export interface ActorItemProps
    extends React.HTMLAttributes<HTMLDivElement> {
    data: ActorData
}

const Actor = React.forwardRef<HTMLDivElement, ActorItemProps>(
    ({ className, data }, ref) => {

        return (
            <div className={cn(className, "flex flex-col gap-4 p-2 bg-surface")}>
                <div className="flex flex-col gap-1">
                    <div className="flex flex-row justify-between items-center">
                        <p className="font-primary text-xl font-normal text-primary">{data.name}</p>
                    </div>
                    <div>
                        <p className="font-primary text-xs text-black_dim">Ultimo Aggiornamento</p>
                        <p className="font-primary text-xs text-black_dim">14/06/2023, 13:48</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    {
                        data.actorItemData.map((item, index) => {
                            console.log(item)
                            return (
                                <DataItem key={index} actorItem={item} countedData={item.countedData} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
);

export default Actor;