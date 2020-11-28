import React from "react";
import classes from "./invoice-select.module.scss";
import invoiceClasses from "./invoice.module.scss";
import { motion } from "framer-motion";

import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const InvoiceSelectWeb3Demo: React.FC = () => {
  return (
    <div>
      <motion.div className={invoiceClasses.invoice} style={{ height: 420 }}>
        <div className={classes.header}>
          <motion.div
            className={classes.search}
            style={{ cursor: "pointer", borderRadius: 100 }}
          >
            <motion.div className={classes.search__selected}>
              <img
                className={classes.search__selected__icon}
                src="https://bitpay.com/img/wallet-logos/metamask.svg"
              />
              MetaMask
            </motion.div>

            <motion.img
              className={classes.search__icon}
              src="/icons/bp-search-clear.svg"
              style={{ cursor: "pointer", transform: "scale(0.8)" }}
            />
          </motion.div>
        </div>
        <div className={classes.wallets} style={{ height: "100%" }}>
          <div className={invoiceClasses.title}>Connect to MetaMask</div>
          <div className={invoiceClasses.caption}>
            Authorize BitPay to connect to your Web3 wallet to pay.
          </div>
          <div className={classes.pulser}>
            <img
              className={classes.pulser__icon}
              src="https://bitpay.com/img/wallet-logos/metamask.svg"
            />
            <div
              className={cx({
                pulser__rings: true,
                pulser__rings__0: true,
              })}
            ></div>
            <div
              className={cx({
                pulser__rings: true,
                pulser__rings__1: true,
              })}
            ></div>
            <div
              className={cx({
                pulser__rings: true,
                pulser__rings__2: true,
              })}
            ></div>
            <div
              className={cx({
                pulser__rings: true,
                pulser__rings__3: true,
              })}
            ></div>
            <div
              className={cx({
                pulser__rings: true,
                pulser__rings__4: true,
              })}
            ></div>
            <div
              className={cx({
                pulser__rings: true,
                pulser__rings__5: true,
              })}
            ></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default InvoiceSelectWeb3Demo;
