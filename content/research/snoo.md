---
slug: snoo
coverage: stub
methodology_version: proofline-v1.0
---

# SNOO — research record

## Identity

SNOO is classified as Launchpad-graduated token.

A one-billion-supply ERC-20 cloned through LongLauncher into a Uniswap v4 SNOO/RDDT pool. Traders buy and sell SNOO against Reddit • Robinhood Token. Token owner() is Airlock; no official site or handle bidirectionally linked 0x939C… this pass.

Themes: memecoin, stock-paired:RDDT, rwa

## Deployment

SNOO token (EIP-1167 DopplerERC20V1 clone): 0x939CA34ce2Dc5845f4BFf8079Fc6cCD6aB641E18 on robinhood-chain. [verified S1 S4 S13]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [verified S4 S13]

DopplerERC20V1Factory (token creator_address_hash): 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [verified S1 S4 S12]

LongLauncher (create tx to): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [verified S2 S10]

Airlock (token owner): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [claim S4 S11]

DopplerHookInitializer: 0x4e3468951D49f2EEa976eD0D6e75fFCb44a9a544 on robinhood-chain. [claim S3 S14]

RDDT Stock Token (pair quote / launch numeraire; rail, not this subject): 0x05b37Fb53A299a1b874A619e1c4C404D52C36F4C on robinhood-chain. [verified S4 S8 S9]

SNOOFI collision (Snoofi / Snoofi, not this row): 0xa614C13b18B5C754B34fF51E4775Ab19568e0536 on robinhood-chain. [claim S15 S27]

SNOO ticker collision (PonsV2LauncherToken, not this row): 0x52B566dF34d709aea103f541cba1b341Ddc04687 on robinhood-chain. [claim S16 S24]

