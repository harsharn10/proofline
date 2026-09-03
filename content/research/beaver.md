---
slug: beaver
coverage: stub
methodology_version: proofline-v1.0
---

# BEAVER — research record

## Identity

BEAVER is classified as Stock-paired token.

A one-billion-supply ERC-20 cloned into a Uniswap v4 pool quoted against SPCX. LongLauncher deploys BEAVERCOIN (BEAVER) in one create call and seeds the BEAVER/SPCX book. Traders buy and sell BEAVER on Uniswap v4. No official site or handle was located this pass.

Themes: memecoin, stock-paired:SPCX, rwa

## Deployment

BEAVERCOIN token (EIP-1167 DopplerERC20V1 clone): 0x6e401929BB5BEBB4807c462c8c9Fb8C6B76E1e18 on robinhood-chain. [verified S1 S5 S4]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [verified S2 S5]

DopplerERC20V1Factory (create token factory field): 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [claim S3 S4 S5]

LongLauncher (creation tx to): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [verified S4 S6]

Airlock (token owner()): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [claim S5 S6]

SPCX quote (create numeraire / pair quote): 0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa on robinhood-chain. [verified S5 S10 S21]

BEAVER ticker collision (Pons v2 Beaver, not this row): 0x6496D819C537673d4b3Efd981B99F7e4615Caf76 on robinhood-chain. [claim S14 S15 S16]

PonsV2LaunchFactory (collision token launchFactory): 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e on robinhood-chain. [claim S15 S19 S27]

## Control

_Research pending._

## Security

token owner() is Airlock 0xeb7C…0862. Launcher 0xE59f…cBd8 has no code. DopplerERC20V1 and LongLauncher are verified on Blockscout (src/tokens/DopplerERC20V1.sol partially verified, src/LongLauncher.sol). No audit report URL was located this pass. [verified S2 S5 S6] [unknown]

## Engineering

_Research pending._

## Team

No official domain or X handle was located. DexScreener info.websites is empty; info.socials is @elonmusk status 2095218089189392569. Gecko twitter_handle is null. @beaver_hood posted $BEAVER is out; the bio has no contract. Flag unconfirmed-official. app.long.xyz returned HTTP 403 this pass. [claim S7 S9 S13 S30]

## Product and economics

LongLauncher 0x22e9…eeED clones DopplerERC20V1 via EIP-1167. create from 0xE59f…cBd8 at 2026-09-02T17:59:23Z minted BEAVERCOIN / BEAVER supply 1e9*1e18 into Uniswap v4 poolId 0x1d76…3598 quoted against SPCX. owner() on the token returns Airlock. factory() reverts. [verified S4 S5]

Verified create logs lock 5% to 0x21E2…7A66 and 95% to the launcher EOA. PoolManager is 0x8366…0951. Secondary BEAVER/USDG and BEAVER/ETH books exist on DexScreener with far less liquidity than the SPCX book. [verified S4 S7]

BEAVERCOIN/SPCX Uniswap v4 24h volume is 1526719.52 USD and liquidity.usd is 112503.87 at 2026-09-03T03:56:00Z from DexScreener. fdv/marketCap is 202607. Blockscout holders_count 773. Pair created 2026-09-02T17:59:23Z. [claim S1 S7]

Gecko GET pool 0x1d76…3598 is HTTP 404. Gecko token volume_usd.h24 27180.73 and total_reserve_in_usd 673.03 are Gecko-indexed USDG/ETH books, not the SPCX book. Gecko holders.count 27 is a 2026-09-02T18:42Z snapshot. [claim S8 S9 S29]

Collision Pons v2 Beaver/SPCX DexScreener liquidity.usd 18630.80 volume.h24 2082123.51; Gecko names that pool SPCX / BEAVER dex pons-v2-dex reserve_in_usd 19084.97. [claim S16 S17]

## Communications

@beaver_hood posted that $BEAVER is out in the wild [claim S13]

@elonmusk asked about a different definition of beaver [claim S12 S7 S15]

@elonmusk posted America was built on beaver [claim S11]

## Findings

USD liquidity on the BEAVERCOIN/SPCX book counts both sides, and the quote side is SPCX, not USDG. Gecko does not index that pool this pass, so Gecko token volume is not the SPCX book. Ticker BEAVER is reused by Pons v2 0x6496…af76 and by WETH-paired 0xAfA1…18B0. No official handle was located. [claim S10]

- Quote token SPCX is a Robinhood Stock Token rail; this subject is the memecoin, not SPCX. [verified S10 S21]
- Pool USD reserve is BEAVERCOIN plus SPCX, not a USDG or WETH backstop. [claim S7]
- Ticker BEAVER is reused at 0x6496…af76 and 0xAfA1…18B0. Flag ca-collision. [verified S14 S16 S25]
- No official handle or domain this pass; Telegram was not located. [claim S7 S13]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/impl/factory/create tx/SPCX/Airlock/collision token and Pons txs, RPC with Mozilla UA, DexScreener, Gecko token/info/pool 404, /rhj/assets, Elon posts, @beaver_hood, cyberleek.lol, and ponsfamily launchpad were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S7 S10]
- Numbers: 1526719.52 is the DexScreener BEAVERCOIN/SPCX pool 24h volume, not Gecko token 27180.73. Reserve 112503.87 is that pool. Collision book volume 2082123.51 is 0x6496…af76, not this row. [claim S7 S8 S16]
- Adversarial: the strongest contrary reading is that Pons v2 0x6496…af76 is the official BEAVER because Gecko indexes it and DexScreener lists a website. That site is cyberleek.lol with no CA, the on-chain website HTML is a DJT bonding-curve page without 0x6496, and this row's token is the first LongLauncher SPCX book with higher liquidity. [inference S16 S23 S24]

## Sources

- S1 — Token 0x6e40…1e18 BEAVERCOIN / BEAVER.
- S2 — Address 0x3Be8…C599 DopplerERC20V1.
- S3 — Address 0x1B37…b69a DopplerERC20V1Factory.
- S4 — LongLauncher create tx 0x1a63ef12…e014.
- S5 — eth_getCode, name, symbol, owner() on BEAVERCOIN.
- S6 — Address 0x22e9…eeED LongLauncher.
- S7 — latest/dex/tokens BEAVERCOIN.
- S8 — BEAVERCOIN token.
- S9 — BEAVERCOIN token info.
- S10 — GET /rhj/assets Stock Token registry.
- S11 — In a way, it was built on beaver.
- S12 — Could Elon have been referring to a different definition of beaver?.
- S13 — $BEAVER is officially out in the wild.
- S14 — Token 0x6496…af76 Beaver / BEAVER.
- S15 — eth_getCode and Pons views on collision Beaver.
- S16 — latest/dex/tokens collision Beaver.
- S17 — SPCX / BEAVER Pons v2 pool (collision).
- S19 — Pons launchAndBuy tx 0xd65cdb95…4e1a.
- S21 — Token 0x4a0E…5eEa SPCX.
- S23 — cyberleek.lol claimed DexScreener website.
- S24 — ponsfamily launchpad 0xb6e47fab….
- S25 — Token 0xAfA1…18B0 Beavercoin / BEAVER.
- S27 — Address 0x7eD5…C7e PonsV2LaunchFactory.
- S29 — BEAVERCOIN/SPCX pool 404.
- S30 — app.long.xyz BEAVERCOIN token page.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:56:00Z; methodology_version: proofline-v1.0.
