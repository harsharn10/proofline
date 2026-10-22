---
# Packet v2 (docs/research-system.md §5). Discovery inventory seed.
contract_version: proofline-research-v2
work_id: WORK-20260917-grok-bot-discovery-inventory
producer: grok-bot
role: collector
base_sha: 3d80c393d42f22cf9bb305e502f054bca21c4c78
slug: discovery-inventory
name: Discovery inventory 2026-09-17
packet_tier: seed
as_of: 2026-09-17T13:50:00Z
prior_packet: null
supersedes: null
owned_slugs: [discovery-inventory]
allowed_paths:
  - research/inbox/packets/discovery-inventory/WORK-20260917-grok-bot-discovery-inventory.md

identity:
  canonical_name: Discovery inventory 2026-09-17
  aliases: []
  symbols: []
  entity_kind: unknown
  chain_scope: unknown
  official_domain: "NULL — inventory packet"
  official_handle: "NULL — inventory packet"
  repository: "NULL — inventory packet"
  possible_matches:
    - slug: index
      signals: [other]
      contrary_signals:
        - "Census index is theindex.finance / @TheIndexFi. Mosaic is mosaicetf.com / @MosaicETF. Category cousin (onchain index/basket product), different handle and domain; not a merge."
    - slug: statics-protocol
      signals: [other]
      contrary_signals:
        - "Census statics-protocol is staticsprotocol.com / @StaticsProtocol. Mosaic is mosaicetf.com / @MosaicETF. Category cousin (redeemable basket), not a merge."
    - slug: vimen
      signals: [other]
      contrary_signals:
        - "Census vimen is vimen.org / @vimenprotocol. Mosaic is mosaicetf.com / @MosaicETF. Category cousin (redeemable basket), not a merge."
    - slug: stonks-fun
      signals: [other]
      contrary_signals:
        - "Census stonks-fun is stonks.fun / @stonksdotfun. Mosaic is mosaicetf.com / @MosaicETF. Category cousin (redeemable basket), not a merge."
    - slug: downto
      signals: [other]
      contrary_signals:
        - "Census downto is downto.finance / @downto_finance. Mosaic is mosaicetf.com / @MosaicETF. Category cousin (redeemable basket), not a merge."

classification:
  primary_leaf: tooling/scanner
  secondary_leaves: []
  mechanism_tags: [other]
  ecosystem_role: observe
  lifecycle: unknown
  coverage_recommendation: candidate
  evidence_state: partly-verified
  rationale: "Weekday discovery round 2026-09-17. Suggested lead Mosaic / @MosaicETF / mosaicetf.com is not a census row and is not in open #163 (arcus), #164 (canopy), #165 (twofold), or #166 (sluice). Site and handle name each other; bio CA 0x776650808dda2ae08653dc70cdac45a9ce39e025 was reproduced on chain 4663 (name MOSAIC / MOSAIC, 3248 B). Official site JS names factory 0x747811045609fd0c1b2abc3ae62d714f4c9ba721 (8740 B; basketCount 22). Llama protocol/mosaic is mosaic.ag / @mosaicagg on Movement (CON-1). Coverage recommendation: candidate (inventory only)."

qualifying:
  deployed_on_chain: { status: unknown, claim_ids: [], note: "inventory packet; candidate deployments are on the Mosaic claims, not this inventory identity" }
  native_play:       { status: unknown, claim_ids: [], note: "inventory packet" }
  citable:           { status: unknown, claim_ids: [], note: "inventory packet" }
  research_story:    { status: unknown, claim_ids: [], note: "inventory packet" }

links:
  - { kind: site, url: "https://mosaicetf.com/", authenticity: confirmed }
  - { kind: docs, url: "https://mosaicetf.com/docs.html", authenticity: confirmed }
  - { kind: x, url: "https://x.com/MosaicETF", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/MosaicETF", authenticity: confirmed }
  - { kind: explorer, url: "https://robinhoodchain.blockscout.com/address/0x776650808dda2ae08653dc70cdac45a9ce39e025", authenticity: unconfirmed }
  - { kind: explorer, url: "https://robinhoodchain.blockscout.com/address/0x747811045609fd0c1b2abc3ae62d714f4c9ba721", authenticity: unconfirmed }
  - { kind: dexscreener, url: "https://dexscreener.com/robinhood/0x18654f0ba4ca8773d751b6c5b49ebd14ec3bbc68bf0e5ea20e482c88e352fb8f", authenticity: confirmed }
  - { kind: other, url: "https://api.coingecko.com/api/v3/coins/mosaic-2", authenticity: confirmed }
  - { kind: other, url: "https://api.llama.fi/protocol/mosaic", authenticity: confirmed }

deployments:
  - label: MOSAIC token (RPC name MOSAIC, symbol MOSAIC)
    role: token
    address:
      value: "0x776650808dda2ae08653dc70cdac45a9ce39e025"
      chain: robinhood-chain
      source: bio
      seen: 2026-09-17
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-2, R-4, R-5, R-7]
  - label: Mosaic ETF factory (site JS deployment.factory)
    role: factory
    address:
      value: "0x747811045609fd0c1b2abc3ae62d714f4c9ba721"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-17
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-4, R-11]
  - label: Mosaic legacy factory (site JS deployment.legacy[0])
    role: factory
    address:
      value: "0x4bfc8a0933d1d72822bdd19c1abb47e6a1a3b8a4"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-17
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-4, R-11]
  - label: Mosaic zap helper (site JS deployment.zap)
    role: other
    address:
      value: "0x9c873da971f27f8a2fd59e94086844f31d9e8af7"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-17
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-4, R-11]
  - label: Mosaic mirror/attribution registry (site JS deployment.mirror)
    role: other
    address:
      value: "0x2ba519df59c1bf52845b68a8b38386f874b4e72d"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-17
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-4, R-11]

