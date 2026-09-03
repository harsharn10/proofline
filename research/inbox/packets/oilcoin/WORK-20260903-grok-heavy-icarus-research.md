---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: oilcoin
name: OILCOIN
packet_tier: seed
as_of: 2026-09-03T04:12:00Z
prior_packet: null
supersedes: null
owned_slugs: [oilcoin]
allowed_paths:
  - research/inbox/packets/oilcoin/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: OilCoin
  aliases: [OILCOIN]
  symbols: [OILCOIN]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites empty this pass; Gecko JSON 429; tokenURI ipfs://bafkreidpou4mf2cwo2brzugykvlpu6abbk7sagnrrghlod6s3nz3lav22q returned 403 from ipfs.io and dweb.link; app.long.xyz token page 403"
  official_handle: "NULL — DexScreener info.socials empty; X user search for OILCOIN / OilCoin / OilCoin robinhood returned unrelated handles (@Oilcoin, @OilCoinProject, @theoilcoin, @oilcoinUSD1, @oilonrobinhood with CA 0xaf99e758… not this token); do not invent a project handle"
  repository: "NULL — GitHub search q=oilcoin returned 13 historical/unrelated repos; none cite 0x9CB19d6e…1E18, DexScreener, or Robinhood Chain this pass"
  possible_matches:
    - slug: long
      signals: [shared-deployer]
      contrary_signals:
        - "Census LONG is the stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "OILCOIN is the ERC-20 at 0x9CB19d6e…1E18 created through that launcher; entity_kind token, not protocol"
        - "No shared handle; this token has no official handle this pass"
    - slug: crudecat
      signals: [other]
      contrary_signals:
        - "Packed CRUDECAT is CircusQuoteTokenV3 0xBD957Cc9…cF3e from Circus pad 0xb7fA…cb00, Uniswap v3 CRUDECAT/USO 0xc3a873…8BeD"
        - "OILCOIN is DopplerERC20V1 0x9CB19d6e…1E18 via LongLauncher into Uniswap v4 poolId 0x413dc2a6…fbe1"
        - "No shared domain, handle, or reproduced address"
    - slug: icoin
      signals: [shared-deployer]
      contrary_signals:
        - "Packed ICOIN is 0x5d6EF…1e18 paired to AAPL 0xaF3D…93f9 / @iCoinRH"
        - "OILCOIN is 0x9CB19d6e…1E18 paired to the USO rail 0xa30FA3…D344"
        - "No shared handle or reproduced address"
    - slug: aaplcat
      signals: [shared-deployer]
      contrary_signals:
        - "Packed AAPLCAT is 0x73A9999f…1e18 paired to AAPL via LongLauncher / @AAPLCAT_"
        - "OILCOIN is 0x9CB19d6e…1E18 paired to USO"
        - "No shared domain, handle, or reproduced address"
    - slug: bankr
      signals: [other]
      contrary_signals:
        - "Census Bankr is bankr.bot / @bankrbot, an agent runtime"
        - "Gecko HTML titles the OILCOIN/USO pool Price on Bankr (Robinhood), the same dex id it uses for other Doppler Uniswap v4 books"
        - "Creation tx 0x2f51556a…9979d calls LongLauncher.create, not a Bankr agent launch"
        - "No shared handle or domain"
    - slug: artificial-inu
      signals: [shared-deployer]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "OILCOIN is 0x9CB19d6e…1E18 paired to USO"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x9CB19d6e…1E18 is an EIP-1167 DopplerERC20V1 clone with non-empty code on 4663; LongLauncher.create at 2026-09-02T18:45:10Z minted OilCoin / OILCOIN into Uniswap v4 poolId 0x413dc2a6…fbe1 quoted against United States Oil Fund • Robinhood Token USO 0xa30FA3…D344 in GET /rhj/assets. USO is the quote rail. Distinct from packed CRUDECAT and from GASOLINU 0x1e6EA1…1e18. No official site or handle this pass. [R-1] [R-4] [R-5] [R-6] [R-10]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links: []

deployments:
  - label: OILCOIN token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0x9CB19d6e3F87543826E50F61FF4C5A6cdf3B1E18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:09:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-1, R-5, R-6]
  - label: DopplerERC20V1Factory (create tokenFactory)
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:10:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-6, R-13]
  - label: DopplerERC20V1 implementation
    role: implementation
    address:
      value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:09:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-6, R-13]
  - label: LongLauncher (create caller)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:10:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-6, R-14]
  - label: USO Stock Token rail (pair quote)
    role: token
    address:
      value: "0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:10:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-3, R-5, R-10, R-11]
  - label: Airlock (token owner)
    role: other
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:10:00Z
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-4, R-6]

