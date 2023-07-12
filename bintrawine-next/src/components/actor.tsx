import * as React from "react"
import DataItem from "./actorItem";
import { ActorItemType } from "./actorItem";
import { MdMoreVert } from "react-icons/md";

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
            <div className="flex flex-col gap-4 p-2 bg-surface">
                <div className="flex flex-col gap-1">
                    <div className="flex flex-row justify-between items-center">
                        <p className="font-primary text-20 font-normal text-primary">Agronomo</p>
                        <div className="hover:cursor-pointer">
                            <MdMoreVert size="20" className="text-primary" />
                        </div>
                    </div>
                    <div>
                        <p className="font-primary text-12 text-black_dim">Ultimo Aggiornamento</p>
                        <p className="font-primary text-12 text-black_dim">14/06/2023, 13:48</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    {
                        data.actorItemData.map((item, index) => {
                            return (
                                <DataItem key={index} actorItem={item} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
);

export default Actor;