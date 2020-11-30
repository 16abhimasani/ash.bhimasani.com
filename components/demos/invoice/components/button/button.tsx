import React, { useState } from "react";
import classNames from "classnames/bind";
import classes from "./button.module.scss";
import { motion, AnimatePresence } from "framer-motion";

const cx = classNames.bind(classes);

export const buttonAnimation = {
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.075,
    },
  },
  hidden: {
    opacity: 0,
  },
};

export const buttonTextAnimation = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 30,
      stiffness: 100,
      mass: 0.25,
    },
  },
  hidden: {
    opacity: 0,
    x: 12,
  },
};

export const buttonSpinnerAnimation = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 30,
      stiffness: 150,
      mass: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    x: 10,
  },
};

export const spinAnimation = {
  visible: {
    rotate: 360,
    transition: {
      loop: Infinity,
      ease: "linear",
      duration: 1,
    },
  },
};

const InvoiceButton: React.FC<{ main: string; async: string }> = ({
  main,
  async,
}) => {
  const [awaiting, setAwaiting] = useState(false);
  return (
    <motion.div
      onClick={(): void => setAwaiting(!awaiting)}
      className={cx({
        button: true,
        action: awaiting,
      })}
    >
      <AnimatePresence exitBeforeEnter>
        {awaiting ? (
          <motion.div
            style={{ display: "flex" }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={buttonAnimation}
            key="awaiting-payment"
          >
            <motion.span
              style={{ display: "flex" }}
              variants={buttonSpinnerAnimation}
              key="awaiting-payment-wrapper"
            >
              <motion.img
                className={classes.action__spinner}
                src="/icons/spinner.svg"
                variants={spinAnimation}
                alt="spinner"
                key="awaiting-payment-spinner"
              />
            </motion.span>
            <motion.span
              variants={buttonTextAnimation}
              key="awaiting-payment-text"
            >
              {async}
            </motion.span>
          </motion.div>
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={buttonAnimation}
            whileTap={{ scale: 0.98 }}
            key="pay"
          >
            {main}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default InvoiceButton;
