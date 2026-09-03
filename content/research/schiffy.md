---
slug: schiffy
coverage: stub
methodology_version: proofline-v1.0
---

# SCHIFFY — research record

## Identity

SCHIFFY is classified as Stock-paired token.

A one-billion-supply ERC-20 cloned into a Uniswap v4 pool quoted against GLD. LongLauncher deploys SCHIFFY in one create call and seeds the SCHIFFY/GLD book. Traders buy and sell SCHIFFY on Uniswap v4. GLD is the SPDR Gold Trust Robinhood Token rail, not this subject. No official handle was set this pass. DexScreener lists x.com/schiffygld and t.co/8zv22DgJl8 (https://schiffy.gold); flag unconfirmed-official.

Themes: memecoin, stock-paired:GLD, rwa

## Deployment

SCHIFFY token (EIP-1167 DopplerERC20V1 clone): 0x42aFA2124ca5a2B83898E46B2dA9a190995b1E18 on robinhood-chain. [verified S1 S5 S18]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [verified S2 S5]

DopplerERC20V1Factory (token creator_address_hash): 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [claim S1 S3 S5]

LongLauncher (create target): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [verified S4 S18]

Airlock (token owner): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [claim S5 S6 S18]

GLD SPDR Gold Trust Robinhood Token (pair quote / rail): 0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e on robinhood-chain. [verified S7 S12 S16]

## Control

token owner() is Airlock. factory() reverts. DopplerHookInitializer Lock splits 5% to 0x21E2…7A66 and 95% to the launcher EOA 0xb6F4…e8F5. [verified S5 S18]

## Security

DopplerERC20V1 is partially verified on Blockscout (src/tokens/DopplerERC20V1.sol, compiler v0.8.26). The token is an EIP-1167 shell. No audit report URL was located this pass. [verified S1 S2] [unknown]

## Engineering

_Research pending._

## Team

No official domain or handle was filed. DexScreener info.websites is t.co/8zv22DgJl8, which expands to https://schiffy.gold. That page titles $SCHIFFY and sets twitter:site to @schiffygld, with no CA in the HTML this pass. x.com/schiffygld is listed on DexScreener; the bio includes CA 0x42afa212… and @Moku_HQ, with no domain. Flag unconfirmed-official. [claim S7 S13 S19 S20]

GLD 0xC9a9…FC4e is the census stock-token rail (GET /rhj/assets). Discovery-inventory lists ubik as a GLD-book candidate. CASHBIRD/GLD 0x38C8…1e18 is a separate CA on the same rail. Do not merge those CAs. [verified S12 S15]

## Product and economics

LongLauncher 0x22e9…eeED clones DopplerERC20V1 via EIP-1167. create from 0xb6F4…e8F5 at 2026-08-29T18:24:23Z minted SCHIFFY supply 1e9*1e18 into Uniswap v4 poolId 0xc749…777e. creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a. owner() on the token returns Airlock 0xeb7C…0862. [verified S4 S5 S18]

PoolManager is 0x8366…0951. Hooks are 0x4e34…a544. Secondary SCHIFFY/USDG and SCHIFFY/ETH books exist on DexScreener with far less liquidity than the GLD book. Gecko dex id is bankr-robinhood because Doppler/Airlock is shared with Bankr launches; the create tx is LongLauncher. [verified S7 S8 S18]

SCHIFFY/GLD Uniswap v4 24h volume is 902731.89 USD and reserve_in_usd is 272759.82 at 2026-09-03T03:47:30Z from the Gecko pool endpoint. fdv_usd is 1280826.03. Gecko token volume_usd.h24 is 910709.10 across all pools, not the GLD book. [claim S8 S9]

DexScreener same pair: liquidity.usd 282567.78, volume.h24 916420.04, fdv/marketCap 1451333. Blockscout holders_count 1826. Pair created 2026-08-29T18:24:23Z. [claim S1 S7]

## Communications

@schiffygld posted PvE Season on RH [claim S13]

@schiffygld called it the long xyz contract [claim S21]

## Findings

USD liquidity figures on the SCHIFFY/GLD book count both sides, and the quote side is GLD, not USDG. Gecko labels the pool Bankr; the create target is LongLauncher. Other contracts on this chain reuse SCHIFF or quote the same GLD rail. No bidirectional official handle was located. Site copy about a per-trade burn was not reproduced in verified source this pass. [claim S12]

- Quote token GLD is a Robinhood Stock Token rail shared with other pairs, including UBIK/GLD and CASHBIRD/GLD. [verified S12 S15]
- Pool USD reserve is SCHIFFY plus GLD, not a USDG or WETH backstop. [claim S7 S8]
- Gecko dex label Bankr does not match the LongLauncher create target. [verified S4 S8]
- No official handle or domain this pass; X and schiffy.gold are unconfirmed-official. [claim S7 S13 S19]
- Other SCHIFF tickers exist on robinhood. [claim S15]
- Site burn copy was not matched to verified source this pass. [claim S19]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/impl/factory/Airlock/GLD/LongLauncher and the create tx plus logs, RPC name/symbol/owner/eth_getCode, DexScreener token and search, Gecko pool/token/info, /rhj/assets, @schiffygld, t.co, and schiffy.gold were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S8 S12]
- Numbers: 902731.89 is the Gecko SCHIFFY/GLD pool 24h volume, not the 910709.10 token all-pools figure. Reserve 272759.82 is that pool. DexScreener 916420.04 / 282567.78 is the same pair, different aggregator. RPC totalSupply 993437836110533055084396978 vs Gecko token total_supply 1e27. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that SCHIFFY is UBIK or CASHBIRD, or that it is a Bankr product, or that @schiffygld is official. UBIK is 0x8124…68Bd. CASHBIRD is 0x38C8…1e18. The create target is LongLauncher. The site HTML has no CA. [inference S4 S13 S15 S19]

## Sources

- S1 — Token 0x42aF…1E18 SCHIFFY / SCHIFFY.
- S2 — Address 0x3Be8…C599 DopplerERC20V1.
- S3 — Address 0x1B37…b69a DopplerERC20V1Factory.
- S4 — create tx 0x12024acb…a6cb.
- S5 — eth_getCode, name, symbol, owner() on SCHIFFY.
- S6 — Airlock 0xeb7C…0862.
- S7 — latest/dex/tokens SCHIFFY.
- S8 — SCHIFFY/GLD pool.
- S9 — SCHIFFY token.
- S12 — GET /rhj/assets Stock Token registry.
- S13 — PvE Season on RH.
- S15 — search q=SCHIFF / UBIK / CASHBIRD.
- S16 — Token 0xC9a9…FC4e SPDR Gold Shares • Robinhood Token / GLD.
- S18 — create tx logs LaunchCreated / Initialize / Lock.
- S19 — SCHIFFY token info.
- S20 — $SCHIFFY site.
- S21 — It's literally just the long xyz contract.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:52:00Z; methodology_version: proofline-v1.0.
