import React, { useState } from "react";
import classes from "../invoice.module.scss";
import { motion } from "framer-motion";

import InvoiceDetailsBar from "../components/details-bar/details-bar";
import InvoiceTimer from "../components/timer/timer";
import {
  InvoiceCryptoBalances,
  CURRENCIES,
} from "../components/balances/balances";

const InvoiceConnectModeDemo: React.FC = () => {
  const [SELECTED_CURRENCY, SET_CURRENCY] = useState(CURRENCIES[0]);
  return (
    <div>
      <InvoiceTimer />
      <motion.div className={classes.invoice}>
        <InvoiceDetailsBar
          rate={SELECTED_CURRENCY.rate}
          due={`${SELECTED_CURRENCY.due} ${SELECTED_CURRENCY.code}`}
        />
        <motion.div className={classes.price}>$135.00</motion.div>
        <InvoiceCryptoBalances
          selected={SELECTED_CURRENCY}
          select={SET_CURRENCY}
        />
      </motion.div>
    </div>
  );
};

export default InvoiceConnectModeDemo;
