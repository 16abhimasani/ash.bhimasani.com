import { motion } from "framer-motion";
import React from "react";
import invoiceClasses from "../invoice.module.scss";
import classes from "./invoice-select.module.scss";
import { WALLETS } from "./wallets";

const InvoiceSelectWalletPairDemo: React.FC<{ type: string }> = ({ type }) => {
  return (
    <motion.div className={invoiceClasses.invoice} style={{ height: 512 }}>
      <div className={classes.header}>
        <motion.div
          className={classes.search}
          style={{ cursor: "pointer", borderRadius: 100 }}
        >
          <motion.div className={classes.search__selected}>
            <img
              className={classes.search__selected__icon}
              src={
                WALLETS[type].icon.includes("/")
                  ? `/logos${WALLETS[type].icon}`
                  : `https://bitpay.com/img/wallet-logos/${WALLETS[type].icon}`
              }
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
      <div className={classes.wallets} style={{ height: "100%" }}>
        <div className={invoiceClasses.title}>Connect your Wallet</div>
        <div className={invoiceClasses.caption}>
          Scan the QR code below with your {WALLETS[type].displayName} app to
          continue.
        </div>
        <img
          style={{ margin: "32px auto 0 auto" }}
          width={234}
          src={`/imgs/invoice/qr-codes/${WALLETS[type].displayName
            .split(" ")[0]
            .toLowerCase()}-wallet-connect.svg`}
        />
      </div>
    </motion.div>
  );
};

export default InvoiceSelectWalletPairDemo;
