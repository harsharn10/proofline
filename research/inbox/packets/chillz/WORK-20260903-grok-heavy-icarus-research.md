---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: chillz
name: CHILLZ
packet_tier: seed
as_of: 2026-09-03T04:55:00Z
prior_packet: null
supersedes: null
owned_slugs: [chillz]
allowed_paths:
  - research/inbox/packets/chillz/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: CHILLZ
  aliases: [Chilleez, $CHILLZ]
  symbols: [CHILLZ]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: https://www.chilleez.net/
  official_handle: "@ChilleezOnRh"
  repository: "NULL — no GitHub org or repository URL on the site CONFIG, DexScreener, Blockscout, or X this pass"
  possible_matches:
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "CHILLZ is a FlapTaxTokenV3 clone paired to NFLX via Flap Factory 0x2660…Eb09"
        - "No shared domain, handle, or reproduced address"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "CHILLZ is cloned by Flap Factory 0x2660…Eb09 (Blockscout tag Flap Factory), not LongLauncher"
        - "No shared domain, handle, or reproduced address"
    - slug: quotrons
      signals: [other]
      contrary_signals:
        - "Census Quotrons uses NFLX as one of ten reward conversion routes off a QUOTRON/WETH pool"
        - "CHILLZ trades in a Uniswap v2 CHILLZ/NFLX book; NFLX is the pair quote, not a claim-route"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [stock-paired, rwa, amm, launchpad, bonding-curve, fee-routing]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x5B6E…7777 is an EIP-1167 FlapTaxTokenV3 clone with non-empty code on 4663; quoteToken() and mainPool() return NFLX 0xE044…91E8 and Uniswap v2 0x31a03…7ba9. GET /rhj/assets lists that NFLX address as Netflix • Robinhood Token on chain 4663 (rail, not this subject). Site chilleez.net and @ChilleezOnRh bidirectionally carry the CA. Distinct from CHILL/NFLX 0x57ff…1e18. [R-1] [R-5] [R-7] [R-8] [R-12] [R-16]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-8], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: site, url: "https://www.chilleez.net/", authenticity: confirmed }
  - { kind: x, url: "https://x.com/ChilleezOnRh", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/ChilleezCommunity", authenticity: confirmed }
  - { kind: app, url: "https://app.uniswap.org/swap/?chain=robinhood&outputCurrency=0x5b6ef408c4ebb166788c0ca4cb644f12ac757777", authenticity: confirmed }

deployments:
  - label: CHILLZ token (EIP-1167 FlapTaxTokenV3 clone)
    role: token
    address:
      value: "0x5B6Ef408c4eBb166788C0cA4cB644f12AC757777"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:46:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-1, R-5, R-18]
  - label: FlapTaxTokenV3 implementation
    role: implementation
    address:
      value: "0x7777C8743C88B3aff3cf262135beF2c8b2e83333"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:48:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-5]
  - label: Flap Factory (token creator)
    role: factory
    address:
      value: "0x26605f322f7fF986f381bB9A6e3f5DAb0bEaEb09"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:48:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: null
    receipt_ids: [R-3, R-4, R-5]
  - label: NFLX Stock Token (pair quote / rail)
    role: token
    address:
      value: "0xE0444EF8BF4eD74f74FD73686e2ddF4C1c5591E8"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:48:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-6, R-12, R-16]
  - label: Uniswap v2 CHILLZ/NFLX mainPool
    role: other
    address:
      value: "0x31a03eB2751456eE01B09546Fbb5be2E3b9e7ba9"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:48:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-7, R-8, R-17]

