import React, { useState } from "react";
import classes from "./invoice-select.module.scss";
import invoiceClasses from "./invoice.module.scss";
import { motion } from "framer-motion";

import classNames from "classnames/bind";
const cx = classNames.bind(classes);

import { RECENT, POPULAR, WALLETS } from "./wallets";

const InvoiceSelectDemo: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const clear = (): void => {
    if (inputValue !== "") setInputValue("");
  };
  return (
    <div>
      <motion.div className={invoiceClasses.invoice} style={{ maxHeight: 496 }}>
        <div className={classes.header}>
          <div className={classes.search}>
            <input
              className={classes.input}
              placeholder="Search Wallet or Exchange"
              value={inputValue}
              onChange={(e: React.FormEvent<HTMLInputElement>): void =>
                setInputValue(e.currentTarget.value)
              }
            />
            <motion.img
              className={classes.search__icon}
              src={`/icons/bp-search${inputValue === "" ? "" : "-clear"}.svg`}
              style={inputValue === "" ? {} : { cursor: "pointer" }}
              onClick={clear}
            />
          </div>
        </div>
        <div className={classes.wallets}>
          <div className={classes.wallets__title}>Recently Selected</div>
          {RECENT.map((wallet) => (
            <div className={classes.wallet} key={wallet}>
              <img
                className={classes.wallet__icon}
                src={`https://bitpay.com/img/wallet-logos/${WALLETS[wallet].icon}`}
              />
              {WALLETS[wallet].displayName}
              <img
                className={classes.wallet__chevron}
                src="/icons/right-chevron.svg"
              />
            </div>
          ))}
          <div className={classes.wallets__title}>Popular Wallets</div>
          {POPULAR.filter((wallet) => !RECENT.includes(wallet)).map(
            (wallet) => (
              <div className={classes.wallet} key={wallet}>
                <img
                  className={classes.wallet__icon}
                  src={`https://bitpay.com/img/wallet-logos/${WALLETS[wallet].icon}`}
                />
                {WALLETS[wallet].displayName}
                <img
                  className={classes.wallet__chevron}
                  src="/icons/right-chevron.svg"
                />
              </div>
            )
          )}
          <div className={classes.wallets__title}>Other Wallets</div>
          {Object.keys(WALLETS)
            .sort((a, b) =>
              WALLETS[a].displayName.localeCompare(WALLETS[b].displayName)
            )
            .map((wallet) => (
              <>
                {!RECENT.includes(wallet) && !POPULAR.includes(wallet) && (
                  <div className={classes.wallet} key={wallet}>
                    <img
                      className={classes.wallet__icon}
                      src={`https://bitpay.com/img/wallet-logos/${WALLETS[wallet].icon}`}
                    />
                    {WALLETS[wallet].displayName}
                    <img
                      className={classes.wallet__chevron}
                      src="/icons/right-chevron.svg"
                    />
                  </div>
                )}
              </>
            ))}
        </div>
        <div className={classes.fade}></div>
      </motion.div>
    </div>
  );
};

export default InvoiceSelectDemo;
