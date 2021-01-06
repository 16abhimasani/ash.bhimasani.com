import React, {
  Dispatch,
  SetStateAction,
  useState,
  useCallback,
  useRef,
} from "react";
import classes from "./balances.module.scss";
import { motion } from "framer-motion";

import InvoiceSelected from "./selected";
import InvoiceButton from "../button/button";
import InvoiceOverlay from "../overlay/overlay";
import { wait } from "../../../../../utils/utils";
import { useRefSize } from "../../../../../utils/hooks";

export const InvoiceCryptoBalances: React.FC<{
  selected: CryptoBalanceInterface;
  select: Dispatch<SetStateAction<CryptoBalanceInterface>>;
  web3?: boolean;
}> = ({ selected, select, web3 }) => {
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
          wallet={web3 ? "MetaMask" : "Coinbase"}
          icon={`/icons/currencies/${selected.code.toLocaleLowerCase()}.svg`}
          name={selected.name}
          balance={`${selected.balance} ${selected.code}`}
          open={OPEN_BALANCES}
          toggle={(): void => TOGGLE_BALANCES(!OPEN_BALANCES)}
        />
        <div className={classes.balances} style={{ maxHeight: 112 }}>
          {(web3 ? WEB3 : EXCHANGE).map((balance: CryptoBalanceInterface) => (
            <React.Fragment key={balance.name}>
              {balance.name !== selected.name && (
                <BalanceCell select={selectCurrency} balance={balance} />
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
                <BalanceCell
                  fiatMode
                  select={selectCurrency}
                  balance={balance}
                />
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

export const BalanceCell: React.FC<{
  fiatMode?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  balance: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  select: any;
}> = ({ fiatMode, select, balance }) => {
  const pill = useRef<HTMLDivElement>(null);
  const value = useRef<HTMLDivElement>(null);
  const { width: pillWidth } = useRefSize(pill);
  const { width: valueWidth } = useRefSize(value);
  const getMaxWidth = useCallback((): number => {
    if (!pillWidth || !valueWidth) return 124;
    return pillWidth - valueWidth - 68;
  }, [pillWidth, valueWidth]);
  return (
    <motion.div
      className={classes.balances__item}
      onClick={(): Promise<void> => select(balance)}
      ref={pill}
    >
      <div className={classes.currency__wrapper}>
        <img
          className={classes.currency__icon}
          src={
            fiatMode
              ? `/icons/fiat/${balance.icon}`
              : `/icons/currencies/${balance.code.toLocaleLowerCase()}.svg`
          }
        />
        <div
          className={classes.currency__name}
          style={{ fontWeight: 500, maxWidth: getMaxWidth() }}
        >
          {balance.name}
        </div>
      </div>
      <div className={classes.currency__wrapper}>
        <div className={classes.currency__balance} ref={value}>
          {fiatMode ? (
            <>{balance.value}</>
          ) : (
            <>
              {balance.balance} {balance.code}
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export interface CryptoBalanceInterface {
  code: string;
  name: string;
  balance: string;
  rate: string;
  due: string;
}

export const EXCHANGE = [
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
    code: "LTC",
    name: "Litecoin",
    balance: "24.950163",
    rate: "110.56 USD",
    due: "1.221056",
  },
  {
    code: "ZEC",
    name: "Zcash",
    balance: "8.078102",
    rate: "71.94 USD",
    due: "1.876563",
  },
  {
    code: "XLM",
    name: "Stellar Lumens",
    balance: "3098.2210",
    rate: "0.23 USD",
    due: "586.956521",
  },
];

export const WEB3 = [
  {
    code: "ETH",
    name: "Ethereum",
    balance: "32.307812",
    rate: "441.78 USD",
    due: "0.334764",
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
  {
    code: "DAI",
    name: "Dai",
    balance: "132.250711",
    rate: "1.00 USD",
    due: "135.00",
  },
  {
    code: "LINK",
    name: "Chainlink",
    balance: "67.081309",
    rate: "13.65 USD",
    due: "9.890109",
  },
  {
    code: "DOT",
    name: "Polkadot",
    balance: "103.204117",
    rate: "5.13 USD",
    due: "26.315789",
  },
  {
    code: "UNI",
    name: "Uniswap",
    balance: "304.001903",
    rate: "3.72 USD",
    due: "236.290322",
  },
  {
    code: "COMP",
    name: "Compound",
    balance: "7.256102",
    rate: "146.13 USD",
    due: "0.923834",
  },
  {
    code: "MKR",
    name: "Maker",
    balance: "3.020168",
    rate: "542.50 USD",
    due: "0.248847",
  },
  {
    code: "OMG",
    name: "OmiseGo",
    balance: "112.506117",
    rate: "2.98 USD",
    due: "45.302013",
  },
  {
    code: "BAT",
    name: "Basic Attention Token",
    balance: "1105.9201",
    rate: "0.22 USD",
    due: "613.686301",
  },
  {
    code: "ZRX",
    name: "0x",
    balance: "45789.026913",
    rate: "0.38 USD",
    due: "355.263157",
  },
];

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
