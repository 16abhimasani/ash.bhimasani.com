import React from "react";
import Anchor from "../utils/anchor";
import classes from "./footer.module.scss";

const Footer: React.FC = () => (
  <footer className={classes.footer}>
    <nav className={classes.nav} aria-label="Contact">
      <Anchor
        content="Email"
        href="mailto:16abhimasani@gmail.com"
        newTab={false}
      />
      <Anchor
        content="Calendly"
        href="https://calendly.com/ash-bhimasani/30min"
      />
      <Anchor content="GitHub" href="https://github.com/16abhimasani" />
      <Anchor content="Twitter" href="https://twitter.com/ash_bhimasani" />
      <Anchor
        content="LinkedIn"
        href="https://www.linkedin.com/in/ash-bhimasani/"
      />
      <Anchor
        content="Resume"
        href="/Ash_Bhimasani_Resume_2026_HTML.pdf"
        newTab={false}
      />
    </nav>
    <cite className={classes.copyright}>Ash Bhimasani © 2026</cite>
  </footer>
);

export default Footer;
