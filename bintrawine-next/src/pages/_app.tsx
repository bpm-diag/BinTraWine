import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "@/utils/api";
import { _default as Layout } from '@/layout';
import "@/styles/globals.css";
import { Lexend } from 'next/font/google';

const lexend = Lexend({
  weight: '500',
  style: "normal",
  subsets: ['latin'],
  variable: "--lexend-font"
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {

  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return (
    <>
      <SessionProvider session={session}>
        <main className={`${lexend.variable}`}>
          {getLayout(<Component {...pageProps} />)}
        </main>
      </SessionProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
