import React from "react";
import classes from "../select/invoice-select.module.scss";
import invoiceClasses from "../invoice.module.scss";
import { motion } from "framer-motion";
import InvoiceButton from "../components/button/button";
import InvoiceDetailsBar from "../components/details-bar/details-bar";

const InvoiceExpiredDemo: React.FC<{ refund?: boolean }> = ({ refund }) => {
  return (
    <motion.div className={invoiceClasses.invoice}>
      <InvoiceDetailsBar rate="419.25 USD" due="0.322003 BCH" refund={refund} />
      <div className={classes.wallets} style={{ padding: "12px 20px 20px" }}>
        <motion.img
          style={{ margin: "12px auto -6px" }}
          width="24px"
          src="/icons/status-declined.svg"
        />
        <div className={invoiceClasses.title} style={{ color: "#EF476F" }}>
          {refund ? "Refund" : "Payment"} Expired
        </div>
        <div className={invoiceClasses.caption}>
          {refund ? (
            <>
              Refund links are only valid for 3 days. Tap below to get a new
              email.
            </>
          ) : (
            <>
              Your 15 minute window to pay has expired. Please do not send any
              funds.
            </>
          )}
        </div>
        <div style={{ marginTop: 40 }}>
          <InvoiceButton
            main={refund ? "Resend Email" : "Try Again"}
            async={refund ? "Sending Email" : "Regenerating Invoice"}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default InvoiceExpiredDemo;
