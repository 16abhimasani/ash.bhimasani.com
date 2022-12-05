import { motion } from "framer-motion";
import React, { useState } from "react";
import classes from "../invoice.module.scss";

import copyUtil from "../../../../utils/copy-to-clipboard";
import InvoiceDetailsBar from "../components/details-bar/details-bar";
import InvoiceLaunchBar from "../components/launch-bar/launch-bar";
import InvoiceQR from "../components/qr/qr";
import InvoiceSuperToast, {
  closeToast,
  handleToast,
  SuperToastController,
} from "../components/super-toast/super-toast";
import InvoiceTimer from "../components/timer/timer";

const paymentLink = "https://ash.bhimasani.com/bitpay/invoice";
const BIP21_URI = (): string => {
  const address = "bitcoin:1GnVjxpvak4CSJRAF6FFRHuboBA5uA8BTR";
  const amount = 0.011861;
  const label = "Ash Bhimasani";
  const message = "🍓🤠🚀";
  return `${address}?amount=${amount}&label=${encodeURI(
    label
  )}&message=${encodeURI(message)}`;
};

const InvoicePayProModeDemo: React.FC = () => {
  const [QR_VISIBLE, TOGGLE_QR] = useState(true);
  const [TOAST_CONTENT, SET_TOAST] = useState<SuperToastController>({
    toastTitle: "Payment Link Copied",
    value: paymentLink,
    showToast: false,
  });
  const handleWallet = () => {
    window.open(BIP21_URI(), "_self");
    handleToast(
      {
        toastTitle: `Uncheck "Subtract Fee"`,
        value: `Make sure to uncheck the “Subtract Fee from Amount” option next to your total amount.`,
        type: "warning",
        buttons: [
          {
            text: "Help Me",
            action: () =>
              window.open("https://bitpay.com/request-help/wizard", "_blank"),
          },
          { text: "Copy Payment", action: startCopy },
        ],
        showToast: true,
      },
      TOAST_CONTENT,
      SET_TOAST
    );
  };
  const startCopy = () => {
    copyUtil(paymentLink);
    handleToast(
      {
        toastTitle: `Payment Link Copied!`,
        value: paymentLink,
        showToast: true,
      },
      TOAST_CONTENT,
      SET_TOAST
    );
  };
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
          walletToggle={handleWallet}
          copyToggle={startCopy}
        />
      </motion.div>
      <div style={{ position: "relative", marginTop: 26 }}>
        <InvoiceSuperToast
          open={TOAST_CONTENT.showToast}
          close={(): void => closeToast(TOAST_CONTENT, SET_TOAST)}
          title={TOAST_CONTENT.toastTitle}
          caption={TOAST_CONTENT.value}
          type={TOAST_CONTENT.type}
          buttons={TOAST_CONTENT.buttons}
        />
      </div>
    </div>
  );
};

export default InvoicePayProModeDemo;
