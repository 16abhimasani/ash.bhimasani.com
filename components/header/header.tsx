import React from "react";
import Link from "next/link";
import styles from "./header.module.scss";

const Header: React.FC = () => (
  <div className={styles.header}>
    <Link href="/about">
      <a className={styles.link} style={{ textAlign: "left" }}>
        About Me
      </a>
    </Link>
    <Link href="/">
      <img className={styles.logo} src="/ab-logo.svg" />
    </Link>
    <Link href="/#timeline">
      <a className={styles.link} style={{ textAlign: "right" }}>
        Timeline
      </a>
    </Link>
  </div>
);

export default Header;
