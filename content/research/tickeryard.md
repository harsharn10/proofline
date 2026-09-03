---
slug: tickeryard
coverage: stub
methodology_version: proofline-v1.0
---

# TickerYard — research record

## Identity

TickerYard is classified as Synthetic asset protocol.

TickerYard mints yBTC on Robinhood Chain as an 8-decimal receipt of Arbitrum WBTC: a user sends WBTC through tickeryard.com and receives yBTC (site: 0.30% wrap fee, about 18 minutes). YAssetGateway is the only minter. $YARD is the Anvil ERC-20 paired with 3,333 Yardkeeper NFTs. @TickerYardHQ lists tickeryard.com.

Themes: rwa, nft, launchpad

## Deployment

YARD (Yardkeeper CollectionToken): 0xE3FA12dA7fa026B21817f16622E8AE48fA785166 on robinhood-chain. [verified S8 S15 S16]

yBTC (TickerYard Bitcoin Receipt): 0x9715e0a0a5f60dCa2A3F69d81Fb7f975De5870Ed on robinhood-chain. [verified S9 S15 S17]

YAssetGateway (yBTC controller): 0x9fa6a54dbC2D69E232768e4E0970913755571e19 on robinhood-chain. [verified S10 S15]

Yardkeepers ERC-721: 0x2756bfFC4ccCB0cBebeB675a8593Ca80c8dB8A97 on robinhood-chain. [verified S11 S15]

Anvil NFTAMMVault (Yardkeepers): 0xFe0b24A3b4052aD78f10fa75a27118c3e54a00e6 on robinhood-chain. [verified S12 S15 S20]

Origin WBTC (Arbitrum One): 0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f on arbitrum-one. [claim S10 S15]

## Control

YAssetGateway `owner()` returns 0x04D870…bF83 (no code). That EOA also created the yBTC/gateway deploy tx and the Yardkeepers create tx. `guardian()` is zero. `GOVERNANCE_DELAY` is 172800 seconds. `pause()` exists. Yardkeepers `owner()` returns a different EOA, 0x73D929…6348. NFTAMMVault `hasRole(DEFAULT_ADMIN_ROLE, 0x04D870…)` returned false; the admin member was not enumerated. [verified S10 S11 S15]

## Security

No audit report was located on the site, the paper, or the X account. The paper status line is a v1.1 design candidate and lists audit as a next step. Yardkeepers source is unverified. [unknown]

## Engineering

_Research pending._

## Team

@TickerYardHQ bio website is tickeryard.com. DexScreener's YARD token websites field is tickeryard.com. The paper names @jeronxd3 as author. StonkBrokers lists TickerYard as a Special Projects partner. Telegram https://t.me/portaltickeryard was posted by the official account; the Telegram profile was not opened. No repository URL was located. [verified S5 S6 S16]

## Product and economics

A user connects on tickeryard.com, sends WBTC on Arbitrum One, and receives yBTC on Robinhood Chain. The site UI prints a 0.30% wrap fee and about 18 minutes. [claim S5]

yBTC is YAssetReceipt at 0x9715…70Ed. Verified source: the only minter is `controller`, which is YAssetGateway 0x9fa6…1e19; the gateway can burn only tokens it already holds. Constructor origin is WBTC 0x2f2a…5B0f on chain 42161. `creditInvariant` matched `totalSupply` 1.21238693 yBTC. [verified S9 S10 S15]

$YARD is CollectionToken 0xE3FA…5166, created by Anvil `createMarket` with NFTAMMVault 0xFe0b…00e6. Vault `collection()` is Yardkeepers 0x2756…8A97 (3,333 ERC-721). `tokensPerNFT` is 300,030e18. Official account posted that active Yardkeepers and activated $STONKBROKER NFTs receive yBTC revenue share. [claim S12 S20 S23]

YARD holders_count is 5302; yBTC holders_count is 2254 (Blockscout, 2026-09-03T03:10Z). NFT holders_count is 424 on a 3,333 collection. [verified S8 S9 S11]

YARD/WETH on up (pair 0xEbc250ae…1f34) 24h volume is 124536 USD and liquidity 870936 USD; pair fdv is 2426304 USD. GeckoTerminal `market_cap_usd` is 1855735 and `fdv_usd` is 2404695. Those are different methods. yBTC/WETH on up liquidity is 173715 USD; 24h volume 328 USD; pair fdv 93206 USD. [claim S16 S18 S21]

