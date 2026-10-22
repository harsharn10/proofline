---
# Packet v2 (docs/research-system.md §5). Discovery inventory seed.
contract_version: proofline-research-v2
work_id: WORK-20260918-grok-bot-discovery-inventory
producer: grok-bot
role: collector
base_sha: 6bdec45663bb3aeb429fc5bf48d0013e24372b34
slug: discovery-inventory
name: Discovery inventory 2026-09-18
packet_tier: seed
as_of: 2026-09-18T14:05:00Z
prior_packet: null
supersedes: null
owned_slugs: [discovery-inventory]
allowed_paths:
  - research/inbox/packets/discovery-inventory/WORK-20260918-grok-bot-discovery-inventory.md

identity:
  canonical_name: Discovery inventory 2026-09-18
  aliases: []
  symbols: []
  entity_kind: unknown
  chain_scope: unknown
  official_domain: "NULL — inventory packet"
  official_handle: "NULL — inventory packet"
  repository: "NULL — inventory packet"
  possible_matches:
    - slug: longbow
      signals: [other]
      contrary_signals:
        - "Census longbow is longbow.cash / @longbowlend. Candidate Greenwood is greenwood.fi / @GwoodFinance. Category cousin (Morpho overlay / borrow against Stock Tokens). Census longbow feed already carries a 2026-09-02 @longbowlend Greenwood integration post; that is a sourced relationship, not a merge."
    - slug: earn-protocol
      signals: [other]
      contrary_signals:
        - "Census earn-protocol is earnonhood.com / @EARNONHOOD. Greenwood is greenwood.fi / @GwoodFinance. Category cousin (Morpho / savings-vault overlay), different handle and domain; not a merge."
    - slug: denar
      signals: [other]
      contrary_signals:
        - "Census denar is denar.markets / @DenarMarkets. Greenwood is greenwood.fi / @GwoodFinance. Category cousin (Morpho curator / credit), different handle and domain; not a merge."
    - slug: vynex
      signals: [other]
      contrary_signals:
        - "Census vynex is usevynex.org / @UseVynex. Greenwood is greenwood.fi / @GwoodFinance. Category cousin (Morpho / yield overlay), different handle and domain; not a merge."

classification:
  primary_leaf: tooling/scanner
  secondary_leaves: []
  mechanism_tags: [other]
  ecosystem_role: observe
  lifecycle: unknown
  coverage_recommendation: candidate
  evidence_state: partly-verified
  rationale: "Weekday discovery round 2026-09-18. Suggested lead Greenwood / @GwoodFinance / greenwood.fi is not a census row and is not in open #163 (arcus), #164 (canopy), #165 (twofold), #166 (sluice), or #167 (mosaic). Site and handle name each other; docs name GWOOD 0x24d8657e10AF588b12de3E102a116f77b9E35ee8, reproduced on chain 4663 as an EIP-1167 proxy (name Greenwood, symbol GWOOD, 45 B) with implementation 0x9fe6ad6a2334ee380a4d17c92d81faf5f9924efd (7607 B). Distinct from Uniswap v2 GREEN 0x24eEF81758c4839F8E5DBc1e63C477a864877777. Llama has no Greenwood protocol row. Coverage recommendation: candidate (inventory only)."

qualifying:
  deployed_on_chain: { status: unknown, claim_ids: [], note: "inventory packet; candidate deployments are on the Greenwood claims, not this inventory identity" }
  native_play:       { status: unknown, claim_ids: [], note: "inventory packet" }
  citable:           { status: unknown, claim_ids: [], note: "inventory packet" }
  research_story:    { status: unknown, claim_ids: [], note: "inventory packet" }

links:
  - { kind: site, url: "https://greenwood.fi/", authenticity: confirmed }
  - { kind: docs, url: "https://docs.greenwood.fi/", authenticity: confirmed }
  - { kind: app, url: "https://app.greenwood.fi/", authenticity: confirmed }
  - { kind: x, url: "https://x.com/GwoodFinance", authenticity: confirmed }
  - { kind: discord, url: "https://discord.com/invite/gwood", authenticity: confirmed }
  - { kind: explorer, url: "https://robinhoodchain.blockscout.com/address/0x24d8657e10AF588b12de3E102a116f77b9E35ee8", authenticity: unconfirmed }
  - { kind: dexscreener, url: "https://dexscreener.com/robinhood/0x72678b2e8ddedad5865272a857733d8dc98eb771", authenticity: confirmed }
  - { kind: other, url: "https://api.coingecko.com/api/v3/coins/greenwood", authenticity: confirmed }
  - { kind: other, url: "https://api.llama.fi/protocol/greenwood", authenticity: confirmed }

deployments:
  - label: GWOOD token (RPC name Greenwood, symbol GWOOD; EIP-1167 proxy)
    role: token
    address:
      value: "0x24d8657e10AF588b12de3E102a116f77b9E35ee8"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-18
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-4, R-5, R-7, R-9]
  - label: GWOOD EIP-1167 implementation
    role: implementation
    address:
      value: "0x9fe6ad6a2334ee380a4d17c92d81faf5f9924efd"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-18
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-4]
  - label: Uniswap v3 GWOOD/WETH pair (site DexScreener link; not the token)
    role: other
    address:
      value: "0x72678B2e8dDedad5865272A857733d8dC98Eb771"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-18
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-1, R-4, R-5]
  - label: Steakhouse USDG vault named on docs/why-this-chain (steakUSDG; not Greenwood-owned)
    role: vault
    address:
      value: "0xBeEff033F34C046626B8D0A041844C5d1A5409dd"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-18
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-4, R-10]

