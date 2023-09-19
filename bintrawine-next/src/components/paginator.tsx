import * as React from "react"
import { cn } from "@/utils"

export interface PaginatorProps
    extends React.HTMLAttributes<HTMLDivElement> {
    numberOfPages: number;
    selectedPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

const Paginator = React.forwardRef<HTMLDivElement, PaginatorProps>(
    ({ className, numberOfPages, selectedPage, setCurrentPage }, ref) => {

        const checkNewPage = (newPage: number, increment: boolean): number => {
            if (newPage <= numberOfPages && newPage > 0) return newPage
            if (increment) return newPage - 1
            return newPage + 1
        }

        return (
            <nav className={cn("", className)}>
                <ul className="flex items-center -space-x-px h-10 text-base">
                    <li>
                        <a onClick={() => setCurrentPage(checkNewPage(selectedPage - 1, false))} href="#" className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-white rounded-sm bg-primary_light">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                            </svg>
                        </a>
                    </li>
                    {
                        Array.from(Array(Number(numberOfPages))).map(function (_, i) {
                            return (
                                <li>
                                    <a className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 ${selectedPage !== (i + 1) && "underline"}`}>{i + 1}</a>
                                </li>
                            )
                        })
                    }
                    <li>
                        <a onClick={() => setCurrentPage(checkNewPage(selectedPage + 1, true))} href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-white rounded-sm bg-primary_light">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                        </a>
                    </li>
                </ul >
            </nav >
        )
    });

export default Paginator;