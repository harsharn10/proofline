---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: crudecat
name: CRUDECAT
packet_tier: seed
as_of: 2026-09-03T03:52:00Z
prior_packet: null
supersedes: null
owned_slugs: [crudecat]
allowed_paths:
  - research/inbox/packets/crudecat/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: CRUDECAT
  aliases: ["Crude Cat"]
  symbols: [CRUDECAT]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: https://www.crudecat.xyz/
  official_handle: "@crudecatcoin"
  repository: "NULL — GitHub search q=crudecat returned total_count 0; crudecat.xyz, DexScreener info, tokenURI JSON, and the @crudecatcoin profile list no GitHub URL this pass"
  possible_matches:
    - slug: noxa
      signals: [other]
      contrary_signals:
        - "Census NOXA Fun is the launchpad at fun.noxa.eth.limo / @Noxa_Fi with factory 0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB"
        - "CRUDECAT is CircusQuoteTokenV3 0xBD957Cc9f1e94617792F37bC40f2F299e78AcF3e from Circus pad 0xb7fA…cb00, paired USO, not WETH"
        - "No shared domain, handle, or reproduced address"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "CRUDECAT is a graduated CircusQuoteTokenV3, not a LongLauncher clone"
        - "No shared domain, handle, or reproduced address"
    - slug: hoodfun
      signals: [other]
      contrary_signals:
        - "Census hood.fun is a launchpad, not a USO-paired graduation token"
        - "CRUDECAT token 0xBD957…cF3e launchpad() returns Circus 0xb7fA…cb00"
        - "No shared domain, handle, or reproduced address"
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher"
        - "CRUDECAT is Crude Cat at 0xBD957…cF3e paired to the USO rail via Circus"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0xBD957…cF3e is verified CircusQuoteTokenV3 with non-empty code on 4663; launchpad() returns Circus ERC1967Proxy 0xb7fA…cb00; unlocked() true; Uniswap v3 1% CRUDECAT/USO pool 0xc3a873…8BeD quotes the USO Stock Token rail 0xa30FA3…D344 in GET /rhj/assets. Distinct from OILCOIN/GASOLINU/MICROWAVE. [R-1] [R-3] [R-5] [R-10] [R-16]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-8, CLM-23], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: site, url: "https://www.crudecat.xyz/", authenticity: confirmed }
  - { kind: x, url: "https://x.com/crudecatcoin", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/crudecat", authenticity: confirmed }
  - { kind: other, url: "https://airdrop.crudecat.xyz/", authenticity: unconfirmed }

deployments:
  - label: CRUDECAT token (CircusQuoteTokenV3)
    role: token
    address:
      value: "0xBD957Cc9f1e94617792F37bC40f2F299e78AcF3e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:46:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-2, R-3]
  - label: Circus launchpad (token launchpad())
    role: factory
    address:
      value: "0xb7fA26c6fcB8801cAbc538B82A6e80Ae1C43cb00"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:47:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: false
    receipt_ids: [R-3, R-4, R-13]
  - label: USO Stock Token rail (pair quote)
    role: token
    address:
      value: "0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:46:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-3, R-10, R-11]
  - label: Uniswap v3 CRUDECAT/USO 1% pool
    role: other
    address:
      value: "0xc3a873867C79b234A5179BeC2899846376258BeD"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:46:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-5, R-12, R-19]
  - label: CtoManager (token ctoManager)
    role: proxy
    address:
      value: "0x7D687dd0e3bf5025FbAc010042a5943300c8463a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:48:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: null
    receipt_ids: [R-2, R-3]
  - label: MetadataController (token metadataController)
    role: proxy
    address:
      value: "0x74D4b708E6ce0748E4b968403E115dD69E60BE8F"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:48:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: null
    receipt_ids: [R-2, R-3]

