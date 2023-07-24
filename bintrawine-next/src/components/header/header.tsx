import React from 'react';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import Account from '@/components/account';
import { Separator } from '@/components/ui/separator';
import { MdNotificationsNone, MdAdd, MdClose, MdChevronRight } from 'react-icons/md'
import Logo from '@/components/ui/logo';
import { cn } from '@/utils';

export interface AccountProps
    extends React.HTMLAttributes<HTMLHeadElement> {
}

const Header = React.forwardRef<HTMLDivElement, AccountProps>(
    ({ className, ...props }, ref) => {

        const wines = ["Tellus Chradonnay", "Tellus Chradonnay", "Tellus Chradonnay"]
        const paths = ["Azienda", "Sezione", "Pagina", "Prodotto"]
        const { data: session, status } = useSession();

        return (
            <header className={cn(className, "z-3 fixed grid-in-header w-full flex flex-col")}>
                <div className="flex flex-row h-14 py-2 px-8 bg-primary text-white ">
                    <div className='flex-1 flex flex-row gap-5 items-center'>
                        <Logo className='fill-white' />
                        <Separator className='h-2/3' orientation="vertical" />
                        <span className="font-primary text-18">Nome Cantina</span>
                        <Separator className='h-2/3' orientation="vertical" />
                        <div className='flex flex-row gap-4'>
                            <Button className='px-0 text-14 text-white bg-transparent' variant="link">Insights</Button>
                            <Button className='px-0 text-14 text-white bg-transparent' variant="link">Prodotti</Button>
                        </div>
                    </div>
                    <div className='flex-1 gap-5 flex justify-end items-center'>
                        {status == 'authenticated' &&
                            <div className="flex gap-4">
                                <Account variant='selected' role='Distributore' name={session?.user.name} surname={session?.user.surname} onClick={async () => await signOut()} />
                            </div>
                        }
                        <MdNotificationsNone size='24' />
                    </div>
                </div>
            </header >
        );
    });

export default Header;