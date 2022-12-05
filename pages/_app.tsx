import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import "pure-react-carousel/dist/react-carousel.es.css";
import React, { createContext, FC, useEffect, useState } from "react";
import "../styles/styles.scss";

import DarkModeToggle from "../components/dark-mode/dark-mode";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import { WebsiteHead } from "../components/seo-heads";

export const ThemeContext = createContext({ dark: false });

const AshBhimasani: FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState({ dark: false });
  useEffect(() => {
    const html = document.getElementsByTagName("html")[0]?.classList;
    const body = document.body.classList;
    theme.dark
      ? (body.add("dark-mode"), html.add("black-out"))
      : (body.remove("dark-mode"), html.remove("black-out"));
  }, [theme]);
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};
export default AshBhimasani;
