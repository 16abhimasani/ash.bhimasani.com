import React, { useCallback, useState } from "react";
import classes from "../invoice.module.scss";
import { motion } from "framer-motion";

import InvoiceDetailsBar from "../components/details-bar/details-bar";
import InvoiceLaunchBar from "../components/launch-bar/launch-bar";
import InvoiceSuperToast from "../components/super-toast/super-toast";
import InvoiceTimer from "../components/timer/timer";
import InvoiceQR from "../components/qr/qr";
import copyUtil from "../../../../utils/copy-to-clipboard";

const paymentLink = "https://ash.bhimasani.com/bitpay/invoice";

const InvoicePayProModeDemo: React.FC = () => {
  const [QR_VISIBLE, TOGGLE_QR] = useState(true);
  const [COPY_LINK, TOGGLE_COPY] = useState(false);
  const startCopy = useCallback(async () => {
    copyUtil(paymentLink);
    TOGGLE_COPY(true);
  }, []);
  return (
    <div>
      <InvoiceTimer />
      <motion.div className={classes.invoice}>
        <InvoiceDetailsBar
          rate="11,382.15 USD"
          due="0.011861 BTC"
          networkCost
        />
        <motion.div className={classes.price}>$135.00</motion.div>
        <InvoiceQR qrVisible={QR_VISIBLE} qr="btc" />
        <InvoiceLaunchBar
          qrVisible={QR_VISIBLE}
          qrToggle={TOGGLE_QR}
          walletToggle={(): void => console.log("Launch Wallet")}
          copyToggle={startCopy}
        />
      </motion.div>
      <div style={{ position: "relative", marginTop: 26 }}>
        <InvoiceSuperToast
          open={COPY_LINK}
          close={(): void => TOGGLE_COPY(false)}
          title="Payment Link Copied!"
          caption={paymentLink}
        />
      </div>
    </div>
  );
};

export default InvoicePayProModeDemo;
