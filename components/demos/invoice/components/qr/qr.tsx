import { motion } from "framer-motion";
import React from "react";
import classes from "./qr.module.scss";

const QR_TRANSITION = {
  transition: {
    type: "spring",
    bounce: 0.01,
  },
};

const animateInvoice = {
  hideQR: {
    height: 0,
    opacity: 0,
    ...QR_TRANSITION,
  },
  showQR: {
    height: 234,
    opacity: 1,
    ...QR_TRANSITION,
  },
};

const InvoiceQR: React.FC<{ qrVisible: boolean; qr: string }> = ({
  qrVisible,
  qr,
}) => {
  return (
    <motion.div
      className={classes.qr__wrapper}
      animate={qrVisible ? "showQR" : "hideQR"}
      variants={animateInvoice}
      initial="showQR"
    >
      <img
        className={classes.qr}
        src={`/imgs/invoice/qr-codes/${qr}.svg`}
        alt="QR"
      />
    </motion.div>
  );
};

export default InvoiceQR;
