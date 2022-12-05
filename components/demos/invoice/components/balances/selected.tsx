import classNames from "classnames/bind";
import { motion } from "framer-motion";
import React, { useCallback, useRef } from "react";
import { useRefSize } from "../../../../../utils/hooks";
import classes from "./balances.module.scss";
const cx = classNames.bind(classes);

const animateChevron = {
  close: {
    opacity: 1,
    x: 0,
    rotate: 0,
  },
  open: {
    opacity: 1,
    rotate: 90,
  },
};

const animateSelected = {
  close: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.25,
    },
  },
  open: {
    y: -90,
    transition: {
      type: "spring",
      bounce: 0.25,
    },
  },
};

const InvoiceSelected: React.FC<{
  wallet?: string;
  icon: string;
  name: string;
  balance: string;
  open: boolean;
  toggle: () => void;
}> = ({ wallet = "Coinbase", icon, name, balance, open, toggle }) => {
  const pill = useRef<HTMLDivElement>(null);
  const value = useRef<HTMLDivElement>(null);
  const { width: pillWidth } = useRefSize(pill);
  const { width: valueWidth } = useRefSize(value);
  const getMaxWidth = useCallback((): number => {
    if (!pillWidth || !valueWidth) return 100;
    return pillWidth - valueWidth - 80;
  }, [pillWidth, valueWidth]);
  return (
    <motion.div
      className={cx({
        selected__wrapper: true,
        selected__wrapper__open: open,
      })}
      animate={open ? "open" : "close"}
      variants={animateSelected}
    >
      <div className={classes.selected__source}>
        <div className={classes.connected}>Connected Wallet</div>
        <div className={classes.wallet__wrapper}>
          <div className={classes.status}></div>
          <div className={classes.wallet}>{wallet}</div>
        </div>
      </div>
      <motion.div className={classes.selected} onClick={toggle} ref={pill}>
        <div className={classes.currency__wrapper}>
          <img className={classes.currency__icon} src={icon} />
          <div
            className={classes.currency__name}
            style={{ fontWeight: 600, maxWidth: getMaxWidth() }}
          >
            {name}
          </div>
        </div>
        <div className={classes.currency__wrapper}>
          <div className={classes.currency__balance} ref={value}>
            {balance}
          </div>
          <motion.img
            animate={open ? "open" : "close"}
            variants={animateChevron}
            className={classes.currency__balance__chevron}
            src="/icons/right-chevron.svg"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default InvoiceSelected;
