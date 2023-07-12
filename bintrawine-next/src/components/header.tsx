import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import { Button } from './ui/button';
import Account from './account';
import { MdKeyboardArrowDown, MdNotificationsNone } from 'react-icons/md'
import Logo from './ui/logo';

const Header = () => {

    const { data: session, status } = useSession();

    return (
        <header className="grid-in-header fixed grid-in-header w-full flex flex-row h-16 z-3 py-2 px-8 bg-primary text-white ">
            <div className='flex-1 flex flex-row gap-5 items-center'>
                <Logo className='fill-white' />
                <div className='w-0.5 h-3/4 bg-white' />
                <span className="font-primary text-18">Nome Cantina</span>
                <div className='w-0.5 h-3/4 bg-white' />
                <div className='flex flex-row gap-4'>
                    <Button className='px-0 text-14 text-white bg-transparent' variant="link">Insights</Button>
                    <Button className='px-0 text-14 text-white bg-transparent' variant="link">Prodotti</Button>
                </div>
            </div>
            <div className='flex-1 gap-5 flex justify-end items-center'>
                {status == 'authenticated' &&
                    <div className="flex gap-4">
                        <Account onClick={async () => await signOut()}>
                            <Avatar className="h-10 w-10">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col gap-0">
                                <p>{session?.user.name} {session?.user.surname}</p>
                                <p className="text-xs font-normal">Distributore</p>
                            </div>
                            <MdKeyboardArrowDown size='24' />
                        </Account>
                    </div>
                }
                <MdNotificationsNone size='24' />
            </div>
        </header >
    );
}

export default Header;