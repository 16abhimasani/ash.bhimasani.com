import classNames from "classnames/bind";
import React from "react";
import Link from "../utils/link";
import classes from "./post-box.module.scss";

const cx = classNames.bind(classes);

const INVERT = new Set(["/logos/0x.svg", "/logos/pob.svg"]);

const PostBox: React.FC<{
  title: string;
  caption: string;
  link: string;
  icon?: string;
  date?: string;
  newTab?: boolean;
  locked?: boolean;
  todo?: boolean;
}> = ({ title, caption, link, icon, date, newTab, locked, todo }) => {
  const external = /^https?:\/\//.test(link);
  const openNew = Boolean(newTab || external);
  const plain = !icon;

  const body = (
    <>
      {icon && (
        <img
          className={cx("box__icon", { invert: INVERT.has(icon) })}
          src={icon}
          alt=""
          width={40}
          height={40}
        />
      )}
      <div className={classes.box__title}>{title}</div>
      <div className={classes.box__caption}>
        {caption}
        {todo && <span className={classes.todo}>TODO: case study</span>}
      </div>
      {date && <div className={classes.box__date}>{date}</div>}
      {locked && (
        <div className={classes.box__locked}>
          <img
            className={classes.box__locked__icon}
            src="/icons/padlock-white.svg"
            alt=""
            width={16}
            height={16}
          />
          Coming Soon
        </div>
      )}
      {openNew && !locked && (
        <span className="sr-only"> (opens in a new tab)</span>
      )}
    </>
  );

  const className = cx("box", { plain, "box--static": locked || !link });

  if (locked || !link) {
    return (
      <div className={className} aria-disabled="true">
        {body}
      </div>
    );
  }

  if (external) {
    return (
      <a
        className={className}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {body}
      </a>
    );
  }

  return (
    <Link href={link} className={className}>
      {body}
    </Link>
  );
};

export default PostBox;
