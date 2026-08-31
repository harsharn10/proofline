# Chain File

Robinhood Chain names, researched. Not financial advice. Stock Tokens are not offered to US persons.

## Index

- STOCK TOKENS — Robinhood Stock Tokens (Official)
- NVDA — NVIDIA Stock Token (Official)
- SPY — S&P 500 ETF Stock Token (Official)
- SPCX — SpaceX Stock Token (Official)
- HOOD — Robinhood Markets Stock Token (Official)
- GME — GameStop Stock Token (Official)
- USAR — USA Rare Earth Stock Token (Official)
- PONS — Pons (Live)
- INDEX — The Index (Live)
- BOW — Longbow (Live)
- DENAR — Denar Markets (Live)
- ARROW — Arrow (CDP / namesake collision) (Live)
- MANCER — Chain Mancers (Live)
- QUOTRON — Quotrons (Live)
- STONKBROKER — StonkBrokers (Live)
- STATICS — Statics / Operators (Live)
- EARN — Robinhood Earn / Morpho (No token)
- LONGSHOT — Longshot / long.xyz (Live)
- L4VA — L4VA Protocol (Launching)
- ROBINDEX — Robindex scanner (robindex.pro) (Live)
- FOX — Robin Hood / FoxPad (Live)
- VIRTUAL — Virtuals Protocol (Live)
- MAXFI — MaxFi (No token)
- SQUEEZE — Squeeze protocol (Not launched)
- CASHCAT — Cash Cat (Live)
- AI — Artificial Inu (Live)
- HMM — Thinking Cat (Live)
- WIFI — DogWifHood (Live)
- METALHEAD — Metal Head (Not launched)
- MONKEYBIZ — MonkeyBizCash (Not launched)
- BANKR — Bankr (Live)
- NOXA — Noxa (Live)
- MORPHO — Morpho (No token)
- UNI — Uniswap (No token)
- LINK — Chainlink (No token)
- LIGHTER — Lighter (No token)
- BRODIE — Brodie (Live)
- VIMEN — Vimen baskets (Live)
- ATLAS — ATLAS (Live)
- RSTOCKS — RSTOCKS (Live)
- POOLSFUN — Poolsfun / pools.trade (Live)
- ROBINWIFHAT — RobinWifHat (Launching)

---

# STOCK TOKENS — Robinhood Stock Tokens

Official RWA · Official · updated 2026-08-30

The actual RWA product the chain was built for. ~196 ERC-20s, Chainlink priced.

## Overview

Stock Tokens are tokenized debt securities issued by Robinhood Assets (Jersey) Limited. Each ticker is a standard ERC-20 with 18 decimals and an on-chain multiplier for splits and dividends (ERC-8056). They give economic exposure to the underlying stock or ETF, not legal or beneficial ownership of the shares. Mint and burn sit with KYB authorized participants. Everyone else trades the float on Uniswap, Arcus, Rialto, Lighter, 1inch.

## RWA hook

These are the official RWAs. Everything else on this file is either wrapping them, pairing against them, or pretending to.

## Thesis

If you want the chain's stated product, this is it. Top on-chain value as of late August: NVDA, SPY, SPCX, AAPL, TSLA. GameStop prints volume. Private-company names (SpaceX, OpenAI-style wrappers) have already drawn public disavowals — treat those as legally noisy even when the contract is official.

## Mechanics

Live registry is docs.robinhood.com/chain/contracts. Cross-check hoodl2.com/stocks. A token with the same ticker at any other address is not a Robinhood Stock Token. Prices come from per-asset Chainlink feeds, already multiplier-adjusted. Not available to US persons or several other jurisdictions.

## Risks

Debt-security wrapper, not equity. Geographic blocks. Ticker collisions from permissionless deploys. Private-company tokens can be contested. Official list can add names without notice.

## Contracts

- none pinned

## Links

