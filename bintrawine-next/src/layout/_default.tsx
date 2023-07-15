import Header from '@/components/header';

type Props = {
    children: React.ReactNode;
};

const Layout = ({ children }: Props) => {

    return (
        <>
            <div className='grid grid-areas-layout grid-cols-layout grid-rows-layout'>
                <Header className='grid-in-header' />
                <div className="mt-44 grid-in-main min-h-screen">{children}</div>
            </div>
        </>
    );
};

export default Layout;