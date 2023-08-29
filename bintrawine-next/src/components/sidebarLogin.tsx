import Logo from '@/components/ui/logo';
import * as React from "react"
import { cn } from "@/utils"

export interface SidebarLoginProps extends React.HTMLAttributes<HTMLDivElement> { }

const SidebarLogin = React.forwardRef<HTMLDivElement, SidebarLoginProps>(
    ({ className }, ref) => {
        return (
            <div className={cn(className)}>
                <Logo className='fill-white p-0' width={80} height={80} />
                <p className='leading-10 text-white font-primary font-normal'><span className='font-semibold'>BinTraWine</span> è una piattaforma che mira a garantire tracciabilità e trasparenza lungo tutta la filiera del vino, dalla coltivazione delle uve al consumatore finale.</p>
            </div>
        );
    })

export default SidebarLogin;