metrics:
  - { kind: market_cap, value: 2221667, currency: USD, as_of: 2026-09-18T13:45:40Z, window: point, method: "api.coingecko.com/api/v3/coins/greenwood market_data.market_cap.usd; platforms.robinhood 0x24d8657e10af588b12de3e102a116f77b9e35ee8; circulating_supply ~4.001e8 of 1e9", class: claim, receipt_ids: [R-7] }
  - { kind: volume_24h, value: 43311.7, currency: USD, as_of: 2026-09-18T13:42:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x24d8657e10AF588b12de3E102a116f77b9E35ee8 Uniswap v3 GWOOD/WETH pair 0x72678B2e…Eb771 volume.h24; pair-level, not summed with thinner GWOOD/USDG v4", class: claim, receipt_ids: [R-5] }

reproductions:
  - { id: REP-1, method: official-crosslink, chain_id: 4663, checked_at: 2026-09-18T13:45:00Z, receipt_ids: [R-1, R-2, R-5, R-7, R-8, R-9], result: "greenwood.fi title Greenwood: The self-custody neobank built on Robinhood Chain; footer Chain ID 4663; links docs.greenwood.fi, app.greenwood.fi, x.com/GwoodFinance, discord.com/invite/gwood, and DexScreener pair 0x72678b2e…eb771. @GwoodFinance website https://greenwood.fi/ and bio names Robinhood Chain plus app.greenwood.fi. CoinGecko coins/greenwood homepage https://greenwood.fi/ twitter_screen_name GwoodFinance platforms.robinhood 0x24d8657e10af588b12de3e102a116f77b9e35ee8. DexScreener info.websites https://greenwood.fi info.socials https://x.com/GwoodFinance and https://discord.com/invite/gwood. docs.greenwood.fi/gwood UNCX token URL uses that same address." }
  - { id: REP-2, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-18T13:45:53Z, receipt_ids: [R-4, R-18], result: "eth_chainId 0x1237 (4663); eth_blockNumber 0x3f33795 (66271125). Token 0x24d8657e…5ee8 code 45 B sha256 6642620a42e7ee6b74866cce9ec9107aade108be7fd949bf0b81f3fd9f38d1bd EIP-1167 impl 0x9fe6ad6a2334ee380a4d17c92d81faf5f9924efd name() Greenwood symbol() GWOOD decimals() 18 totalSupply() 1e27 owner() reverted; EIP-1967 impl/admin slots zero. Implementation 7607 B. Pair 0x72678B2e…Eb771 22142 B. Vault 0xBeEff033…09dd 21808 B name Steakhouse USDG symbol steakUSDG asset() USDG 0x5fc5360d…d168 owner() 0xca50d23f1c18c1dfaff5d3cae3aa4b9dc5c8db73. USDG name Global Dollar decimals 6. GREEN 0x24eEF817…7777 45 B different impl 0x7777c874…3333 name Greenwood symbol GREEN. Vest wallet 0xF48aC1bD…01df empty code. Lock tx 0x9a81d0d3…4b0a from 0xf48ac1bd…01df to 0xb31eaefa…aaf3 status 1 block 41901320 timestamp 2026-08-21T01:52:01Z." }
  - { id: REP-3, method: api, chain_id: 4663, checked_at: 2026-09-18T13:45:40Z, receipt_ids: [R-5, R-6, R-7, R-16], result: "CoinGecko id greenwood platforms.robinhood 0x24d8657e10af588b12de3e102a116f77b9e35ee8 preview_listing false market_cap.usd 2221667 fully_diluted_valuation.usd 5552779 total_volume.usd 46274 circulating_supply ~4.001e8 total_supply 1e9 last_updated 2026-09-18T13:45:40Z. DexScreener Uniswap v3 GWOOD/WETH volume.h24 43311.7 liquidity.usd 241267.54 marketCap 5570201 pairCreatedAt 2026-07-20T23:45:55Z; v4 GWOOD/USDG pairCreatedAt 2026-09-17T07:40:55Z. Search also returns Uniswap v2 Greenwood/GREEN 0x24eEF817…7777 pair 0xBbE6f24f…823F socials https://x.com/nasqret/status/2077211858562416900. Llama GET /protocol/greenwood 400 Protocol not found; protocols list search greenwood/gwood empty." }
  - { id: REP-4, method: document-scope, chain_id: 4663, checked_at: 2026-09-18T13:44:00Z, receipt_ids: [R-1, R-8, R-9, R-10, R-11, R-12, R-17, R-20], result: "Site: ERC-4337 smart account, USDG by Paxos, Morpho-powered vaults, card auth ~100 ms, membership Seed/Bloom/Harvest/Perennial; meta estimated 7.5% APY as of 8 August 2026; body estimated 7%* APY as of 8 August 2026; HTML address is the v3 pair not the token. Docs welcome: self-custody; Stockback Card issued by licensed partner; yield from third-party onchain markets; not a bank. Docs earn: curated USDG vault on Morpho; around 7% estimated APY. Docs why-this-chain: USDG 0x5fC5360D…D168 and Steakhouse USDG vault 0xBeEff033…09dd. Docs gwood: total supply 1e9; 60% in UNCX vesting; token URL 0x24d8657e…5ee8; product incentives locked 10 September 2026. Docs security: no customer-fund vault; no audit report URL. App: mobile install page. No paymaster address named." }
  - { id: REP-5, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-18T13:46:00Z, receipt_ids: [R-13], result: "GET robinhoodchain.blockscout.com/api/v2/addresses/0x24d8657e10AF588b12de3E102a116f77b9E35ee8 returned HTTP 403 Cloudflare challenge HTML (Just a moment...). HTML address page 200 with a generic title and no creation_transaction_hash in the copied excerpt. robin.etherscan.io token page 403; api.robin.etherscan.io NXDOMAIN. No invented creation tx." }

claims:
  - { id: CLM-1, field: candidate, value: "greenwood | Greenwood | @GwoodFinance | greenwood.fi", class: claim, observed_at: 2026-09-18T13:45:00Z, receipt_ids: [R-1, R-2, R-3], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "Official site greenwood.fi and handle @GwoodFinance name each other; the handle website is https://greenwood.fi/ and the bio names app.greenwood.fi", class: verified, observed_at: 2026-09-18T13:45:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@GwoodFinance", class: claim, observed_at: 2026-09-18T13:45:00Z, receipt_ids: [R-2, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-4, field: identity.symbol, value: "GWOOD", class: verified, observed_at: 2026-09-18T13:45:53Z, receipt_ids: [R-4, R-5, R-7], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-5, field: identity.name, value: "RPC name() Greenwood symbol() GWOOD at 0x24d8657e10AF588b12de3E102a116f77b9E35ee8; CoinGecko coins/greenwood name Greenwood; site title Greenwood; handle name Greenwood Finance", class: verified, observed_at: 2026-09-18T13:45:53Z, receipt_ids: [R-1, R-2, R-4, R-7], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: identity.name, value: "DexScreener Uniswap v2 pair 0xBbE6f24f1c5F816114713b92d7A1D0928f29823F baseToken 0x24eEF81758c4839F8E5DBc1e63C477a864877777 name Greenwood symbol GREEN; socials point at x.com/nasqret/status/2077211858562416900, not @GwoodFinance or greenwood.fi", class: verified, observed_at: 2026-09-18T13:42:00Z, receipt_ids: [R-16, R-4], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: product.mechanism, value: "Site: self-custody neobank on Robinhood Chain; USDG in an ERC-4337 smart account; idle dollars auto-route into Morpho-powered vaults; partner card; membership Seed/Bloom/Harvest/Perennial. Docs: Stockback Card issued by a licensed partner under Mastercard; Earn is a curated USDG Morpho vault; Portfolio Line borrows USDG against tokenized stocks; GWOOD used for tier locks and yield-fee share. CoinGecko description is marketing and is not used as a verified mechanism.", class: claim, observed_at: 2026-09-18T13:44:00Z, receipt_ids: [R-1, R-8, R-11, R-20], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-8, field: deployment.address, value: "0x24d8657e10AF588b12de3E102a116f77b9E35ee8", class: verified, observed_at: 2026-09-18T13:45:53Z, receipt_ids: [R-4, R-5, R-7, R-9], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-9, field: deployment.address, value: "0x9fe6ad6a2334ee380a4d17c92d81faf5f9924efd", class: verified, observed_at: 2026-09-18T13:45:53Z, receipt_ids: [R-4], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-10, field: deployment.address, value: "0x72678B2e8dDedad5865272A857733d8dC98Eb771", class: verified, observed_at: 2026-09-18T13:45:53Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-11, field: deployment.address, value: "0xBeEff033F34C046626B8D0A041844C5d1A5409dd", class: verified, observed_at: 2026-09-18T13:45:53Z, receipt_ids: [R-4, R-10], reproduction_ids: [REP-2, REP-4], supersedes: null }
  - { id: CLM-12, field: control.proxy, value: "GWOOD 0x24d8657e…5ee8 is a 45-byte EIP-1167 minimal proxy to 0x9fe6ad6a…4efd (7607 B). owner() reverted. EIP-1967 implementation and admin storage slots were zero.", class: verified, observed_at: 2026-09-18T13:45:53Z, receipt_ids: [R-4], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: lifecycle, value: "GWOOD bytecode is live on chain 4663. Uniswap v3 GWOOD/WETH pairCreatedAt 2026-07-20T23:45:55Z. Handle bio says Now in beta. Token creation transaction hash was not recovered (Blockscout API 403).", class: claim, observed_at: 2026-09-18T13:46:00Z, receipt_ids: [R-2, R-4, R-5, R-13], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: "CoinGecko greenwood market_cap.usd 2221667 at 2026-09-18T13:45:40Z for platforms.robinhood 0x24d8657e10af588b12de3e102a116f77b9e35ee8; fdv 5552779; circulating_supply ~4.001e8 of total_supply 1e9. Llama has no Greenwood protocol row; Steakhouse vault totalAssets was not attached as Greenwood TVL.", class: claim, observed_at: 2026-09-18T13:45:40Z, receipt_ids: [R-6, R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-15, field: economics.metric, value: "DexScreener Uniswap v3 GWOOD/WETH marketCap 5570201 fdv 5570201 at access 2026-09-18T13:42:00Z. That print is closer to CoinGecko fdv than to CoinGecko market_cap and was not averaged with it.", class: claim, observed_at: 2026-09-18T13:42:00Z, receipt_ids: [R-5], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-16, field: economics.metric, value: "Site body and docs earn: Morpho-powered / curated USDG vault estimated about 7% APY as of 8 August 2026, variable, from third-party onchain markets, not from Greenwood.", class: claim, observed_at: 2026-09-18T13:44:00Z, receipt_ids: [R-1, R-11], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-17, field: economics.metric, value: "Site meta description and page JS Earn card: estimated 7.5% APY as of 8 August 2026 / Estimated APY 7.5%*. Same page body still says estimated 7%*.", class: claim, observed_at: 2026-09-18T13:44:00Z, receipt_ids: [R-1], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-18, field: activity.status, value: "DexScreener Uniswap v3 GWOOD/WETH volume.h24 43311.7 liquidity.usd 241267.54; thinner Uniswap v4 GWOOD/USDG volume.h24 2991.11 was not summed", class: claim, observed_at: 2026-09-18T13:42:00Z, receipt_ids: [R-5], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "api.fxtwitter.com/GwoodFinance profile 200 (name Greenwood Finance, 1837 followers, website https://greenwood.fi/, bio Now in beta). /tweets HTTP 404. No dated @GwoodFinance status URL was copied this round. Follow-list dated posts recovered by a later signed-in X scout are on CLM-31, not Greenwood events.", class: claim, observed_at: 2026-09-18T14:02:00Z, receipt_ids: [R-2, R-14, R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: security.audit, value: "No audit report URL was located on greenwood.fi, docs.greenwood.fi/security, docs earn, or CoinGecko links this round.", class: unknown, observed_at: 2026-09-18T13:44:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: relationship, value: "Keep distinct from census longbow, earn-protocol, denar, and vynex. Those rows share Morpho overlay or credit/yield category only, not greenwood.fi / @GwoodFinance / GWOOD 0x24d8657e…5ee8. Dependency cards morpho, steakhouse, usdg, and uncx are cited infrastructure, not merges.", class: claim, observed_at: 2026-09-18T13:42:00Z, receipt_ids: [R-1, R-2, R-15], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-22, field: relationship, value: "GREEN 0x24eEF81758c4839F8E5DBc1e63C477a864877777 is a different EIP-1167 token (impl 0x7777c874…3333, symbol GREEN, DexScreener socials @nasqret). It is not @GwoodFinance / greenwood.fi / GWOOD 0x24d8657e…5ee8.", class: verified, observed_at: 2026-09-18T13:45:53Z, receipt_ids: [R-4, R-16], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-23, field: other, value: "This packet is filed on grok-bot/20260918/WORK-20260918-grok-bot-discovery-inventory. Prior open discovery PRs: #167 mosaic, #166 sluice, #165 twofold, #164 canopy, #163 arcus. #92 site trenches stream, no packet files. Not duplicated.", class: claim, observed_at: 2026-09-18T13:42:00Z, receipt_ids: [R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: other, value: "Rejected this round (not packed as candidates): rallypadfun / hoodmarketcap CA 0x7daf6b4cc3eac752ae9a77967f78b15886aa1c89 eth_getCode 7154 B this round (assignment scout had empty code; still not packed); FundedProtocol (thenews.gg prop firm; weaker RH native footprint); Mosaic already #167; Ravenhood Protocol @RVHProtocol / ravenhood.xyz (runner-up; see CLM-32).", class: claim, observed_at: 2026-09-18T14:02:00Z, receipt_ids: [R-4, R-15, R-22], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-25, field: economics.metric, value: "GET api.llama.fi/protocol/greenwood returned Protocol not found. Protocols-list search for greenwood/gwood returned empty hits. No Llama TVL attached.", class: verified, observed_at: 2026-09-18T13:43:00Z, receipt_ids: [R-6], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-26, field: activity.status, value: "Docs gwood lock transaction 0x9a81d0d348214468615d3ad9ce7aa37286002755b9fb1e4265e8451251f14b0a reproduced: from 0xf48ac1bd…01df to UNCX-style contract 0xb31eaefa…aaf3, status 1, block 41901320, timestamp 2026-08-21T01:52:01Z. That tx is the docs 10% ecosystem lock, not the 10 September 2026 product-incentive lock.", class: verified, observed_at: 2026-09-18T13:47:34Z, receipt_ids: [R-9, R-18], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-27, field: control.owner, value: "GoPlus token_security/4663 reports creator_address 0x5330d0a4c9084119700f2591fa102cc400940e99 (RPC eth_getCode empty) and owner_address null. Blockscout creation tx was not recovered, so the creator remains a third-party claim.", class: claim, observed_at: 2026-09-18T13:47:00Z, receipt_ids: [R-4, R-13, R-19], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-28, field: deployment.address, value: "Site copy names a paymaster-sponsored card authorisation. No paymaster, factory, or smart-account implementation address was named on greenwood.fi HTML/JS this round or on the docs pages opened.", class: unknown, observed_at: 2026-09-18T13:44:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-29, field: other, value: "content/accounts.yaml already lists @GwoodFinance as watch/project with note Named on MCG calendar this week and no census slug. Census.yaml (182 slugs) has no greenwood/gwood/GwoodFinance/greenwood.fi row.", class: claim, observed_at: 2026-09-18T13:42:00Z, receipt_ids: [R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-30, field: control.proxy, value: "GoPlus token_security/4663 for 0x24d8657e…5ee8 returned is_proxy 0 this round. CoinGecko public_notice still states that according to GoPlus this is a proxy contract. RPC shows a 45-byte EIP-1167 clone.", class: claim, observed_at: 2026-09-18T13:47:00Z, receipt_ids: [R-7, R-19], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-31, field: communications.status, value: "Follow-list dated posts recovered via signed-in X scout 2026-09-18 and independently copied here via api.fxtwitter.com status 200. Not Greenwood candidate events; no separate update packets this round. URLs: https://x.com/0xSammy/status/2100526222962721006 (2026-09-17T10:04:12Z); https://x.com/uponrh/status/2100696706241179809 (2026-09-17T21:21:38Z); https://x.com/uponrh/status/2100536155527655670 (2026-09-17T10:43:40Z Epoch 9 summary; image metrics not OCR'd); https://x.com/uponrh/status/2100887836694094107 (2026-09-18T10:01:07Z); https://x.com/deltaliquidity/status/2100286390693216286 (2026-09-16T18:11:11Z); https://x.com/deltaliquidity/status/2100683961957785722 (2026-09-17T20:31:00Z); https://x.com/ArrowFinanceio/status/2100281397076275491 (2026-09-16T17:51:21Z); https://x.com/ponsdotfamily/status/2100012509960798686 (2026-09-16T00:02:53Z); https://x.com/Hookrfun/status/2100664472159265171 (2026-09-17T19:13:33Z); https://x.com/whatthehookv4/status/2100657995302781072 (2026-09-17T18:47:49Z); https://x.com/ClutchMarkets/status/2100605915028205636 (2026-09-17T15:20:52Z); https://x.com/canopyfinance/status/2100321827297894815 (2026-09-16T20:32:00Z); https://x.com/canopyfinance/status/2100539998793556256 (2026-09-17T10:58:56Z); https://x.com/canopyfinance/status/2100882771728122141 (2026-09-18T09:40:59Z); https://x.com/twofoldfi/status/2100614709674164554 (2026-09-17T15:55:48Z); https://x.com/twofoldfi/status/2100800351985082616 (2026-09-18T04:13:29Z); https://x.com/sluice_rh/status/2100609222027162016 (2026-09-17T15:34:00Z); https://x.com/sluice_rh/status/2100805765988516110 (2026-09-18T04:35:00Z); https://x.com/arcus_xyz/status/2100741943101939728 (2026-09-18T00:21:23Z); https://x.com/arcus_xyz/status/2100930655962165346 (2026-09-18T12:51:16Z). @Floor_fi / @MosaicETF / @longdotxyz / @ArtificiallyInu: no material new posts in the 2026-09-16 to 2026-09-18 window per the signed-in scout.", class: claim, observed_at: 2026-09-18T14:02:00Z, receipt_ids: [R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-32, field: other, value: "Runner-up rejected as this packet's primary candidate: Ravenhood Protocol @RVHProtocol / ravenhood.xyz. fxtwitter profile 200; website https://www.ravenhood.xyz/; bio has no contract address. Dated posts https://x.com/RVHProtocol/status/2100626777324269589, https://x.com/RVHProtocol/status/2100694265030476101, https://x.com/RVHProtocol/status/2100794116409876682. Prefer Greenwood (site+docs+GWOOD CA+DexScreener+CoinGecko). Not packed. Census has no ravenhood row; accounts.yaml lists @RVHProtocol watch/project with no slug.", class: claim, observed_at: 2026-09-18T14:02:00Z, receipt_ids: [R-22, R-23], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-16, CLM-17]
    material_effect: "The same official site publishes estimated 7% APY in body copy and estimated 7.5% APY in the meta description and Earn card JS, both as of 8 August 2026. Do not pick one print as the live vault rate."
    status: open
    resolution: null
  - id: CON-2
    field: identity.name
    claim_ids: [CLM-5, CLM-6]
    material_effect: "DexScreener search greenwood also returns Uniswap v2 Greenwood/GREEN 0x24eEF817…7777 with @nasqret socials. Record the name collision; do not merge with GWOOD 0x24d8657e…5ee8 / @GwoodFinance / greenwood.fi."
    status: open
    resolution: null
  - id: CON-3
    field: economics.metric
    claim_ids: [CLM-14, CLM-15]
    material_effect: "CoinGecko market_cap.usd 2221667 uses circulating supply ~40%. DexScreener pair marketCap 5570201 matches fdv-style. Keep both labeled; do not average."
    status: open
    resolution: null
  - id: CON-4
    field: control.proxy
    claim_ids: [CLM-12, CLM-30]
    material_effect: "RPC reproduced an EIP-1167 45-byte proxy. GoPlus is_proxy is 0 this round while CoinGecko public_notice still cites GoPlus as calling it a proxy. Keep the RPC clone as the onchain reading; do not treat GoPlus is_proxy as a verified owner path."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "Uniswap v3 GWOOD/WETH pair created on Robinhood Chain"
    summary: "DexScreener reports Uniswap v3 pair 0x72678B2e8dDedad5865272A857733d8dC98Eb771 for Greenwood/GWOOD quoted in WETH on chain robinhood, pairCreatedAt 2026-07-20T23:45:55Z. Official site DexScreener link points at this pair address, not the token."
    account: null
    occurred_at: 2026-07-20T23:45:55Z
    observed_at: 2026-09-18T13:42:00Z
    affected_fields: [deployment.address, activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-5]
    tag: launch-date
  - id: EVT-2
    type: onchain
    title: "Uniswap v4 GWOOD/USDG pair created on Robinhood Chain"
    summary: "DexScreener reports Uniswap v4 GWOOD/USDG pairCreatedAt 2026-09-17T07:40:55Z for token 0x24d8657e10AF588b12de3E102a116f77b9E35ee8. The v4 pool id is 32 bytes and is not listed as a 20-byte deployment."
    account: null
    occurred_at: 2026-09-17T07:40:55Z
    observed_at: 2026-09-18T13:42:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-5]
    tag: listing
  - id: EVT-3
    type: company
    title: "Docs: product-incentive GWOOD lock dated 10 September 2026"
    summary: "docs.greenwood.fi/gwood states Product incentives 40% were locked for product incentives on 10 September 2026, with a 1 year cliff then a 1 year linear vest through 10 September 2028, and links UNCX vesting flux 4663-127. The separately linked lock transaction 0x9a81…4b0a is dated 2026-08-21 on RPC and is the 10% ecosystem lock, not this 40% lock."
    account: null
    occurred_at: 2026-09-10T00:00:00Z
    observed_at: 2026-09-18T13:44:00Z
    affected_fields: [product.mechanism, activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-9]
    tag: other

receipts:
  - { id: R-1, publisher: Greenwood, title: "greenwood.fi", url: "https://greenwood.fi/", published_at: null, accessed_at: 2026-09-18T13:42:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-5, CLM-7, CLM-10, CLM-16, CLM-17, CLM-21], excerpt: "title Greenwood: The self-custody neobank built on Robinhood Chain. Meta: estimated 7.5% APY as of 8 August 2026. Body: USDG, the Paxos-issued Global Dollar, inside an ERC-4337 smart account; Chain ID 4663; Morpho-powered vaults at an estimated 7%* APY as of 8 August 2026. Links docs.greenwood.fi, app.greenwood.fi, x.com/GwoodFinance, discord.com/invite/gwood, dexscreener.com/robinhood/0x72678b2e8ddedad5865272a857733d8dc98eb771." }
  - { id: R-2, publisher: FixTweet, title: "api.fxtwitter.com/GwoodFinance", url: "https://api.fxtwitter.com/GwoodFinance", published_at: null, accessed_at: 2026-09-18T13:45:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-13, CLM-19], excerpt: "code 200. screen_name GwoodFinance name Greenwood Finance id 2078265748326154240 followers 1837 tweets 109 joined Fri Jul 17 23:54:08 +0000 2026. description The self-custody neobank on Robinhood Chain. Spend, save, borrow, invest from one vault. Earn tokenized equity rewards. Now in beta. http://app.greenwood.fi. website https://greenwood.fi/." }
  - { id: R-3, publisher: X, title: "x.com/GwoodFinance", url: "https://x.com/GwoodFinance", published_at: null, accessed_at: 2026-09-18T13:45:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-1, CLM-3], excerpt: "Profile URL for handle @GwoodFinance. Profile fields were copied from api.fxtwitter.com/GwoodFinance. Direct x.com HTML was not used for bio text this round (anonymous x.com fetch blocked). No status id was copied." }
  - { id: R-4, publisher: Robinhood Chain RPC, title: "eth_getCode / eth_call chain 4663", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-18T13:45:53Z, kind: other, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-8, CLM-9, CLM-10, CLM-11, CLM-12, CLM-13, CLM-22, CLM-24, CLM-26, CLM-27], excerpt: "eth_chainId 0x1237. GWOOD 0x24d8657e…5ee8 45 B EIP-1167 impl 0x9fe6ad6a…4efd name Greenwood symbol GWOOD decimals 18 totalSupply 1e27 owner() reverted. Impl 7607 B. Pair 0x72678B2e…Eb771 22142 B. Vault 0xBeEff033…09dd name Steakhouse USDG symbol steakUSDG asset USDG. GREEN 0x24eEF817…7777 45 B impl 0x7777c874…3333 name Greenwood symbol GREEN. Rallypad 0x7daf6b4c…1c89 7154 B. Lock tx 0x9a81…4b0a status 1 timestamp 2026-08-21T01:52:01Z." }
  - { id: R-5, publisher: DexScreener, title: "GWOOD token pairs", url: "https://api.dexscreener.com/latest/dex/tokens/0x24d8657e10AF588b12de3E102a116f77b9E35ee8", published_at: null, accessed_at: 2026-09-18T13:42:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-4, CLM-8, CLM-10, CLM-13, CLM-15, CLM-18, EVT-1, EVT-2], excerpt: "chainId robinhood dexId uniswap labels v3 pair 0x72678B2e8dDedad5865272A857733d8dC98Eb771 GWOOD/WETH liquidity.usd 241267.54 volume.h24 43311.7 marketCap 5570201 pairCreatedAt 2026-07-20T23:45:55Z websites https://greenwood.fi socials https://x.com/GwoodFinance https://discord.com/invite/gwood. v4 GWOOD/USDG volume.h24 2991.11 pairCreatedAt 2026-09-17T07:40:55Z not summed." }
  - { id: R-6, publisher: DefiLlama, title: "protocol/greenwood", url: "https://api.llama.fi/protocol/greenwood", published_at: null, accessed_at: 2026-09-18T13:43:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-14, CLM-25], excerpt: "HTTP 400 body Protocol not found. GET /protocols JSON search for greenwood and gwood returned zero protocol rows. No TVL attached." }
  - { id: R-7, publisher: CoinGecko, title: "coins/greenwood", url: "https://api.coingecko.com/api/v3/coins/greenwood", published_at: null, accessed_at: 2026-09-18T13:45:40Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-8, CLM-14, CLM-30], excerpt: "id greenwood name Greenwood symbol gwood platforms.robinhood 0x24d8657e10af588b12de3e102a116f77b9e35ee8 twitter_screen_name GwoodFinance homepage https://greenwood.fi/ categories include Robinhood Ecosystem. preview_listing false market_cap.usd 2221667 fdv.usd 5552779 total_volume.usd 46274 circulating_supply ~4.001e8 total_supply 1e9 last_updated 2026-09-18T13:45:40Z. public_notice cites GoPlus proxy/owner risk. description treated as marketing, not a verified mechanism." }
  - { id: R-8, publisher: Greenwood, title: "docs.greenwood.fi", url: "https://docs.greenwood.fi/", published_at: null, accessed_at: 2026-09-18T13:43:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-7], excerpt: "title Greenwood Docs. Heading Welcome to Greenwood. Copy: Greenwood is an account built around what you own. Stockback Card. Yield until the moment you spend. A self-custody account. Greenwood is a financial technology company. It is not a bank, not a broker-dealer, and not a licensed custodian. Yield is variable and comes from third-party onchain protocols, not from Greenwood." }
  - { id: R-9, publisher: Greenwood, title: "docs.greenwood.fi/gwood", url: "https://docs.greenwood.fi/gwood", published_at: null, accessed_at: 2026-09-18T13:44:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-26, EVT-3], excerpt: "Total supply 1,000,000,000. Network Robinhood Chain. Locked 60% in UNCX vesting contracts. Circulating 40%. Product incentives 40% locked for product incentives on 10 September 2026. UNCX token URL chain/4663/address/0x24d8657e10af588b12de3e102a116f77b9e35ee8. Lock transaction https://robinhoodchain.blockscout.com/tx/0x9a81d0d348214468615d3ad9ce7aa37286002755b9fb1e4265e8451251f14b0a. Team vesting wallet 0xF48aC1bD0D3c22E67d47A4630ee4dC7f9B0701df." }
  - { id: R-10, publisher: Greenwood, title: "docs.greenwood.fi/why-this-chain", url: "https://docs.greenwood.fi/why-this-chain", published_at: null, accessed_at: 2026-09-18T13:43:30Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-11], excerpt: "Chain ID 4663. Block time ~100 ms. USDG is the dollar in your account. Contract address: 0x5fC5360D0400a0FD4F2aF552aDd042D716f1D168. The Steakhouse USDG vault powers Earn. Vault address: 0xBeEff033F34C046626B8D0A041844C5d1A5409dd. Greenwood is built on Robinhood Chain but is not affiliated with, operated by, or endorsed by Robinhood Markets, Inc." }
  - { id: R-11, publisher: Greenwood, title: "docs.greenwood.fi/earn", url: "https://docs.greenwood.fi/earn", published_at: null, accessed_at: 2026-09-18T13:43:30Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-7, CLM-16], excerpt: "Deposits go into a curated USDG vault on Morpho, a lending protocol that runs entirely onchain. The current vault rate is around 7% estimated APY. It is variable, it moves with the market, and it is not guaranteed. Yield comes from third-party onchain protocols, not from Greenwood. Above 3%, Greenwood keeps a published share of the excess by membership ring." }
  - { id: R-12, publisher: Greenwood, title: "docs.greenwood.fi/security", url: "https://docs.greenwood.fi/security", published_at: null, accessed_at: 2026-09-18T13:44:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [], excerpt: "Security at Greenwood starts from an unusual place. Your keys are on your device and your assets are on a public chain. There is no vault of customer funds to breach. We cannot move your assets. No audit report URL is present on this page." }
  - { id: R-13, publisher: Blockscout, title: "api/v2 GWOOD address (Cloudflare 403)", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x24d8657e10AF588b12de3E102a116f77b9E35ee8", published_at: null, accessed_at: 2026-09-18T13:46:00Z, kind: explorer, authority: onchain, authenticity: unconfirmed, supports: [CLM-13, CLM-27], excerpt: "HTTP 403. Cloudflare managed challenge HTML title Just a moment…. No JSON address record. Creation transaction hash, verified source name, creator, and holders_count not recovered. No invented creation tx." }
  - { id: R-14, publisher: FixTweet, title: "api.fxtwitter.com/GwoodFinance/tweets", url: "https://api.fxtwitter.com/GwoodFinance/tweets", published_at: null, accessed_at: 2026-09-18T13:45:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-19], excerpt: "HTTP 404 JSON {\"code\":404,\"message\":\"Not found\"}. Same 404 on /tweets for uponrh. No dated @GwoodFinance status URL copied this round." }
  - { id: R-15, publisher: GitHub, title: "harsharn10/proofline open pulls and census", url: "https://github.com/harsharn10/proofline/pulls", published_at: null, accessed_at: 2026-09-18T13:42:00Z, kind: other, authority: independent, authenticity: confirmed, supports: [CLM-21, CLM-23, CLM-24, CLM-29], excerpt: "Open PRs including drafts: #167 WORK-20260917 mosaic; #166 sluice; #165 twofold; #164 canopy; #163 arcus; #92 site trenches stream, no packet files. Census.yaml 182 slugs had no greenwood/gwood/GwoodFinance/greenwood.fi. accounts.yaml lists @GwoodFinance watch/project with no census slug." }
  - { id: R-16, publisher: DexScreener, title: "GREEN token pair (name collision)", url: "https://api.dexscreener.com/latest/dex/tokens/0x24eEF81758c4839F8E5DBc1e63C477a864877777", published_at: null, accessed_at: 2026-09-18T13:42:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-22], excerpt: "chainId robinhood dexId uniswap labels v2 pair 0xBbE6f24f1c5F816114713b92d7A1D0928f29823F baseToken 0x24eEF81758c4839F8E5DBc1e63C477a864877777 name Greenwood symbol GREEN quote WETH liquidity.usd 5766.29 volume.h24 1.8 marketCap 3076 pairCreatedAt 2026-07-15T01:58:33Z websites [] socials https://x.com/nasqret/status/2077211858562416900. Not GWOOD 0x24d8657e…5ee8." }
  - { id: R-17, publisher: Greenwood, title: "app.greenwood.fi", url: "https://app.greenwood.fi/", published_at: null, accessed_at: 2026-09-18T13:42:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [], excerpt: "title Greenwood. Meta: The self-custody neobank built on Robinhood Chain. Greenwood is a financial technology company, not a bank. Visible copy: Greenwood is built for your phone. Scan with your camera to open it, then add it to your Home Screen. No 0x40-hex address in the HTML this round." }
  - { id: R-18, publisher: Robinhood Chain RPC, title: "eth_getTransactionByHash UNCX lock 0x9a81…4b0a", url: "https://rpc.mainnet.chain.robinhood.com", published_at: 2026-08-21T01:52:01Z, accessed_at: 2026-09-18T13:47:34Z, kind: other, authority: onchain, authenticity: confirmed, supports: [CLM-26], excerpt: "hash 0x9a81d0d348214468615d3ad9ce7aa37286002755b9fb1e4265e8451251f14b0a from 0xf48ac1bd0d3c22e67d47a4630ee4dc7f9b0701df to 0xb31eaefa2a0bdc53df6d7a7f0f289b6ee1a8aaf3 blockNumber 0x27f5d08 (41901320) timestamp 2026-08-21T01:52:01Z receipt status 0x1 contractAddress null. Input selector 0x0c558e44 includes token 0x24d8657e10af588b12de3e102a116f77b9e35ee8." }
  - { id: R-19, publisher: GoPlus, title: "token_security/4663 GWOOD", url: "https://api.gopluslabs.io/api/v1/token_security/4663?contract_addresses=0x24d8657e10AF588b12de3E102a116f77b9E35ee8", published_at: null, accessed_at: 2026-09-18T13:47:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-27, CLM-30], excerpt: "code 1. token_name Greenwood token_symbol GWOOD total_supply 1000000000 is_proxy 0 owner_address null creator_address 0x5330d0a4c9084119700f2591fa102cc400940e99 creator_balance 0 is_open_source 1 holder_count 1729. Top holder 0xB31eAEFA2A0bdC53Df6D7a7f0f289b6eE1a8AAF3 is_contract 1 percent 0.599900. UniV3 pair 0x72678b2e8ddedad5865272a857733d8dc98eb771. Third-party only; not a creation-tx substitute." }
  - { id: R-20, publisher: Greenwood, title: "docs.greenwood.fi/card", url: "https://docs.greenwood.fi/card", published_at: null, accessed_at: 2026-09-18T13:43:30Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-7], excerpt: "The Greenwood Stockback debit card is issued by a licensed card-issuing partner. When you pay using your card, the merchant's authorization is checked against your available balance and your Portfolio Line, and the transaction settles through the card network. Card-terms page: issued by a licensed card-issuing partner under license from Mastercard. Partner name and paymaster address are not published on these pages." }
  - { id: R-21, publisher: FixTweet, title: "follow-list status sample @ArrowFinanceio/2100281397076275491", url: "https://x.com/ArrowFinanceio/status/2100281397076275491", published_at: 2026-09-16T17:51:21Z, accessed_at: 2026-09-18T14:02:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-19, CLM-31], excerpt: "api.fxtwitter.com status 200 follow-list ids (not Greenwood events): 2100526222962721006, 2100696706241179809, 2100536155527655670, 2100887836694094107, 2100286390693216286, 2100683961957785722, 2100281397076275491, 2100012509960798686, 2100664472159265171, 2100657995302781072, 2100605915028205636, 2100321827297894815, 2100539998793556256, 2100882771728122141, 2100614709674164554, 2100800351985082616, 2100609222027162016, 2100805765988516110, 2100741943101939728, 2100930655962165346." }
  - { id: R-22, publisher: FixTweet, title: "api.fxtwitter.com/RVHProtocol", url: "https://api.fxtwitter.com/RVHProtocol", published_at: null, accessed_at: 2026-09-18T14:02:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-24, CLM-32], excerpt: "code 200. screen_name RVHProtocol name Ravenhood Protocol id 2073379517888860160 followers 1733 tweets 452. description Deflationary RWAFI Built Robinhood Chain. $RVH Supply shrinks. Treasury grows. Built around tokenized stocks, on chain blue chips, and holder aligned yield. website https://www.ravenhood.xyz/. No contract address in the bio this round." }
  - { id: R-23, publisher: Ravenhood Protocol, title: "x.com/RVHProtocol/status/2100626777324269589", url: "https://x.com/RVHProtocol/status/2100626777324269589", published_at: 2026-09-17T16:43:46Z, accessed_at: 2026-09-18T14:02:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-32], excerpt: "created_at Thu Sep 17 16:43:46 +0000 2026. text: The Raven keeps climbing. The numbers follow. $45.7K lifetime protocol revenue. 22.27% of supply permanently burned. robinhood:0x96765066f6a040a21eb027167d2315b707c82633. CA is in the post text, not the bio. Copied via api.fxtwitter.com/RVHProtocol/status/2100626777324269589 (200). Related 2100694265030476101 Flock Credit voting; 2100794116409876682 multiple products." }

