import React, { useState } from "react";
import classNames from "classnames/bind";
import classes from "./ex-nav.module.scss";
import { motion } from "framer-motion";

import BitpayLogo from "./bp-logo/bp-logo";
import BackButton from "./back-button/back-button";
import Toggle from "./toggle/toggle";

const cx = classNames.bind(classes);

const ExtensionNavDemo: React.FC = () => {
  const [normal, normalize] = useState(true);
  const [payMode, setPayMode] = useState(false);
  const toggleNormal = (): void => {
    setPayMode(false);
    normalize(!normal);
  };
  const togglePay = (): void => {
    setPayMode(!payMode);
    normalize(true);
  };
  return (
    <motion.div
      className={cx({
        bar: true,
        bar__dark: payMode,
      })}
      whileTap={{ scale: 1.02 }}
    >
      <BackButton show={!normal} onClick={toggleNormal} />
      <BitpayLogo solo={!normal} payMode={payMode} />
      <Toggle
        toggleNormal={toggleNormal}
        togglePay={togglePay}
        normal={normal}
        payMode={payMode}
      />
    </motion.div>
  );
};

export default ExtensionNavDemo;
