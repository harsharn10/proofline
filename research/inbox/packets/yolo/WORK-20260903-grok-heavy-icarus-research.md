---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: yolo
name: YOLO
packet_tier: seed
as_of: 2026-09-03T04:40:00Z
prior_packet: null
supersedes: null
owned_slugs: [yolo]
allowed_paths:
  - research/inbox/packets/yolo/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: YOLO
  aliases: ["You Only Live Once"]
  symbols: [YOLO]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: https://yolorh.com/
  official_handle: "@yolorobinhood_"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko, Blockscout, yolorh.com, or constructor socials this pass"
  possible_matches:
    - slug: pons
      signals: [shared-deployer]
      contrary_signals:
        - "Census Pons is the bonding-curve pad at ponsfamily.com / @ponsdotfamily with PonsLaunchFactory 0xA5aA…1feB"
        - "YOLO is the ERC-20 at 0x62C71c…32eA created through that factory; entity_kind token, not protocol"
        - "No shared domain or handle; yolorh.com / @yolorobinhood_ is not ponsfamily.com / @ponsdotfamily"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "YOLO is a PonsLauncherToken created by PonsLaunchFactory.launchToken, not LongLauncher"
        - "No shared domain, handle, or reproduced address"
    - slug: hoodfun
      signals: [other]
      contrary_signals:
        - "Census hood.fun is a bonding-curve pad at @hoodfunfamily"
        - "YOLO creator_address_hash is PonsLaunchFactory 0xA5aA…1feB, not a hood.fun factory"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: launch/graduation-token
  secondary_leaves: [trading/amm-native]
  mechanism_tags: [launchpad, amm]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x62C71c…32eA is a verified PonsLauncherToken with non-empty code on 4663; creator_address_hash is PonsLaunchFactory 0xA5aA…1feB; launchToken at 2026-07-15T07:15:15Z minted YOLO/YOLO into Uniswap v3 YOLO/WETH 0x52Fc…3558. DexScreener book confirmed. yolorh.com embeds the CA; @yolorobinhood_ posted it. Constructor socials were empty. [R-1] [R-4] [R-5] [R-7] [R-8] [R-13]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-8, CLM-10], note: "" }

links:
  - { kind: site, url: "https://yolorh.com/", authenticity: confirmed }
  - { kind: x, url: "https://x.com/yolorobinhood_", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/YoloCoinRH", authenticity: unconfirmed }

deployments:
  - label: YOLO token (PonsLauncherToken)
    role: token
    address:
      value: "0x62C71cd34a52c30d894419CBcc55Db2aFA8032eA"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:30:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-2, R-5]
  - label: PonsLaunchFactory (token creator / launchFactory())
    role: factory
    address:
      value: "0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:31:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-4, R-5]
  - label: YOLO/WETH Uniswap v3 pool (canonical liquidityPool)
    role: other
    address:
      value: "0x52FcB1D83191E06ef2d2D9f460609CA22a923558"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:31:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-5, R-7, R-10]
  - label: WETH (pairToken / quote)
    role: token
    address:
      value: "0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:32:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-7, R-11]
  - label: PonsLaunchLocker (UNI-V3-POS 129850)
    role: vault
    address:
      value: "0x736D76699C26D0d966744cAe304C000d471f7F35"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:32:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-12]