metrics:
  - { kind: volume_24h, value: 855733.74, currency: USD, as_of: 2026-09-03T04:08:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/pairs/robinhood/0x413dc2a61b3684cfe76522d39027cf486a71535bd0e538243be95aed87e2fbe1 volume.h24 (OILCOIN/USO Uniswap v4, not an all-pools figure)", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 42823.7, currency: USD, as_of: 2026-09-03T04:08:00Z, window: point, method: "api.dexscreener.com/latest/dex/pairs/robinhood/0x413dc2a61b3684cfe76522d39027cf486a71535bd0e538243be95aed87e2fbe1 liquidity.usd (OILCOIN/USO pool, not an all-pools figure)", class: claim, receipt_ids: [R-7] }
  - { kind: market_cap, value: 46321, currency: USD, as_of: 2026-09-03T04:08:00Z, window: point, method: "api.dexscreener.com/latest/dex/pairs/robinhood/0x413dc2a61b3684cfe76522d39027cf486a71535bd0e538243be95aed87e2fbe1 marketCap (fdv 46321 on the same pair)", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 145, currency: null, as_of: 2026-09-03T04:09:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x9CB19d6e3F87543826E50F61FF4C5A6cdf3B1E18 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:10:00Z, receipt_ids: [R-6], result: "rpc.mainnet.chain.robinhood.com eth_blockNumber 0x32a9a4b (53123659). Token 0x9CB19d6e…1E18 eth_getCode 44 bytes EIP-1167 prefix 3d3d3d3d363d3d37363d73 implementation 0x3be8b97f…c599. name OilCoin, symbol OILCOIN, decimals 18, totalSupply 1e27. owner() Airlock 0xeb7c0347…0862. factory() reverts. tokenURI() ipfs://bafkreidpou4mf2cwo2brzugykvlpu6abbk7sagnrrghlod6s3nz3lav22q. USO name United States Oil Fund • Robinhood Token. Airlock getAssetData word0 numeraire 0xa30fa36d…d344; word1/word2 0xdead; word5 token 0x9cb19d6e…1e18. Airlock owner() 0x21e2ce70…7a66. Factory code 1912 B. Impl code 13927 B. Launcher code 5826 B. Create-from 0xd53B0e13…0aBA code 0x." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:11:00Z, receipt_ids: [R-1, R-4, R-11, R-13, R-14], result: "Blockscout api/v2 token 0x9CB19d6e…1E18 name OilCoin symbol OILCOIN holders_count 145 total_supply 1e27. Address is_contract true is_verified true proxy_type eip1167 implementation DopplerERC20V1 0x3Be8…C599; creator_address_hash and creation_transaction_hash null this pass. Create tx 0x2f51556a…9979d 2026-09-02T18:45:10Z block 52796163 from EOA 0xd53B0e13…0aBA to LongLauncher method create. decoded numeraire 0xa30FA3…D344 tokenFactory 0x1B37…b69a factory bytes name OilCoin symbol OILCOIN. LaunchCreated normalizedTicker OILCOIN. PoolManager Initialize id 0x413dc2a6…fbe1 currency0 OILCOIN currency1 USO fee 8388608 hooks DopplerHookInitializer 0x4e346895…a544. Mint 1e27 to Airlock." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T04:08:00Z, receipt_ids: [R-7, R-8, R-16], result: "DexScreener latest/dex/tokens/0x9CB19d6e…1E18: 9 robinhood uniswap pairs; top OILCOIN/USO v4 0x413dc2a6…fbe1 quote 0xa30FA3…D344 United States Oil Fund • Robinhood Token / USO liquidity.usd 42823.7 volume.h24 855733.74 fdv/marketCap 46321 priceUsd 0.00004632 pairCreatedAt 1788374710000 (2026-09-02T18:45:10Z) txns.h24 buys 7602 sells 7470 info.websites None info.socials None. Search also returns ticker clones OILCOIN 0x0F9D2c46…1E18/USAR, Oilcoin/OIL 0x9D438Ee3…1e18/USO, and GASOLINU 0x1e6EA1…1e18/USO. None share 0x9CB19d6e…1E18 except this book's own ETH/USDG legs." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T04:11:00Z, receipt_ids: [R-10], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one USO row tokenSymbol USO tokenName United States Oil Fund • Robinhood Token deployments contractAddress 0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344 chainId 4663 status ASSET_STATUS_ACTIVE. tokenSymbol/tokenName scan for OILCOIN and OilCoin returned 0 hits." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T04:11:00Z, receipt_ids: [R-9], result: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x9CB19d6e…1E18 and pools/0x413dc2a6…fbe1 returned HTTP 429 this pass (Mozilla UA). www.geckoterminal.com/robinhood/pools/0x413dc2a6…fbe1 og:title OILCOIN/USO - OilCoin Price on Bankr (Robinhood); og:description price today is $0.00004349 with a 24-hour trading volume of $839.03K; contract 0x9cb19d6e…1e18 with $40,657.67 in liquidity." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "DopplerERC20V1 EIP-1167 clone; LongLauncher.create minted 1e9*1e18 OilCoin/OILCOIN into a Uniswap v4 pool quoted against USO 0xa30FA3…D344; Airlock getAssetData numeraire is that USO; LP addresses in getAssetData include 0xdead", class: verified, observed_at: 2026-09-03T04:11:00Z, receipt_ids: [R-1, R-4, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "OilCoin", class: verified, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-1, R-4, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: OILCOIN, class: verified, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-1, R-4, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x9CB19d6e3F87543826E50F61FF4C5A6cdf3B1E18", class: verified, observed_at: 2026-09-03T04:11:00Z, receipt_ids: [R-1, R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x22e99278308B393ea1260859B181AD7E78f5eeED", class: verified, observed_at: 2026-09-03T04:11:00Z, receipt_ids: [R-4, R-6, R-14], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:11:00Z, receipt_ids: [R-1, R-4, R-6, R-7], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-7, R-10, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle; DexScreener info.socials empty; X user search returned unrelated handles; flag unconfirmed-official on any later claim", class: claim, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-7, R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote USO 0xa30FA3…D344 is the United States Oil Fund • Robinhood Token rail in GET /rhj/assets (194 assets, one USO row, chainId 4663). Distinct from packed CRUDECAT 0xBD957Cc9…cF3e, GASOLINU 0x1e6EA1…1e18, MICROWAVE 0x79E1B7…888b, Oilcoin/OIL 0x9D438Ee3…1e18, and ticker-clone OILCOIN 0x0F9D2c46…1E18/USAR.", class: verified, observed_at: 2026-09-03T04:11:00Z, receipt_ids: [R-7, R-8, R-10, R-11, R-16], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "OILCOIN/USO Uniswap v4 24h volume 855733.74 USD and liquidity.usd 42823.7 at 2026-09-03T04:08:00Z (DexScreener pair slice)", class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "Gecko pool HTML meta 24h volume $839.03K liquidity $40,657.67 at 2026-09-03T04:11:00Z (Gecko JSON API 429 this pass)", class: claim, observed_at: 2026-09-03T04:11:00Z, receipt_ids: [R-9], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 145, class: verified, observed_at: 2026-09-03T04:09:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() Airlock 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862; Airlock owner() 0x21E2ce70511e4FE542a97708e89520471DAa7A66; create-tx from 0xd53B0e131A807218058D00aE0B985F89dF300aBA (EOA, no code); factory() reverts", class: verified, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-4, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "create-tx Lock beneficiaries 5% 0x21E2ce70…7A66 (Airlock owner) and 95% 0x33Eb5e5dD655F70d61834508060eA899AF53bbF4; 95% is not the create-from", class: verified, observed_at: 2026-09-03T04:11:00Z, receipt_ids: [R-4], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is USO rail 0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344; venue is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 poolId 0x413dc2a6…fbe1 fee 8388608 hooks DopplerHookInitializer 0x4e346895…a544", class: verified, observed_at: 2026-09-03T04:11:00Z, receipt_ids: [R-4, R-6, R-7], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash was empty on the token page; LaunchCreated and create-tx name LongLauncher 0x22e9…eeED as the pad, not Pons, Circus, PAIR, NOXA, or hood.fun", class: verified, observed_at: 2026-09-03T04:11:00Z, receipt_ids: [R-1, R-4, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-6, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on DexScreener, Blockscout, Gecko HTML, GitHub search, or X search this pass", class: unknown, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "No official site or handle this pass. @xbtscout posted CA 0x9cb19d6e…1e18 as launched via longxyz at 2026-09-02T18:48:04Z. Flag unconfirmed-official.", class: claim, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-7, R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "DexScreener fdv 46321; marketCap 46321; priceUsd 0.00004632 at 2026-09-03T04:08:00Z", class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344", class: verified, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-3, R-6, R-10, R-11], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", class: verified, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-1, R-6, R-13], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "NULL — DexScreener info.websites empty; Gecko JSON 429; tokenURI IPFS 403 this pass", class: claim, observed_at: 2026-09-03T04:11:00Z, receipt_ids: [R-7, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: candidate, value: "oilcoin | OILCOIN | NULL | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: relationship, value: "Ticker collision: OILCOIN 0x0F9D2c465A30B95e85463e90B90A767B8b681E18/USAR; Oilcoin symbol OIL 0x9D438Ee387cB9001518C279cB0D56295c4D91e18/USO; @oilonrobinhood bio CA 0xaf99e75866dbfc3c40bf71a4263ec8445e2354d3 (DexScreener 0 pairs this pass); XPD 0x09eec9cf…69b4 posted as First OilCoin from 2014. None is 0x9CB19d6e…1E18.", class: verified, observed_at: 2026-09-03T04:11:00Z, receipt_ids: [R-8, R-16, R-17], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-26, field: taxonomy.secondary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: identity.repository, value: "NULL — GitHub search q=oilcoin total_count 13 unrelated historical repos; none cite this CA", class: claim, observed_at: 2026-09-03T04:11:00Z, receipt_ids: [R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: relationship, value: "Gecko HTML titles Bankr (Robinhood) on the OILCOIN/USO pool; DexScreener dexId uniswap v4; creation path is LongLauncher.create. Do not merge OILCOIN into census bankr.", class: verified, observed_at: 2026-09-03T04:11:00Z, receipt_ids: [R-4, R-7, R-9], reproduction_ids: [REP-2, REP-3, REP-5], supersedes: null }
  - { id: CLM-29, field: deployment.address, value: "0x1B37D3a72082029c44B35B604Ea473617580b69a", class: verified, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-4, R-6, R-13], reproduction_ids: [REP-1, REP-2], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-10, CLM-11]
    material_effect: "Same OILCOIN/USO pool 0x413dc2a6…fbe1: DexScreener liquidity.usd 42823.7 vs Gecko HTML $40,657.67; 24h volume 855733.74 vs $839.03K. A card that collapses them would misstate the book."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "DexScreener OILCOIN/USO 24h volume $856k, liquidity $43k"
    summary: "Uniswap v4 pair 0x413dc2a6…fbe1 volume.h24 855733.74 liquidity.usd 42823.7 fdv/marketCap 46321."
    occurred_at: 2026-09-03T04:08:00Z
    observed_at: 2026-09-03T04:08:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7]
  - id: EVT-2
    type: onchain
    title: "LongLauncher.create minted OilCoin / OILCOIN against USO"
    summary: "Tx 0x2f51556a…9979d from 0xd53B0e13…0aBA at 2026-09-02T18:45:10Z; LaunchCreated ticker OILCOIN poolId 0x413dc2a6…fbe1."
    occurred_at: 2026-09-02T18:45:10Z
    observed_at: 2026-09-03T04:11:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4]
  - id: EVT-3
    type: ct
    title: "@xbtscout posted $OILCOIN launched via longxyz"
    summary: "@xbtscout: CA 0x9cb19d6e…1e18, called at $280.4k mcap / $107.1k liq / 324 holders, launched via longxyz."
    occurred_at: 2026-09-02T18:48:04Z
    observed_at: 2026-09-03T04:12:00Z
    affected_fields: [activity.status, relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-15]
  - id: EVT-4
    type: onchain
    title: "Gecko HTML OILCOIN/USO 24h volume $839k, liquidity $40.7k"
    summary: "Gecko pool page og:description $839.03K volume and $40,657.67 liquidity; JSON API 429 this pass."
    occurred_at: 2026-09-03T04:11:00Z
    observed_at: 2026-09-03T04:11:00Z
    affected_fields: [economics.metric]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-9]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x9CB19d6e…1E18 OilCoin / OILCOIN", url: "https://robinhoodchain.blockscout.com/address/0x9CB19d6e3F87543826E50F61FF4C5A6cdf3B1E18", published_at: null, accessed_at: 2026-09-03T04:09:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-22, CLM-24], excerpt: "api/v2/tokens: address_hash 0x9CB19d6e3F87543826E50F61FF4C5A6cdf3B1E18 name OilCoin symbol OILCOIN decimals 18 total_supply 1000000000000000000000000000 holders_count 145 type ERC-20. api/v2/addresses: is_contract true is_verified true proxy_type eip1167 implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599. creator_address_hash null creation_transaction_hash null this pass." }
  - { id: R-2, publisher: Blockscout, title: "DopplerERC20V1 0x3Be8…C599", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-03T04:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-22], excerpt: "api/v2 smart-contracts: name DopplerERC20V1 compiler_version v0.8.26+commit.8a97fa7a is_verified true is_partially_verified true file_path src/tokens/DopplerERC20V1.sol verified_at 2026-07-01T19:42:07Z." }
  - { id: R-3, publisher: Robinhood Chain RPC, title: "USO name/symbol and token code sizes", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "USO 0xa30FA36D…D344 eth_getCode 283 B. name() United States Oil Fund • Robinhood Token symbol() USO. Token 0x9CB19d6e…1E18 code 44 B." }
  - { id: R-4, publisher: Blockscout, title: "create tx 0x2f51556a…9979d", url: "https://robinhoodchain.blockscout.com/tx/0x2f51556a176472cf63234534ecbaa9040cda2809c7363a882e8d76f705c9979d", published_at: 2026-09-02T18:45:10Z, accessed_at: 2026-09-03T04:11:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-13, CLM-14, CLM-15, CLM-16, CLM-26, CLM-29, EVT-2], excerpt: "timestamp 2026-09-02T18:45:10.000000Z status ok block 52796163 from 0xd53B0e131A807218058D00aE0B985F89dF300aBA (is_contract false) to LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED method create. decoded numeraire 0xa30FA3…D344 tokenFactory 0x1B37…b69a factory bytes name OilCoin symbol OILCOIN. LaunchCreated normalizedTicker OILCOIN launcher 0xd53B0e13…0aBA. PoolManager Initialize id 0x413dc2a6…fbe1. Lock beneficiaries 5% 0x21E2ce70…7A66 95% 0x33Eb5e5d…bbF4. Mint 1e27 to Airlock." }
  - { id: R-5, publisher: DexScreener, title: "latest/dex/tokens OILCOIN", url: "https://api.dexscreener.com/latest/dex/tokens/0x9CB19d6e3F87543826E50F61FF4C5A6cdf3B1E18", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-4, CLM-6, CLM-17, CLM-24], excerpt: "9 robinhood uniswap pairs. Top pairAddress 0x413dc2a61b3684cfe76522d39027cf486a71535bd0e538243be95aed87e2fbe1 labels v4 base OilCoin / OILCOIN 0x9CB19d6e…1E18 quote United States Oil Fund • Robinhood Token / USO 0xa30FA36D…D344 liquidity.usd 42823.7 volume.h24 855733.74. Secondary ETH and USDG books have far less liquidity. info.websites None info.socials None." }
  - { id: R-6, publisher: Robinhood Chain RPC, title: "eth_getCode and ERC-20 / Airlock calls on OILCOIN", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-13, CLM-15, CLM-16, CLM-17, CLM-21, CLM-22, CLM-29], excerpt: "eth_blockNumber 0x32a9a4b (53123659). token eth_getCode 44 bytes clone of 0x3be8b97f…c599. name() OilCoin symbol() OILCOIN decimals 18 totalSupply 1e27 owner() 0xeb7c0347…0862 factory() revert. tokenURI ipfs://bafkreidpou4mf2cwo2brzugykvlpu6abbk7sagnrrghlod6s3nz3lav22q. Airlock owner() 0x21e2ce70…7a66 getAssetData numeraire 0xa30fa36d…d344 token 0x9cb19d6e…1e18 LP slots 0xdead. Create-from code 0x. USO name United States Oil Fund • Robinhood Token." }
  - { id: R-7, publisher: DexScreener, title: "OILCOIN/USO Uniswap v4 pair", url: "https://api.dexscreener.com/latest/dex/pairs/robinhood/0x413dc2a61b3684cfe76522d39027cf486a71535bd0e538243be95aed87e2fbe1", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-8, CLM-10, CLM-15, CLM-17, CLM-20, CLM-23, CLM-24, EVT-1], excerpt: "chainId robinhood dexId uniswap labels v4 pairAddress 0x413dc2a61b3684cfe76522d39027cf486a71535bd0e538243be95aed87e2fbe1 base OilCoin / OILCOIN 0x9CB19d6e…1E18 quote United States Oil Fund • Robinhood Token / USO 0xa30FA36D…D344 liquidity.usd 42823.7 base 689444027 quote 73.8024 volume.h24 855733.74 txns.h24 buys 7602 sells 7470 fdv 46321 marketCap 46321 priceUsd 0.00004632 pairCreatedAt 1788374710000. info None." }
  - { id: R-8, publisher: DexScreener, title: "Search OILCOIN on robinhood", url: "https://api.dexscreener.com/latest/dex/search?q=OILCOIN", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9, CLM-25], excerpt: "Assigned pair OILCOIN/USO 0x413dc2a6…fbe1 token 0x9CB19d6e…1E18 liq 42823.7 vol 855733.74. Distinct rows: OIL 0x9D438Ee387cB9001518C279cB0D56295c4D91e18 / USO liq 19912.75; OILCOIN 0x0F9D2c465A30B95e85463e90B90A767B8b681E18 / USAR liq 21683.51." }
  - { id: R-9, publisher: GeckoTerminal, title: "OILCOIN/USO pool page", url: "https://www.geckoterminal.com/robinhood/pools/0x413dc2a61b3684cfe76522d39027cf486a71535bd0e538243be95aed87e2fbe1", published_at: null, accessed_at: 2026-09-03T04:11:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-11, CLM-23, CLM-28, EVT-4], excerpt: "og:title OILCOIN/USO - OilCoin Price on Bankr (Robinhood) | GeckoTerminal. og:description: OILCOIN/USO price today is $0.00004349 with a 24-hour trading volume of $839.03K. OilCoin contract address is 0x9cb19d6e3f87543826e50f61ff4c5a6cdf3b1e18 with $40,657.67 in liquidity. JSON API /tokens and /pools returned 429 this pass." }
  - { id: R-10, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T04:11:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "HTTP 200. assets length 194. USO row: tokenSymbol USO tokenName United States Oil Fund • Robinhood Token deployments contractAddress 0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344 chainId 4663 networkName Robinhood Chain status ASSET_STATUS_ACTIVE. OILCOIN/OilCoin scan 0 hits." }
  - { id: R-11, publisher: Blockscout, title: "Token 0xa30FA3…D344 USO", url: "https://robinhoodchain.blockscout.com/address/0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344", published_at: null, accessed_at: 2026-09-03T04:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "Token name United States Oil Fund • Robinhood Token symbol USO decimals 18 total_supply 8664466000000000000000 holders_count 5340. Address name BeaconProxy is_verified true proxy_type eip1967_beacon implementations Stock 0xb35490d6f9163DE4F80d88dc75c3516eb64C5aE2." }
  - { id: R-12, publisher: Blockscout, title: "LongLauncher LaunchCreated on create tx", url: "https://robinhoodchain.blockscout.com/tx/0x2f51556a176472cf63234534ecbaa9040cda2809c7363a882e8d76f705c9979d", published_at: 2026-09-02T18:45:10Z, accessed_at: 2026-09-03T04:11:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-15, EVT-2], excerpt: "LaunchCreated poolOrHook 0x9CB19d6e…1E18 asset 0x9CB19d6e…1E18 numeraire 0xa30FA3…D344 poolInitializer 0x4e346895…a544 launcher 0xd53B0e13…0aBA deployedAt 1788374710 reservedUntil 1788461110 normalizedTicker OILCOIN. DopplerHookInitializer Create numeraire USO." }
  - { id: R-13, publisher: Blockscout, title: "DopplerERC20V1Factory 0x1B37…b69a", url: "https://robinhoodchain.blockscout.com/address/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-03T04:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-29], excerpt: "hash 0x1B37D3a72082029c44B35B604Ea473617580b69a name DopplerERC20V1Factory is_contract true is_verified true. smart-contracts compiler v0.8.26 is_partially_verified true file_path src/tokens/DopplerERC20V1Factory.sol verified_at 2026-07-01T19:42:15Z." }
  - { id: R-14, publisher: Blockscout, title: "LongLauncher 0x22e9…eeED", url: "https://robinhoodchain.blockscout.com/address/0x22e99278308B393ea1260859B181AD7E78f5eeED", published_at: null, accessed_at: 2026-09-03T04:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-16], excerpt: "api/v2 smart-contracts: name LongLauncher compiler_version v0.8.26+commit.8a97fa7a is_verified true is_partially_verified false file_path src/LongLauncher.sol verified_at 2026-07-14T11:23:57Z." }
  - { id: R-15, publisher: "@xbtscout", title: "$OILCOIN robinhood early call", url: "https://x.com/xbtscout/status/2095222240748945777", published_at: 2026-09-02T18:48:04Z, accessed_at: 2026-09-03T04:12:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-19, EVT-3], excerpt: "$OILCOIN — robinhood early call flag. called at $280.4k mcap. liquidity is $107.1k. 324 holders, launched via longxyz, no honeypot flagged, and 0% sell tax. CA: 0x9cb19d6e3f87543826e50f61ff4c5a6cdf3b1e18" }
  - { id: R-16, publisher: DexScreener, title: "GASOLINU and OILCOIN ticker clones", url: "https://api.dexscreener.com/latest/dex/tokens/0x1e6EA1e89151cDc8443968Bf047cfa3177181e18", published_at: null, accessed_at: 2026-09-03T04:11:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9, CLM-25], excerpt: "GASOLINU 0x1e6EA1e89151cDc8443968Bf047cfa3177181e18 name Gasoline Inu / USO pair 0x0e83588f…afa8 liq 133900.9 vol 539352.57. Separate fetches: OILCOIN 0x0F9D2c46…1E18/USAR liq 21683.51; Oilcoin/OIL 0x9D438Ee3…1e18/USO liq 19912.75. @oilonrobinhood CA 0xaf99e758…54d3 DexScreener 0 pairs." }
  - { id: R-17, publisher: X user search, title: "OILCOIN / OilCoin / Oil Coin robinhood handles", url: "https://x.com/search?q=OILCOIN", published_at: null, accessed_at: 2026-09-03T04:12:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-8, CLM-25], excerpt: "X user search: @Oilcoin OILCOINoffical 40 followers; @OilCoinProject Digital Reserve Currency; @theoilcoin; @oilcoinUSD1 Solana CA CpN1PZ6CYsU2fUe9xenqD4JWDGdGhA2PCFAQXpv8krGR; @oilonrobinhood Oil Coin on Pons/Robinhood CA 0xaf99e75866dbfc3c40bf71a4263ec8445e2354d3. None pin 0x9CB19d6e…1E18." }
  - { id: R-18, publisher: GitHub, title: "Search repositories q=oilcoin", url: "https://api.github.com/search/repositories?q=oilcoin", published_at: null, accessed_at: 2026-09-03T04:11:00Z, kind: repository, authority: independent, authenticity: confirmed, supports: [CLM-27], excerpt: "HTTP 200 total_count 13. First items cryko98/oilcoin, oilcoin-zz/oilcoin, KennyAzodo/oilcoin, Ke1nny/oilcoin, SuperteamAR/OILCoin. None cite 0x9CB19d6e…1E18 or Robinhood Chain this pass." }
  - { id: R-19, publisher: Crude Cat packet, title: "Packed CRUDECAT distinction", url: "https://robinhoodchain.blockscout.com/address/0xBD957Cc9f1e94617792F37bC40f2F299e78AcF3e", published_at: null, accessed_at: 2026-09-03T04:12:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9], excerpt: "Packed CRUDECAT token 0xBD957Cc9f1e94617792F37bC40f2F299e78AcF3e CircusQuoteTokenV3 / USO Uniswap v3 0xc3a873…8BeD. Not 0x9CB19d6e…1E18." }

