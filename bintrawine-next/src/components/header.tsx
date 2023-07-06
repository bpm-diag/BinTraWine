import Link from 'next/link'
import Image from 'next/image';

import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import { Button } from './ui/button';

const Header = () => {

    const { data: session, status } = useSession();

    return (
        <header className="grid-in-header bg-nord15-light w-full flex h-full z-3 px-4">
            <div className="flex w-full my-0 mx-auto px-0 py-1.5 flex-row items-center gap-5">
                <Link href="/" className={`text-inherit rounded-0.25em padding-0.15em-0.5em flex items-center justify-center text-base`}>
                    <Image
                        className="h-10 w-10 mr-4 rounded-xl"
                        width={40}
                        height={40}
                        src="/images/logo.png"
                        alt="BinTraWine fish logo"
                    />
                    <span className="font-bold text-2xl">BinTraWine</span>
                </Link>

                <div className='flex flex-row gap-4'>
                    <p>Insights</p>
                    <p>Prodotti</p>
                    <p>Blockchain status</p>
                </div>

                {status == 'authenticated' &&
                    <div className="flex gap-4">
                        <span className="text-xl">{session?.user.name}</span>
                        <Button onClick={async () => await signOut()}>Sign Out</Button>
                    </div>
                }
            </div>
        </header>
    );
}

export default Header;