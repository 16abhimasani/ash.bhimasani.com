import Link from "next/link";
import React from "react";
import { Entry } from "../../content/portfolio";
import classes from "./folio.module.scss";

const Arrow: React.FC<{ external?: boolean }> = ({ external }) =>
  external ? (
    <svg className={classes.arrow} viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M5 11 L11 5 M6.5 5 H11 V9.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  ) : (
    <svg className={classes.arrow} viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M3 8 H13 M9 4 L13 8 L9 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  );

const Row: React.FC<{ item: Entry; index: number }> = ({ item, index }) => {
  const content = (
    <>
      <span className={classes.index}>
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className={classes.body}>
        <span className={classes.entryTitle}>{item.title}</span>
        {item.detail ? (
          <span className={classes.detail}>{item.detail}</span>
        ) : null}
        {item.summary ? (
          <span className={classes.summary}>{item.summary}</span>
        ) : null}
      </span>
      {item.period ? (
        <span className={classes.period}>{item.period}</span>
      ) : null}
      <Arrow external={item.external} />
      {item.external ? (
        <span className={classes.srOnly}> (opens in a new tab)</span>
      ) : null}
    </>
  );

  if (item.external || item.href.startsWith("http")) {
    return (
      <a
        className={classes.row}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link className={classes.row} href={item.href}>
      {content}
    </Link>
  );
};

const EntryList: React.FC<{ items: Entry[] }> = ({ items }) => (
  <ol className={classes.list}>
    {items.map((item, index) => (
      <li key={item.slug}>
        <Row item={item} index={index} />
      </li>
    ))}
  </ol>
);

export default EntryList;
