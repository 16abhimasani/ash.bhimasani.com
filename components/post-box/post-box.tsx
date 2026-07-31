import { AnimationProps, motion, MotionStyle } from "framer-motion";
import React, { useContext } from "react";
import { ThemeContext } from "../../pages/_app";
import Link from "../utils/link";

import classNames from "classnames/bind";
import classes from "./post-box.module.scss";
const cx = classNames.bind(classes);

interface LogoConfig extends AnimationProps {
  invertible?: boolean;
}
const LogoConfigs: {
  [icon: string]: LogoConfig;
} = {
  "/logos/0x.svg": {
    animate: { rotate: 90 },
    transition: {
      delay: 2,
      repeatDelay: 2,
      repeat: Infinity,
      type: "spring",
      mass: 2,
      damping: 20,
    },
    invertible: true,
  },
  "/logos/pob.svg": {
    animate: {},
    transition: {},
    invertible: true,
  },
};

const PostBox: React.FC<{
  title: string;
  caption: string;
  link: string;
  icon?: string;
  date?: string;
  newTab?: boolean;
  locked?: boolean;
}> = ({ title, caption, link, icon, date, newTab, locked }) => {
  const theme = useContext(ThemeContext);
  const lockedStyles: MotionStyle = {
    pointerEvents: "none",
    userSelect: "none",
  };
  const Box = (
    <motion.div
      className={cx({ dark: theme.dark })}
      style={locked ? lockedStyles : undefined}
    >
      <motion.a
        whileHover={{ scale: 0.997 }}
        whileTap={{ scale: 0.99 }}
        className={classes.box}
        href={link}
        target={newTab ? "_blank" : "_self"}
        rel={newTab ? "noopener noreferrer" : ""}
      >
        {icon && (
          <motion.img
            animate={
              LogoConfigs.hasOwnProperty(icon) ? LogoConfigs[icon].animate : {}
            }
            transition={
              LogoConfigs.hasOwnProperty(icon)
                ? LogoConfigs[icon].transition
                : {}
            }
            className={cx({
              box__icon: true,
              invert: LogoConfigs[icon]?.invertible && theme.dark,
            })}
            src={icon}
            alt={title}
          />
        )}
        <div className={classes.box__content}>
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
    </motion.div>
  );
  return (
    <>
      {link.includes("://") ? (
        <> {Box} </>
      ) : (
        <Link legacyBehavior href={link}>
          {Box}
        </Link>
      )}
    </>
  );
};

export default PostBox;