metrics:
  - { kind: volume_24h, value: 1291554.13, currency: USD, as_of: 2026-09-03T04:32:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x62C71cd34a52c30d894419CBcc55Db2aFA8032eA top pair YOLO/WETH v3 0x52Fc…3558 volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 496388.58, currency: USD, as_of: 2026-09-03T04:32:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x62C71cd34a52c30d894419CBcc55Db2aFA8032eA top pair YOLO/WETH v3 0x52Fc…3558 liquidity.usd (that book, not all-pools)", class: claim, receipt_ids: [R-7] }
  - { kind: market_cap, value: 13474583, currency: USD, as_of: 2026-09-03T04:32:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x62C71cd34a52c30d894419CBcc55Db2aFA8032eA top pair YOLO/WETH v3 fdv/marketCap 13474583", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 11488, currency: null, as_of: 2026-09-03T04:35:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x62C71cd34a52c30d894419CBcc55Db2aFA8032eA holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:33:00Z, receipt_ids: [R-5], result: "eth_chainId 0x1237 (4663). eth_blockNumber 0x32ad3be (53138366). Token 0x62C71c…32eA eth_getCode 5274 B prefix 60806040. name YOLO, symbol YOLO, decimals 18, totalSupply 1e27. owner() reverts. deployer() 0xE0b5Ee397C1684565e581c1566370C39d6393e55 (code 0x). launchFactory() 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB. liquidityPool() 0x52FcB1D83191E06ef2d2D9f460609CA22a923558. pairToken() 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73. poolFee 10000. description THE SPIRIT OF GOING ALL-IN. socials() five empty strings. restrictionBlocks 366 launchBlock() 25536491 restrictionEndBlock() 25536857. Factory owner() 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd. eth_getTransactionByHash 0xc276…7644 blockNumber 10204613." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:35:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-10, R-11, R-12], result: "Blockscout api/v2 token 0x62C71c…32eA name YOLO symbol YOLO holders_count 11488 total_supply 1e27. Address name PonsLauncherToken is_verified true is_fully_verified true file_path contracts/src/PonsLauncherToken.sol compiler v0.8.30 proxy_type null creator PonsLaunchFactory 0xA5aA…1feB creation tx 0xc276…7644 2026-07-15T07:15:15Z block 10204613 method launchToken from EOA 0xE0b5…3e55. Constructor socials twitter/telegram/discord/website/farcaster empty; pairToken_ WETH; poolFee_ 10000; supply_ 1e27; restrictionBlocks_ 366. TokenLaunched pool 0x52Fc…3558 positionId 129850 restrictionsEndBlock 25536857. Pool UniswapV3Pool is_verified true created in the same tx. UNI-V3-POS 129850 transferred to PonsLaunchLocker 0x736D…7F35." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T04:32:00Z, receipt_ids: [R-7], result: "DexScreener latest/dex/tokens/0x62C71c…32eA: 7 robinhood uniswap pairs. Top YOLO/WETH v3 0x52Fc…3558 quote WETH 0x0Bd7…AD73 liquidity.usd 496388.58 volume.h24 1291554.13 fdv/marketCap 13474583 priceUsd 0.01389 pairCreatedAt 1784099715 (2026-07-15T07:15:15Z) info.websites https://yolorh.com/ info.socials x.com/yolorobinhood_ and t.me/YoloCoinRH. Second pair YOLO/USDG v4 liquidity.usd 125287.21 volume.h24 212373.36." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T04:32:00Z, receipt_ids: [R-8, R-9], result: "Gecko first GET 200. Token volume_usd.h24 1724566.65571446 (all pools) fdv_usd 13344550.0088469 market_cap_usd 13648995.91 total_reserve_in_usd 421817.00 coingecko_coin_id yolo-2. Pool YOLO/WETH 1% 0x52fc…3558 volume_usd.h24 1290205.57215773 reserve_in_usd 494290.3629 fdv_usd 13342440.7402446 pool_created_at 2026-07-15T07:15:15Z dex uniswap-v3-robinhood." }
  - { id: REP-5, method: official-crosslink, checked_at: 2026-09-03T04:36:00Z, receipt_ids: [R-13, R-14, R-19], result: "yolorh.com HTTP 200 title $YOLO - You Only Live Once; twitter:site @yolorobinhood_; visible CA 0x62C71cd34a52c30d894419CBcc55Db2aFA8032eA twice; DexScreener pool link 0x52fc…3558. @yolorobinhood_ bio The spirit of going all-in matches on-chain description; post 2095219283555225981 is the CA. Constructor socials remain empty." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "PonsLaunchFactory.launchToken clones a 1e9-supply PonsLauncherToken into a Uniswap v3 pool quoted against WETH; launch buy/wallet caps apply only during restrictionBlocks (constructor 366). After restrictionEndBlock the token is a plain ERC-20. LP NFT 129850 sits in PonsLaunchLocker.", class: verified, observed_at: 2026-09-03T04:33:00Z, receipt_ids: [R-2, R-4, R-5, R-12], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "YOLO", class: verified, observed_at: 2026-09-03T04:30:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "YOLO", class: verified, observed_at: 2026-09-03T04:30:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x62C71cd34a52c30d894419CBcc55Db2aFA8032eA", class: verified, observed_at: 2026-09-03T04:35:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB", class: verified, observed_at: 2026-09-03T04:33:00Z, receipt_ids: [R-3, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:35:00Z, receipt_ids: [R-1, R-4, R-5, R-7], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T04:35:00Z, receipt_ids: [R-2, R-4, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "@yolorobinhood_ — yolorh.com twitter:site and DexScreener info.socials list it; the account posted CA 0x62c71c…32ea on 2026-09-02T18:36:19Z; constructor socials twitter field is empty; other handles using the YOLO name exist (handle-collision)", class: verified, observed_at: 2026-09-03T04:36:00Z, receipt_ids: [R-7, R-13, R-14, R-20], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Creator is census Pons v1 factory 0xA5aA…1feB, not LONG, hood.fun, or LaunchpadFactory. Distinct from those protocol slugs.", class: verified, observed_at: 2026-09-03T04:35:00Z, receipt_ids: [R-1, R-3, R-4], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "YOLO/WETH Uniswap v3 24h volume 1291554.13 USD and liquidity.usd 496388.58 at 2026-09-03T04:32:00Z (DexScreener top pair, not Gecko token all-pools 1724566.66)", class: verified, observed_at: 2026-09-03T04:32:00Z, receipt_ids: [R-7, R-8, R-9], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "Gecko same pool volume_usd.h24 1290205.57 reserve_in_usd 494290.36 fdv_usd 13342440.74 at 2026-09-03T04:32:00Z", class: verified, observed_at: 2026-09-03T04:32:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 11488, class: verified, observed_at: 2026-09-03T04:35:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "PonsLauncherToken is not Ownable: owner() reverts. deployer() is EOA 0xE0b5Ee397C1684565e581c1566370C39d6393e55 (empty code). Factory owner() returns Safe 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd.", class: verified, observed_at: 2026-09-03T04:33:00Z, receipt_ids: [R-5], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "setInitialBuyRecipient is launchFactory-only. restriction window is immutable (restrictionBlocks 366). FeeRedirectUpdated on the locker set newFeeWallet to the deployer EOA.", class: verified, observed_at: 2026-09-03T04:33:00Z, receipt_ids: [R-2, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73; venue is Uniswap v3 pool 0x52FcB1D83191E06ef2d2D9f460609CA22a923558 fee 10000", class: verified, observed_at: 2026-09-03T04:33:00Z, receipt_ids: [R-4, R-5, R-7, R-10], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "creator_address_hash is PonsLaunchFactory 0xA5aA…1feB via launchToken, not Pons v2, LONG, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T04:31:00Z, receipt_ids: [R-1, R-3, R-4], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T04:33:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, yolorh.com, Telegram preview, or X search this pass", class: unknown, observed_at: 2026-09-03T04:36:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "third-party-link: t.me/YoloCoinRH og:title YOLO, 131 subscribers, no contract in the preview; DexScreener lists it; constructor telegram field empty; yolorh.com did not emit that t.me URL this pass", class: claim, observed_at: 2026-09-03T04:36:00Z, receipt_ids: [R-7, R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "DexScreener fdv/marketCap 13474583; Gecko pool fdv_usd 13342440.74 market_cap_usd 13755093.64", class: verified, observed_at: 2026-09-03T04:32:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73", class: verified, observed_at: 2026-09-03T04:32:00Z, receipt_ids: [R-5, R-7, R-11], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x52FcB1D83191E06ef2d2D9f460609CA22a923558", class: verified, observed_at: 2026-09-03T04:32:00Z, receipt_ids: [R-4, R-5, R-7, R-10], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "https://yolorh.com/ — DexScreener info.websites; page embeds CA 0x62C71c…32eA and twitter:site @yolorobinhood_; constructor website field empty", class: verified, observed_at: 2026-09-03T04:36:00Z, receipt_ids: [R-7, R-13], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-24, field: candidate, value: "yolo | YOLO | https://yolorh.com/ | @yolorobinhood_ — discovery token not in census 49", class: claim, observed_at: 2026-09-03T04:40:00Z, receipt_ids: [R-1, R-7, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: communications.status, value: "handle-collision: X user search also returned @yolorobinhoodx, @YOLOROBINHOOD, @Yolo_robinhood, @yolonarobinhood with overlapping YOLO / Robinhood naming", class: claim, observed_at: 2026-09-03T04:34:00Z, receipt_ids: [R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: communications.status, value: "copypasta-pattern: multiple X posts reused CA 0x62C71c…32eA with crypto-*.netlify.app/claim and robinhood-main-dex-*.netlify.app/vote URLs", class: claim, observed_at: 2026-09-03T04:34:00Z, receipt_ids: [R-16, R-17], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "DexScreener YOLO/WETH v3 book $1.29M 24h volume"
    summary: "Top pair 0x52Fc…3558 liquidity.usd 496388.58 volume.h24 1291554.13 fdv 13474583."
    occurred_at: 2026-09-03T04:32:00Z
    observed_at: 2026-09-03T04:32:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7]
  - id: EVT-2
    type: ct
    title: "@BeerdHead posted $YOLO on Robinhood Chain"
    summary: "Reply named $YOLO on @RobinhoodCrypto $HOOD Robinhood Chain, next to $MORPHO."
    occurred_at: 2026-09-03T03:36:11Z
    observed_at: 2026-09-03T04:34:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-18]
  - id: EVT-3
    type: risk
    title: "@spiritlab73 posted a $YOLO leaderboard vote link"
    summary: "Post asked for votes to list $YOLO, listing ID 1910, on a netlify vote URL with the CA."
    occurred_at: 2026-09-03T03:28:48Z
    observed_at: 2026-09-03T04:34:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-16]
  - id: EVT-4
    type: risk
    title: "X posts linked $YOLO claim portals on netlify"
    summary: "Several accounts posted the CA with crypto-*.netlify.app/claim URLs. Flag copypasta-pattern."
    occurred_at: 2026-09-03T02:22:27Z
    observed_at: 2026-09-03T04:34:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-17]
  - id: EVT-5
    type: company
    title: "@yolorobinhood_ posted the YOLO contract address"
    summary: "Account whose bio matches the on-chain description posted 0x62c71c…32ea."
    occurred_at: 2026-09-02T18:36:19Z
    observed_at: 2026-09-03T04:34:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-14]
  - id: EVT-6
    type: onchain
    title: "PonsLaunchFactory launchToken minted YOLO"
    summary: "Tx 0xc276…7644 at 2026-07-15T07:15:15Z created token 0x62C71c…32eA and Uniswap v3 pool 0x52Fc…3558."
    occurred_at: 2026-07-15T07:15:15Z
    observed_at: 2026-09-03T04:31:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x62C71c…32eA YOLO / YOLO", url: "https://robinhoodchain.blockscout.com/address/0x62C71cd34a52c30d894419CBcc55Db2aFA8032eA", published_at: null, accessed_at: 2026-09-03T04:35:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24], excerpt: "hash 0x62C71cd34a52c30d894419CBcc55Db2aFA8032eA name PonsLauncherToken is_contract true is_verified true proxy_type null. token symbol YOLO decimals 18 total_supply 1000000000000000000000000000 holders_count 11488 type ERC-20. creator_address_hash 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB creation_transaction_hash 0xc276b58838327755ef813d86265dd76e23f641daf8242e2abe7fef86819e7644." }
  - { id: R-2, publisher: Blockscout, title: "Verified source PonsLauncherToken 0x62C71c…32eA", url: "https://robinhoodchain.blockscout.com/api/v2/smart-contracts/0x62C71cd34a52c30d894419CBcc55Db2aFA8032eA", published_at: 2026-07-17T03:14:32Z, accessed_at: 2026-09-03T04:31:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-7, CLM-14], excerpt: "name PonsLauncherToken file_path contracts/src/PonsLauncherToken.sol is_verified true is_fully_verified true compiler v0.8.30+commit.73712a01. Constructor name_ YOLO symbol_ YOLO description_ THE SPIRIT OF GOING ALL-IN socials_ five empty strings deployer_ 0xE0b5Ee…3e55 pairToken_ 0x0Bd7D308…AD73 poolFee_ 10000 supply_ 1e27 restrictionBlocks_ 366." }
  - { id: R-3, publisher: Blockscout, title: "Address 0xA5aA…1feB PonsLaunchFactory", url: "https://robinhoodchain.blockscout.com/address/0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB", published_at: null, accessed_at: 2026-09-03T04:31:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-9, CLM-16], excerpt: "hash 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB name PonsLaunchFactory is_contract true is_verified true is_fully_verified true file_path contracts/src/PonsLaunchFactory.sol compiler v0.8.30. creator_address_hash 0xda4bCee76B29EFEc9697Fcf663601c2042043968." }
  - { id: R-4, publisher: Blockscout, title: "launchToken tx 0xc276b588…7644", url: "https://robinhoodchain.blockscout.com/tx/0xc276b58838327755ef813d86265dd76e23f641daf8242e2abe7fef86819e7644", published_at: 2026-07-15T07:15:15Z, accessed_at: 2026-09-03T04:31:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-5, CLM-6, CLM-15, CLM-22, EVT-6], excerpt: "timestamp 2026-07-15T07:15:15.000000Z status ok block_number 10204613 from 0xE0b5Ee397C1684565e581c1566370C39d6393e55 (is_contract false) to PonsLaunchFactory 0xA5aAb3F0…1feB method launchToken. TokenLaunched token 0x62C71c…32eA pool 0x52Fc…3558 pairToken WETH positionId 129850 restrictionsEndBlock 25536857. PositionLocked locker 0x736D…7F35." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, launchFactory() on YOLO", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:33:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-13, CLM-14, CLM-15, CLM-17, CLM-21, CLM-22], excerpt: "eth_chainId 0x1237 block 0x32ad3be (53138366). Token code 5274 B. name YOLO symbol YOLO decimals 18 totalSupply 1e27. owner() revert. deployer 0xE0b5Ee…3e55 launchFactory 0xA5aAb3F0…1feB liquidityPool 0x52FcB1D8…3558 pairToken 0x0Bd7D308…AD73 poolFee 10000 socials empty. Factory owner() 0x263ed295…19Dd. Tx 0xc276…7644 blockNumber 10204613." }
  - { id: R-6, publisher: Robinhood Chain RPC, title: "eth_getTransactionByHash launch tx", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-6], excerpt: "eth_getTransactionByHash 0xc276b58838327755ef813d86265dd76e23f641daf8242e2abe7fef86819e7644 blockNumber 0x9bb5c5 (10204613) from 0xe0b5ee…3e55 to 0xa5aab3f0…1feb. Receipt status 0x1 logs 19 including UniswapV3Factory PoolCreated pool 0x52Fc…3558." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens YOLO", url: "https://api.dexscreener.com/latest/dex/tokens/0x62C71cd34a52c30d894419CBcc55Db2aFA8032eA", published_at: null, accessed_at: 2026-09-03T04:32:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-10, CLM-15, CLM-17, CLM-19, CLM-20, CLM-21, CLM-23, CLM-24, EVT-1], excerpt: "7 robinhood uniswap pairs. Top pairAddress 0x52FcB1D83191E06ef2d2D9f460609CA22a923558 labels v3 base YOLO quote WETH 0x0Bd7D308…AD73 liquidity.usd 496388.58 volume.h24 1291554.13 fdv 13474583 marketCap 13474583 pairCreatedAt 1784099715. info.websites https://yolorh.com/ info.socials x.com/yolorobinhood_ t.me/YoloCoinRH." }
  - { id: R-8, publisher: GeckoTerminal, title: "YOLO/WETH Uniswap v3 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x52FcB1D83191E06ef2d2D9f460609CA22a923558", published_at: null, accessed_at: 2026-09-03T04:32:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, CLM-11, CLM-20], excerpt: "name YOLO / WETH 1% pool_created_at 2026-07-15T07:15:15Z fdv_usd 13342440.74 market_cap_usd 13755093.64 volume_usd.h24 1290205.57215773 reserve_in_usd 494290.3629. dex uniswap-v3-robinhood quote robinhood_0x0bd7d308f8e1639fab988df18a8011f41eacad73." }
  - { id: R-9, publisher: GeckoTerminal, title: "YOLO token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x62C71cd34a52c30d894419CBcc55Db2aFA8032eA", published_at: null, accessed_at: 2026-09-03T04:32:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, CLM-11], excerpt: "name YOLO symbol YOLO decimals 18 total_supply 1e27 price_usd 0.01375726814 fdv_usd 13344550.0088469 market_cap_usd 13648995.91 volume_usd.h24 1724566.65571446 total_reserve_in_usd 421817.00 coingecko_coin_id yolo-2. Top pool 0x52fc…3558." }
  - { id: R-10, publisher: Blockscout, title: "Address 0x52Fc…3558 UniswapV3Pool", url: "https://robinhoodchain.blockscout.com/address/0x52FcB1D83191E06ef2d2D9f460609CA22a923558", published_at: null, accessed_at: 2026-09-03T04:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-15, CLM-22], excerpt: "hash 0x52FcB1D83191E06ef2d2D9f460609CA22a923558 name UniswapV3Pool is_contract true is_verified true creator_address_hash 0x1f7d7550B1b028f7571E69A784071F0205FD2EfA creation_transaction_hash 0xc276b58838327755ef813d86265dd76e23f641daf8242e2abe7fef86819e7644." }
  - { id: R-11, publisher: Blockscout, title: "Token 0x0Bd7…AD73 WETH", url: "https://robinhoodchain.blockscout.com/address/0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73", published_at: null, accessed_at: 2026-09-03T04:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-15, CLM-21], excerpt: "token name WETH symbol WETH address_hash 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73 decimals 18 holders_count 526278 total_supply 39369298387170353096247." }
  - { id: R-12, publisher: Blockscout, title: "Address 0x736D…7F35 PonsLaunchLocker", url: "https://robinhoodchain.blockscout.com/address/0x736D76699C26D0d966744cAe304C000d471f7F35", published_at: null, accessed_at: 2026-09-03T04:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1], excerpt: "hash 0x736D76699C26D0d966744cAe304C000d471f7F35 name PonsLaunchLocker is_contract true is_verified true. Launch tx transferred UNI-V3-POS tokenId 129850 here; PositionLocked token 0x62C71c…32eA." }
  - { id: R-13, publisher: yolorh.com, title: "$YOLO - You Only Live Once", url: "https://yolorh.com/", published_at: null, accessed_at: 2026-09-03T04:32:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-23, CLM-24], excerpt: "HTTP 200. title $YOLO - You Only Live Once. twitter:site @yolorobinhood_. Visible CA 0x62C71cd34a52c30d894419CBcc55Db2aFA8032eA. Links https://x.com/yolorobinhood_ and https://dexscreener.com/robinhood/0x52fcb1d83191e06ef2d2d9f460609ca22a923558." }
  - { id: R-14, publisher: "@yolorobinhood_", title: "Posted the YOLO CA", url: "https://x.com/yolorobinhood_/status/2095219283555225981", published_at: 2026-09-02T18:36:19Z, accessed_at: 2026-09-03T04:34:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-8, EVT-5], excerpt: "0x62c71cd34a52c30d894419cbcc55db2afa8032ea. Account bio: The spirit of going all-in. TG: https://t.co/iQrS2Fqqwf." }
  - { id: R-15, publisher: Telegram, title: "t.me/YoloCoinRH", url: "https://t.me/YoloCoinRH", published_at: null, accessed_at: 2026-09-03T04:33:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-19], excerpt: "HTTP 200. og:title YOLO. og:description You can view and join @YoloCoinRH right away. tgme_page_extra 131 subscribers. No contract address in the preview HTML this pass." }
  - { id: R-16, publisher: "@spiritlab73", title: "Attention $YOLO Family vote post", url: "https://x.com/spiritlab73/status/2095353288027759046", published_at: 2026-09-03T03:28:48Z, accessed_at: 2026-09-03T04:34:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-26, EVT-3], excerpt: "Attention $YOLO Family! YOUR vote matters! Less than 100 votes are needed to list $YOLO on the Robinhood Top 100 Leaderboard. Listing ID: 1910. URL robinhood-main-dex-rkx.netlify.app/vote/0x62C71cd34a52c30d894419CBcc55Db2aFA8032eA." }
  - { id: R-17, publisher: "@31NJPgflZ9JQpWZ", title: "$YOLO claim portal post", url: "https://x.com/31NJPgflZ9JQpWZ/status/2095336591065592005", published_at: 2026-09-03T02:22:27Z, accessed_at: 2026-09-03T04:34:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-26, EVT-4], excerpt: "$YOLO actually cooked today holders got a claim CA: 0x62C71cd34a52c30d894419CBcc55Db2aFA8032eA https://crypto-keo.netlify.app/claim?contract=0x62C71cd34a52c30d894419CBcc55Db2aFA8032eA&cfg=evmdrop&pid=Ihrht" }
  - { id: R-18, publisher: "@BeerdHead", title: "$YOLO on Robinhood Chain", url: "https://x.com/BeerdHead/status/2095355145047400660", published_at: 2026-09-03T03:36:11Z, accessed_at: 2026-09-03T04:34:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-2], excerpt: "$MORPHO Ethereum 2.0 DeFi $YOLO on @RobinhoodCrypto $HOOD Robinhood Chain" }
  - { id: R-19, publisher: DexScreener, title: "YOLO token profile socials", url: "https://dexscreener.com/robinhood/0x52fcb1d83191e06ef2d2d9f460609ca22a923558", published_at: null, accessed_at: 2026-09-03T04:32:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-8, CLM-23], excerpt: "Pair page for YOLO/WETH v3 0x52Fc…3558. API info.websites https://yolorh.com/ info.socials https://x.com/yolorobinhood_ and https://t.me/YoloCoinRH." }
  - { id: R-20, publisher: "X user search", title: "YOLO robinhood handle collision set", url: "https://x.com/search?q=YOLO%20robinhood&f=user", published_at: null, accessed_at: 2026-09-03T04:34:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-25], excerpt: "User search YOLO robinhood returned @yolorobinhood_ (bio The spirit of going all-in, 1866 followers), @yolorobinhoodx (Yolo Official Support), @YOLOROBINHOOD, @yolonarobinhood, @Yolo_robinhood." }

