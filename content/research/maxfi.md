---
slug: maxfi
coverage: stub
methodology_version: proofline-v1.0
---

# MaxFi — research record

## Identity

MaxFi is classified as Liquidity manager.

No-swap concentrated-liquidity manager on Robinhood Chain. A deposit opens a per-user Uniswap v3 NFT; the vault rebalances by minting a new range from existing balances with no swap. Users deposit tokenized-stock and meme pairs at maxfi.tech. @MAXFILABS runs the Robinhood UI; DefiLlama labels the vault a Snuggle whitelabel.

Themes: vault, rwa, memecoin, nft, stock-paired:NVDA

## Deployment

MaxFi Robinhood vault (SnuggleVault proxy): 0x1195C074F898b7644bA732407619c9804dFE6DCE on robinhood-chain. [verified S10 S11 S16 S17]

SnuggleVaultUpgradeable: 0x999A74ddFde1575C4db454A0300d5F0351A891dE on robinhood-chain. [verified S12 S16]

ViewHelper: 0x71b55E366a0F43260b1138A32c312ba7bb7F30F7 on robinhood-chain. [verified S10 S13 S16]

UniswapV3Adapter: 0x76bDb43d2EC3b190087076649224F47A58C44eF2 on robinhood-chain. [verified S10 S14 S16]

ProxyAdmin: 0x413Ca90D38D964546c2fE03cB103df57372630F6 on robinhood-chain. [verified S15 S16]

MaxFi Vault (Proxy) on Base: 0x7d27cdfbfcc878f7e7349e216d44204bfd2afd55 on base. [claim S7 S10 S16]

## Control

Vault 0x1195…6DCE is an EIP-1967 TransparentUpgradeableProxy. Implementation is SnuggleVaultUpgradeable 0x999A…91dE. ProxyAdmin is 0x413C…30F6. `owner()` on the vault and on ProxyAdmin returns 0x6aC51A…25FF, which has no code and created those contracts. RPC admin slot was 0x0 at block 53080627. [verified S11 S15 S16]

## Security

maxfi.tech/security lists V30 (16 Feb 2026) with 0 critical/high/medium and a Base contract table including MaxFi Vault (Proxy) 0x7d27…fd55. The same page states the reviews used AI security analysis tools. The homepage and an official post name Valves/Valve Security. Llama lists Abyss.pdf on the Snuggle row. The PDF was not opened line by line. [claim S6 S7 S9 S22]

## Engineering

_Research pending._

## Team

@MAXFILABS lists maxfi.tech. The security page links Twitter to @MAXFILABS. Bio states Powered By Snuggle. Security contact email is snugglefi@gmail.com. No repository URL was located on the site, the bio, or Llama. Discord on the site is discord.gg/fjNY8UzYAc; the bio uses a different Discord t.co. Neither invite was opened. [verified S6 S7 S8]

Snuggle (snuggle.fi / @SnuggleFi) is a separate census slug. Llama labels the Robinhood vault MaxFi and calls MaxFi a Snuggle whitelabel. Keep both rows. [verified S10 S11]

## Product and economics

A deposit opens a per-user concentrated-liquidity NFT. The site says rebalance mints a new range from existing balances with no swap, and withdrawal is open at any time. Performance fee is 15% of earnings. Referral is 3% paid from MaxFi's share. [claim S6 S25]

FAQ: Robinhood Chain is where the tokenized stocks and ETF pools run; Base and Arbitrum carry the crypto pools. Homepage lists NVDA, GME, SPCX and other stock pairs against USDG, plus Robinhood meme pools such as CASHCAT/WETH. [claim S6]

Robinhood Chain TVL is 4534836 USD at 2026-09-03T01:23:23Z from `currentChainTvls['Robinhood Chain']` on protocol/snuggle. GET protocol/maxfi returned Protocol not found. All-chains last tvl on the Snuggle row is 9195133 USD (Base 4641120, Arbitrum 19175). That all-chains figure is Snuggle plus MaxFi, not a MaxFi-only chain slice. [claim S9]

