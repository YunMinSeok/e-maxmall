import "../styles/reset.css";
import "../styles/global.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <Head>
        <title>e-maxmall</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=10,user-scalable=yes"
        />
      </Head>
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default MyApp;
