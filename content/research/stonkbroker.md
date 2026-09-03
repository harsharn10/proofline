---
slug: stonkbroker
coverage: stub
methodology_version: proofline-v1.0
---

# StonkBrokers — research record

## Identity

StonkBrokers is classified as Token-bound treasury NFT.

StonkBrokers is a 4,444-piece ERC-6551 NFT collection on Robinhood Chain. Each NFT owns a token-bound wallet that can hold Stock Tokens. A user buys $STONKBROKER, swaps 666,666 tokens plus an ETH fee on the Anvil AMM for a broker, then pays an activation fee for Clock In stock-token drops. Clutch Markets operates the suite. STORMM options are posted for September 2026.

Themes: nft, rwa, options

## Deployment

$STONKBROKER token (CollectionToken): 0xe934e36A439C94017B64a3FecE66AF12099aBF50 on robinhood-chain. [verified S13 S14 S17]

StonkBrokers NFT collection (ERC-721 + ERC-6551): 0x539CdD042c2f3d93EbC5BE7DfFf0c79F3B4fAbF0 on robinhood-chain. [verified S12 S18 S19]

Anvil NFT AMM vault (StonkNFTAMMVault): 0xE302733accF4800146E55fC45B46b4E4fFC032D2 on robinhood-chain. [claim S12 S20]

Activation Manager: 0xacD5ae3c060C1137FE2Ee86B0aB2EF697456f664 on robinhood-chain. [claim S12 S21]

Stonk Launcher factory: 0x80a77001456bc986083678F9a112B1EC2Aa07281 on robinhood-chain. [claim S12]

Token deployer / collection Ownable path: 0xb668382cF44038a3E8140E789060F6A809787CDa on robinhood-chain. [claim S14 S16 S18 S19]

## Control

CollectionToken verified source has no Ownable and no admin mint after the constructor. The NFT collection, Anvil vault and ActivationManager were all created by EOA 0xb668382cF44038a3E8140E789060F6A809787CDa. NFT creation bytecode includes Ownable owner / transferOwnership; live owner() was not eth_called this pass. Docs say locker principal cannot be seized by an admin key; that claim was not reproduced from the locker source this pass. [verified S17] [inference S18 S19 S20]

## Security

The token whitepaper publishes a HasLock-certified ERC-20 audit and penetration assessment named as performed by Admir Zlatic (0xSimpleFarmer), Hashlock SSCAC dated 2026-02-03, with no findings on the ERC-20 surface. DefiLlama's protocol object lists audits 0 and audit_links null. Unchained names 0xSimpleFarmer as the Clutch lead. Protocol GitHub Clutch-L4bs/stonkbrokers returned 404; the ERC-20 repo is public under BUSL 1.1. [claim S13 S24 S33 S34]

## Engineering

_Research pending._

## Team

Official identity is bidirectional: the cash and io terminals name @ClutchMarkets and token 0xe934…; the X profile @ClutchMarkets links stonkbrokers.io, which serves the same terminal as stonkbrokers.cash. Docs name operator SB (BVI) Ltd in Tortola. The public ERC-20 README names issuer Clutch Labs, LLC (New York). Those two legal strings are both on file. [verified S11 S28 S36] [claim S12 S34]

@realstonkbroker is a separate X account whose bio reads Fan Account and repeats CA 0xe934…. Flag: third-party-link. The site does not name that handle. Special Projects (TickerYard, Oakmont, Card Wall, Chain Mancers, DERP, UP) are listed as independent teams. No official Telegram was listed; Discord is named only in the 2026-08-31 dinner post. [claim S11 S35]

## Product and economics

StonkBrokers is an ERC-721 collection of 4,444 brokers. Each token has an ERC-6551 token-bound account. Docs and the homepage say that wallet is seeded with a Robinhood Stock Token at mint (TSLA, AMZN, PLTR, NFLX, AMD and later names) and, once the broker is activated, can receive Clock In stock-token drops. The free mint is closed; the documented acquire path is buy $STONKBROKER then Trade or snipe on the Anvil AMM. [claim S11 S12]

Anvil prices a vault broker at 666,666 $STONKBROKER plus a native ETH trade fee (docs: 10% swap / 15% snipe). Activation is a separate $STONKBROKER fee with published tiers from 66,666 (100x) to 1,666,666 (333x); docs say 50% of that fee is burned and activation clears on true ownership transfer. Clock In v2 lets any wallet crank a full ETH pot into elected Stock Tokens and credit activated brokers by tier weight. Docs label Clock In drops as a marketing program, not corporate dividends. [claim S12]

$STONKBROKER is a fixed-supply CollectionToken at 0xe934…. Verified source mints once in the constructor to 0xb668… with no further mint, pause, tax or blacklist. Constructor supply 2,962,663,704 equals 4,444 × 666,666. Blockscout total_supply at fetch was about 2,392,625,319, so burns have reduced supply since deploy. The token was created by that EOA, not by StonkLaunchpadFactory. [verified S13 S16 S17]

Live modules around the collection include the Safety Deposit Box (Uniswap v3/v4 and up. LP lockers), Broker Box (Certificate Counter plus Play the Box, stock-token prizes), Smart Launch V2 and Stonk Launcher (bonding-curve pads that graduate into locked pools), and the Stonk Exchange powered by up. Leverage Machine / STORMM is documented as coming soon on mainnet in September 2026: Uniswap v4 LP ranges used as options inventory, with calls and puts minted as ERC-721s. No STORMM address appears in the live Anvil table. [claim S11 S12 S29]

