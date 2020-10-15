import React, { useEffect, useState, useRef } from "react";
import classes from "./ext-amount.module.scss";
import { motion } from "framer-motion";

import ExtensionNavDemo from "../ext-nav/ext-nav";
import PayWithBitpayButton from "./bp-button/bp-button";

const shkAmp = 12;
const precision = 2;
const baseDelta = 0.01;
const maxAmount = 2000;
const minAmount = 1;

const ExtensionAmountDemo: React.FC = () => {
  const [amount, setAmount] = useState(0);
  const [awaiting, setAwaiting] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState(false);
  const [inputDirty, setInputDirty] = useState(false);

  const changeVariableAmount = (delta: number): void => {
    if ((amount === 0 || amount === 1) && delta < 0) {
      shakeInput();
      return setAmount(amount);
    }
    const newValue = amount + delta;
    // eslint-disable-next-line no-nested-ternary
    const newAmount =
      newValue > maxAmount
        ? maxAmount
        : newValue < minAmount
        ? minAmount
        : newValue;
    setAmount(parseFloat(newAmount.toFixed(precision)));
    setInputValue(`${newAmount.toFixed(precision)}`);
  };
  const focusInput = (): void => {
    setTimeout(() => {
      if (inputRef && inputRef.current) {
        inputRef.current.value = inputValue;
        inputRef.current.focus();
      }
    });
  };
  const changeAmount = (delta: number): void => {
    changeVariableAmount(delta);
    setInputDirty(false);
    focusInput();
  };
  const enforcePrecision = (value: string): string => {
    const [integer, decimal] = value.split(".");
    if (!decimal) {
      return value;
    }
    const newDecimal =
      decimal.length > precision ? decimal.substring(0, precision) : decimal;
    return [integer, newDecimal].join(".");
  };
  const shakeInput = (): void => {
    setInputError(true);
    setTimeout((): void => {
      setInputError(false);
    }, 325);
  };
  const handleInput = (input: string): void => {
    const stringValue = input.replace(/[^\d.-]/g, "");
    const newAmount = parseFloat(Number(stringValue).toFixed(precision));
    if (newAmount <= maxAmount) {
      const correctedValue = enforcePrecision(stringValue);
      if (correctedValue !== stringValue) shakeInput();
      setInputValue(correctedValue);
      setAmount(newAmount);
    } else if (newAmount === 0) {
      setInputValue("0");
      setAmount(0);
    } else {
      shakeInput();
    }
  };
  const handleKeyDown = (key: number): void => {
    if (!inputDirty && inputValue !== "" && key !== 8) {
      handleInput("");
    }
    setInputDirty(true);
  };
  useEffect(() => {
    if (awaiting) {
      const price =
        amount >= 1 ? amount : (setInputValue("1.00"), setAmount(1), 1);
      fetch("https://test.bitpay.com/invoices", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          price,
          currency: "USD",
          token: "DAuGbs4T8ASv2wfZT7pqnyiFufz4j2XYFxf88yMPxFA8",
        }),
      })
        .then((response) => response.json())
        .then((data) => data.data)
        .then((data) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (window as any).bitpay.setApiUrlPrefix("https://test.bitpay.com");
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (window as any).bitpay.showInvoice(data.id);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (window as any).bitpay.onModalWillLeave(() => setAwaiting(false));
        })
        .catch(() => setAwaiting(false));
    }
  }, [awaiting]);
  return (
    <motion.div
      className={classes.container}
      onClick={(): void => focusInput()}
    >
      <div className={classes.header}>
        <ExtensionNavDemo middleMode={true} />
      </div>
      <div className={classes.title}>Ash Bhimasani</div>
      <div className={classes.pad__wrapper}>
        <input
          ref={inputRef}
          value={inputValue}
          onChange={(e: React.FormEvent<HTMLInputElement>): void =>
            handleInput(e.currentTarget.value)
          }
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>): void =>
            handleKeyDown(e.keyCode)
          }
          className={classes.ghost_input}
          placeholder="0"
        />
        <div className={classes.pad}>
          <div className={classes.pad__currency}>USD</div>
          <div className={classes.pad__amount}>
            <motion.img
              whileTap={{ scale: 0.9 }}
              onClick={(): void => changeAmount(-baseDelta)}
              style={{ cursor: "pointer" }}
              src="/icons/decrement-icon.svg"
              alt="minus"
            />
            <motion.div
              className={classes.pad__amount__value}
              initial={false}
              animate={{
                x: inputError
                  ? [null, shkAmp * -1, shkAmp, shkAmp / -2, shkAmp / 2, 0]
                  : [0, 0],
                color: amount === 0 ? "#DFDFDF" : "#000000",
              }}
              transition={{ duration: 0.325 }}
            >
              {maxAmount ? inputValue || "0" : amount}
            </motion.div>
            <motion.img
              whileTap={{ scale: 0.9 }}
              onClick={(): void => changeAmount(baseDelta)}
              style={{ cursor: "pointer" }}
              src="/icons/increment-icon.svg"
              alt="minus"
            />
          </div>
          <div className={classes.pad__denoms}>$1 - $2000</div>
        </div>
      </div>
      <div className={classes.button_wrapper}>
        <PayWithBitpayButton awaiting={awaiting} setAwaiting={setAwaiting} />
      </div>
    </motion.div>
  );
};

export default ExtensionAmountDemo;