gaps:
  - { priority: P0, question: "Is there an official X handle or site that bidirectionally links to token 0x9CB19d6e…1E18?", checked: "DexScreener info.websites/socials empty; X user search returned unrelated handles; tokenURI IPFS 403; app.long.xyz 403, 2026-09-03", next: "re-read DexScreener token profile after a Claim Profile; fetch tokenURI JSON from another IPFS gateway; search new posts that embed the CA and a handle" }
  - { priority: P1, question: "Does Gecko JSON later return pool volume/reserve that can be cited beside DexScreener 855733.74 / 42823.7?", checked: "api.geckoterminal.com token and pool endpoints HTTP 429; HTML meta volume $839.03K liquidity $40,657.67, 2026-09-03", next: "retry api.geckoterminal.com/api/v2/networks/robinhood/pools/0x413dc2a6…fbe1 with Mozilla UA; do not loop on 429" }
  - { priority: P1, question: "Do Lock beneficiaries 0x21E2ce70…7A66 (5%) and 0x33Eb5e5d…bbF4 (95%) still control USO-side fees after graduation?", checked: "create-tx Lock log on DopplerHookInitializer; getAssetData LP slots include 0xdead; 95% is not the create-from, 2026-09-03", next: "read Doppler lock / fee collector state and any LongFeeVaultFactory deployVault for this token" }
  - { priority: P2, question: "Should ticker clones OIL 0x9D438Ee3…1e18 or OILCOIN 0x0F9D2c46…1E18/USAR get their own packets?", checked: "DexScreener search listed them with far lower volume than 0x9CB19d6e…1E18, 2026-09-03", next: "only if an assignment names those CAs" }
