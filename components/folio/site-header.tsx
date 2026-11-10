import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import classes from "./folio.module.scss";
import ThemeToggle from "./theme-toggle";

const SiteHeader: React.FC<{ wide: boolean }> = ({ wide }) => {
  const router = useRouter();
  const path = router.asPath;
  const current = (href: string): "page" | undefined => {
    if (href === "/portfolio") {
      return router.pathname === "/portfolio" ? "page" : undefined;
    }
    if (href === "/about") {
      return router.pathname === "/about" ? "page" : undefined;
    }
    if (href === "/#writing") {
      return path === "/#writing" || path.startsWith("/#writing")
        ? "page"
        : undefined;
    }
    return undefined;
  };

  return (
    <header className={classes.bar}>
      <div className={wide ? classes.barInnerWide : classes.barInner}>
        <Link
          href="/"
          className={classes.wordmark}
          aria-current={router.pathname === "/" ? "page" : undefined}
        >
          Ash Bhimasani
        </Link>
        <nav className={classes.nav} aria-label="Primary">
          <Link href="/portfolio" aria-current={current("/portfolio")}>
            Work
          </Link>
          <Link href="/#writing" aria-current={current("/#writing")}>
            Writing
          </Link>
          <Link href="/about" aria-current={current("/about")}>
            About
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
