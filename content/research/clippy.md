---
slug: clippy
coverage: stub
methodology_version: proofline-v1.0
---

# CLIPPY — research record

## Identity

CLIPPY is classified as Stock-paired token.

A one-billion-supply ERC-20 cloned into a Uniswap v4 pool quoted against MSFT. LongLauncher deploys Clippy (CLIPPY) in one create call and seeds the CLIPPY/MSFT book. Traders buy and sell CLIPPY on Uniswap v4. Official site clippyrh.com and handle @ClippyMSFT both embed CA 0x85856…1E18 this pass.

Themes: memecoin, stock-paired:MSFT, rwa

## Deployment

CLIPPY token (EIP-1167 DopplerERC20V1 clone): 0x85856F025BF13b8Fd2aaE2F6DA458318744F1E18 on robinhood-chain. [verified S1 S5 S18]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [verified S2 S5]

DopplerERC20V1Factory (token creator_address_hash): 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [claim S1 S3 S5]

LongLauncher (create target): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [verified S4 S18]

Airlock (token owner): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [claim S5 S6 S18]

DopplerHookInitializer: 0x4e3468951D49f2EEa976eD0D6e75fFCb44a9a544 on robinhood-chain. [claim S18 S21]

MSFT Microsoft Robinhood Token (pair quote / rail): 0xe93237C50D904957Cf27E7B1133b510C669c2e74 on robinhood-chain. [verified S7 S12 S17]

## Control

token owner() is Airlock 0xeb7C…0862. Deployer of the token clone is the factory; the create caller 0x29cc…5C9a has no code and is the 95% Lock beneficiary. 5% Lock beneficiary 0xEDeA…eDa8 also has no code (not the 0x21E2… address seen on OOF). [verified S5 S18]

## Security

DopplerERC20V1, DopplerERC20V1Factory, Airlock, and DopplerHookInitializer are partially verified on Blockscout (compiler v0.8.26). LongLauncher is verified (src/LongLauncher.sol). The CLIPPY clone is proxy-shell-only. No audit report URL was located this pass. [verified S2 S3 S6 S21] [unknown]

## Engineering

_Research pending._

## Team

Official domain clippyrh.com: DexScreener info.websites, HTML title Clippy XP - $CLIPPY on Robinhood Chain, /js/data.js ca 0x85856…1E18 chainId 4663 pair 0xb3e1…3e25 links.x https://x.com/ClippyMSFT. Official handle @ClippyMSFT: DexScreener info.socials and bio $Clippy CA 0x85856…1E18. No GitHub org this pass. [verified S7 S13 S19]

app.long.xyz/tokens/0x85856…1E18 is listed as the trade link on the site; that is the LONG pad page, not a CLIPPY-owned app. Flag unconfirmed for that URL. [claim S19]

## Product and economics

LongLauncher 0x22e9…eeED clones DopplerERC20V1 via EIP-1167. create from 0x29cc…5C9a at 2026-07-17T19:36:30Z minted Clippy / CLIPPY supply 1e9*1e18 into Uniswap v4 poolId 0xb3e1…3e25. creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a. owner() is Airlock. factory() reverts. [verified S4 S5 S18]

Gecko labels the book bankr-robinhood because Doppler/Airlock is shared; the create target is LongLauncher. stock rail is MSFT 0xe932…2e74. PoolManager is 0x8366…0951. Secondary CLIPPY/WETH and CLIPPY/USDG books exist on DexScreener with far less liquidity than the MSFT book. [verified S6 S7 S8]

CLIPPY/MSFT Uniswap v4 24h volume is 955075.56 USD and reserve_in_usd is 598073.91 at 2026-09-03T04:23:47Z from the Gecko pool endpoint. fdv_usd is 1969098.93. Gecko token volume_usd.h24 is 1436380.83 across all pools, not the MSFT book. [claim S8 S9]

