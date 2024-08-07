import { motion } from "framer-motion";
import React, { useCallback, useState } from "react";
import { wait } from "../../../../utils/utils";
import classes from "../invoice.module.scss";

import copyUtil from "../../../../utils/copy-to-clipboard";
import InvoiceDetailsBar from "../components/details-bar/details-bar";
import InvoiceLaunchBar from "../components/launch-bar/launch-bar";
import InvoicePushNotification from "../components/push-notification/push-notification";
import InvoiceQR from "../components/qr/qr";
import InvoiceSuperToast from "../components/super-toast/super-toast";
import InvoiceTimer from "../components/timer/timer";

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
    <div>
      <InvoiceTimer />
      <motion.div className={classes.invoice}>
        <InvoiceDetailsBar />
        <motion.div className={classes.price}>$135.00</motion.div>
        <InvoiceQR qrVisible={QR_VISIBLE} qr="universal-mode" />
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
