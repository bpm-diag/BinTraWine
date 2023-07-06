import { Outlet } from 'react-router-dom';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Navbar from '@/components/navbar/navbar';
import { _default as Layout } from '@/layout';

const Root = () => {
  return (
    <Layout
      header={(prop) => <Header {...prop} />}
      navbar={(prop) => <Navbar {...prop} />}
      footer={() => <Footer />}
    >
      <Outlet />
    </Layout>
  );
};

export default Root;
