import React, { useEffect, useState } from "react";
import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import "pure-react-carousel/dist/react-carousel.es.css";
import "../styles/styles.scss";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import DarkModeToggle from "../components/dark-mode/dark-mode";
import { WebsiteHead } from "../components/seo-heads";

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
      <WebsiteHead />
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
