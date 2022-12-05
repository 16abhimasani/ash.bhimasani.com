import { motion } from "framer-motion";
import React, { useCallback, useState } from "react";
import copyUtil from "../../../../../utils/copy-to-clipboard";
import { wait } from "../../../../../utils/utils";
import classes from "./copy.module.scss";

const InvoiceCopyField: React.FC<{
  label: string;
  value: string;
  toastTitle: string;
  qrVisible?: boolean;
  toggleQR?: (val: boolean) => void;
  setToast: (val: {
    label: string;
    value: string;
    toastTitle: string;
    showToast: boolean;
  }) => void;
}> = ({ label, value, toastTitle, qrVisible, toggleQR, setToast }) => {
  const processAddress = (str: string, limit = 12): string =>
    `${str.substring(0, limit)}...${str.substring(str.length - limit)}`;
  const [copied, setCopied] = useState(false);
  const [hoveringQR, setHoveringQR] = useState(false);
  const startCopying = useCallback(async () => {
    if (copied) return;
    if (hoveringQR) return;
    copyUtil(value.split(" ")[0]);
    setCopied(true);
    setToast({ label, value, toastTitle, showToast: true });
    await wait(1500);
    setCopied(false);
  }, [copied, value, hoveringQR]);
  return (
    <div className={classes.item}>
      <div className={classes.title}>{label}</div>
      <motion.div
        className={classes.copy}
        onTapStart={startCopying}
        animate={{ color: copied ? "#4f6ef7" : "#000000" }}
        whileHover={{ scale: 0.99 }}
        whileTap={{ scale: 1.01 }}
      >
        {label === "Address" ? processAddress(value) : value}
        {label === "Address" && toggleQR && (
          <motion.img
            onClick={() => toggleQR(!qrVisible)}
            onHoverStart={() => setHoveringQR(true)}
            onHoverEnd={() => setHoveringQR(false)}
            className={classes.icon__qr}
            src={`/icons/${qrVisible ? "hide" : "show"}-qr-round.svg`}
          />
        )}
        <img className={classes.icon__copy} src="/icons/bp-copy.svg" />
      </motion.div>
    </div>
  );
};

export default InvoiceCopyField;
