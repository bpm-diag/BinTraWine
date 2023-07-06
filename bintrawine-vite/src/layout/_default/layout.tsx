type DefaultLayoutProps = {
  header: React.ElementType;
  navbar: React.ElementType;
  footer: React.ElementType;
  children: React.ReactNode;
};

const defaultLayout = (props: DefaultLayoutProps) => {
  const { header: Header, navbar: Navbar, footer: Footer, children } = props;

  const filiera = ["Agronomo", "Viticolore", "Produttore", "Imbottigliatore", "Distributore", "Ente Certificatore", "Rivenditore", "Consumatore"]

  return (
    <div className="grid grid-areas-layout grid-cols-layout grid-rows-layout h-screen bg-nord15-light">
      <Header />
      <Navbar filiera={filiera} />
      {children}
      <Footer />
    </div>
  );
};

export default defaultLayout;