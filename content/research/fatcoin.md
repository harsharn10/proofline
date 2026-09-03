---
slug: fatcoin
coverage: stub
methodology_version: proofline-v1.0
---

# FATCOIN — research record

## Identity

FATCOIN is classified as Stock-paired token.

A one-billion-supply ERC-20 created into a Uniswap v4 pool quoted against LLY. Historical RWAERC20LaunchpadFactory deploys FATCOIN in one createLaunch call and seeds the FATCOIN/LLY book. Traders buy and sell FATCOIN on Uniswap v4. LLY is the Robinhood stock-token rail, not the project. No official domain was located this pass; DexScreener lists x.com/FatcoinLLY without a CA in that profile bio.

Themes: memecoin, stock-paired:LLY, rwa

## Deployment

FATCOIN token: 0x12D5ee7917cA430073C3A638ee1e6f0648A98a01 on robinhood-chain. [verified S1 S2 S5 S18]

o1 historical RWAERC20LaunchpadFactory (createLaunch): 0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297 on robinhood-chain. [verified S3 S4 S5 S6]

Historical LaunchHook (launch mint recipient): 0x778b0c4EeA7D35D66513B587bA87FC9084b0EaCC on robinhood-chain. [verified S4 S6 S16]

Eli Lilly Robinhood Token (pair quote): 0x8005d266423c7ea827372c9c864491e5786600ea on robinhood-chain. [verified S6 S12 S13]

## Control

`owner()` on the token reverts. The contract is not a proxy (EIP-1967 slots zero; 4657 bytes of runtime code). Token source is_verified false. LaunchHook and the historical factory are verified as `LaunchHook` / `RWAERC20LaunchpadFactory`. Factory `owner()` is EOA `0x5519a8…044D` with no code. [verified S1 S3 S5 S6 S16]

The createLaunch sender is EOA `0xf372…b995` with no code. CreatorRegistered points at that address. [verified S4 S6]

## Security

No audit report URL was located this pass. [unknown]

## Engineering

_Research pending._

## Team

No official domain was located. DexScreener info.websites is an X Community URL. DexScreener info.socials lists `x.com/FatcoinLLY`. That profile titles Fatcoin (@FatcoinLLY), bios $FATCOIN and $LLY with no contract, and links the DexScreener pair. Flag unconfirmed-official. [claim S7 S14]

Netlify vote URLs that embed the CA are third-party-link and copypasta-pattern. [claim S17]

## Product and economics

FATCOIN is an ERC-20 at `0x12D5ee7917cA430073C3A638ee1e6f0648A98a01`. The launch book is Uniswap v4 FATCOIN/LLY (`0x46ba8216…af85`) with quote `0x8005d266423c7ea827372c9c864491e5786600ea`. [verified S1 S4 S7]

The token was created on 2026-09-01T14:34:31Z by `createLaunch` on historical `RWAERC20LaunchpadFactory` `0xe64A…F297`. The call named FATCOIN / FATCOIN and quoted LLY. `Launched` records pool id `0x46ba8216…af85`. Almost the full 1e27 supply moved to LaunchHook `0x778b…EaCC` then into PoolManager `0x8366…0951`. Current factory `0xcE9C…5B0d` had no `Launched` log for this token; `launchCreationEnabled()` on the historical factory is false. [verified S4 S5 S6 S18]

DexScreener also lists FATCOIN/USDG Uniswap v4 books and FATCOIN/ETH books. LLY remains the launch quote. [verified S7 S19]

PEPTIDES `0x52F380A5…1e18` is a LongLauncher Doppler clone against the same LLY rail. A second FATCOIN ticker at `0xb68C…03Ba4` is a PonsV2LauncherToken with holders_count 11 and a much smaller LLY book. They are not this CA. [verified S7 S15]

