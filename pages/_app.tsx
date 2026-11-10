import { AnimatePresence, MotionConfig } from "framer-motion";
import { AppProps } from "next/app";
import { Inter, Instrument_Serif } from "next/font/google";
import { useRouter } from "next/router";
import Script from "next/script";
import "pure-react-carousel/dist/react-carousel.es.css";
import React, {
  createContext,
  FC,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import SiteFooter from "../components/folio/site-footer";
import SiteHeader from "../components/folio/site-header";
import { PersonJsonLd, WebsiteHead } from "../components/seo-heads";
import "../styles/styles.scss";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  adjustFontFallback: true,
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-serif",
  adjustFontFallback: true,
});

const WIDE = new Set(["/", "/about", "/portfolio"]);

type ThemeValue = {
  dark: boolean;
  setDark: (dark: boolean) => void;
};

export const ThemeContext = createContext<ThemeValue>({
  dark: false,
  setDark: () => undefined,
});

const applyTheme = (dark: boolean): void => {
  document.documentElement.classList.toggle("dark", dark);
  document.body.classList.toggle("dark-mode", dark);
  document.documentElement.style.colorScheme = dark ? "dark" : "light";
  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) {
    themeColor.setAttribute("content", dark ? "#121210" : "#f3f1eb");
  }
};

const AshBhimasani: FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  const [dark, setDark] = useState<boolean | null>(null);
  const persist = useRef(false);
  const wide = WIDE.has(router.pathname);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    if (dark === null) return;
    applyTheme(dark);
    if (!persist.current) {
      persist.current = true;
      return;
    }
    try {
      window.localStorage.setItem(
        "theme",
        JSON.stringify(dark ? "dark" : "light"),
      );
    } catch {
      // Storage can be blocked. The class on <html> still holds the choice.
    }
  }, [dark]);

  const theme = useMemo<ThemeValue>(
    () => ({
      dark: dark ?? false,
      setDark,
    }),
    [dark],
  );

  return (
    <ThemeContext.Provider value={theme}>
      <MotionConfig reducedMotion="user">
        <div
          className={`${inter.variable} ${serif.variable} ${inter.className} site`}
        >
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=UA-49532918-1"
            strategy="lazyOnload"
          />
          <Script id="gtag-init" strategy="lazyOnload">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','UA-49532918-1');`}
          </Script>
          <a className="skip-link" href="#content">
            Skip to content
          </a>
          <WebsiteHead />
          <PersonJsonLd />
          <SiteHeader wide={wide} />
          <div
            id="content"
            tabIndex={-1}
            className={wide ? "layout layout--wide" : "layout"}
          >
            <AnimatePresence mode="wait">
              <Component {...pageProps} />
            </AnimatePresence>
            <SiteFooter />
          </div>
        </div>
      </MotionConfig>
    </ThemeContext.Provider>
  );
};

export default AshBhimasani;
