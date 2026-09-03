---
slug: l4va
coverage: stub
methodology_version: proofline-v1.0
---

# L4VA — research record

## Identity

L4VA is classified as Stock-paired token.

A vault factory for tokens backed by locked RWAs and stocks. A user deposits eligible assets into a programmable vault and receives fungible vault tokens; $L4VA is the protocol token whose TGE is listed on Robinhood Chain. @L4VAprotocol runs it at l4va.org and l4va.com.

Themes: rwa

## Deployment

Official $L4VA token (TGE): NULL — TGE FAQ states the presale contract address will be published on @l4vaprotocol and this page before the sale opens; no 40-character address in the TGE JS this pass on robinhood-chain. [claim S5 S6]

Official vault factory: NULL — no vault factory address on l4va.org/tge, l4va.com, the TGE JS, or GitBook this pass on robinhood-chain. [claim S5 S6 S9]

Ticker-named ERC-20 L4VA (not linked from l4va.org): 0xdb65fdc91405d659B3F0b8b743aFD9974b0b9D63 on robinhood-chain. [verified S14 S18 S19]

L4V4 ERC-20 named L4VA (Pons v2; not linked from l4va.org): 0x2A6DA05E7151687e4A6ca6C059e008f6cf7c1C36 on robinhood-chain. [verified S15 S16 S17 S21]

PonsLauncherToken named L4VAprotocol (not linked from l4va.org): 0x54AdF848173b2f83420E4AF36cB237535139a2E8 on robinhood-chain. [verified S20]

## Control

The TGE page states no mint function, a burn(), a non-upgradeable ERC-20, and a treasury in a Gnosis Safe. No Safe address and no token address were in the TGE JS this pass. [claim S6]

## Security

No audit report URL was opened on the TGE page, l4va.com, GitBook, or the GitHub org this pass. An official 2 Sep post used the words audited and secured; that post is not an audit artifact. [unknown]

## Engineering

_Research pending._

## Team

l4va.org/tge and l4va.com both point at @l4vaprotocol; the @L4VAprotocol bio points at l4va.org/tge. TGE JS also lists github.com/L4VA-Technologies-Inc (blog l4va.com) and Discord invite mBbTUfAzuS (guild name L4VA). [verified S5 S6 S7 S8]

l4va.com JSON-LD also lists github.com/l4va, which has 0 public repos, and discord.com/invite/l4va, which returned Unknown Invite. The GitHub org twitter_username is lava_protocol, not L4VAprotocol. [claim S7 S11 S31]

The GlobeNewswire reprint names L4VA Technologies, Inc. and quotes Lucid Cic as Chief Marketing Officer. [claim S13]

## Product and economics

Creators configure a vault (contribution window, supply, governance). During the contribution window, assets are deposited and vault tokens are minted pro-rata. GitBook's acquire phase still names ADA as the quote used to seed liquidity pools. [claim S28]

The TGE page and the 18 Aug GlobeNewswire reprint describe the same vault-token product for Robinhood Chain and say $L4VA coordinates incentives and governance. Official posts on 2 Sep describe memecoins backed by stocks using L4VA Vaults, not a stock/memecoin trading pair. [claim S5 S13 S25]

$L4VA TGE terms on l4va.org/tge: 1,000,000,000 max, 350,000,000 at TGE at $0.003, WETH on Robinhood Chain, whitelist up to 500 wallets, 0.5–50 ETH, 5% discount. Robinhood Chain max 900,000,000 and Cardano max 100,000,000. [claim S6]

Stated TGE market cap $1,050,000 at $0.003 on 350,000,000 tokens is a sale term, not a live 4663 market. [claim S5]

GitBook Public Sale / TGE (40%) does not match the TGE page 35%. [disputed S6 S10]

DexScreener L4V4/ETH Uniswap pair liquidity.usd 4514.01 and volume.h24 0.76 are the collision pair, not an official $L4VA pool. Blockscout holders_count 11 on L4V4 and 102 on 0xdb65…9D63. [verified S17] [claim S15 S18]

No DefiLlama protocol row named L4VA was returned this pass. [unknown]

## Communications

Official account posted stock-backed memecoins via L4VA Vaults [claim S25]

Official account posted RH TGE inbound with l4va.org/tge [claim S26]

Official account posted TGE is imminent with TGE URL [claim S23]

Official account posted Create the market whitelist clip [claim S22]

Official account posted only a few whitelist spots left [claim S24]

GlobeNewswire carried L4VA Technologies TGE on Robinhood Chain [claim S13]

## Findings

The TGE FAQ says the presale contract address will be published on @l4vaprotocol and l4va.org/tge before the sale opens. Until that hash is on those surfaces, any L4VA ticker on 4663 is a separate token. [claim S6]

GitBook tokenomics put Public Sale / TGE at 40%; the TGE page puts TGE at 35% / 350,000,000. [disputed S6 S10]

- Official $L4VA and vault-factory addresses are unpublished while Blockscout search L4VA returns 50 ERC-20s on 4663. [verified S6 S14]
- L4V4 0x2A6D…1C36 was created by PonsV2LaunchDeployer; 0x54Ad…a2E8 is a PonsLauncherToken. [verified S20 S21]
- TGE 35% versus GitBook 40%. [disputed S6 S10]
- GitBook vault lifecycle still names ADA; Robinhood TGE is a separate surface. [claim S28 S6]
- No audit report URL was opened this pass. [unknown]
- GitHub twitter_username lava_protocol does not match @L4VAprotocol. [claim S11]

- Receipts: l4va.org/tge HTML and JS, l4va.com HTML and JS, app.l4va.org, GitBook markdown, X profile and five posts, GitHub org and user, Discord invite API, GlobeNewswire reprint, Blockscout API v2, RPC, DexScreener were opened on 2026-09-03; excerpts are copied from those pages. [verified S5 S6 S8 S14 S16]
- Numbers: $1,050,000 is the TGE page stated market cap, not a live chain-slice TVL. DexScreener 4514.01 is L4V4/ETH liquidity.usd on pair 0x531343…b1a0, not an official $L4VA pool. Bytecode lengths are eth_getCode on 4663. [claim S5] [verified S16 S17]
- Adversarial: the strongest contrary reading is that one of the 50 L4VA-named ERC-20s is the official token. The TGE FAQ says the presale address is unpublished; those hashes are absent from the TGE JS; two of the reproduced tokens were created by Pons factories. [verified S6 S14 S20]

## Sources

- S5 — $L4VA Token Generation Event.
- S6 — l4va.org/tge JS bundle.
- S7 — l4va.com.
- S8 — L4VA profile.
- S9 — What is L4VA ?.
- S10 — $L4VA Tokenomics.
- S11 — L4VA-Technologies-Inc organization.
- S13 — L4VA Announces Upcoming $L4VA TGE on Robinhood Chain.
- S14 — Search q=L4VA.
- S15 — L4V4 token 0x2A6D…1C36.
- S16 — eth_getCode / name / symbol L4V4.
- S17 — L4V4 token pairs.
- S18 — L4VA token 0xdb65…9D63.
- S19 — eth_getCode / name 0xdb65…9D63.
- S20 — PonsLauncherToken 0x54Ad…a2E8.
- S21 — PonsV2LaunchDeployer 0x3711…A42.
- S22 — Create the market whitelist clip.
- S23 — TGE is imminent.
- S24 — Only a few whitelist spots left.
- S25 — memecoins backed by stocks.
- S26 — RH TGE inbound.
- S28 — Vault Lifecyle.
- S31 — github.com/l4va user.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:20:00Z; methodology_version: proofline-v1.0.
