import React from "react";
import { motion } from "framer-motion";
import Link from "../link";
import styles from "./post-box.module.scss";

const PostBox: React.FC<{
  icon: string;
  title: string;
  caption: string;
  date: string;
  link: string;
  newTab?: boolean;
}> = ({ icon, title, caption, date, link, newTab }) => (
  <Link href={link}>
    <motion.a
      whileHover={{ scale: 0.997 }}
      whileTap={{ scale: 1.01 }}
      className={styles.box}
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : ""}
    >
      <img className={styles.box__icon} src={icon} />
      <div>
        <div className={styles.box__title}>{title}</div>
        <div className={styles.box__caption}>{caption}</div>
      </div>
      <div className={styles.box__date}>{date}</div>
    </motion.a>
  </Link>
);

export default PostBox;
