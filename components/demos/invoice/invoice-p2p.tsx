import React, { useCallback, useState } from "react";
import classes from "./invoice.module.scss";
import { motion } from "framer-motion";

import InvoiceDetailsBar from "./details-bar/details-bar";
import InvoiceSuperToast from "./super-toast/super-toast";
import InvoiceCopyBar from "./copy-bar/copy-bar";
import InvoiceTimer from "./timer/timer";
import InvoiceQR from "./qr/qr";
import { wait } from "../../../utils/utils";

const InvoiceAddressModeDemo: React.FC = () => {
  const [QR_VISIBLE, TOGGLE_QR] = useState(false);
  const [TOAST_CONTENT, SET_TOAST] = useState({
    label: "Address",
    toastTitle: "Payment Address Copied",
    value: "Address",
    showToast: false,
  });
  const handleToast = useCallback(
    async (content: {
      label: string;
      toastTitle: string;
      value: string;
      showToast: boolean;
    }) => {
      if (TOAST_CONTENT) {
        closeToast();
        await wait(400);
        SET_TOAST(content);
      } else {
        SET_TOAST(content);
      }
    },
    [TOAST_CONTENT]
  );
  const closeToast = (): void => {
    SET_TOAST({ ...TOAST_CONTENT, showToast: false });
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
              value: "p65ya7rdggr5qsnf4hv38fpt93mcdvhtva9z26awa",
              toastTitle: "Payment Address Copied!",
            },
          ]}
          toggleQR={TOGGLE_QR}
          qrVisible={QR_VISIBLE}
          setToast={handleToast}
        />
      </motion.div>
      <div style={{ position: "relative", marginTop: 26 }}>
        <InvoiceSuperToast
          open={TOAST_CONTENT.showToast}
          close={closeToast}
          title={TOAST_CONTENT.toastTitle}
          caption={TOAST_CONTENT.value}
        />
      </div>
    </div>
  );
};

export default InvoiceAddressModeDemo;
