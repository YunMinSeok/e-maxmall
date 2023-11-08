"use client";

import "../styles/reset.css";
import "../styles/global.css";

import Head from "next/head";
import { RecoilRoot } from "recoil";
import { HydrationBoundary, QueryClientProvider, dehydrate } from "@tanstack/react-query";

// query
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "@query/queryClient";

// components
import AsyncWrapper from "@components/common/AsyncWrapper";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>
            <HydrationBoundary state={{ dehydratedState: dehydrate(queryClient) }}>
              <Head>
                <title>e-maxmall</title>
                <meta charSet="UTF-8" />
                <meta
                  name="viewport"
                  content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=10,user-scalable=yes"
                />
              </Head>
              <AsyncWrapper>{children}</AsyncWrapper>
              <ReactQueryDevtools buttonPosition={"bottom-left"} initialIsOpen={false} />
            </HydrationBoundary>
          </QueryClientProvider>
        </RecoilRoot>
      </body>
    </html>
  );
}