metrics:
  - { kind: volume_24h, value: 290713.69, currency: USD, as_of: 2026-09-03T04:47:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x5B6Ef408c4eBb166788C0cA4cB644f12AC757777 volume.h24 (CHILLZ/NFLX Uniswap v2 0x31a03…7ba9, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 73668.06, currency: USD, as_of: 2026-09-03T04:47:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x5B6Ef408c4eBb166788C0cA4cB644f12AC757777 liquidity.usd (CHILLZ/NFLX v2 pool both sides, not Gecko token total_reserve_in_usd 36171.14)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 541425, currency: USD, as_of: 2026-09-03T04:47:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x5B6Ef408c4eBb166788C0cA4cB644f12AC757777 fdv/marketCap (Gecko fdv_usd 555818.70; market_cap_usd null)", class: claim, receipt_ids: [R-8, R-9] }
  - { kind: holders, value: 365, currency: null, as_of: 2026-09-03T04:46:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x5B6Ef408c4eBb166788C0cA4cB644f12AC757777 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:50:00Z, receipt_ids: [R-5], result: "eth_blockNumber 0x32afd58 (53149016). Token 0x5B6E…7777 eth_getCode 45 bytes EIP-1167 prefix 363d3d373d3d3d363d73 implementation 0x7777c874…3333. name Chilleez, symbol CHILLZ, decimals 18, totalSupply 1e27. owner() 0x0. quoteToken() 0xE0444EF8BF4eD74f74FD73686e2ddF4C1c5591E8. mainPool() 0x31a03eB2751456eE01B09546Fbb5be2E3b9e7ba9. buyTaxRate/sellTaxRate/taxRate 200 bps. state() 2. taxProcessor 0xEd1ed959…b134. dividendContract 0x9f71558B…8150. v2Router 0x89e5db8b…9eba. taxExpirationTime 4941813605 (2126-08-07T22:00:05Z). antiFarmerExpirationTime 1790805605 (2026-09-30T22:00:05Z). Launch EOA 0x51C9…E740 code 0x." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:50:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-6, R-17, R-18], result: "Blockscout api/v2 token 0x5B6E…7777 name Chilleez symbol CHILLZ holders_count 365 total_supply 1e27 proxy_type eip1167 implementation FlapTaxTokenV3 0x7777C874…3333 is_verified true. Creator 0x26605f32…Eb09 (Flap Factory TransparentUpgradeableProxy). Creation tx 0x5ab14b9c…4d4d 2026-08-31T21:59:10Z block 51203005 from 0x51C9…E740 method 0x8cb5772c. TokenCreated name Chilleez symbol CHILLZ token 0x5B6E…7777 quoteToken NFLX 0xE044…91E8 tax 200. Holders: pair 65.92M, 0xdead 30.98M. NFLX token Netflix • Robinhood Token holders_count 11742." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T04:47:00Z, receipt_ids: [R-8], result: "DexScreener latest/dex/tokens/0x5B6E…7777: 1 robinhood uniswap pair labels v2 pairAddress 0x31a03…7ba9 base Chilleez/CHILLZ quote Netflix • Robinhood Token/NFLX 0xE044…91E8 liquidity.usd 73668.06 volume.h24 290713.69 fdv/marketCap 541425 pairCreatedAt 1788213605000 (2026-08-31T22:00:05Z) info.websites chilleez.net plus about.netflix.com Chilleez article; info.socials x.com/ChilleezOnRh and t.me/ChilleezCommunity." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T04:47:00Z, receipt_ids: [R-9], result: "GET api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x5B6E…7777 HTTP 200. name Chilleez symbol CHILLZ decimals 18 total_supply 1e27 price_usd 0.0005558186962 fdv_usd 555818.696170296 market_cap_usd null volume_usd.h24 294165.026760144 total_reserve_in_usd 36171.14. top_pools robinhood_0x31a03eb2751456ee01b09546fbb5be2e3b9e7ba9. Subsequent Gecko pool GETs HTTP 429 this pass." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T04:50:00Z, receipt_ids: [R-12], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one NFLX hit: tokenSymbol NFLX tokenName Netflix • Robinhood Token deployments contractAddress 0xE0444EF8BF4eD74f74FD73686e2ddF4C1c5591E8 chainId 4663 status ASSET_STATUS_ACTIVE." }
  - { id: REP-6, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:50:00Z, receipt_ids: [R-5, R-17], result: "Pair 0x31a03…7ba9 code 11293 B. token0 0x5B6E…7777 token1 0xE044…91E8 factory 0x8bcEaA40…937f. getReserves token0 65924193270079423705647162 (~65.92e6 CHILLZ) token1 ~442.999 NFLX. CHILL 0x57ffde6EAFB5dC2D5d596b6502eDEBE982FF1e18 code 44 B name Netflix n Chill symbol CHILL." }
  - { id: REP-7, method: official-crosslink, checked_at: 2026-09-03T04:50:00Z, receipt_ids: [R-13, R-14, R-8], result: "chilleez.net title Chilleez ($CHILLZ); var CONFIG CONTRACT_ADDRESS 0x5b6ef408…7777 TWITTER_URL x.com/ChilleezOnRh TELEGRAM_URL t.me/ChilleezCommunity DEXSCREENER_URL robinhood/0x31a03…7ba9. @ChilleezOnRh bio carries the same CA. DexScreener info.socials match those two URLs." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Flap Factory clones FlapTaxTokenV3 (EIP-1167, 1e9 supply) with quote NFLX; TokenCreated then a Uniswap v2 CHILLZ/NFLX mainPool. Verified source: 2% buy/sell tax (200 bps) in TaxEnforcedAntiFarmer/TaxEnforced, routed via TaxProcessorUniV2 and a Dividend clone. Site says the vault sends NFLX to holders with nothing to claim.", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-2, R-4, R-5, R-13, R-18], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Chilleez", class: verified, observed_at: 2026-09-03T04:46:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "CHILLZ", class: verified, observed_at: 2026-09-03T04:46:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x5B6Ef408c4eBb166788C0cA4cB644f12AC757777", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-1, R-5, R-18], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x26605f322f7fF986f381bB9A6e3f5DAb0bEaEb09", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-3, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-1, R-5, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-8, R-12, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "@ChilleezOnRh", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-8, R-13, R-14], reproduction_ids: [REP-7], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote NFLX 0xE044…91E8 is Netflix • Robinhood Token in GET /rhj/assets (194 assets, ASSET_STATUS_ACTIVE, chainId 4663). NFLX is a stock-tokens rail, not this subject. Distinct from CHILL/NFLX 0x57ffde6EAFB5dC2D5d596b6502eDEBE982FF1e18 (Netflix n Chill).", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-6, R-12, R-16, R-19], reproduction_ids: [REP-5, REP-6], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "CHILLZ/NFLX Uniswap v2 24h volume 290713.69 USD and liquidity.usd 73668.06 at 2026-09-03T04:47:00Z (DexScreener pair slice). Gecko token volume_usd.h24 294165.03; Gecko token total_reserve_in_usd 36171.14 is not the pool both-sides figure.", class: verified, observed_at: 2026-09-03T04:47:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: 365, class: verified, observed_at: 2026-09-03T04:46:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-12, field: control.owner, value: "token owner() returns 0x0 at block 53149016. Create-tx OwnershipTransferred set newOwner to Flap Factory 0x2660…Eb09; later owner is zero. Launch EOA 0x51C9…E740 has no code.", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-13, field: control.privileged-role, value: "taxProcessor 0xEd1ed959111ABe5164bFC3Facaeed85b9748b134 (TaxProcessorUniV2 clone); dividendContract 0x9f71558B0f9c14Fc1A2e5eA5Eb1bd24dBCF38150 (Dividend clone); v2Router 0x89e5db8b5aa49aa85ac63f691524311aeb649eba. Factory implementation 0xa3b96Df5…ff44 name null this pass.", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-5, R-18], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-14, field: product.mechanism, value: "state() 2 maps IFlapTaxTokenV3 PoolState.TaxEnforcedAntiFarmer (listed on DEX, tax on transfers involving any pool) until antiFarmerExpirationTime 2026-09-30T22:00:05Z, then TaxEnforced. taxExpirationTime 2126-08-07T22:00:05Z. buyTaxRate=sellTaxRate=200.", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-2, R-5], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is NFLX 0xE0444EF8BF4eD74f74FD73686e2ddF4C1c5591E8; venue is Uniswap v2 pair 0x31a03eB2751456eE01B09546Fbb5be2E3b9e7ba9 (mainPool, factory 0x8bcEaA40…937f). Create tx also PairCreated 0x3075f954…F4Cd as the Flap curve pool.", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-5, R-8, R-17, R-18], reproduction_ids: [REP-3, REP-6], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash is Flap Factory 0x2660…Eb09, not Pons, LONG, PAIR, or hood.fun. Blockscout tags the factory Flap Factory / flap.sh.", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-1, R-3, R-4], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T04:47:00Z, receipt_ids: [R-5, R-8], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, the site, Telegram preview, or X this pass", class: unknown, observed_at: 2026-09-03T04:52:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: identity.domain, value: "https://www.chilleez.net/", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-8, R-13], reproduction_ids: [REP-7], supersedes: null }
  - { id: CLM-20, field: communications.status, value: "third-party-link: DexScreener info.websites also lists about.netflix.com/en/news/meet-your-new-favorite-streaming-buddies-the-chilleez (Netflix character article, no CA). Site disclaimer: not affiliated with Netflix. Plushie CONFIG links grabr.io marked NOT verified by the builder.", class: claim, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-8, R-13, R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: other, value: "ca-collision: Blockscout search q=CHILLZ also returns Chilleez/CHILLZ at 0x409e53DD…1836 (3 holders), 0x7E8B4502…A25B (1 holder), 0x93999868…AbA3, 0xb8F0F8EF…8bA3. Canonical this pass is 0x5B6E…7777 (365 holders, DexScreener v2 NFLX book).", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-1, R-21], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-22, field: candidate, value: "chillz | CHILLZ | @ChilleezOnRh | https://www.chilleez.net/ — discovery token not in census 49", class: claim, observed_at: 2026-09-03T04:55:00Z, receipt_ids: [R-1, R-8], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: deployment.address, value: "0xE0444EF8BF4eD74f74FD73686e2ddF4C1c5591E8", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-6, R-12, R-16], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-24, field: deployment.address, value: "0x7777C8743C88B3aff3cf262135beF2c8b2e83333", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-2, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-25, field: account.@ChilleezOnRh.role, value: project, class: claim, observed_at: 2026-09-03T04:49:00Z, receipt_ids: [R-13, R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: account.@dutta_zegliona.flag, value: "copypasta-pattern: supportlisting.org vote post with CA 0x5b6ef408…7777, 2026-09-03T04:42:04Z", class: claim, observed_at: 2026-09-03T04:49:00Z, receipt_ids: [R-22], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "Flap Factory TokenCreated minted Chilleez / CHILLZ against NFLX"
    summary: "Tx 0x5ab14b9c…4d4d from 0x51C9…E740 at 2026-08-31T21:59:10Z block 51203005; TokenCreated token 0x5B6E…7777 quoteToken NFLX tax 200."
    occurred_at: 2026-08-31T21:59:10Z
    observed_at: 2026-09-03T04:50:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-18]
  - id: EVT-2
    type: onchain
    title: "Uniswap v2 CHILLZ/NFLX mainPool created"
    summary: "Pair 0x31a03…7ba9 created 2026-08-31T22:00:05Z block 51203553; DexScreener labels v2."
    occurred_at: 2026-08-31T22:00:05Z
    observed_at: 2026-09-03T04:50:00Z
    affected_fields: [deployment.address, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-8, R-17]
  - id: EVT-3
    type: company
    title: "@ChilleezOnRh posted 41 NFLX distributed to holders"
    summary: "Post: Over 41 $NFLX has already been distributed to holders — worth approximately $3,360 at $82 per share. 8.22 $NFLX around $674 added to liquidity."
    occurred_at: 2026-09-02T21:26:49Z
    observed_at: 2026-09-03T04:49:00Z
    affected_fields: [economics.metric, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-11]
  - id: EVT-4
    type: onchain
    title: "DexScreener CHILLZ/NFLX 24h volume $290.7k, liquidity $73.7k"
    summary: "DexScreener pair 0x31a03…7ba9 volume.h24 290713.69 liquidity.usd 73668.06 fdv 541425. Assignment lead ~$72,528 / ~$287,773 was the same book, live figures this as_of."
    occurred_at: 2026-09-03T04:47:00Z
    observed_at: 2026-09-03T04:47:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-8]
  - id: EVT-5
    type: ct
    title: "X account posted a supportlisting.org vote for the CA"
    summary: "@dutta_zegliona posted Fresh on the listing radar $CHILLZ with CA 0x5b6ef408…7777 and supportlisting.org. Flag copypasta-pattern."
    occurred_at: 2026-09-03T04:42:04Z
    observed_at: 2026-09-03T04:49:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-22]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x5B6E…7777 Chilleez / CHILLZ", url: "https://robinhoodchain.blockscout.com/address/0x5B6Ef408c4eBb166788C0cA4cB644f12AC757777", published_at: null, accessed_at: 2026-09-03T04:46:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-11, CLM-16, CLM-21, CLM-22], excerpt: "hash 0x5B6Ef408c4eBb166788C0cA4cB644f12AC757777 name Chilleez is_contract true is_verified true proxy_type eip1167 implementations FlapTaxTokenV3 0x7777C8743C88B3aff3cf262135beF2c8b2e83333. token symbol CHILLZ decimals 18 total_supply 1000000000000000000000000000 holders_count 365 type ERC-20. creator_address_hash 0x26605f322f7fF986f381bB9A6e3f5DAb0bEaEb09 creation_transaction_hash 0x5ab14b9c4f780c84d6d2b285e730aa379ae46283e0ba784170e7d24bcd304d4d." }
  - { id: R-2, publisher: Blockscout, title: "Address 0x7777C874…3333 FlapTaxTokenV3", url: "https://robinhoodchain.blockscout.com/address/0x7777C8743C88B3aff3cf262135beF2c8b2e83333", published_at: null, accessed_at: 2026-09-03T04:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-14, CLM-24], excerpt: "hash 0x7777C8743C88B3aff3cf262135beF2c8b2e83333 name FlapTaxTokenV3 is_contract true is_verified true. Smart-contract compiler v0.8.26+commit.8a97fa7a is_fully_verified true file_path src/Tax/FlapTaxTokenV3.sol verified_at 2026-07-08T06:38:19Z. IFlapTaxTokenV3 PoolState: 0 BondingCurve, 1 Migrating, 2 TaxEnforcedAntiFarmer, 3 TaxEnforced, 4 TaxFree." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x2660…Eb09 Flap Factory", url: "https://robinhoodchain.blockscout.com/address/0x26605f322f7fF986f381bB9A6e3f5DAb0bEaEb09", published_at: null, accessed_at: 2026-09-03T04:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-16], excerpt: "hash 0x26605f322f7fF986f381bB9A6e3f5DAb0bEaEb09 name TransparentUpgradeableProxy is_contract true is_verified true proxy_type eip1967 implementations 0xa3b96Df56f254B926B17D5f7FB6CD858c216ff44. Tags Flap Factory / Portal. creator_address_hash 0x3bfC05a8b9e48FdFd6A443657caC5D983B664a05." }
  - { id: R-4, publisher: Blockscout, title: "TokenCreated tx 0x5ab14b9c…4d4d", url: "https://robinhoodchain.blockscout.com/tx/0x5ab14b9c4f780c84d6d2b285e730aa379ae46283e0ba784170e7d24bcd304d4d", published_at: 2026-08-31T21:59:10Z, accessed_at: 2026-09-03T04:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-5, CLM-12, CLM-16, EVT-1], excerpt: "timestamp 2026-08-31T21:59:10.000000Z status ok block_number 51203005 from 0x51C9e0f451BB04a955eA9ef2B1C6dc5797FEE740 (is_contract false) to Flap Factory 0x26605f322f7fF986f381bB9A6e3f5DAb0bEaEb09 method 0x8cb5772c. TokenCreated name Chilleez symbol CHILLZ token 0x5B6Ef408c4eBb166788C0cA4cB644f12AC757777 quoteToken 0xE0444EF8BF4eD74f74FD73686e2ddF4C1c5591E8 FlapTokenTaxSet tax 200." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, quoteToken, taxes on CHILLZ", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-12, CLM-13, CLM-14, CLM-15, CLM-17, CLM-23, CLM-24], excerpt: "eth_blockNumber 0x32afd58 (53149016). Token code 45 B EIP-1167 impl 0x7777c874…3333. name Chilleez symbol CHILLZ decimals 18 totalSupply 1e27. owner() 0x0. quoteToken() 0xE0444EF8…91E8 mainPool() 0x31a03eB2…7ba9 buyTaxRate/sellTaxRate 200 state 2. Factory code 2840 B. Impl code 19020 B. Pair code 11293 B. NFLX code 283 B. Launch EOA code 0x." }
  - { id: R-6, publisher: Blockscout, title: "Token 0xE044…91E8 Netflix • Robinhood Token / NFLX", url: "https://robinhoodchain.blockscout.com/address/0xE0444EF8BF4eD74f74FD73686e2ddF4C1c5591E8", published_at: null, accessed_at: 2026-09-03T04:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-23], excerpt: "hash 0xE0444EF8BF4eD74f74FD73686e2ddF4C1c5591E8 name BeaconProxy is_contract true is_verified true. token name Netflix • Robinhood Token symbol NFLX decimals 18 holders_count 11742 total_supply 4218535000000000000000 exchange_rate 82.36. Tag Netflix (NFLX). implementation Stock 0xb35490d6…5aE2." }
  - { id: R-7, publisher: Blockscout, title: "Address 0x31a03…7ba9 UniswapV2Pair", url: "https://robinhoodchain.blockscout.com/address/0x31a03eB2751456eE01B09546Fbb5be2E3b9e7ba9", published_at: null, accessed_at: 2026-09-03T04:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-15, EVT-2], excerpt: "hash 0x31a03eB2751456eE01B09546Fbb5be2E3b9e7ba9 name UniswapV2Pair is_contract true is_verified true creator_address_hash 0x8bcEaA40B9AcdfAedF85AdF4FF01F5Ad6517937f creation_transaction_hash 0xb193263a829607f7e31f00e951ebe6f17c5717379aadd1a92fabfd05cb00e3c5. token name Uniswap V2 symbol UNI-V2 holders_count 2." }
  - { id: R-8, publisher: DexScreener, title: "latest/dex/tokens CHILLZ", url: "https://api.dexscreener.com/latest/dex/tokens/0x5B6Ef408c4eBb166788C0cA4cB644f12AC757777", published_at: null, accessed_at: 2026-09-03T04:47:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-10, CLM-15, CLM-17, CLM-19, CLM-20, CLM-22, EVT-2, EVT-4], excerpt: "1 robinhood uniswap pair labels v2 pairAddress 0x31a03eB2751456eE01B09546Fbb5be2E3b9e7ba9 base Chilleez/CHILLZ quote Netflix • Robinhood Token/NFLX 0xE0444EF8…91E8 liquidity.usd 73668.06 volume.h24 290713.69 fdv 541425 marketCap 541425 pairCreatedAt 1788213605000. info.websites https://www.chilleez.net/ and about.netflix.com Chilleez article. info.socials x.com/ChilleezOnRh t.me/ChilleezCommunity." }
  - { id: R-9, publisher: GeckoTerminal, title: "Chilleez token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x5B6Ef408c4eBb166788C0cA4cB644f12AC757777", published_at: null, accessed_at: 2026-09-03T04:47:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10], excerpt: "HTTP 200. name Chilleez symbol CHILLZ decimals 18 total_supply 1e27 price_usd 0.0005558186962 fdv_usd 555818.696170296 market_cap_usd null volume_usd.h24 294165.026760144 total_reserve_in_usd 36171.14. coingecko_coin_id null. top_pools robinhood_0x31a03eb2751456ee01b09546fbb5be2e3b9e7ba9." }
  - { id: R-10, publisher: Telegram, title: "t.me/ChilleezCommunity", url: "https://t.me/ChilleezCommunity", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-8], excerpt: "HTTP 200. og:title Chilleez - Gateway. og:description You can view and join @ChilleezCommunity right away. tgme_page_extra 26 subscribers. No contract address in the preview HTML this pass." }
  - { id: R-11, publisher: "@ChilleezOnRh", title: "41 NFLX distributed to holders", url: "https://x.com/ChilleezOnRh/status/2095262194799952324", published_at: 2026-09-02T21:26:49Z, accessed_at: 2026-09-03T04:49:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-3], excerpt: "Over 41 $NFLX has already been distributed to holders — worth approximately $3,360 at $82 per share. On top of that, 8.22 $NFLX around $674 has been added directly to liquidity. Real rewards. Deeper liquidity. Built for long-term growth. $CHILLZ x $NFLX" }
  - { id: R-12, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-23], excerpt: "HTTP 200. assets length 194. One NFLX row: tokenSymbol NFLX tokenName Netflix • Robinhood Token deployments contractAddress 0xE0444EF8BF4eD74f74FD73686e2ddF4C1c5591E8 chainId 4663 networkName Robinhood Chain status ASSET_STATUS_ACTIVE." }
  - { id: R-13, publisher: Chilleez, title: "chilleez.net", url: "https://www.chilleez.net/", published_at: null, accessed_at: 2026-09-03T04:48:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-8, CLM-19, CLM-20, CLM-25], excerpt: "title Chilleez ($CHILLZ) - Chill looks good on you. CONFIG CONTRACT_ADDRESS 0x5b6ef408c4ebb166788c0ca4cb644f12ac757777 TWITTER_URL https://x.com/ChilleezOnRh TELEGRAM_URL https://t.me/ChilleezCommunity DEXSCREENER_URL https://dexscreener.com/robinhood/0x31a03eb2751456ee01b09546fbb5be2e3b9e7ba9. Copy: Buy the token and Netflix stock rewards land in your wallet. Disclaimer: not affiliated with Netflix, Inc." }
  - { id: R-14, publisher: "@ChilleezOnRh", title: "X profile bio", url: "https://x.com/ChilleezOnRh", published_at: null, accessed_at: 2026-09-03T04:48:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-25], excerpt: "Name Chilleez. Handle @ChilleezOnRh. Bio: Pick your show and CHiLLeez while you earn $NFLX shares with your favourite characters! Ca 0x5B6Ef408c4eBb166788C0cA4cB644f12AC757777. Followers 95." }
  - { id: R-15, publisher: "@ChilleezOnRh", title: "@netflix how many $NFLX shares", url: "https://x.com/ChilleezOnRh/status/2095328247802421664", published_at: 2026-09-03T01:49:18Z, accessed_at: 2026-09-03T04:49:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [], excerpt: "@netflix how many $NFLX shares do we need to own in order to launch our own series on Netflix? $CHILLZ $NFLX $CHILLZ #NETFLIX" }
  - { id: R-16, publisher: Proofline, title: "stock-tokens.yaml NFLX row", url: "https://github.com/harsharn10/proofline/blob/334ca0619aa62e922da83f46de021f06d12348cf/content/dependencies/stock-tokens.yaml", published_at: null, accessed_at: 2026-09-03T04:46:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-23], excerpt: "label NFLX — Netflix (workbook sheet 01) ticker NFLX chain robinhood-chain issuer Robinhood Assets (Jersey) Limited address 0xE0444EF8BF4eD74f74FD73686e2ddF4C1c5591E8 role token." }
  - { id: R-17, publisher: Blockscout, title: "Pair creation tx 0xb193263a…e3c5", url: "https://robinhoodchain.blockscout.com/tx/0xb193263a829607f7e31f00e951ebe6f17c5717379aadd1a92fabfd05cb00e3c5", published_at: 2026-08-31T22:00:05Z, accessed_at: 2026-09-03T04:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-15, EVT-2], excerpt: "timestamp 2026-08-31T22:00:05.000000Z status ok block_number 51203553 from 0x3016506Ee11656D0B192CD78e92fBa00c3e0fA08 to TransparentUpgradeableProxy 0x65050A9b7E5075A2bA5cED7b1b64EE66262c40Dc (Swap Router tag) method 0x4d819a2a. Created UniswapV2Pair 0x31a03eB2751456eE01B09546Fbb5be2E3b9e7ba9." }
  - { id: R-18, publisher: Blockscout, title: "TokenCreated and tax logs for CHILLZ", url: "https://robinhoodchain.blockscout.com/tx/0x5ab14b9c4f780c84d6d2b285e730aa379ae46283e0ba784170e7d24bcd304d4d", published_at: 2026-08-31T21:59:10Z, accessed_at: 2026-09-03T04:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-13, CLM-15, EVT-1], excerpt: "TokenCreated ts 1788213550 creator 0x51C9e0f451BB04a955eA9ef2B1C6dc5797FEE740 token 0x5B6Ef408c4eBb166788C0cA4cB644f12AC757777 name Chilleez symbol CHILLZ. TokenQuoteSet quoteToken 0xE0444EF8…91E8. FlapTokenTaxSet tax 200. FlapTokenAsymmetricTaxSet buyTax 200 sellTax 200. PairCreated token0 CHILLZ token1 NFLX pair 0x3075f954c39863105cAe4095e6FD2ce447e1F4Cd. Transfer mint 1e27 to factory." }
  - { id: R-19, publisher: Blockscout, title: "Token 0x57ff…1e18 Netflix n Chill / CHILL", url: "https://robinhoodchain.blockscout.com/token/0x57ffde6EAFB5dC2D5d596b6502eDEBE982FF1e18", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9], excerpt: "address_hash 0x57ffde6EAFB5dC2D5d596b6502eDEBE982FF1e18 name Netflix n Chill symbol CHILL decimals 18 holders_count 203 total_supply 1000000000000000000000000000 type ERC-20. Distinct from CHILLZ 0x5B6E…7777." }
  - { id: R-20, publisher: Netflix, title: "Meet Your New Favorite Streaming Buddies — the Chilleez!", url: "https://about.netflix.com/en/news/meet-your-new-favorite-streaming-buddies-the-chilleez", published_at: null, accessed_at: 2026-09-03T04:51:00Z, kind: news, authority: independent, authenticity: confirmed, supports: [CLM-20], excerpt: "title Meet Your New Favorite Streaming Buddies — the Chilleez! - About Netflix. HTTP 200. No 0x5B6E contract string and no $CHILLZ ticker in the article HTML this pass. Flag third-party-link on the DexScreener website slot." }
  - { id: R-21, publisher: Blockscout, title: "Search q=CHILLZ", url: "https://robinhoodchain.blockscout.com/api/v2/search?q=CHILLZ", published_at: null, accessed_at: 2026-09-03T04:46:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-21], excerpt: "items include Chilleez/CHILLZ 0x5B6Ef408c4eBb166788C0cA4cB644f12AC757777 (this packet), 0x409e53DD52d42e0821185fC1405a755baE7F1836 holders later 3, 0x7E8B45029Da0f0F35b1de2771b3e3E0fa11bA25B holders later 1, 0x93999868B7388C9A9b11622FBa0b633eeDA1AbA3, 0xb8F0F8EF00c8E54253D2553476139bA313688bA3. Also Chill zen CHILLZN 0xf826…1e18." }
  - { id: R-22, publisher: "@dutta_zegliona", title: "Fresh on the listing radar $CHILLZ", url: "https://x.com/dutta_zegliona/status/2095371725156261920", published_at: 2026-09-03T04:42:04Z, accessed_at: 2026-09-03T04:49:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-26, EVT-5], excerpt: "Fresh on the listing radar: $CHILLZ. $hood @RobinhoodApp chain CA: 0x5b6ef408c4ebb166788c0ca4cb644f12ac757777 Show support — cast your vote https://supportlisting.org/?contract=0x5b6ef408c4ebb166788c0ca4cb644f12ac757777" }

