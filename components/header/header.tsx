import React from "react";
import Link from "../link";
import classes from "./header.module.scss";

const Header: React.FC = () => (
  <div className={classes.header}>
    <Link href="/about">
      <a className={classes.link} style={{ textAlign: "left" }}>
        About Me
      </a>
    </Link>
    <Link href="/">
      <img className={classes.logo} src="/ab-logo.svg" />
    </Link>
    <Link href="/#timeline">
      <a className={classes.link} style={{ textAlign: "right" }}>
        Timeline
      </a>
    </Link>
  </div>
);

export default Header;
