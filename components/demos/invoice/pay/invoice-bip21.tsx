import { motion } from "framer-motion";
import React, { useCallback, useState } from "react";
import { wait } from "../../../../utils/utils";
import classes from "../invoice.module.scss";

import InvoiceCopySheet from "../components/copy/copy-sheet";
import InvoiceDetailsBar from "../components/details-bar/details-bar";
import InvoiceLaunchBar from "../components/launch-bar/launch-bar";
import InvoiceQR from "../components/qr/qr";
import InvoiceSuperToast, {
  closeToast,
  handleToast,
  SuperToastController,
} from "../components/super-toast/super-toast";
import InvoiceTimer from "../components/timer/timer";

const BIP21_URI = (): string => {
  const address = "bitcoincash:qp4m6jn77h4jyf5rz8kflx2p55xtcthrpyau7x02ej";
  const amount = 0.729002;
  const label = "Ash Bhimasani";
  const message = "🍓🤠🚀";
  return `${address}?amount=${amount}&label=${encodeURI(
    label
  )}&message=${encodeURI(message)}`;
};

const InvoiceBIP21ModeDemo: React.FC = () => {
  const [QR_VISIBLE, TOGGLE_QR] = useState(true);
  const [COPY_SHEET, TOGGLE_COPY] = useState(false);
  const [TOAST_CONTENT, SET_TOAST] = useState<SuperToastController>({
    label: "Address",
    toastTitle: "Payment Address Copied",
    value: "Address",
    showToast: false,
  });
  const handleWallet = () => {
    window.open(BIP21_URI(), "_self");
  };
  const handleCopySheet = () => {
    TOGGLE_COPY(!COPY_SHEET);
  };
  const copySheetToastHandler = (content: SuperToastController) => {
    handleToast(content, TOAST_CONTENT, SET_TOAST);
  };
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
          setToast={copySheetToastHandler}
          qrVisible={QR_VISIBLE}
        />
        <InvoiceLaunchBar
          qrVisible={QR_VISIBLE}
          qrToggle={toggleQR}
          walletToggle={handleWallet}
          copyToggle={handleCopySheet}
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

export default InvoiceBIP21ModeDemo;
