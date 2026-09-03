---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: shrub
name: SHRUB
packet_tier: seed
as_of: 2026-09-03T04:18:00Z
prior_packet: null
supersedes: null
owned_slugs: [shrub]
allowed_paths:
  - research/inbox/packets/shrub/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: SHRUB
  aliases: ["Lil' Shrub"]
  symbols: [SHRUB]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: https://www.lilshrub.fun
  official_handle: "NULL — DexScreener, verified source header, and lilshrub.fun list @lilshrub_RH; the account display name and bio say FAN account; flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko, Blockscout, lilshrub.fun, or X search this pass"
  possible_matches:
    - slug: long
      signals: [ticker-only]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "This SHRUB is an EOA-created token at 0x5d91…920c quoting WETH, not TSLA/SPCX LongLauncher clones"
        - "Same-ticker LongLauncher SHRUB/TSLA and SHRUB/SPCX books are different CAs (0x8eAe…1e18, 0xA970…446D, 0xD4D4…1E18)"
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "SHRUB is Lil' Shrub 0x5d91…920c paired to WETH 0x0Bd7…AD73 on Uniswap v2"
        - "No shared domain, handle, or reproduced address"
    - slug: pools-trade
      signals: [other]
      contrary_signals:
        - "Census pools.trade is Uniswap Labs' Uniswap v4 pad at pools.trade / @TradePools; factory 0x000000e2…d49b"
        - "SHRUB is an EOA-deployed Uniswap v2 WETH token at 0x5d91…920c, not a UERC20Factory clone"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: launch/graduation-token
  secondary_leaves: []
  mechanism_tags: [amm]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x5d91…920c is a fully verified SHRUB ERC-20 with non-empty code on 4663; enableTrading on 2026-08-30T18:41:45Z created Uniswap v2 pair 0x4a6a…1307 quoted against WETH 0x0Bd7…AD73. ETH book, not stock-paired. Distinct from in-flight CHUMP/WETH. @lilshrub_RH is unconfirmed-official (FAN bio). [R-1] [R-4] [R-6] [R-7] [R-13]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-8, CLM-10], note: "" }

links:
  - { kind: site, url: "https://www.lilshrub.fun", authenticity: confirmed }
  - { kind: x, url: "https://x.com/lilshrub_RH", authenticity: unconfirmed }
  - { kind: other, url: "https://x.com/shivon/status/2094128160669311355", authenticity: unconfirmed }

deployments:
  - label: SHRUB token (Lil' Shrub ERC-20)
    role: token
    address:
      value: "0x5d9144d2d017386519a7134Fcc7f1E4bA22f920c"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:07:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: full
    receipt_ids: [R-1, R-3, R-4]
  - label: Uniswap v2 SHRUB/WETH pair
    role: other
    address:
      value: "0x4a6A85252A6F6B383A5f747259EE157e65fF1307"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:07:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-12, R-13]
  - label: UniswapV2Factory (pair creator)
    role: factory
    address:
      value: "0x8bcEaA40B9AcdfAedF85AdF4FF01F5Ad6517937f"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:10:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-12, R-14]
  - label: Uniswap V2 router (enableTrading hardcoded)
    role: router
    address:
      value: "0x89e5DB8B5aA49aA85AC63f691524311AEB649eba"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:12:00Z
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-3, R-5, R-13]
  - label: WETH (pair quote)
    role: token
    address:
      value: "0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:10:00Z
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-5, R-6, R-18]