gaps:
  - { priority: P0, question: "Does t.me/YoloCoinRH pin CA 0x62C71c…32eA or a site that cross-links, and does the X bio t.co expand to that group?", checked: "public preview og:title YOLO, 131 subscribers, no CA in HTML; t.co/iQrS2Fqqwf did not expose a Location this pass, 2026-09-03", next: "expand the bio t.co from a logged-in X client; open first messages if they become public without joining" }
  - { priority: P1, question: "Why does launchBlock() return 25536491 while the launch tx blockNumber is 10204613?", checked: "RPC eth_getTransactionByHash blockNumber 10204613; TokenLaunched restrictionsEndBlock 25536857 equals launchBlock()+366; both observed 2026-09-03", next: "read whether chain 4663 block.number tracks an L1 clock vs explorer sequence" }
  - { priority: P1, question: "Is there an audit whose scope matches PonsLauncherToken 0x62C71c…32eA?", checked: "Blockscout, DexScreener, Gecko, yolorh.com, TG preview, X latest, 2026-09-03", next: "ask in public and record the answer as a claim" }
  - { priority: P2, question: "Do the handles @yolorobinhoodx / @YOLOROBINHOOD / @Yolo_robinhood post a different CA?", checked: "X user search listed those handles; CA post this pass was from @yolorobinhood_, 2026-09-03", next: "open each profile bio and latest posts for a competing CA" }
