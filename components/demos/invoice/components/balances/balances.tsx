import React, { Dispatch, SetStateAction, useState, useCallback } from "react";
import classes from "./balances.module.scss";
import { motion } from "framer-motion";

import InvoiceSelected from "./selected";
import InvoiceButton from "../button/button";
import InvoiceOverlay from "../overlay/overlay";
import { wait } from "../../../../../utils/utils";

export const InvoiceCryptoBalances: React.FC<{
  selected: CryptoBalanceInterface;
  select: Dispatch<SetStateAction<CryptoBalanceInterface>>;
}> = ({ selected, select }) => {
  const [OPEN_BALANCES, TOGGLE_BALANCES] = useState(false);
  const selectCurrency = useCallback(
    async (balance: CryptoBalanceInterface) => {
      TOGGLE_BALANCES(false);
      await wait(350);
      select(balance);
    },
    []
  );
  return (
    <>
      <InvoiceOverlay open={OPEN_BALANCES} click={TOGGLE_BALANCES} />
      <div className={classes.wrapper}>
        <InvoiceSelected
          icon={`/icons/currencies/${selected.code.toLocaleLowerCase()}.svg`}
          name={selected.name}
          balance={`${selected.balance} ${selected.code}`}
          open={OPEN_BALANCES}
          toggle={(): void => TOGGLE_BALANCES(!OPEN_BALANCES)}
        />
        <div className={classes.balances} style={{ maxHeight: 112 }}>
          {CURRENCIES.map((balance: CryptoBalanceInterface) => (
            <React.Fragment key={balance.name}>
              {balance.name !== selected.name && (
                <motion.div
                  className={classes.balances__item}
                  key={balance.name}
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
            </React.Fragment>
          ))}
        </div>
        <div className={classes.button_wrapper}>
          <InvoiceButton main="Make Payment" async="Processing" />
          <div className={classes.balances__fade}></div>
        </div>
      </div>
    </>
  );
};

export interface CryptoBalanceInterface {
  code: string;
  name: string;
  balance: string;
  rate: string;
  due: string;
}

export const CURRENCIES = [
  {
    code: "USDC",
    name: "USD Coin",
    balance: "1216.38",
    rate: "1.00 USD",
    due: "135.00",
  },
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

export const InvoiceFiatBalances: React.FC<{
  selected: FiatBalanceInterface;
  select: Dispatch<SetStateAction<FiatBalanceInterface>>;
}> = ({ selected, select }) => {
  const [OPEN_BALANCES, TOGGLE_BALANCES] = useState(false);
  const selectCurrency = useCallback(async (balance: FiatBalanceInterface) => {
    TOGGLE_BALANCES(false);
    await wait(350);
    select(balance);
  }, []);
  return (
    <>
      <InvoiceOverlay open={OPEN_BALANCES} click={TOGGLE_BALANCES} />
      <div className={classes.wrapper}>
        <InvoiceSelected
          wallet="PayPal"
          icon={`/icons/fiat/${selected.icon}`}
          name={selected.name}
          balance={`${selected.value}`}
          open={OPEN_BALANCES}
          toggle={(): void => TOGGLE_BALANCES(!OPEN_BALANCES)}
        />
        <div className={classes.balances} style={{ maxHeight: 112 }}>
          {FIAT.map((balance: FiatBalanceInterface) => (
            <React.Fragment key={balance.name}>
              {balance.name !== selected.name && (
                <motion.div
                  className={classes.balances__item}
                  key={balance.name}
                  onClick={(): Promise<void> => selectCurrency(balance)}
                >
                  <div className={classes.currency__wrapper}>
                    <img
                      className={classes.currency__icon}
                      src={`/icons/fiat/${balance.icon}`}
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
                      {balance.value}
                    </div>
                  </div>
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className={classes.button_wrapper}>
          <InvoiceButton main="Make Payment" async="Processing" />
          <div className={classes.balances__fade}></div>
        </div>
      </div>
    </>
  );
};

export interface FiatBalanceInterface {
  name: string;
  value: string;
  icon: string;
}

export const FIAT = [
  {
    name: "Cash Balance",
    value: "5072.93 USD",
    icon: "cash.svg",
  },
  {
    name: "Wells Fargo",
    value: "Checking  •••• 6192",
    icon: "wells-fargo.svg",
  },
  {
    name: "Bank of America",
    value: "Checking  •••• 1385",
    icon: "bank-of-america.svg",
  },
  {
    name: "American Express",
    value: "Credit  •••• 7013",
    icon: "amex.svg",
  },
  {
    name: "Chase Sapphire",
    value: "Credit  •••• 9204",
    icon: "chase.png",
  },
];
