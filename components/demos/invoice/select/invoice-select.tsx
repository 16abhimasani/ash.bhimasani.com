import { AnimatePresence, motion } from "framer-motion";
import React, { useCallback, useRef, useState } from "react";
import buttonClasses from "../components/button/button.module.scss";
import invoiceClasses from "../invoice.module.scss";
import classes from "./invoice-select.module.scss";

import { CURRENCIES, POPULAR, RECENT, WALLETS } from "./wallets";

const animateSelected = {
  initial: { borderRadius: 10 },
  selected: { borderRadius: 100 },
  selectedContent: {
    opacity: 1,
    y: 0,
  },
  selectedInitial: {
    opacity: 0,
    y: 10,
  },
  selectedExit: {
    opacity: 0,
    y: 5,
  },
};

const topLevelCurrencies = [
  { code: "BTC", name: "Bitcoin" },
  { code: "BCH", name: "Bitcoin Cash" },
  { code: "ETH", name: "Ethereum" },
  { code: "USDC", name: "USD Coin" },
];

const WalletCell: React.FC<{ name: string; icon: string }> = ({
  name,
  icon,
}) => {
  return (
    <div className={classes.wallet}>
      <img
        className={classes.wallet__icon}
        src={
          icon.includes("/")
            ? `/logos${icon}`
            : `https://bitpay.com/img/wallet-logos/${icon}`
        }
      />
      {name}
      <img className={classes.wallet__chevron} src="/icons/right-chevron.svg" />
    </div>
  );
};

const InvoiceSelectDemo: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currencyFilter, setCurrencyFilter] = useState<{
    code: string;
    name: string;
  } | null>(null);
  const [inputValue, setInputValue] = useState("");
  const clear = (): void => {
    if (scrollRef && scrollRef.current) scrollRef.current.scrollTop = 0;
    if (inputValue !== "") setInputValue("");
    if (currencyFilter) setCurrencyFilter(null);
  };
  const Wallets = useCallback((): string[] => {
    return Object.keys(WALLETS).sort((a, b) =>
      WALLETS[a].displayName.localeCompare(WALLETS[b].displayName)
    );
  }, [WALLETS]);
  const searchResults = useCallback((): string[] => {
    if (scrollRef && scrollRef.current) scrollRef.current.scrollTop = 0;
    return currencyFilter
      ? Wallets().filter((wallet: string) =>
          WALLETS[wallet].currencies.includes(currencyFilter.code)
        )
      : Wallets().filter((wallet: string) =>
          WALLETS[wallet].displayName
            .toLocaleLowerCase()
            .includes(inputValue.toLocaleLowerCase())
        );
  }, [inputValue, currencyFilter]);
  return (
    <div>
      <motion.div className={invoiceClasses.invoice} style={{ maxHeight: 496 }}>
        <div className={classes.header}>
          <motion.div
            className={classes.search}
            initial="initial"
            animate={currencyFilter ? "selected" : "initial"}
            variants={animateSelected}
            onClick={(): void => {
              if (currencyFilter) clear();
            }}
            style={currencyFilter ? { cursor: "pointer" } : {}}
          >
            {currencyFilter ? (
              <AnimatePresence exitBeforeEnter>
                <motion.div
                  className={classes.search__selected}
                  initial="selectedInitial"
                  animate="selectedContent"
                  exit="selectedExit"
                  variants={animateSelected}
                  key={currencyFilter.code}
                >
                  <img
                    className={classes.search__selected__icon}
                    src={`/icons/currencies/${currencyFilter.code.toLowerCase()}.svg`}
                  />
                  {currencyFilter.name}
                </motion.div>
              </AnimatePresence>
            ) : (
              <input
                className={classes.input}
                placeholder="Search Wallet or Exchange"
                value={inputValue}
                onChange={(e: React.FormEvent<HTMLInputElement>): void =>
                  setInputValue(e.currentTarget.value)
                }
              />
            )}
            <motion.img
              className={classes.search__icon}
              src={`/icons/bp-search${
                inputValue === "" && currencyFilter == null ? "" : "-clear"
              }.svg`}
              style={
                inputValue === "" && currencyFilter == null
                  ? {}
                  : { cursor: "pointer", transform: "scale(0.8)" }
              }
              onClick={clear}
            />
          </motion.div>
        </div>
        <div className={classes.wallets} ref={scrollRef}>
          {inputValue === "" && currencyFilter == null ? (
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
              {searchResults().length > 0 ? (
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
              ) : (
                <>
                  <div className={invoiceClasses.title}>No Results</div>
                  <div className={invoiceClasses.caption}>
                    Sorry you don’t see your wallet. Let us know what wallet
                    you’re using and we’ll add it to this list if it’s
                    compatible.
                  </div>
                  <div
                    className={buttonClasses.button}
                    style={{ marginTop: 40, marginBottom: -10 }}
                  >
                    Leave Feedback
                  </div>
                </>
              )}
            </>
          )}
        </div>
        {(inputValue === "" || searchResults().length > 0) && (
          <div className={classes.fade}></div>
        )}
      </motion.div>
      <div className="wrapper-center v-align" style={{ marginTop: 26 }}>
        {topLevelCurrencies.map((curr) => (
          <motion.div
            className={classes.currency}
            onClick={(): void => setCurrencyFilter(curr)}
            key={curr.code}
          >
            <img
              className={classes.currency__icon}
              src={`/icons/currencies/${curr.code.toLowerCase()}.svg`}
            />
            {curr.code}
          </motion.div>
        ))}
        <div className={classes.currency__all}>
          View {CURRENCIES.length - topLevelCurrencies.length} More
        </div>
      </div>
    </div>
  );
};

export default InvoiceSelectDemo;
