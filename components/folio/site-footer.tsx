import React from "react";
import { contacts } from "../../content/portfolio";
import classes from "./folio.module.scss";

const SiteFooter: React.FC = () => (
  <footer className={classes.footer}>
    <nav className={classes.footerNav} aria-label="Contact">
      {contacts.map((contact) => {
        const external = contact.href.startsWith("http");
        return (
          <a
            key={contact.href}
            href={contact.href}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {contact.label}
          </a>
        );
      })}
    </nav>
    <p className={classes.colophon}>
      © 2020–2026 Ash Bhimasani. Inter, with Instrument Serif for titles.
    </p>
  </footer>
);

export default SiteFooter;
