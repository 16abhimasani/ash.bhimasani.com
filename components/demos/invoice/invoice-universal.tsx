import React, { useCallback, useState } from "react";
import classes from "./invoice.module.scss";
import { motion } from "framer-motion";
import { wait } from "../../../utils/utils";

import InvoiceDetailsBar from "./details-bar/details-bar";
import InvoiceLaunchBar from "./launch-bar/launch-bar";
import InvoicePushNotification from "./push-notification/push-notification";
import InvoiceSuperToast from "./super-toast/super-toast";
import copyUtil from "../../../utils/copy-to-clipboard";

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

const paymentLink = "https://ash.bhimasani.com/bitpay/invoice";

const InvoiceUniversalModeDemo: React.FC = () => {
  const [QR_VISIBLE, TOGGLE_QR] = useState(true);
  const [LAUNCH_WALLET, TOGGLE_WALLET] = useState(false);
  const [COPY_LINK, TOGGLE_COPY] = useState(false);
  const startWallet = useCallback(async () => {
    if (LAUNCH_WALLET) return;
    TOGGLE_COPY(false);
    await wait(200);
    TOGGLE_WALLET(true);
    await wait(2000);
    TOGGLE_WALLET(false);
  }, [LAUNCH_WALLET]);
  const startCopy = useCallback(async () => {
    if (COPY_LINK) return;
    TOGGLE_WALLET(false);
    await wait(200);
    copyUtil(paymentLink);
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
      <div style={{ position: "relative", marginTop: 26 }}>
        <InvoicePushNotification open={LAUNCH_WALLET} />
        <InvoiceSuperToast
          open={COPY_LINK && !LAUNCH_WALLET}
          close={(): void => TOGGLE_COPY(false)}
          title="Payment Link Copied!"
          caption={paymentLink}
        />
      </div>
    </div>
  );
};

export default InvoiceUniversalModeDemo;
