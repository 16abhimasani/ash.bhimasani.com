import React, { useCallback, useState } from "react";
import classes from "../invoice.module.scss";
import { motion } from "framer-motion";
import { wait } from "../../../../utils/utils";

import InvoiceDetailsBar from "../components/details-bar/details-bar";
import InvoiceLaunchBar from "../components/launch-bar/launch-bar";
import InvoiceSuperToast from "../components/super-toast/super-toast";
import InvoiceTimer from "../components/timer/timer";
import InvoiceQR from "../components/qr/qr";
import InvoiceCopySheet from "../components/copy/copy-sheet";

const InvoiceBIP21ModeDemo: React.FC = () => {
  const [QR_VISIBLE, TOGGLE_QR] = useState(true);
  const [COPY_SHEET, TOGGLE_COPY] = useState(false);
  const [TOAST_CONTENT, SET_TOAST] = useState<{
    label?: string;
    toastTitle: string;
    value: string;
    showToast: boolean;
    type?: string;
    buttons?: { text: string; action?: () => void }[];
  }>({
    label: "Address",
    toastTitle: "Payment Address Copied",
    value: "Address",
    showToast: false,
  });
  const handleToast = useCallback(
    async (content: {
      label?: string;
      toastTitle: string;
      value: string;
      showToast: boolean;
      type?: string;
      buttons?: { text: string; action?: () => void }[];
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
    handleToast({
      toastTitle: `Uncheck "Subtract Fee"`,
      value: `Make sure to uncheck the “Subtract Fee from Amount” option next to your total amount.`,
      type: "warning",
      buttons: [
        { text: "Help Me" },
        { text: "Copy Payment", action: handleCopy },
      ],
      showToast: true,
    });
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
          type={TOAST_CONTENT.type}
          buttons={TOAST_CONTENT.buttons}
        />
      </div>
    </div>
  );
};

export default InvoiceBIP21ModeDemo;