---

# OILCOIN — research packet

## What it is

A one-billion-supply ERC-20 cloned by DopplerERC20V1Factory into a Uniswap v4 pool quoted against United States Oil Fund • Robinhood Token (USO). LongLauncher.create on 2026-09-02 minted OilCoin (OILCOIN) and seeded the OILCOIN/USO book. Traders buy and sell OILCOIN against USO. USO is the quote rail, not the subject. No official site or handle was located this pass.

Themes: memecoin, stock-paired:USO, rwa, graduation

## Why it matters

The OILCOIN/USO Uniswap v4 book printed about $856k of 24h volume on DexScreener at collection, with the quote token the USO rail in GET /rhj/assets. @xbtscout posted the CA as a longxyz launch hours after create. Distinct from packed CRUDECAT (Circus / Uniswap v3) and from GASOLINU 0x1e6EA1…1e18, which are other USO-paired names.

## What could go wrong

USD liquidity on the OILCOIN/USO book counts both sides; the quote side is USO, not USDG. Gecko HTML meta ($839k vol / $40.7k liq) disagrees with DexScreener ($856k / $43k). Same-ticker OilCoin clones exist on robinhood (OIL 0x9D438Ee3…1e18, OILCOIN/USAR 0x0F9D2c46…1E18). No official handle this pass. Lock 95% beneficiary is not the create-from.