gaps:
  - { area: deployment, priority: P0, question: "What is the GWOOD token creation transaction hash on chain 4663, and does Blockscout verify the EIP-1167 implementation source?", checked: "Blockscout api/v2 HTTP 403 Cloudflare 2026-09-18; RPC eth_getCode 45 B EIP-1167; GoPlus creator_address unreproduced on explorer", next: "retry Blockscout or another explorer for creation_transaction_hash; do not invent a hash" }
  - { area: product, priority: P0, question: "What are the Greenwood paymaster, ERC-4337 account factory, and card-issuer contract addresses on 4663?", checked: "greenwood.fi HTML/JS, docs your-account/card/earn/why-this-chain 2026-09-18; paymaster named in copy only; vault 0xBeEff033…09dd named", next: "read app JS or docs reference pages if addresses appear; do not treat steakUSDG as Greenwood-owned" }
  - { area: identity, priority: P0, question: "Does a later seed keep greenwood.fi distinct from GREEN 0x24eEF817…7777 and from census longbow/earn-protocol/denar/vynex?", checked: "CON-2 recorded; possible_matches cousins recorded; census 182 slugs had no greenwood/gwood", next: "controller disposition before compiling a greenwood census row; never merge GREEN or attach Steakhouse TVL" }
  - { area: control, priority: P1, question: "Who can upgrade the GWOOD EIP-1167 implementation, and what privileged roles exist on steakUSDG versus Greenwood's app?", checked: "owner() reverted on GWOOD; EIP-1967 slots zero; vault owner() 0xca50d23f…db73; GoPlus owner_address null; Blockscout unverified", next: "read verified source or clone beacon when explorer works; do not infer admin from GoPlus is_proxy 0" }
  - { area: security, priority: P1, question: "Is there an audit whose scope matches the GWOOD clone, the ERC-4337 account, or the card/paymaster path?", checked: "docs/security, site, docs earn, CoinGecko links, 2026-09-18; no report URL copied", next: "ask in public and record the answer as a claim; match bytecode if a report appears" }
  - { area: team, priority: P1, question: "Who controls greenwood.fi / @GwoodFinance, and is there a repository?", checked: "site and handle cross-link; CoinGecko twitter GwoodFinance; GitHub search greenwood GwoodFinance total_count 0; vesting wallet is an EOA", next: "do not merge the GoPlus creator with the site or handle without a signed or on-chain link" }
  - { area: communications, priority: P1, question: "What dated @GwoodFinance status URLs exist for beta, card, or lock announcements?", checked: "fxtwitter /tweets 404; profile 200; no @GwoodFinance status id copied; signed-in X scout recovered follow-list URLs copied via fxtwitter status-by-id 200 on 2026-09-18", next: "retry Latest on @GwoodFinance; copy a Greenwood status id if recovered; do not invent one" }
  - { area: economics, priority: P2, question: "Which estimated APY print is the live Morpho vault rate, and is there a Llama protocol row for greenwood.fi?", checked: "site 7% vs 7.5% CON-1; steakUSDG totalAssets not used as Greenwood TVL; Llama protocol/greenwood 400", next: "read Morpho/steakUSDG chain-slice as a dependency metric; do not attach it to Greenwood until a Greenwood-specific vault is named" }
  - { area: activity, priority: P2, question: "What 24h volume is the v3 GWOOD/WETH pair versus the v4 GWOOD/USDG row, and how much GWOOD sits in UNCX 0xb31eaefa…?", checked: "DexScreener v3 h24 43311.7; v4 not summed; GoPlus top holder 59.99% at 0xB31eAEFA…; lock tx reproduced 2026-08-21", next: "keep pair-level DexScreener; do not average with CoinGecko total_volume; enumerate UNCX flux 4663-127 when explorer works" }

