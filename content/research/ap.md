---
slug: ap
coverage: stub
methodology_version: proofline-v1.0
---

# AP — research record

## Identity

ap is classified as Stock-paired token.

A one-billion-supply ERC-20 cloned by DopplerERC20V1Factory into a Uniswap v4 pool quoted against Apple • Robinhood Token (AAPL). LongLauncher.create on 2026-07-13 minted ap (AP) and seeded the AP/AAPL book. Traders buy and sell AP against AAPL. alpharhc.xyz publishes the CA; @Alpha_RHC is the project handle. AAPL is the quote rail, not this token.

Themes: memecoin, stock-paired:AAPL

## Deployment

AP token (EIP-1167 DopplerERC20V1 clone): 0x69c68e4C00C6F6e4Ac027300293a879Be1E11E18 on robinhood-chain. [verified S4 S5 S6]

DopplerERC20V1Factory (token creator): 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [verified S4 S6 S16]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [verified S4 S6 S14]

LongLauncher (create caller): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [claim S5 S6 S15]

Airlock (token owner): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [claim S5 S6]

Apple • Robinhood Token (pair quote rail): 0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9 on robinhood-chain. [verified S1 S6 S12 S13]

## Control

token owner() returns Airlock 0xeb7C…0862. Airlock owner() returns 0x21e2…7a66. The create-tx from-address 0x1Ae51740…5305 has no code and is also LongLauncher's creator_address_hash. DopplerERC20V1 is partially verified (src/tokens/DopplerERC20V1.sol, v0.8.26). LongLauncher is verified. [verified S5 S6 S14 S15]

## Security

No audit report URL was located this pass. [unknown]

## Engineering

_Research pending._

## Team

alpharhc.xyz titles $AP - Alpha AI, embeds CA 0x69c68e4C…1E18, and links @Alpha_RHC and t.me/alpharhc. @Alpha_RHC bio states ticker $AP (AlphaAI), paired with AAPL, first deployed token on @longdotxyz. DexScreener websites and socials match. Telegram preview titles AlphaAI Entry with 47 subscribers and no CA. [verified S1 S7 S8] [claim S11]

Packed ICOIN 0x5d6EF…1e18 is a later LongLauncher AAPL pair (@iCoinRH). AAPLCAT 0xbD6B…9BA3 and AAPLDOG 0x06e52E5f…1e18 are different Doppler clones that also quote AAPL. [verified S20 S21]

## Product and economics

LongLauncher.create from EOA 0x1Ae51740…5305 at 2026-07-13T12:13:52Z cloned DopplerERC20V1 as ap / AP, supply 1e9*1e18, numeraire AAPL 0xaF3D…93f9, tokenFactory 0x1B37…b69a. Airlock getAssetData returns that AAPL as numeraire and the token as word5; two slots are 0xdead. Uniswap v4 PoolManager 0x8366…0951 Initialize id equals pair 0x29482ee4…56e0. [verified S4 S5 S6 S18]

DexScreener labels the primary book Uniswap v4 AP/AAPL 0x29482ee4…56e0. Gecko names the same pool AP / AAPL with dex bankr-robinhood. Secondary AP/USDG and AP/ETH Uniswap v4 books exist with far less liquidity than the AAPL book. [verified S1 S2]

Lock on create split 0.95 to the create-from EOA 0x1Ae51740…5305 and 0.05 to 0xEDeAa06E…eDa8. Hook/initializer is 0x4e346895…a544. [verified S18]

Gecko AP/AAPL pool 24h volume is 835369.15 USD and reserve_in_usd is 1008373.09 at 2026-09-03T03:47:00Z. fdv_usd is 2726661.35. Gecko token volume_usd.h24 is 926253.95 across all pools, not the AAPL book. [claim S2 S3]

DexScreener same pair: liquidity.usd 473728.53, volume.h24 1495153.52, fdv/marketCap 2741732. Blockscout holders_count 1621. Pair created 2026-07-13T12:13:52Z. Assignment lead of liq ~$453,831 vol ~$1,480,136 is the DexScreener book, not the Gecko reserve. [claim S1 S4]

@Alpha_RHC posted a 24h recap of $1.22M volume and almost 1400 holders on 2 Sep; live Blockscout holders_count is 1621. [claim S9]

## Communications

@Alpha_RHC posted a 24h recap on $ap [claim S9]

@thebearjesus posted the AP CA and first-pair claim [claim S10]

@Alpha_RHC told users to copy the CA from the website [claim S19]

## Findings

USD liquidity on the AP/AAPL book counts both AP and AAPL. Gecko reserve and DexScreener liquidity for the same pool differ by about $535k this pass. Token owner() is Airlock. AAPL is a Robinhood Stock Token rail; AP is not. [claim S7]

- Quote token AAPL is a Robinhood Stock Token rail; pool USD reserve is AP plus AAPL, not a USDG backstop. [verified S2 S12 S13]
- Gecko reserve and DexScreener liquidity for pool 0x29482ee4…56e0 disagree this pass. [claim S1 S2]
- Token owner() is Airlock; create-from EOA also deployed LongLauncher. [verified S6 S15]
- Telegram preview has no CA this pass. [claim S11]
- No audit report URL this pass. [unknown]

- Receipts: DexScreener token API, Gecko pool/token, Blockscout token/create tx/logs/AAPL/impl/factory/launcher, RPC eth_getCode and eth_call, alpharhc.xyz, @Alpha_RHC profile and two posts, @thebearjesus, Telegram preview, /rhj/assets, AAPLCAT, and AAPLDOG search were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S2 S4 S5 S6 S7 S12]
- Numbers: 835369.15 is the Gecko AP/AAPL pool 24h volume, not the 926253.95 token all-pools figure. Reserve 1008373.09 is that pool. DexScreener 1495153.52 / 473728.53 is the same pair, different aggregator. [claim S1 S2 S3]
- Adversarial: the strongest contrary reading is that AP is packed ICOIN, AAPLCAT, AAPLDOG, or a Bankr agent launch because Gecko labels the pool bankr-robinhood and all quote AAPL. ICOIN is 0x5d6EF…1e18, AAPLCAT is 0xbD6B…9BA3, AAPLDOG is 0x06e52E5f…1e18, and the create transaction calls LongLauncher.create from 0x1Ae51740…5305. AAPL 0xaF3D…93f9 is the rail. [inference S2 S5 S12 S20 S21]

## Sources

- S1 — AP token pairs on Robinhood.
- S2 — AP/AAPL pool on Bankr (Robinhood).
- S3 — ap token on Robinhood.
- S4 — AP 0x69c68e4C00C6F6e4Ac027300293a879Be1E11E18.
- S5 — AP creation tx 0x402f99a6….
- S6 — eth_getCode and ERC-20 / Airlock calls.
- S7 — alpharhc.xyz $AP site.
- S8 — AlphaAI profile.
- S9 — 24 hour recap on $ap.
- S10 — AP/AAPL first tokenized pair.
- S11 — t.me/alpharhc.
- S12 — GET /rhj/assets Stock Token registry.
- S13 — AAPL 0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9.
- S14 — DopplerERC20V1 0x3Be8…C599.
- S15 — LongLauncher 0x22e9…eeED.
- S16 — DopplerERC20V1Factory 0x1B37…b69a.
- S18 — create tx logs Initialize / Lock.
- S19 — copy our ca from the website.
- S20 — AAPLCAT 0xbD6B…9BA3.
- S21 — AAPLDOG search.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:55:00Z; methodology_version: proofline-v1.0.
