import React, { useState, useCallback } from "react";
import classes from "./invoice-select.module.scss";
import invoiceClasses from "./invoice.module.scss";
import { motion } from "framer-motion";

import classNames from "classnames/bind";
const cx = classNames.bind(classes);

import { RECENT, POPULAR, WALLETS } from "./wallets";

const WalletCell: React.FC<{ name: string; icon: string }> = ({
  name,
  icon,
}) => {
  return (
    <div className={classes.wallet}>
      <img
        className={classes.wallet__icon}
        src={`https://bitpay.com/img/wallet-logos/${icon}`}
      />
      {name}
      <img className={classes.wallet__chevron} src="/icons/right-chevron.svg" />
    </div>
  );
};

const InvoiceSelectDemo: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const clear = (): void => {
    if (inputValue !== "") setInputValue("");
  };
  const Wallets = useCallback((): string[] => {
    return Object.keys(WALLETS).sort((a, b) =>
      WALLETS[a].displayName.localeCompare(WALLETS[b].displayName)
    );
  }, [WALLETS]);
  const searchResults = useCallback((): string[] => {
    return Wallets().filter((wallet: string) =>
      WALLETS[wallet].displayName
        .toLocaleLowerCase()
        .includes(inputValue.toLocaleLowerCase())
    );
  }, [inputValue]);
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
          {inputValue === "" ? (
            <>
              <div className={classes.wallets__title}>Recently Selected</div>
              {RECENT.map((wallet) => (
                <React.Fragment key={`recent-${wallet}`}>
                  <WalletCell
                    name={WALLETS[wallet].displayName}
                    icon={WALLETS[wallet].icon}
                  />
                </React.Fragment>
              ))}
              <div className={classes.wallets__title}>Popular Wallets</div>
              {POPULAR.filter((wallet) => !RECENT.includes(wallet)).map(
                (wallet) => (
                  <React.Fragment key={`popular-${wallet}`}>
                    <WalletCell
                      name={WALLETS[wallet].displayName}
                      icon={WALLETS[wallet].icon}
                    />
                  </React.Fragment>
                )
              )}
              <div className={classes.wallets__title}>Other Wallets</div>
              {Wallets()
                .filter(
                  (wallet) =>
                    !RECENT.includes(wallet) && !POPULAR.includes(wallet)
                )
                .map((wallet) => (
                  <React.Fragment key={`others-${wallet}`}>
                    <WalletCell
                      name={WALLETS[wallet].displayName}
                      icon={WALLETS[wallet].icon}
                    />
                  </React.Fragment>
                ))}
            </>
          ) : (
            <>
              <div className={classes.wallets__title}>Search Results</div>
              {searchResults().map((wallet) => (
                <React.Fragment key={`search-${wallet}`}>
                  <WalletCell
                    name={WALLETS[wallet].displayName}
                    icon={WALLETS[wallet].icon}
                  />
                </React.Fragment>
              ))}
            </>
          )}
        </div>
        <div className={classes.fade}></div>
      </motion.div>
    </div>
  );
};

export default InvoiceSelectDemo;
