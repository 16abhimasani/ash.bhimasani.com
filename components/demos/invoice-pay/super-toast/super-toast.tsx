import React from "react";
import classes from "./super-toast.module.scss";
import { motion, AnimatePresence } from "framer-motion";

export const animateToast = {
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

const InvoiceSuperToast: React.FC<{ open: boolean; close: () => void }> = ({
  open,
  close,
}) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {open && (
        <motion.div
          className={classes.toast}
          key="super-toast"
          initial="initial"
          animate="visible"
          exit="exit"
          variants={animateToast}
        >
          <img className={classes.icon} src="/icons/bp-copy.svg" />
          <div className="col">
            <div className={classes.title}>Payment Link Copied!</div>
            <div className={classes.caption}>
              https://bitpay.com/i/JXvuiMn7YSD3Cy7HCtiQgu
            </div>
          </div>
          <motion.img
            className={classes.exit}
            src="/icons/toast-exit.svg"
            onClick={close}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InvoiceSuperToast;