metrics:
  - { kind: volume_24h, value: 406036.06, currency: USD, as_of: 2026-09-03T03:50:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/pairs/robinhood/0xc3a873867C79b234A5179BeC2899846376258BeD volume.h24 (CRUDECAT/USO Uniswap v3, not an all-pools figure)", class: claim, receipt_ids: [R-5] }
  - { kind: tvl, value: 219757.12, currency: USD, as_of: 2026-09-03T03:50:00Z, window: point, method: "api.dexscreener.com/latest/dex/pairs/robinhood/0xc3a873867C79b234A5179BeC2899846376258BeD liquidity.usd (CRUDECAT/USO pool, not an all-pools figure)", class: claim, receipt_ids: [R-5] }
  - { kind: market_cap, value: 2992401, currency: USD, as_of: 2026-09-03T03:50:00Z, window: point, method: "api.dexscreener.com/latest/dex/pairs/robinhood/0xc3a873867C79b234A5179BeC2899846376258BeD marketCap (fdv 6232232 on the same pair)", class: claim, receipt_ids: [R-5] }
  - { kind: holders, value: 7931, currency: null, as_of: 2026-09-03T03:46:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xBD957Cc9f1e94617792F37bC40f2F299e78AcF3e holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:48:00Z, receipt_ids: [R-3], result: "rpc.mainnet.chain.robinhood.com eth_blockNumber 0x32a6afa (53111546). Token 0xBD957…cF3e eth_getCode 5641 B. name Crude Cat, symbol CRUDECAT, decimals 18, totalSupply 1e27. launchpad() 0xb7fA26c6fcB8801cAbc538B82A6e80Ae1C43cb00. creator() 0x2F849d43968232C2A747Be4566C6a258218b4729. unlocked() true. version v3. ctoManager() 0x7D687dd0e3bf5025FbAc010042a5943300c8463a. metadataController() 0x74D4b708E6ce0748E4b968403E115dD69E60BE8F. creatorNonce 0. owner() and factory() revert. USO name United States Oil Fund • Robinhood Token. Pair token0 USO token1 CRUDECAT fee 10000 factory 0x1f7d7550B1b028f7571E69A784071F0205FD2EfA." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:47:00Z, receipt_ids: [R-1, R-2, R-4, R-11, R-12, R-13, R-19], result: "Blockscout api/v2 token 0xBD957…cF3e name Crude Cat symbol CRUDECAT holders_count 7931 total_supply 1e27. Address is_contract true is_verified true name CircusQuoteTokenV3 file_path src/launchpad/CircusQuoteTokenV3.sol compiler v0.8.35 is_partially_verified true. creator_address_hash 0x673c82…1532 (CREATE3 helper, 8 B code). create tx 0x3e83f90b…7f5d 2026-07-25T23:12:52Z block 19395214 from 0x2F849d…4729 to Circus ERC1967Proxy 0xb7fA…cb00 method 0x4a221c46. Internal create of token from the helper. Token transfers: 27.3 USO from creator to pad; 1e27 CRUDECAT mint to pad; 6.007e26 CRUDECAT back to creator. Pair 0xc3a873…8BeD UniswapV3Pool is_verified true creator UniswapV3Factory 0x1f7d7550…2EfA tx 0x75dd551e…a9f3 2026-07-25T23:26:11Z." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T03:50:00Z, receipt_ids: [R-5, R-16, R-21], result: "DexScreener pairs/robinhood/0xc3a873…8BeD: chainId robinhood dexId uniswap labels v3 base Crude Cat / CRUDECAT 0xBD957…cF3e quote United States Oil Fund • Robinhood Token / USO 0xa30FA3…D344 liquidity.usd 219757.12 volume.h24 406036.06 fdv 6232232 marketCap 2992401 pairCreatedAt 1785021971000 (2026-07-25T23:26:11Z) txns.h24 buys 439 sells 471 info.websites https://www.crudecat.xyz/ info.socials x.com/crudecatcoin t.me/crudecat. latest/dex/tokens same token: 9 robinhood uniswap pairs; USO v3 book is the liquidity leader. Search also returns lowercase crudecat 0xD869…Bf01 / USO v4 and a Solana pumpswap CRUDECAT." }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-03T03:48:00Z, receipt_ids: [R-7, R-8, R-9, R-14], result: "www.crudecat.xyz HTTP 200 publishes CA 0xbd957cc9f1e94617792f37bc40f2f299e78acf3e, DexScreener pair 0xc3a873…8bed, https://x.com/crudecatcoin, https://t.me/crudecat. @crudecatcoin profile website crudecat.xyz, location Robinhood Chain; pinned 2026-08-05 post CA 0xBD957Cc9f1e94617792F37bC40f2F299e78AcF3e plus those three URLs. tokenURI JSON twitter/telegram/website match. t.me/crudecat og:title Crude Cat, 343 members, og:description names x.com/crudecatcoin; no CA in the public preview HTML." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T03:48:00Z, receipt_ids: [R-10], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one USO row tokenSymbol USO tokenName United States Oil Fund • Robinhood Token deployments contractAddress 0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344 chainId 4663 status ASSET_STATUS_ACTIVE." }
  - { id: REP-6, method: api, checked_at: 2026-09-03T03:50:00Z, receipt_ids: [R-6], result: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xBD957…cF3e and pools/0xc3a873…8BeD returned HTTP 429 this pass (Mozilla UA). www.geckoterminal.com/robinhood/pools/0xc3a873…8bed meta: USO/CRUDECAT Uniswap V3 (Robinhood) 1% Fee; 24-hour trading volume $344.25K; liquidity $211.67K; quote contract 0xa30fa36…d344." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Circus launchpad 0xb7fA…cb00 deployed CircusQuoteTokenV3 (stock-quoted lane) via CREATE3 helper 0x673c82…1532; verified source says the quote asset is a tokenized stock and graduation is a TOKEN/STOCK pool. unlocked() is true. Live book is Uniswap v3 1% CRUDECAT/USO 0xc3a873…8BeD.", class: verified, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-2, R-3, R-4, R-12], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Crude Cat", class: verified, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-1, R-3, R-7], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "CRUDECAT", class: verified, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-1, R-3, R-7], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xBD957Cc9f1e94617792F37bC40f2F299e78AcF3e", class: verified, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-1, R-3, R-7], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0xb7fA26c6fcB8801cAbc538B82A6e80Ae1C43cb00", class: verified, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-3, R-4, R-13], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-5, R-10, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "@crudecatcoin", class: verified, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-7, R-8, R-14], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote USO 0xa30FA3…D344 is the United States Oil Fund • Robinhood Token rail in GET /rhj/assets (194 assets, one USO row, chainId 4663). Distinct from OILCOIN 0x9CB19d…1E18, GASOLINU 0x1e6EA1…1e18, and MICROWAVE 0x79E1B7…888b, which are other USO-paired books.", class: verified, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-10, R-11, R-16], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "CRUDECAT/USO Uniswap v3 24h volume 406036.06 USD and liquidity.usd 219757.12 at 2026-09-03T03:50:00Z (DexScreener pair slice)", class: verified, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-5], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "Gecko pool HTML meta 24h volume $344.25K liquidity $211.67K at 2026-09-03T03:50:00Z (Gecko JSON API 429 this pass)", class: claim, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-6], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 7931, class: verified, observed_at: 2026-09-03T03:46:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() reverts; creator() 0x2F849d43968232C2A747Be4566C6a258218b4729 (EOA, no code) equals the create-tx from and has creatorNonce 0", class: verified, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-3, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "ctoManager 0x7D687d…463a and metadataController 0x74D4b7…BE8F are constructor immutables (ERC1967Proxy). Verified CircusQuoteTokenV3 source lets ctoManager reassign creator() and metadataController update the URI.", class: verified, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-2, R-3], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is USO rail 0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344; venue is Uniswap v3 factory 0x1f7d7550B1b028f7571E69A784071F0205FD2EfA pool 0xc3a873…8BeD fee 10000", class: verified, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-3, R-5, R-12], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash is CREATE3 helper 0x673c82…1532 deployed by the Circus pad; launchpad() names 0xb7fA…cb00, not Pons, LONG, PAIR, NOXA, or hood.fun", class: verified, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-1, R-3, R-4, R-13], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-3, R-5], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on crudecat.xyz, the X profile, Telegram preview, Blockscout, DexScreener, or GitHub search this pass", class: unknown, observed_at: 2026-09-03T03:52:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "Site disclaimer: memecoin, no claim to oil other than the pool; tokens have no intrinsic value / no roadmap / no whitepaper. FOMO is listed as a buy path (fomo.family/r/chill).", class: claim, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "DexScreener fdv 6232232; marketCap 2992401; priceUsd 0.006232 at 2026-09-03T03:50:00Z", class: verified, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-5], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344", class: verified, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-3, R-10, R-11], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0xc3a873867C79b234A5179BeC2899846376258BeD", class: verified, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-5, R-12, R-19], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "https://www.crudecat.xyz/", class: verified, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-7, R-8, R-14], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-24, field: candidate, value: "crudecat | CRUDECAT | @crudecatcoin | https://www.crudecat.xyz/ — discovery token not in census 49", class: claim, observed_at: 2026-09-03T03:52:00Z, receipt_ids: [R-1, R-5, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: relationship, value: "Ticker collision: unverified lowercase crudecat 0xD869a966f7A502E156e19053A531dA2730c8Bf01 (72 holders) has a Uniswap v4 USO book; Solana pumpswap CRUDECAT R3vq9JycTx9um5Hab43o9K7jLDDNP9wWqHqtgDnpump is wrong-chain. Neither is 0xBD957…cF3e.", class: verified, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-15, R-21], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-26, field: "account.@crudecatcoin.role", value: project, class: claim, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: "account.@crudecatcoin.slug", value: crudecat, class: claim, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: taxonomy.secondary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-2, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-29, field: identity.repository, value: "NULL — GitHub search q=crudecat total_count 0; no repository URL on the site, X profile, or DexScreener this pass", class: claim, observed_at: 2026-09-03T03:51:00Z, receipt_ids: [R-7, R-8, R-20], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "DexScreener CRUDECAT/USO 24h volume $406k, liquidity $220k"
    summary: "Uniswap v3 pair 0xc3a873…8BeD volume.h24 406036.06 liquidity.usd 219757.12 fdv 6232232 marketCap 2992401."
    occurred_at: 2026-09-03T03:50:00Z
    observed_at: 2026-09-03T03:50:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-5]
  - id: EVT-2
    type: ct
    title: "@arcus_xyz put USO second on the spot leaderboard; @crudecatcoin replied as a USO memecoin"
    summary: "@arcus_xyz: NVDA $53.3M, USO $28M on Arcus spot. @crudecatcoin quote: tokenized oil USO is second-most-traded RWA; Crude Cat as a USO memecoin."
    occurred_at: 2026-09-02T19:37:32Z
    observed_at: 2026-09-03T03:49:00Z
    affected_fields: [activity.status, relationship]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-17]
  - id: EVT-3
    type: company
    title: "@crudecatcoin posted a USO airdrop to top 100 CRUDECAT holders"
    summary: "2026-08-25 post: top 100 $CRUDECAT holders airdropped $USO. Checker later named at airdrop.crudecat.xyz."
    occurred_at: 2026-08-25T23:13:34Z
    observed_at: 2026-09-03T03:49:00Z
    affected_fields: [communications.status, activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-18]
  - id: EVT-4
    type: onchain
    title: "Circus pad minted Crude Cat / CRUDECAT"
    summary: "Tx 0x3e83f90b…7f5d from 0x2F849d…4729 at 2026-07-25T23:12:52Z to 0xb7fA…cb00; CREATE3 helper then CircusQuoteTokenV3 0xBD957…cF3e."
    occurred_at: 2026-07-25T23:12:52Z
    observed_at: 2026-09-03T03:47:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4]
  - id: EVT-5
    type: onchain
    title: "Uniswap v3 CRUDECAT/USO 1% pool created"
    summary: "Pool 0xc3a873…8BeD created by UniswapV3Factory in tx 0x75dd551e…a9f3 at 2026-07-25T23:26:11Z (swapNativeInput). DexScreener pairCreatedAt matches."
    occurred_at: 2026-07-25T23:26:11Z
    observed_at: 2026-09-03T03:47:00Z
    affected_fields: [deployment.address, product.mechanism, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-12, R-19, R-5]
  - id: EVT-6
    type: company
    title: "@crudecatcoin pinned CA, site, and Telegram"
    summary: "2026-08-05 pinned: CA 0xBD957Cc9f1e94617792F37bC40f2F299e78AcF3e, x.com/crudecatcoin, www.crudecat.xyz, t.me/crudecat."
    occurred_at: 2026-08-05T19:15:56Z
    observed_at: 2026-09-03T03:48:00Z
    affected_fields: [identity.handle, identity.domain, communications.status]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-8]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0xBD957…cF3e Crude Cat / CRUDECAT", url: "https://robinhoodchain.blockscout.com/address/0xBD957Cc9f1e94617792F37bC40f2F299e78AcF3e", published_at: null, accessed_at: 2026-09-03T03:46:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24], excerpt: "api/v2/tokens: address_hash 0xBD957Cc9f1e94617792F37bC40f2F299e78AcF3e name Crude Cat symbol CRUDECAT decimals 18 total_supply 1e27 holders_count 7931 type ERC-20. api/v2/addresses: is_contract true is_verified true name CircusQuoteTokenV3 proxy_type null creator_address_hash 0x673c82AC17660D67C31c62E23AB2b68812891532 creation_transaction_hash 0x3e83f90b…7f5d." }
  - { id: R-2, publisher: Blockscout, title: "CircusQuoteTokenV3 verified source", url: "https://robinhoodchain.blockscout.com/address/0xBD957Cc9f1e94617792F37bC40f2F299e78AcF3e?tab=contract", published_at: null, accessed_at: 2026-09-03T03:46:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-14, CLM-28], excerpt: "ContractName CircusQuoteTokenV3 compiler v0.8.35+commit.47b9dedd is_partially_verified true file_path src/launchpad/CircusQuoteTokenV3.sol verified_at 2026-07-30T04:02:11Z. Comment: Fixed-supply launch token for STOCK-QUOTED launches; quote asset is a tokenized stock; graduates into a TOKEN/STOCK pool. constructor launchpad 0xb7fA…cb00 ctoManager 0x7D687d…463a metadataController 0x74D4b7…BE8F." }
  - { id: R-3, publisher: Robinhood Chain RPC, title: "eth_getCode and eth_call on CRUDECAT, USO, pair", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-13, CLM-14, CLM-15, CLM-16, CLM-17, CLM-21, CLM-22], excerpt: "eth_blockNumber 0x32a6afa (53111546). Token code 5641 B. name Crude Cat symbol CRUDECAT decimals 18 totalSupply 1e27 launchpad 0xb7fA26c6…cb00 creator 0x2F849d43…4729 unlocked true version v3. owner/factory revert. Pair token0 USO token1 CRUDECAT fee 10000 factory 0x1f7d7550…2EfA. USO name United States Oil Fund • Robinhood Token." }
  - { id: R-4, publisher: Blockscout, title: "create tx 0x3e83f90b…7f5d", url: "https://robinhoodchain.blockscout.com/tx/0x3e83f90b36af50fdaeafef4a188a3390adf1b583a3b62f921f88ae85e1cb7f5d", published_at: 2026-07-25T23:12:52Z, accessed_at: 2026-09-03T03:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-13, CLM-16, EVT-4], excerpt: "timestamp 2026-07-25T23:12:52.000000Z status ok block 19395214 from 0x2F849d43968232C2A747Be4566C6a258218b4729 (is_contract false) to ERC1967Proxy 0xb7fA26c6fcB8801cAbc538B82A6e80Ae1C43cb00 method 0x4a221c46. Internal create2 helper 0x673c82…1532 then create CircusQuoteTokenV3 0xBD957…cF3e. Transfers: 27.3e18 USO in; 1e27 CRUDECAT mint; 6.007e26 CRUDECAT to creator." }
  - { id: R-5, publisher: DexScreener, title: "CRUDECAT/USO Uniswap v3 pair", url: "https://api.dexscreener.com/latest/dex/pairs/robinhood/0xc3a873867C79b234A5179BeC2899846376258BeD", published_at: null, accessed_at: 2026-09-03T03:50:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-10, CLM-15, CLM-17, CLM-20, CLM-22, CLM-24, EVT-1, EVT-5], excerpt: "chainId robinhood dexId uniswap labels v3 pairAddress 0xc3a873867C79b234A5179BeC2899846376258BeD base Crude Cat / CRUDECAT 0xBD957Cc9…cF3e quote United States Oil Fund • Robinhood Token / USO 0xa30FA36D…D344 liquidity.usd 219757.12 volume.h24 406036.06 fdv 6232232 marketCap 2992401 priceUsd 0.006232 pairCreatedAt 1785021971000. info.websites https://www.crudecat.xyz/ socials x.com/crudecatcoin t.me/crudecat." }
  - { id: R-6, publisher: GeckoTerminal, title: "USO/CRUDECAT Uniswap V3 pool page", url: "https://www.geckoterminal.com/robinhood/pools/0xc3a873867c79b234a5179bec2899846376258bed", published_at: null, accessed_at: 2026-09-03T03:50:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-11, EVT-1], excerpt: "og:title USO/CRUDECAT - United States Oil Fund • Robinhood Token Price on Uniswap V3 (Robinhood) with 1% Fee. og:description: price today is $141.88 with a 24-hour trading volume of $344.25K. Contract 0xa30fa36db767ad9ed3f7a60fc79526fb4d56d344 with $211.67K in liquidity. JSON API /tokens and /pools returned 429 this pass." }
  - { id: R-7, publisher: Crude Cat, title: "crudecat.xyz", url: "https://www.crudecat.xyz/", published_at: null, accessed_at: 2026-09-03T03:47:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-8, CLM-19, CLM-23, CLM-24, CLM-26, CLM-27, CLM-29], excerpt: "title Crude Cat ($CRUDECAT). CA bar 0xbd957cc9f1e94617792f37bc40f2f299e78acf3e. Chart https://dexscreener.com/robinhood/0xc3a873867c79b234a5179bec2899846376258bed. Footer X https://x.com/crudecatcoin Telegram https://t.me/crudecat. Fine print: memecoin; tokens give no actual claim to oil other than what is in the liquidity pool. Buy path FOMO." }
  - { id: R-8, publisher: "@crudecatcoin", title: "X profile and pinned CA post", url: "https://x.com/crudecatcoin/status/2085082394546098682", published_at: 2026-08-05T19:15:56Z, accessed_at: 2026-09-03T03:48:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-23, CLM-26, CLM-27, CLM-29, EVT-6], excerpt: "Profile: Crude Cat @crudecatcoin. Bio Backed by oil. Website crudecat.xyz. Location Robinhood Chain. Joined July 2026. 1378 followers. Pinned 2026-08-05: CRUDE CAT DETAILS CA: 0xBD957Cc9f1e94617792F37bC40f2F299e78AcF3e Official X: https://x.com/crudecatcoin Website: https://www.crudecat.xyz/ Telegram: https://t.me/crudecat." }
  - { id: R-9, publisher: Telegram, title: "t.me/crudecat", url: "https://t.me/crudecat", published_at: null, accessed_at: 2026-09-03T03:47:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-8], excerpt: "HTTP 200. og:title Crude Cat. og:description Just a Crude Cat bringing oil ownership to all. CA: X: https://x.com/crudecatcoin. tgme_page_extra 343 members, 30 online. No 0xBD957 contract string in the public preview HTML this pass." }
  - { id: R-10, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T03:48:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "HTTP 200. assets length 194. USO row: tokenSymbol USO tokenName United States Oil Fund • Robinhood Token deployments contractAddress 0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344 chainId 4663 networkName Robinhood Chain status ASSET_STATUS_ACTIVE." }
  - { id: R-11, publisher: Blockscout, title: "Token 0xa30FA3…D344 USO", url: "https://robinhoodchain.blockscout.com/address/0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344", published_at: null, accessed_at: 2026-09-03T03:46:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "Token name United States Oil Fund • Robinhood Token symbol USO decimals 18 total_supply 8664466000000000000000 holders_count 5326. Address name BeaconProxy is_verified true proxy_type eip1967_beacon implementations Stock 0xb35490d6f9163DE4F80d88dc75c3516eb64C5aE2." }
  - { id: R-12, publisher: Blockscout, title: "Address 0xc3a873…8BeD UniswapV3Pool", url: "https://robinhoodchain.blockscout.com/address/0xc3a873867C79b234A5179BeC2899846376258BeD", published_at: null, accessed_at: 2026-09-03T03:46:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-15, CLM-22, EVT-5], excerpt: "hash 0xc3a873867C79b234A5179BeC2899846376258BeD name UniswapV3Pool is_contract true is_verified true creator_address_hash 0x1f7d7550B1b028f7571E69A784071F0205FD2EfA creation_transaction_hash 0x75dd551e43da2d714935b33205daa75a2f8a04c7381e888a698c57933823a9f3." }
  - { id: R-13, publisher: Blockscout, title: "Address 0xb7fA…cb00 Circus ERC1967Proxy", url: "https://robinhoodchain.blockscout.com/address/0xb7fA26c6fcB8801cAbc538B82A6e80Ae1C43cb00", published_at: null, accessed_at: 2026-09-03T03:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-16], excerpt: "hash 0xb7fA26c6fcB8801cAbc538B82A6e80Ae1C43cb00 name ERC1967Proxy is_contract true is_verified true proxy_type eip1967 implementations 0x822E175C1ae12166A0Ea3299d083Da48E6C42B96 (is_verified false). creator_address_hash 0x90Ae1f7Ded5B00599bF6BFdea6A1EF1f05FA0681." }
  - { id: R-14, publisher: Vercel blob, title: "CRUDECAT tokenURI metadata JSON", url: "https://ocssl3scspw444n4.public.blob.vercel-storage.com/coins/meta/9fde7ee8-9f24-4bfd-aa3d-a168278da9b2.json", published_at: null, accessed_at: 2026-09-03T03:48:00Z, kind: other, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-23], excerpt: "name Crude Cat symbol CRUDECAT description The famous orange tabby cat wearing a ghutra is on a mission to give everyone ownership of oil. twitter https://x.com/crudecatcoin telegram https://t.me/crudecat website https://crudecat.xyz" }
  - { id: R-15, publisher: Blockscout, title: "Token 0xD869…Bf01 lowercase crudecat", url: "https://robinhoodchain.blockscout.com/address/0xD869a966f7A502E156e19053A531dA2730c8Bf01", published_at: null, accessed_at: 2026-09-03T03:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-25], excerpt: "token name crudecat symbol crudecat decimals 18 total_supply 1e27 holders_count 72. Address is_verified false creator_address_hash 0x6544AF3524a8d9135Eb5765CECE6E514d85D615b creation_transaction_hash 0x48ffc9d51ddd50e3c842f6a5d268fc7c6f103f477ad0c221a63401fe975b6a31." }
  - { id: R-16, publisher: DexScreener, title: "Search OILCOIN GASOLINU MICROWAVE on robinhood", url: "https://api.dexscreener.com/latest/dex/search?q=OILCOIN", published_at: null, accessed_at: 2026-09-03T03:47:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9], excerpt: "OILCOIN 0x9CB19d6e3F87543826E50F61FF4C5A6cdf3B1E18 / USO liq 41668.51 vol 855184.28. GASOLINU 0x1e6EA1e89151cDc8443968Bf047cfa3177181e18 / USO liq 132871.11 vol 538712.78. MICROWAVE 0x79E1B7E59054fd4E18Ad7C71E5781162BF28888b / USO liq 40917.63 vol 1302733.26. None share 0xBD957…cF3e." }
  - { id: R-17, publisher: "@crudecatcoin", title: "Quote of @arcus_xyz USO leaderboard", url: "https://x.com/crudecatcoin/status/2095234688843465066", published_at: 2026-09-02T19:37:32Z, accessed_at: 2026-09-03T03:49:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-2], excerpt: "OIL OIL OIL Tokenized oil ($USO) is the second most traded RWA on Arcus & Robinhood chain. As the leading USO memecoin, Crude Cats are happy to contribute to the adoption of onchain oil. Quoted @arcus_xyz 2095233216114466939: NVDA $53.3M, USO $28M on Arcus spot." }
  - { id: R-18, publisher: "@crudecatcoin", title: "USO airdrop to top 100 holders", url: "https://x.com/crudecatcoin/status/2092389953795674219", published_at: 2026-08-25T23:13:34Z, accessed_at: 2026-09-03T03:49:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-3], excerpt: "It's raining oil! The top 100 $CRUDECAT holders have just been airdropped some freshly pumped $USO oil. Follow-up 2026-08-28 named checker https://airdrop.crudecat.xyz/ (no wallet connection required)." }
  - { id: R-19, publisher: Blockscout, title: "Pool create tx 0x75dd551e…a9f3", url: "https://robinhoodchain.blockscout.com/tx/0x75dd551e43da2d714935b33205daa75a2f8a04c7381e888a698c57933823a9f3", published_at: 2026-07-25T23:26:11Z, accessed_at: 2026-09-03T03:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22, EVT-5], excerpt: "timestamp 2026-07-25T23:26:11.000000Z status ok block 19403171 method swapNativeInput from 0x1145f8585Dca037B0117ef0FcaA7b005e5e644a5 to ERC1967Proxy 0x4262efBd176F02824af27010bEa218429c33c7E8. Pool address creator is UniswapV3Factory. meta token 0xBD957Cc9…cF3e." }
  - { id: R-20, publisher: GitHub, title: "Search repositories q=crudecat", url: "https://api.github.com/search/repositories?q=crudecat", published_at: null, accessed_at: 2026-09-03T03:51:00Z, kind: repository, authority: independent, authenticity: confirmed, supports: [CLM-29], excerpt: "HTTP 200 total_count 0 items []." }
  - { id: R-21, publisher: DexScreener, title: "Search CRUDECAT extra pairs", url: "https://api.dexscreener.com/latest/dex/search?q=CRUDECAT", published_at: null, accessed_at: 2026-09-03T03:45:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-25], excerpt: "13 pairs. Robinhood Uniswap v4 pair 0x544cd250…157c base 0xD869a966f7A502E156e19053A531dA2730c8Bf01 name/symbol crudecat quote USO liquidity.usd 5986.34. Solana pumpswap pair DmYkjiqEq5tZrFtChY7X3uJvSzwEFgKSW4QLwA4ac6ky base R3vq9JycTx9um5Hab43o9K7jLDDNP9wWqHqtgDnpump Crude Cat / CRUDECAT." }

