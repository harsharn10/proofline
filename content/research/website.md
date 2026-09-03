---
slug: website
coverage: stub
methodology_version: proofline-v1.0
---

# notawebsite — research record

## Identity

notawebsite is classified as Tokenized advertising market.

Tokenized advertising market: 165 visible elements on notawebsite.fun are separately owned on-chain slots. A user pays ETH to claim or take a slot, then edits its content; a take costs 1.4× and credits the prior owner 1.15×. Each slot is an ERC-721 (TINAW). $WEBSITE is a Pons-launched ERC-20 used to burn for upgrades. The same account is building PageMarkets for any publisher page. Operator: @notawebsite_rh.

Themes: rwa, nft, memecoin, tooling, stock-paired:NVDA

## Deployment

WEBSITE ERC-20 (PonsLauncherToken): 0x0762C1708F0D23F86b29D6B857121FF7DF357506 on robinhood-chain. [verified S9 S10 S14]

TinawSlots v2 (TINAW ERC-721): 0xa112f87dd43D4265Bdd3918A4bb593C7F83ED50a on robinhood-chain. [verified S5 S11]

TinawSlots v1 (frozen board): 0x28Ddf599f8c16ee36a77D7b420973F7201a8BF3c on robinhood-chain. [verified S5 S12]

Uniswap v3 website/WETH pool: 0x6D489e07d7Fe2b4Bc5749f75d56337888B68a34a on robinhood-chain. [claim S10 S14]

Slot operator / treasury / creator: 0x15e1D12Fc8A7bF97eaaB211d6353F585C53905c6 on robinhood-chain. [verified S5 S11 S13]

## Control

TinawSlotsV2 and TinawSlots v1 both have verified source. owner() on each returns 0x15e1…05c6, which has no code. Docs label that account owner / treasury / creator. No timelock address is published. [verified S5 S11 S13]

websitekit README states the SDK contracts are experimental, unaudited, and testnet-only on chain 46630. That repository was not matched to TinawSlots bytecode this pass. [claim S22]

## Security

_Research pending._

## Engineering

_Research pending._

## Team

@notawebsite_rh lists linktr.ee/notawebsite. The Pons launchToken constructor names that handle and notawebsite.fun. DexScreener token info repeats the handle and Linktree. Slot contracts were created by 0x15e1…05c6; the token was launched from 0xC73C…5094. [verified S8 S10]

PageMarkets is on the Linktree and in identity posts. pagemarkets.com does not name the handle or a contract this pass. [claim S8 S19 S23]

## Product and economics

A slot is one page element. Unclaimed slots sell at a floor from 0.001 ETH. An owned slot is taken at 1.4×; the prior owner is credited 1.15×; the rest is described as creator 5% plus treasury. Payouts sit until claimed on /withdraw. Content is hashed on chain. [claim S5]

Owned slots can set a 0.1×–4× ask multiplier, rent for up to 7 days (protocol 35% of rent), and upgrade by burning WEBSITE (link 50k, image/background 250k, video 1M) for 21 days. Stale prices decay 10% per week toward the floor. [claim S5]

@notawebsite_rh posted on 2026-09-01 that each slot has an EIP-6551 token-bound account and that one slot holds $50 of NVDA gated by 100k WEBSITE. No TBA address is on /docs. [claim S16]

DexScreener lead Uniswap v3 website/WETH pair 0x6D48…a34a: liquidity 197614.95 USD, volume.h24 547112.4 USD, marketCap 2612257 USD at 2026-09-03T02:56:00Z. Blockscout holders_count is 1590; circulating_market_cap is 956387 USD. Those market-cap figures are not the same number. [claim S9 S14]

notawebsite.fun/stats, both contracts combined: gross volume 8.5358 ETH, paid to displaced owners 6.3769 ETH, site kept 2.1590 ETH, 145/165 slots owned, 58 owners, 282 takes. The 2026-08-30 account post was 8.178 ETH volume since v2 and 6.08 ETH paid to slot owners. [claim S6 S18]

## Communications

PageMarkets escrow: per-site treasury and 28-day timer [claim S15]

Slots get EIP-6551 wallets and an NVDA bounty [claim S16]

Account says PageMarkets value accrues to $WEBSITE [claim S17]

Account posts 8.178 ETH volume and 6.08 ETH payouts [claim S18]

Identity moving from notawebsite to PageMarkets [claim S19]

Andrew names $WEBSITE among Robinhood utility plays [claim S20]

v2 slot contract posted as live [claim S21 S11]

## Findings

Both slot contracts return the same externally owned account from owner(), with no timelock named in the docs. PageMarkets escrow and EIP-6551 wallets are account posts, not reproduced addresses. A second WEBSITE ticker exists as a Doppler clone. DexScreener and Blockscout disagree on market cap. [claim S5]

- Slot owner() is one EOA with no published timelock. [verified S11 S13]
- PageMarkets has no reproduced mainnet CA and no listings this pass. [claim S23]
- websitekit is labeled unaudited and testnet-only; live TinawSlots source was not matched to it. [claim S22]
- A DopplerERC20V1 clone reuses the name this is not a website / WEBSITE at 0x0E97…1E18. [verified S24]
- DexScreener marketCap and Blockscout circulating_market_cap disagree. [claim S9 S14]

- Receipts: notawebsite.fun/docs and /stats, @notawebsite_rh profile and listed posts, Linktree, pagemarkets.com, websitekit GitHub README, Blockscout API v2 for the token, both slot contracts, the operator, the launch tx and the Doppler clone, DexScreener latest/dex/tokens, and RPC eth_getCode/eth_call were opened on 2026-09-03; excerpts are copied from those responses. [verified S5 S9 S10 S11 S14]
- Numbers: 547112.4 is the Uniswap v3 website/WETH pair volume.h24, not an all-pairs sum. 2612257 is that pair's marketCap. 956387 is Blockscout circulating_market_cap. 8.5358 ETH is the site indexer, both contracts combined. [claim S6 S9 S14]
- Adversarial: the strongest contrary reading is that PageMarkets is a separate product, or that 0x0E97…1E18 is the official token. Constructor socials, DexScreener info, Linktree Pons URL, and 1590 holders on 0x0762…7506 versus 5 holders on the Doppler clone argue against merging or swapping the CA. [inference S8 S9 S10 S14 S24]

## Sources

- S5 — Docs — how this works and what's on-chain.
- S6 — Statistics — what the board has done so far.
- S8 — notawebsite Official.
- S9 — Address 0x0762…7506 PonsLauncherToken.
- S10 — launchToken tx 0xd676…7ec1.
- S11 — TinawSlotsV2 0xa112…D50a.
- S12 — TinawSlots v1 0x28Dd…F3c.
- S13 — Operator EOA 0x15e1…05c6.
- S14 — website token pairs on Robinhood.
- S15 — PageMarkets escrow design thread.
- S16 — Slots as smart wallets; NVDA bounty.
- S17 — PageMarkets value accrues to $WEBSITE.
- S18 — 8.178 ETH volume since v2.
- S19 — Identity moving to PageMarkets.
- S20 — Robinhood Chain utility list.
- S21 — v2 is live.
- S22 — vibecodermaxi/websitekit README.
- S23 — PageMarkets homepage.
- S24 — Doppler clone 0x0E97…1E18.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:05:00Z; methodology_version: proofline-v1.0.
