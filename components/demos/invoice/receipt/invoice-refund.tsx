import React from "react";
import classes from "../select/invoice-select.module.scss";
import invoiceClasses from "../invoice.module.scss";
import { motion } from "framer-motion";
import InvoiceButton from "../components/button/button";
import InvoiceDetailsBar from "../components/details-bar/details-bar";
import MaterialInput from "../components/mat-input/mat-input";

const InvoiceRefundAddressDemo: React.FC = () => {
  return (
    <motion.div className={invoiceClasses.invoice}>
      <InvoiceDetailsBar rate="419.25 USD" due="0.322003 BCH" refund />
      <div className={classes.wallets} style={{ padding: "12px 20px 20px" }}>
        <motion.img
          style={{ margin: "12px auto -4px" }}
          width="28px"
          src="/icons/bp-refund-grey.svg"
        />
        <div className={invoiceClasses.title}>Get Refunded</div>
        <div className={invoiceClasses.caption}>
          To receive your refund we’ll need a BCH address from your wallet.
        </div>
        <div style={{ margin: "24px 12px 0" }}>
          <MaterialInput type="other" placeholder="Refund address" />
        </div>
        <div style={{ marginTop: 40 }}>
          <InvoiceButton main="Submit" async="Processing" />
        </div>
      </div>
    </motion.div>
  );
};

export default InvoiceRefundAddressDemo;
