import React from 'react';
import { cn } from "@/utils"
import Status from './status';
import { MdOutlineBubbleChart } from 'react-icons/md';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TabProps } from '@/pages';

export interface ProductCardProps
    extends React.HTMLAttributes<HTMLDivElement> {
    idLotto: string,
    name: string,
    status: "IN CORSO" | "COMPLETATO",
    lastUpdate: string,
    avatars: string[],
    setTabs: React.Dispatch<React.SetStateAction<TabProps[]>>
}

const elementExist = (tabprops: TabProps[], currentKey: string): boolean => {
    let exist = false
    tabprops.forEach(tab => {
        if (tab.triggerKey === currentKey) exist = true
    })
    return exist
}

const ProductCard = (props: ProductCardProps) => {
        const { className, idLotto, name, status, avatars, lastUpdate, setTabs } = props
        return (
            <div onClick={() => setTabs(oldState => {
                if (elementExist(oldState, idLotto)) return [...oldState]
                return [...oldState, { triggerKey: idLotto, triggerName: name, status: status }]
            })} className={cn(
                "flex flex-col p-8 gap-3 bg-surface rounded-sm hover:opacity-50 hover:cursor-pointer",
                className
            )}>
                <div className='flex flex-row justify-between items-center'>
                    <div className='flex flex-col'>
                        <p className='font-primary text-sm font-normal'>Stato compilazione</p>
                        <Status completed={status == "COMPLETATO" ? true : false} />
                    </div>
                    <div className='flex flex-col items-end'>
                        <p className="font-primary text-sm text-black_dim">Ultimo Aggiornamento</p>
                        <p className="font-primary text-sm text-black_dim">{lastUpdate}</p>
                    </div>
                </div>
                <div className='w-full bg-surface_dark h-0.5' />
                <div className='flex flex-row items-center gap-3'>
                    <MdOutlineBubbleChart size={32} className='text-primary' />
                    <p className='font-primary text-primary font-normal text-4xl'>{name}</p>
                </div>
                <div className='w-full bg-surface_dark h-0.5' />
                <div className='flex flex-row justify-between items-center'>
                    {avatars.length === 1 && <p className='font-primary text-sm font-normal text-primary_light'><span className='font-semibold'>{avatars.length} persona</span> coinvolta nella filiera</p>}
                    {avatars.length > 1 && <p className='font-primary text-sm font-normal text-primary_light'><span className='font-semibold'>{avatars.length} persone</span> coinvolte nella filiera</p>}
                    <div className='flex flex-row'>
                        {
                            avatars.map((avatar, index) => {
                                return (
                                    <Avatar key={index} className={'-mr-4 last:mr-0'}>
                                        <AvatarImage src={avatar} />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    };

export default ProductCard;