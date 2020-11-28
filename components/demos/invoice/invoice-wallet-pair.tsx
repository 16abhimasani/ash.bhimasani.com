import React from "react";
import classes from "./invoice-select.module.scss";
import invoiceClasses from "./invoice.module.scss";
import { motion } from "framer-motion";

const InvoiceSelectWalletPairDemo: React.FC = () => {
  return (
    <div>
      <motion.div className={invoiceClasses.invoice} style={{ height: 512 }}>
        <div className={classes.header}>
          <motion.div
            className={classes.search}
            style={{ cursor: "pointer", borderRadius: 100 }}
          >
            <motion.div className={classes.search__selected}>
              <img
                className={classes.search__selected__icon}
                src="https://bitpay.com/img/wallet-logos/argent-wallet.svg"
              />
              Argent
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
            Scan the QR code below with your Argent Wallet app to continue.
          </div>
          <img
            style={{ marginTop: 32 }}
            src="/imgs/invoice/qr-codes/argent-wallet-connect.svg"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default InvoiceSelectWalletPairDemo;
