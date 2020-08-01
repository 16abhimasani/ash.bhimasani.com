import React from "react";
import Anchor from "../utils/anchor";
import classes from "./footer.module.scss";

const Header: React.FC = () => (
  <footer className={classes.footer}>
    <div className={classes.nav}>
      <Anchor content="Email" href="mailto:ash@bhimasani.com" />
      <div className={classes.nav__hide}>
        <div className={classes.dot}>·</div>
        <Anchor content="GitHub" href="https://github.com/16abhimasani" />
        <div className={classes.dot}>·</div>
        <Anchor content="Dribbble" href="https://dribbble.com/ash-bhimasani" />
      </div>
      <div className={classes.dot}>·</div>
      <Anchor
        content="LinkedIn"
        href="https://www.linkedin.com/in/ash-bhimasani-b98757139/"
      />
      <div className={classes.dot}>·</div>
      <Anchor content="Resume" href="/docs/resume.pdf" />
    </div>
    <div className={classes.copyright}>
      Made with 💖 by Ash Bhimasani © 2020
    </div>
  </footer>
);

export default Header;
