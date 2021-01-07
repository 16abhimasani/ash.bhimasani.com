import React, { useState } from "react";
import classes from "../invoice.module.scss";
import { motion } from "framer-motion";

import InvoiceDetailsBar from "../components/details-bar/details-bar";
import InvoiceLaunchBar from "../components/launch-bar/launch-bar";
import InvoiceSuperToast, {
  closeToast,
  handleToast,
  SuperToastController,
} from "../components/super-toast/super-toast";
import InvoiceTimer from "../components/timer/timer";
import InvoiceQR from "../components/qr/qr";
import copyUtil from "../../../../utils/copy-to-clipboard";

const paymentLink = "https://ash.bhimasani.com/bitpay/invoice";

const InvoicePayProModeDemo: React.FC = () => {
  const [QR_VISIBLE, TOGGLE_QR] = useState(true);
  const [TOAST_CONTENT, SET_TOAST] = useState<SuperToastController>({
    toastTitle: "Payment Link Copied",
    value: paymentLink,
    showToast: false,
  });
  const handleWallet = () => {
    fetch("https://test.bitpay.com/invoices", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price: "135.00",
        currency: "USD",
        token: "DAuGbs4T8ASv2wfZT7pqnyiFufz4j2XYFxf88yMPxFA8",
      }),
    })
      .then((response) => response.json())
      .then((data) => data.data)
      .then((data) => {
        console.log(`bitcoin:?r=https://test.bitpay.com/i/${data.id}`);
        window.open(`bitcoin:?r=https://test.bitpay.com/i/${data.id}`, "_self");
      })
      .catch((err) => console.error(err));
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
