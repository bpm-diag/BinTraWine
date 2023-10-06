import * as React from "react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Counter from "./counter"
import { cn } from "@/utils"
import AccordionText from "./accordionText"

export type ActorItemType = {
    title: string,
    data: { name: string, value: string }[] | string,
    countedData?: number,
    contentType: "key-value" | "value" | "textual"
}

export interface ActorItemProps
    extends React.HTMLAttributes<HTMLDivElement> {
    actorItem: ActorItemType
    countedData?: number
    disabled?: boolean
}

const ActorItem = (props: ActorItemProps) => {
        const { className, actorItem, countedData, disabled } = props
        return (
            <Accordion disabled={disabled} type="single" className={cn(className, "data-[state=open]:border-2 data-[state=open]:border-primary")} collapsible>
                <AccordionItem className="data-[state=open]:border-2 data-[state=open]:border-primary" value="item-1">
                    <AccordionTrigger className={cn("flex flex-row py-3 px-4", countedData ? "bg-primary_light text-white" : "bg-white")}>
                        {countedData && <Counter className="p-0 font-semibold shrink-0 text-primary bg-white h-5 w-5 rounded-full text-xs flex flex-col justify-center items-center">{countedData}</Counter>}
                        <p className='font-primary text-base font-normal text-left'>{actorItem.title}</p>
                    </AccordionTrigger>
                    <AccordionContent className="p-4 pb-0">
                        {actorItem.contentType === "key-value" &&
                            (actorItem.data as { name: string, value: string }[]).map((item, index) => {
                                return (
                                    <div key={index} className='flex flex-col justify-between'>
                                        <p className='font-primary font-normal text-sm'>{item.name}</p>
                                        <p className='font-primary text-sm font-semibold'>{item.value}</p>
                                    </div>
                                )
                            })
                        }
                        {
                            actorItem.contentType === "value" && <p className='font-primary text-sm font-semibold'>{actorItem.data as string}</p>
                        }
                        {
                            actorItem.contentType === "textual" &&
                            <AccordionText text={actorItem.data as string} />
                        }
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        )
    };

export default ActorItem;