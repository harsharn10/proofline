---
slug: jinqian
coverage: stub
methodology_version: proofline-v1.0
---

# JINQIAN — research record

## Identity

JINQIAN is classified as Stock-paired token.

A one-billion-supply ERC-20 cloned into a Uniswap v4 pool quoted against FAMI. LaunchpadFactory deploys Money Mushroom (JINQIAN) in one createToken call and seeds the JINQIAN/FAMI book. Traders buy and sell JINQIAN on Uniswap v4. No official site or handle was located this pass.

Themes: memecoin, stock-paired:FAMI, rwa

## Deployment

JINQIAN token (EIP-1167 LaunchpadToken clone): 0xe81880c1C5054245e036359f5c7be31606E79F56 on robinhood-chain. [verified S1 S5 S18]

LaunchpadToken implementation: 0x4C515fcEeF14Dd08e86D6fa0df0eC7f1Ce2f579e on robinhood-chain. [verified S2 S5 S6]

LaunchpadFactory (token factory()): 0x160Ea85a96DF909EAC3f79b14c7A69200ceb4898 on robinhood-chain. [verified S3 S5 S6 S15]

FAMI TokenizedStock (factory.stock / pair quote): 0x5D2e81cB3A6FECe856B824Dfd7e1d6D3dbaD8cd9 on robinhood-chain. [verified S6 S7 S16 S17]

## Control

factory owner() reverts. Deployer 0xd28d…7B0d has no code and also created the FAMI token in the same block as the factory. feeCollectorAddress and hookAddress are set at construction. [verified S6 S15 S17]

## Security

LaunchpadToken and LaunchpadFactory are partially verified on Blockscout (src/LaunchpadToken.sol, src/LaunchpadFactory.sol, compiler v0.8.26). No audit report URL was located this pass. [verified S2 S3] [unknown]

## Engineering

_Research pending._

## Team

No official domain or X handle was located. DexScreener info.websites and info.socials are empty. t.me/JinquanCTO titles $JINQIAN with 261 subscribers and no contract in the public preview; an X account posted it as official TG. Flag unconfirmed-official and third-party-link. [claim S7 S13 S19]

Farmmi Inc. is the Nasdaq issuer whose 20-F names Jinqian (money) mushroom, per The Defiant. That filing was not opened line by line this pass. [claim S11]

## Product and economics

LaunchpadFactory 0x160E…4898 clones LaunchpadToken via EIP-1167. createToken(name, symbol) from 0x3C74…B0B6 at 2026-09-02T13:32:29Z minted Money Mushroom / JINQIAN supply 1e9*1e18 into Uniswap v4 poolId 0x48cf…d923. factory() on the token returns that factory. genesisCreator() returns the same 0x3C74…B0B6. [verified S4 S5 S6 S18]

Verified factory source says launches pair against the company's tokenized stock, LP goes to 0xdead, and there is no owner. stock() / tokenizedStock() return FAMI 0x5D2e…8cd9. PoolManager is 0x8366…0951. Secondary JINQIAN/USDG and JINQIAN/ETH books exist on DexScreener with far less liquidity than the FAMI book. [verified S6 S7 S21]

JINQIAN/FAMI Uniswap v4 24h volume is 95888630.13 USD and reserve_in_usd is 2583146.40 at 2026-09-03T03:10:00Z from the Gecko pool endpoint. fdv_usd is 3022372.11. Gecko token volume_usd.h24 is 153223013.63 across all pools, not the FAMI book. [claim S8 S9]

DexScreener same pair: liquidity.usd 2527116.39, volume.h24 97642283.24, fdv/marketCap 3101211. Blockscout holders_count 9006. Pair created 2026-09-02T13:32:29Z. [claim S1 S7]

Gecko networks/robinhood/pools page 1 listed JINQIAN/FAMI as row 7; FAMI/USDG was row 3 at $136.6M 24h volume. trending_pools duration=24h first six did not include JINQIAN this pass. Assignment lead of trending vol #1 at ~$96M / ~$5.1M liq was not reproduced at this as_of; live Gecko reserve is $2.58M. [claim S8 S20]

## Communications

X account posted t.me/JinquanCTO as official TG [claim S13 S19]

The Defiant reported the FAMI quote is not a Robinhood stock token [claim S11]

@TheDegenBoii posted that the coin moved Nasdaq FAMI [claim S10]

## Findings

USD liquidity figures on the JINQIAN/FAMI book count both sides, and the quote side is FAMI, not USDG. A later Robinhood FAMI Stock Token, if issued, would be a different address. No official handle was located, so comms surfaces stay unconfirmed-official. [claim S12]

- Quote token FAMI 0x5D2e…8cd9 is not in GET /rhj/assets (194 assets). [verified S12 S16]
- Pool USD reserve is JINQIAN plus FAMI, not a USDG or WETH backstop. [claim S7 S8]
- No official handle or domain this pass; Telegram is a third-party-link. [claim S7 S13]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/impl/factory/FAMI and both create txs, RPC name/symbol/factory/stock/genesisCreator, DexScreener, Gecko pool/token/pools page, /rhj/assets, The Defiant, @TheDegenBoii, Telegram preview, and the TG claim post were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S8 S12]
- Numbers: 95888630.13 is the Gecko JINQIAN/FAMI pool 24h volume, not the 153223013.63 token all-pools figure. Reserve 2583146.40 is that pool. DexScreener 97642283.24 / 2527116.39 is the same pair, different aggregator. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that FAMI 0x5D2e…8cd9 is a Robinhood Stock Token and JINQIAN is an official Farmmi product. /rhj/assets has no FAMI, the token name has no Robinhood Token suffix, and no official handle or domain was located. [inference S12 S16]

## Sources

- S1 — Token 0xe818…9F56 Money Mushroom / JINQIAN.
- S2 — Address 0x4C515f…579e LaunchpadToken.
- S3 — Address 0x160E…4898 LaunchpadFactory.
- S4 — createToken tx 0xa3712805…22b4.
- S5 — eth_getCode, name, symbol, factory() on JINQIAN.
- S6 — factory stock(), genesisCreator(), tokenImplementation().
- S7 — latest/dex/tokens JINQIAN.
- S8 — JINQIAN/FAMI Uniswap v4 pool.
- S9 — Money Mushroom token.
- S10 — The coin dragged the stock.
- S11 — Money Mushroom Moved A Nasdaq Penny Stock.
- S12 — GET /rhj/assets Stock Token registry.
- S13 — t.me/JinquanCTO.
- S15 — Factory creation tx 0x9102fd20…e31a.
- S16 — Token 0x5D2e…8cd9 Farmmi, Inc. / FAMI.
- S17 — FAMI creation tx 0x85f4f399…a518.
- S18 — TokenLaunched log for JINQIAN.
- S19 — $JINQIAN OFFICIAL TG IS LIVE.
- S20 — Robinhood pools page 1.
- S21 — LaunchpadFactory verified source.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:25:00Z; methodology_version: proofline-v1.0.
