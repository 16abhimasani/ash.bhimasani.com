import React from "react";
import classes from "./ext-receipt.module.scss";
import { motion } from "framer-motion";

import ExtensionNavDemo from "../ext-nav/ext-nav";
import CodeBox from "./code-box/code-box";

const ExtensionReceiptDemo: React.FC = () => {
  return (
    <motion.div className={classes.container}>
      <ExtensionNavDemo middleMode={true} />
      <div className={classes.title}>Ash Bhimasani</div>
      <div className={classes.price__block}>
        <img
          className={classes.logo}
          src="/logos/ab-logo.svg"
          alt="Ash's Logo"
        />
        <div className={classes.price}>17.23 USD</div>
      </div>
      <div className={classes.details}>
        <div className={classes.details__row}>
          <div className={classes.details__row__left}>Purchased</div>
          <div className={classes.details__row__right}>
            {new Date().toLocaleString([], {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </div>
        </div>
        <div className={classes.details__row}>
          <div className={classes.details__row__left}>Credit Amount</div>
          <div className={classes.details__row__right}>17.23 USD</div>
        </div>
        <div className={classes.details__row}>
          <div className={classes.details__row__left}>5% Discount</div>
          <div className={classes.details__row__right}>- 0.86 USD</div>
        </div>
        <div className={classes.details__row}>
          <div className={classes.details__row__left}>Total Cost</div>
          <div
            className={classes.details__row__right}
            style={{ fontWeight: 500 }}
          >
            16.37 USD
          </div>
        </div>
        <div className={classes.details__row}>
          <div className={classes.details__row__left}>Amount Paid</div>
          <div
            className={classes.details__row__right}
            style={{ color: "#4F6EF7", fontWeight: 600 }}
          >
            0.065408 BCH
          </div>
        </div>
      </div>
      <CodeBox label="Claim Code" code="29B4-NZ5UW9-DY7C" />
    </motion.div>
  );
};

export default ExtensionReceiptDemo;