---

# Discovery inventory 2026-09-18 — research packet

## What it is

Robinhood Chain names that are not yet census rows. This round's protocol lead is Greenwood: greenwood.fi describes a self-custody neobank on Robinhood Chain whose USDG balance sits in an ERC-4337 smart account, idle dollars route into a Morpho-powered vault, and a partner-issued card spends from that account. Official site greenwood.fi and handle @GwoodFinance name each other; docs name GWOOD `0x24d8657e10AF588b12de3E102a116f77b9E35ee8`. RPC reproduced that ERC-20 on chain 4663 as an EIP-1167 proxy (name Greenwood, symbol GWOOD, 45 B) with implementation `0x9fe6ad6a2334ee380a4d17c92d81faf5f9924efd`. Distinct from Uniswap v2 GREEN `0x24eEF817…7777`. Open #167 mosaic, #166 sluice, #165 twofold, #164 canopy, #163 arcus.

Themes: self-custody, morpho-vault, erc-4337, stockback-card, robinhood-chain

TL;DR: Greenwood is a self-custody neobank on Robinhood Chain; GWOOD exists at 0x24d8657e…5ee8 and has no census row.

## Why it matters

- Site and docs describe an ERC-4337 USDG account with Morpho Earn and a partner card; GWOOD and steakUSDG were reproduced on 4663 [claim R-1 R-4 R-8 R-10]
- DexScreener Uniswap v3 GWOOD/WETH liquidity about $241,268 and 24h volume about $43,312; CoinGecko market cap about $2.22M [claim R-5 R-7]
- Docs name the token, Steakhouse vault, and UNCX locks; Blockscout creation tx unrecovered this round [claim R-9 R-10 R-13]

