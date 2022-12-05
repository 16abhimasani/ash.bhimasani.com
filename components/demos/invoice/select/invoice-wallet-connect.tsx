import { motion } from "framer-motion";
import React from "react";
import InvoicePulser from "../components/pulser/pulser";
import invoiceClasses from "../invoice.module.scss";
import classes from "./invoice-select.module.scss";

const InvoiceSelectWalletConnectDemo: React.FC<{ type: string }> = ({
  type,
}) => {
  const data = (): {
    logo: string;
    name: string;
    theme: string;
    caption: string;
  } => {
    switch (type) {
      case "metamask":
        return {
          name: "MetaMask",
          logo: "metamask.svg",
          theme: "#f79220",
          caption: "Authorize BitPay to connect to your Web3 wallet to pay.",
        };
      case "ledger":
        return {
          name: "Ledger",
          logo: "ledger-wallet.svg",
          theme: "#41ccb4",
          caption:
            "Plug in your device and make sure Browser Support is enabled.",
        };
      case "trezor":
        return {
          name: "Trezor",
          logo: "trezor-wallet.svg",
          theme: "#01b757",
          caption:
            "Plug in your device and make sure Browser Support is enabled.",
        };
      default:
        return {
          name: "MetaMask",
          logo: "metamask.svg",
          theme: "#f79220",
          caption: "Authorize BitPay to connect to your Web3 wallet to pay.",
        };
    }
  };
  return (
    <motion.div className={invoiceClasses.invoice} style={{ height: 420 }}>
      <div className={classes.header}>
        <motion.div
          className={classes.search}
          style={{ cursor: "pointer", borderRadius: 100 }}
        >
          <motion.div className={classes.search__selected}>
            <img
              className={classes.search__selected__icon}
              src={`https://bitpay.com/img/wallet-logos/${data().logo}`}
            />
            {data().name}
          </motion.div>

          <motion.img
            className={classes.search__icon}
            src="/icons/bp-search-clear.svg"
            style={{ cursor: "pointer", transform: "scale(0.8)" }}
          />
        </motion.div>
      </div>
      <div
        className={classes.wallets}
        style={{ height: "100%", overflow: "hidden" }}
      >
        <div className={invoiceClasses.title}>Connect to {data().name}</div>
        <div className={invoiceClasses.caption}>{data().caption}</div>
        <InvoicePulser
          icon={`https://bitpay.com/img/wallet-logos/${data().logo}`}
          theme={data().theme}
        />
      </div>
    </motion.div>
  );
};

export default InvoiceSelectWalletConnectDemo;
