import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

const themeScript = `
try {
  var stored = localStorage.getItem("theme");
  var dark = stored
    ? JSON.parse(stored) === "dark"
    : window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (dark) {
    document.documentElement.classList.add("dark");
    document.body.classList.add("dark-mode");
  }
  document.documentElement.style.colorScheme = dark ? "dark" : "light";
} catch (e) {}
`;

export default class extends Document {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return (
      <Html lang="en" dir="ltr" suppressHydrationWarning>
        <Head>
          <title>Ash Bhimasani — Designer & Engineer</title>
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/favicon/favicon.ico"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/favicon/apple-touch-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/favicon/apple-touch-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/favicon/apple-touch-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/favicon/apple-touch-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon-180x180.png"
          />
          <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color="#1a1916"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#f3f1eb" />
          <meta
            name="msapplication-TileImage"
            content="/favicon/mstile-150x150.png"
          />
          <meta
            name="msapplication-config"
            content="/favicon/browserconfig.xml"
          />
          <meta
            name="theme-color"
            content="#f3f1eb"
            media="(prefers-color-scheme: light)"
          />
          <meta
            name="theme-color"
            content="#121210"
            media="(prefers-color-scheme: dark)"
          />
        </Head>
        <body suppressHydrationWarning>
          <script dangerouslySetInnerHTML={{ __html: themeScript }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