metrics:
  - { kind: market_cap, value: 12017.71, currency: USD, as_of: 2026-09-17T13:34:40Z, window: point, method: "api.coingecko.com/api/v3/coins/mosaic-2 market_data.market_cap.usd; platforms.robinhood 0x776650808dda2ae08653dc70cdac45a9ce39e025", class: claim, receipt_ids: [R-7] }
  - { kind: volume_24h, value: 2046.21, currency: USD, as_of: 2026-09-17T13:35:12Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x776650808dda2ae08653dc70cdac45a9ce39e025 Uniswap v4 MOSAIC/ETH pair 0x18654f0b…2fb8f volume.h24; pair-level, not summed across thinner MOSAIC/ETH rows", class: claim, receipt_ids: [R-5] }

reproductions:
  - { id: REP-1, method: official-crosslink, chain_id: 4663, checked_at: 2026-09-17T13:36:02Z, receipt_ids: [R-1, R-2, R-5, R-7], result: "mosaicetf.com title MOSAIC — ETFs, rebuilt onchain; @MosaicETF website https://mosaicetf.com/ and bio publishes CA 0x776650808dda2ae08653dc70cdac45a9ce39e025. CoinGecko coins/mosaic-2 homepage https://mosaicetf.com/ twitter_screen_name MosaicETF platforms.robinhood the same address. DexScreener info.websites https://mosaicetf.com/ info.socials https://x.com/MosaicETF and https://t.me/MosaicETF. Site JS also contains t.me/MosaicETF." }
  - { id: REP-2, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-17T13:37:40Z, receipt_ids: [R-4, R-11, R-16], result: "eth_chainId 0x1237 (4663); eth_blockNumber 0x3e6061b (65406491). Token 0x776650808dda2ae08653dc70cdac45a9ce39e025 code 3248 B sha256 aafc44b4056384626c8ae1e0fff9268fbc384c1c598386e8adb677d982deaf74 name() MOSAIC symbol() MOSAIC decimals() 18 totalSupply() 1e27 owner() reverted. Factory 0x747811045609fd0c1b2abc3ae62d714f4c9ba721 8740 B basketCount() 22 owner() reverted. Legacy factory 0x4bfc8a0933d1d72822bdd19c1abb47e6a1a3b8a4 8197 B basketCount() 1. Zap 0x9c873da971f27f8a2fd59e94086844f31d9e8af7 3134 B router() 0xcaf681a66d020601342297493863e78c959e5cb2. Mirror 0x2ba519df59c1bf52845b68a8b38386f874b4e72d 971 B. Sample baskets factory[0] 0xe2369e2ed5fd55f3f2fb94c0dc165198099ea071 name TRIPLE T 4892 B; factory[1] 0xb02660fff18ecba77bd9c2bc97d42a499a943399 name LONGECHO 4892 B; legacy[0] 0x5475f1c64d2ed1a4970614590b41a282e34345aa name MYETF 4646 B. Bricks 0x7b7faa885c237faba733e7006e80149ba9224643 also 3248 B but sha256 b09ec61e97b4b012ef97ffb75ced60998e25a6f9b8b9e74e25dfd3d7412f6948 (not identical). SCL 0xbe92b334e045bbfd292a28e54f8c75af2fc07bbe 6054 B name Scalar symbol SCL. Factory JS deployedAt block 46533532 timestamp 2026-08-26T10:58:20Z via eth_getBlockByNumber; creation tx hash not recovered." }
  - { id: REP-3, method: api, chain_id: 4663, checked_at: 2026-09-17T13:36:02Z, receipt_ids: [R-5, R-6, R-7], result: "CoinGecko id mosaic-2 platforms.robinhood 0x776650808dda2ae08653dc70cdac45a9ce39e025 preview_listing false market_cap.usd 12017.71 total_volume.usd 2347.29 last_updated 2026-09-17T13:34:40Z. DexScreener chainId robinhood Uniswap v4 MOSAIC/ETH volume.h24 2046.21 liquidity.usd 10073.31 marketCap 12058 pairCreatedAt 2026-08-25T20:07:07Z. Llama GET /protocol/mosaic returned Mosaic url https://mosaic.ag twitter mosaicagg currentChainTvls.Movement 3579 — different product." }
  - { id: REP-4, method: document-scope, chain_id: 4663, checked_at: 2026-09-17T13:36:32Z, receipt_ids: [R-1, R-8, R-11, R-12], result: "mosaicetf.com meta: permissionless onchain ETF platform; combine crypto and tokenized assets into a single tradable ETF. docs.html meta: An ETF is a token that owns other tokens. docs.js: The contracts are not audited. styles JS robinhood.deployment publishes factory/legacy/zap/mirror addresses used in REP-2. HTML this round had no 0x40-hex address; addresses were in the JS bundle. Uniswap v3/v4 pool-manager/router addresses in the same config are chain infra, not listed as Mosaic deployments. No Pons launcher name was reproduced." }
  - { id: REP-5, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-17T13:35:14Z, receipt_ids: [R-13], result: "GET robinhoodchain.blockscout.com/api/v2/addresses/0x776650808dda2ae08653dc70cdac45a9ce39e025 returned HTTP 403 Cloudflare challenge HTML (Just a moment...). Creation transaction hash, verified-source name, creator, and holders_count were not recovered. No invented creation tx." }

claims:
  - { id: CLM-1, field: candidate, value: "mosaic | Mosaic | @MosaicETF | mosaicetf.com", class: claim, observed_at: 2026-09-17T13:36:02Z, receipt_ids: [R-1, R-2, R-3], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "Official site mosaicetf.com and handle @MosaicETF name each other; the handle bio publishes the MOSAIC address", class: verified, observed_at: 2026-09-17T13:36:02Z, receipt_ids: [R-1, R-2], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@MosaicETF", class: claim, observed_at: 2026-09-17T13:35:12Z, receipt_ids: [R-2, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-4, field: identity.symbol, value: "MOSAIC", class: verified, observed_at: 2026-09-17T13:34:59Z, receipt_ids: [R-4, R-5, R-7], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-5, field: identity.name, value: "RPC name() MOSAIC; CoinGecko coins/mosaic-2 name MOSAIC; site title MOSAIC; handle name Mosaic", class: verified, observed_at: 2026-09-17T13:36:02Z, receipt_ids: [R-1, R-2, R-4, R-7], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: identity.name, value: "Llama api.llama.fi/protocol/mosaic name Mosaic at mosaic.ag twitter mosaicagg, Movement DEX aggregator, not mosaicetf.com", class: verified, observed_at: 2026-09-17T13:35:12Z, receipt_ids: [R-6], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-7, field: product.mechanism, value: "Site: permissionless onchain ETF platform; anyone can combine crypto and tokenized assets into a single tradable ETF. Docs: an ETF is a token that owns other tokens; a factory deploys isolated MosaicBasket ERC-20 vaults. @MosaicETF 2026-09-05: combine tokenized stocks and memes; mint and redeem at any block.", class: claim, observed_at: 2026-09-17T13:36:32Z, receipt_ids: [R-1, R-8, R-9, R-12], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-8, field: deployment.address, value: "0x776650808dda2ae08653dc70cdac45a9ce39e025", class: verified, observed_at: 2026-09-17T13:34:59Z, receipt_ids: [R-2, R-4, R-5, R-7], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-9, field: deployment.address, value: "0x747811045609fd0c1b2abc3ae62d714f4c9ba721", class: verified, observed_at: 2026-09-17T13:37:40Z, receipt_ids: [R-4, R-11], reproduction_ids: [REP-2, REP-4], supersedes: null }
  - { id: CLM-10, field: control.owner, value: "owner() reverted on MOSAIC token, factory, legacy factory, zap, and mirror. No owner() value this round. Creation tx unrecovered (Blockscout 403).", class: verified, observed_at: 2026-09-17T13:37:40Z, receipt_ids: [R-4, R-13], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-11, field: lifecycle, value: "Token and factory bytecode are live on chain 4663. Factory basketCount 22. Site JS factory deployedAt block 46533532 (timestamp 2026-08-26T10:58:20Z). Creation transaction hashes were not recovered.", class: claim, observed_at: 2026-09-17T13:39:18Z, receipt_ids: [R-4, R-11, R-13], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: "CoinGecko mosaic-2 market_cap.usd 12017.71 at 2026-09-17T13:34:40Z for platforms.robinhood 0x776650808dda2ae08653dc70cdac45a9ce39e025. Llama protocol/mosaic Movement TVL 3579 is a different product and was not attached.", class: claim, observed_at: 2026-09-17T13:36:02Z, receipt_ids: [R-6, R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-13, field: activity.status, value: "DexScreener Uniswap v4 MOSAIC/ETH pair volume.h24 2046.21 liquidity.usd 10073.31 marketCap 12058; thinner MOSAIC/ETH rows were not summed", class: claim, observed_at: 2026-09-17T13:35:12Z, receipt_ids: [R-5], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-14, field: activity.status, value: "Factory basketCount() 22; legacy factory basketCount() 1. Sample names TRIPLE T, LONGECHO, MYETF. Full BasketCreated log was not enumerated (Blockscout 403).", class: verified, observed_at: 2026-09-17T13:37:40Z, receipt_ids: [R-4], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-15, field: communications.status, value: "api.fxtwitter.com/MosaicETF profile 200; /tweets HTTP 404. Status endpoints recovered 2096211464260345936 (2026-09-05) and 2096892469027733856 (2026-09-07). Icarus reported a reply naming only CA 0x776650808DdA2Ae08653dc70cDAc45a9CE39e025; that reply URL was not copied this round.", class: claim, observed_at: 2026-09-17T13:35:12Z, receipt_ids: [R-2, R-9, R-10, R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: communications.status, value: "Follow-list dated posts recovered via fxtwitter status URLs for census/KOL handles (not Mosaic candidate events; no separate update packets this round). @ArcLiquidity / @Floor_fi: no material posts in ~7 days per assignment scout; this collector did not open a signed-in X session. @0xSammy 2026-09-17 thread: /tweets 404, no status id copied.", class: claim, observed_at: 2026-09-17T13:35:45Z, receipt_ids: [R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: security.audit, value: "docs.js states The contracts are not audited. No audit report URL was located on mosaicetf.com HTML, docs.html, or CoinGecko links this round.", class: claim, observed_at: 2026-09-17T13:36:32Z, receipt_ids: [R-1, R-8, R-12, R-7], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-18, field: relationship, value: "Keep distinct from census index, statics-protocol, vimen, stonks-fun, and downto. Those rows share a basket/index product family, not mosaicetf.com / @MosaicETF / the MOSAIC token address.", class: claim, observed_at: 2026-09-17T13:34:58Z, receipt_ids: [R-1, R-2, R-15], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-19, field: relationship, value: "Factory baskets such as TRIPLE T / LONGECHO / MYETF are separate ERC-20s created through the factory. They are not Mosaic's own token and are not census merges. No Pons launcher name was reproduced; no pons merge.", class: verified, observed_at: 2026-09-17T13:37:40Z, receipt_ids: [R-4, R-11], reproduction_ids: [REP-2, REP-4], supersedes: null }
  - { id: CLM-20, field: other, value: "This packet is filed on grok-bot/20260917/WORK-20260917-grok-bot-discovery-inventory. Prior open discovery PRs: #166 sluice, #165 twofold, #164 canopy, #163 arcus. #92 site trenches stream, no packet files. Not duplicated.", class: claim, observed_at: 2026-09-17T13:34:58Z, receipt_ids: [R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: other, value: "Rejected this round (not packed as candidates): scalarliquidity / SCL 0xbe92b334e045bbfd292a28e54f8c75af2fc07bbe code 6054 B name Scalar (runner-up); GwoodFinance (no bio CA); rallypadfun; FundedProtocol (thenews.gg); brickswalltech / Bricks 0x7b7faa885c237faba733e7006e80149ba9224643 code 3248 B; v4dotfun (Canopy-powered, already #164).", class: claim, observed_at: 2026-09-17T13:37:40Z, receipt_ids: [R-4, R-16], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-22, field: other, value: "MOSAIC token bytecode is 3248 B, the same size as Bricks 0x7b7faa885c237faba733e7006e80149ba9224643, with the same 32-byte dispatcher prefix, but sha256 hashes differ (aafc44b4… vs b09ec61e…). Shared-template size risk, not identical bytecode and not a census merge.", class: verified, observed_at: 2026-09-17T13:36:02Z, receipt_ids: [R-4, R-16], reproduction_ids: [REP-2], supersedes: null }

conflicts:
  - id: CON-1
    field: identity.name
    claim_ids: [CLM-5, CLM-6]
    material_effect: "Llama protocol/mosaic is Mosaic at mosaic.ag / @mosaicagg on Movement. Candidate Mosaic is mosaicetf.com / @MosaicETF on chain 4663. Record the name collision; do not import Movement TVL."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: company
    title: "MOSAIC post: tokenized stocks and memes in one onchain ETF"
    summary: "Handle @MosaicETF posted that MOSAIC lets anyone combine tokenized stocks and memes into a single onchain ETF, with no issuer, no approval, and no fixed hours, and that mint and redeem work at any block, live on Robinhood Chain."
    account: "@MosaicETF"
    occurred_at: 2026-09-05T12:18:53Z
    observed_at: 2026-09-17T13:35:12Z
    affected_fields: [product.mechanism, lifecycle]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-9]
    tag: other
  - id: EVT-2
    type: company
    title: "MOSAIC post: traditional ETF versus anyone, one transaction, gas only"
    summary: "Handle @MosaicETF posted a Traditional ETF versus MOSAIC comparison: registered issuers, months to launch, and ongoing legal and custody fees, versus anyone, one transaction, gas only, and wrote that the word authorised was removed."
    account: "@MosaicETF"
    occurred_at: 2026-09-07T09:24:57Z
    observed_at: 2026-09-17T13:35:12Z
    affected_fields: [product.mechanism]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-10]
    tag: other

receipts:
  - { id: R-1, publisher: Mosaic, title: "mosaicetf.com", url: "https://mosaicetf.com/", published_at: null, accessed_at: 2026-09-17T13:35:12Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-5, CLM-7, CLM-17, CLM-18], excerpt: "MOSAIC — ETFs, rebuilt onchain. Meta description: A permissionless onchain ETF platform where anyone can combine crypto and tokenized assets into a single tradable ETF. og:description: Create. Invest. Trade. Anyone can build an ETF. Anyone can buy it. Everything is onchain. HTML this round had no 0x40-hex address." }
  - { id: R-2, publisher: FixTweet, title: "api.fxtwitter.com/MosaicETF", url: "https://api.fxtwitter.com/MosaicETF", published_at: null, accessed_at: 2026-09-17T13:35:12Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-8, CLM-15], excerpt: "code 200. screen_name MosaicETF name Mosaic id 2092307566650920960 followers 790 tweets 58 joined Tue Aug 25 17:46:59 +0000 2026. description ETFs rebuilt onchain. 0x776650808dda2ae08653dc70cdac45a9ce39e025. website https://mosaicetf.com/." }
  - { id: R-3, publisher: X, title: "x.com/MosaicETF", url: "https://x.com/MosaicETF", published_at: null, accessed_at: 2026-09-17T13:35:12Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-1, CLM-3], excerpt: "Profile URL for handle @MosaicETF. Profile fields were copied from api.fxtwitter.com/MosaicETF. Status bodies used in EVT-1 and EVT-2 were copied from fxtwitter status endpoints for the signed-in x.com status URLs." }
  - { id: R-4, publisher: Robinhood Chain RPC, title: "eth_getCode / eth_call chain 4663", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-17T13:37:40Z, kind: other, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-8, CLM-9, CLM-10, CLM-11, CLM-14, CLM-19, CLM-21, CLM-22], excerpt: "eth_chainId 0x1237. MOSAIC 0x77665080…e025 code 3248 B name MOSAIC symbol MOSAIC decimals 18 totalSupply 1e27 owner() reverted. Factory 0x74781104…ba721 8740 B basketCount 22. Legacy 8197 B count 1. Zap 3134 B. Mirror 971 B. Bricks 3248 B different sha256. SCL 6054 B Scalar/SCL." }
  - { id: R-5, publisher: DexScreener, title: "MOSAIC token pairs", url: "https://api.dexscreener.com/latest/dex/tokens/0x776650808dda2ae08653dc70cdac45a9ce39e025", published_at: null, accessed_at: 2026-09-17T13:35:12Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-4, CLM-8, CLM-13], excerpt: "chainId robinhood dexId uniswap labels v4 pair 0x18654f0ba4ca8773d751b6c5b49ebd14ec3bbc68bf0e5ea20e482c88e352fb8f MOSAIC/ETH liquidity.usd 10073.31 volume.h24 2046.21 marketCap 12058 pairCreatedAt 2026-08-25T20:07:07Z websites https://mosaicetf.com/ socials https://x.com/MosaicETF https://t.me/MosaicETF. Thinner MOSAIC/ETH rows not summed." }
  - { id: R-6, publisher: DefiLlama, title: "protocol/mosaic", url: "https://api.llama.fi/protocol/mosaic", published_at: null, accessed_at: 2026-09-17T13:35:12Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-12], excerpt: "id parent#mosaic name Mosaic url https://mosaic.ag twitter mosaicagg. Description: DEX aggregator and AMM-based DEX built on Movement. currentChainTvls.Movement 3579. address null. Not mosaicetf.com and not chain 4663." }
  - { id: R-7, publisher: CoinGecko, title: "coins/mosaic-2", url: "https://api.coingecko.com/api/v3/coins/mosaic-2", published_at: null, accessed_at: 2026-09-17T13:36:02Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-8, CLM-12, CLM-17], excerpt: "id mosaic-2 name MOSAIC symbol mosaic platforms.robinhood 0x776650808dda2ae08653dc70cdac45a9ce39e025 twitter_screen_name MosaicETF homepage https://mosaicetf.com/ preview_listing false market_data.market_cap.usd 12017.71 total_volume.usd 2347.29 last_updated 2026-09-17T13:34:40Z. GET /coins/mosaic returned coin not found." }
  - { id: R-8, publisher: Mosaic, title: "mosaicetf.com/docs.html", url: "https://mosaicetf.com/docs.html", published_at: null, accessed_at: 2026-09-17T13:35:12Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-7, CLM-17], excerpt: "title MOSAIC — Protocol documentation. Meta description: MOSAIC protocol documentation — what it is, how the in-kind vault works, what ships in the MVP, and the full scope. og:description: An ETF is a token that owns other tokens. Here is exactly how MOSAIC makes that work onchain." }
  - { id: R-9, publisher: Mosaic, title: "x.com/MosaicETF/status/2096211464260345936", url: "https://x.com/MosaicETF/status/2096211464260345936", published_at: 2026-09-05T12:18:53Z, accessed_at: 2026-09-17T13:35:12Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-7, CLM-15, EVT-1], excerpt: "created_at Sat Sep 05 12:18:53 +0000 2026. text: This is the thesis we’re building on. MOSAIC lets anyone combine tokenized stocks and memes into a single onchain ETF. No issuer, no approval, no fixed hours. Mint and redeem at any block. Live on Robinhood Chain. Copied via api.fxtwitter.com/MosaicETF/status/2096211464260345936 (200)." }
  - { id: R-10, publisher: Mosaic, title: "x.com/MosaicETF/status/2096892469027733856", url: "https://x.com/MosaicETF/status/2096892469027733856", published_at: 2026-09-07T09:24:57Z, accessed_at: 2026-09-17T13:35:12Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-15, EVT-2], excerpt: "created_at Mon Sep 07 09:24:57 +0000 2026. text: Traditional ETF: registered issuers, months to launch, legal and custody fees forever. MOSAIC: anyone, one transaction, gas only. Same mechanism ETFs have used since 1993. We just removed the word authorised. Copied via api.fxtwitter.com/MosaicETF/status/2096892469027733856 (200)." }
  - { id: R-11, publisher: Mosaic, title: "mosaicetf.com factory config JS", url: "https://mosaicetf.com/assets/styles-BNnVkKxv.js", published_at: null, accessed_at: 2026-09-17T13:36:32Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-11, CLM-19], excerpt: "robinhood chainId 4663 deployment.factory.address 0x747811045609FD0c1B2ABC3AE62D714F4C9ba721 deployedAt 46533532 creatorFeeBps 30; legacy 0x4BFc8a0933D1D72822bDd19C1ABb47E6a1a3B8A4 deployedAt 46063964; zap 0x9c873Da971F27F8a2fd59E94086844f31d9e8aF7; mirror 0x2ba519dF59c1Bf52845b68a8b38386f874B4E72D. Token 0x776650808DdA2Ae08653dc70cDAc45a9CE39e025. t.me/MosaicETF." }
  - { id: R-12, publisher: Mosaic, title: "mosaicetf.com docs JS", url: "https://mosaicetf.com/assets/docs-E71zslkA.js", published_at: null, accessed_at: 2026-09-17T13:35:45Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-7, CLM-17], excerpt: "Docs bundle states: The contracts are not audited. Being small and admin-free removes whole categories of risk; it is not the same as having been audited, and this document does not pretend otherwise. The factory holds no funds, so deploying it risks nothing." }
  - { id: R-13, publisher: Blockscout, title: "api/v2 MOSAIC address (Cloudflare 403)", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x776650808dda2ae08653dc70cdac45a9ce39e025", published_at: null, accessed_at: 2026-09-17T13:35:14Z, kind: explorer, authority: onchain, authenticity: unconfirmed, supports: [CLM-10, CLM-11, CLM-14], excerpt: "HTTP 403. Cloudflare managed challenge HTML title Just a moment…. No JSON address record. Creation transaction hash, verified source name, creator, and holders_count not recovered. No invented creation tx." }
  - { id: R-14, publisher: FixTweet, title: "api.fxtwitter.com/MosaicETF/tweets", url: "https://api.fxtwitter.com/MosaicETF/tweets", published_at: null, accessed_at: 2026-09-17T13:35:12Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-15], excerpt: "HTTP 404 JSON {\"code\":404,\"message\":\"Not found\"}. Same 404 on /tweets for ArrowFinanceio, uponrh, and 0xSammy. Status-by-id endpoints returned 200 for the Mosaic and follow-list URLs that were tried." }
  - { id: R-15, publisher: GitHub, title: "harsharn10/proofline open pulls", url: "https://github.com/harsharn10/proofline/pulls", published_at: null, accessed_at: 2026-09-17T13:34:58Z, kind: other, authority: independent, authenticity: confirmed, supports: [CLM-18, CLM-20], excerpt: "Open PRs including drafts: #166 WORK-20260916-grok-bot-discovery-inventory (sluice); #165 WORK-20260915 (twofold); #164 WORK-20260914 (canopy); #163 WORK-20260911 (arcus); #92 site trenches stream, no packet files. Mosaic / mosaicetf.com / 0x77665080…e025 not present in census.yaml (182 slugs)." }
  - { id: R-16, publisher: Robinhood Chain RPC, title: "Bricks and SCL bytecode comparison", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-17T13:36:02Z, kind: other, authority: onchain, authenticity: confirmed, supports: [CLM-21, CLM-22], excerpt: "Bricks 0x7b7faa885c237faba733e7006e80149ba9224643 code 3248 B name Bricks symbol BRICKS sha256 b09ec61e97b4b012ef97ffb75ced60998e25a6f9b8b9e74e25dfd3d7412f6948. MOSAIC 3248 B sha256 aafc44b4056384626c8ae1e0fff9268fbc384c1c598386e8adb677d982deaf74. identical false. SCL 0xBe92b334E045Bbfd292a28e54f8C75aF2FC07bBE 6054 B name Scalar symbol SCL." }
  - { id: R-17, publisher: FixTweet, title: "follow-list status sample @ArrowFinanceio/2100281397076275491", url: "https://x.com/ArrowFinanceio/status/2100281397076275491", published_at: 2026-09-16T17:51:21Z, accessed_at: 2026-09-17T13:35:45Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-16], excerpt: "Follow-list statuses recovered (not Mosaic events): Arrow 2100281397076275491 UP emissions to aUSD/USDG; Arrow 2099190771769315389 229% APR / ~100k TVL claim; uponrh 2100536155527655670 Epoch 9 summary; uponrh 2100293116364243285 $343,626 to UP lockers; deltaliquidity 2100286390693216286 Arc live on Delta; ponsdotfamily 2100012509960798686 $125M creator rewards claim; Hookrfun 2098782352851820794 Arb recaptures / do not use contracts until announced." }

