import React from 'react';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import Account from '@/components/account';
import { Separator } from '@/components/ui/separator';
import { MdLogout, MdAdd, MdBarChart } from 'react-icons/md'
import Logo from '@/components/ui/logo';
import { TabProps } from "@/pages";
import { cn } from '@/utils';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { api } from '@/utils/api';
import { checkIdLotto } from "@/utils/utilsFunctions";

export interface HeaderProps extends React.HTMLAttributes<HTMLHeadElement> {
    number_of_lotti: number
    setTabs: React.Dispatch<React.SetStateAction<TabProps[]>>
}

const Header = (props: HeaderProps) => {
    const { className, number_of_lotti, setTabs } = props;
    const utils = api.useContext()
    const getLatestLotto = api.blockChainRouter.getManualData.useQuery(checkIdLotto(number_of_lotti))
    const setSensori = api.blockChainRouter.setSensoriData.useMutation({
        onSuccess() {
            utils.blockChainRouter.getSensoriData.invalidate()
        }
    })

    const { data: session, status } = useSession();

    const newTab = () => {
        setSensori.mutate({
            lottoId: number_of_lotti,
            creatorId: session!.user.id
        })
        setTabs(oldState => [...oldState, { triggerKey: `${number_of_lotti}`, triggerName: `Lotto ${number_of_lotti}`, status: 'IN CORSO' }])
    }

    return (
        <header className={cn(className, "grid-in-header w-full flex")} {...props}>
            <div className="flex flex-row px-8 bg-primary text-white ">
                <div className='flex-1 flex flex-row gap-5 items-center'>
                    <Logo className='fill-white' />
                    <Separator className='h-2/3' orientation="vertical" />
                    <span className="font-primary text-18">{session?.user.cellar}</span>
                    <Separator className='h-2/3' orientation="vertical" />
                    {getLatestLotto.isFetched && getLatestLotto.data!.completed &&
                        <Button className='bg-accent' variant="text" onClick={() => newTab()}>
                            Nuovo
                            <MdAdd size='20' />
                        </Button>
                    }
                    {getLatestLotto.isFetched && !getLatestLotto.data!.completed &&
                        <Button disabled className='bg-transparent cursor-not-allowed' variant="text" onClick={() => newTab()}>
                            Nuovo
                            <MdAdd size='20' />
                        </Button>
                    }
                </div>
                <div className='flex-1 gap-5 flex justify-end items-center'>
                    {status == 'authenticated' &&
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Account className='hover:cursor-pointer' variant='selected' role={(session.user.roles.length > 1) ? `${session.user.roles.length} Ruoli` : `${session.user.roles[0]?.toString()[0]?.toUpperCase()}${session.user.roles[0]?.slice(1).toLowerCase()}`} name={session?.user.name} surname={session?.user.surname} />
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
};

export default Header;