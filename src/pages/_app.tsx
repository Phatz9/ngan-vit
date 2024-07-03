/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type Session } from "next-auth";
import { type AppType } from "next/app";;

// tRPC =>
import { api } from "~/utils/api";

// Styles =>
import "~/styles/globals.css";
import { Toaster } from "react-hot-toast";

// Layout =>
import Layout from "~/layout";
import Show from "~/motions/show";

// SEO =>
import { DefaultSeo } from "next-seo";
import nextSeoConfig from "next-seo.config";

// Next Auth =>
import { SessionProvider } from "next-auth/react";

// Next progress =>
import NextNProgress from "nextjs-progressbar";

// Next Fonts =>
import { Sarabun } from 'next/font/google'

const sarabun = Sarabun({
  subsets: ['thai'],
  weight: '400'
})


const MyApp: AppType<{ session: Session | null }> = ({ Component, pageProps: { session, ...pageProps }, router }) => {
  return (
    <main className={sarabun.className}>
      <NextNProgress
        color="#979797"
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
        showOnShallow={true}
      />
      <DefaultSeo {...nextSeoConfig} />
      <SessionProvider session={session}>
        <Layout>
          <Show routerKey={router.route}>
            <Component {...pageProps} />
          </Show>
        </Layout>
      </SessionProvider>
      <Toaster position="bottom-center" reverseOrder={false}></Toaster>
    </main>
  );
};

export default api.withTRPC(MyApp);