gaps:
  - { priority: P0, question: "What is method 0x4a221c46 on Circus launchpad 0xb7fA…cb00, and which quote-asset argument selected USO?", checked: "create tx decoded_input null; pad implementation 0x822E175C…42B96 is_verified false; constructor args on the token name Crude Cat / CRUDECAT / launchpad / 1e27, 2026-09-03", next: "decode 0x4a221c46 from a verified CircusLaunchpad source if the implementation is later verified" }
  - { priority: P1, question: "Does Gecko JSON later return pool volume/reserve that can be cited beside DexScreener 406036.06 / 219757.12?", checked: "api.geckoterminal.com token and pool endpoints HTTP 429; HTML meta volume $344.25K liquidity $211.67K, 2026-09-03", next: "retry api.geckoterminal.com/api/v2/networks/robinhood/pools/0xc3a873…8BeD with Mozilla UA" }
  - { priority: P1, question: "Does verified CircusQuoteTokenV3 leave a live privileged path via ctoManager or metadataController after graduation?", checked: "unlocked() true; creatorNonce 0; ctoManager and metadataController are ERC1967Proxy; source comments community takeover / protocol metadata moderation, 2026-09-03", next: "read CtoManager and MetadataController implementations when verified" }
  - { priority: P2, question: "Was the 2026-08-25 USO airdrop to top-100 holders reproduced on 4663?", checked: "Company post and airdrop.crudecat.xyz named; transfers not enumerated this pass, 2026-09-03", next: "Blockscout token transfers of USO to the published holder set around 2026-08-25T23:13Z" }
