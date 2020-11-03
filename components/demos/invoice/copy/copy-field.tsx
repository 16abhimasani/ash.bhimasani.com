import React, { useState, useCallback } from "react";
import classes from "./copy.module.scss";
import { motion } from "framer-motion";
import copyUtil from "../../../../utils/copy-to-clipboard";
import { wait } from "../../../../utils/utils";

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
  const startCopying = useCallback(async () => {
    if (copied) return;
    copyUtil(value.split(" ")[0]);
    setCopied(true);
    setToast({ label, value, toastTitle, showToast: true });
    await wait(1500);
    setCopied(false);
  }, [copied, value]);
  return (
    <div className={classes.item}>
      <div className={classes.title}>{label}</div>
      <motion.div
        className={classes.copy}
        onTapStart={startCopying}
        animate={{ color: copied ? "#4f6ef7" : "#000000" }}
      >
        {label === "Address" ? processAddress(value) : value}
        {label === "Address" && toggleQR && (
          <motion.img
            onClick={() => toggleQR(!qrVisible)}
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
