---
slug: bomba
coverage: stub
methodology_version: proofline-v1.0
---

# BOMBA — research record

## Identity

BOMBA is classified as Stock-paired token.

A one-billion-supply ERC-20 cloned into a Uniswap v4 pool quoted against Palantir Technologies • Robinhood Token. LongLauncher.create deployed Bombardilo (BOMBA) on 2026-08-31 and seeded the BOMBA/PLTR book. Traders buy and sell BOMBA on Uniswap v4. bombardilo.com and @bombaRH publish the CA this pass and stay unconfirmed-official.

Themes: memecoin, stock-paired:PLTR, rwa

## Deployment

BOMBA token (EIP-1167 DopplerERC20V1 clone): 0x525F24BF41F178174788C3297Af9c0Af1bA01E18 on robinhood-chain. [verified S1 S5 S18]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [verified S2 S5]

DopplerERC20V1Factory: 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [verified S3 S4 S5]

LongLauncher (creation tx to): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [verified S4 S5 S15 S18]

Airlock (token owner): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [claim S5 S6 S17]

PLTR Palantir Technologies • Robinhood Token (pair quote / numeraire): 0x894E1EC2D74FFE5AEF8Dc8A9e84686acCB964F2A on robinhood-chain. [verified S6 S7 S12 S16]

## Control

token owner() is Airlock. Create-from 0xce3D…9813 is an EOA with no code and is named launcher in LaunchCreated. Lock beneficiaries on create were 0x21E2…7A66 at 0.05 and 0x5456…fc87 at 0.95. [verified S5 S6 S18]

## Security

DopplerERC20V1 and DopplerERC20V1Factory are partially verified on Blockscout (src/tokens/DopplerERC20V1.sol, src/tokens/DopplerERC20V1Factory.sol, compiler v0.8.26). LongLauncher is verified (src/LongLauncher.sol). No audit report URL was located this pass. [verified S2 S3 S15] [unknown]

## Engineering

_Research pending._

## Team

bombardilo.com titles $BOMBA — Bombardilo Crocodilo and embeds CA 0x525F…1E18 plus @bombaRH. DexScreener info.websites and info.socials match that pair. @bombaRH bio includes the CA. Flag unconfirmed-official; do not file an official handle this pass. [claim S7 S13 S21]

PLTR is a rail: GET /rhj/assets lists Palantir Technologies • Robinhood Token at 0x894E…4F2A on chain 4663. [verified S12 S16]

## Product and economics

LongLauncher 0x22e9…eeED clones DopplerERC20V1 via EIP-1167. create from 0xce3D…9813 at 2026-08-31T18:30:19Z minted Bombardilo / BOMBA supply 1e9*1e18 into Uniswap v4 poolId 0xa1bb…1e79 quoted against PLTR 0x894E…4F2A. owner() returns Airlock 0xeb7C…0862. factory() reverts. [verified S4 S5 S6 S18]

PoolManager is 0x8366…0951. Hooks are DopplerHookInitializer 0x4e34…a544. A secondary BOMBA/USDG v4 book exists on DexScreener with $19 liquidity. [verified S6 S7 S9]

BOMBA/PLTR Uniswap v4 24h volume is 359737.22 USD and reserve_in_usd is 80879.44 at 2026-09-03T04:36:00Z from the Gecko pool endpoint. fdv_usd is 67674.48. Gecko token volume_usd.h24 is 360794.22 across all pools, not the PLTR book. [claim S8 S9]

DexScreener same pair: liquidity.usd 55966.75, volume.h24 381539.43, fdv/marketCap 67626. Blockscout holders_count 865. Pair created 2026-08-31T18:30:19Z. Assignment lead of liq ~$60,368 / vol ~$386,002 is nearer the DexScreener slice than the Gecko reserve. [claim S1 S7]

@Cryptogether_ posted a $BOMBA / $PLTR conviction note on 2026-09-02. @bombaRH posted 1K holders on 2026-09-02; live holders_count is 865. [claim S10 S23]

## Communications

@Cryptogether_ posted $BOMBA conviction vs $PLTR [claim S10]

@bombaRH posted 1K holders strong [claim S13 S23]

bombardilo.com publishes CA and @bombaRH [claim S21]

@0xCR33P posted BOMBA as a Longxyz launch on Robinhood [claim S11]

## Findings

USD liquidity figures on the BOMBA/PLTR book count both sides, and Gecko reserve ($80.9k) disagrees with DexScreener liquidity ($56.0k). Gecko labels the pool dex as bankr-robinhood while DexScreener and the create tx say Uniswap v4. Other BOMBA tickers exist on Blockscout and Solana. @bombaRH / bombardilo.com stay unconfirmed-official. [claim S12]

- Quote token PLTR 0x894E…4F2A is in GET /rhj/assets, so USD pool figures still mix BOMBA with a Stock Token, not USDG. [verified S12 S16]
- Gecko reserve $80.9k and DexScreener liquidity $56.0k disagree on the same pool. [claim S7 S8]
- Ticker collision with other Blockscout BOMBA tokens and a Solana Bombardino mint. [verified S20 S22]
- @bombaRH / bombardilo.com unconfirmed-official this pass. [claim S7 S13 S21]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/impl/factory/LongLauncher/PLTR and the create tx, RPC name/symbol/owner/code, DexScreener, Gecko pool/token, /rhj/assets, bombardilo.com, @bombaRH, @Cryptogether_, and @0xCR33P were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S8 S12]
- Numbers: 359737.22 is the Gecko BOMBA/PLTR pool 24h volume, not the 360794.22 token all-pools figure. Reserve 80879.44 is that pool. DexScreener 381539.43 / 55966.75 is the same pair, different aggregator. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that BOMBA is GOYBEAM, MONITOR, PALANTARD, or a Bankr launch, or that PLTR is this token. Creation is LongLauncher.create of 0x525F…1E18 against PLTR 0x894E…4F2A; the other names are different CAs; PLTR is the rhj/assets Stock Token rail. [inference S4 S12 S19]

## Sources

- S1 — Token 0x525F…1E18 Bombardilo / BOMBA.
- S2 — Address 0x3Be8…C599 DopplerERC20V1.
- S3 — Address 0x1B37…b69a DopplerERC20V1Factory.
- S4 — create tx 0x1df81cc9…2a3c.
- S5 — eth_getCode, name, symbol, owner() on BOMBA.
- S6 — create tx logs Initialize / LaunchCreated / Lock.
- S7 — latest/dex/tokens BOMBA.
- S8 — BOMBA/PLTR Uniswap v4 pool.
- S9 — Bombardilo token.
- S10 — conviction $BOMBA vs $PLTR.
- S11 — BOMBA Longxyz launch on Robinhood.
- S12 — GET /rhj/assets Stock Token registry.
- S13 — @bombaRH user search.
- S15 — Address 0x22e9…eeED LongLauncher.
- S16 — Token 0x894E…4F2A Palantir Technologies • Robinhood Token / PLTR.
- S17 — Address 0xeb7C…0862 Airlock.
- S18 — LaunchCreated log for BOMBA.
- S19 — search PALANTARD / PLTITS / GOYBEAM PLTR distinct books.
- S20 — search Bombardilo name collisions.
- S21 — $BOMBA — Bombardilo Crocodilo · Palantir Drops.
- S22 — search BOMBA.
- S23 — 1K holders strong.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:50:00Z; methodology_version: proofline-v1.0.