metrics:
  - { kind: volume_24h, value: 4410952.00347461, currency: USD, as_of: 2026-09-03T04:07:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x4a6a85252a6f6b383a5f747259ee157e65ff1307 volume_usd.h24", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 164487.0784, currency: USD, as_of: 2026-09-03T04:07:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x4a6a85252a6f6b383a5f747259ee157e65ff1307 reserve_in_usd (SHRUB/WETH pool, not an all-pools figure)", class: claim, receipt_ids: [R-7] }
  - { kind: volume_24h, value: 4437066.72, currency: USD, as_of: 2026-09-03T04:06:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x5d9144d2d017386519a7134fcc7f1e4ba22f920c pair 0x4a6A…1307 volume.h24", class: claim, receipt_ids: [R-6] }
  - { kind: tvl, value: 162882.82, currency: USD, as_of: 2026-09-03T04:06:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x5d9144d2d017386519a7134fcc7f1e4ba22f920c pair 0x4a6A…1307 liquidity.usd", class: claim, receipt_ids: [R-6] }
  - { kind: market_cap, value: 9785921.318, currency: USD, as_of: 2026-09-03T04:07:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x4a6a85252a6f6b383a5f747259ee157e65ff1307 market_cap_usd", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 4798, currency: null, as_of: 2026-09-03T04:07:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x5d9144d2d017386519a7134Fcc7f1E4bA22f920c holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:07:00Z, receipt_ids: [R-4], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237 (4663) eth_blockNumber 0x32a9a08 (53124115). Token 0x5d91…920c eth_getCode 19205 bytes prefix 6080604052 (not EIP-1167). name Lil' Shrub, symbol SHRUB, decimals 9, totalSupply 1e18. owner() 0x0000…0000. factory() reverts. Creator 0x2451…C08B eth_getCode 0x." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:10:00Z, receipt_ids: [R-1, R-2, R-3, R-12, R-13, R-14], result: "Blockscout api/v2 token 0x5d91…920c name Lil' Shrub symbol SHRUB holders_count 4798 total_supply 1e18 decimals 9 is_verified true. Creation tx 0x808d3c6c…615f 2026-08-30T18:39:01Z block 50229145 from EOA 0x2451…C08B to null created_contract SHRUB. Source contracts/shrub.sol compiler v0.8.13 is_fully_verified true verified_at 2026-08-30T18:39:40Z. enableTrading tx 0x75827ea9…544a 2026-08-30T18:41:45Z block 50230758 PairCreated on UniswapV2Factory 0x8bcE…937f pair 0x4a6A…1307." }
  - { id: REP-3, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:16:00Z, receipt_ids: [R-5], result: "Pool 0x4a6A…1307 code 11293 B; token0 WETH 0x0bd7…ad73 token1 SHRUB 0x5d91…920c. Router 0x89e5…9eba code 21902 B WETH() 0x0bd7…ad73. Factory 0x8bcE…937f code 13859 B getPair(SHRUB,WETH) 0x4a6a…1307. At block 53126178 UniswapV2Pair totalSupply 278578467179790637327; balanceOf(0x2451…C08B) 277561577247222827089; balanceOf(0xdead) 999999999999999000; balanceOf(0x0) 1000." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T04:07:00Z, receipt_ids: [R-7, R-8, R-9], result: "Gecko pool 0x4a6a…1307 name SHRUB / WETH dex uniswap-v2-robinhood quote 0x0bd7…ad73 pool_created_at 2026-08-30T18:41:45Z volume_usd.h24 4410952.00347461 reserve_in_usd 164487.0784 fdv_usd 9784126.67368779 market_cap_usd 9785921.318. Token name Lil' Shrub symbol SHRUB decimals 9 volume_usd.h24 4439897.42367239 fdv_usd 9964405.48391587. trending_pools page 1 row 4 SHRUB/WETH volume_usd.h24 4440857.90867239 reserve_in_usd 162935.7777; row 1 CHUMP/WETH." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T04:06:00Z, receipt_ids: [R-6], result: "DexScreener latest/dex/tokens/0x5d91…920c: 1 robinhood uniswap pair SHRUB/WETH labels v2 pair 0x4a6A…1307 quote WETH 0x0Bd7…AD73 liquidity.usd 162882.82 volume.h24 4437066.72 fdv/marketCap 9836335 pairCreatedAt 1788115305000 info.websites https://www.lilshrub.fun/ info.socials https://x.com/lilshrub_RH. baseToken.name Lil' Shrub." }
  - { id: REP-6, method: official-crosslink, checked_at: 2026-09-03T04:12:00Z, receipt_ids: [R-3, R-6, R-10, R-11], result: "lilshrub.fun posts CA 0x5d9144d2d017386519a7134fcc7f1e4ba22f920c and DexScreener robinhood/0x4a6A…1307 and links https://x.com/lilshrub_RH. Verified source header comments the same three URLs. @lilshrub_RH bio embeds the CA and says FAN account. DexScreener lists the site and that handle." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "EOA 0x2451…C08B deployed a 1e9-supply (9 decimals) SHRUB ERC-20 then called enableTrading(), which hardcoded Uniswap V2 router 0x89e5…9eba, created UniswapV2Pair SHRUB/WETH 0x4a6A…1307, and addLiquidityETH to owner().", class: verified, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-2, R-3, R-5, R-13], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Lil' Shrub", class: verified, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-1, R-3, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "SHRUB", class: verified, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-1, R-3, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x5d9144d2d017386519a7134Fcc7f1E4bA22f920c", class: verified, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-1, R-2, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-1, R-4, R-6, R-7], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-6, field: deployment.address, value: "0x4a6A85252A6F6B383A5f747259EE157e65fF1307", class: verified, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-5, R-6, R-7, R-13], reproduction_ids: [REP-3, REP-4, REP-5], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T04:18:00Z, receipt_ids: [R-2, R-6, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — @lilshrub_RH listed on DexScreener, verified source header, and lilshrub.fun with CA in bio; display name and bio say FAN account; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-6, R-10, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Flagship book is Uniswap v2 SHRUB/WETH, not a stock-paired TSLA/SPCX/FAMI pool. Distinct from Gecko trending CHUMP/WETH 0x7144…cfb8 and from LongLauncher same-ticker SHRUB clones.", class: verified, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-6, R-7, R-9], reproduction_ids: [REP-4, REP-5], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "Gecko SHRUB/WETH pool volume_usd.h24 4410952.00347461 and reserve_in_usd 164487.0784 at 2026-09-03T04:07:00Z (pool slice, not Gecko token 4439897.42)", class: verified, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 162882.82 volume.h24 4437066.72 fdv/marketCap 9836335 at 2026-09-03T04:06:00Z", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-6], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 4798, class: verified, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "owner() returns 0x0000…0000 at block 53124115. Verified source addBlocked/addB/approveTrade/enableTrading are onlyOwner.", class: verified, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-3, R-4], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "UniswapV2Pair LP balanceOf(deployer 0x2451…C08B) 277561577247222827089 of totalSupply 278578467179790637327 at block 53126178; balanceOf(0xdead) 999999999999999000", class: verified, observed_at: 2026-09-03T04:16:00Z, receipt_ids: [R-5], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73; venue is Uniswap v2 pair 0x4a6A…1307 via factory 0x8bcE…937f / router 0x89e5…9eba", class: verified, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-5, R-6, R-7, R-18], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash is EOA 0x2451B20Ed4ca06f5e294CFcA540da9240257C08B (creation to null), not Pons, LONG, pools.trade, NOXA, or hood.fun", class: verified, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-1, R-2, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-4, R-6], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, lilshrub.fun, or X search this pass", class: unknown, observed_at: 2026-09-03T04:18:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "unconfirmed-official: @lilshrub_RH FAN bio; third-party-link: @lilshrub_RH_ and @lilshrub_RH_S copy the CA; @lilshrub_RH_S posted a support/airdrop DM link", class: claim, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-11, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko pool fdv_usd 9784126.67 market_cap_usd 9785921.32; DexScreener fdv/marketCap 9836335; Gecko token fdv_usd 9964405.48", class: verified, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-6, R-7, R-8], reproduction_ids: [REP-4, REP-5], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x8bcEaA40B9AcdfAedF85AdF4FF01F5Ad6517937f", class: verified, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-12, R-14], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x89e5DB8B5aA49aA85AC63f691524311AEB649eba", class: verified, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-3, R-5, R-13], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "https://www.lilshrub.fun — posts CA 0x5d91…920c and the DexScreener pool; page copy also says Living on Solana / Jupiter or Raydium", class: claim, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-6, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: candidate, value: "shrub | SHRUB | NULL | https://www.lilshrub.fun — discovery token not in census 49", class: claim, observed_at: 2026-09-03T04:18:00Z, receipt_ids: [R-1, R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: control.privileged-role, value: "lilshrub.fun tokenomics copy: 100% LP Burnt in the shrub", class: claim, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: activity.status, value: "Gecko trending_pools page 1 row 4 SHRUB/WETH volume_usd.h24 4440857.91 reserve_in_usd 162935.78 this pass; prior GO-LIVE capture was ~$6.78M vol / ~$147k liq", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-27, field: "account.@lilshrub_RH.flags", value: unconfirmed-official, class: claim, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: "account.@lilshrub_RH_.flags", value: copypasta-pattern, class: claim, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-29, field: "account.@lilshrub_RH_S.flags", value: copypasta-pattern, class: claim, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-30, field: control.privileged-role, value: "Verified source: _taxWallet is constructor msg.sender; manualSwap/manualSend/reduceFee require _taxWallet; addBlocked/_isBlocked are onlyOwner", class: verified, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-3], reproduction_ids: [REP-2], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-10, CLM-11]
    material_effect: "24h volume is $4.411M on the Gecko flagship pool, $4.437M on DexScreener for the same pool, $4.440M on the Gecko token, and $11.149M on Blockscout token.volume_24h; a card that collapses them would misstate activity"
    status: open
    resolution: null
  - id: CON-2
    field: economics.metric
    claim_ids: [CLM-10, CLM-11]
    material_effect: "Flagship-pool liquidity is $164487 on Gecko reserve_in_usd and $162883 on DexScreener liquidity.usd"
    status: open
    resolution: null
  - id: CON-3
    field: control.privileged-role
    claim_ids: [CLM-14, CLM-25]
    material_effect: "Site copy says 100% LP burnt; RPC shows the deployer still holds 277561577247222827089 of 278578467179790637327 UniswapV2Pair tokens"
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "Gecko SHRUB/WETH 24h volume $4.41M, liquidity $164k"
    summary: "Gecko pool 0x4a6a…1307 volume_usd.h24 4410952 reserve_in_usd 164487 fdv_usd 9784127. Trending row 4."
    occurred_at: 2026-09-03T04:07:00Z
    observed_at: 2026-09-03T04:07:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7, R-9]
  - id: EVT-2
    type: ct
    title: "@lilshrub_RH posted SHRUB as top trending on Gecko"
    summary: "Post linked geckoterminal.com/robinhood/pools and the SHRUB/WETH pool 0x4a6a…1307."
    occurred_at: 2026-09-02T13:18:59Z
    observed_at: 2026-09-03T04:08:00Z
    affected_fields: [activity.status, identity.handle]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-16]
  - id: EVT-3
    type: ct
    title: "@gimoquoi posted that SHRUB source has a sell-block switch"
    summary: "Post named CA 0x5d91…920c and @lilshrub_RH and said onlyOwner can block sells."
    occurred_at: 2026-09-01T21:07:50Z
    observed_at: 2026-09-03T04:08:00Z
    affected_fields: [control.privileged-role, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-15]
  - id: EVT-4
    type: ct
    title: "@lilshrub_RH posted a CoinGecko lil-shrub listing"
    summary: "Post: lil-shrub:native has listed on coingecko.com/en/coins/lil-shrub."
    occurred_at: 2026-09-01T20:35:05Z
    observed_at: 2026-09-03T04:08:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-17]
  - id: EVT-5
    type: onchain
    title: "enableTrading created Uniswap v2 SHRUB/WETH"
    summary: "Tx 0x7582…544a from 0x2451…C08B at 2026-08-30T18:41:45Z; PairCreated pool 0x4a6A…1307."
    occurred_at: 2026-08-30T18:41:45Z
    observed_at: 2026-09-03T04:10:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-12, R-13]
  - id: EVT-6
    type: onchain
    title: "EOA deployed Lil' Shrub / SHRUB"
    summary: "Tx 0x808d…615f from 0x2451…C08B at 2026-08-30T18:39:01Z created 0x5d91…920c."
    occurred_at: 2026-08-30T18:39:01Z
    observed_at: 2026-09-03T04:07:00Z
    affected_fields: [deployment.address, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-2]
  - id: EVT-7
    type: ct
    title: "@shivon posted Lil' Shrub in a shrub"
    summary: "Photo post at 2026-08-30T18:20:35Z; verified token source header comments that status."
    occurred_at: 2026-08-30T18:20:35Z
    observed_at: 2026-09-03T04:08:00Z
    affected_fields: [identity.alias, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-20]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x5d91…920c Lil' Shrub / SHRUB", url: "https://robinhoodchain.blockscout.com/address/0x5d9144d2d017386519a7134Fcc7f1E4bA22f920c", published_at: null, accessed_at: 2026-09-03T04:07:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-5, CLM-12, CLM-16, CLM-24], excerpt: "hash 0x5d9144d2d017386519a7134Fcc7f1E4bA22f920c name SHRUB is_contract true is_verified true creator_address_hash 0x2451B20Ed4ca06f5e294CFcA540da9240257C08B creation_transaction_hash 0x808d3c6caf1940cd4b3509282ed2f461ba714c0224f3704de6602407d241615f. token name Lil' Shrub symbol SHRUB decimals 9 total_supply 1000000000000000000 holders_count 4798 type ERC-20 volume_24h 11149252.758453792." }
  - { id: R-2, publisher: Blockscout, title: "SHRUB creation tx 0x808d3c6c…615f", url: "https://robinhoodchain.blockscout.com/tx/0x808d3c6caf1940cd4b3509282ed2f461ba714c0224f3704de6602407d241615f", published_at: 2026-08-30T18:39:01Z, accessed_at: 2026-09-03T04:07:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-16, EVT-6], excerpt: "timestamp 2026-08-30T18:39:01.000000Z status ok result success block_number 50229145 from 0x2451B20Ed4ca06f5e294CFcA540da9240257C08B (is_contract false) to null created_contract SHRUB 0x5d9144d2d017386519a7134Fcc7f1E4bA22f920c is_verified true." }
  - { id: R-3, publisher: Blockscout, title: "SHRUB verified source contracts/shrub.sol", url: "https://robinhoodchain.blockscout.com/address/0x5d9144d2d017386519a7134Fcc7f1E4bA22f920c?tab=contract", published_at: null, accessed_at: 2026-09-03T04:12:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-13, CLM-22, CLM-30], excerpt: "ContractName SHRUB file_path contracts/shrub.sol compiler v0.8.13+commit.abaa5c0e is_fully_verified true. Header comments lilshrub.fun and x.com/lilshrub_RH. enableTrading sets router 0x89e5DB8B5aA49aA85AC63f691524311AEB649eba and createPair(this, WETH). addBlocked/addB onlyOwner. _taxWallet = msg.sender. buy/sell tax initials 0." }
  - { id: R-4, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, owner() on SHRUB", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:07:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-13, CLM-16, CLM-17], excerpt: "eth_blockNumber 0x32a9a08 (53124115) eth_chainId 0x1237. Token code 19205 B prefix 6080604052. name Lil' Shrub symbol SHRUB decimals 9 totalSupply 1000000000000000000. owner() 0x0000000000000000000000000000000000000000. factory() reverts. Creator 0x2451…C08B code 0x." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "pool token0/token1, factory.getPair, LP balances", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:16:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-6, CLM-14, CLM-15, CLM-22], excerpt: "Pool code 11293 B token0 0x0bd7d308f8e1639fab988df18a8011f41eacad73 token1 0x5d9144d2d017386519a7134fcc7f1e4ba22f920c. Factory getPair returns 0x4a6a85252a6f6b383a5f747259ee157e65ff1307. Router WETH() same WETH. LP totalSupply 278578467179790637327 balanceOf(0x2451…C08B) 277561577247222827089 balanceOf(0xdead) 999999999999999000 at block 53126178." }
  - { id: R-6, publisher: DexScreener, title: "latest/dex/tokens SHRUB", url: "https://api.dexscreener.com/latest/dex/tokens/0x5d9144d2d017386519a7134fcc7f1e4ba22f920c", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-9, CLM-11, CLM-15, CLM-17, CLM-20, CLM-23, CLM-24], excerpt: "1 robinhood uniswap pair. pairAddress 0x4a6A85252A6F6B383A5f747259EE157e65fF1307 labels v2 base Lil' Shrub / SHRUB quote WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73 liquidity.usd 162882.82 volume.h24 4437066.72 fdv 9836335 marketCap 9836335 pairCreatedAt 1788115305000. info.websites https://www.lilshrub.fun/ info.socials https://x.com/lilshrub_RH." }
  - { id: R-7, publisher: GeckoTerminal, title: "SHRUB/WETH Uniswap v2 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x4a6a85252a6f6b383a5f747259ee157e65ff1307", published_at: null, accessed_at: 2026-09-03T04:07:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-5, CLM-7, CLM-9, CLM-10, CLM-15, CLM-20, EVT-1], excerpt: "name SHRUB / WETH pool_created_at 2026-08-30T18:41:45Z fdv_usd 9784126.67368779 market_cap_usd 9785921.318 volume_usd.h24 4410952.00347461 reserve_in_usd 164487.0784 transactions.h24 buys 2815 sells 987. dex uniswap-v2-robinhood quote robinhood_0x0bd7d308f8e1639fab988df18a8011f41eacad73." }
  - { id: R-8, publisher: GeckoTerminal, title: "Lil' Shrub token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x5d9144d2d017386519a7134fcc7f1e4ba22f920c", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, CLM-20], excerpt: "name Lil' Shrub symbol SHRUB decimals 9 total_supply 1000000000000000000.0 normalized_total_supply 1000000000.0 fdv_usd 9964405.48391587 market_cap_usd 10057268.12 volume_usd.h24 4439897.42367239 coingecko_coin_id lil-shrub. Top pool 0x4a6a…1307." }
  - { id: R-9, publisher: GeckoTerminal, title: "Robinhood trending_pools page 1", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/trending_pools?page=1", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9, CLM-26, EVT-1], excerpt: "Row 1 CHUMP / WETH 1% volume_usd.h24 5564203.53 reserve_in_usd 1100286.55 id robinhood_0x714442e9a611f8561a7df108d6d925132937cfb8. Row 4 SHRUB / WETH volume_usd.h24 4440857.90867239 reserve_in_usd 162935.7777 fdv_usd 10045033.1191663 pool_created_at 2026-08-30T18:41:45Z dex uniswap-v2-robinhood." }
  - { id: R-10, publisher: lilshrub.fun, title: "Lil' SHRUB site", url: "https://www.lilshrub.fun/", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-23, CLM-25], excerpt: "CA 0x5d9144d2d017386519a7134fcc7f1e4ba22f920c. Buy $SHRUB chart Open full chart dexscreener.com/robinhood/0x4a6A85252A6F6B383A5f747259EE157e65fF1307. Join https://x.com/lilshrub_RH. Tokenomics: 1,000,000,000 total supply; 0/0 tax; 100% LP Burnt in the shrub; Robinhood Chain. Page also: Living on Solana; Jupiter or Raydium." }
  - { id: R-11, publisher: "@lilshrub_RH", title: "Lil' Shrub FAN profile", url: "https://x.com/lilshrub_RH", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, CLM-27, CLM-28], excerpt: "Name Lil' Shrub FAN handle @lilshrub_RH. Bio: Lil' Shrub FAN is a fan account. Lil' Shrub in a shrub. CA: 0x5d9144d2d017386519a7134fcc7f1e4ba22f920c. Nearby handles @lilshrub_RH_ and @lilshrub_RH_S also embed that CA." }
  - { id: R-12, publisher: Blockscout, title: "enableTrading tx logs PairCreated", url: "https://robinhoodchain.blockscout.com/tx/0x75827ea9a2ff9f4f7bcdf58bd72cb74c002464bf150f1b916ac494012751544a", published_at: 2026-08-30T18:41:45Z, accessed_at: 2026-09-03T04:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-6, CLM-21, EVT-5], excerpt: "timestamp 2026-08-30T18:41:45.000000Z status ok block_number 50230758 from 0x2451B20Ed4ca06f5e294CFcA540da9240257C08B to SHRUB method enableTrading(). Logs: PairCreated on UniswapV2Factory 0x8bcEaA40B9AcdfAedF85AdF4FF01F5Ad6517937f pair UniswapV2Pair 0x4a6A85252A6F6B383A5f747259EE157e65fF1307; Mint on that pair." }
  - { id: R-13, publisher: Blockscout, title: "enableTrading decoded input", url: "https://robinhoodchain.blockscout.com/tx/0x75827ea9a2ff9f4f7bcdf58bd72cb74c002464bf150f1b916ac494012751544a", published_at: 2026-08-30T18:41:45Z, accessed_at: 2026-09-03T04:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-6, CLM-22, EVT-5], excerpt: "decoded method_call enableTrading() method_id 8a8c523c. Internal: staticcall router 0x89e5DB8B5aA49aA85AC63f691524311AEB649eba; call factory 0x8bcE…937f; create2 UniswapV2Pair 0x4a6A…1307; WETH transfers via 0x0Bd7…AD73." }
  - { id: R-14, publisher: Blockscout, title: "Address 0x8bcE…937f UniswapV2Factory", url: "https://robinhoodchain.blockscout.com/address/0x8bcEaA40B9AcdfAedF85AdF4FF01F5Ad6517937f", published_at: null, accessed_at: 2026-09-03T04:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-21], excerpt: "hash 0x8bcEaA40B9AcdfAedF85AdF4FF01F5Ad6517937f name UniswapV2Factory is_contract true is_verified true creator_address_hash 0x9701fb0aDe1E269c8f64Ec0C7b3cfADB31A13A52." }
  - { id: R-15, publisher: "@gimoquoi", title: "Post naming a SHRUB sell-block switch", url: "https://x.com/gimoquoi/status/2094895028518760952", published_at: 2026-09-01T21:07:50Z, accessed_at: 2026-09-03T04:08:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-3], excerpt: "Warning post about $SHRUB (Lil' Shrub, @lilshrub_RH) on Robinhood: says the token has a switch that can be activated at any time and will block any attempt to sell the token for anyone except the owner. CA: 0x5d9144d2d017386519a7134Fcc7f1E4bA22f920c" }
  - { id: R-16, publisher: "@lilshrub_RH", title: "$SHRUB is Top trending Token on Geckoterminal", url: "https://x.com/lilshrub_RH/status/2095139427211424074", published_at: 2026-09-02T13:18:59Z, accessed_at: 2026-09-03T04:08:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-2], excerpt: "$SHRUB is Top trending Token on Geckoterminal. https://www.geckoterminal.com/robinhood/pools https://www.geckoterminal.com/robinhood/pools/0x4a6a85252a6f6b383a5f747259ee157e65ff1307 #SHRUB #Robinhood" }
  - { id: R-17, publisher: "@lilshrub_RH", title: "lil-shrub listed on CoinGecko", url: "https://x.com/lilshrub_RH/status/2094886783838490747", published_at: 2026-09-01T20:35:05Z, accessed_at: 2026-09-03T04:08:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-4], excerpt: "lil-shrub:native has listed on https://www.coingecko.com/ https://www.coingecko.com/en/coins/lil-shrub" }
  - { id: R-18, publisher: Blockscout, title: "Token 0x0Bd7…AD73 WETH", url: "https://robinhoodchain.blockscout.com/token/0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73", published_at: null, accessed_at: 2026-09-03T04:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-15], excerpt: "address_hash 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73 name WETH symbol WETH decimals 18 holders_count 526319 type ERC-20." }
  - { id: R-19, publisher: "@lilshrub_RH_S", title: "Support account DM post", url: "https://x.com/lilshrub_RH_S/status/2095295911593140317", published_at: 2026-09-02T23:40:48Z, accessed_at: 2026-09-03T04:08:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-19, CLM-29], excerpt: "Name Lil' Shrub | SUPPORT handle @lilshrub_RH_S. Bio embeds CA 0x5d9144d2d017386519a7134fcc7f1e4ba22f920c. Post: Kindly get in touch via DM for Purchasing/claiming, Lost Token, How to claim Airdrop, How to claim 45% reward." }
  - { id: R-20, publisher: "@shivon", title: "Lil' Shrub in a shrub", url: "https://x.com/shivon/status/2094128160669311355", published_at: 2026-08-30T18:20:35Z, accessed_at: 2026-09-03T04:08:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-7], excerpt: "Lil' Shrub in a shrub. Photo of a hedgehog. Timestamp Sun, 30 Aug 2026 18:20:35 GMT. Verified SHRUB source header comments this status URL." }
  - { id: R-21, publisher: GeckoTerminal, title: "SHRUB/WETH pool page", url: "https://www.geckoterminal.com/robinhood/pools/0x4a6a85252a6f6b383a5f747259ee157e65ff1307", published_at: null, accessed_at: 2026-09-03T04:07:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "Gecko HTML pool page for SHRUB/WETH on Uniswap V2 (Robinhood). Pool 0x4a6a…1307 base 0x5d91…920c quote 0x0bd7…ad73." }

