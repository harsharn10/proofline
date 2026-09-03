---
slug: robinhood-index-vaults
coverage: stub
methodology_version: proofline-v1.0
---

# Robinhood Index Vaults — research record

## Identity

Robinhood Index Vaults is classified as RWA index vault.

A testnet ERC-4626 vault that turns ETH into rIDX shares of a five-name stock-token basket. A user deposits ETH on Robinhood Chain testnet (chain id 46630); the vault wraps to WETH and swaps into PLTR, AMD, NFLX, AMZN and TSLA at 20% each through a mock router. nsvoud-dev publishes the contracts and a local Next.js app. Mainnet is listed as a later audit-and-launch phase.

Themes: index, rwa, vault

## Deployment

IndexVault rIDX (Robinhood Chain testnet 46630; largest rIDX by supply this pass): 0x04653bF84918B05a68A7d568233ec1e259338D7E on robinhood-chain. [claim S15 S18]

MockSwapRouter (hardcoded in scripts/fundRouter.js and deployVaultOnly.js; testnet 46630): 0x31ecd0d9cEd7AB0744A96acC8e3432576fc8e691 on robinhood-chain. [claim S8 S16 S18]

Testnet WETH constant in IndexVault.sol / hardhat scripts (not a project contract): 0x7943e237c7F95DA44E0301572D358911207852Fa on robinhood-chain. [claim S5 S17 S18]

## Control

Owner is msg.sender at deploy. onlyOwner can setIndex (tokens, weights summing to 10000 bps, fee tiers), setKeeper, setPriceOracle, forceTriggerSafeMode and exitSafeMode. Owner or keeper can rebalance and recordSnapshot. harvestAndReinvest is public. No timelock in the source. Testnet creator of the router and the largest rIDX is EOA 0xf809…. [verified S5] [claim S15 S16]

## Security

No audit report is in the repository. README Phase 2 names a security audit and a $5,000–$15,000 grant target. [claim S3 S14]

## Engineering

_Research pending._

## Team

GitHub user nsvoud-dev (display name nsvoud) owns the MIT-licensed repo. API twitter_username is 0xNSVOUD; the README does not name that handle. Commits are authored nsvoud / instansera@gmail.com; the initial MVP is co-authored by Cursor. [claim S10 S11 S23]

## Product and economics

IndexVault is OpenZeppelin ERC-4626 + Ownable. depositEth wraps ETH to the hardcoded testnet WETH and splits it across five constructor tokens at 2000 bps each. withdraw burns shares, sells the basket back to WETH, unwraps, and sends min(balance, wethOut) ETH. [verified S3 S5]

MockSwapRouter implements exactInputSingle at STOCK_PER_WETH = 100. README Phase 2 is to replace that mock with a production DEX after an audit. Vault rebalance calls pass amountOutMinimum 0. [verified S3 S6]

No DefiLlama protocol row. Testnet rIDX 0x04653b… holders_count 4, total_supply 2.200000000000063e15 (18 decimals). Eight rIDX tokens share the name on testnet. Last git push 2026-03-05. [claim S10 S15] [unknown]

## Communications

GitHub HEAD commit adds institutional UI and Safe Mode UX [verified S12]

GitHub initial MVP commit [verified S23]

## Findings

Swaps go through MockSwapRouter at a fixed 1 WETH = 100 stock tokens, not a live DEX. The owner can setIndex, rebalance, and force Safe Mode with no timelock. Eight unverified rIDX ERC-20s sit on testnet; the frontend vault address is an env var, not a committed CA. [verified S5 S6] [claim S15]

- MockSwapRouter is a fixed-rate test harness, not a production DEX. [verified S6]
- Owner can change the basket and force Safe Mode with no timelock. [verified S5]
- Eight unverified rIDX CAs on testnet; frontend vault address is not committed. [claim S9 S15]
- GitHub homepage Vercel URL returns 404. [claim S13]
- No audit report located. [claim S3]

- Receipts: GitHub README, Hardhat, IndexVault.sol, MockSwapRouter.sol, deploy/fund scripts, frontend chain config, repo and user APIs, two commits, Vercel 404, testnet explorer address/tx/search, and Blockscout 4663 address/search pages were opened on 2026-09-03; excerpts are copied from those responses. [verified S3 S4 S5 S15 S18]
- Numbers: holders_count 4 is the testnet token 0x04653b… slice, not a 4663 figure and not TVL. [claim S15]
- Adversarial: the strongest contrary reading is that a 4663 IndexVault search hit (INDEXVAULT 0xC6d1…, IndexVault 0xc6ff…, hMAG7 0x43e4…) is this product, or that census testnet-only is stale. Those 4663 contracts use different symbols, files and creators; repo CAs are empty on 4663; Hardhat has no 4663 network. [verified S18] [claim S20 S21 S22]

## Sources

- S3 — README.md Robinhood Index Vaults.
- S4 — hardhat.config.js robinhoodTestnet.
- S5 — contracts/IndexVault.sol.
- S6 — contracts/MockSwapRouter.sol.
- S8 — scripts/fundRouter.js MOCK_SWAP_ROUTER.
- S9 — frontend/src/config/chains.ts.
- S10 — nsvoud-dev/robinhood-index-vaults repository.
- S11 — user nsvoud-dev.
- S12 — commit 41f10a2 Institutional UI / Safe Mode UX.
- S13 — robinhood-index-vaults.vercel.app 404.
- S14 — VIDEO_SCRIPT.md grant demo.
- S15 — rIDX 0x04653bF84918B05a68A7d568233ec1e259338D7E.
- S16 — MockSwapRouter 0x31ecd0d9cEd7AB0744A96acC8e3432576fc8e691.
- S17 — Testnet WETH 0x7943e237c7F95DA44E0301572D358911207852Fa.
- S18 — 4663 empty check for repo CAs and rIDX search.
- S20 — INDEXVAULT token 0xC6d1cB3A0d1A049af5cC412D8C8c4c32149Fc0Cc.
- S21 — IndexVault 0xc6ff4bc6E90a624a20D5c06679965A951a5Ba2F4.
- S22 — Hood MAG7 Index hMAG7 0x43e4aa3204A2d3cee2E12532195E9a6b766a3639.
- S23 — commit 7fbe3ab initial MVP.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T18:55:00Z; methodology_version: proofline-v1.0.