---

# CRUDECAT — research packet

## What it is

A one-billion-supply ERC-20 cloned by the Circus stock-quoted launchpad and graduated into a Uniswap v3 CRUDECAT/USO book. Traders buy and sell Crude Cat (CRUDECAT) against the USO Stock Token rail. Site crudecat.xyz and @crudecatcoin publish the same CA. [R-1] [R-3] [R-5] [R-7] [R-8]

Themes: memecoin, stock-paired:USO, rwa, graduation

## Why it matters

The CRUDECAT/USO Uniswap v3 book printed about $406k of 24h volume on DexScreener at collection, with the quote token the USO rail in GET /rhj/assets. @arcus_xyz posted USO as the second Arcus spot asset; @crudecatcoin replied as a USO memecoin. Distinct from OILCOIN, GASOLINU, and MICROWAVE, which are other USO-paired names. [R-5] [R-10] [R-16] [R-17]

## What could go wrong

USD liquidity on the CRUDECAT/USO book counts both sides; the quote side is USO, not USDG. Gecko HTML meta ($344k vol / $212k liq) disagrees with DexScreener ($406k / $220k). A lowercase unverified crudecat and a Solana CRUDECAT share the ticker. Circus ctoManager can reassign creator(). [R-5] [R-6] [R-15] [R-21] [R-2]

