import React, { useState } from "react";
import classes from "./invoice.module.scss";
import { motion } from "framer-motion";

import InvoiceDetailsBar from "./details-bar/details-bar";
import InvoiceTimer from "./timer/timer";
import InvoiceBalances from "./balances/balances";

const InvoiceConnectModeDemo: React.FC = () => {
  const [SELECTED_CURRENCY, SET_CURRENCY] = useState({
    code: "USDC",
    name: "USD Coin",
    balance: "1216.38",
    rate: "1.00 USD",
    due: "135.00",
  });
  return (
    <div style={{ minHeight: 500 }}>
      <InvoiceTimer />
      <motion.div className={classes.invoice}>
        <InvoiceDetailsBar
          rate={SELECTED_CURRENCY.rate}
          due={`${SELECTED_CURRENCY.due} ${SELECTED_CURRENCY.code}`}
        />
        <motion.div className={classes.price}>$135.00</motion.div>
        <InvoiceBalances />
      </motion.div>
    </div>
  );
};

export default InvoiceConnectModeDemo;
