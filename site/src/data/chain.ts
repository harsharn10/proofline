export const CHAIN = {
  name: "Robinhood Chain",
  chainId: 4663,
  stack: "Arbitrum Orbit L2, settles to Ethereum",
  mainnet: "2026-07-01",
  gas: "ETH",
  nativeToken: "None. Official exposure is Nasdaq HOOD, not a chain coin.",
  stockTokens:
    "Tokenized debt securities issued by Robinhood Assets (Jersey) Limited. Economic exposure only — not legal share ownership. Not offered to US persons.",
  registry: "https://docs.robinhood.com/chain/contracts",
  explorer: "https://robinhoodchain.blockscout.com",
  hoodScan: "https://www.hood-chain.com/tokens",
  dexscreener: "https://dexscreener.com/robinhood",
  updated: "2026-08-30",
  counts: {
    officialStockTokens: 196,
    namesInFile: 0, // filled at runtime
  },
  brief: [
    "Robinhood launched this L2 so tokenized US stocks and ETFs can trade 24/7 and plug into DeFi. The permissionless part filled with memes first. RWA volume is catching up, not leading.",
    "There is no official chain token and no confirmed airdrop. Anyone selling you $HOODCHAIN or a 'Robinhood airdrop snapshot' is running a collision.",
    "This file tracks names: official stock tokens, DeFi protocols, hybrids that drip stocks to holders, launchpads that quote RWAs, and the culture tickers CT actually talks about. Feed more names and they get a dossier.",
  ],
} as const;
