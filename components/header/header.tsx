import classNames from "classnames/bind";
import { useRouter } from "next/router";
import React from "react";
import Link from "../utils/link";
import ThemeToggle from "../dark-mode/dark-mode";
import classes from "./header.module.scss";

const cx = classNames.bind(classes);

const Header: React.FC = () => {
  const { pathname } = useRouter();
  const about = pathname === "/about";
  const workIndex = pathname === "/work" || pathname === "/portfolio";
  const inWork = !about && pathname !== "/";

  return (
    <header className={classes.header}>
      <Link href="/" className={classes.mark}>
        Ash Bhimasani
      </Link>
      <nav className={classes.nav} aria-label="Primary">
        <Link
          href="/work"
          aria-current={workIndex ? "page" : undefined}
          className={cx("nav__link", { "nav__link--active": inWork })}
        >
          Work
        </Link>
        <Link
          href="/about"
          aria-current={about ? "page" : undefined}
          className={cx("nav__link", { "nav__link--active": about })}
        >
          About
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;