gaps:
  - { area: deployment, priority: P0, question: "What is the MOSAIC token and factory creation transaction hash on chain 4663?", checked: "Blockscout api/v2 HTTP 403 Cloudflare 2026-09-17; RPC eth_getCode nonempty; site JS factory deployedAt block 46533532 timestamped via eth_getBlockByNumber", next: "retry Blockscout or another explorer for creation_transaction_hash; do not invent a hash" }
  - { area: product, priority: P0, question: "What are the 22 current factory basket addresses, and which of them are independent launched ETFs versus Mosaic-operated examples?", checked: "factory basketCount 22; sampled baskets(0)=TRIPLE T, baskets(1)=LONGECHO; legacy MYETF; Blockscout logs unrecovered", next: "eth_call baskets(i) for i in 0..21 or read BasketCreated logs when explorer works; do not treat user baskets as Mosaic's own token" }
  - { area: identity, priority: P0, question: "Does a later seed keep mosaicetf.com distinct from Llama mosaic.ag / @mosaicagg, and from census index/statics-protocol/vimen/stonks-fun/downto?", checked: "CON-1 recorded; possible_matches cousins recorded; census 182 slugs had no mosaic/MosaicETF/mosaicetf", next: "controller disposition before compiling a mosaic census row; never attach Movement TVL" }
  - { area: control, priority: P1, question: "Who deployed the factory and token, and can anyone change fees or pause baskets?", checked: "owner() reverted on token, factory, legacy, zap, mirror; docs JS says admin-free / factory holds no funds; creation tx unknown", next: "read verified source or privileged getters when explorer works; do not infer control from the MOSAIC ERC-20" }
  - { area: security, priority: P1, question: "Is there an audit whose scope matches the factory or MosaicBasket bytecode?", checked: "docs.js The contracts are not audited; mosaicetf.com, docs.html, CoinGecko links, 2026-09-17; no report URL copied", next: "ask in public and record the answer as a claim; match bytecode if a report appears" }
  - { area: team, priority: P1, question: "Who controls mosaicetf.com / @MosaicETF, and is there a repository?", checked: "site and handle cross-link; CoinGecko twitter MosaicETF; site JS github count 0; no repository URL located this round", next: "do not merge the deployer with the site or handle without a signed or on-chain link" }
  - { area: communications, priority: P1, question: "What is the status URL of the reply that named only CA 0x776650808DdA2Ae08653dc70cDAc45a9CE39e025?", checked: "fxtwitter /tweets 404; two Mosaic statuses recovered; Icarus noted a CA-only reply without a copied status id", next: "retry Latest on @MosaicETF; copy status id if recovered; do not invent the reply" }
  - { area: economics, priority: P2, question: "Is there a Llama protocol row for mosaicetf.com distinct from mosaic.ag Movement TVL?", checked: "Llama protocol/mosaic is mosaic.ag / @mosaicagg Movement 3579; CoinGecko mosaic-2 market cap 12017.71 is the token", next: "do not treat Movement TVL or token FDV as factory TVL; re-query Llama if a mosaicetf slug appears" }
  - { area: activity, priority: P2, question: "What 24h volume is the deepest MOSAIC/ETH v4 pair versus thin extra MOSAIC/ETH rows, and how many factory baskets trade?", checked: "DexScreener deepest MOSAIC/ETH h24 2046.21; other rows not summed; factory basketCount 22", next: "keep pair-level DexScreener; do not average with CoinGecko total_volume; enumerate basket pairs later" }

