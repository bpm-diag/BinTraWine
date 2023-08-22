import * as React from "react"
import { cn } from "@/utils"

export interface PaginatorProps
    extends React.HTMLAttributes<HTMLDivElement> {
    numberOfPages: number;
    selectedPage: number;
}

const Paginator = React.forwardRef<HTMLDivElement, PaginatorProps>(
    ({ className }, ref) => {
        return (
            <nav className={cn("", className)}>
                <ul className="flex items-center -space-x-px h-10 text-base">
                    <li>
                        <a href="#" className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-white rounded-sm bg-primary_light">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500">1</a>
                    </li>
                    <li>
                        <a className="flex items-center underline justify-center px-4 h-10 leading-tight text-gray-500">2</a>
                    </li>
                    <li>
                        <a className="z-10 flex items-center underline justify-center px-4 h-10 leading-tight">3</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-white rounded-sm bg-primary_light">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                        </a>
                    </li>
                </ul >
            </nav >
        )
    });

export default Paginator;