gaps:
  - { priority: P0, question: "Is @lilshrub_RH bidirectional-official despite the FAN display name and bio?", checked: "Site, DexScreener, and verified source header list it; bio embeds the CA and says FAN account, 2026-09-03", next: "re-read the profile website field and any pinned post that links lilshrub.fun without the FAN label" }
  - { priority: P0, question: "Does the deployer later burn or transfer the UniswapV2Pair LP that RPC still shows at 0x2451…C08B?", checked: "At block 53126178 balanceOf(deployer) 277561577247222827089 of LP totalSupply 278578467179790637327; site copy says 100% LP burnt, 2026-09-03", next: "re-read pair balanceOf(0x2451…C08B) and 0xdead" }
  - { priority: P1, question: "Is _taxWallet still 0x2451…C08B, and do manualSwap/manualSend remain callable?", checked: "_taxWallet is private with no getter; constructor sets it to msg.sender; owner() is zero so onlyOwner paths revert, 2026-09-03", next: "trace a taxWallet-gated tx or read storage slot if a getter appears" }
  - { priority: P1, question: "Which same-ticker LongLauncher SHRUB/TSLA or SHRUB/SPCX clones should stay collision-only?", checked: "Gecko search and DexScreener search returned 0x8eAe…1e18, 0xA970…446D, 0xD4D4…1E18 and others with far lower WETH-book volume than 0x5d91…920c, 2026-09-03", next: "leave them out of this slug unless a later assignment names one" }
  - { priority: P2, question: "Which Gecko trending window printed SHRUB/WETH ~$6.78M vol / ~$147k liq?", checked: "Live Gecko pool volume_usd.h24 4410952 reserve 164487; trending row 4 vol 4440857 reserve 162936 this pass, 2026-09-03", next: "cite the GO-LIVE capture only as history; do not treat $6.78M as live" }
