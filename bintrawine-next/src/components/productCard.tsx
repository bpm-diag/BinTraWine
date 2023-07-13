import React from 'react';
import { cn } from "@/utils"
import Tag from '@/components/tag';
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
                    <p className='text-left text-14 font-normal font-primary text-primary_light'>ID Lotto: {idLotto} / ID Terreno: {idTerreno}</p>
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
                <div className='w-full bg-surface_dark h-0.5' />
                <div>
                    <p className='font-primary text-2xl font-semibold'>{name}</p>
                </div>
                <div className='flex flex-row gap-1 flex-wrap'>
                    {
                        tags.map((tagName, index) => {
                            return (
                                <Tag key={index} variant='selected' size='small'>{tagName}</Tag>
                            )
                        })
                    }
                </div>
            </div>
        )
    });

export default ProductCard;