gaps:
  - { priority: P0, question: "Does verified FlapTaxTokenV3 / TaxProcessorUniV2 actually send NFLX to holders, matching the site vault copy and the 41 NFLX X post?", checked: "RPC dividendContract and taxProcessor addresses; site CONFIG and @ChilleezOnRh 41 NFLX post; no dividend distribution logs pulled this pass, 2026-09-03", next: "read Dividend clone source and sample Transfer of NFLX from the processor to holders" }
  - { priority: P1, question: "When did token owner() move from Flap Factory to 0x0, and does the factory proxy implementation still hold a privileged path?", checked: "create-tx OwnershipTransferred to factory; owner() 0x0 at block 53149016; factory impl 0xa3b96…ff44 name null, 2026-09-03", next: "scan OwnershipTransferred on 0x5B6E…7777 after the create tx; verify factory implementation source" }
  - { priority: P1, question: "Are the other Blockscout Chilleez/CHILLZ clones (0x409e, 0x7E8B, 0x9399, 0xb8F0) abandoned pads or active books?", checked: "search q=CHILLZ; 0x409e holders_count 3; 0x7E8B holders_count 1; DexScreener tokens API for 0x5B6E returned one pair, 2026-09-03", next: "DexScreener/RPC each clone address and record any NFLX book" }
  - { priority: P2, question: "Is there a GitHub repository or audit for FlapTaxTokenV3 on this chain?", checked: "site, DexScreener, Blockscout verified source header, X bio, Telegram preview, 2026-09-03", next: "docs.flap.sh/flap and Sourcify metadata on 0x7777C874…3333" }
