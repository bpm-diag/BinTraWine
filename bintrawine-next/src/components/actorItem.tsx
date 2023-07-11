import * as React from "react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export type ActorItemType = {
    title: string,
    data: { name: string, value: string }[]
}
export interface ActorItemProps
    extends React.HTMLAttributes<HTMLDivElement> {
    actorItem: ActorItemType
}

const ActorItem = React.forwardRef<HTMLDivElement, ActorItemProps>(
    ({ className, actorItem }, ref) => {

        return (
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className="py-1 px-4 bg-white">
                        <p className='font-primary text-16 font-normal text-left'>{actorItem.title}</p>
                    </AccordionTrigger>
                    <AccordionContent className="bg-surface p-4 pb-0">
                        {
                            actorItem.data.map((item, index) => {
                                return (
                                    <div key={index} className='flex flex-row items-center justify-between'>
                                        <p className='font-primary font-normal text-14'>{item.name}</p>
                                        <p className='font-primary text-14 font-semibold'>{item.value}</p>
                                    </div>
                                )
                            })
                        }
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        )
    });

export default ActorItem;