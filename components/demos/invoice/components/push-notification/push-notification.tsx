import React from "react";
import classes from "./push-notification.module.scss";
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

const InvoicePushNotification: React.FC<{ open: boolean }> = ({ open }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {open && (
        <motion.div
          className={classes.cell}
          key="push-notification"
          initial="initial"
          animate="visible"
          exit="exit"
          variants={animateToast}
        >
          <img
            src="https://bitpay.com/img/wallet-logos/bitpay-wallet.svg"
            width="28px"
          />
          Payment request sent to your wallet
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InvoicePushNotification;
