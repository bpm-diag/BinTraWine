import { useRef } from 'react';
import { useScroll } from 'react-use';

import styles from './layout.module.css';

type DefaultLayoutProps = {
  header: React.ElementType;
  footer: React.ElementType;
  children: React.ReactNode;
};

const defaultLayout = (props: DefaultLayoutProps) => {
  const { header: Header, footer: Footer, children } = props;

  const ref = useRef(null);
  const { y } = useScroll(ref);

  return (
    <div className={styles.layout}>
      <Header y={y} />
      <main ref={ref} className={styles.main}>
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default defaultLayout;
