import React, { useState } from "react";
import classes from "./balances.module.scss";
import { motion } from "framer-motion";

import InvoiceSelected from "./selected";
import InvoiceButton from "../button/button";

const InvoiceBalances: React.FC = () => {
  const [OPEN_BALANCES, TOGGLE_BALANCES] = useState(false);
  return (
    <div className={classes.wrapper}>
      <InvoiceSelected
        code="USDC"
        name="USD Coin"
        balance="2045.98"
        open={OPEN_BALANCES}
        toggle={(): void => TOGGLE_BALANCES(!OPEN_BALANCES)}
      />
      <InvoiceButton />
    </div>
  );
};

export default InvoiceBalances;
