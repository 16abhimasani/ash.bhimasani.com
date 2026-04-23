import React from "react";
import Anchor from "../utils/anchor";
import classes from "./footer.module.scss";

const Header: React.FC = () => (
  <footer className={classes.footer}>
    <div className={classes.nav}>
      <Anchor content="Email" href="mailto:16abhimasani@gmail.com" />
      <div className={classes.nav__hide}>
        <div className={classes.dot}>·</div>
        <Anchor
          content="Calendly"
          href="https://calendly.com/ash-bhimasani/30min"
        />
      </div>
      <div className={classes.dot}>·</div>
      <Anchor content="GitHub" href="https://github.com/16abhimasani" />
      <div className={classes.dot}>·</div>
      <Anchor content="Twitter" href="https://twitter.com/ash_bhimasani" />
      <div className={classes.dot}>·</div>
      <Anchor
        content="LinkedIn"
        href="https://www.linkedin.com/in/ash-bhimasani/"
      />
      <div className={classes.nav__hide}>
        <div className={classes.dot}>·</div>
        <Anchor
          content="Resume"
          href="/Ash_Bhimasani_Resume.pdf"
        />
      </div>
    </div>
    <cite className={classes.copyright}>
      Made with 💖 by Ash Bhimasani © 2020
    </cite>
  </footer>
);

export default Header;
