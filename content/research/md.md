---
slug: md
coverage: stub
methodology_version: proofline-v1.0
---

# MD — research record

## Identity

MD is classified as Stock-paired token.

A one-billion-supply ERC-20 cloned into a Uniswap v4 pool quoted against AMD. LongLauncher.create from 0xe5d5…b644 minted A Machine Duck (MD) on 2026-08-28T18:37:52Z into pool 0x197d…9655 via DopplerERC20V1Factory and Airlock. Traders buy and sell MD against the AMD Robinhood Token. AMD is the quote rail, not the subject. No official site was located this pass. DexScreener lists @AMachineDuck without a bidirectional official-crosslink.

Themes: memecoin, stock-paired:AMD, rwa

## Deployment

MD token (EIP-1167 DopplerERC20V1 clone): 0x3abb8d686dF6e538bb0887917d14f04f705f1e18 on robinhood-chain. [verified S1 S4 S5]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [verified S2 S5]

DopplerERC20V1Factory (create tokenFactory): 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [claim S3 S4 S5]

LongLauncher (create() target): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [verified S4 S13]

Airlock (token owner()): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [claim S5 S6 S14]

AMD • Robinhood Token (pair quote / numeraire / rail): 0x86923f96303D656E4aa86D9d42D1e57ad2023fdC on robinhood-chain. [verified S11 S12]

## Control

token owner() is Airlock 0xeb7C…0862. Airlock owner() is 0x21E2…7A66. Create-from 0xe5d5…b644 has no code. Lock splits 5% to that Airlock owner and 95% to 0x36eF…4556 (code prefix 0xef0100). [verified S6 S15]

## Security

DopplerERC20V1 and DopplerERC20V1Factory are partially verified on Blockscout (src/tokens/DopplerERC20V1.sol, src/tokens/DopplerERC20V1Factory.sol, compiler v0.8.26). LongLauncher is verified (src/LongLauncher.sol). The token page is a verified EIP-1167 shell only. No audit report URL was located this pass. [verified S2 S3 S13] [unknown]

## Engineering

_Research pending._

## Team

No official domain was located. DexScreener info.websites is the LONG pad URL. Gecko websites and twitter_handle are empty. @AMachineDuck bio and posts embed CA 0x3abb…1e18; flag unconfirmed-official. [claim S7 S10 S19]

AMD Inc. is the listed issuer of the quote rail. GET /rhj/assets names that rail AMD • Robinhood Token at 0x8692…3fdC. That is a dependency, not this token. [verified S11 S12]

## Product and economics

LongLauncher 0x22e9…eeED create() from 0xe5d5…b644 at 2026-08-28T18:37:52Z minted A Machine Duck / MD supply 1e9*1e18 into Uniswap v4 poolId 0x197d…9655 quoted against AMD. Token is an EIP-1167 clone of DopplerERC20V1 0x3Be8…C599. owner() is Airlock. isPoolLocked true and pool() is 0xdead. [verified S4 S5 S6 S15]

Verified create path pairs against factory numeraire AMD 0x8692…3fdC. PoolManager is 0x8366…0951. Hook is DopplerHookInitializer 0x4e34…a544. Secondary MD/USDG and MD/ETH books exist on DexScreener with far less liquidity than the AMD book. [verified S6 S7 S8]

MD/AMD Uniswap v4 24h volume is 331097.89 USD and reserve_in_usd is 139439.43 at 2026-09-03T04:05:00Z from the Gecko pool endpoint. fdv_usd is 308460.38. Gecko token volume_usd.h24 is 331827.23 across all pools, not the AMD book. [claim S8 S9]

DexScreener same pair: liquidity.usd 143796.32, volume.h24 342194.33, fdv/marketCap 317394. Blockscout holders_count 391. Pair created 2026-08-28T18:37:52Z. [claim S1 S7]

Assignment lead of DexScreener liq ~$138,083 / vol ~$340,881 is the same MD/AMD book; live DexScreener this pass is 143796.32 / 342194.33. [claim S7]

## Communications

@nvtcho compared MD/AMD mcap to AI/NVDA [claim S16]

@AMachineDuck posted the CA with $MD [claim S19]

@ChudCrentis listed MD/AMD among stock pairs [claim S17]

@ChrisL9696 called MD the AMD-pair runner still quiet [claim S18]

## Findings

USD liquidity figures on the MD/AMD book count both sides, and the quote side is AMD, not USDG. DexScreener and Gecko disagree on the same pool's USD reserve. Four same-name MD copycat tokens exist on Blockscout with 0–1 holders. No official handle was located, so comms surfaces stay unconfirmed-official. [claim S11]

- Quote token AMD 0x8692…3fdC is a Robinhood Stock Token rail; MD is not AMD. [verified S11 S12]
- Pool USD reserve is MD plus AMD, not a USDG or WETH backstop. [claim S7 S8]
- No official handle or domain this pass; @AMachineDuck is unconfirmed-official. [claim S7 S19]
- Same-name MD copycats exist with 0–1 holders. [verified S21]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/impl/factory/AMD and the create tx, RPC name/symbol/owner/isPoolLocked/pool/tokenURI, DexScreener, Gecko pool/token/info, /rhj/assets, Bankr launches, CHIP/MEOW/GB DexScreener rows, and the @AMachineDuck / @nvtcho / @ChrisL9696 / @ChudCrentis posts were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S8 S11]
- Numbers: 331097.89 is the Gecko MD/AMD pool 24h volume, not the 331827.23 token all-pools figure. Reserve 139439.43 is that pool. DexScreener 342194.33 / 143796.32 is the same pair, different aggregator. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that MD is CHIP, MEOW, or GB, or that Gecko's bankr-robinhood dex id means Bankr minted it. CHIP/MEOW/GB are different token addresses on AMD books. Create tx is LongLauncher; Bankr latest 50 has no MD. [inference S4 S22 S23]

## Sources

- S1 — Token 0x3abb…1e18 A Machine Duck / MD.
- S2 — Address 0x3Be8…C599 DopplerERC20V1.
- S3 — Address 0x1B37…b69a DopplerERC20V1Factory.
- S4 — LongLauncher create tx 0xbd6eb9f3…29e3.
- S5 — eth_getCode, name, symbol, owner() on MD.
- S6 — isPoolLocked, pool(), tokenURI, Airlock owner(), AMD name.
- S7 — latest/dex/tokens MD.
- S8 — MD/AMD Uniswap v4 pool.
- S9 — A Machine Duck token.
- S10 — A Machine Duck token info.
- S11 — GET /rhj/assets Stock Token registry.
- S12 — Token 0x8692…3fdC AMD • Robinhood Token.
- S13 — LongLauncher 0x22e9…eeED.
- S14 — Airlock 0xeb7C…0862.
- S15 — LaunchCreated log for MD.
- S16 — why is $md paired with amd at only 288k.
- S17 — VACCINU/MRNA among stock pairs including MD/AMD.
- S18 — MD paired with AMD is not getting recognition.
- S19 — do a barrel roll $MD CA.
- S21 — Search A Machine Duck copycat tokens.
- S22 — CHIP / MEOW / GB AMD books.
- S23 — GET /token-launches latest 50.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:12:00Z; methodology_version: proofline-v1.0.
