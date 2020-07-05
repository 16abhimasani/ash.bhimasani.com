import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/styles.scss";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";

const MidnightCash: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Ash Bhimasani - Designer & Engineer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="layout">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
};

export default MidnightCash;
