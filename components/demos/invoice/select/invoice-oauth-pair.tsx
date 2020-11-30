import React from "react";
import classes from "./invoice-select.module.scss";
import invoiceClasses from "../invoice.module.scss";
import { motion } from "framer-motion";
import { WALLETS } from "./wallets";
import InvoiceButton from "../components/button/button";

const InvoiceSelectOauthPairDemo: React.FC<{ type: string }> = ({ type }) => {
  return (
    <motion.div className={invoiceClasses.invoice}>
      <div className={classes.header}>
        <motion.div
          className={classes.search}
          style={{ cursor: "pointer", borderRadius: 100 }}
        >
          <motion.div className={classes.search__selected}>
            <img
              className={classes.search__selected__icon}
              src={`https://bitpay.com/img/wallet-logos/${WALLETS[type].icon}`}
            />
            {WALLETS[type].displayName}
          </motion.div>

          <motion.img
            className={classes.search__icon}
            src="/icons/bp-search-clear.svg"
            style={{ cursor: "pointer", transform: "scale(0.8)" }}
          />
        </motion.div>
      </div>
      <div className={classes.wallets} style={{ padding: "12px 20px 20px" }}>
        <motion.img
          style={{ marginTop: 12 }}
          src={`/icons/connect-${type}.svg`}
        />
        <div className={invoiceClasses.title}>
          Connect to {WALLETS[type].displayName}
        </div>
        <div className={invoiceClasses.caption} style={{ marginBottom: 40 }}>
          Sign in to your {WALLETS[type].displayName} account to view your
          balances and seamlessly pay.
        </div>
        <InvoiceButton main="Connect Account" async="Awaiting Authentication" />
      </div>
    </motion.div>
  );
};

export default InvoiceSelectOauthPairDemo;