---

# Discovery inventory 2026-09-17 — research packet

## What it is

Robinhood Chain names that are not yet census rows. This round's protocol lead is Mosaic: mosaicetf.com describes a permissionless onchain ETF platform where anyone can combine crypto and tokenized assets into a single tradable ETF, and docs copy says an ETF is a token that owns other tokens. Official site mosaicetf.com and handle @MosaicETF name each other; the handle bio publishes MOSAIC `0x776650808dda2ae08653dc70cdac45a9ce39e025`. RPC reproduced that ERC-20 on chain 4663 (name MOSAIC, symbol MOSAIC, 3248 B). Official site JS names factory `0x747811045609FD0c1B2ABC3AE62D714F4C9ba721` (8740 B; basketCount 22). Distinct from Llama mosaic.ag. Open #166 sluice, #165 twofold, #164 canopy, #163 arcus.

Themes: onchain-etf, rwa, redeemable-basket, uniswap-v4

TL;DR: Mosaic is a permissionless onchain ETF factory on Robinhood Chain; MOSAIC exists at 0x77665080…e025 and has no census row.

## Why it matters

- Site and docs describe a permissionless factory that deploys ETF tokens holding other ERC-20s; bio MOSAIC and factory code reproduced on 4663 [claim R-1 R-4 R-8 R-11]
- DexScreener Uniswap v4 MOSAIC/ETH liquidity about $10,073 and 24h volume about $2,046 at 2026-09-17T13:35:12Z; factory basketCount 22 [claim R-4 R-5]
- Site JS publishes factory, zap and mirror; 22 baskets already on the factory; Blockscout creation txs unrecovered this round [claim R-4 R-11 R-13]

