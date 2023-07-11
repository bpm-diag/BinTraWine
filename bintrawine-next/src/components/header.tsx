import Image from 'next/image';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import { Button } from './ui/button';
import Account from './account';
import { MdArrowDropDown } from 'react-icons/md'

const Header = () => {

    const { data: session, status } = useSession();
    const [selected, setSelected] = useState<boolean>(false);

    return (
        <header className="grid-in-header bg-nord15-light w-full flex flex-row h-full z-3 p-2">
            <div className='flex-1 flex flex-row h-10 gap-5 items-center'>
                <div className='flex flex-row justify-center items-center'>
                    <Image
                        className="h-10 w-10 mr-4 rounded-xl"
                        width={40}
                        height={40}
                        src="/images/logo.png"
                        alt="BinTraWine fish logo"
                    />
                    <span className="font-primary text-14">BinTraWine</span>
                </div>
                <div className='w-0.5 h-3/4 bg-disabled' />
                <div className='flex flex-row gap-4'>
                    <Button className='px-0' variant="link">Insights</Button>
                    <Button className='px-0' variant="link">Prodotti</Button>
                </div>

            </div>
            <div className='flex-1 h-10 flex justify-end items-center'>
                {status == 'authenticated' &&
                    <div className="flex gap-4">
                        <Account onClick={async () => await signOut()}>
                            <Image className='rounded-full' src="/images/logo.png" alt="Picture of the author" width={30} height={30} />
                            {session?.user.name} {session?.user.surname}
                            <MdArrowDropDown size='24' />
                        </Account>
                    </div>
                }
            </div>
        </header >
    );
}

export default Header;