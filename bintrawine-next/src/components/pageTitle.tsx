import * as React from "react"
import { MdArrowBack } from "react-icons/md";
import { cn } from "@/utils"

export interface PageTitleProps
    extends React.HTMLAttributes<HTMLDivElement> {
    title: string
}

const PageTitle = React.forwardRef<HTMLDivElement, PageTitleProps>(
    ({ className, title }, ref) => {

        return (
            <div className={cn(className, "bg-white py-2 px-8 flex flex-row gap-4 items-center")}>
                <MdArrowBack className="hover:cursor-pointer" size="28" />
                <h1 className="font-primary font-semibold text-2xl">{title}</h1>
            </div>
        )
    });

export default PageTitle;
