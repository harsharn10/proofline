---
slug: retard
coverage: stub
methodology_version: proofline-v1.0
---

# RETARD — research record

## Identity

RETARD is classified as Stock-paired token.

A one-billion-supply ERC-20 created into a Uniswap v4 pool quoted against LLY. Historical RWAERC20LaunchpadFactory deploys Retardatide (RETARD) in one createLaunch call and seeds the RETARD/LLY book. Traders buy and sell RETARD on Uniswap v4. LLY is the Robinhood stock-token rail, not the project. No official domain was located this pass; DexScreener lists x.com/buyretardatide without a CA in that profile bio.

Themes: memecoin, stock-paired:LLY, rwa, graduation:o1-exchange

## Deployment

RETARD token: 0xEF455BEE1E4Fa2974A7111d0DC9a1E53660A4501 on robinhood-chain. [verified S1 S5 S18]

o1 historical RWAERC20LaunchpadFactory (createLaunch): 0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297 on robinhood-chain. [verified S3 S4 S5 S6]

Historical LaunchHook (launch mint recipient): 0x778b0c4EeA7D35D66513B587bA87FC9084b0EaCC on robinhood-chain. [verified S4 S6 S16]

Eli Lilly Robinhood Token (pair quote / rail): 0x8005d266423c7ea827372c9c864491e5786600ea on robinhood-chain. [verified S6 S12 S13]

## Control

`owner()` on the token reverts. The contract is not a proxy (EIP-1967 slots zero; 4657 bytes of runtime code). Token source is_verified false. LaunchHook and the historical factory are verified as `LaunchHook` / `RWAERC20LaunchpadFactory`. Factory `owner()` is EOA `0x5519a8…044D` with no code. [verified S1 S3 S5 S6 S16]

The createLaunch sender is EOA `0x0000006b…7A16` with no code. CreatorRegistered points at that address. [verified S4 S6]

## Security

No audit report URL was located this pass. [unknown]

## Engineering

_Research pending._

## Team

No official domain was located. DexScreener info.websites is empty. DexScreener info.socials lists `x.com/buyretardatide`. That profile titles Retardatide (@BuyRetardatide), bios LLY with no contract, and posted the CA at 2026-09-01T22:49:15Z. Flag unconfirmed-official. [claim S7 S10 S14]

## Product and economics

RETARD is an ERC-20 at `0xEF455BEE1E4Fa2974A7111d0DC9a1E53660A4501`. The launch book is Uniswap v4 RETARD/LLY (`0xffb47e86…219f`) with quote `0x8005d266423c7ea827372c9c864491e5786600ea`. [verified S1 S4 S7]

The token was created on 2026-09-01T21:49:27Z by `createLaunch` on historical `RWAERC20LaunchpadFactory` `0xe64A…F297`. The call named Retardatide / RETARD and quoted LLY. `Launched` records pool id `0xffb47e86…219f`. Almost the full 1e27 supply moved to LaunchHook `0x778b…EaCC` then into PoolManager `0x8366…0951`. Current factory `0xcE9C…5B0d` had no `Launched` log for this token; `launchCreationEnabled()` on the historical factory is false. [verified S4 S5 S6 S18]

DexScreener also lists RETARD/USDG Uniswap v4 books and RETARD/ETH books. LLY remains the launch quote. [verified S7 S19]

PEPTIDES `0x52F380A5…1e18` is a LongLauncher Doppler clone against the same LLY rail. FATCOIN `0x12D5ee79…8a01` is a different createLaunch on the same historical factory. A Doppler RETARDATIDE ticker at `0x04bDFE41…1E18` has holders_count 6 and a much smaller LLY book. They are not this CA. [verified S7 S15 S21]

RETARD/LLY Uniswap v4 24h volume is 324451.63 USD and reserve_in_usd is 28871.55 at 2026-09-03T05:23:00Z from the Gecko pool endpoint. Gecko token fdv_usd is 62269.98. Gecko token volume_usd.h24 is 342750.84 across listed pools, not the LLY book. [claim S8 S9]

