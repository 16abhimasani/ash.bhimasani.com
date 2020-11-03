import React, { useState } from "react";
import classNames from "classnames/bind";
import classes from "./ext-nav.module.scss";
import { motion } from "framer-motion";

import BitpayLogo from "../bp-logo/bp-logo";
import ExtensionBackButton from "./back-button/back-button";
import ExtensionToggle from "./toggle/toggle";

const cx = classNames.bind(classes);

const ExtensionNavDemo: React.FC<{ middleMode?: boolean }> = ({
  middleMode = false,
}) => {
  const [normal, normalize] = useState(!middleMode);
  const [payMode, setPayMode] = useState(false);
  const toggleNormal = (): void => {
    if (!middleMode) {
      setPayMode(false);
      normalize(!normal);
    }
  };
  const togglePay = (): void => {
    if (!middleMode) {
      setPayMode(!payMode);
      normalize(true);
    }
  };
  return (
    <motion.div
      className={cx({
        bar: true,
        bar__dark: payMode,
        bar__expanded: middleMode,
      })}
      whileTap={{ scale: middleMode ? 1 : 1.02 }}
    >
      <ExtensionBackButton show={!normal} onClick={toggleNormal} />
      <BitpayLogo solo={!normal} payMode={payMode} />
      <ExtensionToggle
        toggleNormal={toggleNormal}
        togglePay={togglePay}
        normal={normal}
        payMode={payMode}
      />
    </motion.div>
  );
};

export default ExtensionNavDemo;