---

# SHRUB — research packet

## What it is

An EOA-deployed one-billion-supply ERC-20. enableTrading created a Uniswap v2 SHRUB/WETH pair and seeded liquidity. Traders buy and sell SHRUB against WETH. lilshrub.fun posts the contract; DexScreener lists @lilshrub_RH, whose bio is a FAN account.

Themes: memecoin, hedgehog

## Why it matters

The SHRUB/WETH Uniswap v2 book is live on Gecko trending this pass (row 4) at about $4.41M of 24h volume and $164k reserve, versus a prior GO-LIVE capture near $6.78M / $147k. The quote is WETH, not a tokenized stock. CHUMP/WETH is a different trending pool.

## What could go wrong

USD liquidity on the SHRUB/WETH book counts both sides. lilshrub.fun says LP is burnt; RPC shows the deployer still holds nearly all UniswapV2Pair tokens. @lilshrub_RH is a FAN-labelled handle. The verified source keeps onlyOwner block lists and a _taxWallet path.

## Product and mechanics

EOA 0x2451…C08B deployed SHRUB 0x5d91…920c at 2026-08-30T18:39:01Z (tx 0x808d…615f). enableTrading at 2026-08-30T18:41:45Z (tx 0x7582…544a) set Uniswap V2 router 0x89e5…9eba, called factory 0x8bcE…937f createPair against WETH, and addLiquidityETH. [verified R-2 R-3 R-13]

