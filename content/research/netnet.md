---
slug: netnet
coverage: stub
methodology_version: proofline-v1.0
---

# NetNet Capital — research record

## Identity

NetNet Capital is classified as Reserve-backed currency.

Reserve-backed currency on Robinhood Chain. NET is minted only by the Treasury, staked into rebasing sNET every 8 hours, and sold through bonds against a USDG reserve plus protocol-owned NET/USDG liquidity. Users buy NET/USDG, stake for dividends, or subscribe to bonds and RWA programs at netnet.capital. NetNet Capital Management (@NetNetCap) publishes the contracts; tax-pair adds sit with Safe 0x3Bb7…5f42.

Themes: rwa, vault, lending, nft, stock-paired:NVDA

## Deployment

NET token: 0xCA9c78Dd337A67F6e0077F65F5E9218719d30eDf on robinhood-chain. [verified S9 S14 S15 S16]

Treasury: 0x04822Ea321A0DEE6F40656172F29312104855d66 on robinhood-chain. [verified S9 S16 S28]

Staking: 0xB078cc304A0B264C5F3680DC0488954ACcd02E87 on robinhood-chain. [verified S9 S16 S29]

sNET (staked NET): 0xb773ec2C326B7f98a5a83fc098825492F020a4c7 on robinhood-chain. [verified S9 S16]

TaxCollector: 0x086C58400b8708Ef993f256E12e752dcF0AC918e on robinhood-chain. [claim S9 S16]

GenesisBond: 0x575b7B7c97Ef3E21C82DAeB427899d583e1E913f on robinhood-chain. [claim S9 S16]

BondDepository: 0xff32a969A0c567129eECD926D04657728E1980C1 on robinhood-chain. [claim S9]

NET/USDG canonical Uniswap v2 pair: 0x59F95461E68e0c77605299791E1449f175165B54 on robinhood-chain. [verified S9 S16 S17]

Team Safe (NET.guardian): 0x3Bb7A23316f82C0e984fA2E784846d8928a35f42 on robinhood-chain. [claim S9 S16]

## Control

`owner()` is absent on NET. `guardian()` returns Safe 0x3Bb7…5f42. `getThreshold()` returned 1 and `getOwners()` returned 0xe7e86751…96f6. Docs label that address a team Safe and say the tax-pair map is add-only. [verified S9 S16]

## Security

No audit report URL was located on the site, docs, Llama, or the X bio this pass. [unknown]

## Engineering

_Research pending._

## Team

netnet.capital and docs.netnet.capital/official-channels list @NetNetCap and t.me/netnetcap. The handle bio lists Reserve Manager for $NET. Creator of the core contracts is EOA 0xCfBd7e12…07B9. No repository URL was located. [verified S8 S9 S12]

@NetNetCaps uses the same bio text; docs list only x.com/netnetcap. Flag handle-collision. [claim S9 S27]

## Product and economics

NET is an ERC-20 (9 decimals) with a 500 bps fee on buys and sells against mapped AMM pairs. Minting is Treasury-only. Staking issues rebasing sNET on an 8-hour epoch. Bonds sell at or above NAV; a buyback contract is documented as a standing bid at NAV minus 1.5%. [claim S10] [verified S14 S16]

Reserves that back NAV are USDG and protocol-owned NET/USDG v2 LP. Tokenized equities from the RWA programs are documented as Sleeve holdings, not RFV. [claim S11]

Llama Robinhood Chain TVL is 0 USD at 2026-09-03T01:47:11Z. Llama staking is 80630578 USD. [claim S13]

RPC: USDG.balanceOf(Treasury) 2394555.191728; NET.balanceOf(Staking) 58492.822194093 of 65182.030431346 totalSupply. Blockscout holders 6992. GeckoTerminal 24h volume 7142067 USD; market_cap_usd 6108502. [verified S16] [claim S14 S30]

@NetNetCap posted a $10,000,000 treasury on 2026-09-02. That figure is not the liquid USDG balance and is not Llama TVL. [claim S20]

## Communications

@NetNetCap posts treasury above $10,000,000 [claim S20]

@NetNetCap posts NetNet Gear verified on OpenSea [claim S21]

@NetNetCap posts NAV per NET about $150 [claim S22]

@MCGlive hosts $NET / @NetNetCap update stream [claim S24]

@NetNetCap posts treasury above $8,500,000 [claim S23]

## Findings

Liquid USDG on the Treasury at this read is 2,394,555, not the $10,000,000 the account posted; docs put tokenized equities in a Sleeve outside RFV. Guardian is a Safe whose on-chain threshold is 1. Transfers against mapped pairs take a 5% tax. Ticker NET also names Cloudflare stock token 0x116F…01d4. [claim S8]

- Liquid Treasury USDG at this block is 2.39M; the $10M post is a different number and the RWA Sleeve is documented as outside RFV. [verified S16] [claim S11 S20]
- Guardian Safe threshold is 1. [verified S16]
- 5% tax on mapped-pair transfers. [verified S16]
- Ticker NET also names Cloudflare stock token 0x116F…01d4. [verified S19]
- No audit report located this pass. [unknown]

- Receipts: netnet.capital, app, docs official-channels/mechanism/treasury, @NetNetCap profile and posts, t.me/netnetcap, Llama protocol, DexScreener token-pairs, GeckoTerminal pool and both NET tokens, Blockscout NET/Treasury/Staking/create tx, and RPC were opened on 2026-09-03 and excerpts copied from the responses. [verified S8 S9 S13 S14 S16 S18]
- Numbers: TVL 0 is the Robinhood chain slice, not the 80630578 staking figure. Treasury USDG 2394555 is `balanceOf`, not RFV. Gecko 24h volume 7142067 is the token aggregator figure, not a single pool. [claim S13 S30] [verified S16]
- Adversarial: the strongest contrary reading is that Gecko NET/USDG is Cloudflare stock token 0x116F…01d4. Pool 0x0d662a…deb3 base is robinhood_0xca9c…0edf, DexScreener name is NetNet, and Cloudflare's token is a different address and decimal count. [inference S18 S19]

## Sources

- S8 — NetNet Capital Management homepage.
- S9 — Official Channels.
- S10 — The Fund (Mechanism).
- S11 — Treasury & NAV.
- S12 — NetNet Capital profile.
- S13 — NetNet Capital Management protocol row.
- S14 — Address 0xCA9c…0eDf NET.
- S15 — NET creation tx 0xbfe633ae….
- S16 — eth_getCode, ERC-20, treasury/guardian wiring, Safe owners.
- S17 — Robinhood token-pairs for 0xCA9c…0eDf.
- S18 — NET/USDG 0.9% Uniswap v4 pool.
- S19 — Cloudflare NET stock token.
- S20 — Treasury has officially surpassed $10,000,000.
- S21 — NetNet Gear Collection verified on OpenSea.
- S22 — NAV per net is ~$150.
- S23 — Treasury eclipsed $8,500,000.
- S24 — $NET | @NetNetCap update stream.
- S27 — NetNetCaps profile.
- S28 — Address 0x0482…5d66 Treasury.
- S29 — Address 0xB078…2E87 Staking.
- S30 — NetNet token on Robinhood.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:20:00Z; methodology_version: proofline-v1.0.