## Product and mechanics

DopplerERC20V1Factory 0x1B37…b69a clones DopplerERC20V1 via EIP-1167. LongLauncher.create from EOA 0xd53B0e13…0aBA at 2026-09-02T18:45:10Z minted OilCoin / OILCOIN supply 1e9*1e18 into Uniswap v4 poolId 0x413dc2a6…fbe1 quoted against USO 0xa30FA3…D344. factory() on the token reverts; owner() is Airlock 0xeb7C…0862. [verified R-4 R-5 R-6]

Airlock getAssetData numeraire is that USO; LP slots include 0xdead. PoolManager is 0x8366…0951. LaunchCreated normalizedTicker OILCOIN. Secondary OILCOIN/USDG and OILCOIN/ETH Uniswap v4 books on DexScreener have far less liquidity than the USO book. [verified R-6 R-7]

## Control and security

token owner() is Airlock. Airlock owner() is 0x21E2…7A66. Create-tx from 0xd53B0e13…0aBA has no code. Create-tx Lock beneficiaries were 5% 0x21E2…7A66 and 95% 0x33Eb5e5d…bbF4. [verified R-4 R-6]

DopplerERC20V1 and DopplerERC20V1Factory are partially verified on Blockscout (src/tokens/DopplerERC20V1.sol, compiler v0.8.26). LongLauncher is verified (src/LongLauncher.sol). The token page is a verified EIP-1167 shell only. No audit report URL was located this pass. [verified R-1 R-13 R-14] [unknown]

