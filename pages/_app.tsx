import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";

import { useRouter } from "next/router";
import * as gtag from "../utils/gtag";
import { useEffect } from "react";

import Head from 'next/head';


const activeChainId = ChainId.Mainnet;


function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Head>
        <title>Bear Market Assholes</title>
      </Head>
      
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}


export default MyApp;