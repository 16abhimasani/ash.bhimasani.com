import React from "react";
import Anchor from "../utils/anchor";
import classes from "./footer.module.scss";

const Header: React.FC = () => (
  <div className={classes.footer}>
    <div className={classes.nav}>
      <Anchor content="Email" href="mailto:ash@bhimasani.com" />
      <div className={classes.dot}>·</div>
      <Anchor content="GitHub" href="https://github.com/16abhimasani" />
      <div className={classes.dot}>·</div>
      <Anchor content="Dribbble" href="https://dribbble.com/ash-bhimasani" />
      <div className={classes.dot}>·</div>
      <Anchor
        content="LinkedIn"
        href="https://www.linkedin.com/in/ash-bhimasani-b98757139/"
      />
    </div>
    <div className={classes.copyright}>
      Made with 💖 by Ash Bhimasani © 2020
    </div>
  </div>
);

export default Header;
