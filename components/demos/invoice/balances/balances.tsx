import React from "react";
import classes from "./balances.module.scss";
import { motion } from "framer-motion";

import InvoiceSelected from "./selected";
import InvoiceButton from "../button/button";

const InvoiceBalances: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <InvoiceSelected code="USDC" name="USD Coin" balance="2045.98" />
      <InvoiceButton />
    </div>
  );
};

export default InvoiceBalances;
