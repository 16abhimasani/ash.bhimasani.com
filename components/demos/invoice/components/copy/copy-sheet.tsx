import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import classes from "./copy.module.scss";
import InvoiceCopyField from "./copy-field";
import InvoiceOverlay from "../overlay/overlay";

const animateSheet = {
  visible: {
    y: 0,
    transition: {
      type: "linear",
      duration: 0.4,
    },
  },
  hidden: {
    y: 225,
    transition: {
      type: "linear",
      duration: 0.4,
    },
  },
};

const InvoiceCopySheet: React.FC<{
  open: boolean;
  close: () => void;
  fields: { label: string; value: string; toastTitle: string }[];
  setToast: (val: {
    label: string;
    value: string;
    toastTitle: string;
    showToast: boolean;
  }) => void;
  qrVisible: boolean;
}> = ({ open, close, fields, setToast, qrVisible }) => {
  return (
    <div
      style={{
        marginTop: open && !qrVisible ? 210 : 0,
        transition: "margin 400ms ease-in-out",
      }}
    >
      <InvoiceOverlay open={open} click={close} />
      <AnimatePresence exitBeforeEnter>
        {open && (
          <motion.div
            className={classes.sheet__wrapper}
            key="sheet"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={animateSheet}
          >
            <motion.div className={classes.sheet}>
              {fields.map((field, index) => (
                <React.Fragment key={index}>
                  <InvoiceCopyField {...field} setToast={setToast} />
                </React.Fragment>
              ))}
              <motion.div className={classes.icon__exit} onClick={close}>
                <img src="/icons/copy-sheet-exit.svg" />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InvoiceCopySheet;
