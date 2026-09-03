---
slug: snuggle
coverage: stub
methodology_version: proofline-v1.0
---

# Snuggle — research record

## Identity

Snuggle is classified as Liquidity manager.

No-swap concentrated-liquidity manager: a deposit opens a per-user Uniswap v3 NFT that the vault rebalances by minting a new range from existing balances, with no swap. Users deposit at snuggle.fi on Base and Arbitrum, or through maxfi.tech for Robinhood Chain stock and meme pools. The engine is @SnuggleFi; DefiLlama's Robinhood vault is labeled MaxFi.

Themes: vault, rwa, memecoin, nft

## Deployment

MaxFi Robinhood vault (SnuggleVault proxy): 0x1195C074F898b7644bA732407619c9804dFE6DCE on robinhood-chain. [verified S11 S12 S17 S18]

SnuggleVaultUpgradeable: 0x999A74ddFde1575C4db454A0300d5F0351A891dE on robinhood-chain. [verified S13 S17]

ViewHelper: 0x71b55E366a0F43260b1138A32c312ba7bb7F30F7 on robinhood-chain. [verified S11 S14 S17]

UniswapV3Adapter: 0x76bDb43d2EC3b190087076649224F47A58C44eF2 on robinhood-chain. [verified S11 S15 S17]

ProxyAdmin: 0x413Ca90D38D964546c2fE03cB103df57372630F6 on robinhood-chain. [verified S16 S17]

## Control

Vault 0x1195…6DCE is an EIP-1967 TransparentUpgradeableProxy. Implementation is SnuggleVaultUpgradeable 0x999A…91dE. ProxyAdmin is 0x413C…30F6. `owner()` on the vault and on ProxyAdmin returns 0x6aC51A…25FF, which has no code and created those contracts. [verified S12 S16 S17]

## Security

snuggle.fi/security lists V30 (16 Feb 2026) with 0 critical/high/medium and a Base contract table. The same page states the reviews used AI security analysis tools. Llama lists Abyss.pdf. The PDF was not opened line by line. [claim S8 S10]

## Engineering

_Research pending._

## Team

@SnuggleFi lists snuggle.fi. The security page links Twitter to @SnuggleFi. No repository URL was located on the site, the bio, or Llama. Telegram and Discord URLs on the security page were not opened. [verified S7 S8 S9]

MaxFi (maxfi.tech / @MAXFILABS) is a separate census slug. Llama labels the Robinhood vault MaxFi and calls MaxFi a Snuggle whitelabel. Keep both rows. [verified S11 S12]

## Product and economics

A deposit opens a per-user concentrated-liquidity NFT. The site says rebalance mints a new range from existing balances with no swap, and withdrawal is open at any time. Performance fee is 15% of earnings. [claim S7]

Robinhood stock and meme pools are deposited through maxfi.tech. @SnuggleFi posted the MaxFi compact view as powered by @SnuggleFi. snuggle.fi still lists Base and Arbitrum. [claim S7 S24 S25]

Robinhood Chain TVL is 4431613 USD at 2026-09-02T23:57:59Z from `currentChainTvls['Robinhood Chain']`. All-chains last tvl is 9110436 USD. Base is 4659653; Arbitrum is 19170. The $9.1M figure is all-chains, not the chain slice. [claim S10]

Robinhood dailyFees for 2026-09-02 are 121834 USD; dailyRevenue 16710 USD. ViewHelper `getActivePositionCount()` returned 9029 at block 53056880. [claim S19 S20] [verified S17]

## Communications

@MAXFILABS posts MaxFi at $9.14M TVL [claim S21]

@SnuggleFi posts $501,300 paid to LPs [claim S22]

@SnuggleFi posts Snuggle+MaxFi above $5.03M TVL [claim S23]

@SnuggleFi posts MaxFi compact view powered by Snuggle [claim S24]

## Findings

Vault `owner()` and ProxyAdmin `owner()` return the same externally owned account, so upgrades sit with one key. Llama's Robinhood TVL is the MaxFi-labeled vault, so a Snuggle-only chain-slice does not exist in that adapter. The security page states the V30 reviews used AI analysis tools, not a traditional third-party firm. [claim S7]

- One EOA owns the vault and the ProxyAdmin. [verified S17]
- Robinhood TVL in the Snuggle Llama module is the MaxFi-labeled vault. [verified S11]
- Security page states V30 used AI analysis tools; Abyss.pdf was not matched to the Robinhood bytecode this pass. [claim S8]
- No-swap rebalance still leaves range and impermanent-loss path risk. [claim S7]

- Receipts: snuggle.fi, /security, @SnuggleFi profile and posts, maxfi.tech, Llama protocol/fees/revenue, the Snuggle adapter, Blockscout vault/impl/helper/adapter/ProxyAdmin/create tx, and RPC were opened on 2026-09-03 and excerpts copied from the responses. [verified S7 S10 S12 S17]
- Numbers: TVL 4431613 is the Robinhood chain slice, not the 9110436 all-chains last tvl. Fees 121834 and revenue 16710 are the Robinhood bars for 2026-09-02. [claim S10 S19 S20]
- Adversarial: the strongest contrary reading is that Snuggle has no Robinhood product and the Llama row is only MaxFi. Adapter comment, verified name SnuggleVaultUpgradeable, and @SnuggleFi posts that MaxFi is powered by SnuggleFi argue they share the engine; they remain separate slugs. [inference S11 S12 S24]

## Sources

- S7 — Snuggle homepage.
- S8 — Security.
- S9 — SnuggleFi profile.
- S10 — Snuggle protocol row.
- S11 — snuggle adapter ROBINHOOD_VAULTS.
- S12 — Address 0x1195…6DCE TransparentUpgradeableProxy.
- S13 — Address 0x999A…91dE SnuggleVaultUpgradeable.
- S14 — Address 0x71b5…F30F7 ViewHelper.
- S15 — Address 0x76bD…4eF2 UniswapV3Adapter.
- S16 — Address 0x413C…30F6 ProxyAdmin.
- S17 — eth_getCode, owner, EIP-1967, getActivePositionCount.
- S18 — Vault creation tx 0x3ae0854d….
- S19 — Snuggle dailyFees.
- S20 — Snuggle dailyRevenue.
- S21 — MAXFI JUST HIT $9 MILLION TVL.
- S22 — HALF A MILLION DOLLARS PAID OUT.
- S23 — Snuggle + MaxFi just passed $5,000,000 in TVL.
- S24 — MaxFi compact view powered by SnuggleFi.
- S25 — MaxFi homepage.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T00:20:00Z; methodology_version: proofline-v1.0.
