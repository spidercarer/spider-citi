import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { createContext, useState } from "react";
import Head from "next/head";

const theme = extendTheme({
  fonts: {
    heading: "Interstate_Bold, sans-serif",
    body: "Interstate_Light, sans-serif",
  },
  styles: {
    global: {
      body: {
        fontSize: `16px`,
        lineHeight: `1.5`,
        color: `#333`,
        margin: 0,
        fontFamily: `Interstate_Light, sans-serif`,
        webkitTextSizeAdjust: `100%`,
        overflowX: `hidden !important`,
      },
    },
  },
});

export const DataContext = createContext({} as any);

function MyApp({ Component, pageProps }: AppProps) {
  const [data, setData] = useState();
  return (
    <ChakraProvider theme={theme}>
      <DataContext.Provider value={{ data, setData }}>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <title>
            Online Banking, Mortgages, Personal Loans, Investing | Citi.com
          </title>
        </Head>
        <Component {...pageProps} />
      </DataContext.Provider>
    </ChakraProvider>
  );
}

export default MyApp;
