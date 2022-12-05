import { motion } from "framer-motion";
import React from "react";
import invoiceClasses from "../invoice.module.scss";
import classes from "../select/invoice-select.module.scss";

import InvoiceDetailsBar from "../components/details-bar/details-bar";
import InvoicePulser from "../components/pulser/pulser";
import InvoiceTimer from "../components/timer/timer";

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
            We are awaiting confirmation of your payment on the{" "}
            <a
              href="https://explorer.bitcoin.com/btc/tx/29a3efd3ef04f9153d47a990bd7b048a4b2d213daaa5fb8ed670fb85f13bdbcf"
              target="_blank"
              rel="noopener noreferrer"
            >
              blockchain
            </a>
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
