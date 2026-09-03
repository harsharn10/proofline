---
slug: sherwood
coverage: stub
methodology_version: proofline-v1.0
---

# Sherwood — research record

## Identity

Sherwood is classified as Private transfer protocol.

A shielded mixer and DEX on Robinhood Chain. Users deposit ETH or tokens into one Groth16 vault, then withdraw or swap through Uniswap without linking the output address. $SHERWOOD is the Pons-launched app token. @sherw00d_cash runs sherwood.cash.

Themes: privacy, rwa, agent

## Deployment

SherwoodVault (immutable mixer + shielded DEX): 0xf54013b8BE8fdFcF0CD1fD727c803F16c2450736 on robinhood-chain. [verified S10 S11 S12 S13]

SwapLogic (UUPS proxy): 0x52445Ae1B988CfDc668EB15628629ED7d0890C6A on robinhood-chain. [claim S12 S25]

SwapLogic implementation: 0x10562a98b0eB2BFF853275da5F34BF498192d45B on robinhood-chain. [claim S25]

Verifier2 (Groth16): 0x3d7bEA6294BC033fAA7e0e06F2D94088106CDb79 on robinhood-chain. [claim S12 S30]

SHERWOOD token (PonsV2LauncherToken): 0xD4DC6B48Ad73EC51E71D9B8F65568f88609b92c1 on robinhood-chain. [verified S14 S15 S16]

Vault admin EOA: 0x93080bdF26050307d410d372640D4398397E0A6E on robinhood-chain. [claim S12 S13]

protocolFeeRecipient EOA: 0x6cEE2DC8A42A5AA3f28799ea8Ebd23Ea5e07cc08 on robinhood-chain. [claim S12]

## Control

A 29 Aug post said `$SHERWOOD` contracts are immutable and compared that to PrivacyCash being upgradeable. The verified vault source matches the immutable-custodian claim; SwapLogic does not. [claim S23] [verified S11 S25]

## Security

`admin()` is EOA `0x93080bdF26050307d410d372640D4398397E0A6E`, also the vault creator. `protocolFeeRecipient()` is EOA `0x6cEE2DC8…cc08`. `CONFIG_TIMELOCK()` is 0. `MAX_PROTOCOL_FEE_BPS` is 1000. SwapLogic at `0x52445Ae1…` is an ERC-1967 proxy; implementation `0x10562a98…` is unverified. Hasher and Hasher4 have no Solidity verification (deploy notes say circomlibjs blobs). No SherwoodVault audit URL this pass. [verified S12 S13 S25] [unknown]

## Engineering

_Research pending._

## Team

Public identity is sherwood.cash and `@sherw00d_cash`. The site JS, DexScreener info, Pons launch params and GitHub org name Sherwood.cash all list that handle; the X page HTML contains sherwood.cash. Telegram `t.me/sherwood_cash` is linked from the site footer. Bio: Built by `@forezy_`. Token launch from `0x2c61c825…` is not the vault admin; that link is unreproduced. [verified S7 S15 S16] [claim S17]

sherwood.sh / `@sherwoodagent` is a different product: agent-run ERC-4626 funds and `$WOOD`, with docs on Robinhood testnet 46630. Do not merge. [claim S32]

## Product and economics

Deposit ETH or an ERC-20 into `SherwoodVault`. The contract keeps one Poseidon Merkle tree per asset, spends notes with a Groth16 proof (`transact`), and for a private swap (`executeSwap`) pulls `amountIn`, asks SwapLogic only to build calldata, checks the router against a vault-held allowlist, executes the swap itself, and mints the output note from the measured balance delta. Site copy names Uniswap v2/v3/v4 routers. [claim S7 S8] [verified S11]

`$SHERWOOD` is a Pons v2 `PonsV2LauncherToken` named Sherwood / SHERWOOD, 18 decimals, totalSupply 1e27, created 2026-08-08T19:55:38Z via `PonsV2LaunchAndBuy.launchAndBuy` with twitter `https://x.com/sherw00d_cash`. Lead book is Uniswap v4 SHERWOOD/ETH pool `0x2e03323e…d874`, created 2026-08-10T13:57:58Z. [verified S14 S15 S16]

Live fees: `swapFeeBps()` 50 and `withdrawFeeBps()` 50. Llama prices `ProtocolFeeCharged` in ETH or USDG as both fees and protocol revenue. A 2 Sep post described a 4-in/4-out circuit as upcoming v2; the verified vault this pass is still the 2026-07-28 deploy. [verified S12 S26] [claim S18]