---

# YOLO — research packet

## What it is

PonsLaunchFactory launched a fixed-supply ERC-20 into a Uniswap v3 YOLO/WETH pool. Traders buy and sell YOLO on that book. Constructor deployer is EOA 0xE0b5…3e55; yolorh.com embeds the CA and @yolorobinhood_ posted it.

Themes: memecoin, launchpad, amm

## Why it matters

The YOLO/WETH Uniswap v3 book printed about $1.29M of 24h volume on DexScreener at collection, with Blockscout holders_count 11488. It is a Pons v1 launch that has been trading since 2026-07-15, with a later site and handle that both carry the CA.

## What could go wrong

USD liquidity on the YOLO/WETH book counts both sides. Constructor socials were empty, so the site and handle are later surfaces. Other X handles reuse the YOLO name. Claim-portal and vote posts reuse the CA on netlify hosts.

## Product and mechanics

PonsLaunchFactory 0xA5aA…1feB clones PonsLauncherToken. launchToken from 0xE0b5…3e55 at 2026-07-15T07:15:15Z minted YOLO / YOLO supply 1e9*1e18 into Uniswap v3 pool 0x52Fc…3558 fee 10000 quoted against WETH. launchFactory() on the token returns that factory. liquidityPool() returns the same v3 pool. LP NFT 129850 was transferred to PonsLaunchLocker 0x736D…7F35. [verified R-4 R-5 R-12]

