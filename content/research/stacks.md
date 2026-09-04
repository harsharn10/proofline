---
slug: stacks
coverage: stub
methodology_version: proofline-v1.0
---

# STACKS — research record

## Identity

STACKS is classified as Stock-paired token factory.

A stock-paired launchpad that mints autocompounding ERC-20s into Uniswap v4 pools quoted against Robinhood stock tokens. A user launches or trades on stacksapp.us; $STACKS itself is the protocol token in the STACKS/SPY book. Factory 0x13ae…0a36 is in the site bundle; no official handle was confirmed this pass.

Themes: launchpad, stock-paired:SPY, rwa, memecoin

## Deployment

STACKS token: 0xD998cEac55FEF3319B8bcDc4349C7A9CeBB1D94C on robinhood-chain. [verified S1 S5 S7]

STACKS launch factory (site JS M2): 0x13ae003F22E4A3A8009dCE9a53a500a40E3E0a36 on robinhood-chain. [verified S3 S4 S6 S21]

burnReserve / staking (token.burnReserve and site JS ITe): 0x73f9eb020BF091C8F6b42Eb8c6362D779478c650 on robinhood-chain. [verified S4 S6 S21]

SPY Stock Token (pair quote / rhj rail): 0x117cc2133c37B721F49dE2A7a74833232B3B4C0C on robinhood-chain. [verified S7 S12 S16]

## Control

token owner() reverts. factory owner() reverts. Deployer 0xD386…7D3 has no code and created the factory (2026-09-02T13:15:36Z), staking/burnReserve (13:15:35Z), and later called setStaking / setAdminWallet / setStakingShareBps on 0x6Dda…D168. [verified S5 S6 S15]

## Security

Token, factory, and staking are unverified on Blockscout. No audit report URL was located this pass. [verified S1 S3] [unknown]

## Engineering

_Research pending._

## Team

stacksapp.us titles STACKS — Autocompounding Token Launchpad. The JS bundle hardcodes token 0xD998…D94C and factory 0x13ae…0a36, so the domain is confirmed against the CA. DexScreener lists x.com/StacksAppRH; that bio embeds the CA. The JS bundle has no StacksAppRH string this pass. Flag unconfirmed-official. [claim S7 S13 S21]

## Product and economics

Factory 0x13ae…0a36 (site JS M2) is unverified. Tx 0xcf2c…ac462 from EOA 0xD386…7D3 at 2026-09-02T19:38:40Z called selector 0xca4fec1c with name Stacks, symbol STACKS, stock SPY 0x117c…4C0C. The token minted 10e6 to the factory and 2e6 to burnReserve 0x73f9…c650; the factory then sent ~10e6 into Uniswap v4 PoolManager 0x8366…0951. Pair id 0x77d0…5e32. [verified S4 S5 S18]

Site JS: every launch mints twelve million — 10M to the locked pool, 2M to the burn reserve — and compounds along one fixed log curve to 1.2 billion in three months. Token isUncapped() returns true. factory() on the token reverts. The same factory earlier used launch(string,string,address,uint256) 0x940390c2 for CNRY. Secondary STACKS/USDG and STACKS/ETH books exist on DexScreener with far less liquidity than the SPY book. [verified S6 S7 S21]

STACKS/SPY Uniswap v4 24h volume is 1917405.94 USD and reserve_in_usd is 206080.85 at 2026-09-03T03:53:00Z from the Gecko pool endpoint. Gecko token fdv_usd is 909432.43 at 03:47Z; Gecko token volume_usd.h24 is 1939691.25 across all pools. Gecko pool fdv_usd 13551892 is SPY-as-base. [claim S8 S9]

DexScreener same pair: liquidity.usd 131986.04, volume.h24 1999790.43, fdv/marketCap 1011951 at 03:50Z. Blockscout holders_count 799. Pair created 2026-09-02T19:38:40Z. [claim S1 S7]

## Communications

@StacksAppRH posted full whitepaper coming tomorrow [claim S13]

@StacksAppRH posted over 5 million STACKS burned [claim S19]

@StacksAppRH posted staking works and is live [claim S20]

@leakmealpha posted STACKS live bound to SPY [claim S10]

## Findings

USD liquidity figures on the STACKS/SPY book count both sides, and the quote side is SPY, not USDG. Gecko names the pool SPY / STACKS 3% with SPY as base, so pool fdv_usd is not the STACKS fdv. Factory and token source are unverified. @StacksAppRH is unconfirmed-official. A second STACKS ticker (0xe7fC…1E18, Stacks App / AI) sits on the same chain. [claim S14]

- Factory and token source unverified; owner() reverts but deployer txs include setAdminWallet on a related contract. [verified S3 S6]
- Pool USD reserve is STACKS plus SPY, not a USDG or WETH backstop. [claim S7 S8]
- Gecko pool fdv_usd is not the STACKS fdv. [claim S8 S9]
- Handle is unconfirmed-official. [claim S7 S13]
- Second STACKS ticker 0xe7fC…1E18 (Stacks App / AI) and Stacks L1 STX are different names. [verified S6 S7]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/factory/staking/SPY and launch/create txs, RPC name/symbol/isUncapped/burnReserve/launchOpen, DexScreener token + STRATTON/PAIR collide, Gecko pool/token, /rhj/assets, stacksapp.us + JS, @StacksAppRH posts, @leakmealpha were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S8 S12]
- Numbers: 1917405.94 is the Gecko SPY/STACKS pool 24h volume, not the 1939691.25 token all-pools figure. Reserve 206080.85 is that pool. DexScreener 1999790.43 / 131986.04 is the same pair, different aggregator. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that STACKS is packed PAIR (same SPY rail) or STRATTON or the Stacks L1. PAIR is 0x6b1d…66be / 0xf224…c001 / pair.fun; STRATTON is 0xb7ea…8360 / 0xa2c4…9274; this CA is 0xD998…D94C / 0x77d0…5e32 / stacksapp.us. [inference S7 S11 S17]

## Sources

- S1 — Token 0xD998…D94C Stacks / STACKS.
- S3 — Address 0x13ae…0a36 STACKS factory.
- S4 — factory 0xca4fec1c tx 0xcf2c0234…ac462.
- S5 — eth_getCode, name, symbol, isUncapped, burnReserve on STACKS.
- S6 — factory launchOpen(), code sizes vs PAIR/STRATTON.
- S7 — latest/dex/tokens STACKS.
- S8 — SPY/STACKS Uniswap v4 pool.
- S9 — Stacks token.
- S10 — NEW PROJECT @stacksapprh live.
- S11 — STRATTON/SPY pair (collide-check).
- S12 — GET /rhj/assets Stock Token registry.
- S13 — Full whitepaper coming tomorrow.
- S14 — STACKS — Autocompounding Token Launchpad.
- S15 — Factory creation tx 0x50942ac6…2fb4.
- S16 — Token 0x117c…4C0C SPY.
- S17 — PAIR token pairs (collide-check).
- S18 — STACKS mints in 0xcf2c0234…ac462.
- S19 — over 5 million $STACKS burned.
- S20 — Staking works and is live.
- S21 — JS bundle token, factory, staking constants.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:53:00Z; methodology_version: proofline-v1.0.