## What could go wrong

- Site meta and JS say estimated 7.5% APY; body and docs say about 7% as of 8 August 2026 [claim R-1 R-11]
- DexScreener also lists Greenwood/GREEN `0x24eEF817…7777`; do not merge with GWOOD `0x24d8657e…5ee8` [verified R-4 R-16]
- GWOOD is an EIP-1167 clone; owner() reverted; paymaster address unpublished; Blockscout creation tx unknown [verified R-4 R-13]

## Operations log

- Main SHA read: 6bdec45663bb3aeb429fc5bf48d0013e24372b34 at seed. Follow-up 2026-09-18 re-read origin/main 40908bc3032adee9ad93fc8dba8c754229c7afe5; AGENTS.md unchanged. Docs: ingestion.md, grok-bot.md, research-system.md §§4–7 and §10, research-packet-v2.md, admission-policy.md, skills/research-seed/SKILL.md, census.yaml (182 slugs), accounts.yaml (@GwoodFinance watch/project, no census slug).
- Open PRs including drafts: this packet is the 2026-09-18 inventory. #167 mosaic, #166 sluice, #165 twofold, #164 canopy, #163 arcus not duplicated. #92 site trenches stream; no packet files.
- candidates listed: 1
- Follow-list: api.fxtwitter.com /tweets 404 for GwoodFinance and uponrh. Signed-in X scout 2026-09-18 supplied dated status URLs; this collector copied bodies via api.fxtwitter.com/<handle>/status/<id> HTTP 200 (not packed as Greenwood events; APR/TVL figures not reproduced here except as posted text). Exact URLs: @0xSammy 2026-09-17T10:04:12Z https://x.com/0xSammy/status/2100526222962721006 “Which AI / Agentic tokens are we longing on Robinhood chain?”; @uponrh 2026-09-17T21:21:38Z https://x.com/uponrh/status/2100696706241179809 RWA token pools / highest APRs claim; @uponrh 2026-09-17T10:43:40Z https://x.com/uponrh/status/2100536155527655670 text “Epoch 9 summary ↑” (signed-in scout noted an image with $9.29M TVL, $425.2K emissions, $31K buybacks, $287.1K rewards, APRs up to 2,562% — those image figures were not OCR'd here); @uponrh 2026-09-18T10:01:07Z https://x.com/uponrh/status/2100887836694094107 boosted $PONS $AI $CASHCAT $STONKBROKER; @deltaliquidity 2026-09-16T18:11:11Z https://x.com/deltaliquidity/status/2100286390693216286 Arc live on Delta https://arc.deltaliquidity.app/pools; @deltaliquidity 2026-09-17T20:31:00Z https://x.com/deltaliquidity/status/2100683961957785722 0.50% $DELTA buyback; @ArrowFinanceio 2026-09-16T17:51:21Z https://x.com/ArrowFinanceio/status/2100281397076275491 $UP emissions to aUSD/USDG https://staking.arrowfinance.io/stake; @ponsdotfamily 2026-09-16T00:02:53Z https://x.com/ponsdotfamily/status/2100012509960798686 creators earned over $125,000,000 rewards https://ponsfamily.com/launchpad; @Hookrfun 2026-09-17T19:13:33Z https://x.com/Hookrfun/status/2100664472159265171 Arbitrage recapture with @whatthehookv4 https://hookr.fun; @whatthehookv4 2026-09-17T18:47:49Z https://x.com/whatthehookv4/status/2100657995302781072 Hookr integration live; @ClutchMarkets 2026-09-17T15:20:52Z https://x.com/ClutchMarkets/status/2100605915028205636 StonkBrokers ecosystem volume claim https://stonkbrokers.io; @canopyfinance 2026-09-16T20:32:00Z https://x.com/canopyfinance/status/2100321827297894815 $CNPY tied to @v4dotfun from Sep 19; @canopyfinance 2026-09-17T10:58:56Z https://x.com/canopyfinance/status/2100539998793556256 V4 Ultra 0.15% fee 100% CNPY buyback https://v4ultra.com; @canopyfinance 2026-09-18T09:40:59Z https://x.com/canopyfinance/status/2100882771728122141 bought back another $1,000 CNPY (bio CA 0x532c5583671870723ceef573600208af49c87c54 is on #164, not this packet); @twofoldfi 2026-09-17T15:55:48Z https://x.com/twofoldfi/status/2100614709674164554 US tokenized stock pools (bio CA 0x2A4a33A2163D005d8E7f1D9aC08d14c98db288d5 is on #165); @twofoldfi 2026-09-18T04:13:29Z https://x.com/twofoldfi/status/2100800351985082616 DualPool USDG vault claim; @sluice_rh 2026-09-17T15:34:00Z https://x.com/sluice_rh/status/2100609222027162016 and 2026-09-18T04:35:00Z https://x.com/sluice_rh/status/2100805765988516110 venue-agnostic / agents (bio CA 0xb48d34dd8b53324cb8525461c8e548522db885ec is on #166); @arcus_xyz 2026-09-18T00:21:23Z https://x.com/arcus_xyz/status/2100741943101939728 and 2026-09-18T12:51:16Z https://x.com/arcus_xyz/status/2100930655962165346 24/7 stock token markets / ~200 markets zero fees. @Floor_fi / @MosaicETF / @longdotxyz / @ArtificiallyInu: no material new posts in the 2026-09-16 to 2026-09-18 window per the signed-in scout. No @GwoodFinance status URL. Those follow-list posts belong on existing census slugs or open discovery PRs #163–#167, not a Greenwood inventory event.

