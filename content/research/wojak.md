---
slug: wojak
coverage: stub
methodology_version: proofline-v1.0
---

# WOJAK — research record

## Identity

WOJAK is classified as Stock-paired token.

A one-billion-supply ERC-20 cloned through LongLauncher into a Uniswap v4 pool quoted against RDDT, the Reddit Robinhood Stock Token at 0x05b37F…F4C. Traders buy and sell WOJAK on that book. It is not the RDDT stock token, not in-flight KARMA (Pons Reddit Founder Cat at 0xb1B800…baC3), and not the older Wojak LaunchToken at 0xaCE55…3c6f.

Themes: memecoin, stock-paired:RDDT

## Deployment

WOJAK token (EIP-1167 DopplerERC20V1 clone): 0x86d916F551b8E05240c1Eb14E65F733B6d181e18 on robinhood-chain. [verified S1 S2 S3]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [verified S3 S10]

DopplerERC20V1Factory (token creator_address_hash): 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [claim S1 S12]

LongLauncher (creation tx to): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [verified S4 S11]

Airlock (token owner()): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [claim S3 S13]

RDDT Stock Token (pair quote / create numeraire; rail, not this subject): 0x05b37Fb53A299a1b874A619e1c4C404D52C36F4C on robinhood-chain. [verified S3 S9 S14]

WOJAK ticker collision (Wojak / WETH LaunchToken, not this row): 0xaCE55FE98Bab14366dD49aB5AA5dF76aA11A3c6f on robinhood-chain. [claim S16 S17]

## Control

_Research pending._

## Security

Token owner() is Airlock. The create-from EOA has no code. LongLauncher source is fully verified (src/LongLauncher.sol). DopplerERC20V1 and DopplerERC20V1Factory are partially verified. No audit report URL was located this pass. [verified S3 S10 S11] [unknown]

## Engineering

_Research pending._

## Team

DexScreener info.socials pins @WojakLong. Bio says Paired with RDDT on LONG and does not embed CA 0x86d916…1e18. Gecko twitter_handle is null. Flag unconfirmed-official. [claim S6 S15 S19]

@soljackalNFT posted a netlify vote URL that embeds this CA. Flag copypasta-pattern and third-party-link. [claim S22]

## Product and economics

LongLauncher 0x22e9…eeED create from EOA 0x0ec9…D9Da at 2026-09-02T15:03:30Z minted wojak / WOJAK supply 1e9*1e18 as an EIP-1167 DopplerERC20V1 clone. creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a. PoolManager Initialize id 0x85bbed65…ba70 currency0 RDDT currency1 0x86d916…1e18. LaunchCreated normalizedTicker WOJAK. [verified S1 S4 S5]

factory() on the token reverts. owner() returns Airlock 0xeb7C…0862. DopplerHookInitializer Lock set 95% to the launcher EOA and 5% to 0x21E2…7A66. Secondary ETH books on DexScreener have far less liquidity than the RDDT book. [verified S3 S5 S6 S20]

DexScreener WOJAK/RDDT Uniswap v4 24h volume is 313168.01 USD and liquidity.usd is 69943.17 at 2026-09-03T05:05:00Z. fdv/marketCap is 99027. Pair created 2026-09-02T15:03:30Z. [claim S6]

Gecko same pool: volume_usd.h24 299962.95 reserve_in_usd 70823.08 fdv_usd 101003.84 dex bankr-robinhood. Gecko token volume_usd.h24 300201.13 and total_reserve_in_usd 45269.51 (all pools, not the RDDT book). [claim S7 S8]

Blockscout holders_count 158. Gecko info holders.count 149 at 2026-09-03T03:55:56Z. [claim S2 S19]

## Communications

@WojakLong posted a WOJAK airdrop to thought leaders [claim S15]

Netlify vote page used CA 0x86d916…1e18 [claim S22]

@WojakLong posted a BONER purchase on FOMO [claim S21]

## Findings

USD liquidity on the WOJAK/RDDT book counts both sides. Same-ticker Wojak rows on 4663 include a larger WETH book at 0xaCE55…3c6f with wojakrobinhood.com. @WojakLong is pinned on DexScreener but the bio does not embed this CA. Gecko names the pool bankr-robinhood while DexScreener labels it Uniswap v4. [claim S9]

- Quote token RDDT 0x05b37F…F4C is a Robinhood Stock Token rail, not this subject. [verified S9 S14]
- Pool USD reserve is WOJAK plus RDDT, not a USDG or WETH backstop. [claim S6 S7]
- Same-ticker ca-collision with Wojak 0xaCE55…3c6f (WETH, wojakrobinhood.com) and Wojak in Hood 0xC1Ca…011c. [verified S16 S17 S23]
- Distinct from in-flight KARMA 0xb1B800…baC3 on the same RDDT rail. [verified S24]
- @WojakLong is unconfirmed-official; bio has no CA. [claim S15 S19]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/impl/factory/Airlock/LongLauncher/RDDT/collision, create tx and logs, RPC name/symbol/owner/getCode, DexScreener tokens/v1 and latest/dex/tokens, Gecko search/pool/token/info (first GET 200), /rhj/assets, @WojakLong, and the netlify vote post were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S3 S6 S7 S9]
- Numbers: 313168.01 is the DexScreener WOJAK/RDDT pool 24h volume, not Gecko 299962.95. Reserve 69943.17 is DexScreener; 70823.08 is Gecko that pool; 45269.51 is Gecko token all-pools. Holders 158 is Blockscout, not Gecko 149. [claim S2 S6 S7 S8 S19]
- Adversarial: the strongest contrary reading is that 0xaCE55…3c6f / @wojakrobinhood is the canonical Robinhood Wojak and this RDDT book is a copy, or that this row is in-flight KARMA because both pair to RDDT. Different CAs, pads (LongLauncher vs Pons vs LaunchToken), and quote assets argue against collapse. [inference S4 S16 S24]

## Sources

- S1 — Address 0x86d916…1e18 wojak.
- S2 — Token 0x86d916…1e18.
- S3 — eth_getCode / name / symbol / owner on WOJAK.
- S4 — create tx 0x32ec5df7…474c.
- S5 — LaunchCreated / Initialize / Lock logs on create tx.
- S6 — tokens/v1 WOJAK 0x86d916…1e18.
- S7 — WOJAK/RDDT pool.
- S8 — wojak token.
- S9 — GET /rhj/assets Stock Token registry.
- S10 — DopplerERC20V1 0x3Be8…C599.
- S11 — LongLauncher 0x22e9…eeED.
- S12 — DopplerERC20V1Factory 0x1B37…b69a.
- S13 — Airlock 0xeb7C…0862.
- S14 — Token 0x05b37F…F4C RDDT.
- S15 — WOJAK airdrop to thought leaders.
- S16 — Collision token 0xaCE55…3c6f Wojak.
- S17 — tokens/v1 collision 0xaCE55…3c6f.
- S19 — wojak token info.
- S20 — latest/dex/tokens 0x86d916…1e18.
- S21 — Purchased some $BONER.
- S22 — Robinhood Top 100 vote page for 0x86d916….
- S23 — Wojak in Hood 0xC1Ca…011c.
- S24 — eth_getCode on in-flight KARMA 0xb1B800…baC3.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T05:20:00Z; methodology_version: proofline-v1.0.
