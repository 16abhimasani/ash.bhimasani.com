import React from "react";
import classes from "../select/invoice-select.module.scss";
import invoiceClasses from "../invoice.module.scss";
import { motion } from "framer-motion";

import InvoiceDetailsBar from "../components/details-bar/details-bar";
import InvoiceTimer from "../components/timer/timer";
import InvoicePulser from "../components/pulser/pulser";

const InvoiceAwaitingConfDemo: React.FC<{ type: string }> = ({ type }) => {
  const theme = (): string => {
    return type.toLocaleLowerCase() === "btc" ? "#F7931A" : "#2FCF6E";
  };
  return (
    <div>
      <InvoiceTimer />
      <motion.div className={invoiceClasses.invoice}>
        <InvoiceDetailsBar rate="11,382.15 USD" due="0.011861 BTC" />
        <div
          className={classes.wallets}
          style={{ height: 344, overflow: "hidden" }}
        >
          <div className={invoiceClasses.title}>Awaiting Confirmation</div>
          <div className={invoiceClasses.caption}>
            We are awaiting confirmation of your payment on the blockchain.
          </div>
          <InvoicePulser
            icon={`/icons/currencies/${type.toLocaleLowerCase()}.svg`}
            theme={theme()}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default InvoiceAwaitingConfDemo;