Verified token source says launch protections apply only to canonical-pool buys during restrictionBlocks (366), then the token is a plain ERC-20. Constructor socials were empty. Secondary YOLO/USDG and YOLO/ETH books exist on DexScreener with far less liquidity than the WETH book. [verified R-2 R-7]

## Control and security

Token owner() reverts. Deployer 0xE0b5…3e55 has no code. Factory owner() returns Safe 0x263ed295…19Dd. setInitialBuyRecipient is launchFactory-only. [verified R-5]

PonsLauncherToken and PonsLaunchFactory are fully verified on Blockscout (contracts/src/PonsLauncherToken.sol, contracts/src/PonsLaunchFactory.sol, compiler v0.8.30). No audit report URL was located this pass. [verified R-2 R-3] [unknown]

## Team and provenance

yolorh.com embeds CA 0x62C71c…32eA and sets twitter:site to @yolorobinhood_. That account posted the CA on 2026-09-02T18:36:19Z; bio matches on-chain description THE SPIRIT OF GOING ALL-IN. Constructor socials were empty at launch. t.me/YoloCoinRH is DexScreener-listed with 131 subscribers and no CA in the public preview; flag third-party-link. X user search also returned @yolorobinhoodx, @YOLOROBINHOOD, and @Yolo_robinhood; flag handle-collision. [verified R-13 R-14] [claim R-15 R-20]

