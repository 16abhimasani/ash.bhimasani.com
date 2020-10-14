import React from "react";
import classes from "./launch-bar.module.scss";
import { motion } from "framer-motion";

const animateLaunchBar = {
  qrHidden: {
    marginTop: 0,
  },
  qrVisible: {
    marginTop: 26,
  },
};

const InvoiceLaunchBar: React.FC<{
  qrVisible: boolean;
  qrToggle: (val: boolean) => void;
  walletToggle: (val: boolean) => void;
  copyToggle: (val: boolean) => void;
}> = ({ qrVisible, qrToggle, walletToggle, copyToggle }) => {
  return (
    <motion.div
      className={classes.bar}
      initial="qrVisible"
      animate={qrVisible ? "qrVisible" : "qrHidden"}
      variants={animateLaunchBar}
    >
      <motion.div
        className={classes.button}
        whileTap={{ scale: 0.96 }}
        onClick={(): void => walletToggle(true)}
      >
        Open in Wallet
      </motion.div>
      <motion.img
        className={classes.toggle}
        onClick={(): void => qrToggle(!qrVisible)}
        src={`/icons/${qrVisible ? "hide" : "show"}-qr.svg`}
      />
      <motion.div
        className={classes.button}
        whileTap={{ scale: 0.96 }}
        onClick={(): void => copyToggle(true)}
      >
        Copy Payment
      </motion.div>
    </motion.div>
  );
};

export default InvoiceLaunchBar;
