import React from "react";
import classes from "./balances.module.scss";
import { motion } from "framer-motion";

const InvoiceSelected: React.FC<{
  code: string;
  name: string;
  balance: string;
}> = ({ code, name, balance }) => {
  return (
    <div className={classes.selected__wrapper}>
      <div className={classes.selected__source}>
        <div className={classes.connected}>Connected Wallet</div>
        <div className={classes.wallet__wrapper}>
          <div className={classes.status}></div>
          <div className={classes.wallet}>Coinbase</div>
        </div>
      </div>
      <div className={classes.selected}>
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
          <img
            className={classes.currency__balance__chevron}
            src="/icons/right-chevron.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default InvoiceSelected;
