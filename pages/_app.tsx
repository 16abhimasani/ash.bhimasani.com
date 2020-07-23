import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import "pure-react-carousel/dist/react-carousel.es.css";
import "../styles/styles.scss";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";

const AshBhimasani: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Ash Bhimasani - Designer & Engineer</title>
      <meta
        property="description"
        content="I am a product designer & software engineer with special interests in UX, growth hacking, and business strategy currently working at BitPay"
        key="description"
      />
      <meta
        property="twitter:image"
        content="/banners/logo.jpg"
        key="twitter-image"
      />
      <meta property="og:image" content="/banners/logo.jpg" key="og-image" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <div className="layout">
      <Header />
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
      <Footer />
    </div>
  </>
);

export default AshBhimasani;
