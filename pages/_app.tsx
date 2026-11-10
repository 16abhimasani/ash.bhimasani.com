import { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import "pure-react-carousel/dist/react-carousel.es.css";
import React, { createContext, FC, useEffect, useRef, useState } from "react";
import "../styles/styles.scss";

import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import { WebsiteHead } from "../components/seo-heads";
import Link from "../components/utils/link";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

interface Theme {
  dark: boolean;
  ready: boolean;
  setDark: (dark: boolean) => void;
}

export const ThemeContext = createContext<Theme>({
  dark: false,
  ready: false,
  setDark: () => undefined,
});

const readStored = (): boolean => {
  try {
    const stored = window.localStorage.getItem("theme");
    if (!stored) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return JSON.parse(stored) === "dark";
  } catch {
    return document.documentElement.classList.contains("dark");
  }
};

const applyTheme = (dark: boolean) => {
  document.documentElement.classList.toggle("dark", dark);
  document.documentElement.style.colorScheme = dark ? "dark" : "light";
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", dark ? "#0e0e0e" : "#fafafa");
};

const AshBhimasani: FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  const [theme, setTheme] = useState({ dark: false, ready: false });
  const skipSync = useRef(true);

  useEffect(() => {
    const dark = readStored();
    applyTheme(dark);
    setTheme({ dark, ready: true });
  }, []);

  useEffect(() => {
    if (skipSync.current) {
      skipSync.current = false;
      return;
    }
    applyTheme(theme.dark);
  }, [theme.dark]);

  const pathname = router.pathname;
  const bare =
    pathname === "/" ||
    pathname === "/about" ||
    pathname === "/work" ||
    pathname === "/portfolio";
  const hasRail = pathname.includes("bitpay") || pathname.includes("0x");

  return (
    <ThemeContext.Provider
      value={{
        dark: theme.dark,
        ready: theme.ready,
        setDark: (dark) => setTheme({ dark, ready: true }),
      }}
    >
      <div className={`${inter.variable} ${inter.className} layout`}>
        <WebsiteHead />
        <a className="skip" href="#content">
          Skip to content
        </a>
        <Header />
        {!bare && (
          <p className={hasRail ? "crumb crumb--rail" : "crumb"}>
            <Link href="/work">Work</Link>
          </p>
        )}
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default AshBhimasani;
