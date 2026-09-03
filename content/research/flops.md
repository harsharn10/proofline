---
slug: flops
coverage: stub
methodology_version: proofline-v1.0
---

# FLOPS — research record

## Identity

FLOPS is classified as Stock-paired token.

A one-billion-supply ERC-20 cloned through LongLauncher into a Uniswap v4 pool quoted against NVDA, the NVIDIA Robinhood Stock Token at 0xd060…9EEC. Traders buy and sell FLOPS on that book. NVDA is the rail. This token is not the NVIDIA stock token and is not the AI, microduck, ORBIO, or RIPE NVDA books. No official project domain was located this pass.

Themes: memecoin, stock-paired:NVDA, rwa

## Deployment

FLOPS token (EIP-1167 DopplerERC20V1 clone): 0x9DAD613c96Bd6E9D0f4fd840D53557Dc5EdE1e18 on robinhood-chain. [verified S1 S4 S5]

DopplerERC20V1Factory (token creator): 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [verified S1 S3 S5]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [verified S2 S5]

LongLauncher (create caller): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [claim S4 S5 S12]

NVIDIA • Robinhood Token (pair quote rail): 0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC on robinhood-chain. [verified S5 S7 S10 S11]

Airlock (token owner): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [claim S5 S6 S15]

## Control

token owner() is Airlock 0xeb7C…0862. Airlock owner() is 0x21E2…7A66. Create-tx from 0x0b36…9bB9 has no code. [verified S5 S6]

## Security

DopplerERC20V1 and DopplerERC20V1Factory are partially verified on Blockscout (src/tokens/DopplerERC20V1.sol, src/tokens/DopplerERC20V1Factory.sol, compiler v0.8.26). LongLauncher is verified (src/LongLauncher.sol). No audit report URL was located this pass. [verified S2 S3 S12] [unknown]

## Engineering

_Research pending._

## Team

No official domain or bidirectional handle was located. DexScreener websites is the Long pad URL; app.long.xyz returned Cloudflare 403. DexScreener socials lists x.com/flops_rh; @Flops_rh display Flops, bio FLOPS/NVDA on L(🩴🩴)NG @longdotxyz, and a post embeds this CA. Flag unconfirmed-official and third-party-link. [claim S7 S13 S17]

X user search for Flops also returned @Flops__Network (Flops Network), a different product. [claim S17]

## Product and economics

LongLauncher 0x22e9…eeED clones DopplerERC20V1 via EIP-1167. create from EOA 0x0b36…9bB9 at 2026-08-28T03:07:36Z minted FLOPS supply 1e9*1e18 into Uniswap v4 poolId 0xe04a…0601 quoted against NVDA 0xd060…9EEC. Token creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a. factory() on the token reverts. [verified S4 S5 S18]

Airlock getAssetData names NVDA as numeraire and records 0xdead LP slots. PoolManager is 0x8366…0951. DopplerHookInitializer Lock splits fees to 0x21E2…7A66 and 0xbE54…44b2. Secondary FLOPS/USDG and FLOPS/ETH books exist on DexScreener with far less liquidity than the NVDA book. [verified S6 S7 S18]

FLOPS/NVDA Uniswap v4 24h volume is 501817.71 USD and reserve_in_usd is 102719.87 at 2026-09-03T04:06:00Z from the Gecko pool endpoint. fdv_usd is 223095.68. Gecko token volume_usd.h24 is 503411.98 across all pools, not the NVDA book. [claim S8 S9]

DexScreener same pair: liquidity.usd 118647.59, volume.h24 516844.27, fdv/marketCap 219198. Blockscout holders_count 783. Pair created 2026-08-28T03:07:36Z. [claim S1 S7]

## Communications

@Flops_rh posted origin story and token CA [claim S13 S17]

@Flops_rh posted flip-flop / LONG logo lore [claim S20]

@_laseasy posted FLOPS/NVDA CA and Long lore [claim S14]

## Findings

USD liquidity figures on the FLOPS/NVDA book count both sides, and the quote side is NVDA, not USDG. Gecko and DexScreener disagree on reserve. No official handle was located, so comms surfaces stay unconfirmed-official. NVDA in /rhj/assets is the rail, not this token. [claim S10]

- Quote token NVDA 0xd060…9EEC is the Robinhood Token rail in GET /rhj/assets; FLOPS is not in that registry. [verified S10 S11]
- Pool USD reserve is FLOPS plus NVDA, not a USDG or WETH backstop. [claim S7 S8]
- Gecko reserve $102720 vs DexScreener liquidity $118648 on the same pool. [claim S7 S8]
- No official handle or domain this pass; @Flops_rh is a third-party-link. [claim S7 S13]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/impl/factory/NVDA/Airlock/launcher and the create tx, RPC name/symbol/owner/getAssetData, DexScreener, Gecko pool/token, /rhj/assets, @Flops_rh, and @_laseasy were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S8 S10]
- Numbers: 501817.71 is the Gecko FLOPS/NVDA pool 24h volume, not the 503411.98 token all-pools figure. Reserve 102719.87 is that pool. DexScreener 516844.27 / 118647.59 is the same pair, different aggregator. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that this FLOPS is packed AI, microduck, ORBIO, or RIPE, is in-flight KOLI, is the NVDA stock token, or is Flops Network. Different CAs, pair ids, and (for NVDA) /rhj/assets argue against those. [inference S7 S10 S16]

## Sources

- S1 — Token 0x9DAD…1e18 FLOPS.
- S2 — Address 0x3Be8…C599 DopplerERC20V1.
- S3 — Address 0x1B37…b69a DopplerERC20V1Factory.
- S4 — create tx 0xe59d6346…e2c5.
- S5 — eth_getCode, name, symbol, owner() on FLOPS.
- S6 — Airlock getAssetData and owner().
- S7 — latest/dex/tokens FLOPS.
- S8 — FLOPS/NVDA Uniswap v4 pool.
- S9 — FLOPS token.
- S10 — GET /rhj/assets Stock Token registry.
- S11 — Token 0xd060…9EEC NVIDIA • Robinhood Token.
- S12 — Address 0x22e9…eeED LongLauncher.
- S13 — FLOPS was a meme before it was a token.
- S14 — flops/nvda on longxyz.
- S15 — Address 0xeb7C…0862 Airlock.
- S16 — search KOLI NVDA distinct books.
- S17 — Flops (@Flops_rh) profile.
- S18 — LaunchCreated and Initialize logs on create tx.
- S20 — flip-flop to change the game.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:12:00Z; methodology_version: proofline-v1.0.
