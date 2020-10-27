import React, { useState } from "react";
import classes from "./balances.module.scss";
import { motion, AnimatePresence } from "framer-motion";

import InvoiceSelected from "./selected";
import InvoiceButton from "../button/button";

const animateOverlay = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

const InvoiceBalances: React.FC = () => {
  const [OPEN_BALANCES, TOGGLE_BALANCES] = useState(false);
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {OPEN_BALANCES && (
          <motion.div
            className={classes.overlay}
            key="overlay"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={animateOverlay}
          ></motion.div>
        )}
      </AnimatePresence>
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
    </>
  );
};

export default InvoiceBalances;
