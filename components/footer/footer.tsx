import React from "react";
import styles from "./footer.module.scss";

const Header: React.FC = () => (
  <div className={styles.footer}>
    <div className={styles.nav}>
      <a
        className="link"
        href="mailto:ash@bhimasani.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Email
      </a>
      <div className={styles.dot}>·</div>
      <a
        className="link"
        href="https://github.com/16abhimasani"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <div className={styles.dot}>·</div>
      <a
        className="link"
        href="https://dribbble.com/ash-bhimasani"
        target="_blank"
        rel="noopener noreferrer"
      >
        Dribbble
      </a>
      <div className={styles.dot}>·</div>
      <a
        className="link"
        href="https://www.linkedin.com/in/ash-bhimasani-b98757139/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </div>
    <div className={styles.copyright}>Made with 💖 by Ash Bhimasani © 2020</div>
  </div>
);

export default Header;
