import classNames from "classnames/bind";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import classes from "./bp-button.module.scss";
import PayWithBitpayImage from "./pay-with-bitpay-image";

const cx = classNames.bind(classes);

export const buttonAnimation = {
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.075,
    },
  },
  hidden: {
    opacity: 0,
  },
};

export const buttonTextAnimation = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 30,
      stiffness: 100,
      mass: 0.25,
    },
  },
  hidden: {
    opacity: 0,
    x: 12,
  },
};

export const buttonSpinnerAnimation = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 30,
      stiffness: 150,
      mass: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    x: 10,
  },
};

export const spinAnimation = {
  visible: {
    rotate: 360,
    transition: {
      loop: Infinity,
      ease: "linear",
      duration: 1,
    },
  },
};

const PayWithBitpayButton: React.FC<{
  awaiting: boolean;
  setAwaiting: (val: boolean) => void;
}> = ({ awaiting, setAwaiting }) => {
  const payButton = (): void => {
    setAwaiting(true);
  };
  return (
    <>
      <div className={classes.button}>
        <AnimatePresence exitBeforeEnter>
          {awaiting ? (
            <motion.div
              className={cx({
                action: true,
                action__pending: true,
              })}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={buttonAnimation}
              key="awaiting-payment"
            >
              <motion.span
                style={{ display: "flex" }}
                variants={buttonSpinnerAnimation}
                key="awaiting-payment-wrapper"
              >
                <motion.img
                  className={classes.action__spinner}
                  src="/icons/spinner.svg"
                  variants={spinAnimation}
                  alt="spinner"
                  key="awaiting-payment-spinner"
                />
              </motion.span>
              <motion.span
                variants={buttonTextAnimation}
                key="awaiting-payment-text"
              >
                Awaiting Payment
              </motion.span>
            </motion.div>
          ) : (
            <motion.div
              className={classes.button__chunk}
              onClick={payButton}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={buttonAnimation}
              whileTap={{ scale: 0.98 }}
              key="pay-with-bitpay"
            >
              <PayWithBitpayImage />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default PayWithBitpayButton;