## Economics and activity

YOLO/WETH Uniswap v3 24h volume is 1291554.13 USD and liquidity.usd is 496388.58 at 2026-09-03T04:32:00Z from DexScreener. fdv/marketCap is 13474583. Gecko pool volume_usd.h24 is 1290205.57 and reserve_in_usd is 494290.36. Gecko token volume_usd.h24 is 1724566.66 across all pools, not the WETH book. [claim R-7 R-8 R-9]

Blockscout holders_count 11488. Pair created 2026-07-15T07:15:15Z. [claim R-1 R-7]

## Material risks

- Constructor socials are empty; site and handle are later surfaces. [verified R-2 R-13]
- Other X handles share the YOLO / Robinhood naming. [claim R-20]
- Claim-portal and vote posts reuse the CA on netlify hosts. [claim R-16 R-17]
- No audit report URL this pass. [unknown]
- Quote token is WETH; pool USD reserve is YOLO plus WETH. [claim R-7 R-8]

## Verification passes

- Receipts: Blockscout token/source/factory/pool/WETH/locker and launch tx 0xc276…7644, RPC name/symbol/launchFactory/liquidityPool/socials/owner, DexScreener, Gecko token/pool (first GET 200), yolorh.com, @yolorobinhood_ CA post, Telegram preview, and X latest were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-7 R-13]
- Numbers: 1291554.13 is the DexScreener YOLO/WETH v3 24h volume, not the 1724566.66 Gecko token all-pools figure. Liquidity 496388.58 is that book. Holders 11488 is Blockscout token holders_count. [claim R-1 R-7 R-9]
- Adversarial: the strongest contrary reading is that YOLO is an official Pons or Robinhood product. Factory is PonsLaunchFactory but the token is a separate ERC-20; yolorh.com / @yolorobinhood_ are not ponsfamily.com / @ponsdotfamily. [inference R-3 R-13]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no yolo / YOLO / 0x62C71c…32eA.
- Explorer: Blockscout api/v2 token, address, smart-contract, factory, pool, WETH, locker, launchToken 0xc276…7644, TokenLaunched / PositionLocked logs, holders. RPC eth_getCode/eth_call/eth_getTransactionByHash with Chrome UA at block 53138366.
- Aggregators: DexScreener latest/dex/tokens (book confirmed). Gecko first GET 200 on token then pool; no 429 loop.
- Social: X Latest keyword YOLO + CA; from:yolorobinhood_; user search YOLO robinhood; t.me/YoloCoinRH preview; yolorh.com.
- Failed: constructor socials empty so DexScreener/site/handle are later claims; t.co/iQrS2Fqqwf did not expose a redirect target; TG preview has no CA; launchBlock() 25536491 ≠ tx blockNumber 10204613.
- Time: collection 2026-09-03T04:30Z–2026-09-03T04:40Z.
