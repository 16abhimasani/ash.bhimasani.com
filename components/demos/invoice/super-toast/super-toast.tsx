import React from "react";
import classes from "./super-toast.module.scss";
import { motion, AnimatePresence } from "framer-motion";

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
  close: () => void;
  title: string;
  caption: string;
  type?: string;
  buttons?: { text: string; action?: () => void }[];
}> = ({ open, close, title, caption, type, buttons }) => {
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
          <div style={{ display: "flex" }}>
            {type === "warning" ? (
              <img className={classes.icon} src="/icons/info-warning.svg" />
            ) : (
              <img className={classes.icon} src="/icons/bp-copy.svg" />
            )}
            <div className="col">
              <div className={classes.title}>{title}</div>
              <div
                className={classes.caption}
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
          {buttons && (
            <div className={classes.buttons}>
              {buttons.map((content, index) => (
                <motion.div
                  className={classes.button}
                  key={index}
                  whileTap={{ scale: 0.96 }}
                  onClick={(): void => content.action && content.action()}
                >
                  {content.text}
                </motion.div>
              ))}
            </div>
          )}
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
