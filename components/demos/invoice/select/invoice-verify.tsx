import React from "react";
import classes from "./invoice-select.module.scss";
import invoiceClasses from "../invoice.module.scss";
import { motion } from "framer-motion";
import InvoiceButton from "../components/button/button";
import InvoiceDetailsBar from "../components/details-bar/details-bar";

const InvoiceVerifyDemo: React.FC<{ session?: boolean; refund?: boolean }> = ({
  session,
  refund,
}) => {
  return (
    <motion.div className={invoiceClasses.invoice}>
      <InvoiceDetailsBar total="4179.25 USD" />
      <div className={classes.wallets} style={{ padding: "12px 20px 20px" }}>
        <motion.img
          style={{ margin: "12px auto -4px" }}
          width="32px"
          src="https://bitpay.com/img/wallet-logos/bitpay-wallet.svg"
        />
        <div className={invoiceClasses.title}>
          {refund ? "Sign in to BitPay" : "Verification Required"}
        </div>
        <div className={invoiceClasses.caption}>
          {refund ? (
            <>
              To initiate your refund, please sign in or create an account to
              continue.
            </>
          ) : (
            <>
              This payment requires ID verification.{" "}
              {session
                ? "Continue to complete verification."
                : "Please sign in or register to continue."}
            </>
          )}
        </div>
        {session && (
          <div className={classes.user} style={{ marginTop: 28 }}>
            <img
              src="/logos/ab-logo.svg"
              alt="Ash's Logo"
              width="34px"
              style={{ marginRight: 14 }}
            />
            <div>
              <div className={classes.user__name}>Ash Bhimasani</div>
              <div className={classes.user__email}>16abhimasani@gmail.com</div>
            </div>
          </div>
        )}
        <div style={{ marginTop: 40 }}>
          <InvoiceButton
            main={session ? "Proceed" : "Sign In or Register"}
            async={`Awaiting ${session ? "Verification" : "Authentication"}`}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default InvoiceVerifyDemo;
