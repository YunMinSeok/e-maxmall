import "../styles/reset.css";
import "../styles/global.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import { HydrationBoundary, QueryClientProvider } from "@tanstack/react-query";

// query
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "@query/queryClient";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={pageProps.dehydrateState}>
          <Head>
            <title>e-maxmall</title>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=10,user-scalable=yes"
            />
          </Head>
          <Component {...pageProps} />
          <ReactQueryDevtools buttonPosition={"bottom-left"} initialIsOpen={false} />
        </HydrationBoundary>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default MyApp;
