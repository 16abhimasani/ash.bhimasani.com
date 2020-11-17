import React from "react";
import classes from "./super-toast.module.scss";
import { motion, AnimatePresence } from "framer-motion";

import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const animateToast = {
  visible: {
    opacity: 1,
    rotateX: 0,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 14,
    },
  },
  initial: {
    opacity: 0,
    rotateX: 30,
    scale: 0.98,
    y: 36,
    transition: {
      type: "spring",
      damping: 12,
    },
  },
  exit: {
    opacity: 0,
    rotateX: -10,
    y: 28,
    transition: {
      type: "spring",
      damping: 12,
    },
  },
};

const InvoiceSuperToast: React.FC<{
  open: boolean;
  close?: () => void;
  title: string;
  caption: string;
  type?: string;
  buttons?: { text: string; action?: () => void }[];
  lightMode?: boolean;
}> = ({ open, close, title, caption, type, buttons, lightMode }) => {
  const iconSrc = () => {
    switch (type) {
      case "warning":
        return "/icons/info-warning.svg";
      case "feedback":
        return "https://bitpay.com/img/wallet-logos/bitpay-wallet.svg";
      case "refund":
        return "/icons/bp-refund.svg";
      case "timer":
        return "/icons/bp-timer-warning.svg";
      default:
        return "/icons/bp-copy.svg";
    }
  };
  return (
    <AnimatePresence exitBeforeEnter>
      {open && (
        <motion.div
          key="super-toast"
          initial="initial"
          animate="visible"
          exit="exit"
          variants={animateToast}
          className={cx({
            toast: true,
            toast__light: lightMode,
          })}
        >
          <div style={{ display: "flex" }}>
            <img className={classes.icon} src={iconSrc()} />
            <div className="col">
              <div
                className={cx({
                  title: true,
                  title__light: lightMode,
                })}
              >
                {title}
              </div>
              <div
                className={cx({
                  caption: true,
                  caption__light: lightMode,
                })}
                style={{
                  wordBreak:
                    caption.split(" ").length === 1
                      ? "break-all"
                      : "break-word",
                }}
              >
                {caption}
              </div>
            </div>
          </div>
          {type === "feedback" && (
            <motion.div
              className={cx({
                button: true,
                button__light: true,
              })}
              style={{ marginLeft: 0 }}
              whileTap={{ scale: 0.96 }}
            >
              Leave Feedback
            </motion.div>
          )}
          {buttons && (
            <div className={classes.buttons}>
              {buttons.map((content, index) => (
                <motion.div
                  className={classes.button}
                  style={buttons.length === 1 ? { marginLeft: 0 } : {}}
                  key={index}
                  whileTap={{ scale: 0.96 }}
                  onClick={(): void => content.action && content.action()}
                >
                  {content.text}
                </motion.div>
              ))}
            </div>
          )}
          {close && (
            <motion.img
              className={classes.exit}
              src="/icons/toast-exit.svg"
              onClick={close}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InvoiceSuperToast;
