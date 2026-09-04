---
slug: aaplcat
coverage: stub
methodology_version: proofline-v1.0
---

# AAPLCAT — research record

## Identity

Apple Cat is classified as Stock-paired token.

A one-billion-supply ERC-20 cloned by DopplerERC20V1Factory into a Uniswap v4 pool quoted against Apple • Robinhood Token (AAPL). LongLauncher.create on 2026-07-17 minted Apple Cat (AAPLCAT) and seeded the AAPLCAT/AAPL book. Traders buy and sell AAPLCAT against AAPL. AAPL is the quote rail, not the subject. @AAPLCAT_ is the project handle; applecat.club reprints the CA.

Themes: memecoin, stock-paired:AAPL, rwa

## Deployment

AAPLCAT token (EIP-1167 DopplerERC20V1 clone): 0x73A9999f6e9Db138E1aE4595fde049A401161E18 on robinhood-chain. [verified S4 S5 S6]

DopplerERC20V1Factory (token creator): 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [claim S4 S6]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [claim S4 S6 S13]

LongLauncher (create caller): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [claim S5 S6]

Airlock (token owner): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [claim S5 S6]

## Control

token owner() is Airlock. Airlock owner() is 0x21E2…7A66. Create-tx from 0x491E…cFC4 is an EIP-7702 CaliburEntry (23 bytes of code), not an empty EOA. Create-tx Lock beneficiaries were 95% 0x491E…cFC4 and 5% 0xEDeA…eDa8. [verified S5 S6]

## Security

DopplerERC20V1 and DopplerERC20V1Factory are partially verified on Blockscout (src/tokens/DopplerERC20V1.sol, compiler v0.8.26). LongLauncher is verified (src/LongLauncher.sol). The token page is a verified EIP-1167 shell only. No audit report URL was located this pass. [verified S4 S13 S14] [unknown]

## Engineering

_Research pending._

## Team

@AAPLCAT_ bio pins CA 0x73a9999f…1e18 and names the AAPL pair. applecat.club prints that CA, the DexScreener pair, and Follow @AAPLCAT_. DexScreener websites/socials match. Flag unconfirmed-official on t.me/applecatlong (31 subscribers, no CA). Site HTML includes grok-app-builder and x:creator @ServerInu; that handle is not treated as official. [verified S8 S9] [claim S10]

X user search also returned @aaplcatrh / @AAPLCat_CTO with other contract addresses. Flag handle-collision on @AAPLCATRH. Do not invent a second official handle. [claim S8 S16]

## Product and economics

DopplerERC20V1Factory 0x1B37…b69a clones Launchpad-style DopplerERC20V1 via EIP-1167. LongLauncher.create from 0x491E…cFC4 at 2026-07-17T14:01:07Z minted Apple Cat / AAPLCAT supply 1e9*1e18 into Uniswap v4 poolId 0x719a752f…c5b6 quoted against AAPL 0xaF3D…93f9. factory() on the token reverts; owner() is Airlock 0xeb7C…0862. [verified S4 S5 S6]

Airlock getAssetData numeraire is that AAPL; LP slots include 0xdead. PoolManager is 0x8366…0951. LaunchCreated normalizedTicker AAPLCAT. Secondary AAPLCAT/USDG and AAPLCAT/ETH books exist on DexScreener with far less liquidity than the AAPL book. [verified S1 S2 S6]

AAPLCAT/AAPL Uniswap v4 24h volume is 1194905.86 USD and reserve_in_usd is 259866.15 at 2026-09-03T03:50:20Z from the Gecko pool endpoint. fdv_usd is 485272.95. Gecko token volume_usd.h24 is 1207875.16 across all pools, not the AAPL book. [claim S2 S3]

DexScreener same pair: liquidity.usd 191614.26, volume.h24 1150376.94, fdv/marketCap 536371 at 2026-09-03T03:47:00Z. Blockscout holders_count 1564. Pair created 2026-07-17T14:01:07Z. [claim S1 S4]

Gecko dex id is bankr-robinhood; DexScreener dexId is uniswap v4. Creation path is LongLauncher.create. [claim S1 S2 S5]

## Communications

applecat.club lists CA 0x73a9999f…1e18 and @AAPLCAT_ [verified S9]

@AAPLCAT_ posted The true believer LONG [claim S15]

## Findings

USD liquidity figures on the AAPLCAT/AAPL book count both sides, and the quote side is AAPL, not USDG. Gecko reserve and DexScreener liquidity disagree on the same pool. Same-ticker Apple Cat clones exist on robinhood and other chains. applecat.club is also an app-builder page with x:creator @ServerInu. Telegram is a third-party-link with no CA in the preview. [claim S9]

- Quote token AAPL 0xaF3D…93f9 is the Robinhood Stock Token rail in GET /rhj/assets; AAPLCAT is not. [verified S11 S12]
- Pool USD reserve is AAPLCAT plus AAPL, not a USDG or WETH backstop. [claim S1 S2]
- Gecko reserve 259866.15 vs DexScreener liquidity 191614.26 on the same pool. [claim S1 S2]
- Same-ticker clones and colliding handles (@AAPLCATRH, BSC AAPLCat). [claim S16]
- Telegram is a third-party-link; applecat.club carries app-builder attribution. [claim S9 S10]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/impl/factory/AAPL and the create tx, RPC name/symbol/owner/getAssetData, DexScreener token + search, Gecko pool/token, /rhj/assets, applecat.club, @AAPLCAT_ profile and post, Telegram preview were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S4 S6 S9 S11]
- Numbers: 1194905.86 is the Gecko AAPLCAT/AAPL pool 24h volume, not the 1207875.16 token all-pools figure. Reserve 259866.15 is that pool. DexScreener 1150376.94 / 191614.26 is the same pair, different aggregator. [claim S1 S2 S3]
- Adversarial: the strongest contrary reading is that this is packed ICOIN or AP/AAPL, or an official Apple product. ICOIN is 0x5d6EF…1e18 / @iCoinRH; AP is 0x69c68e4C…1e18; AAPL in /rhj/assets is the quote rail 0xaF3D…93f9; AAPLCAT is a LongLauncher memecoin at 0x73A9999f…1e18. [inference S4 S11 S16]

## Sources

- S1 — AAPLCAT token pairs on Robinhood.
- S2 — AAPLCAT/AAPL pool on Bankr (Robinhood).
- S3 — Apple Cat token on Robinhood.
- S4 — AAPLCAT 0x73A9999f6e9Db138E1aE4595fde049A401161E18.
- S5 — AAPLCAT creation tx 0x75704af8….
- S6 — eth_getCode and ERC-20 / Airlock calls.
- S8 — Apple Cat profile.
- S9 — Apple Cat site.
- S10 — t.me/applecatlong.
- S11 — GET /rhj/assets Stock Token registry.
- S12 — AAPL 0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9.
- S13 — DopplerERC20V1 0x3Be8…C599.
- S14 — LongLauncher 0x22e9…eeED.
- S15 — The true believer LONG.
- S16 — Search AP AAPL and AAPLCAT clones.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:52:00Z; methodology_version: proofline-v1.0.