Flagship pair is Uniswap v2 SHRUB/WETH 0x4a6A…1307. Gecko names dex uniswap-v2-robinhood. Quote token is WETH 0x0Bd7…AD73, not TSLA/SPCX/FAMI. Same-ticker LongLauncher SHRUB clones exist with much smaller books. [verified R-6 R-7 R-9]

## Control and security

owner() returns the zero address. Verified source addBlocked, addB, approveTrade, and enableTrading are onlyOwner. _taxWallet is set to constructor msg.sender; manualSwap, manualSend, and reduceFee require that wallet. [verified R-3 R-4]

UniswapV2Pair LP balanceOf(deployer) is 277561577247222827089 of totalSupply 278578467179790637327 at block 53126178; 0xdead holds 999999999999999000. Site copy says 100% LP burnt. No audit report URL this pass. [verified R-5] [claim R-10] [unknown]

## Team and provenance

lilshrub.fun posts the CA and the DexScreener pool and links @lilshrub_RH. Verified source header comments the same site, handle, and @shivon status 2094128160669311355. The handle bio embeds the CA and says FAN account. Flag unconfirmed-official. @lilshrub_RH_ and @lilshrub_RH_S copy the CA; flag copypasta-pattern. [claim R-10 R-11 R-19]

## Economics and activity

