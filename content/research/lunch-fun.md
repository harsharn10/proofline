---
slug: lunch-fun
coverage: stub
methodology_version: proofline-v1.0
---

# lunch.fun — research record

## Identity

lunch.fun is classified as Uniswap-pool launchpad.

A free one-click memecoin launchpad on Robinhood Chain. A user mints a 1 billion-supply ERC-20 in one transaction into a locked Uniswap V3 or V4 pool, quoted against ETH, USDG, a Robinhood stock token, or lunch's custom HOOD pair. Creators pick V3 1% fees or a V4 tax with holder rewards. Ticker Mog LLC runs it at lunch.fun as @lunchdotfun.

Themes: launchpad, rwa, memecoin, stock-paired:HOOD, hook

## Deployment

Launcher (V3, ETH): 0xf5Ac14e7691EF44b15b59FcC6a756e41A3E5EFd6 on robinhood-chain. [verified S3 S8 S9]

V4 launcher (ETH, tax): 0xC783221AB1db0244203458417981B4631E80B988 on robinhood-chain. [verified S3 S8 S9]

Stock/USDG-pair launcher (V3): 0x568E12B312751992DCfE387CFc8EC7D63E941103 on robinhood-chain. [verified S3 S8 S9 S10]

Stock/USDG-pair launcher (V4, tax + rewards): 0x6Fda94ACEEDC5a97171469a8873d00fB9983Bb8c on robinhood-chain. [verified S3 S8 S9 S12]

V4 pair tax hook (stock/USDG): 0x4Eb1976978756Bd56802d8162f2271844924e0cc on robinhood-chain. [claim S3 S8 S9]

V4 pair LP locker (stock/USDG): 0xeF785Ad4eea3cffA6C66F77eb454a61D544Be4b6 on robinhood-chain. [claim S3 S8 S9]

Swole Cat (SWOLE): 0x2f36bA966BF29F702Bb290245406a5b0e3e1a66E on robinhood-chain. [verified S4 S10 S14]

hotdog (HOTDOG): 0x45443A4a7b58ab26A4B4D72616cf36D5aAE7188C on robinhood-chain. [verified S4 S10]

Walnut Furnishings Corporation (WFNT): 0x01d6E058A31C8bFda50E60Cb0d19aE546bAA3A20 on robinhood-chain. [claim S4 S12]

Custom HOOD pair (HoodLighterShare): 0x32aC8C1D7672667D5EbdEa22935F7B06fC8D496f on robinhood-chain. [verified S5 S10 S14]

Launcher owner: 0x7B2DaF7F696bB844C7786693062D6619D1858cC9 on robinhood-chain. [verified S8 S9 S13]

## Control

Docs name four launchers on chain 4663. Each is an ERC1967 proxy with verified implementation (LunchV3LauncherSingle, LunchV4Launcher, LunchV3PairLauncherFrozen, LunchV4PairLauncher). owner() on all four returns EOA 0x7B2D…8cC9. SWOLE and HOTDOG creator is the V3 pair launcher; WFNT creator is the V4 pair launcher. [verified S8 S9 S10 S12]

## Security

No audit report URL was located on the site, docs, terms, X profile or GitHub org this pass. [unknown]

## Engineering

_Research pending._

## Team

lunch.fun sets twitter:site to @lunchdotfun and schema.org sameAs to https://x.com/lunchdotfun. The @lunchdotfun bio links lunch.fun. Terms name Ticker Mog LLC, a British Virgin Islands limited liability company, as operator. GitHub org lunchdotfun exists with 0 public repositories and is not linked from the site. [verified S1 S6] [claim S15 S17]

Not LONG: different domain, handle and launcher stack. Not PAIR: PAIR is pair.fund, not a census row, and is a multipool stock-basket pad. [unknown]

## Product and economics

A launch is one transaction: name, ticker, image, optional pair and optional dev buy. Supply is fixed at 1,000,000,000. Docs say there is no launch fee besides gas. V3 places the whole supply as a single-sided full-range Uniswap V3 position; a ~4 ETH net-buy mark is an indexer graduation badge, not an LP migration. [claim S3]

V3 swap fee is 1%, split 0.5% creator / 0.3% platform / 0.2% back into the pool. V4 tax launches use a shared hook, buy/sell tax up to 5% per side, 80% creator / 20% platform, optional holder rewards, and locked auto-compounding LP. [claim S1 S3]