## What could go wrong

- Llama protocol/mosaic is mosaic.ag / @mosaicagg on Movement; do not attach that TVL to mosaicetf.com [claim R-6]
- MOSAIC token is 3248 B, same size as Bricks 0x7b7faa88…4643, different sha256; owner() reverted on token and factory [verified R-4 R-16]
- Factory, zap, mirror and token owner() reverted; docs JS says the contracts are not audited; Blockscout creation tx unknown [claim R-4 R-12 R-13]

## Operations log

- Main SHA read: 3d80c393d42f22cf9bb305e502f054bca21c4c78 (origin/main). AGENTS.md, docs/ingestion.md, docs/integrations/grok-bot.md, docs/research-system.md §§4–7 and §10, docs/templates/research-packet-v2.md, docs/admission-policy.md, skills/research-seed/SKILL.md, content/census.yaml (182 slugs), content/accounts.yaml (@MosaicETF watch/project, no census slug).
- Open PRs including drafts: this packet is the 2026-09-17 inventory. #166 sluice, #165 twofold, #164 canopy, #163 arcus not duplicated. #92 site trenches stream; no packet files.
- candidates listed: 1
- Follow-list: api.fxtwitter.com /tweets 404 for MosaicETF, ArrowFinanceio, uponrh, 0xSammy. Status-by-id 200 for Mosaic 2096211464260345936 and 2096892469027733856, and for census/KOL posts (not packed as this candidate's events; APR/TVL figures not reproduced here): @ArrowFinanceio 2026-09-16 https://x.com/ArrowFinanceio/status/2100281397076275491 UP emissions to aUSD/USDG; @ArrowFinanceio 2026-09-13 https://x.com/ArrowFinanceio/status/2099190771769315389 229% APR / ~100k TVL claim and staking.arrowfinance.io/stake; @uponrh 2026-09-17 https://x.com/uponrh/status/2100536155527655670 Epoch 9 summary image; @uponrh 2026-09-16 https://x.com/uponrh/status/2100293116364243285 $343,626 to UP lockers; @deltaliquidity 2026-09-16 https://x.com/deltaliquidity/status/2100286390693216286 Arc live on Delta and https://arc.deltaliquidity.app/pools; @ponsdotfamily 2026-09-15 https://x.com/ponsdotfamily/status/2100012509960798686 $125M creator rewards claim; @Hookrfun 2026-09-12 https://x.com/Hookrfun/status/2098782352851820794 Arb recaptures / do not use contracts until announced. @0xSammy 2026-09-17 thread naming orbiodotso, BundleCatAI, LONG/$AI NVDA vault claim: /tweets 404, no status id copied. @ArcLiquidity / @Floor_fi: no material posts in ~7 days per assignment scout; this collector did not open a signed-in X session. Those posts belong on existing census slugs, not an inventory event or a new update packet this round.
- Icarus evidence reproduced this round: @MosaicETF bio CA 0x776650808dda2ae08653dc70cdac45a9ce39e025 + mosaicetf.com; site/docs meta; two X posts; RPC MOSAIC 3248 B name/symbol MOSAIC decimals 18 totalSupply 1e27; DexScreener Uniswap v4 MOSAIC/ETH (numbers updated at access time). Icarus Blockscout Cloudflare block reproduced (403). Icarus CA-only reply not independently copied (no status id).
- Gap hunt: Mosaic / @MosaicETF / mosaicetf.com did not collapse to a census row or to #163/#164/#165/#166. Llama protocol/mosaic is mosaic.ag / @mosaicagg (CON-1). Category cousins index, statics-protocol, vimen, stonks-fun, downto recorded under possible_matches and not merged. No Pons launcher name; no pons merge. Factory/zap/mirror addresses recovered from official site JS and reproduced on 4663; token and factory creation txs still unrecovered. Shared 3248-byte size versus Bricks flagged; bytecode hashes differ.
- Rejected this round (ops one-liners; not packed): scalarliquidity runner-up, SCL 0xBe92b334E045Bbfd292a28e54f8C75aF2FC07bBE code 6054 B name Scalar; GwoodFinance (no bio CA); rallypadfun; FundedProtocol (thenews.gg); brickswalltech Bricks 0x7b7faa885c237faba733e7006e80149ba9224643 code 3248 B name Bricks (shared-template size risk); v4dotfun (Canopy-powered → #164).
- Surfaces opened: mosaicetf.com, mosaicetf.com/docs.html, mosaicetf.com/assets/styles-BNnVkKxv.js, mosaicetf.com/assets/docs-E71zslkA.js, api.fxtwitter.com profiles/tweets/statuses, CoinGecko coins/mosaic (not found) and coins/mosaic-2, DexScreener token API, Llama protocol/mosaic, Blockscout api/v2 (403), RPC https://rpc.mainnet.chain.robinhood.com.
- Addresses checked on 4663: MOSAIC 0x776650808dda2ae08653dc70cdac45a9ce39e025 exists_on_4663 true, explorer_source_verified null, 3248 B, name MOSAIC / MOSAIC, owner() reverted. Factory 0x747811045609fd0c1b2abc3ae62d714f4c9ba721 8740 B basketCount 22. Legacy factory 0x4bfc8a0933d1d72822bdd19c1abb47e6a1a3b8a4 8197 B count 1. Zap 0x9c873da971f27f8a2fd59e94086844f31d9e8af7 3134 B router() 0xcaf681a66d020601342297493863e78c959e5cb2 (Uniswap router in site config; not listed as a Mosaic deployment). Mirror 0x2ba519df59c1bf52845b68a8b38386f874b4e72d 971 B. Sample baskets 0xe2369e2e…a071 TRIPLE T, 0xb02660ff…3399 LONGECHO, 0x5475f1c6…45aa MYETF (not Mosaic own-token deployments). Bricks 0x7b7faa88…4643 3248 B. SCL 0xBe92b334…07bBE 6054 B. Wrapped native / v3 factory in site JS treated as chain infra, not Mosaic deployments.
- Candidate proposed: mosaic | Mosaic | @MosaicETF | mosaicetf.com (coverage candidate; this file is inventory only).
- Rate limits: collector X /tweets 404; Blockscout API Cloudflare 403. Stop after this packet.