Robinhood dailyFees for 2026-09-02 are 121834 USD; dailyRevenue 16710 USD, labeled Snuggle in the breakdown. The adapter's only Robinhood vault is the MaxFi-labeled one. ViewHelper `getActivePositionCount()` returned 9078 at block 53080627. @MAXFILABS posted $9.14M TVL on 2026-09-02; that is a project post, not the Robinhood Llama slice. [claim S18 S19 S20] [verified S16]

## Communications

@MAXFILABS quotes an SGOV/USDG share link [claim S23]

@MAXFILABS posts MaxFi at $9.14M TVL [claim S20]

@MAXFILABS posts Valve Security audit reply [claim S22]

@MAXFILABS quotes a Robinhood gold-rush post [claim S24]

@MAXFILABS posts $128,324 paid to LPs in 24h [claim S21]

## Findings

Vault `owner()` and ProxyAdmin `owner()` return the same externally owned account, so upgrades sit with one key. Llama's Robinhood TVL and fees sit on the Snuggle module, so a MaxFi-only all-chains figure does not exist there. The security page states V30 used AI analysis tools, while the homepage and an official post name Valves/Valve Security. [claim S6]

- One EOA owns the vault and the ProxyAdmin. [verified S16]
- Robinhood TVL in the Snuggle Llama module is the MaxFi-labeled vault; there is no protocol/maxfi row. [verified S9 S10]
- Security page states V30 used AI analysis tools; homepage and an official post name Valves/Valve Security; Abyss.pdf was not matched to the Robinhood bytecode this pass. [claim S6 S7 S22]
- No-swap rebalance still leaves range and impermanent-loss path risk; /risks says IL is reduced, not eliminated. [claim S26]
- /docs still describes the protocol as built on Base. [claim S25]

- Receipts: maxfi.tech, /security, /docs, /risks, @MAXFILABS profile and posts, Llama protocol/fees/revenue, the Snuggle adapter, Blockscout vault/impl/helper/adapter/ProxyAdmin/create tx, and RPC were opened on 2026-09-03 and excerpts copied from the responses. [verified S6 S9 S11 S16]
- Numbers: TVL 4534836 is the Robinhood chain slice on protocol/snuggle, not the 9195133 all-chains last tvl and not the $9.14M project post. Fees 121834 and revenue 16710 are the Robinhood bars for 2026-09-02. [claim S9 S18 S19 S20]
- Adversarial: the strongest contrary reading is that MaxFi is only a frontend on Snuggle and has no distinct deployment. Adapter comment MaxFi Robinhood, verified name SnuggleVaultUpgradeable, @MAXFILABS bio Powered By Snuggle, and the separate maxfi.tech / @MAXFILABS surface argue they share the engine; they remain separate slugs. [inference S8 S10 S11]

## Sources

- S6 — MaxFi homepage.
- S7 — Security.
- S8 — MAXFI profile.
- S9 — Snuggle protocol row.
- S10 — snuggle adapter ROBINHOOD_VAULTS.
- S11 — Address 0x1195…6DCE TransparentUpgradeableProxy.
- S12 — Address 0x999A…91dE SnuggleVaultUpgradeable.
- S13 — Address 0x71b5…F30F7 ViewHelper.
- S14 — Address 0x76bD…4eF2 UniswapV3Adapter.
- S15 — Address 0x413C…30F6 ProxyAdmin.
- S16 — eth_getCode, owner, EIP-1967, getActivePositionCount.
- S17 — Vault creation tx 0x3ae0854d….
- S18 — Snuggle dailyFees.
- S19 — Snuggle dailyRevenue.
- S20 — MAXFI JUST HIT $9 MILLION TVL.
- S21 — $128,324 PAID OUT TO LP FARMERS IN THE LAST 24 HOURS.
- S22 — MaxFi been audited by Valve Security.
- S23 — Stable pair farming will never be the same.
- S24 — Gold Rush on Robinhood Chain for Uniswap LP farmers.
- S25 — Documentation.
- S26 — Risks & Disclaimers.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T01:30:00Z; methodology_version: proofline-v1.0.