Pair selector lists ETH, USDG and Robinhood stocks. HOTDOG's DexScreener book quotes Costco • Robinhood Token 0x4EA0…44C2. SWOLE and WFNT quote HoodLighterShare 0x32aC…496f (token HOOD), the custom HOOD pair named by @lunchdotfun, not LONG's Airlock path and not PAIR's basket pools. [verified S10 S11 S14] [claim S5]

GET /api/launches returned total 2226 on 2026-09-03. [verified S4]

@RHDaily__ 1 Sep board: @lunchdotfun $2.8M 24h, sixth. That is a social board, not a chain-slice adapter. [claim S16]

DexScreener SWOLE/HOOD Uniswap pair 0x09Df…ccB6 on 2026-09-03: liquidity 111,754.88 USD, 24h volume 1,123,483.32 USD, market cap 794,154 USD. SWOLE holders 1,109; HoodLighterShare holders 8,378. [claim S10 S14]

api.llama.fi/protocol/lunch, lunch-fun, lunchdotfun and lunch.fun all returned 400 Protocol not found. [unknown]

## Communications

@lunchdotfun quotes Solana supercycle as robinhood [claim S19]

@lunchdotfun: Lighter HOOD backing above $500k [claim S5]

@RHDaily__ lists @lunchdotfun sixth at $2.8M 24h [claim S16]

@lunchdotfun: lunch has all 195 stock pairs [claim S7]

@lunchdotfun: HOOD pairs 80% of Lighter volume [claim S20]

@lunchdotfun: dividends live, including $HOOD pair [claim S21]

@lunchdotfun: HOOD pair live, 89 stocks on lunch.fun [claim S22]

## Findings

The four launchers, V4 pair hook and V4 pair locker are ERC1967 proxies whose owner() is one EOA with no code; this pass did not find a timelock. A lunch HOOD pair is HoodLighterShare, not a Robinhood Stock Token, so a HOOD ticker is not a registry match. Docs publish four launchers and no contract labeled factory. [claim S1]

- Four launcher proxies, the V4 pair hook and the V4 pair locker share owner() EOA 0x7B2D…8cC9 with empty code; no timelock was found in the docs table. [verified S8 S13]
- Custom HOOD quote 0x32aC…496f is HoodLighterShare, not a Robinhood Stock Token. [verified S10 S14]
- Docs publish four launchers and no contract labeled factory. [claim S3]
- No audit report was located this pass. [unknown]
- V4 docs say the creator can change buy/sell tax up to 5% per side after launch. [claim S3]

- Receipts: lunch.fun, /docs, /api/launches, /terms, @lunchdotfun profile and the dated posts above, Blockscout API v2, RPC eth_getCode/owner(), DexScreener SWOLE, GitHub org lunchdotfun, and the @RHDaily__ board were opened on 2026-09-03; excerpts are copied from those pages. [verified S1 S3 S4 S8 S9 S10 S14]
- Numbers: 2,226 is the launches API total, not TVL. $2.8M is the 1 Sep social board. SWOLE 24h volume and market cap are the DexScreener Robinhood Uniswap pair, not an all-chains figure. [verified S4] [claim S14 S16]
- Adversarial: the strongest contrary reading is that lunch.fun is LONG or PAIR under another name, or that HoodLighterShare is the official HOOD Stock Token. Domains, handles and launcher bytecode names differ from LONG; PAIR is pair.fund and not in the census; HoodLighterShare's explorer name is not a Robinhood Token suffix. [verified S9 S10]

## Sources

- S1 — lunch.fun home.
- S3 — How lunch works, in detail.
- S4 — GET /api/launches JSON.
- S5 — Lighter HOOD backing surpassed $500k.
- S6 — Lunch on Robinhood profile.
- S7 — lunch has all the stock pairs you need. All 195 of them.
- S8 — eth_getCode and owner() on lunch launchers.
- S9 — Launcher proxy pages.
- S10 — SWOLE, HOTDOG, HoodLighterShare.
- S11 — COST Costco • Robinhood Token.
- S12 — WFNT LunchTokenDividend.
- S13 — Launcher owner 0x7B2D…8cC9.
- S14 — SWOLE token pairs on Robinhood.
- S15 — Terms of Use — lunch.
- S16 — Top Robinhood Chain Launchpads by 24H Volume.
- S17 — Organization lunchdotfun.
- S19 — robinhood.
- S20 — lunch $HOOD pairs 80% of Lighter volume.
- S21 — dividends paid out on lunch.fun.
- S22 — Robinhood Markets (HOOD) is now available as a pair.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:05:00Z; methodology_version: proofline-v1.0.
