import React from 'react';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import Account from '@/components/account';
import { Separator } from '@/components/ui/separator';
import { MdLogout, MdAdd } from 'react-icons/md'
import Logo from '@/components/ui/logo';
import { cn } from '@/utils';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export interface AccountProps
    extends React.HTMLAttributes<HTMLHeadElement> {
}

const Header = React.forwardRef<HTMLDivElement, AccountProps>(
    ({ className, ...props }, ref) => {

        const { data: session, status } = useSession();

        return (
            <header className={cn(className, "z-3 fixed grid-in-header w-full flex flex-col")}>
                <div className="flex flex-row h-14 py-2 px-8 bg-primary text-white ">
                    <div className='flex-1 flex flex-row gap-5 items-center'>
                        <Logo className='fill-white' />
                        <Separator className='h-2/3' orientation="vertical" />
                        <span className="font-primary text-18">Nome Cantina</span>
                        <Separator className='h-2/3' orientation="vertical" />
                        <Button className='bg-accent' variant="text">
                            Nuovo
                            <MdAdd size='20' />
                        </Button>
                    </div>
                    <div className='flex-1 gap-5 flex justify-end items-center'>
                        {status == 'authenticated' &&
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Account variant='selected' role='Distributore' name={session?.user.name} surname={session?.user.surname} />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem className='flex flex-row justify-between items-center hover:cursor-pointer' onClick={async () => await signOut()}>
                                        <span className='text-primary text-base font-medium'>LogOut</span>
                                        <MdLogout size='20' />
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        }
                    </div>
                </div>
            </header >
        );
    });

export default Header;