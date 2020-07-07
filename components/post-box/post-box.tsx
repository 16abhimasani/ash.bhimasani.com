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
}> = ({ title, caption, link, icon, date, newTab }) => (
  <Link href={link}>
    <motion.a
      whileHover={{ scale: 0.997 }}
      whileTap={{ scale: 0.99 }}
      className={classes.box}
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : ""}
    >
      {icon && <img className={classes.box__icon} src={icon} />}
      <div>
        <div className={classes.box__title}>{title}</div>
        <div className={classes.box__caption}>{caption}</div>
      </div>
      {date && <div className={classes.box__date}>{date}</div>}
    </motion.a>
  </Link>
);

export default PostBox;
