import { motion } from "framer-motion";
import React, { useState } from "react";
import classes from "../invoice.module.scss";

import { FIAT, InvoiceFiatBalances } from "../components/balances/balances";
import InvoiceDetailsBar from "../components/details-bar/details-bar";
import InvoiceTimer from "../components/timer/timer";

const InvoiceFiatConnectModeDemo: React.FC = () => {
  const [SELECTED_CURRENCY, SET_CURRENCY] = useState(FIAT[0]);
  return (
    <div>
      <InvoiceTimer />
      <motion.div className={classes.invoice}>
        <InvoiceDetailsBar rate="1.00 USD" due="135.00 USD" />
        <motion.div className={classes.price}>$135.00</motion.div>
        <InvoiceFiatBalances
          selected={SELECTED_CURRENCY}
          select={SET_CURRENCY}
        />
      </motion.div>
    </div>
  );
};

export default InvoiceFiatConnectModeDemo;
