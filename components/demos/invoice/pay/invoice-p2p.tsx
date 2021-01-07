import React, { useState } from "react";
import classes from "../invoice.module.scss";
import { motion } from "framer-motion";

import InvoiceDetailsBar from "../components/details-bar/details-bar";
import InvoiceSuperToast, {
  closeToast,
  handleToast,
  SuperToastController,
} from "../components/super-toast/super-toast";
import InvoiceCopyBar from "../components/copy/copy-bar";
import InvoiceTimer from "../components/timer/timer";
import InvoiceQR from "../components/qr/qr";

const InvoiceAddressModeDemo: React.FC = () => {
  const [QR_VISIBLE, TOGGLE_QR] = useState(false);
  const [TOAST_CONTENT, SET_TOAST] = useState<SuperToastController>({
    label: "Address",
    toastTitle: "Payment Address Copied",
    value: "Address",
    showToast: false,
  });
  const copySheetToastHandler = (content: SuperToastController) => {
    handleToast(content, TOAST_CONTENT, SET_TOAST);
  };
  return (
    <div>
      <InvoiceTimer />
      <motion.div className={classes.invoice}>
        <InvoiceDetailsBar rate="267.93 USD" due="0.286929 BCH" />
        <motion.div className={classes.price}>$135.00</motion.div>
        <InvoiceQR qrVisible={QR_VISIBLE} qr="bch" />
        <InvoiceCopyBar
          fields={[
            {
              label: "Amount Due",
              value: "0.286929 BCH",
              toastTitle: "Payment Amount Copied!",
            },
            {
              label: "Address",
              value: "bitcoincash:qp65ya7rdggr5qsnf4hv38fpt93mcdvhtva9z26awa",
              toastTitle: "Payment Address Copied!",
            },
          ]}
          toggleQR={TOGGLE_QR}
          qrVisible={QR_VISIBLE}
          setToast={copySheetToastHandler}
        />
      </motion.div>
      <div style={{ position: "relative", marginTop: 26 }}>
        <InvoiceSuperToast
          open={TOAST_CONTENT.showToast}
          close={(): void => closeToast(TOAST_CONTENT, SET_TOAST)}
          title={TOAST_CONTENT.toastTitle}
          caption={TOAST_CONTENT.value}
        />
      </div>
    </div>
  );
};

export default InvoiceAddressModeDemo;
