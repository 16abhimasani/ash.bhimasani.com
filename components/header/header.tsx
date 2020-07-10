import React from "react";
import Link from "../utils/link";
import classes from "./header.module.scss";

const Header: React.FC = () => (
  <header className={classes.header}>
    <Link href="/about">
      <a className={classes.link} style={{ textAlign: "left" }}>
        About Me
      </a>
    </Link>
    <Link href="/">
      <a>
        <img className={classes.logo} src="/logos/ab-logo.svg" />
      </a>
    </Link>
    <Link href="/#timeline">
      <a className={classes.link} style={{ textAlign: "right" }}>
        Timeline
      </a>
    </Link>
  </header>
);

export default Header;
