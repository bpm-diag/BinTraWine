import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { MdAdd, MdClose } from 'react-icons/md'

export interface HeaderProductsProps
    extends React.HTMLAttributes<HTMLHeadElement> {
    wines: string[]
}

const HeaderProducts = (props: HeaderProductsProps) => {
        const { className, wines } = props;
        return (
            <div className="flex flex-row gap-4 px-8 py-3 h-14 items-center bg-white">
                <Button className='bg-accent'>
                    <p className='text-14 font-normal font-primary truncate'>Nuovo Prodotto</p>
                    <MdAdd size='24' />
                </Button>
                <Separator className='bg-primary h-2/3' orientation="vertical" />
                {
                    wines.map((wine, index) => (
                        <Button key={index}>
                            <p className='text-14 font-normal font-primary truncate'>{wine}</p>
                            <MdClose size='24' />
                        </Button>
                    ))
                }
            </div>
        )
    }
export default HeaderProducts;