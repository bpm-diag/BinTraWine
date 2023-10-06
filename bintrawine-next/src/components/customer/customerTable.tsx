import * as React from "react"
import { cn } from "@/utils"
import CustomerData from "@/components/customer/customerData"
import { Separator } from "@/components/ui/separator"

export interface CustomerTableProps
    extends React.HTMLAttributes<HTMLDivElement> {
    data: {
        title: string
        value: string
    }[]
}

const CustomerTable = (props: CustomerTableProps) => {
        const { className, data } = props
        return (
            <div className={cn(className, "flex flex-col gap-2 bg-white rounded-xl p-12")}>
                {
                    data.map((item, index) => {
                        return (
                            <div key={index} className="flex flex-col gap-7">
                                <CustomerData title={item.title} value={item.value} />
                                {(data.length - 1) !== index && <Separator orientation="horizontal" />}
                            </div>
                        )
                    })
                }
            </div>
        )
    };

export default CustomerTable;