DexScreener's Uniswap v4 STONKBROKER/ETH pair 0xd33c… showed liquidity 3581052.52 USD, 24h volume 3357621.82 USD and marketCap 29647685 USD at fetch. GeckoTerminal's reserve_in_usd for the same pool was 5890033.38 with 24h volume 3345880.28 USD. Those liquidity fields disagree; the volumes agree near 3.35M. Pair quote is native ETH (Gecko labels the pool WETH). [claim S22 S23]

DefiLlama chain-slice TVL (locker WETH only) was 1016688.16 USD at 2026-09-02T22:21:23Z. A separate staking row of 23462326.07 USD in STONKBROKER is not that TVL. Robinhood Chain 24h fees 9200 USD and revenue 4474 USD are Llama adapter totals across Anvil, activation, Broker Box, lockers and launchers — not the Uniswap v4 token pair. Llama protocol DEX volume 32432 USD is the same adapter, not DexScreener pair volume. Blockscout holders_count 33012 on the ERC-20; 640 holders on the 4,444 ERC-721. [claim S15 S18 S24 S25 S26 S27]

## Communications

Account posts global-economy-onchain line [claim S32]

Unchained covers NFT Stock Token wallets [claim S33]

NYC VIP dinner posted for NFT holders [claim S30]

STORMM and Leverage Machine article [claim S29]

BrokerTools chain explorer introduced [claim S31]

## Findings

The ERC-20 is ownerless after deploy; the NFT collection and Anvil stack were created by one EOA and the collection bytecode includes Ownable. Docs say activation weight resets on transfer, so a bought broker does not keep the prior holder's Clock In election. STORMM remains a September 2026 module with no address in the live table. DexScreener and GeckoTerminal disagree on liquidity for the same Uniswap v4 pool. [claim S11]

- NFT collection and Anvil stack were deployed from one EOA with an Ownable path on the collection; live owner() is unread. [inference S18 S19]
- Token-bound Stock Token balances and who can executeCall were not sampled. [unknown]
- Activation weight clears on transfer per docs, so secondary NFT buyers start at base until they pay again. [claim S12]
- STORMM / Leverage Machine is still a September 2026 module with no live address in the contract table. [claim S12 S29]
- DexScreener liquidity.usd 3.58M and GeckoTerminal reserve_in_usd 5.89M describe the same pool. [disputed S22 S23]
- HasLock ERC-20 PDFs are project-hosted and named to Admir Zlatic (0xSimpleFarmer); DefiLlama lists no audit links. [claim S13 S24]
- Operator legal name is not a single string (SB (BVI) Ltd vs Clutch Labs, LLC). [disputed S12 S34]
- @realstonkbroker repeats the CA as a Fan Account; the official handle on the site is @ClutchMarkets. [claim S11 S35]

- Receipts: official cash and io terminals, docs, token whitepaper, X profile and named status URLs, Unchained, GitHub ERC-20 README, DexScreener token API, GeckoTerminal pool search, DefiLlama protocol/fees/dexs URLs, and Blockscout address/tx/source APIs were opened on 2026-09-03; excerpts are copied from those responses. [verified S11 S12 S13 S14 S18 S22 S23 S24 S28]
- Numbers: holders 33012 is the Blockscout token field; 24h volume 3357621.82 USD and liquidity 3581052.52 USD are the DexScreener Uniswap v4 STONKBROKER/ETH pair slice, not all-pairs; Gecko reserve_in_usd 5890033.38 is the same pool under a different field; Llama TVL 1016688.16 is the Robinhood Chain locker WETH slice, not staking 23.5M and not pair liquidity. [claim S15 S22 S23 S24]
- Adversarial: the strongest contrary reading is that StonkBrokers is the chain's launchpad (DefiLlama category Launchpad; Smart Launch and Stonk Launcher are live) or that it is Stonks.fun / @realstonkbroker. Official copy names an ERC-6551 collection and Anvil NFTFi first; $STONKBROKER was created by an EOA CollectionToken constructor, not a launcher factory; @realstonkbroker bios itself as Fan Account; Stonks.fun is a different handle and ticker. [inference S11 S12 S16 S35]

## Sources

- S11 — stonkbrokers.cash homepage.
- S12 — Documentation | StonkBrokers.
- S13 — $STONKBROKER ERC-20 whitepaper.
- S14 — Token address 0xe934e36A….
- S15 — STONKBROKER token object.
- S16 — CollectionToken creation tx 0x05c07959….
- S17 — CollectionToken verified source.
- S18 — NFT collection 0x539CdD04….
- S19 — NFT collection creation tx 0x35c32b43….
- S20 — StonkNFTAMMVault 0xE302733a….
- S21 — ActivationManager 0xacD5ae3c….
- S22 — STONKBROKER token pairs on Robinhood.
- S23 — STONKBROKER pool search.
- S24 — api.llama.fi/protocol/stonkbrokers.
- S25 — StonkBrokers daily fees.
- S26 — StonkBrokers daily revenue.
- S27 — StonkBrokers daily DEX volume.
- S28 — @ClutchMarkets profile.
- S29 — STORMM & Leverage Machine.
- S30 — NYC VIP dinner.
- S31 — Introducing BrokerTools.
- S32 — This is not a phase.
- S33 — StonkBrokers NFT collection and Stock Tokens.
- S34 — stonkbroker-erc20 README.
- S35 — @realstonkbroker profile.
- S36 — stonkbrokers.io homepage.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T18:10:00Z; methodology_version: proofline-v1.0.
