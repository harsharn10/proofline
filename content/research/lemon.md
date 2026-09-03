---
slug: lemon
coverage: stub
methodology_version: proofline-v1.0
---

# Lemon — research record

## Identity

Lemon is classified as Uniswap-pool launchpad.

A Uniswap V3 Instant launchpad on Robinhood Chain. A creator sends one transaction through LemonLaunchFactory: the factory deploys a 1-billion fixed-supply ERC-20, seeds a TOKEN/WETH 1% full-range pool, and locks the LP NFT in LemonLaunchLocker. Fees split 30/70 platform/creator. Users launch and trade at lemon.fun, operated as @lemondotfun. Optional stock-dividend vaults and per-coin X agents are claimed on the same site.

Themes: launchpad, memecoin, rwa, agent

## Deployment

LemonLaunchFactory (Instant V3): 0x2bA793Fd69Bf251Fd1Af90b576bE8B9fA6Be46DB on robinhood-chain. [verified S5 S15 S19 S20]

LemonLaunchLocker: 0xC10309Cf03Bc81c121a8270E3A28E159a9296903 on robinhood-chain. [verified S5 S16 S19]

Platform fee receiver / owner EOA: 0xEF2c099803Fff879443009722AA2B9C46E020aB6 on robinhood-chain. [verified S5 S18 S19]

$LEMON.FUN (official pad token): 0xf0E17e54239CD945Cd7bEa471a3a2CA6a8C7f7A3 on robinhood-chain. [verified S9 S17 S19 S21]

LEMON/WETH Uniswap V3 pool: 0x01fe057d1C5FB09A4ac02860758DDf26Df9336B5 on robinhood-chain. [verified S17 S22 S23]

## Control

LemonLaunchFactory and LemonLaunchLocker were created by EOA 0xEF2c…0aB6 on 2026-07-22. `owner()` on both returns that EOA. Docs §7 say the contracts are unowned and that no upgrade proxy is used. Those two owner statements are open as CON-1. [verified S15 S16 S19 S20] [claim S5]

The same EOA is documented as the platform fee receiver. It has no code. [verified S18 S19]

## Security

No audit report was located on the docs, site, X account or a GitHub search this pass. [unknown]

## Engineering

_Research pending._

## Team

lemon.fun footer links @lemondotfun and t.me/lemondotfun. `/leverage/BTC` sets twitter:site to @lemondotfun. The handle's bio is the launch/trade line on @Robinhoodcrypto; profile scrapes list website lemon.fun. Docs name no team entity. [verified S6 S8 S14]

Docs §9 refer to a public repository. No GitHub URL was located this pass. [unknown]

A Bankr-launched token named Lemon Fun at 0xef07…4Ba3 is a DopplerERC20V1 clone with two holders. Official $LEMON.FUN is 0xf0E1…f7A3 from LemonLaunchFactory. Do not merge. [verified S17 S25]

## Product and economics

Instant V3 is the live launch path: one `launchToken` transaction deploys a 1 billion fixed-supply ERC-20, creates a Uniswap V3 TOKEN/WETH 1% pool, seeds a full-range LP NFT, and sends that NFT to LemonLaunchLocker. Docs say there is no bonding phase and no migration on this path. [claim S5 S7] [verified S21]

Pool swap fees are documented as 30% platform / 70% creator, claimable through `LemonLaunchLocker.claim()`. LP principal has no withdraw function in the docs. [claim S5 S7]

A tokenized-stock option nominates a Robinhood stock token; a per-token StockDividendVault is documented as converting fee revenue every 30 minutes and paying 75% of converted stock to holders. The vault factory address is not in the §4 table. [claim S5]

Per-coin X agents are a 22–26 Aug product post: a dedicated X account posts market cap, volume, holder concentration and locked LP, and cannot move funds. Coins launched on Pons or other pads can be linked with a MOVED tag. [claim S11 S12]

`/leverage/BTC` is a BTC-perp terminal. Page meta says trades are signed by the user's wallet on Hyperliquid and never custodied by lemon.fun. The visible chain plate is Hyperliquid on Arbitrum One. [claim S14]

DexScreener LEMON/WETH pair 0x01fe…36B5 on Robinhood: 24h volume 124714 USD, marketCap 735282 USD, liquidity 131443 USD as of 2026-09-03. That is the official-token pair, not an all-chains launchpad total. [claim S22]