## Product and mechanics

Circus launchpad 0xb7fA…cb00 (ERC1967Proxy) created CircusQuoteTokenV3 via CREATE3 helper 0x673c82…1532 in tx 0x3e83f90b…7f5d at 2026-07-25T23:12:52Z from EOA 0x2F849d…4729. RPC name Crude Cat / CRUDECAT supply 1e9*1e18, launchpad() that pad, unlocked() true, version v3. [verified R-3 R-4]

Verified source: stock-quoted lane; graduation is a TOKEN/STOCK pool. Live venue is Uniswap v3 factory 0x1f7d7550…2EfA pool 0xc3a873…8BeD fee 10000, token0 USO token1 CRUDECAT, created 2026-07-25T23:26:11Z. Secondary CRUDECAT/USDG and CRUDECAT/ETH Uniswap v4 books on DexScreener have far less liquidity than the USO v3 book. [verified R-2 R-3 R-5 R-12]

## Control and security

token owner() reverts. creator() is EOA 0x2F849d…4729 with creatorNonce 0. ctoManager 0x7D687d…463a and metadataController 0x74D4b7…BE8F are constructor immutables (ERC1967Proxy). Pad implementation 0x822E175C…42B96 is unverified. [verified R-3 R-13]

CircusQuoteTokenV3 is partially verified on Blockscout (src/launchpad/CircusQuoteTokenV3.sol, compiler v0.8.35). No audit report URL was located this pass. [verified R-2] [unknown]

