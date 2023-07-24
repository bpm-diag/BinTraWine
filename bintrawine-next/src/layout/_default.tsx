import Header from '@/components/header/header';

type Props = {
    children: React.ReactNode;
};

const Layout = ({ children }: Props) => {

    return (
        <>
            <div className='grid grid-areas-layout grid-cols-layout grid-rows-layout'>
                <Header className='grid-in-header' />
                <div className="mt-14 grid-in-main min-h-screen">{children}</div>
            </div>
        </>
    );
};

export default Layout;