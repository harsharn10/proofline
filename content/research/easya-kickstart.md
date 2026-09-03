---
slug: easya-kickstart
coverage: stub
methodology_version: proofline-v1.0
---

# EasyA Kickstart — research record

## Identity

EasyA Kickstart is classified as Stock-paired token factory.

EasyA Kickstart is a permissionless ideas launchpad with a Robinhood Chain lane at kickstart.easya.io/robinhood. A launch creates a Uniswap v4 pool with one-sided locked liquidity. Creators pair against ETH or one of 24 listed stock tokens and claim about 1% of volume in the paired asset. The ETH factory is PumpFactory proxy 0x519f…273e; the stock factory is StockLaunchpad proxy 0x785d…5Fc1. The handle is @EasyA_Kickstart.

Themes: launchpad

## Deployment

ETH PumpFactory proxy: 0x519fd71F5df8242Fb8BccAA346eA5B20c336273e on robinhood-chain. [verified S8 S10 S11]

PumpFactory implementation: 0x2A01f98D59A0f34869B5A52C705045135c29E815 on robinhood-chain. [claim S10 S11 S18]

StockLaunchpad proxy: 0x785dCae72C87Ad4d28A703A6c5db455891615Fc1 on robinhood-chain. [verified S8 S12 S13]

StockLaunchpad implementation: 0xEF241C8da8e44B57296Cb1C58Cc6C769a04994BE on robinhood-chain. [claim S12 S13 S19]

ETH factory ProxyAdmin: 0xC190fb813Df94A936643cDD29A45deeDD089ab66 on robinhood-chain. [claim S10 S20]

StockLaunchpad ProxyAdmin: 0xe2f56e355983482948B4029E2D3a9a552805c8e9 on robinhood-chain. [claim S12 S21]

feeCollector / ProxyAdmin owner(): 0x981DA90234D2570450b38bAc900D5244b386e587 on robinhood-chain. [verified S10 S12 S20 S22]

## Control

owner() on the factory proxies reverts. feeCollector() on both returns 0x981DA90234D2570450b38bAc900D5244b386e587. That address has no code. It created both proxies and both implementations. ProxyAdmin 0xC190…ab66 (verified) and 0xe2f5…c8e9 (unverified) both return that EOA from owner(). No timelock address was located. [verified S10 S20 S22]

## Security

_Research pending._

## Engineering

_Research pending._

## Team

@EasyA_Kickstart names kickstart.easya.io in the website field. kickstart.easya.io HTML uses og:url kickstart-solana.easya.io and has no twitter:site. Llama twitter is EasyA_Kickstart. @EasyAKicksta copies the same display name and bio with 2 followers; flag handle-collision. EasyA-Tech/kickstart-skills is a Base agent skill, not the RH factory source. Flag unconfirmed-official. [claim S1 S6 S23 S24]

## Product and economics

ETH launches call createToken on factory 0x519f…273e and mint into a Uniswap v4 pool with one-sided locked liquidity. Stock launches call createToken with a quote token on StockLaunchpad 0x785d…5Fc1 and emit StockTokenLaunched. The create page lists ETH plus 24 stocks; featured quotes are NVDA, TSLA, SPY, AAPL, SPCX, and GME. Creator fees are about 1% and can be assigned to a wallet, an X or Instagram bio, or a Kickstarter project. [claim S7 S8] [verified S16]

JS initial-buy copy also names a 2% protocol and creator fee on the atomic Uniswap v4 swap. That is a different number from the 1% creator-volume posts; both are claims until fee bps are read from a feeShare. [claim S7 S3]

Factory totalTokens 3138 plus StockLaunchpad totalTokens 9 equals the official Robinhood tokens API total 3147 on 2026-09-03. Llama currentChainTvls is empty and chains is [Solana] only; there is no Robinhood Chain TVL slice this pass. The 2 Sep post that creators earned over $1,000,000 since launch does not split Solana from Robinhood Chain. [verified S10 S12 S16] [claim S4 S17]

## Communications

@EasyA_Kickstart posts stock-paired launches on Robinhood Chain [claim S3]

@EasyA_Kickstart posts stock creator fees live [claim S5]

@EasyA_Kickstart posts Kickstart live on Robinhood (beta) [claim S14]

## Findings

Both factories are upgradeable ERC1967 proxies. ProxyAdmin owner() on the ETH factory admin and the stock admin is one externally owned account with no code. The stock admin source is not verified. Llama's Kickstart page is Solana Meteora, so a reader who takes that TVL as a Robinhood Chain figure is on the wrong chain. [verified S10 S20 S22] [claim S17]

- Both factories are upgradeable; ProxyAdmin owner is one EOA with no code. [verified S20 S22]
- StockLaunchpad admin 0xe2f5…c8e9 source is not verified on Blockscout this pass. [verified S21]
- No audit report URL. [unknown]
- Llama Kickstart is Solana Meteora, not a Robinhood Chain slice. [claim S17]
- Creator fee is posted as 1% of volume; the create-page initial-buy copy names 2% protocol and creator fee. [claim S3 S7]
- @EasyAKicksta collides on display name with 2 followers. [claim S24]

- Receipts: kickstart.easya.io, /robinhood, /robinhood/create, JS chunk 164, tokens API, X profile and posts, Llama protocol, GitHub 404, Blockscout api/v2, and RPC were opened on 2026-09-03; excerpts copied from those responses. [verified S6 S8 S10 S16]
- Numbers: token counts are factory totalTokens plus StockLaunchpad totalTokens against the official chain=robinhood API total, not an all-chains figure. Bytecode lengths, nonces, and owner() are chain 4663 RPC. Llama TVL was not used as a RH number. [verified S10 S12 S16]
- Adversarial: strongest contrary reading is that 0x519f…273e is a leftover PumpFactory and new stock launches use a different factory, or that Kickstart on RH is only a frontend on pools.trade / LONG. Official JS sets 4663 protocol.factory and stockLaunchpad to these addresses; RPC implementation names are PumpFactory and StockLaunchpad; API total matches 3138+9. LONG, dontblink, and lunch.fun are different products. [inference S8 S10 S13]

## Sources

- S1 — EasyA Kickstart profile.
- S3 — Stock-paired launches on Robinhood Chain.
- S4 — Launch a token paired with your favorite stock.
- S5 — Stock creator fees are now LIVE.
- S6 — kickstart.easya.io home.
- S7 — Launch your token (Robinhood).
- S8 — Robinhood JS protocol config.
- S10 — eth_getCode / totalTokens factory 0x519f…273e.
- S11 — Address 0x519fd71F5df8242Fb8BccAA346eA5B20c336273e.
- S12 — eth_getCode / totalTokens StockLaunchpad 0x785d…5Fc1.
- S13 — Address 0x785dCae72C87Ad4d28A703A6c5db455891615Fc1.
- S14 — Kickstart is now live on Robinhood (beta).
- S16 — Robinhood tokens API.
- S17 — protocol/easya-kickstart.
- S18 — Address 0x2A01f98D59A0f34869B5A52C705045135c29E815.
- S19 — Address 0xEF241C8da8e44B57296Cb1C58Cc6C769a04994BE.
- S20 — Address 0xC190fb813Df94A936643cDD29A45deeDD089ab66.
- S21 — Address 0xe2f56e355983482948B4029E2D3a9a552805c8e9.
- S22 — Address 0x981DA90234D2570450b38bAc900D5244b386e587.
- S23 — orgs/easya and EasyA-Tech/kickstart-skills.
- S24 — @EasyAKicksta profile.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T05:25:00Z; methodology_version: proofline-v1.0.