---

# CHILLZ — research packet

## What it is

A one-billion-supply ERC-20 cloned into a Uniswap v2 pool quoted against NFLX. Flap Factory deploys Chilleez (CHILLZ) as a FlapTaxTokenV3 clone and the live book is CHILLZ/NFLX on Uniswap v2. Traders buy and sell CHILLZ there. The quote leg is the Netflix • Robinhood Token rail. Site and @ChilleezOnRh say a trade tax feeds a vault that sends NFLX to holders.

Themes: memecoin, stock-paired:NFLX, rwa

## Why it matters

The CHILLZ/NFLX Uniswap v2 book printed about $290.7k of 24h volume on DexScreener at collection, with ~$73.7k pool liquidity, against an official NFLX Stock Token (GET /rhj/assets, chain 4663). That makes CHILLZ a graduation-name using the stock-tokens rail rather than a fake quote. Several other CHILL and Chilleez tickers sit on the same chain.

## What could go wrong

USD liquidity on the CHILLZ/NFLX book counts both sides, and the quote side is NFLX, not USDG. Same-ticker CHILL/NFLX at 0x57ff…1e18 and same-name Chilleez clones are easy to mix in a search. DexScreener also lists a Netflix character article as a website; the token site says it is not affiliated with Netflix. Tax is 2% buy and sell while state is TaxEnforcedAntiFarmer.