Gecko SHRUB/WETH 24h volume is 4410952.00 USD and reserve_in_usd is 164487.08 at 2026-09-03T04:07:00Z from the pool endpoint. fdv_usd is 9784126.67. Gecko token volume_usd.h24 is 4439897.42. [claim R-7 R-8]

DexScreener same pair: liquidity.usd 162882.82, volume.h24 4437066.72, fdv/marketCap 9836335. Blockscout holders_count 4798. Pair created 2026-08-30T18:41:45Z. [claim R-1 R-6]

Gecko trending_pools page 1 row 4 is this SHRUB/WETH book (vol 4440857.91 / reserve 162935.78); row 1 is CHUMP/WETH. Assignment lead of ~$6.78M vol / ~$147k liq was not the live pool slice this as_of. [claim R-9]

## Material risks

- Quote token is WETH 0x0Bd7…AD73, not a Robinhood Stock Token. [verified R-6 R-18]
- Deployer 0x2451…C08B holds nearly all UniswapV2Pair LP at block 53126178. [verified R-5]
- @lilshrub_RH is unconfirmed-official (FAN bio). [claim R-11]
- Verified source has onlyOwner addBlocked and a _taxWallet path. [verified R-3]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/create/enableTrading/factory/WETH, RPC name/symbol/owner/token0/getPair/LP balances, DexScreener, Gecko pool/token/trending, lilshrub.fun, @lilshrub_RH, @shivon, @gimoquoi were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-4 R-6 R-7]
- Numbers: 4410952.00 is the Gecko SHRUB/WETH pool 24h volume, not the 4439897.42 token figure or Blockscout 11149252.76. Reserve 164487.08 is that pool. DexScreener 4437066.72 / 162882.82 is the same pair, different aggregator. [claim R-6 R-7 R-8]
- Adversarial: the strongest contrary reading is that this is a stock-paired LongLauncher SHRUB or the in-flight CHUMP/WETH book. Live DexScreener/Gecko quote WETH at 0x5d91…920c / 0x4a6A…1307; CHUMP is 0x7144…cfb8; TSLA-paired SHRUB clones are other CAs. [inference R-6 R-9]

## Operations log

- Base: assignment `base_sha` 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no shrub / SHRUB / Lil' Shrub / 0x5d91…920c.
- Explorer: Blockscout api/v2 token, create tx 0x808d…615f, enableTrading 0x7582…544a logs/internal, factory, WETH, verified source. RPC eth_getCode/eth_call with Chrome UA at blocks 53124115–53126178.
- Aggregators: DexScreener latest/dex/tokens and search; Gecko token, pool, search/pools, trending_pools page 1. Gecko token/pools HTTP 429 — not retried.
- Social: X user search lilshrub_RH / SHRUB; keyword Latest; @shivon 2094128160669311355; t.me not listed on DexScreener this pass.
- Site: https://www.lilshrub.fun CA and DexScreener pool; Solana/Jupiter copy noted.
- Failed: Blockscout without Chrome UA HTTP 403; Gecko token/pools 429; CoinGecko HTML was a login wall; router.factory() selector returned empty (pair still from factory.getPair).
- Time: collection 2026-09-03T04:05Z–2026-09-03T04:18Z.