FATCOIN/LLY Uniswap v4 24h volume is 1766901.39 USD and reserve_in_usd is 68705.03 at 2026-09-03T03:45:00Z from the Gecko pool endpoint. fdv_usd is 402213.32. Gecko token volume_usd.h24 is 2915859.50 across listed pools, not the LLY book. [claim S8 S9]

DexScreener same pair: liquidity.usd 76140.78, volume.h24 1792589.86, fdv/marketCap 413306. Blockscout holders_count 3437. Pair created 2026-09-01T14:34:31Z. Assignment hint ~$78,420 / ~$1,817,912 was not reproduced exactly; live DexScreener is the LLY book. [claim S1 S7]

Gecko token/pools row 2 FATCOIN/USDG 4.012% printed reserve_in_usd 79300.06 against DexScreener liquidity.usd 18060.49 on the same pool id. trending_pools duration=24h first eight did not include FATCOIN this pass. [claim S19]

## Communications

@FatcoinLLY profile lists the FATCOIN/LLY DexScreener pair [claim S14]

Netlify vote posts embedded the FATCOIN CA [claim S17]

@travisbickle0x named @FatcoinLLY as the FATCOIN/LLY ticket [claim S20]

## Findings

USD liquidity figures on the FATCOIN/LLY book count both sides, and DexScreener and Gecko disagree on the same pool. A later Pons FATCOIN or PEPTIDES/LLY book is a different address. Token source is unverified and the Blockscout address page still has a null creator. The X handle is unconfirmed-official. [claim S12]

- DexScreener and Gecko disagree on FATCOIN/LLY USD liquidity, volume, and FDV. [verified S7 S8]
- Pool USD reserve is FATCOIN plus LLY, not a USDG or WETH backstop. [claim S7 S8]
- No official handle or domain this pass; X is unconfirmed-official. [claim S7 S14]
- Token source is_verified false; Blockscout creator fields null. [verified S1]
- A second FATCOIN ticker exists at 0xb68C…03Ba4 against LLY via Pons. [verified S15]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/factory/hook/LLY and the createLaunch tx plus logs, RPC name/symbol/factory/owner/hook/launchCreationEnabled, DexScreener, Gecko pool/token/pools, /rhj/assets, @FatcoinLLY profile, the Pons ticker collision, and the netlify vote posts were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S8 S12]
- Numbers: 1766901.39 is the Gecko FATCOIN/LLY pool 24h volume, not the 2915859.50 token all-pools figure. Reserve 68705.03 is that pool. DexScreener 1792589.86 / 76140.78 is the same pair, different aggregator. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that FATCOIN is PEPTIDES, the Pons FATCOIN, or an official Eli Lilly product. PEPTIDES is a different address and LongLauncher factory. The Pons clone has 11 holders. LLY is the /rhj/assets rail, not the project. [inference S12 S13 S15]

## Sources

- S1 — Token 0x12D5ee79…8a01 FATCOIN.
- S2 — Token API 0x12D5ee79…8a01.
- S3 — Address 0xe64A…F297 RWAERC20LaunchpadFactory.
- S4 — createLaunch tx 0xdda08489…3b88.
- S5 — eth_getCode, name, symbol, factory() on FATCOIN.
- S6 — factory owner(), hook(), launchCreationEnabled(), Launched logs.
- S7 — latest/dex/tokens FATCOIN.
- S8 — FATCOIN/LLY Uniswap v4 pool.
- S9 — FATCOIN token.
- S12 — GET /rhj/assets Stock Token registry.
- S13 — Token 0x8005d266…00ea Eli Lilly Robinhood Token.
- S14 — Fatcoin profile.
- S15 — latest/dex/tokens Pons FATCOIN 0xb68C…03Ba4.
- S16 — Address 0x778b…EaCC LaunchHook.
- S17 — $FATCOIN listing vote netlify URL.
- S18 — Launched log for FATCOIN.
- S19 — FATCOIN token pools.
- S20 — FATCOIN greatest ticket paired with LLY.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:50:00Z; methodology_version: proofline-v1.0.