## Product and mechanics

Flap Factory 0x2660…Eb09 cloned FlapTaxTokenV3 via EIP-1167. TokenCreated from 0x51C9…E740 at 2026-08-31T21:59:10Z minted Chilleez / CHILLZ supply 1e9*1e18 with quoteToken NFLX and tax 200 bps. mainPool() is Uniswap v2 0x31a03…7ba9 created 2026-08-31T22:00:05Z. The create tx also PairCreated 0x3075…F4Cd as the Flap curve pool. [verified R-4 R-5 R-18]

Verified IFlapTaxTokenV3 source maps state() 2 to TaxEnforcedAntiFarmer until 2026-09-30T22:00:05Z, then TaxEnforced. buyTaxRate and sellTaxRate are 200 bps. taxProcessor is a TaxProcessorUniV2 clone; dividendContract is a Dividend clone. Site copy: a slice of each buy and sell flows into the Chilleez Vault and the vault sends NFLX to holders with nothing to claim. That vault path was not reproduced from logs this pass. [verified R-2 R-5] [claim R-13]

## Control and security

token owner() returns 0x0 at block 53149016. Create-tx OwnershipTransferred set newOwner to the factory; the later zero owner was not located as a separate tx this pass. Launch EOA 0x51C9…E740 has no code. Factory implementation 0xa3b96…ff44 is unnamed on the explorer this pass. [verified R-4 R-5]

