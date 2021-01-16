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
        name="description"
        content="I am a product designer & software engineer. I build my designs."
        key="description"
      />
      <meta
        name="twitter:image"
        content="/banners/logo.jpg"
        key="twitter-image"
      />
      <meta property="og:image" content="/banners/logo.jpg" key="og-image" />
      <meta name="author" content="Ash Bhimasani" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta
        name="keywords"
        content="Ashutosh Bhimasani, Ash Bhimasani, Georgia Tech, Atlanta, CS"
      />
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
