import React from "react";
import classes from "./balances.module.scss";
import { motion } from "framer-motion";

const animateChevron = {
  close: {
    opacity: 1,
    x: 0,
    rotate: 0,
  },
  open: {
    opacity: 1,
    rotate: 90,
  },
};

const InvoiceSelected: React.FC<{
  code: string;
  name: string;
  balance: string;
  open: boolean;
  toggle: () => void;
}> = ({ code, name, balance, open, toggle }) => {
  return (
    <div className={classes.selected__wrapper}>
      <div className={classes.selected__source}>
        <div className={classes.connected}>Connected Wallet</div>
        <div className={classes.wallet__wrapper}>
          <div className={classes.status}></div>
          <div className={classes.wallet}>Coinbase</div>
        </div>
      </div>
      <motion.div className={classes.selected} onClick={toggle}>
        <div className={classes.currency__wrapper}>
          <img
            className={classes.currency__icon}
            src={`/icons/currencies/${code.toLocaleLowerCase()}.svg`}
          />
          <div className={classes.currency__selected}>{name}</div>
        </div>
        <div className={classes.currency__wrapper}>
          <div className={classes.currency__balance}>
            {balance} {code}
          </div>
          <motion.img
            animate={open ? "open" : "close"}
            variants={animateChevron}
            className={classes.currency__balance__chevron}
            src="/icons/right-chevron.svg"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default InvoiceSelected;
