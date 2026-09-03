---
slug: oilinu
coverage: stub
methodology_version: proofline-v1.0
---

# Oilinu — research record

## Identity

Oilinu is classified as Stock-paired token.

A one-billion-supply ERC-20 created into a Uniswap v4 pool quoted against USO. Historical RWAERC20LaunchpadFactory deploys Oilinu in one createLaunch call and seeds the Oilinu/USO book. Traders buy and sell Oilinu on Uniswap v4. USO is the Robinhood stock-token rail, not the project. No official domain or handle was located this pass.

Themes: memecoin, stock-paired:USO, rwa

## Deployment

Oilinu token: 0xbD99c569001bD6BAd33F5cd954C6faDaf4298201 on robinhood-chain. [verified S1 S3 S4 S16]

o1 historical RWAERC20LaunchpadFactory (createLaunch): 0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297 on robinhood-chain. [verified S2 S3 S4 S5]

Historical LaunchHook (launch mint recipient): 0x778b0c4EeA7D35D66513B587bA87FC9084b0EaCC on robinhood-chain. [verified S3 S5 S15]

United States Oil Fund Robinhood Token (pair quote rail): 0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344 on robinhood-chain. [verified S5 S9 S14]

## Control

`owner()` on the token reverts. The contract is not a proxy (EIP-1967 slots zero; 4657 bytes of runtime code). Token source is_verified false. LaunchHook and the historical factory are verified as `LaunchHook` / `RWAERC20LaunchpadFactory`. Factory `owner()` is EOA `0x5519a8…044D` with no code. [verified S1 S2 S4 S5 S15]

The createLaunch sender is EIP-7702 account `0x770ed103…1f79` with 23-byte `0xef0100` code. CreatorRegistered points at that address. [verified S3 S5]

## Security

No audit report URL was located this pass. [unknown]

## Engineering

_Research pending._

## Team

No official domain or X handle was located. DexScreener `info` is null. IPFS metadata from the createLaunch URI names launchpad `o1 Launchpad` and `https://launch.o1.exchange` with an empty description. Flag unconfirmed-official. [claim S6 S13]

Netlify vote URLs that embed `0x23Ec8244…7777` are third-party-link, copypasta-pattern, and a ca-collision against this token. [claim S19]

## Product and economics

Oilinu is an ERC-20 at `0xbD99c569001bD6BAd33F5cd954C6faDaf4298201`. The launch book is Uniswap v4 Oilinu/USO (`0x938074f7…07e6`) with quote `0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344`. [verified S1 S3 S6]

The token was created on 2026-07-28T02:14:17Z by `createLaunch` on historical `RWAERC20LaunchpadFactory` `0xe64A…F297`. The call named Oilinu / Oilinu and quoted USO. `Launched` records pool id `0x938074f7…07e6`. Almost the full 1e27 supply moved to LaunchHook `0x778b…EaCC` then into PoolManager `0x8366…0951`. Current factory `0xcE9C…5B0d` had no `Launched` log for this token; `launchCreationEnabled()` on the historical factory is false. [verified S3 S4 S5 S16]

DexScreener also lists Oilinu/USDG and Oilinu/ETH Uniswap v4 books. USO remains the launch quote. [verified S6]

Ticker clones include Oil Inu `0x23Ec8244…7777` / WETH, plus later USO-paired OILINU / OI / OILLY tokens. They are not this CA. [verified S12 S18]

DexScreener Oilinu/USO Uniswap v4 24h volume is 173686.78 USD and liquidity.usd is 30254.76 at 2026-09-03T05:22:28Z. fdv/marketCap is 65248. Blockscout holders_count 524. Pair created 2026-07-28T02:14:17Z. Assignment hint ~$31,867 / ~$200,815 was not reproduced exactly; live DexScreener liquidity is the Oilinu-as-base book. [claim S1 S6]

Gecko GET token 200: volume_usd.h24 208593.42, fdv_usd 339299.51, total_reserve_in_usd 21977.33 across listed pools, not the USO book alone. Gecko GET pool 200 names USO / Oilinu with USO as base_token: volume_usd.h24 201061.39, reserve_in_usd 103941.37, fdv_usd 1268331.42. [claim S7 S8]

## Communications

@bitecong posted an Oilinu signal with this CA [claim S10]

@keyz0l posted OILINU paired with USO [claim S11]

Listing-vote posts embedded a different Oil Inu CA [claim S19]

## Findings

USD liquidity figures on the Oilinu/USO book count both sides, and DexScreener and Gecko disagree because Gecko names the pool USO / Oilinu. Several other Oilinu tickers exist, including Oil Inu / WETH at 0x23Ec8244…7777. Token source is unverified. No official handle was located. [claim S9]

- DexScreener and Gecko disagree on Oilinu/USO USD liquidity, volume, and FDV because Gecko lists USO as the pool base. [verified S6 S7 S8]
- Pool USD reserve is Oilinu plus USO, not a USDG or WETH backstop. [claim S6 S7]
- No official handle or domain this pass. [claim S6 S13]
- Token source is_verified false. [verified S1]
- Several other Oilinu tickers exist, including Oil Inu/WETH 0x23Ec8244…7777. [verified S12 S18]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/factory/hook/USO and the createLaunch tx plus logs, RPC name/symbol/factory/owner/hook/quotes/launchCreationEnabled, DexScreener token and search, Gecko pool/token (first GET 200), /rhj/assets, IPFS metadata, @bitecong, @keyz0l, and the 0x23Ec8244…7777 vote posts were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S4 S6 S9]
- Numbers: 173686.78 is the DexScreener Oilinu/USO pair 24h volume. 201061.39 is the Gecko same-id pool with USO as base. 208593.42 is Gecko token all-pools. Reserve 30254.76 is DexScreener Oilinu-as-base liquidity, not Gecko pool 103941.37. [claim S6 S7 S8]
- Adversarial: the strongest contrary reading is that Oilinu is CRUDECAT, GASOLINU, OILCOIN, MICROWAVE, or the Oil Inu/WETH token. Those are different addresses and pads. USO is the /rhj/assets rail, not the project. [inference S9 S12 S18]

## Sources

- S1 — Token 0xbD99c569…8201 Oilinu / Oilinu.
- S2 — Address 0xe64A…F297 RWAERC20LaunchpadFactory.
- S3 — createLaunch tx 0xfddfc5cc…049e.
- S4 — eth_getCode, name, symbol, factory() on Oilinu.
- S5 — factory owner(), hook(), quotes(USO), launchCreationEnabled().
- S6 — latest/dex/tokens Oilinu.
- S7 — USO / Oilinu Uniswap v4 pool.
- S8 — Oilinu token.
- S9 — GET /rhj/assets Stock Token registry.
- S10 — Oilinu AI signal with CA 0xbd99c569…8201.
- S11 — OILINU paired with USO.
- S12 — Token 0x23Ec8244…7777 Oil Inu / OILINU.
- S13 — createLaunch metadata bafkreiajn6k…wa24.
- S14 — Token 0xa30FA3…D344 United States Oil Fund Robinhood Token.
- S15 — Address 0x778b…EaCC LaunchHook.
- S16 — Launched log for Oilinu.
- S18 — latest/dex/search Oilinu.
- S19 — $OILINU listing-vote netlify URL.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T05:26:00Z; methodology_version: proofline-v1.0.