DexScreener same pair: liquidity.usd 431378.9, volume.h24 976823.32, fdv/marketCap 1983932. Blockscout holders_count 2260. Pair created 2026-07-17T19:36:30Z. Secondary CLIPPY/WETH v3 0xec6A…8969 liquidity.usd 25594.91 volume.h24 376940.78. [claim S1 S7]

@ClippyMSFT posted on 1 Sep that Clippy was 83.9% of onchain MSFT volume and held 473.28 MSFT shares. Those figures were not reproduced on Gecko or DexScreener this pass. [claim S16]

## Communications

@ClippyMSFT posted a short-film contest; bio embeds the CA [verified S13]

@BlockCap listed Clippy as the top MSFT memecoin [claim S14]

@ClippyMSFT posted CLIPPY as 83.9% of onchain MSFT volume [claim S16]

## Findings

USD liquidity figures on the CLIPPY/MSFT book count both sides, and the quote side is MSFT, not USDG. Gecko pool reserve ($598k) and DexScreener liquidity ($431k) already diverge on the same pool. Several other robinhood CLIPPY tickers exist at different CAs. Netlify claim URLs that embed this CA are a copypasta-pattern, not official. [claim S19]

- Quote token MSFT 0xe932…2e74 is the Microsoft Robinhood Token rail in GET /rhj/assets; it is not this subject. [verified S12 S17]
- Pool USD reserve is CLIPPY plus MSFT, not a USDG or WETH backstop. Gecko reserve and DexScreener liquidity already disagree. [claim S7 S8]
- Ticker collision with other robinhood CLIPPY CAs and Solana CLIPPY. [claim S15]
- Netlify claim URLs embedding this CA are copypasta-pattern. [claim S20]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/impl/factory/MSFT/Airlock/hook and the create tx plus logs, RPC name/symbol/owner/eth_getCode, DexScreener token and search, Gecko pool/token (HTTP 200 first try), /rhj/assets, clippyrh.com data.js, @ClippyMSFT, @BlockCap, and the netlify claim posts were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S8 S12 S19]
- Numbers: 955075.56 is the Gecko CLIPPY/MSFT pool 24h volume, not the 1436380.83 token all-pools figure. Reserve 598073.91 is that pool. DexScreener 976823.32 / 431378.9 is the same pair, different aggregator. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that CLIPPY is an official Microsoft or Robinhood product, or that MSFT 0xe932…2e74 is this subject. /rhj/assets names Microsoft • Robinhood Token at that address as a Stock Token; LongLauncher minted CLIPPY as a separate asset; clippyrh.com and @ClippyMSFT are community surfaces for the graduation token. [inference S12 S17 S19]

## Sources

- S1 — Token 0x85856…1E18 Clippy / CLIPPY.
- S2 — Address 0x3Be8…C599 DopplerERC20V1.
- S3 — Address 0x1B37…b69a DopplerERC20V1Factory.
- S4 — create tx 0x8bc138bf…d403.
- S5 — eth_getCode, name, symbol, owner() on CLIPPY.
- S6 — Airlock 0xeb7C…0862.
- S7 — latest/dex/tokens CLIPPY.
- S8 — CLIPPY/MSFT pool.
- S9 — Clippy token.
- S12 — GET /rhj/assets Stock Token registry.
- S13 — SHORT FILM VIDEO CONTEST WINNERS ANNOUNCED TONIGHT.
- S14 — Meme stock meta $clippy top msft.
- S15 — search q=CLIPPY.
- S16 — Every number grew again.
- S17 — Token 0xe932…2e74 Microsoft • Robinhood Token / MSFT.
- S18 — create tx logs LaunchCreated / Initialize / Lock.
- S19 — js/data.js canonical CA and socials.
- S20 — netlify claim URLs embedding CLIPPY CA.
- S21 — DopplerHookInitializer 0x4e34…a544.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:26:00Z; methodology_version: proofline-v1.0.
