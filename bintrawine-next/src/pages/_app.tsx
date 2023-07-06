import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "@/utils/api";
import { _default as Layout } from '@/layout';
import SignIn from "@/pages/auth/sign-in";
import SignUp from "@/pages/auth/sign-up";
import "@/styles/globals.css";

SignIn.getLayout = (page) => page
SignUp.getLayout = (page) => page

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {

  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return (
    <SessionProvider session={session}>
      {getLayout(<Component {...pageProps} />)}
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
