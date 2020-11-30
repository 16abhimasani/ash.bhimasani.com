export const CURRENCIES = [
  "BTC",
  "BCH",
  "XRP",
  "ETH",
  "USDC",
  "PAX",
  "BUSD",
  "GUSD",
];
export const BTC_CHAIN = ["BTC", "BCH"];
export const P2P_ONLY = ["BTC", "BCH", "XRP"];
export const TOKENS = ["USDC", "PAX", "BUSD", "GUSD"];
export const ETH_CHAIN = ["ETH", ...TOKENS];

export const RECENT = ["bitpay", "coinbase"];
export const POPULAR = [
  "bitpay",
  "coinbase",
  "blockchain",
  "cashApp",
  "binance",
  "argent",
  "coinbaseWallet",
  "gemini",
  "brd",
  "metamask",
];

interface Wallet {
  key: string;
  displayName: string;
  icon: string;
  currencies: string[];
  bpep?: boolean;
  paypro?: boolean;
  web3?: boolean;
  oauth?: boolean;
  mobileWeb3?: boolean;
  p2p?: boolean;
  hardware?: boolean;
}

export const WALLETS: { [wallet: string]: Wallet } = {
  bitpay: {
    key: "bitpay",
    displayName: "BitPay",
    icon: "bitpay-wallet.svg",
    bpep: true,
    currencies: CURRENCIES,
  },
  blockchain: {
    key: "blockchain",
    displayName: "Blockchain.com",
    icon: "blockchain-wallet.svg",
    paypro: true,
    currencies: BTC_CHAIN,
  },
  cashApp: {
    key: "cashApp",
    displayName: "Cash App",
    icon: "square-cash-app.svg",
    p2p: true,
    currencies: ["BTC"],
  },
  coinbase: {
    key: "coinbase",
    displayName: "Coinbase",
    icon: "coinbase.svg",
    oauth: true,
    currencies: ["BTC", "BCH", "XRP", "ETH", "USDC"],
  },
  argent: {
    key: "argent",
    displayName: "Argent",
    icon: "argent-wallet.svg",
    mobileWeb3: true,
    currencies: ETH_CHAIN,
  },
  status: {
    key: "status",
    displayName: "Status",
    icon: "status-wallet.svg",
    mobileWeb3: true,
    currencies: ETH_CHAIN,
  },
  rainbow: {
    key: "rainbow",
    displayName: "Rainbow",
    icon: "rainbow-wallet.png",
    mobileWeb3: true,
    currencies: ETH_CHAIN,
  },
  tokenary: {
    key: "tokenary",
    displayName: "Tokenary",
    icon: "tokenary-wallet.svg",
    mobileWeb3: true,
    currencies: ETH_CHAIN,
  },
  dapper: {
    key: "dapper",
    displayName: "Dapper",
    icon: "dapper-wallet.png",
    web3: true,
    currencies: ETH_CHAIN,
  },
  metamask: {
    key: "metamask",
    displayName: "MetaMask",
    icon: "metamask.svg",
    web3: true,
    currencies: ETH_CHAIN,
  },
  coinbaseWallet: {
    key: "coinbaseWallet",
    displayName: "Coinbase Wallet",
    icon: "coinbase-wallet.svg",
    p2p: true,
    mobileWeb3: true,
    currencies: CURRENCIES,
  },
  coinbasePro: {
    key: "coinbasePro",
    displayName: "Coinbase Pro",
    icon: "coinbase-pro.svg",
    p2p: true,
    currencies: ["BTC", "BCH", "XRP", "ETH", "USDC"],
  },
  gemini: {
    key: "gemini",
    displayName: "Gemini",
    icon: "gemini.svg",
    p2p: true,
    currencies: ["BTC", "BCH", "ETH", "GUSD"],
  },
  copay: {
    key: "copay",
    displayName: "Copay",
    icon: "copay-wallet.svg",
    bpep: true,
    currencies: CURRENCIES,
  },
  paxful: {
    key: "paxful",
    displayName: "Paxful",
    icon: "paxful.svg",
    currencies: ["BTC"],
  },
  btcCom: {
    key: "btcCom",
    displayName: "BTC.com",
    icon: "btc-com-wallet.svg",
    paypro: true,
    currencies: BTC_CHAIN,
  },
  exodus: {
    key: "exodus",
    displayName: "Exodus",
    icon: "exodus-wallet.svg",
    paypro: true,
    currencies: CURRENCIES,
  },
  brd: {
    key: "brd",
    displayName: "BRD",
    icon: "brd-wallet.svg",
    paypro: true,
    currencies: CURRENCIES,
  },
  edge: {
    key: "edge",
    displayName: "Edge",
    icon: "edge-wallet.svg",
    paypro: true,
    currencies: CURRENCIES,
  },
  bitcoinCom: {
    key: "bitcoinCom",
    displayName: "Bitcoin.com",
    icon: "bitcoin-com-wallet.svg",
    paypro: true,
    currencies: BTC_CHAIN,
  },
  trust: {
    key: "trust",
    displayName: "Trust Wallet",
    icon: "trust-wallet.svg",
    p2p: true,
    mobileWeb3: true,
    currencies: CURRENCIES,
  },
  brave: {
    key: "brave",
    displayName: "Brave",
    icon: "brave-browser.svg",
    currencies: ETH_CHAIN,
  },
  opera: {
    key: "opera",
    displayName: "Opera",
    icon: "opera-browser.svg",
    currencies: ETH_CHAIN,
  },
  ledger: {
    key: "ledger",
    displayName: "Ledger",
    icon: "ledger-wallet.svg",
    hardware: true,
    currencies: CURRENCIES,
  },
  trezor: {
    key: "trezor",
    displayName: "Trezor",
    icon: "trezor-wallet.svg",
    hardware: true,
    currencies: CURRENCIES,
  },
  bitcoinCore: {
    key: "bitcoinCore",
    displayName: "Bitcoin Core",
    icon: "bitcoin-core.svg",
    paypro: true,
    currencies: ["BTC"],
  },
  bitcoinABC: {
    key: "bitcoinABC",
    displayName: "Bitcoin ABC",
    icon: "bitcoin-abc.svg",
    paypro: true,
    currencies: ["BCH"],
  },
  greenWallet: {
    key: "greenWallet",
    displayName: "Green Wallet",
    icon: "green-wallet.svg",
    p2p: true,
    currencies: ["BTC"],
  },
  zenGo: {
    key: "zenGo",
    displayName: "ZenGo",
    icon: "zengo-wallet.svg",
    p2p: true,
    currencies: P2P_ONLY,
  },
  samourai: {
    key: "samourai",
    displayName: "Samourai",
    icon: "samourai-wallet.png",
    p2p: true,
    currencies: ["BTC"],
  },
  wasabi: {
    key: "wasabi",
    displayName: "Wasabi",
    icon: "wasabi-wallet.svg",
    p2p: true,
    currencies: ["BTC"],
  },
  zap: {
    key: "zap",
    displayName: "Zap",
    icon: "zap-wallet.svg",
    p2p: true,
    currencies: ["BTC"],
  },
  binance: {
    key: "binance",
    displayName: "Binance",
    icon: "binance.svg",
    oauth: true,
    currencies: ["BTC", "BCH", "XRP", "ETH", "USDC", "PAX", "BUSD"],
  },
  kraken: {
    key: "kraken",
    displayName: "Kraken",
    icon: "kraken.svg",
    oauth: true,
    currencies: ["BTC", "BCH", "XRP", "ETH", "USDC", "PAX"],
  },
  poloniex: {
    key: "poloniex",
    displayName: "Poloniex",
    icon: "poloniex.svg",
    oauth: true,
    currencies: ["BTC", "BCH", "XRP", "ETH", "USDC", "PAX"],
  },
  bitfinex: {
    key: "bitfinex",
    displayName: "Bitfinex",
    icon: "bitfinex.svg",
    p2p: true,
    currencies: P2P_ONLY,
  },
  okex: {
    key: "okex",
    displayName: "OKEx",
    icon: "okex.svg",
    p2p: true,
    currencies: P2P_ONLY,
  },
  bitgo: {
    key: "bitgo",
    displayName: "BitGo",
    icon: "bitgo.svg",
    p2p: true,
    currencies: P2P_ONLY,
  },
  bitso: {
    key: "bitso",
    displayName: "Bitso",
    icon: "bitso.svg",
    p2p: true,
    currencies: P2P_ONLY,
  },
  xapo: {
    key: "xapo",
    displayName: "Xapo",
    icon: "xapo.svg",
    p2p: true,
    currencies: ["BTC"],
  },
  bittrex: {
    key: "bittrex",
    displayName: "Bittrex",
    icon: "bittrex.svg",
    p2p: true,
    currencies: P2P_ONLY,
  },
};
