import classNames from "classnames/bind";
import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import classes from "./nav.module.scss";
import { PhantomWordmark } from "./logo/wordmark";
import { ThemeContext } from "../../../pages/_app";
import PhantomToggle from "./toggle/toggle";

const cx = classNames.bind(classes);

const PhantomNavDemo: React.FC<{ middleMode?: boolean }> = ({
  middleMode = false,
}) => {
  const theme = useContext(ThemeContext);
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
        bar__dark__theme: theme.dark,
        bar__dark: payMode,
        bar__expanded: middleMode,
      })}
      whileTap={{
        scale: middleMode ? 1 : 1.02,
      }}
    >
      {/* <ExtensionBackButton show={!normal} onClick={toggleNormal} /> */}
      {/* <BitpayLogo solo={!normal} payMode={payMode} /> */}
      <PhantomWordmark
        solo={!normal}
        payMode={payMode}
        fill={payMode ? "#fff" : "#fff"}
        width={128}
      />
      <PhantomToggle
        toggleNormal={toggleNormal}
        togglePay={togglePay}
        normal={normal}
        payMode={payMode}
      />
    </motion.div>
  );
};

export default PhantomNavDemo;
