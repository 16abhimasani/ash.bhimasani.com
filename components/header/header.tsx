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
      <Link href="/about">
        <a
          className={cx({
            link: true,
            link__active: router.pathname === "/about",
          })}
          style={{ textAlign: "left" }}
        >
          <h6>About Me</h6>
        </a>
      </Link>
      <Link href="/">
        <a>
          <img
            className={classes.logo}
            src="/logos/ab-logo.svg"
            alt="Ash's Logo"
          />
        </a>
      </Link>
      <Link href="/portfolio">
        <a
          className={cx({
            link: true,
            link__active: router.pathname === "/portfolio",
          })}
          style={{ textAlign: "right" }}
        >
          <h6>Portfolio</h6>
        </a>
      </Link>
    </header>
  );
};

export default Header;
