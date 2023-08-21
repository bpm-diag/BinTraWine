import React from 'react';
import { cn } from "@/utils"
import Status from './status';
import { MdOutlineBubbleChart } from 'react-icons/md';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export interface ProductCardProps
    extends React.HTMLAttributes<HTMLDivElement> {
    idLotto: string,
    idTerreno: string,
    name: string,
    avatars: string[],
    tags: string[]
}

const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
    ({ className, idLotto, idTerreno, name, tags, avatars }, ref) => {

        return (
            <div className={cn(
                "flex flex-col p-8 gap-3 bg-surface",
                className
            )}>
                <div className='flex flex-row justify-between items-center'>
                    <div className='flex flex-col'>
                        <p className='font-primary text-sm font-normal'>Stato compilazione</p>
                        <Status completed={false} />
                    </div>
                    <div className='flex flex-col items-end'>
                        <p className="font-primary text-xs text-black_dim">Ultimo Aggiornamento</p>
                        <p className="font-primary text-xs text-black_dim">14/06/2023, 13:48</p>
                    </div>
                </div>
                <div className='w-full bg-surface_dark h-0.5' />
                <div className='flex flex-row items-center gap-3'>
                    <MdOutlineBubbleChart size={24} className='text-primary' />
                    <p className='font-primary text-primary font-normal text-4xl'>Lotto 8</p>
                </div>
                <div className='w-full bg-surface_dark h-0.5' />
                <div className='flex flex-row justify-between items-center'>
                    <p className='font-primary text-sm font-normal text-primary_light'><span className='font-semibold'>12 persone</span> coinvolte nella filiera</p>
                    <div className='flex flex-row'>
                        {
                            avatars.map((avatar, index) => {
                                console.log(index);
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
    });

export default ProductCard;