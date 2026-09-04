---
slug: koli
coverage: stub
methodology_version: proofline-v1.0
---

# KOLI — research record

## Identity

KOLI is classified as Stock-paired token.

A one-billion-supply ERC-20 cloned by DopplerERC20V1Factory into a Uniswap v4 pool quoted against NVIDIA • Robinhood Token (NVDA). LongLauncher.create on 2026-09-01 minted KOLI and seeded the KOLI/NVDA book. Traders buy and sell KOLI against NVDA. NVDA is the quote rail, not the subject. www.koli.top reprints this CA. No official handle was confirmed this pass.

Themes: memecoin, stock-paired:NVDA, rwa

## Deployment

KOLI token (EIP-1167 DopplerERC20V1 clone): 0xb8D9F969dB56bb57353e36Fd0015D98e3A761E18 on robinhood-chain. [verified S1 S5 S18]

DopplerERC20V1Factory (create tokenFactory): 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [claim S3 S4 S6]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [verified S2 S5 S6]

LongLauncher (create caller): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [verified S4 S6 S15]

NVIDIA • Robinhood Token (pair quote rail): 0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC on robinhood-chain. [verified S6 S7 S12 S17]

Airlock (token owner): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [claim S5 S6 S16]

## Control

token owner() is Airlock. Airlock owner() is 0x21e2…7a66. Create-tx from 0x390A…1aE has no code. Create-tx emitted Lock on DopplerHookInitializer 0x4e34…a544. [verified S4 S5 S6]

## Security

DopplerERC20V1 and DopplerERC20V1Factory are partially verified on Blockscout (src/tokens/DopplerERC20V1.sol, src/tokens/DopplerERC20V1Factory.sol, compiler v0.8.26). LongLauncher is verified (src/LongLauncher.sol). The token page is a verified EIP-1167 shell only. No audit report URL was located this pass. [verified S2 S3 S15] [unknown]

## Engineering

_Research pending._

## Team

No official handle was confirmed. DexScreener info.websites is https://www.koli.top/ and info.socials is https://x.com/KoliAI_. The site reprints CA 0xb8d9…1e18 and contains x.com/KoliAI_. @KoliAI_ bio has no CA; Latest posts link koli.top paths and a 1 Sep security-alert post told readers to trust official-channel CAs without embedding 0xb8D9…1e18. Flag unconfirmed-official. github.com/calixeth/agentServer in the site HTML is a third-party-link. [claim S7 S13 S14]

Site copy describes an AI KOL-clone product on Robinhood Chain. That product claim was not reproduced on-chain beyond the token and pool. [claim S13]

## Product and economics

DopplerERC20V1Factory 0x1B37…b69a clones DopplerERC20V1 via EIP-1167. LongLauncher.create from 0x390A…1aE at 2026-09-01T23:23:36Z minted KOLI / KOLI supply 1e9*1e18 into Uniswap v4 poolId 0x1d67…1aa4 quoted against NVDA 0xd060…9EEC. factory() on the token reverts; owner() is Airlock 0xeb7C…0862. [verified S4 S5 S6]

Airlock getAssetData numeraire is that NVDA; LP slots include 0xdead. PoolManager is 0x8366…0951. LaunchCreated normalizedTicker KOLI. Secondary KOLI/USDG and KOLI/ETH books exist on DexScreener with far less liquidity than the NVDA book. [verified S1 S6 S7]

KOLI/NVDA Uniswap v4 24h volume is 1170302.07 USD and reserve_in_usd is 45352.52 at 2026-09-03T04:04:00Z from the Gecko pool endpoint. fdv_usd is 47416.33. Gecko token volume_usd.h24 is 1186791.87 across all pools, not the NVDA book. [claim S8 S9]

DexScreener same pair: liquidity.usd 44179.83, volume.h24 1168551.64, fdv/marketCap 47163 at 2026-09-03T04:04:00Z. Blockscout holders_count 1164. Pair created 2026-09-01T23:23:36Z. [claim S1 S7]

Gecko dex id is bankr-robinhood; DexScreener dexId is uniswap v4. Creation path is LongLauncher.create. [claim S1 S4 S8]

## Communications

@KoliAI_ posted a fake-token security alert [claim S14]

@Arya_web3 posted $KOLI on Robinhood Chain [claim S21]

## Findings

USD liquidity figures on the KOLI/NVDA book count both sides, and the quote side is NVDA, not USDG. Gecko reserve and DexScreener liquidity disagree slightly on the same pool. Same-name KOLI tickers exist on 4663 (KOLIAI, KOLIONE, lowercase koli). @KoliAI_ is listed on the site and DexScreener but did not pin this CA this pass. [claim S13]

- Quote token NVDA 0xd060…9EEC is the Robinhood Stock Token rail in GET /rhj/assets; KOLI is not. [verified S12 S17]
- Pool USD reserve is KOLI plus NVDA, not a USDG or WETH backstop. [claim S7 S8]
- Gecko reserve 45352.52 vs DexScreener liquidity 44179.83 on the same pool. [claim S7 S8]
- Same-name KOLI tickers on 4663 (KOLIAI 0x55bC…1e18, KOLIONE, lowercase koli). Flag ca-collision. [verified S20]
- No official handle confirmed this pass; github.com/calixeth/agentServer is a third-party-link. [claim S13 S14]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/impl/factory/NVDA and the create tx, RPC name/symbol/owner/getAssetData, DexScreener token + RIPE search, Gecko pool/token/info, /rhj/assets, koli.top, @KoliAI_ profile and posts were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S4 S5 S8 S12 S13]
- Numbers: 1170302.07 is the Gecko KOLI/NVDA pool 24h volume, not the 1186791.87 token all-pools figure. Reserve 45352.52 is that pool. DexScreener 1168551.64 / 44179.83 is the same pair, different aggregator. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that this is packed $AI, microduck, ORBIO, or RIPE, or the NVDA stock token. $AI is 0x2E8c…1e18; microduck is 0xD5f1…E725; ORBIO is 0xAa07…28A3; RIPE is 0x4D3f…883b Uniswap v2; NVDA in /rhj/assets is the quote rail 0xd060…9EEC; this CA is 0xb8D9…1e18 / pool 0x1d67…1aa4. [inference S4 S12 S19]

## Sources

- S1 — Token 0xb8D9…1e18 KOLI / KOLI.
- S2 — Address 0x3Be8…C599 DopplerERC20V1.
- S3 — Address 0x1B37…b69a DopplerERC20V1Factory.
- S4 — create tx 0xcc8bc31e…ee53.
- S5 — eth_getCode, name, symbol, owner() on KOLI.
- S6 — Airlock getAssetData, NVDA name, related codes.
- S7 — latest/dex/tokens KOLI.
- S8 — KOLI/NVDA Uniswap v4 pool.
- S9 — KOLI token.
- S12 — GET /rhj/assets Stock Token registry.
- S13 — KOLI site reprints CA.
- S14 — Security Alert fake tokens.
- S15 — Address 0x22e9…eeED LongLauncher.
- S16 — Address 0xeb7C…0862 Airlock.
- S17 — Token 0xd060…9EEC NVIDIA • Robinhood Token / NVDA.
- S18 — Mint transfer from 0x0 on KOLI.
- S19 — Search RIPE NVDA and KOLI.
- S20 — Search q=KOLI ticker collisions.
- S21 — $KOLI 新高了.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:16:00Z; methodology_version: proofline-v1.0.