- Icarus/pre-collected evidence reproduced this round: site/docs/app crosslinks; @GwoodFinance profile (fxtwitter 200, 1837 followers); DexScreener v3 pair plus v4 GWOOD/USDG; CoinGecko coins/greenwood; RPC GWOOD 45 B EIP-1167 name/symbol GWOOD decimals 18; pair nonempty; Llama empty. Icarus Blockscout Cloudflare block reproduced (403). Site DexScreener URL is the v3 pair, not the token.
- Gap hunt: Greenwood / @GwoodFinance / greenwood.fi did not collapse to a census row or to #163–#167. GREEN 0x24eEF817…7777 recorded under CON-2 and not merged. Category cousins longbow, earn-protocol, denar, vynex recorded under possible_matches. Docs vault 0xBeEff033…09dd reproduced as steakUSDG; totalAssets not attached as Greenwood TVL. Paymaster/factory addresses unpublished. Token creation tx still unrecovered. UNCX lock tx 0x9a81…4b0a reproduced at 2026-08-21T01:52:01Z (10% ecosystem lock, not the 10 September 2026 40% product lock).
- Rejected this round (ops one-liners; not packed): rallypadfun CA 0x7daf6b4cc3eac752ae9a77967f78b15886aa1c89 eth_getCode 7154 B this round (scout had empty; still rejected); FundedProtocol (thenews.gg); Mosaic already #167; Ravenhood Protocol @RVHProtocol https://ravenhood.xyz runner-up (fxtwitter 200, website https://www.ravenhood.xyz/, no bio CA; https://x.com/RVHProtocol/status/2100626777324269589 $45.7K lifetime revenue / 22.27% supply burned with tweet-text CA 0x96765066f6a040a21eb027167d2315b707c82633; https://x.com/RVHProtocol/status/2100694265030476101 Flock Credit voting; https://x.com/RVHProtocol/status/2100794116409876682 multiple products). Prefer Greenwood for this packet. Gaps stay on Greenwood; Ravenhood is not the primary.
- Surfaces opened: greenwood.fi, docs.greenwood.fi (home, gwood, why-this-chain, earn, security, card, card-terms, membership, portfolio-line, legal), app.greenwood.fi, api.fxtwitter.com profiles/tweets/statuses (GwoodFinance, RVHProtocol, follow-list status ids), CoinGecko coins/greenwood, DexScreener search/token/pair APIs, Llama protocol/greenwood and protocols list, GoPlus token_security/4663, Blockscout api/v2 (403) and HTML address page, RPC https://rpc.mainnet.chain.robinhood.com, GitHub repo search (0 hits).
- Addresses checked on 4663: GWOOD 0x24d8657e10AF588b12de3E102a116f77b9E35ee8 exists_on_4663 true, explorer_source_verified null, 45 B, name Greenwood / GWOOD, owner() reverted. Impl 0x9fe6ad6a2334ee380a4d17c92d81faf5f9924efd 7607 B. Pair 0x72678B2e8dDedad5865272A857733d8dC98Eb771 22142 B. Vault 0xBeEff033F34C046626B8D0A041844C5d1A5409dd steakUSDG. USDG 0x5fC5360D0400a0FD4F2aF552aDd042D716f1D168 Global Dollar (dependency, not a Greenwood own-token row). GREEN 0x24eEF81758c4839F8E5DBc1e63C477a864877777 45 B name Greenwood symbol GREEN. Vest wallet 0xF48aC1bD0D3c22E67d47A4630ee4dC7f9B0701df empty code. Rallypad 0x7daf6b4c…1c89 7154 B. GoPlus creator 0x5330d0a4…0e99 empty code.
- Candidate proposed: greenwood | Greenwood | @GwoodFinance | greenwood.fi (coverage candidate; this file is inventory only).
- Rate limits: collector X /tweets 404; Blockscout API Cloudflare 403; x.com anonymous fetch blocked via jina. Follow-list status-by-id 200. RPC calls spaced to avoid 429. Stop after this packet.
