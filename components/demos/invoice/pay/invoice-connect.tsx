import React, { useState } from "react";
import classes from "../invoice.module.scss";
import { motion } from "framer-motion";

import InvoiceDetailsBar from "../components/details-bar/details-bar";
import InvoiceTimer from "../components/timer/timer";
import {
  InvoiceCryptoBalances,
  EXCHANGE,
  WEB3,
} from "../components/balances/balances";

const InvoiceConnectModeDemo: React.FC<{ web3?: boolean }> = ({ web3 }) => {
  const [SELECTED_CURRENCY, SET_CURRENCY] = useState(
    web3 ? WEB3[0] : EXCHANGE[0]
  );
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
          web3={web3}
        />
      </motion.div>
    </div>
  );
};

export default InvoiceConnectModeDemo;
