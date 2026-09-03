---
slug: rufus
coverage: stub
methodology_version: proofline-v1.0
---

# RUFUS — research record

## Identity

RUFUS is classified as Stock-paired token.

A one-billion-supply ERC-20 cloned by DopplerERC20V1Factory into a Uniswap v4 pool quoted against Amazon • Robinhood Token (AMZN). LongLauncher.create on 2026-08-30 minted RUFUS and seeded the RUFUS/AMZN book. Traders buy and sell RUFUS against AMZN. AMZN is the quote rail, not the subject. DexScreener lists @Rufusonrh; that handle posted the contract. Flag unconfirmed-official.

Themes: memecoin, stock-paired:AMZN, rwa

## Deployment

RUFUS token (EIP-1167 DopplerERC20V1 clone): 0x218D84Bdd20982bD7c3CdBf2E6d8bb7FD6fe1E18 on robinhood-chain. [verified S1 S5 S6]

DopplerERC20V1Factory (create tokenFactory): 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [verified S3 S5 S6 S13]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [verified S1 S2 S6 S13]

LongLauncher (create caller): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [verified S5 S6 S14]

Amazon • Robinhood Token (pair quote rail): 0x12f190a9F9d7D37a250758b26824B97CE941bF54 on robinhood-chain. [verified S6 S7 S11 S12]

Airlock (token owner): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [claim S5 S6]

## Control

token owner() is Airlock. Airlock owner() is 0x21E2…7A66. Create-from 0x5BEA…0338 is an EIP-7702 delegated account (code 23 B, implementation 0x1C08…a174), not a plain empty-code EOA. LaunchCreated reservedUntil 2026-08-31T22:43:53Z has passed. [verified S5 S6]

## Security

DopplerERC20V1 and DopplerERC20V1Factory are partially verified on Blockscout (src/tokens/DopplerERC20V1.sol, src/tokens/DopplerERC20V1Factory.sol, compiler v0.8.26). LongLauncher is fully verified (src/LongLauncher.sol). No audit report URL was located this pass. [verified S13 S14] [unknown]

## Engineering

_Research pending._

## Team

DexScreener info.socials lists https://x.com/Rufusonrh. That handle posted CA 0x218d84bdd2…1e18 with Amazon corgi lore. Bio reads CTO / Rufus, The Corgi from Amazon’s earliest days. No Amazon account linked the CA this pass. Flag unconfirmed-official. DexScreener info.websites is empty. create calldata includes ipfs://bafkreifo54t…zrte; ipfs.io returned Cloudflare 403. [claim S7 S15]

X posts advertised netlify claim portals and a vote page that embed CA 0x218D…1E18. Flag third-party-link and copypasta-pattern. [claim S16 S17]

## Product and economics

LongLauncher 0x22e9…eeED create from 0x5BEA…0338 at 2026-08-30T22:43:53Z minted RUFUS / RUFUS supply 1e9*1e18 into Uniswap v4 poolId 0x0f5a0c5b…4cb1 quoted against AMZN 0x12f1…bF54. tokenFactory is DopplerERC20V1Factory 0x1B37…b69a. The token is an EIP-1167 clone of DopplerERC20V1 0x3Be8…C599. owner() is Airlock 0xeb7C…0862. factory() reverts. [verified S4 S5 S6]

Airlock getAssetData numeraire is AMZN; LP slots include 0xdead. DopplerHookInitializer Lock beneficiaries are 0x5BEA…0338 at 95% and Airlock owner 0x21E2…7A66 at 5%. PoolManager Initialize uses dynamic-fee flag 8388608 and hooks 0x4e34…a544. DexScreener lists one pair for this token. [verified S5 S6 S7]

RUFUS/AMZN Uniswap v4 24h volume is 164874.61 USD and reserve_in_usd is 49511.37 at 2026-09-03T04:50:00Z from the Gecko pool endpoint. Gecko token fdv_usd is 60137.31. Gecko token volume_usd.h24 equals the pool figure (token/pools n=1). Gecko pool fdv_usd 1986887.92 uses AMZN as base_token and is not the RUFUS cap. [claim S8 S9]

