import React from "react";
import { useRouter } from "next/router";
import Link from "../utils/link";
import classNames from "classnames/bind";
import classes from "./header.module.scss";

const cx = classNames.bind(classes);

const Header: React.FC = () => {
  const router = useRouter();
  return (
    <header className={classes.header}>
      <Link
        href="/about"
        className={cx({
          link: true,
          link__active: router.pathname === "/about",
        })}
        style={{ textAlign: "left" }}
      >
        <h6>About Me</h6>
      </Link>
      <Link href="/">
        <img
          className={classes.logo}
          src="/logos/ab-logo.svg"
          alt="Ash's Logo"
        />
      </Link>
      <Link
        href="/portfolio"
        className={cx({
          link: true,
          link__active: router.pathname === "/portfolio",
        })}
        style={{ textAlign: "right" }}
      >
        <h6>Portfolio</h6>
      </Link>
    </header>
  );
};

export default Header;