## Team and provenance

No official domain or X handle was located. DexScreener info.websites and info.socials are empty. X user search returned unrelated OilCoin handles, including @oilonrobinhood with a different CA. Flag unconfirmed-official. Do not invent a project handle. [claim R-7 R-17]

@xbtscout posted the CA as launched via longxyz. That is a scout post, not a project account. tokenURI is ipfs://bafkreidpou4mf2cwo2brzugykvlpu6abbk7sagnrrghlod6s3nz3lav22q; gateways returned 403 this pass. [claim R-6 R-15]

## Economics and activity

OILCOIN/USO Uniswap v4 24h volume is 855733.74 USD and liquidity.usd is 42823.7 at 2026-09-03T04:08:00Z from the DexScreener pair endpoint. fdv/marketCap 46321. [claim R-7]

Gecko HTML meta on the same pool: 24h volume $839.03K, liquidity $40,657.67, price $0.00004349. JSON API 429 this pass. Blockscout holders_count 145. Pair created 2026-09-02T18:45:10Z. [claim R-1 R-9]

Gecko HTML titles Bankr (Robinhood); DexScreener dexId is uniswap v4. Creation path is LongLauncher.create. [claim R-4 R-7 R-9]

## Material risks

- Quote token USO 0xa30FA3…D344 is the Robinhood Stock Token rail in GET /rhj/assets; OILCOIN is not. [verified R-10 R-11]
- Pool USD reserve is OILCOIN plus USO, not a USDG or WETH backstop. [claim R-7]
- Gecko HTML $40,657.67 vs DexScreener 42823.7 on the same pool. [claim R-7 R-9]
- Same-ticker clones (OIL 0x9D438Ee3…1e18, OILCOIN/USAR 0x0F9D2c46…1E18) and colliding OilCoin handles. [claim R-8 R-16 R-17]
- Distinct from packed CRUDECAT and from GASOLINU; merging them would misstate the pad and the book. [verified R-16 R-19]
- No official handle or domain this pass. [claim R-7 R-17]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/impl/factory/USO and the create tx, RPC name/symbol/owner/getAssetData/tokenURI, DexScreener token/pair/search, Gecko HTML, /rhj/assets, GitHub search, and X user/keyword search were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-4 R-6 R-7 R-10]
- Numbers: 855733.74 is the DexScreener OILCOIN/USO pair 24h volume, not an all-pools figure. Liquidity 42823.7 is that pool. Gecko HTML $839.03K / $40,657.67 is the same pair, different aggregator. [claim R-7 R-9]
- Adversarial: the strongest contrary reading is that this is packed CRUDECAT, in-flight GASOLINU, or the USO issuer. Those have different CAs; USO 0xa30FA3…D344 is the /rhj/assets rail, not the memecoin. [inference R-10 R-16 R-19]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no oilcoin / OILCOIN / OilCoin / 0x9CB19d6e…1E18. content/dependencies/stock-tokens.yaml has USO at 0xa30FA3…D344 as a rail.
- Explorer: Blockscout api/v2 token, impl, factory, launcher, USO, createToken 0x2f51556a…9979d, LaunchCreated / Initialize / Lock logs, holders. RPC eth_getCode/eth_call with Chrome UA at block 53123659.
- Aggregators: DexScreener latest/dex/tokens, latest/dex/pairs, search OILCOIN; GASOLINU and ticker-clone token endpoints. Gecko JSON 429; Gecko HTML pool meta used instead.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, one USO, 0 OILCOIN.
- Social: X keyword OILCOIN; user search OILCOIN / OilCoin / Oil Coin robinhood. No official handle.
- Failed: Blockscout token creator_address_hash null (create tx via mint log used instead); Gecko JSON 429 not retried; tokenURI IPFS 403; app.long.xyz 403.
- Time: collection 2026-09-03T04:08Z–2026-09-03T04:12Z.