DexScreener same pair: liquidity.usd 26045.01, volume.h24 332037.96, fdv/marketCap 57783. Blockscout holders_count 517. Pair created 2026-09-01T21:49:27Z. Assignment hint ~$27,909 / ~$681,214 was not reproduced exactly; live DexScreener is the LLY book at lower 24h volume. [claim S1 S7]

Gecko pool GET names the book LLY / RETARD and prints fdv_usd 1206569.37 with base_token_price_usd 1169.70 (LLY). Gecko token/pools row 1 on the same pool id prints fdv_usd 62269.98. [claim S8 S19]

## Communications

@BuyRetardatide posted the RETARD CA with Retardatide/LLY on RH [claim S10 S14]

@BuyRetardatide posted RETARD token notes 07-02 [claim S11]

@meliboi_sama posted the RETARD CA [claim S17]

## Findings

USD liquidity figures on the RETARD/LLY book count both sides, and Gecko's pool GET reports an LLY-as-base FDV about 20 times the RETARD fdv on DexScreener and the Gecko token endpoint. A later Doppler RETARDATIDE or WETH RETARD book is a different address. Token source is unverified. The X handle is unconfirmed-official. [claim S12]

- Gecko pool GET FDV treats LLY as base and disagrees with DexScreener and the Gecko token endpoint by about 20x. [verified S7 S8 S9]
- Pool USD reserve is RETARD plus LLY, not a USDG or WETH backstop. [claim S7 S8]
- No official handle or domain this pass; X is unconfirmed-official. [claim S7 S14]
- Token source is_verified false. [verified S1]
- A second RETARD ticker exists at 0x04bDFE41…1E18 against LLY via Doppler. [verified S21]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/deployer/factory/LaunchHook/LLY and the createLaunch tx plus logs, RPC name/symbol/factory/owner/hook/tokenDeployer/quotes, DexScreener tokens and search, Gecko pool/token/pools, /rhj/assets, and @BuyRetardatide were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S8 S12]
- Numbers: 324451.63 is the Gecko RETARD/LLY pool 24h volume, not the 342750.84 token all-pools figure. Reserve 28871.55 is that pool. DexScreener 332037.96 / 26045.01 is the same pair, different aggregator. Gecko pool GET fdv 1206569.37 is LLY-as-base, not RETARD fdv. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that this is PEPTIDES or FATCOIN, or the Doppler RETARDATIDE 0x04bD…, or that current o1 factory 0xcE9C…5B0d launched it. Different CAs, factories, and holder counts argue against the first; Launched is on 0xe64A…F297 and current-factory topic1 search returned 0 logs. [verified S4 S6 S15 S21]

## Sources

- S1 — Token 0xEF455BEE…4501 Retardatide / RETARD.
- S3 — Address 0xe64A…F297 RWAERC20LaunchpadFactory.
- S4 — createLaunch tx 0xcc8e9ff5…02aa.
- S5 — eth_getCode, name, symbol, factory() on RETARD.
- S6 — factory owner(), hook(), launchCreationEnabled(), Launched logs.
- S7 — latest/dex/tokens RETARD.
- S8 — RETARD/LLY Uniswap v4 pool.
- S9 — Retardatide token.
- S10 — Retardatide/LLY CA post.
- S11 — Retardatide token notes 07-02.
- S12 — GET /rhj/assets Stock Token registry.
- S13 — Token 0x8005d266…00ea Eli Lilly Robinhood Token.
- S14 — Retardatide profile.
- S15 — latest/dex/search RETARD LLY.
- S16 — Address 0x778b…EaCC LaunchHook.
- S17 — $RETARD mcap post with CA.
- S18 — Launched log for RETARD.
- S19 — RETARD token pools.
- S21 — Doppler RETARDATIDE 0x04bDFE41…1E18.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T05:30:00Z; methodology_version: proofline-v1.0.