DexScreener same pair: liquidity.usd 48481.54, volume.h24 166124.83, fdv/marketCap 59045. Blockscout holders_count 81. Pair created 2026-08-30T22:43:53Z. [claim S1 S7]

## Communications

@Rufusonrh posted CA 0x218d84bdd2…1e18 with Amazon corgi lore [claim S15]

@MPtrading_x quoted @Rufusonrh as an AMZN pair with no big runners yet [claim S18]

X posts advertised netlify claim and vote URLs for CA 0x218D…1E18 [claim S16 S17]

## Findings

USD liquidity figures on the RUFUS/AMZN book count both sides, and the quote side is AMZN, not USDG. Gecko names the pool AMZN / RUFUS and reports pool fdv ~$1.99M (AMZN as base); the RUFUS cap on DexScreener is $59.0k and on the Gecko token endpoint $60.1k. Several other ERC-20s share the RUFUS ticker. No Amazon bidirectional handle was located, so comms surfaces stay unconfirmed-official. Netlify claim and vote URLs that embed this CA are third-party-link / copypasta-pattern. [claim S11]

- Quote token AMZN 0x12f1…bF54 is the Robinhood Stock Token rail; pool USD reserve is RUFUS plus AMZN, not a USDG or WETH backstop. [verified S11 S12]
- Gecko pool fdv ~$1.99M is AMZN-as-base and disagrees with Gecko token fdv $60.1k and DexScreener $59.0k. [claim S7 S8 S9]
- Ticker RUFUS collides with other ERC-20s on 4663, including 0x695B…9F7f. [claim S20 S22]
- Handle @Rufusonrh is unconfirmed-official; netlify claim/vote URLs are third-party-link / copypasta-pattern. [claim S7 S15 S16]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/impl/factory/AMZN and create tx 0xa88a6b7d…d0a3, RPC name/symbol/owner/getAssetData, DexScreener tokens API, Gecko pool/token (HTTP 200), /rhj/assets, @Rufusonrh, @MPtrading_x, netlify claim/vote posts, Blockscout search, and X user search were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S7 S8 S11]
- Numbers: 166124.83 is the DexScreener RUFUS/AMZN pair 24h volume. 164874.61 is the Gecko pool volume_usd.h24. Reserve 49511.37 is that pool. DexScreener liquidity 48481.54 is the same pair, different aggregator. RUFUS fdv is Gecko token 60137.31 / DexScreener 59045, not Gecko pool 1986887.92. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that this is packed sender or packed waddles, or the 0x695B…9F7f Rufus the Corgi token. Addresses, create timestamps, and pads differ; AMZN is the shared rail. [inference S5 S7 S20]

## Sources

- S1 — Token 0x218D…1E18 RUFUS / RUFUS.
- S2 — Address 0x3Be8…C599 DopplerERC20V1.
- S3 — Address 0x1B37…b69a DopplerERC20V1Factory.
- S4 — Zero-addr mint of RUFUS 1e27.
- S5 — create tx 0xa88a6b7d…d0a3.
- S6 — eth_getCode, name, symbol, owner(), Airlock getAssetData.
- S7 — latest/dex/tokens RUFUS.
- S8 — AMZN/RUFUS Uniswap v4 pool.
- S9 — RUFUS token.
- S11 — GET /rhj/assets Stock Token registry.
- S12 — Token 0x12f1…bF54 Amazon • Robinhood Token / AMZN.
- S13 — DopplerERC20V1 verified source.
- S14 — LongLauncher 0x22e9…eeED.
- S15 — Amazon corgi lore plus CA 0x218d84bdd2…1e18.
- S16 — $RUFUS portal is up.
- S17 — Attention $RUFUS Family vote.
- S18 — amzn has no big runners yet $rufus.
- S20 — Search RUFUS.
- S22 — Rufus the corgi CA 0x695B…9F7f.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:54:00Z; methodology_version: proofline-v1.0.