Llama Robinhood Chain TVL 72357.59239 USD at 2026-09-03T00:05:11Z (chain slice). Same-day token mix includes ETH ~36853 USD, SHERWOOD ~27708 USD, USDG ~4785 USD, plus stock tokens (NVDA, TSLA, GOOGL, COIN) and memecoins. Daily fees/revenue bar 2026-09-02: 25.87 USD. Vault native balance 15.45375 ETH matches Llama's ETH unit amount. [verified S9 S12]

DexScreener Uniswap v4 SHERWOOD/ETH (not all pairs): liquidity 51680.99 USD, 24h volume 60337.16 USD, marketCap 319875 USD. Blockscout token: 658 holders. [verified S14 S16]

Vault `to` list on 2026-09-02 includes `transact` and `executeSwap`. A 30 Aug post said TVL crossed 80k USD; Llama's 3 Sep slice is 72357. [verified S11] [claim S22]

## Communications

Account posted privacy beyond payments [claim S20]

Account posted v2 4-in/4-out circuit [claim S18]

Account posted private limit orders [claim S19]

Account posted Season 1 airdrop of 5% supply [claim S21]

Account posted vault TVL crossed $80K [claim S22]

Account posted vault contracts are immutable [claim S23]

## Findings

The vault is not upgradeable; SwapLogic is. `CONFIG_TIMELOCK` is 0, so a proposed SwapLogic or router change can be enabled in the next transaction. Admin and fee recipient are EOAs. Deposit and withdrawal amounts are public; the 29 Aug usage post said matching size and timing can link them. [verified S12 S25] [claim S23]

- SwapLogic is a UUPS proxy with an unverified implementation; `CONFIG_TIMELOCK` is 0. [verified S12 S25]
- Vault admin and fee recipient are EOAs with no on-chain timelock. [verified S12]
- Deposit and withdrawal amounts are public; size/timing matching is a documented usage issue. [claim S23]
- No SherwoodVault audit report was located; Llama `audits` is 0. [unknown]
- `$SHERWOOD` launch from `0x2c61c825…` is a different EOA than the vault admin. [verified S15]
- Other "Sherwood" / `$WOOD` / `SWOOD` tickers exist on the chain; this slug is vault `0xf540…0736` and token `0xD4DC…92c1`. [claim S16 S32]

- Receipts: sherwood.cash and /docs, github.com/sherwood-cash/contracts README and deployRobinhood.js, x.com/sherw00d_cash and named status URLs, t.me/sherwood_cash, Blockscout address/token/tx APIs, DexScreener latest/dex/tokens, DefiLlama protocol/fees/adapter, docs.sherwood.sh (other product), and RPC eth_getCode/eth_call were opened on 2026-09-03; excerpts are copied from those responses. [verified S7 S11 S12 S16]
- Numbers: 72357.59239 USD is Llama `currentChainTvls['Robinhood Chain']`, not an all-chains total; 25.87 USD is the 2026-09-02 dailyFees/revenue bar, not the pulled-file 17.27 from 2026-09-02T21:05; 60337.16 USD is DexScreener Uniswap v4 SHERWOOD/ETH volume.h24, not all SHERWOOD pairs; 658 is Blockscout holders_count. [claim S9 S14 S16 S26]
- Adversarial: the strongest contrary reading is that census Sherwood is the sherwood.sh `$WOOD` agent layer, or a same-ticker meme. Distinct handle, domain, vault address, Llama twitter `sherw00d_cash`, and Pons launch params listing `@sherw00d_cash` argue against a merge. [inference S9 S15 S32]

## Sources

- S7 — sherwood.cash home.
- S8 — contracts README.
- S9 — Sherwood protocol row.
- S10 — sherwood adapter VAULT.
- S11 — Address 0xf540…0736 SherwoodVault.
- S12 — eth_getCode and SherwoodVault views.
- S13 — Vault creation tx 0xcb41e3cc….
- S14 — Token 0xD4DC…92c1.
- S15 — SHERWOOD launchAndBuy tx.
- S16 — latest/dex/tokens SHERWOOD.
- S17 — X profile @sherw00d_cash.
- S18 — What's new in Sherwood v2.
- S19 — $SHERWOOD LIMIT ORDER UPDATE.
- S20 — Privacy beyond payments.
- S21 — Airdrop Season 1.
- S22 — TVL crossed $80K.
- S23 — Contracts are immutable.
- S25 — SwapLogic proxy 0x52445Ae1….
- S26 — Sherwood dailyFees.
- S30 — Verifier2 0x3d7bEA62….
- S32 — docs.sherwood.sh home.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:10:00Z; methodology_version: proofline-v1.0.
