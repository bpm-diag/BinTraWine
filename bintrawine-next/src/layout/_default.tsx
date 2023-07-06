import Header from '@/components/header';

type Props = {
    children: React.ReactNode;
};

const Layout = ({ children }: Props) => {

    return (
        <>
            <div>
                <Header />
                <div className="min-h-screen bg-gray-10">{children}</div>
            </div>
        </>
    );
};

export default Layout;