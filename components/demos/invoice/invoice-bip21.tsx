import React, { useCallback, useState } from "react";
import classes from "./invoice.module.scss";
import { motion } from "framer-motion";
import { wait } from "../../../utils/utils";

import InvoiceDetailsBar from "./details-bar/details-bar";
import InvoiceLaunchBar from "./launch-bar/launch-bar";
import InvoiceSuperToast from "./super-toast/super-toast";
import InvoiceTimer from "./timer/timer";
import InvoiceQR from "./qr/qr";
import InvoiceCopySheet from "./copy/copy-sheet";

const InvoiceBIP21ModeDemo: React.FC = () => {
  const [QR_VISIBLE, TOGGLE_QR] = useState(true);
  const [COPY_SHEET, TOGGLE_COPY] = useState(false);
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
  const handleWallet = useCallback(async () => {
    console.log("open wallet");
  }, []);
  const handleCopy = useCallback(async () => {
    TOGGLE_COPY(!COPY_SHEET);
  }, [COPY_SHEET]);
  const toggleQR = useCallback(async () => {
    if (COPY_SHEET) {
      TOGGLE_COPY(false);
      await wait(450);
    }
    TOGGLE_QR(!QR_VISIBLE);
  }, [QR_VISIBLE, COPY_SHEET]);
  return (
    <div>
      <InvoiceTimer />
      <motion.div className={classes.invoice}>
        <InvoiceDetailsBar rate="185.18 USD" due="0.729002 BCH" />
        <motion.div className={classes.price}>0.729002 BCH</motion.div>
        <InvoiceQR qrVisible={QR_VISIBLE} qr="bch" />
        <InvoiceCopySheet
          open={COPY_SHEET}
          close={(): void => TOGGLE_COPY(false)}
          fields={[
            {
              label: "Amount Due",
              value: "0.729002 BCH",
              toastTitle: "Payment Amount Copied!",
            },
            {
              label: "Address",
              value: "bitcoincash:qp65ya7rdggr5qsnf4hv38fpt93mcdvhtva9z26awa",
              toastTitle: "Payment Address Copied!",
            },
          ]}
          setToast={handleToast}
          qrVisible={QR_VISIBLE}
        />
        <InvoiceLaunchBar
          qrVisible={QR_VISIBLE}
          qrToggle={toggleQR}
          walletToggle={handleWallet}
          copyToggle={handleCopy}
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

export default InvoiceBIP21ModeDemo;
