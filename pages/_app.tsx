import React, { useEffect, useState } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import "pure-react-carousel/dist/react-carousel.es.css";
import "../styles/styles.scss";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import DarkModeToggle from "../components/dark-mode/dark-mode";

export const ThemeContext = React.createContext({ dark: false });

const AshBhimasani: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState({ dark: false });
  useEffect(() => {
    const html = document.getElementsByTagName("html")[0]?.classList;
    const body = document.body.classList;
    theme.dark
      ? (body.add("dark-mode"), html.add("black-out"))
      : (body.remove("dark-mode"), html.remove("black-out"));
  }, [theme]);
  return (
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
      <ThemeContext.Provider value={theme}>
        <main className="layout">
          <Header />
          <AnimatePresence>
            <Component {...pageProps} />
          </AnimatePresence>
          <Footer />
          <DarkModeToggle setTheme={setTheme} />
        </main>
      </ThemeContext.Provider>
    </>
  );
};
export default AshBhimasani;
