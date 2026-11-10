import React from "react";
import { Entry } from "../../content/portfolio";
import EntryList from "./entry-list";
import classes from "./folio.module.scss";

const Section: React.FC<{
  id: string;
  title: string;
  items: Entry[];
}> = ({ id, title, items }) => (
  <section className={classes.section} id={id} aria-labelledby={`${id}-title`}>
    <div className={classes.sectionHead}>
      <h2 className={classes.sectionTitle} id={`${id}-title`}>
        {title}
      </h2>
      <span className={classes.count} aria-hidden="true">
        {String(items.length).padStart(2, "0")}
      </span>
    </div>
    <EntryList items={items} />
  </section>
);

export default Section;
