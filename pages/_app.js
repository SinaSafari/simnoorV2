import React from "react";
import Head from "next/head";

import { AppContextProvider } from "../components/shared/context/AppContextProvider";
import MainWrapper from "../components/shared/Wrapper/MainWrapper";

import "../components/shared/Wrapper/style/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Head></Head>
      <MainWrapper>
        <Component {...pageProps} />
      </MainWrapper>
    </AppContextProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps };
// };

export default MyApp;
