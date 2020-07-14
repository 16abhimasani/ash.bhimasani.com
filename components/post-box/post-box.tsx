import React from "react";
import { motion } from "framer-motion";
import Link from "../utils/link";
import classes from "./post-box.module.scss";

const PostBox: React.FC<{
  title: string;
  caption: string;
  link: string;
  icon?: string;
  date?: string;
  newTab?: boolean;
  locked?: boolean;
}> = ({ title, caption, link, icon, date, newTab, locked }) => {
  const Box = (
    <motion.a
      whileHover={{ scale: 0.997 }}
      whileTap={{ scale: 0.99 }}
      className={classes.box}
      style={{ pointerEvents: locked ? "none" : "initial" }}
      href={link}
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : ""}
    >
      {icon && <img className={classes.box__icon} src={icon} alt={title} />}
      <div>
        <div className={classes.box__title}>{title}</div>
        <div className={classes.box__caption}>{caption}</div>
      </div>
      {date && <div className={classes.box__date}>{date}</div>}
      {locked && (
        <div className={classes.box__locked}>
          <img
            className={classes.box__locked__icon}
            src="/icons/padlock-white.svg"
            alt="locked"
          />
          Coming Soon
        </div>
      )}
    </motion.a>
  );
  return (
    <>{link.includes("://") ? <> {Box} </> : <Link href={link}>{Box}</Link>}</>
  );
};

export default PostBox;