SNOO ticker collision (Reddit's mascot / SNOO, not this row): 0x2ebe1C527691bf3497b6905bd351FD5161792215 on robinhood-chain. [claim S17 S25]

## Control

Token owner() is Airlock 0xeb7C…0862. Launcher EOA 0xdF65…C23e has no code. Lock beneficiaries are 0x21E2…7A66 at 5% and that EOA at 95%. [verified S3 S4 S11]

## Security

DopplerERC20V1, factory, Airlock, and hook are partially verified on Blockscout; LongLauncher is fully verified (src/LongLauncher.sol, compiler v0.8.26). Token verification is proxy-shell-only. No audit report URL was located this pass. [verified S10 S13] [unknown]

## Engineering

_Research pending._

## Team

No official domain or X handle bidirectionally linked 0x939C… this pass. DexScreener info.websites is empty; info.socials is a Reddit r/Snoo share with no CA in the public preview. @snoo_robinhood, @snoocoinRH, and @SnoofiOnRH pin other contracts. Flag unconfirmed-official, third-party-link, handle-collision, and ca-collision. [claim S5 S19 S24 S25 S26]

## Product and economics

LongLauncher 0x22e9…eeED clones DopplerERC20V1 via EIP-1167. create from 0xdF65…C23e at 2026-08-03T06:15:08Z minted Snoo / SNOO supply 1e9*1e18 into Uniswap v4 poolId 0x93ba…bb48 quoted against RDDT. Token creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a. owner() returns Airlock. [verified S2 S3 S4]

DopplerHookInitializer 0x4e34…a544 initialized the pool on PoolManager 0x8366…0951 and locked beneficiaries 5% / 95%. FeeScheduleSet durationSeconds was 10. Secondary SNOO/ETH books on DexScreener have far less liquidity than the RDDT book. [verified S3 S5 S14]

SNOO/RDDT Uniswap v4 24h volume is 142438.44 USD and liquidity.usd is 141052.03 at 2026-09-03T05:08:00Z from the DexScreener token endpoint. fdv/marketCap is 270332. [claim S5]

Gecko same pool: volume_usd.h24 133003.79, reserve_in_usd 147791.11, fdv_usd 277437.99. Gecko token volume_usd.h24 is 136029.37 across all pools, not the RDDT book. Gecko dex id is bankr-robinhood; on-chain venue is Uniswap v4 PoolManager. Blockscout holders_count 617. Pair created 2026-08-03T06:15:08Z. [claim S1 S6 S7]

## Communications

@Geistuberallem posted the 0x939C… CA as the Reddit mascot [claim S21]

@NiksGambles posted 0x939C… as the first $snoo tied to $RDDT [claim S20]

@0xHaruyuki posted a SNOO/RDDT buy with CA 0x939C… [claim S23]

## Findings

USD liquidity figures on the SNOO/RDDT book count both sides, and the quote side is RDDT, not USDG. Same-ticker SNOO contracts and netlify vote/claim URLs wrapping this CA are in circulation. No official handle was located. [claim S8]

- Same-ticker SNOO contracts 0x52B566… (Pons, 4 holders) and 0x2ebe1C… (Reddit's mascot) plus SNOOFI 0xa614C13… (WETH book) are live on 4663. [verified S15 S16 S17]
- Pool USD reserve is SNOO plus RDDT, not a USDG or WETH backstop. [claim S5 S6]
- No official handle or domain this pass; Reddit share and netlify vote/claim URLs are third-party-link / copypasta-pattern. [claim S19 S22]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/impl/factory/LongLauncher/Airlock/hook/RDDT and the create tx, RPC name/symbol/owner/getCode, DexScreener tokens and search, Gecko pool/token (first GET 200), /rhj/assets, Reddit preview, and the X posts and profiles above were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S4 S5 S8]
- Numbers: 142438.44 is the DexScreener SNOO/RDDT pair 24h volume, not the 136029.37 Gecko token all-pools figure. Liquidity 141052.03 is that pair. Gecko reserve 147791.11 is the same pool, different aggregator. [claim S5 S6 S7]
- Adversarial: the strongest contrary reading is that @snoo_robinhood or @snoocoinRH is this token's official handle, or that SNOOFI is the same asset. Those bios pin 0x52B566…, 0x2ebe1C…, and 0xa614C13…; bytecode lengths differ; SNOOFI's top book is WETH. [inference S16 S17 S24 S25 S26]

## Sources

- S1 — Token 0x939C…1E18 Snoo / SNOO.
- S2 — LongLauncher create tx 0x5ff03f36…9215.
- S3 — LaunchCreated / Initialize / Lock logs for SNOO.
- S4 — eth_getCode, name, symbol, owner() on SNOO.
- S5 — latest/dex/tokens SNOO 0x939C…1E18.
- S6 — SNOO/RDDT pool.
- S7 — Snoo token.
- S8 — GET /rhj/assets Stock Token registry.
- S9 — Token 0x05b37F…F4C RDDT.
- S10 — Address 0x22e9…eeED LongLauncher.
- S11 — Address 0xeb7C…0862 Airlock.
- S12 — Address 0x1B37…b69a DopplerERC20V1Factory.
- S13 — Address 0x3Be8…C599 DopplerERC20V1.
- S14 — Address 0x4e34…a544 DopplerHookInitializer.
- S15 — Token 0xa614C13… Snoofi / Snoofi.
- S16 — Token 0x52B566… Snoo / SNOO Pons clone.
- S17 — Token 0x2ebe1C… Reddit's mascot / SNOO.
- S19 — r/Snoo share linked on DexScreener.
- S20 — first $snoo on robinhood tied to $RDDT.
- S21 — $Snoo the Reddit mascot is next.
- S22 — Netlify vote URL with SNOO CA.
- S23 — Post about a SNOO buy on the RDDT pair.
- S24 — we're paired with $RDDT.
- S25 — Profile pins mascot SNOO CA.
- S26 — Profile pins SNOOFI CA.
- S27 — latest/dex/tokens SNOOFI 0xa614C13….

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T05:20:00Z; methodology_version: proofline-v1.0.
