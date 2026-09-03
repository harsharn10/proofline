---
slug: robindex
coverage: stub
methodology_version: proofline-v1.0
---

# Robindex — research record

## Identity

Robindex is classified as Market scanner.

A live token scanner for Robinhood Chain: paste a 0x address for market stats, holders and a 0–99 safety score, or browse a DexPaprika board that ranks Uniswap pools every three minutes and posts volume spikes to Telegram. Users scan at robindex.pro or via the Telegram bot. The $ROBINDEX token is a Pons-launched ERC-20; this is not The Index and not Robinscan.

Themes: tooling

## Deployment

ROBINDEX token (PonsLauncherToken): 0xd82f70F530AFf45b831d6eE17062B4E85395C6F3 on robinhood-chain. [verified S7 S16 S17 S21]

Uniswap v3 ROBINDEX/WETH pool: 0xcC14BF25919D57D8C365A47F3D59515C5D4ddf4D on robinhood-chain. [verified S18 S19 S21 S22]

## Control

owner() on the token reverts. deployer() returns EOA 0x552d5fFC…4734, which sent the launchToken transaction and has empty code. launchFactory() is PonsLaunchFactory 0xA5aAb3F0…1feB. The launch transaction minted UNI-V3-POS 579618 to PonsLaunchLocker 0x736D7669…7F35. [verified S18 S21 S23]

## Security

No audit report matching this bytecode was located on the site, X account or Medium. /audits points at Blockscout, DexScreener and GoPlus. [unknown]

## Engineering

_Research pending._

## Team

@robindexpro lists robindex.pro and CA 0xd82f…C6F3. About, Safety and t.me/robindextrending list the same CA and handle. Display name on X is RobinDex. Constructor website was empty; the X website field is robindex.pro. [verified S6 S7 S9 S26]

The official account named @Mike_Majestic as the coder. Medium @robindex linked x.com/mike_majestic. No repository URL was located. [claim S15 S30]

## Product and economics

Robindex is a market scanner. The About page says a background DexPaprika scan every three minutes ranks Uniswap pools by volume and a 0–99 safety score, with Telegram posts when volume or milestones spike. /scanner takes a pasted 0x address for market stats, holders, X/TG intel and an AI read; listing on Trending is a separate flow. [claim S6 S8]

$ROBINDEX is a PonsLauncherToken created by PonsLaunchFactory.launchToken. Pair asset is WETH. Venue is Uniswap v3 pool 0xcC14…ddf4D at fee 10000. Constructor socials set twitter to https://x.com/robindexpro and telegram to https://t.me/robindexchat; website was empty. After restrictionBlocks (2) the token is a plain ERC-20. [verified S18 S21 S23]

DexScreener ROBINDEX/WETH Uniswap v3 at 2026-09-03T02:48Z: marketCap 44344 USD, fdv 44344 USD, volume.h24 6983.97 USD, liquidity.usd 21045.16. That liquidity figure is the pool, not a protocol TVL. [claim S22]

Blockscout holders_count is 238. t.me/robindextrending listed 2132 subscribers. [claim S17 S26]

## Communications

Official account posted homepage ads live on Robindex [claim S10]

Official account posted ROBINDEX verify code on Robinscan [claim S12 S25]

Official account posted whale chat for 15M ROBINDEX [claim S11]

@DeGenWealth2 posted the ROBINDEX contract address [claim S13]

Official account posted Wednesday scanner and call updates [claim S14]

Official account posted Medium piece on still building [claim S15]

Official account posted Welcome to Robindex hub [claim S24]

## Findings

The token is a PonsLauncherToken with a two-block launch window, then a plain ERC-20; verified source has no scanner, fee-split or treasury hook. LP NFT 579618 sits in PonsLaunchLocker. /safety names one official CA and says any other $ROBINDEX is not from the project. robindex.money, robindex.finance and robindex.online use the same word for different products. [claim S6]

- The token has no on-chain scanner, fee or treasury function in verified source. [verified S23]
- Official CA is 0xd82f…C6F3; /safety says any other $ROBINDEX is not from the project. Flag ca-collision. [claim S7]
- robindex.money ($RDEX), robindex.finance ($RBD) and robindex.online (OTC) use the Robindex name without a site or constructor link this pass. Flag third-party-link. [claim S27 S28 S29]
- Distinct from The Index, Robinhood Index Vaults, and Robinscan. [claim S12 S16]
- LP position 579618 is in PonsLaunchLocker. [verified S18]
- No matching audit report was located. [unknown]

- Receipts: robindex.pro, /about, /safety, /scanner, @robindexpro profile and posts, t.me/robindextrending, Medium, Blockscout token/pool/tx/source, RPC, DexScreener, robinscan.io token URL, and the three other Robindex domains were opened on 2026-09-03 and excerpts copied from the responses. [verified S6 S9 S16 S21 S22]
- Numbers: 44344 is DexScreener marketCap/fdv for the ROBINDEX/WETH pair, not an all-chains total. 21045.16 is pair liquidity.usd. 238 is Blockscout holders_count. [claim S17 S22]
- Adversarial: the strongest contrary reading is that Robindex is The Index, an ERC-4626 index vault, or Robinscan. Contrary signals are domain, handle, leaf and the reproduced Pons token 0xd82f…C6F3; @robindexpro posted a Robinscan verify code for that token rather than claiming the explorer. [inference S6 S9 S12 S16]

## Sources

- S6 — About — Robindex.
- S7 — Safety — Robindex.
- S8 — Token scanner — Robindex.
- S9 — X profile RobinDex — Automated Robinhood Token Scanner.
- S10 — Homepage ads are live on Robindex.
- S11 — Robindex Whale Chat.
- S12 — Verifying our token on Robinscan.
- S13 — ROBINDEX among Robinhood Chain pairs.
- S14 — $Robindex Wednesday.
- S15 — Robindex Didn’t Stop Building.
- S16 — Address 0xd82f70…C6F3.
- S17 — Token 0xd82f70…C6F3.
- S18 — Creation tx 0x262384a7…53847.
- S19 — Address 0xcC14…ddf4D UniswapV3Pool.
- S21 — eth_getCode and PonsLauncherToken views.
- S22 — ROBINDEX token pairs on robinhood.
- S23 — Verified source PonsLauncherToken 0xd82f…C6F3.
- S24 — Welcome to Robindex.
- S25 — ROBINDEX token page.
- S26 — Robindex Trending.
- S27 — Robindex — The on-chain index layer for tokenized stocks.
- S28 — RobinDEX: the fully on-chain orderbook DEX.
- S29 — Robindex | P2P OTC desk for Robinhood Chain.
- S30 — Named @Mike_Majestic as the coder.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T02:56:00Z; methodology_version: proofline-v1.0.