yBTC `totalSupply` is 1.21238693. Anvil `inventoryCount` is 2596. Official account posted 88.9M $YARD burned and 297 NFTs removed on 2026-09-01; Anvil UI printed 88.80M burned. On-chain `totalSupply` of YARD remains 999,999,990. [verified S15] [claim S20 S25]

## Communications

Official account posts 88.9M $YARD burned [claim S25]

StonkLauncher adds yBTC as a bond pair [claim S19]

Official account posts more than 5,000 $YARD wallets [claim S26]

Official account posts a yBTC wrap infographic [claim S27]

Official account posts Yardkeeper, $YARD, yBTC holder counts [claim S28]

Official account posts yBTC live via tickeryard.com [claim S7]

@OxSimpleFarmer posts yBTC as synthetic BTC on the chain [claim S29]

## Findings

Gateway `owner()` is one externally owned account with pause and peer-proposal rights; the Arbitrum vault that should hold WBTC was not opened this pass. Several other ERC-20s reuse the TickerYard or Yardkeeper name. Flag: ca-collision. [claim S5]

- Gateway owner is one EOA with pause and peer-proposal functions; Arbitrum WBTC lock was not reproduced. [verified S15]
- Yardkeepers NFT source is unverified; collection owner is a second EOA. [verified S11]
- Name collision: other ERC-20s use TickerYard / Yardkeeper / $YARD at different addresses. Flag: ca-collision. [verified S8 S16]
- No audit report was located this pass. [unknown]
- Wrap fee 0.30% is a site figure; it is not a named `wrapFeeBps` on the gateway ABI. [claim S5]

- Receipts: tickeryard.com, the paper URL, @TickerYardHQ profile and listed posts, Anvil market UI, StonkBrokers partner line, Blockscout token/gateway/vault/create txs, RPC, DexScreener, and GeckoTerminal were opened on 2026-09-03 and excerpts copied from the responses. [verified S5 S8 S9 S15]
- Numbers: YARD holders 5302 and yBTC holders 2254 are Blockscout counts. Volume 124536 is the YARD/WETH up pair 24h bar, not an all-chains total. yBTC supply 1.21238693 is `totalSupply` / 1e8. GeckoTerminal market cap 1855735 is not the DexScreener fdv 2426304. [claim S16 S21] [verified S8 S9 S15]
- Adversarial: the strongest contrary reading is that TickerYard is only an Anvil NFT mint and that yBTC is a ticker copy. Verified names YAssetReceipt / YAssetGateway, originAsset WBTC on 42161, DexScreener websites tickeryard.com, and matching official posts argue the wrap is the live product; copycat CAs remain listed under ca-collision. [inference S9 S10 S16]

## Sources

- S5 — WBTC Bridge · TickerYard.
- S6 — TickerYard profile.
- S7 — $yBTC is now live on @RobinhoodCrypto.
- S8 — Token Yardkeeper (YARD) 0xE3FA…5166.
- S9 — Token TickerYard Bitcoin Receipt (yBTC).
- S10 — Address YAssetGateway 0x9fa6…1e19.
- S11 — Token Yardkeepers (YARDKEEPER) 0x2756…8A97.
- S12 — Address NFTAMMVault 0xFe0b…00e6.
- S15 — eth_getCode, yBTC/gateway/Anvil/collection calls.
- S16 — YARD token pairs on Robinhood.
- S17 — yBTC creation tx 0x442b9b63….
- S18 — yBTC token pairs on Robinhood.
- S19 — StonkLauncher just got greener.
- S20 — Yardkeepers market 0xFe0b…00e6.
- S21 — Yardkeeper token on Robinhood.
- S23 — Yardkeepers revenue share from yBTC.
- S25 — Supply keeps moving in one direction.
- S26 — Statistics update: more than 5,000 $YARD wallets.
- S27 — What exactly is yBTC?.
- S28 — The $YARD ecosystem keeps expanding.
- S29 — TickerYard yBTC on Robinhood Chain.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:20:00Z; methodology_version: proofline-v1.0.