- [Official contract registry](https://docs.robinhood.com/chain/contracts)
- [Stock token docs](https://docs.robinhood.com/chain/stock-tokens)
- [hoodl2 stocks](https://hoodl2.com/stocks)
- [RWA.xyz](https://app.rwa.xyz)

## Feed

### 2026-07-25 · On-chain · RWA market cap jumps ~5x

CoinDesk: tokenized RWA value on the chain to about $70M. A dozen names clearing $500k+ daily volume. GME, NVDA, SPCX leading prints. Still a small slice of total DEX volume.

_CoinDesk_

### 2026-07-01 · Company · Mainnet live with Stock Tokens

Public mainnet. First-wave US stocks and ETFs as ERC-20s, 24/7, self-custody via Robinhood Wallet in 120+ countries. US persons excluded.

_Robinhood_

---

# NVDA — NVIDIA Stock Token

Official RWA · Official · updated 2026-08-30

Largest official stock token by on-chain value. Default quote asset for meme×RWA pairs.

## Overview

Official NVIDIA Stock Token. Late August RWA.xyz snapshot: roughly $9.3M on-chain value and ~79k holders — the biggest official ticker on the chain. Also the quote asset that defined the meme×RWA pair (Artificial Inu / $AI).

## RWA hook

This is the official NVIDIA token. Any other $NVDA on this chain is a fake.

## Thesis

Highest-holder official name. If a launchpad or printer says it pairs vs NVDA, the quote CA must match the registry. That single check is the whole game.

## Mechanics

ERC-20 Stock Token, Chainlink feed, multiplier for corporate actions. Trades vs WETH and USDG on Uniswap. Used as collateral in Morpho / Longbow / Denar depending on listing.

## Risks

Not equity. Not for US persons. Fake NVDA contracts are a daily deploy.

## Name collisions

Permissionless $NVDA tickers. Always the registry CA.

## Contracts

- Official NVDA: `0xc3553EC6ac7A44e5B1231c6B7f1d04a4de19C0a0`

## Links

- [Registry](https://docs.robinhood.com/chain/contracts)
- [DexScreener RH](https://dexscreener.com/robinhood)

## Feed

### 2026-08-30 · On-chain · Top official by value

RWA.xyz ~$9.3M / ~79k holders. Still the chain's flagship equity token.

---

# SPY — S&P 500 ETF Stock Token

Official RWA · Official · updated 2026-08-30

Official SPY token. Second by on-chain value. Index exposure without picking names.

## Overview

Official SPDR S&P 500 ETF Stock Token. ~$5.8M on-chain in the late-August snapshot. The cleanest 'own the market' official ticker on the chain.

## RWA hook

Official SPY. Used as quote/reward in several Index-style printers.

## Thesis

If you want beta, this is the official wrapper. If a meme claims SPY rewards, match this CA.

## Mechanics

Same Stock Token standard. Chainlink priced. Uniswap + Morpho path.

## Risks

ETF wrapper inside a debt-security wrapper. Fees and tracking sit with RHJ, not SPDR.

## Contracts

- Official SPY: `0x6A046E3495e2937Fa1cC25730575d82873ADb910`

## Links

- [Registry](https://docs.robinhood.com/chain/contracts)

## Feed

_No feed items yet._

---

# SPCX — SpaceX Stock Token

Official RWA · Official · updated 2026-08-30

Official private-company token. High volume, legally noisy category.

## Overview

Official SpaceX Stock Token, ~$4.9M in the late-August snapshot. One of the names that made Robinhood's private-company tokenization the story. Same legal wrapper as public names — economic exposure, not equity in SpaceX.

## RWA hook

Official SPCX. SPACEHOOD and other memes pair against this CA.

## Thesis

Retail wants SpaceX. The token is not a share. Private-company tokens as a class have already seen public disavowals (OpenAI-style products). Size the legal haircut.

## Mechanics

Stock Token standard. High DEX volume relative to public names some days.

## Risks

Private company. Contested wrappers exist in the category. Ticker fakes.

## Contracts

- Official SPCX: `0x32eB791940173CA92d869121dE1D382048A92Db7`

## Links

- [Registry](https://docs.robinhood.com/chain/contracts)

## Feed

_No feed items yet._

---

# HOOD — Robinhood Markets Stock Token

Official RWA · Official · updated 2026-08-30

Official HOOD equity token. Not a chain coin. RSTOCKS drips this to holders.

## Overview

Official Robinhood Markets Stock Token. The only official way to hold HOOD on this chain. Completely separate from any 'Robinhood Chain token' — there isn't one.

## RWA hook

Official HOOD. RSTOCKS and similar printers buy this and distribute to holders.

## Thesis

If someone is selling you a chain airdrop, they are not selling you this. This is the listed equity wrapper.

## Mechanics

Stock Token standard. CA below is the registry address.

## Risks

People confuse this with a gas token or airdrop. Fake HOOD contracts are constant.

## Name collisions

Any $HOOD / $HOODCHAIN / $RHC that is not this CA.

## Contracts

- Official HOOD: `0x21E8771fb18678c82559505ba81113704f57c8ad`

## Links

- [Registry](https://docs.robinhood.com/chain/contracts)

## Feed

### 2026-07-01 · Company · No chain token

Robinhood has not issued a native L2 token. HOOD the Nasdaq stock (and this Stock Token) is the official instrument. Crypto.news restated this mid-July.

_crypto.news_

---

# GME — GameStop Stock Token

Official RWA · Official · updated 2026-08-30

Official GME. Often the volume leader among stock tokens. Culture ticker that is also real.

## Overview

Official GameStop Stock Token. Repeatedly the highest daily volume official name (CoinDesk had it at $26.6M on one July print). Pons supports GME as a quote asset for meme launches.

## RWA hook

Official GME. Pons 'pair with any RWA' includes this.

## Thesis

The chain's retail DNA is GME. Volume is real. Still a debt-security wrapper.

## Mechanics

Stock Token standard. Heavy Uniswap flow. Used as LP inventory in MaxFi marketing.

## Risks

Meme volume ≠ fundamental. Fake GME contracts.

## Contracts

- Official GME: `0xD1C418cEa7d1A56c2e68D8e0C326F59A76061379`

## Links

- [Registry](https://docs.robinhood.com/chain/contracts)

## Feed

### 2026-07-25 · On-chain · Volume leader print

CoinDesk: tokenized GME doing $26.6M daily at one snapshot, ahead of NVDA and SPCX on that day.

_CoinDesk_

---

# USAR — USA Rare Earth Stock Token

Official RWA · Official · updated 2026-08-30

Small official ticker. METALHEAD (upcoming) claims to drip this to meme holders.

## Overview

Official USA Rare Earth Stock Token. Not a top-value name. It matters because a Pons meme announced 30 Aug ($METALHEAD) wants to print USAR rewards to holders — the Index template against a thin official token.

## RWA hook

Official USAR. Any METALHEAD reward has to hit this CA or it is not the stock.

## Thesis

Thin official tokens are where printers go to look unique. Confirm the CA before treating a drip as RWA.

## Mechanics

Stock Token standard. Low float vs NVDA/SPY.

## Risks

Thin liquidity. Printer may never launch. CA mismatch is the attack.

## Contracts

- Official USAR: `0xd917B029C761D264c6A312BBbcDA868658eF86a6`

## Links

- [Registry](https://docs.robinhood.com/chain/contracts)

## Feed

### 2026-08-30 · What people are saying · METALHEAD announces USAR drip

@MetalHead_rh: coming to Pons, 'first project to give passive exposure to $USAR just by holding.' Not launched.

_@MetalHead_rh_

---

# PONS — Pons

Protocol · Live · updated 2026-08-30

Dominant launchpad. Own-the-casino token. Can pair new tickers vs official stock tokens.

## Overview

Pons is the default token factory on Robinhood Chain. CT still treats $PONS as the index of launch activity. Official account: pair and launch against any supported RWA, GME to AAPL. Longbow listed PONS as collateral on 30 Aug. Squeeze used it as the example of a name too liquid to move 10% without ~$95k of sells (their $258M mcap print — treat as a snapshot, not a valuation).

## RWA hook

The pad can quote official Stock Tokens. $PONS itself is not a stock token.

## Thesis

If you want the fee sink for permissionless issuance, this is the name CT is in. That is a casino-equity thesis, not an RWA thesis. The RWA feature is the quote-asset menu.

## Mechanics

Uniswap v3 pools. Creator fees. Pons Family / pons.family. Bot @Ponsbotfamily can launch from X. 50k+ tokens claimed by Squeeze's tape thread.

## Risks

Mcap prints move 50%+ in a session. Most launches are disposable. Token ≠ the pad's legal entity. Fake $PONS contracts exist.

## Name collisions

Other pads (FoxPad, Poolsfun, Noxa, bow.fun) will sell you 'the next Pons.'

## Contracts

- PONS: `0x39dBED3a2bd333467115dE45665cC57F813C4571`

## Links

- [Pons](https://pons.family)
- [X](https://x.com/ponsdotfamily)
- [DexScreener](https://dexscreener.com/robinhood)

## Feed

### 2026-08-30 · On-chain · Listed as Longbow collateral

Longbow: post PONS as collateral, borrow USDG, keep the upside. Native credit market for the top pad token.

_@longbowlend_

### 2026-08-30 · What people are saying · Still the board leader

RH Daily 24h boards keep $PONS next to $CASHCAT. Squeeze thread cited ~$258M mcap and 20,000 Uniswap v3 TWAP observations.

_@RHDaily__ / @UseSqueeze_RH_

### 2026-08-20 · Company · Pair with any supported RWA

@ponsdotfamily: pair and launch with any RWA they support, GME to AAPL, live on Robinhood Chain.

_@ponsdotfamily_

---

# INDEX — The Index

Protocol · Live · updated 2026-08-30

Hold the coin, receive official stock tokens. Cleanest RWA-hybrid primitive on the chain.

## Overview

The Index takes a cut of trading activity and buys official Stock Tokens for holders on a short cadence (they describe 15-minute distributions, no claim). Zap compounds distributed stocks back into INDEX. Team says nearly $1M in RWAs distributed since launch and that the Indexer has been a top-3 stock purchaser on the chain.

## RWA hook

YES. Fees buy official Stock Tokens and drip them to $INDEX holders.

## Thesis

This is the template everyone is cloning (RSTOCKS → HOOD, METALHEAD → USAR). If the flywheel is real, it is the most direct 'meme that is also an RWA product' on the list. Verify distributions on-chain, not from the thread.

## Mechanics

3% tax on trades (per their writeup). 75% of related protocol fees buy tokenized stocks, 25% deepens liquidity. Uniswap hook. Turnkey-powered RWA wallets. Lighter instance mentioned.

## Risks

Tax tokens die when volume dies. Distribution size is volume-reflexive. Hook whitelist and fee routing need a contract read. Ticker $INDEX is generic — fakes expected.

## Contracts

- INDEX: `0x56910d4409f3a0c78c64dd8d0545ff0705389870`

## Links

- [X article](https://x.com/TheIndexFi)
- [DexScreener](https://dexscreener.com/robinhood)

## Feed

### 2026-08-25 · What people are saying · On every RH Daily board

Trending list next to CASHCAT, PONS, FOX, AI. HoodScan showed a strong green day late August.

_@RHDaily___

### 2026-07-17 · Company · Stocks for Everyone writeup

@TheIndexFi: 3% tax funds stock distributions every 15 minutes. Zap compounds stocks back into INDEX. Claims ~$1M RWAs distributed, single 15-min print >$155k.

_@TheIndexFi_

---

# BOW — Longbow

Protocol · Live · updated 2026-08-30

Native credit layer. Borrow USDG against stocks, memes, RWAs, NFTs. Morpho-powered.

## Overview

Longbow is the native credit token for Robinhood Chain. Lend, borrow, leverage against stocks, memes, RWAs and NFTs. Powered by Morpho and Pons. CEX access noted 27 Aug. TVL was still toy-sized vs official Morpho Earn (~$100k crossed 30 Aug). That is the gap: product exists, scale does not.

## RWA hook

YES as a credit wrapper. Collateral can be official Stock Tokens. $BOW is the protocol token, not a stock.

## Thesis

If people borrow against HOOD/NVDA without selling, this is the chain-native version of that. Denar launched the same day as a stocks-only competitor. Two names, one category.

## Mechanics

Morpho markets. PONS listed as collateral 30 Aug. Buybacks/burns/staking claimed in CT ignitions. 1B supply cited in one note. Canonical CA below.

## Risks

Young market, thin TVL. $BOW ticker collision with bow.fun and Bankr memes. Credit risk on meme collateral is not the same as stock-token credit.

## Name collisions

bow.fun launchpad, Bankr $BOW memes, Longbow the protocol. Three things.

## Contracts

- BOW (Longbow): `0x451b42A15100C340CA12F7c66DE06fac5EA2D751`

## Links

- [X](https://x.com/longbowlend)

## Feed

### 2026-08-30 · On-chain · TVL crossed $100k

@longbowlend: Longbow just crossed $100,000 in TVL. Same day they listed PONS as USDG-borrow collateral.

_@longbowlend_

### 2026-08-27 · Company · First CEX access

CT notes first CEX access 27 Aug while canonical RH-chain token still small FDV.

---

# DENAR — Denar Markets

Protocol · Live · updated 2026-08-30

Went live 30 Aug. Stocks-only money market. Lend USD or borrow against official stock tokens.

## Overview

Denar is the highest-signal new protocol in the 30 Aug scan. Isolated money markets for tokenized equities, Chainlink priced. Lend USD, earn yield, or borrow against stock tokens without selling. Points: one dollar, one day, one point, lend or borrow. dUSD minting window announced for the following week. leak.me flagged 4 KOLs following in 24h. Chinese CT: 'Aave for tokenized stocks.'

## RWA hook

YES. Core product is credit against official Stock Tokens. Confirm each market's CA matches the registry.

## Thesis

Stocks-only vs Longbow's anything-as-collateral. If they actually list NVDA/AAPL/SPY from the official registry, this is a real RWA credit venue. Brand new — do not trust first-day mcap.

## Mechanics

Isolated markets. Chainlink oracles. Points campaign live. dUSD is a separate upcoming asset. CA posted to DexScreener verify and site footer 30 Aug.

## Risks

Day-one protocol. Unaudited from this file's point of view. Points ≠ token value. dUSD not live. Competes with Morpho Earn (official) and Longbow.

## Contracts

- DENAR: `0x3786728a2c49c4617bf4fe5bd82b90b6b0df5508`

## Links

- [X](https://x.com/DenarMarkets)

## Feed

### 2026-08-30 · Company · Markets live

@DenarMarkets: tokenized stocks deserve their own money market. Lend USD or borrow against stock tokens. Built on Robinhood Chain. Priced by Chainlink.

_@DenarMarkets_

### 2026-08-30 · Company · DexScreener CA verify

Contract address 0x3786728a2c49c4617bf4fe5bd82b90b6b0df5508 added to website footer and docs.

_@DenarMarkets_

### 2026-08-30 · Company · Points + dUSD window

One dollar, one day, one point. Lend or borrow. Points carry priority access to dUSD's first minting window, coming this week.

_@DenarMarkets_

---

# ARROW — Arrow (CDP / namesake collision)

Protocol · Live · updated 2026-08-30

User-named. Multiple ARROWs. Treat ticker as a collision until the CA is the one you mean.

## Overview

ARROW was on the original research list as a DeFi name. On this chain the ticker is overloaded: CDP-style products, Solana-era launchers that bridged a brand, and options-flavored wrappers all show up in search. This dossier stays as a collision warning until a single canonical Arrow protocol is pinned.

## RWA hook

Only if the specific product takes official Stock Tokens as collateral. Do not assume from the ticker.

## Thesis

Do not buy $ARROW from a trending board. Identify the product (CDP vs options vs meme) then the CA.

## Mechanics

Unknown until the product is specified. Search Blockscout by verified source, not ticker.

## Risks

Ticker collision is the product. Highest-probability way to buy the wrong thing.

## Name collisions

Arrow CDP vs launcher brand vs options vs random Pons deploy.

## Contracts

- none pinned

## Links

- [Blockscout search](https://robinhoodchain.blockscout.com)
- [DexScreener RH](https://dexscreener.com/robinhood)

## Feed

### 2026-08-30 · Risk · Collision flagged in the file

Original list name. Multiple products answer to ARROW. Feed a CA and this dossier gets a single product.

---

# MANCER — Chain Mancers

Hybrid / NFT · Live · updated 2026-08-30

RWA-hybrid. NFT/agent layer that sits next to StonkBrokers and Quotrons in CT bags.

## Overview

Chain Mancers / $MANCER shows up on 'which hybrid are you holding' posts with StonkBroker, Cashcat, Lock, FOX, Printer. The product surface is an NFT/agent hybrid aiming to sit on tokenized stocks rather than a plain meme. Treat as a hybrid until the contract set is fully mapped.

## RWA hook

Claimed hybrid — confirm whether NFTs actually hold or earn official Stock Tokens.

## Thesis

Same shelf as StonkBrokers: culture object that wants an RWA cashflow. Most of these fail at the cashflow.

## Mechanics

CT groups it with StonkBroker/Quotron/Statics. Verify contracts on Blockscout before sizing.

## Risks

Thin docs vs loud ticker. Hybrid in name only until wallets hold registry CAs.

## Contracts

- none pinned

## Links

- [DexScreener RH](https://dexscreener.com/robinhood)

## Feed

### 2026-08-26 · What people are saying · On the hybrid board

CT bag-check post: $MANCER $STONKBROKER $CASHCAT $LOCK $HOLDPLEASE $FOX $PRINTER. Culture heat, not a fundamental print.

_@Cuba19__

---

# QUOTRON — Quotrons

Hybrid / NFT · Live · updated 2026-08-30

RWA-hybrid NFT. Same-dev claim now attached to RobinWifHat's upcoming pad.

## Overview

Quotrons is an NFT/hybrid that CT still holds as a named RWA object. 25 Aug posts claim the same developer as RobinWifHat, with a pad fee split (1.7% of launches to token, 0.5% to Outlaw NFT holders, 1.2% buyback/burn). That pad was 'this week' on 25 Aug — confirm it shipped before treating the overlap as live.

## RWA hook

Hybrid claim. Confirm NFTs earn or hold official Stock Tokens, not just a ticker that says quote.

## Thesis

If the pad ships and fee split is real, Quotrons becomes pad-adjacent like StonkBrokers is NFT-adjacent. Until then it is a named hybrid with a rumor.

## Mechanics

NFT collection + token. Dev names circulating: @crypto_czar_eth, @cruelhandeth. Verify, don't inherit.

## Risks

Same-dev claims are CT. Pad delay. Ticker fakes.

## Contracts

- none pinned

## Links

- [X](https://x.com/Quotron404)

## Feed

### 2026-08-25 · What people are saying · RobinWifHat same-dev claim

Posts: same dev as Quotrons, pad coming, fee split 1.7 / 0.5 / 1.2, ~$4M cited. Not independently verified here.

_@ibweb3eth_

---

# STONKBROKER — StonkBrokers

Hybrid / NFT · Live · updated 2026-08-30

NFT brokers with wallets meant to hold tokenized stocks. The original hybrid on this list.

## Overview

StonkBrokers is the named NFT/RWA hybrid: a collection whose thesis is 'the NFT is a broker that holds stocks.' HoodScan has shown the ticker as a top volume name. MonkeyBizCash (1,111 ERC-6551, mint TBA) is an explicit clone of this pattern.

## RWA hook

YES if the TBA/wallet layer actually holds official Stock Tokens. That is the whole check.

## Thesis

First hybrid that CT still repeats. Product quality = whether wallets hold registry CAs and earn, or just look like Wall Street PFPs.

## Mechanics

NFT collection + STONKBROKER token. ERC-6551-style wallets in the category. Verify collection + token CAs on Blockscout.

## Risks

PFP with a story vs a balance sheet. Clone wave (MonkeyBizCash). Ticker on HoodScan ≠ NFT floor is real RWA.

## Contracts

- none pinned

## Links

- [HoodScan](https://www.hood-chain.com/tokens)

## Feed

### 2026-08-30 · On-chain · HoodScan top-volume name

Appeared near the top of HoodScan token table with material 24h volume and liquidity. Snapshot, not a valuation.

_HoodScan_

---

# STATICS — Statics / Operators

Hybrid / NFT · Live · updated 2026-08-30

Newer hybrid on the original list. Operator NFTs + token. Confirm the RWA leg.

## Overview

Statics / Statics Operators was the newest hybrid on the starting list. CT still clusters it with Quotron and Mancer. Dossier stays open: product is live enough to have a ticker, not documented enough here to call the RWA leg proven.

## RWA hook

Unproven until Operators hold or earn official Stock Tokens.

## Thesis

Treat as a named hybrid, not as NVDA. Feed a CA and a distribution tx and the file upgrades.

## Mechanics

Operator NFTs + STATICS token. Verify on Blockscout.

## Risks

Newest of the four hybrids = most room for a nothingburger.

## Contracts

- none pinned

## Links

- [DexScreener RH](https://dexscreener.com/robinhood)

## Feed

_No feed items yet._

---

# EARN — Robinhood Earn / Morpho

Infra · No token · updated 2026-08-30

Official USDG lending inside the Robinhood app. Morpho-powered. Separate from any $EARN meme.

## Overview

Robinhood Earn is the day-one yield product: Morpho-powered USDG lending, quoted around 7% APY in launch coverage, surfaced inside the main Robinhood app. This is not a tradable $EARN meme. earnonhood.com-style tokens are collisions.

## RWA hook

YES as the official credit rail for the stablecoin. Stock Tokens can sit in Morpho markets separately.

## Thesis

If you want the real yield product, this is Morpho, not a ticker. $EARN on DexScreener is probably a trap.

## Mechanics

Morpho Blue. USDG. App-level UX. No protocol token required.

## Risks

Ticker collision with $EARN memes. APY is variable. App geo-blocks.

## Name collisions

Official Earn product vs $EARN meme vs earnonhood.com token.

## Contracts

- none pinned

## Links

- [Morpho](https://morpho.org)
- [Robinhood Chain docs](https://docs.robinhood.com/chain)

## Feed

### 2026-08-24 · On-chain · Morpho still most of TVL

CertiK/DefiLlama-style snapshots through August: Morpho is the majority of chain TVL. Earn is the branded front door.

_CertiK_

### 2026-07-01 · Company · Earn live at mainnet

Launch coverage: Morpho-powered USDG lending inside Robinhood, estimated ~7% APY at the time. Not a token launch.

---

# LONGSHOT — Longshot / long.xyz

Launchpad · Live · updated 2026-08-30

Launchpad that pairs memes against official stock tokens. Home of $AI vs NVDA.

## Overview

long.xyz / Longshot is the RWA-pair launchpad. This is where Artificial Inu ($AI) launched against official NVDA and taught the chain that a meme can have a stock as the other side of the pool.

## RWA hook

YES as a venue. The pair's quote asset must be a registry CA.

## Thesis

If Pons is the casino, long.xyz is the casino table that uses stocks as chips. Category-defining, even if individual tickers die.

## Mechanics

Launch + pool against a chosen Stock Token. Check quote asset on the pair, not the meme ticker.

## Risks

Meme still rugs. Quote asset can be a fake NVDA if you don't check. Pad brand vs token brand may differ.

## Contracts

- none pinned

## Links

- [long.xyz](https://long.xyz)

## Feed

### 2026-07-01 · On-chain · AI / NVDA pair defines the meta

Artificial Inu vs official NVDA is the pair CT still points at when they say meme×RWA.

---

# L4VA — L4VA Protocol

Protocol · Launching · updated 2026-08-30

TGE on Robinhood Chain. Vaults that issue tokens backed by locked RWAs, stocks, NFTs, memes.

## Overview

L4VA wants to be the factory for programmable investment tokens. GlobeNewswire TGE 18 Aug. Stated TGE $0.003, $1.05M TGE mcap, 1B max, 20% team, non-upgradeable ERC-20. Pitch: ETFs, RWA-backed memes, on-chain REITs. Tokenization creates assets; L4VA creates markets.

## RWA hook

YES if a vault actually locks official Stock Tokens. Until that tx exists, this is a TGE narrative.

## Thesis

Right category, unproven inventory. Wait for a vault that holds NVDA or SPY from the registry.

## Mechanics

Vaults issue fungible vault tokens. Governance + buybacks claimed (25% burn / 25% treasury in one spotlight). TGE currency WETH on RH Chain.

## Risks

Press-release heavy. 20% team. Do not ape a random $L4VA — verify CA on l4va.org at TGE.

## Contracts

- none pinned

## Links

- [l4va.org](https://l4va.org)
- [X](https://x.com/L4VAprotocol)

## Feed

### 2026-08-30 · What people are saying · Still posting the chain

@L4VAprotocol: 'Robinhood Chain is built better.' TGE marketing ongoing.

_@L4VAprotocol_

### 2026-08-18 · Company · TGE announced

GlobeNewswire: L4VA Technologies TGE for $L4VA natively on Robinhood Chain. Terms at l4va.org/tge.

_GlobeNewswire_

---

# ROBINDEX — Robindex scanner (robindex.pro)

Infra · Live · updated 2026-08-30

DEX scanner token. Not a stock index. Four different products share the Robindex name.

## Overview

robindex.pro is a Dexscreener-style tracker for chain 4663: live scan, safety scores, TG calls. $ROBINDEX is that scanner's ticker. It is not an index of stocks. Four colliding products: robindex.pro (this), robindex.money ($RDEX stock-index layer), robindex.finance ($RBD orderbook DEX), robindex.online (OTC desk).

## RWA hook

No. Infra/attention token. The $RDEX product on robindex.money is the actual stock-index attempt — separate dossier if we add it.

## Thesis

CT shilled it as 'protocol token at ATH.' One DexScreener pull showed ~$45k FDV. Narrative vs size is the tell.

## Mechanics

Scanner via DexPaprika every few minutes. Official CA on About page and X bio.

## Risks

Name collision is severe. Low float scanner tokens get used as dump vehicles. Fake $ROBINDEX CAs called out on their safety page.

## Name collisions

robindex.pro $ROBINDEX ≠ robindex.money $RDEX ≠ robindex.finance $RBD ≠ robindex.online OTC.

## Contracts

- ROBINDEX scanner: `0xd82f70F530AFf45b831d6eE17062B4E85395C6F3`

## Links

- [robindex.pro](https://robindex.pro/about)
- [X](https://x.com/robindexpro)

## Feed

### 2026-08-30 · What people are saying · ATH shill on a ~$45k scanner

CT: protocol token smashed ATH, ready for a parabolic run, posted this CA. Product is a scanner. Size was ~$45k FDV on one DexScreener pull.

_@DeGenWealth2_

### 2026-08-30 · Risk · Four Robindexes

Scanner, stock-index layer, orderbook DEX, OTC desk. Same word. Different CAs. This file only endorses the scanner CA above for this ticker.

---

# FOX — Robin Hood / FoxPad

Culture · Live · updated 2026-08-30

Unofficial mascot meme with an attached launchpad. Site says not affiliated with Robinhood.

## Overview

Fan-made fox mascot. robinhoodfox.com is explicit: not the official mascot, not endorsed. FoxPad (foxpad.app) is the attached pad; graduated tokens auto-burn token-side Uniswap fees. 50/50 ops vs FOX vault. Daily RH Daily board. DexScreener ~$2.1M / ~$225k liq on 30 Aug — narrative is larger than the book.

## RWA hook

No. Culture + pad. Not a stock token.

## Thesis

Mascot trades work on new chains. This one has a pad, which is more than most mascots. Still a meme. Don't pay 'next $10M' for a $2M book.

## Mechanics

Deflationary claims (one PR said 6% burned). FoxPad fee split. CA below is the one on DexScreener / site.

## Risks

Unofficial. Impersonation risk the other direction (people think it's RH). Pad may not retain share vs Pons.

## Contracts

- FOX: `0x2103faA9D1762e27a716C61718b3aCf3Ec1F9bf1`

## Links

- [Site](https://robinhoodfox.com)
- [FoxPad](https://foxpad.app)

## Feed

### 2026-08-25 · What people are saying · On the daily board

RH Daily trending: CASHCAT, PONS, FOX, PEPE, JUGGERNAUT… FOX is treated as a chain mascot even though the site disclaims it.

_@RHDaily___

### 2026-08-18 · What people are saying · Giga-sender pitch

CT: almost back to ATHs, mascot of the chain, coins that broke those levels went to $10M+. Posted this CA.

_@notEezzy_

---

# VIRTUAL — Virtuals Protocol

Infra · Live · updated 2026-08-30

AI-agent launchpad on the chain. FalconX: 4,500+ agents, $150M+ agent volume.

## Overview

Virtuals is a multi-chain agent rail with a Robinhood Chain instance. FalconX primer: 4,500+ agents, $150M+ agent volume, $2.3M+ raised by builders. Agent products include trading, yield, privacy, RWA (tokenized tax liens), collectibles, agent-to-agent. Fits Vlad's 'AI-native chain' pitch more than the RWA pitch so far.

## RWA hook

Indirect. Some agents wrap or trade stock tokens. $VIRTUAL is not a stock token.

## Thesis

If the chain's second product (after stocks) is agents, this is the named rail. Don't mix RH-instance price with ETH/Base VIRTUAL.

## Mechanics

Agent launches. HoodScan showed a RH CA near the top of volume — verify the full 42 chars before trading.

## Risks

Bridged vs native instance confusion. Multi-chain mcap ≠ RH book.

## Contracts

- none pinned

## Links

- [virtuals.io](https://virtuals.io)

## Feed

### 2026-07-19 · Company · FalconX primer numbers

4,500+ agents launched, $150M+ agent volume on Robinhood Chain, $2.3M+ raised. RWA mention: tokenized tax liens among live products.

_FalconX_

---

# MAXFI — MaxFi

Infra · No token · updated 2026-08-30

Managed LPs of official stocks vs USDG. Keep the equity, collect swap fees. No token found.

## Overview

MaxFi is an automated LP manager. On Robinhood Chain it runs stock/ETF pools vs USDG (AAPL, NVDA, TSLA, GOOGL, META, MSTR, PLTR, GME, SPY, QQQ). Pitch: become the market maker, no-swap rebalancing, circuit-breakers after depegs. Also Base/Arbitrum for crypto pools. No native token found in the 30 Aug scan.

## RWA hook

YES as a venue. LPs are official Stock Tokens vs USDG if they used registry CAs.

## Thesis

Same 'make the stock productive' bucket as Earn and Index, without a ticker to pump. That is a feature.

## Mechanics

Managed ranges. Time delays. Circuit-breaker in progress per 30 Aug videos. Withdraw anytime per FAQ.

## Risks

IL on tokenized stocks when the wrap depegs. Tokenless today does not mean tokenless forever. Confirm pool tokens.

## Contracts

- none pinned

## Links

- [maxfi.tech](https://maxfi.tech)

## Feed

### 2026-08-30 · What people are saying · Stocks paying like memecoins

@DaoKingdom videos: COST, MSTR, RBLX, RDDT, NVDA LP yields. No-swap rebalancing, time delays, circuit-breaker being built.

_@DaoKingdom_

---

# SQUEEZE — Squeeze protocol

Infra · Not launched · updated 2026-08-30

Short desk + short-interest tape. Tape live. Desk not built. A lemon meme is squatting the name.

## Overview

Squeeze wants to be the first short primitive on a long-only meme chain. The Tape reads Uniswap v3 TWAPs and will publish short interest, days to cover, utilization, borrow rates. The Desk (post ETH, borrow token, sell into its pool, ETH interest to lenders) is not built — no contracts deployed, by their own 30 Aug thread. A separate $SQUEEZE lemon meme launched the same evening.

## RWA hook

No. Would short memes, not stocks, in the current design.

## Thesis

Honest about not being built. Rare. Do not buy the lemon meme thinking it is the protocol.

## Mechanics

Oracle: refuse v3 pools with a single observation (they extrapolate spot). PONS ~20k observations, HMM ~14.4k. Interest paid in ETH so lenders of a dying token still get paid.

## Risks

Desk vapor. Name squat. If Desk ships, liquidation on thin books is the hard problem they already described.

## Name collisions

Squeeze protocol (no token) vs $SQUEEZE lemon meme launching 30 Aug.

## Contracts

- none pinned

## Links

- [X](https://x.com/UseSqueeze_RH)

## Feed

### 2026-08-30 · Company · Tape live, Desk not built

Long thread: Tape live, oracle verification live, Desk not built, no contracts. Short-interest fields null everywhere. 5 of 11 markets clear listing criteria.

_@UseSqueeze_RH_

### 2026-08-30 · Risk · Lemon meme squats the word

Separate account launching $SQUEEZE as a GameStop-era meme on the same night. Not the protocol.

---

# CASHCAT — Cash Cat

Culture · Live · updated 2026-08-30

Chain-defining cat. Discarded Robinhood mascot name. Not DeFi. Liquidity benchmark.

## Overview

CASHCAT is why week-one volume looked like a casino. Named after the mascot Robinhood dropped. Community project, no affiliation. First-week prints near $150M+ mcap are the origin story every later name is measured against. Noxa-era launch.

## RWA hook

No.

## Thesis

Mindshare + liquidity benchmark. Not an RWA. If it is on a board next to INDEX, only INDEX is the RWA.

## Mechanics

Meme. Deep WETH pool relative to the rest of the culture tape.

## Risks

Pure attention. Already did the 1700% then gave a lot back in July coverage.

## Contracts

- CASHCAT: `0x020bfC650A365f8BB26819deAAbF3E21291018b4`

## Links

- [DexScreener](https://dexscreener.com/robinhood)

## Feed

### 2026-08-16 · What people are saying · Still the main character

GG1nvestments: $CASHCAT headed to 1B. $PONS as the pad. Brodie as the dog. The culture stack, not the RWA stack.

_@GG1nvestments_

### 2026-07-09 · What people are saying · Week-one $150M cat

CryptoSlate / CoinDesk: chain launched for stocks, market crowned a cat. Peak prints in the $150–156M zone that week.

_CoinDesk / CryptoSlate_

---

# AI — Artificial Inu

Meme × RWA pair · Live · updated 2026-08-30

The pair that defined meme×RWA. Meme quoted against official NVDA on long.xyz.

## Overview

Artificial Inu is not an AI protocol. It is a meme whose other side is official NVIDIA Stock Token. That structure — meme vs registry CA — is the category. Still on RH Daily boards next to INDEX.

## RWA hook

YES as a pair. Quote asset must be official NVDA 0xc3553EC6ac7A44e5B1231c6B7f1d04a4de19C0a0.

## Thesis

Prototype. Copies will use SPY, HOOD, USAR. Always read the quote CA.

## Mechanics

long.xyz launch. Uniswap-style pool vs NVDA.

## Risks

Meme still goes to zero. Fake NVDA quote. Ticker $AI is a magnet for impersonators.

## Name collisions

Any other $AI on the chain.

## Contracts

- none pinned

## Links

- [long.xyz](https://long.xyz)

## Feed

### 2026-08-25 · What people are saying · Still on the 24h board

RH Daily list includes $AI next to INDEX. Category is sticky even when the coin is not the lead story.

_@RHDaily___

---

# HMM — Thinking Cat

Culture · Live · updated 2026-08-30

Pons-eco cat. ~$30M cited. Squeeze used its TWAP depth as a traction signal.

## Overview

Thinking Cat. Pons category blue chip after PONS itself. Squeeze's 30 Aug thread: HMM pool carries 14,400 Uniswap v3 observations — they used that as proof of real flow vs dead micros sitting at 1 observation.

## RWA hook

No.

## Thesis

Pons beta. Useful as a 'is this pad real' tell, not as an RWA.

## Mechanics

Pons launch. WETH pair.

## Risks

Meme. $30M is a CT print. Ticker HMM is ugly for search.

## Contracts

- none pinned

## Links

- [Pons](https://pons.family)

## Feed

### 2026-08-30 · What people are saying · TWAP as traction

Squeeze: PONS 20,000 observations, HMM 14,400, dormant micros 1. Cardinality tracks traction, not age.

_@UseSqueeze_RH_

### 2026-08-30 · What people are saying · $30M vs $HUH at $75k

CT: Thinking Cat at 30M, $HUH at 75k, should be 10M. Pons eco season pitch.

_@monchhh0_

---

# WIFI — DogWifHood

Culture · Live · updated 2026-08-30

Utility-flavored meme: swap, token inspector, volume engine, PFP gen. Not RWA.

## Overview

DogWifHood / $WIFI. 21 Aug KOL video: multi-chain swap (EVM + Solana), token inspector for RH, in-house volume engine, PFP generator, 10%+ burned. Tools on a meme. Not a stock token.

## RWA hook

No.

## Thesis

More product surface than the average mascot. Still a meme with a burn thread.

## Mechanics

Token + site tools. CA from the 21 Aug post.

## Risks

KOL video. Utility claims need a click. Burn % is marketing until you watch supply.

## Contracts

- WIFI: `0x4606Bd72EbA7259c40F910ECD76CF82950C0428C`

## Links

- none

## Feed

### 2026-08-21 · What people are saying · KOL video: tools + 10% burned

Adam Shelton video: swap, inspector, volume engine, PFP gen. CA in the post. Always DYOR.

_@AdamEShelton_

---

# METALHEAD — Metal Head

Meme × RWA pair · Not launched · updated 2026-08-30

Announced 30 Aug. Pons meme that claims to drip official USAR on every trade.

## Overview

Not launched as of 30 Aug evening. Pitch: first project to give passive exposure to USA Rare Earth ($USAR) just by holding. Index-style printer against a small official token.

## RWA hook

YES if and only if rewards are official USAR 0xd917B029C761D264c6A312BBbcDA868658eF86a6.

## Thesis

Category is real (Index proved the mechanic). This specific ticker is a press release.

## Mechanics

Pons. Hold meme, receive USAR on trades — as claimed.

## Risks

Not launched. CA not out. Could quote a fake USAR.

## Contracts

- none pinned

## Links

- [X](https://x.com/MetalHead_rh)

## Feed

### 2026-08-30 · Company · Coming soon to Pons

@MetalHead_rh: coming soon to PONS. Passive exposure to $USAR by holding. Keep digging.

_@MetalHead_rh_

---

# MONKEYBIZ — MonkeyBizCash

Hybrid / NFT · Not launched · updated 2026-08-30

1,111 ERC-6551 'executives.' Burn to activate. Designed to earn from tokenized stocks. Mint TBA.

## Overview

StonkBrokers clone pattern. 1,111 free mint. Each Executive gets an ERC-6551 wallet, activated by burning tokens, designed to earn from tokenized stocks, crypto and RWA profits. Mint, WL, CM TBA as of 30 Aug.

## RWA hook

Planned. Nothing to verify until mint and wallets exist.

## Thesis

Do not pre-bag a ticker. Wait for the collection CA and a wallet that holds a registry stock.

## Mechanics

ERC-6551. Burn-to-activate. Free mint promised.

## Risks

Not minted. Clone of a clone. TBA is where these die.

## Contracts

- none pinned

## Links

- none

## Feed

### 2026-08-30 · What people are saying · Mint TBA

1,111-piece free mint on Robinhood Chain. ERC-6551 wallets, burn tokens to activate, earn from tokenized stocks. Mint TBA.

_@Odinekachukwu1_

---

# BANKR — Bankr

Launchpad · Live · updated 2026-08-30

Agent infra that launches tokens from X. Trading fees pay API costs. Live on this chain.

## Overview

Bankr is agent-native issuance: wallets, tools, treasury automation, launch a token so trading fees pay for API costs. @bankrbot was claiming test airdrops on Robinhood Chain on 30 Aug (TEST token — a demo, not a product). Also talks multicurve launches with creator fees and stock pairing.

## RWA hook

Can pair launches with stock liquidity per bot copy. Confirm quote CA.

## Thesis

Infra for agents, not a stock. Relevant because the chain is pitching itself as AI-native.

## Mechanics

X-native bot. Skills. Token launches with locked LP, 0.665% creator fee cited on multicurve.

## Risks

Bot can launch junk. TEST airdrop is not a distribution. Don't ape bot output.

## Contracts

- none pinned

## Links

- [X](https://x.com/bankrbot)

## Feed

### 2026-08-30 · Company · TEST airdrop skill demo

bankrbot claimed 20,000 $TEST on Robinhood Chain. Demo skill, not a blue-chip airdrop.

_@bankrbot_

---

# NOXA — Noxa

Launchpad · Live · updated 2026-08-30

Early launchpad. CASHCAT-era venue. Culture history more than current RWA flow.

## Overview

Noxa / noxa.fun was in the week-one stack that produced CASHCAT. Launch and routing infra, not an official Robinhood product. Still on the pad list because history matters for this chain.

## RWA hook

Not the focus. Check any pair's quote asset anyway.

## Thesis

Origin pad. Current share vs Pons is the question.

## Mechanics

Launchpad. FakeNoxa exists as a named clone in the original pad dump — collision.

## Risks

Clone pads. Brand dilution.

## Name collisions

noxa.fun vs fakenoxa and copy URLs.

## Contracts

- none pinned

## Links

- [noxa.fun](https://noxa.fun)

## Feed

_No feed items yet._

---

# MORPHO — Morpho

Infra · No token · updated 2026-08-30

Day-one lending. Majority of chain TVL. Rails for Earn, Longbow, stock-token collateral.

## Overview

Morpho Blue is the lending stack Robinhood shipped with. Snapshots through August put Morpho at the majority of TVL (CertiK: ~$80M of ~$126M on 11 Jul; later prints still Morpho-heavy). This is the real credit layer. $BOW and $DENAR sit on top of or beside it.

## RWA hook

YES. Stock Tokens as collateral is the loop the chain was sold on.

## Thesis

If you care about RWA credit, read Morpho markets first, then the pretty tokens on top.

## Mechanics

Isolated Morpho markets. USDG. App Earn as a front end.

## Risks

Oracle and wrapper risk on Stock Tokens. Morpho token is multi-chain — don't confuse with a RH-native mint.

## Contracts

- none pinned

## Links

- [Morpho](https://morpho.org)

## Feed

### 2026-08-24 · On-chain · Still the TVL whale

CertiK ecosystem note: Morpho Blue ~63.5% of measured DeFi TVL in the mid-July cut. Uniswap next. RWA still small vs credit stables.

_CertiK_

---

# UNI — Uniswap

Infra · No token · updated 2026-08-30

Public AMM for the chain. V2/V3/V4 all present. Where stock tokens and memes actually trade.

## Overview

Uniswap is the public liquidity venue. Dedicated deployment at mainnet. V3 still matters here because Pons runs on it and Squeeze prefers v3 TWAPs. 30 Aug CT tied UNI's day-move to tokenized-stock volume and RH TVL.

## RWA hook

YES as the venue. Not a stock token.

## Thesis

Every pair you care about is probably a Uniswap pool. Read the pool, not the tweet.

## Mechanics

V2/V3/V4. Hooks (Index). Pons on v3.

## Risks

UNI the token is Ethereum-native. RH activity is a narrative, not a claim on UNI cashflows by itself.

## Contracts

- none pinned

## Links

- [Uniswap](https://app.uniswap.org)

## Feed

### 2026-08-30 · What people are saying · UNI + tokenized stocks narrative

CT: tokenized stock volume exploding, Uniswap RH activity growing, TVL +87% in one print. $5 level watch. Narrative, not a file upgrade.

_@zackfromsubway_

---

# LINK — Chainlink

Infra · No token · updated 2026-08-30

Every official Stock Token ships a Chainlink feed. Denar and lending markets price off it.

## Overview

Chainlink is the price rail. Each Stock Token has a live feed, multiplier-adjusted. Denar markets 'priced by Chainlink' is the same dependency. Without it, stock-token credit does not exist.

## RWA hook

YES as oracle infra for the official RWAs.

## Thesis

Not a RH-native token. It is why Morpho/Denar/Longbow can call these assets collateral.

## Mechanics

Per-asset feeds. Multiplier-aware.

## Risks

Feed halt / wrapper depeg vs CEX HOOD/NVDA. LINK the token is not a RH exposure.

## Contracts

- none pinned

## Links

- [Chainlink](https://chain.link)

## Feed

_No feed items yet._

---

# LIGHTER — Lighter

Infra · No token · updated 2026-08-30

Perps inside Robinhood Wallet. Gold, silver, FX, crypto. Day-one partner. Token pledged to RH users.

## Overview

Lighter runs perpetual futures. Launch coverage: access inside Robinhood Wallet in selected jurisdictions, $11M of its token pledged to Robinhood users. Not a stock-token DEX — it's the derivatives door.

## RWA hook

Indirect. Perps on metals/FX/crypto, not the Stock Tokens themselves in the launch set.

## Thesis

Distribution play. Wallet is the product. Token is a separate claim.

## Mechanics

Perps. Wallet integration. Geo-gated.

## Risks

Token vs product. Jurisdiction. Not RWA equity perps unless they list them later.

## Contracts

- none pinned

## Links

- none

## Feed

### 2026-07-01 · Company · Wallet perps at mainnet

Robinhood Wallet adds Lighter perps in selected jurisdictions. $11M token pledge cited in launch writeups.

---

# BRODIE — Brodie

Culture · Live · updated 2026-08-30

Claimed Robinhood office dog. First-batch meme. GG1nvestments 16 Aug thesis.

## Overview

Culture tape. GG1nvestments: confirmed office dog, first batch of memes, Cashcat and Pons wallets also holding, Neiro-style setup. Pure meme. In the file so the board matches the timeline.

## RWA hook

No.

## Thesis

Dog story. Not DeFi.

## Mechanics

Meme. Verify CA via @BrodieHasFun before anything else.

## Risks

Office-dog claims are marketing. First-batch is a narrative.

## Contracts

- none pinned

## Links

- [X](https://x.com/BrodieHasFun)

## Feed

### 2026-08-16 · What people are saying · Office-dog thesis

GG1nvestments long post: Brodie the Robinhood dog, first-batch, overlap with Cashcat/Pons wallets, slow-then-violent setup.

_@GG1nvestments_

---

# VIMEN — Vimen baskets

Hybrid / NFT · Live · updated 2026-08-30

Basket/hybrid on the original list. On-chain theme of assets — confirm contents.

## Overview

Vimen baskets were on the starting research list as an RWA-hybrid. The product idea is a basket, which is the right shape for a chain that has 200 stock tokens and no native index (robindex.money is trying that separately as $RDEX). This dossier needs a contract set.

## RWA hook

Only if the basket holds registry Stock Tokens.

## Thesis

Basket primitive is scarce and useful. Ticker is not proof of holdings.

## Mechanics

Baskets. Verify composition on-chain.

## Risks

Unverified inventory. Name collision possible.

## Contracts

- none pinned

## Links

- none

## Feed

_No feed items yet._

---

# ATLAS — ATLAS

Hybrid / NFT · Live · updated 2026-08-30

Named hybrid on the original list. Open file — feed the CA.

## Overview

ATLAS sat on the hybrid sheet. Without a pinned CA this stays a named hole. The file exists so the next time it prints on CT we have a place to drop the research.

## RWA hook

Unknown.

## Thesis

Placeholder with a flag. Not an investable writeup.

## Mechanics

Unknown.

## Risks

Empty CA. Do not buy a random $ATLAS.

## Contracts

- none pinned

## Links

- none

## Feed

_No feed items yet._

---

# RSTOCKS — RSTOCKS

Meme × RWA pair · Live · updated 2026-08-30

Index-style printer aimed at official HOOD. Fees buy the stock token and drip it.

## Overview

RSTOCKS is the HOOD-flavored clone of The Index mechanic: trading activity buys official HOOD Stock Token for holders. Category, not a promise the drip is healthy.

## RWA hook

YES if the buyback CA is official HOOD 0x21E8771fb18678c82559505ba81113704f57c8ad.

## Thesis

Printers live and die on volume. Confirm the HOOD CA in the buy route.

## Mechanics

Tax / hook / drip. Verify on DexScreener + Blockscout.

## Risks

Clone of Index. Volume reflexive. Fake HOOD buy address.

## Contracts

- none pinned

## Links

- none

## Feed

_No feed items yet._

---

# POOLSFUN — Poolsfun / pools.trade

Launchpad · Live · updated 2026-08-30

SushiSwap V3 launches. GeckoTerminal mid-Aug: SUSHICAT, ONGR, DOGINPOOL.

## Overview

Another pad in a crowded field. GeckoTerminal 16 Aug: gaining traction deploying SushiSwap V3 pools. Likely same family as pools.trade on the original pad list.

## RWA hook

Not the focus.

## Thesis

Pad #n. Only upgrade if RWA pairs appear.

## Mechanics

Sushi V3. Named tickers were memes.

## Risks

Crowded. Brand overlap with pools.trade.

## Contracts

- none pinned

## Links

- [GeckoTerminal](https://www.geckoterminal.com)

## Feed

### 2026-08-16 · On-chain · GeckoTerminal note

Poolsfun gaining traction as a launchpad on Robinhood Chain, deploying SushiSwap V3 pools. $SUSHICAT, $ONGR, $DOGINPOOL named.

_@GeckoTerminal_

---

# ROBINWIFHAT — RobinWifHat

Watch · Launching · updated 2026-08-30

Token + Outlaw NFTs + promised pad. CT says same dev as Quotrons.

## Overview

25 Aug: pad coming this week, 1.7% of launches to token, 0.5% to NFT WIF Outlaw holders, 1.2% buybacks/burns, 65% staked/locked, ~$4M mcap cited. Same-dev claim as Quotrons. Only interesting if the pad actually ships.

## RWA hook

No unless the pad quotes official Stock Tokens.

## Thesis

Pad-equity rumor attached to an NFT. Wait for the pad URL and fee-split txs.

## Mechanics

Token + NFT multiplier on staking. Royalties claimed to buyback/burn.

## Risks

Dev claim is CT. Pad delay. $4M is a cited print.

## Contracts

- none pinned

## Links

- [X](https://x.com/RobinWifHat)

## Feed

### 2026-08-25 · What people are saying · Pad this week, same-dev claim

Fee split 1.7 / 0.5 / 1.2. NFT 2x multiplier. Quotrons overlap claimed via @crypto_czar_eth / @cruelhandeth.

_@ibweb3eth_