Blockscout holders_count on 0xf0E1…f7A3 is 12457. [claim S17]

Homepage showed 682 tokens launched and 24h volume $134.4K across four chains; `/api/public/launchpad/stats` returned totalLaunched 56 and totalGraduated 674 the same hour. Those two counters are not used as metrics. [claim S6] [claim S24]

## Communications

@lemondotfun posts utility-paired coins coming shortly [claim S13]

@lemondotfun ships agentic X launch method [claim S11]

@lemondotfun: each coin gets its own X account [claim S12]

@lemondotfun: $LEMON.FUN listed on Gate Alpha [claim S26]

@lemondotfun: official $LEMON.FUN live on chain 4663 [claim S9]

@lemondotfun: launchpad live through SushiSwap [claim S10]

## Findings

Docs say Instant V3 contracts are unowned; `owner()` on the factory and locker returns the fee-receiver EOA 0xEF2c…0aB6, so fee and admin paths sit with one key until the verified source is read. Stock-dividend vaults and Hyperliquid key custody are documented in copy, not reproduced as a vault factory or a Hyperliquid account this pass. Homepage launch counts do not match the public stats API. [claim S5]

- Factory and locker `owner()` is one EOA, against docs "unowned". [verified S19] [claim S5]
- Stock-dividend vault factory address was not located. [claim S5]
- Hyperliquid perps are a frontend claim; custody was not reproduced on Hyperliquid. [claim S14]
- No audit report was located this pass. [unknown]
- Homepage vs stats API launch counts disagree. [claim S6 S24]

- Receipts: lemon.fun, /docs, /launch, /leverage/BTC, the public token and stats APIs, @lemondotfun profile and six posts, DexScreener pairs, Blockscout factory/locker/token/pool/fee-receiver/create txs, and RPC were opened on 2026-09-03 and excerpts copied from the responses. [verified S5 S15 S19]
- Numbers: 124714 and 735282 are the DexScreener LEMON/WETH chain pair, not an all-chains launchpad total. Holders 12457 is the Blockscout token counter. Homepage 682 / $134.4K and stats API 56 / 674 are not mixed into one figure. [claim S17 S22 S24]
- Adversarial: the strongest contrary reading is that Lemon is only a frontend over Uniswap V3 and Hyperliquid, with no native factory. Verified name LemonLaunchFactory, TokenLaunched logs, and the 2026-07-25 launchToken tx that created 0xf0E1…f7A3 argue the Instant V3 path is native. A second contrary reading is that 0xef07…4Ba3 is the official coin; creator DopplerERC20V1Factory and two holders argue against it. [inference S15 S17 S21 S25]

## Sources

- S5 — Docs — Multi-Chain Launchpad Protocol.
- S6 — Lemon.fun homepage.
- S7 — Launch a Token on Robinhood Chain.
- S8 — Lemon profile.
- S9 — The official Lemon coin $LEMON.FUN is now LIVE.
- S10 — Lemon launchpad is officially LIVE.
- S11 — We just squeezed out the agentic X launch method.
- S12 — On Tuesday we are shipping a new launch method.
- S13 — COMING TO LEMON SHORTLY — UTILITY PAIRED COINS.
- S14 — BTC perp, leverage trading on lemon.fun.
- S15 — Address 0x2bA793Fd69Bf251Fd1Af90b576bE8B9fA6Be46DB.
- S16 — Address 0xC10309Cf03Bc81c121a8270E3A28E159a9296903.
- S17 — Address 0xf0E17e54239CD945Cd7bEa471a3a2CA6a8C7f7A3.
- S18 — Address 0xEF2c099803Fff879443009722AA2B9C46E020aB6.
- S19 — eth_getCode, owner, name, symbol, totalSupply.
- S20 — Factory creation tx 0xecd99121…0126e.
- S21 — launchToken tx 0x48a82224…104d.
- S22 — Robinhood pairs for 0xf0E1…f7A3.
- S23 — Public API token 0xf0e1…f7a3.
- S24 — Public API launchpad stats.
- S25 — Address 0xef0751875ba9aBEd1f5773aD3368EA0eb7A74Ba3.
- S26 — Lemon is officially listed by Gate Alpha.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T02:57:00Z; methodology_version: proofline-v1.0.