## Team and provenance

Official domain https://www.crudecat.xyz/ publishes CA 0xBD957…cF3e, the DexScreener pair, @crudecatcoin, and t.me/crudecat. @crudecatcoin profile website is crudecat.xyz; the 2026-08-05 pinned post repeats the CA. tokenURI JSON matches. No GitHub repository this pass. [verified R-7 R-8 R-14]

USO is the Robinhood Stock Token rail, not a Crude Cat product. Circus is the pad, not the token team. [verified R-10 R-13]

## Economics and activity

CRUDECAT/USO Uniswap v3 24h volume is 406036.06 USD and liquidity.usd is 219757.12 at 2026-09-03T03:50:00Z from DexScreener. marketCap 2992401, fdv 6232232, priceUsd 0.006232, txns.h24 439 buys / 471 sells. Blockscout holders_count 7931. Pair created 2026-07-25T23:26:11Z. [claim R-1 R-5]

Gecko pool HTML meta: 24h volume $344.25K, liquidity $211.67K. Gecko JSON API returned 429 this pass. Assignment lead of liq ~$235,440 / vol ~$397,992 is the same pair in a different window; live DexScreener is $219.8k / $406.0k. [claim R-5 R-6]

## Material risks

- Pool USD reserve is CRUDECAT plus USO, not a USDG or WETH backstop. [claim R-5]
- Gecko HTML and DexScreener 24h volume disagree this pass. [claim R-5 R-6]
- Ticker collision: unverified lowercase crudecat 0xD869…Bf01 and Solana CRUDECAT. [verified R-15 R-21]
- ctoManager may reassign creator(); pad implementation unverified. [verified R-2 R-13]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/source/create tx/pair/USO/pad, RPC name/symbol/launchpad/unlocked/pair fee, DexScreener pair and oil-ticker search, crudecat.xyz, @crudecatcoin profile plus pinned CA, Telegram preview, tokenURI JSON, /rhj/assets USO row, Gecko HTML meta, GitHub search were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-3 R-5 R-7 R-10]
- Numbers: 406036.06 is the DexScreener CRUDECAT/USO v3 24h volume, not Gecko HTML $344.25K. Liquidity 219757.12 is that pool. Holders 7931 is Blockscout. DexScreener marketCap 2992401 is not fdv 6232232. [claim R-1 R-5 R-6]
- Adversarial: the strongest contrary reading is that CRUDECAT is OILCOIN/GASOLINU/MICROWAVE or the USO issuer. Those three have different CAs; USO 0xa30FA3…D344 is the /rhj/assets rail, not the memecoin. [inference R-10 R-16]

## Operations log

- Base: assignment `base_sha` 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no crudecat / CRUDECAT / Crude Cat / 0xBD957…cF3e. content/dependencies/stock-tokens.yaml has USO at 0xa30FA3…D344 as a rail.
- Explorer: Blockscout api/v2 token, address, smart-contract, create tx 0x3e83…7f5d internals/transfers, pair, USO, pad, lowercase clone. RPC eth_getCode/eth_call with Mozilla/Chrome UA at block 53111546.
- Aggregators: DexScreener latest/dex/pairs, latest/dex/tokens, search CRUDECAT/OILCOIN/GASOLINU/MICROWAVE. Gecko JSON 429; Gecko HTML pool meta used instead.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 USO row matching the pair quote.
- Social: X user crudecatcoin; from:crudecatcoin CA post; keyword CRUDECAT/USO; t.me/crudecat preview.
- Site: https://www.crudecat.xyz/ and tokenURI JSON.
- Failed: Gecko JSON API 429; create-tx method 0x4a221c46 decoded_input null; pad implementation unverified; GitHub q=crudecat total_count 0.
- Time: collection 2026-09-03T03:45Z–2026-09-03T03:52Z.