FlapTaxTokenV3 is fully verified (src/Tax/FlapTaxTokenV3.sol, compiler v0.8.26). Token shell is an EIP-1167 clone. No audit report URL was located this pass. [verified R-1 R-2] [unknown]

## Team and provenance

Official domain https://www.chilleez.net/ and handle @ChilleezOnRh. Site CONFIG and the X bio both carry CA 0x5B6E…7777; DexScreener socials match. t.me/ChilleezCommunity titles Chilleez - Gateway with 26 subscribers and no CA in the public preview; the site lists it. Flag third-party-link on the Netflix about.netflix.com article DexScreener filed as a website, and on grabr.io plushie links the site marks unverified. [verified R-13 R-14] [claim R-8 R-20]

Site disclaimer: independent community-run meme project, not affiliated with Netflix, Inc. [claim R-13]

## Economics and activity

CHILLZ/NFLX Uniswap v2 24h volume is 290713.69 USD and liquidity.usd is 73668.06 at 2026-09-03T04:47:00Z from DexScreener. fdv/marketCap 541425. Gecko token fdv_usd 555818.70; Gecko token volume_usd.h24 294165.03; Gecko token total_reserve_in_usd 36171.14 is the token-side reserve, not the pool both-sides figure. [claim R-8 R-9]

