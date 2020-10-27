import React, { Dispatch, SetStateAction, useState, useCallback } from "react";
import classes from "./balances.module.scss";
import { motion, AnimatePresence } from "framer-motion";

import InvoiceSelected from "./selected";
import InvoiceButton from "../button/button";
import { wait } from "../../../../utils/utils";

export interface BalanceInterface {
  code: string;
  name: string;
  balance: string;
  rate: string;
  due: string;
}

const animateOverlay = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

const InvoiceBalances: React.FC<{
  balances: BalanceInterface[];
  selected: BalanceInterface;
  select: Dispatch<SetStateAction<BalanceInterface>>;
}> = ({ balances, selected, select }) => {
  const [OPEN_BALANCES, TOGGLE_BALANCES] = useState(false);
  const selectCurrency = useCallback(
    async (balance: BalanceInterface) => {
      TOGGLE_BALANCES(false);
      await wait(350);
      select(balance);
    },
    [balances]
  );
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
            onClick={(): void => TOGGLE_BALANCES(false)}
          ></motion.div>
        )}
      </AnimatePresence>
      <div className={classes.wrapper}>
        <InvoiceSelected
          code={selected.code}
          name={selected.name}
          balance={selected.balance}
          open={OPEN_BALANCES}
          toggle={(): void => TOGGLE_BALANCES(!OPEN_BALANCES)}
        />
        <div className={classes.balances} style={{ maxHeight: 112 }}>
          {balances.map((balance) => (
            <>
              {balance.code !== selected.code && (
                <motion.div
                  className={classes.balances__item}
                  key={balance.code}
                  onClick={(): Promise<void> => selectCurrency(balance)}
                >
                  <div className={classes.currency__wrapper}>
                    <img
                      className={classes.currency__icon}
                      src={`/icons/currencies/${balance.code.toLocaleLowerCase()}.svg`}
                    />
                    <div
                      className={classes.currency__name}
                      style={{ fontWeight: 500 }}
                    >
                      {balance.name}
                    </div>
                  </div>
                  <div className={classes.currency__wrapper}>
                    <div className={classes.currency__balance}>
                      {balance.balance} {balance.code}
                    </div>
                  </div>
                </motion.div>
              )}
            </>
          ))}
        </div>
        <div className={classes.button_wrapper}>
          <InvoiceButton />
          <div className={classes.balances__fade}></div>
        </div>
      </div>
    </>
  );
};

export const CURRENCIES = [
  {
    code: "BTC",
    name: "Bitcoin",
    balance: "5.789012",
    rate: "13,386.54 USD",
    due: "0.010229",
  },
  {
    code: "BCH",
    name: "Bitcoin Cash",
    balance: "14.369019",
    rate: "272.93 USD",
    due: "0.511928",
  },
  {
    code: "ETH",
    name: "Ethereum",
    balance: "32.307812",
    rate: "441.78 USD",
    due: "0.334764",
  },
  {
    code: "XRP",
    name: "Ripple",
    balance: "784.701385",
    rate: "0.25 USD",
    due: "539.411502",
  },
  {
    code: "USDC",
    name: "USD Coin",
    balance: "1216.38",
    rate: "1.00 USD",
    due: "135.00",
  },
  {
    code: "GUSD",
    name: "Gemini Dollars",
    balance: "112.35",
    rate: "1.00 USD",
    due: "135.00",
  },
  {
    code: "PAX",
    name: "Paxos Standard",
    balance: "2391.42",
    rate: "1.00 USD",
    due: "135.00",
  },
  {
    code: "BUSD",
    name: "Binance Dollar",
    balance: "174.38",
    rate: "1.00 USD",
    due: "135.00",
  },
];

export default InvoiceBalances;
