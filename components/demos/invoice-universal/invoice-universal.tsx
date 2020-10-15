import React, { useCallback, useState } from "react";
import classes from "./invoice-universal.module.scss";
import { motion } from "framer-motion";
import { wait } from "../../../utils/utils";

import InvoiceDetailsBar from "./details-bar/details-bar";
import InvoiceLaunchBar from "./launch-bar/launch-bar";
import InvoicePushNotification from "./push-notification/push-notification";
import InvoiceSuperToast from "./super-toast/super-toast";

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
  hidden: {
    opacity: 0,
    rotateX: 30,
    scale: 0.98,
    y: 36,
    transition: {
      type: "spring",
      damping: 12,
    },
  },
};

const InvoiceUniversalModeDemo: React.FC = () => {
  const [QR_VISIBLE, TOGGLE_QR] = useState(true);
  const [LAUNCH_WALLET, TOGGLE_WALLET] = useState(false);
  const [COPY_LINK, TOGGLE_COPY] = useState(false);
  const startWallet = useCallback(async () => {
    if (LAUNCH_WALLET) return;
    TOGGLE_COPY(false);
    await wait(300);
    TOGGLE_WALLET(true);
    await wait(2000);
    TOGGLE_WALLET(false);
  }, [LAUNCH_WALLET]);
  const startCopy = useCallback(async () => {
    if (LAUNCH_WALLET) return;
    TOGGLE_WALLET(false);
    await wait(300);
    TOGGLE_COPY(true);
  }, [LAUNCH_WALLET, COPY_LINK]);
  return (
    <div style={{ minHeight: 711 }}>
      <motion.div className={classes.invoice}>
        <InvoiceDetailsBar />
        <motion.div className={classes.price}>$135.00</motion.div>
        <motion.div
          className={classes.qr__wrapper}
          animate={QR_VISIBLE ? "showQR" : "hideQR"}
          variants={animateInvoice}
          initial="showQR"
        >
          <img
            className={classes.qr}
            src="/imgs/invoice/qr-codes/universal-mode.svg"
            alt="Universal Mode QR"
          />
        </motion.div>

        <InvoiceLaunchBar
          qrVisible={QR_VISIBLE}
          qrToggle={TOGGLE_QR}
          walletToggle={startWallet}
          copyToggle={startCopy}
        />
      </motion.div>
      <InvoicePushNotification open={LAUNCH_WALLET} />
      <InvoiceSuperToast
        open={COPY_LINK && !LAUNCH_WALLET}
        close={(): void => TOGGLE_COPY(false)}
      />
    </div>
  );
};

export default InvoiceUniversalModeDemo;