Blockscout holders_count 365. Pair created 2026-08-31T22:00:05Z. RPC reserves ~65.92M CHILLZ and ~442.999 NFLX in the v2 pair; 0xdead holds ~30.98M CHILLZ. [claim R-1 R-5]

@ChilleezOnRh posted 41 NFLX distributed (~$3,360 at $82) and 8.22 NFLX added to liquidity. Those amounts were not reproduced from Transfer logs this pass. [claim R-11]

## Material risks

- Same-ticker CHILL/NFLX 0x57ffde6EAFB5dC2D5d596b6502eDEBE982FF1e18 is a different token (Netflix n Chill). [verified R-19]
- Same-name Chilleez/CHILLZ clones exist at other addresses with 1–3 holders. [verified R-21]
- Pool USD reserve is CHILLZ plus NFLX, not a USDG or WETH backstop. [claim R-8]
- 2% buy and sell tax while TaxEnforcedAntiFarmer; taxExpirationTime is 2126. [verified R-5]
- Netflix character article on DexScreener websites is a third-party-link; site says no affiliation. [claim R-13 R-20]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/impl/factory/NFLX/pair and both create txs, RPC name/symbol/quoteToken/mainPool/taxes/state, DexScreener tokens API, Gecko token GET 200, /rhj/assets, chilleez.net CONFIG, @ChilleezOnRh bio and posts, Telegram preview, Netflix article, and the listing-vote post were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-8 R-12 R-13]
- Numbers: 290713.69 is the DexScreener CHILLZ/NFLX v2 pool 24h volume, not the Gecko token 294165.03. Liquidity 73668.06 is that pool both sides. Gecko 36171.14 is token total_reserve_in_usd. Holders 365 is Blockscout. [claim R-1 R-8 R-9]
- Adversarial: the strongest contrary reading is that this is the CHILL/NFLX 0x57ff…1e18 book, or an official Netflix product. RPC name/symbol/address, the Uniswap v2 pair, /rhj/assets (NFLX is the rail), and the site disclaimer argue against both. [inference R-12 R-13 R-19]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no chillz / CHILLZ / Chilleez / 0x5B6E…7777. content/dependencies/stock-tokens.yaml has NFLX at 0xE044…91E8.
- Explorer: Blockscout api/v2 search CHILLZ, token, impl, factory, NFLX, pair, create 0x5ab14b9c…4d4d logs, pair create 0xb193263a…e3c5, holders, CHILL 0x57ff…1e18. Chrome UA.
- RPC 4663: eth_getCode/eth_call name/symbol/owner/quoteToken/mainPool/taxes/state/dividend/taxProcessor/v2Router and pair token0/token1/getReserves at block 53149016.
- Aggregators: DexScreener latest/dex/tokens and search. Gecko token GET 200; Gecko pool GETs HTTP 429 (skipped after first token GET 200).
- Registry: GET api.robinhood.com/rhj/assets 194 assets, NFLX hit at 0xE044…91E8.
- Social: X Latest from:ChilleezOnRh and CHILLZ/Chilleez; user search ChilleezOnRh; t.me/ChilleezCommunity preview.
- Site: https://www.chilleez.net/ CONFIG and disclaimer. Netflix about article (no CA). flap.sh/robinhood/token/0x5B6E… SPA 404 this pass.
- Failed: Gecko pool endpoints 429; flap.sh token path 404; token owner() zero without the later OwnershipTransferred tx isolated; Dividend NFLX distribution logs not pulled.
- Time: collection 2026-09-03T04:46Z–2026-09-03T04:55Z.
