import * as React from "react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/utils"
import { MdOpenInNew } from "react-icons/md";

export type ActorDescriptionType = {
    title: string,
    data: string
}
export interface ActorDescriptionProps
    extends React.HTMLAttributes<HTMLDivElement> {
    actorDescription: ActorDescriptionType
}

const ActorDescription = React.forwardRef<HTMLDivElement, ActorDescriptionProps>(
    ({ className, actorDescription }, ref) => {

        return (
            <Accordion type="single" className={cn(className)} collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className="py-1 px-4 bg-white">
                        <p className='font-primary text-16 font-normal text-left leading-5'>{actorDescription.title}</p>
                    </AccordionTrigger>
                    <AccordionContent className="bg-surface p-4 pb-0">
                        <div className="flex flex-col gap-4">
                            <p className="font-primary text-sm font-normal">{actorDescription.data}</p>
                            <div className="flex flex-row items-center justify-center gap-2">
                                <p className="font-primary text-14 font-normal">Espandi</p>
                                <MdOpenInNew size="25" />
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        )
    });

export default ActorDescription;