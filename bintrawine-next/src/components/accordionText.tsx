import * as React from "react"
import { cn } from "@/utils"
import { MdOpenInNew } from "react-icons/md"

export interface AccordionTextProps
    extends React.HTMLAttributes<HTMLDivElement> {
    text: string
}

const AccordionText = ({ className, text }: AccordionTextProps) => {

        const [isOpen, setIsOpen] = React.useState(false);

        return (
            <div className={cn(className, "flex flex-col gap-2")}>
                <p className={isOpen ? "line-clamp-none" : "line-clamp-3"}>{text}</p>
                <div onClick={() => setIsOpen((prevState) => !prevState)} className="flex flex-row justify-center items-center gap-1 hover:cursor-pointer">
                    <p>Espandi</p>
                    <MdOpenInNew size='24' />
                </div>
            </div>
        )
    };

export default AccordionText;
