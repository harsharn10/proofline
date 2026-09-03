---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: normie
name: NORMIE
packet_tier: seed
as_of: 2026-09-03T04:53:00Z
prior_packet: null
supersedes: null
owned_slugs: [normie]
allowed_paths:
  - research/inbox/packets/normie/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: NORMIE
  aliases: ["normie"]
  symbols: [NORMIE]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: https://normie-rh.xyz
  official_handle: "@RH_normie"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko, Blockscout, normie-rh.xyz HTML/JS, or the @RH_normie profile this pass"
  possible_matches:
    - slug: pons
      signals: [shared-deployer]
      contrary_signals:
        - "Census Pons is the bonding-curve pad at ponsfamily.com / @ponsdotfamily with PonsV2LaunchFactory 0x7eD5…EC7e"
        - "NORMIE is the ERC-20 at 0x92ef7C…1612 created through that factory; entity_kind token, not protocol"
        - "No shared domain or handle; normie-rh.xyz / @RH_normie do not operate the Pons pad"
    - slug: longbow
      signals: [other]
      contrary_signals:
        - "Census Longbow is @longbowlend / longbow.cash with BOW 0x451b42… and BOW/SPY pool 0xdba9…f4c2"
        - "NORMIE is 0x92ef7C…1612 with NORMIE/SPY pool 0x8ece5548…b2e6"
        - "Shared quote rail SPY 0x117c…4C0C only; no shared domain, handle, or token address"
    - slug: stonks-fun
      signals: [other]
      contrary_signals:
        - "Census stonks-fun is a separate launchpad row"
        - "NORMIE is a Pons graduation token at 0x92ef7C…1612 / normie-rh.xyz / @RH_normie"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: launch/graduation-token
  secondary_leaves: [rwa-products/stock-paired-token]
  mechanism_tags: [bonding-curve, amm, stock-paired, rwa, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x92ef7C…1612 has 3248 B of code on 4663; name normie symbol NORMIE decimals 18 totalSupply 1e27. PonsV2LaunchAndBuy.launchAndBuy at 2026-09-02T02:15:30Z minted it against pairToken SPY 0x117c…4C0C; CurveCompleted / LaunchSwept at 2026-09-02T02:25:37Z into Uniswap v4 pool 0x8ece5548…b2e6. Distinct from packed PAIR/SPY, STACKS/SPY, and STRATTON/SPY. Site JS and @RH_normie bio embed the CA. Token source is not verified. [R-1] [R-4] [R-5] [R-7] [R-8] [R-14] [R-16]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-8], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: site, url: "https://normie-rh.xyz", authenticity: confirmed }
  - { kind: x, url: "https://x.com/RH_normie", authenticity: confirmed }

deployments:
  - label: NORMIE token
    role: token
    address:
      value: "0x92ef7CaA35F85f50311Fa5eD7ADE2D9786C61612"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:46:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-1, R-5, R-16]
  - label: PonsV2LaunchFactory (token launchFactory)
    role: factory
    address:
      value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:47:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-5, R-6, R-20]
  - label: PonsV2BondingCurve
    role: other
    address:
      value: "0xB75ECc0B9D174738D680B416a5760d24162BbFa3"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:48:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-5, R-6, R-16]
  - label: PonsV2LaunchAndBuy (create tx to)
    role: router
    address:
      value: "0xe33E9E479dF8802cb0866d5d05258bEc4cF62948"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:50:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-16]
  - label: SPY Stock Token (pair quote / rhj rail)
    role: token
    address:
      value: "0x117cc2133c37B721F49dE2A7a74833232B3B4C0C"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:49:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-7, R-12, R-17]

metrics:
  - { kind: volume_24h, value: 1801288.6, currency: USD, as_of: 2026-09-03T04:52:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x92ef7CaA35F85f50311Fa5eD7ADE2D9786C61612 pair 0x8ece5548…b2e6 NORMIE/SPY volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 29635.03, currency: USD, as_of: 2026-09-03T04:52:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x92ef7CaA35F85f50311Fa5eD7ADE2D9786C61612 pair 0x8ece5548…b2e6 NORMIE/SPY liquidity.usd", class: claim, receipt_ids: [R-7] }
  - { kind: market_cap, value: 128678, currency: USD, as_of: 2026-09-03T04:52:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x92ef7CaA35F85f50311Fa5eD7ADE2D9786C61612 pair 0x8ece5548…b2e6 NORMIE/SPY fdv/marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 2408, currency: null, as_of: 2026-09-03T04:51:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x92ef7CaA35F85f50311Fa5eD7ADE2D9786C61612 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:48:00Z, receipt_ids: [R-5, R-6], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237 (4663) eth_blockNumber 0x32af7f1 (53147633) then 0x32b0064 (53149796). Token 0x92ef7C…1612 eth_getCode 3248 B prefix 60806040, not EIP-1167. name normie, symbol NORMIE, decimals 18, totalSupply 1e27. owner() and factory() revert. deployer() 0x24Db8D856f43B7855aD1103346dFF570cB6A6199 (eth_getCode 0x). launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. curve() 0xB75ECc0B9D174738D680B416a5760d24162BbFa3. socials() twitter https://x.com/RH_normie website/telegram/discord/farcaster empty. description() be a normie, invest in SPY. Factory owner() 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd. Curve code 10229 B, owner() reverts." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:51:00Z, receipt_ids: [R-1, R-2, R-4, R-16, R-18], result: "Blockscout api/v2 token 0x92ef7C…1612 name normie symbol NORMIE holders_count 2408 total_supply 1e27 is_verified false creator_address_hash null this pass. Factory 0x7eD5…EC7e name PonsV2LaunchFactory is_verified true is_fully_verified true file_path contracts/src/v2/PonsV2LaunchFactory.sol compiler v0.8.35. launchAndBuy tx 0x7fe993ff…a775 2026-09-02T02:15:30Z block 52210302 from EOA 0x24Db8D…6199 to PonsV2LaunchAndBuy 0xe33E…2948 pairToken SPY 0x117c…4C0C. TokenLaunched token 0x92ef7C…1612 curve 0xB75ECc…bFa3 deployer 0x24Db8D…6199 graduationThreshold 10.9e18. CurveCompleted / LaunchSwept tx 0x79570acb…7acd 2026-09-02T02:25:37Z block 52216323 quoteOut 10.9e18 token 0x92ef7C…1612." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T04:52:00Z, receipt_ids: [R-7], result: "DexScreener latest/dex/tokens/0x92ef7C…1612: 14 robinhood pairs; top NORMIE/SPY v4 0x8ece55481e6dcca5393ce2246c51952ba5fd996ff0f620ab76a038856e8bb2e6 quote 0x117c…4C0C SPDR S&P 500 ETF Trust • Robinhood Token / SPY liquidity.usd 29635.03 volume.h24 1801288.6 fdv/marketCap 128678 pairCreatedAt 1788315938000 (2026-09-02T02:25:38Z) info.websites https://normie-rh.xyz/ info.socials https://x.com/RH_normie. Distinct packed books: PAIR/SPY 0xf224a070…c001, STACKS/SPY 0x77d0c2cf…5e32, STRATTON/SPY 0xa2c4e1ca…9274." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T04:52:30Z, receipt_ids: [R-8, R-9], result: "Gecko GET token and pool HTTP 200. Pool 0x8ece5548…b2e6 name SPY / NORMIE pool_created_at 2026-09-02T02:25:38Z volume_usd.h24 1803835.54 reserve_in_usd 29759.15 fdv_usd 13633335.54 (pool base is SPY 0x117c…4C0C, quote is NORMIE 0x92ef7C…1612; dex pons-v2-dex). Gecko token name normie fdv_usd 138423.18 market_cap_usd null volume_usd.h24 1949123.00 (all pools) total_reserve_in_usd 32590.94. launchpad_details graduation_percentage 100 completed true completed_at 2026-09-02T02:25:38Z migrated_destination_pool_address 0x8ece5548…b2e6." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T04:49:00Z, receipt_ids: [R-12], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; tokenSymbol SPY hit 1: tokenName SPDR S&P 500 ETF Trust • Robinhood Token deployments contractAddress 0x117cc2133c37B721F49dE2A7a74833232B3B4C0C chainId 4663 status ASSET_STATUS_ACTIVE. tokenSymbol/tokenName scan for NORMIE returned 0 hits." }
  - { id: REP-6, method: official-crosslink, checked_at: 2026-09-03T04:50:00Z, receipt_ids: [R-5, R-11, R-13, R-14], result: "token.socials() twitter https://x.com/RH_normie website empty. @RH_normie bio 0x92ef7caa35f85f50311fa5ed7ade2d9786c61612. normie-rh.xyz title $NORMIE | Be a normie. Invest in SPY.; twitter:site @Lovable (builder meta). JS bundle /assets/index-BUrauKmH.js embeds contractAddress 0x92ef7caa35f85f50311fa5ed7ade2d9786c61612 twitterUrl https://x.com/RH_normie and DexScreener embed for pool 0x8ece5548…b2e6." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "PonsV2LaunchAndBuy.launchAndBuy clones a 1e9-supply token onto a PonsV2BondingCurve quoted against pairToken SPY; CurveCompleted / LaunchSwept ~10 minutes later seeds Uniswap v4 NORMIE/SPY via PoolManager 0x8366…0951 pool 0x8ece5548…b2e6 (Gecko dex pons-v2-dex). Token owner() reverts; deployer() is an EOA with no code.", class: verified, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-4, R-5, R-6, R-16, R-18], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "normie", class: verified, observed_at: 2026-09-03T04:46:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "NORMIE", class: verified, observed_at: 2026-09-03T04:46:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x92ef7CaA35F85f50311Fa5eD7ADE2D9786C61612", class: verified, observed_at: 2026-09-03T04:46:00Z, receipt_ids: [R-1, R-5, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", class: verified, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-2, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:52:00Z, receipt_ids: [R-1, R-4, R-5, R-7], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T04:52:30Z, receipt_ids: [R-4, R-9, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "@RH_normie", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-5, R-11, R-14], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Distinct from packed PAIR (PAIR token 0x6b1d…66be PAIR/SPY 0xf224a070…c001 via PairLaunchpadV5), STACKS/SPY 0xD998…D94C / 0x77d0c2cf…5e32, and STRATTON/SPY 0xb7eae…8360 / 0xa2c4e1ca…9274. Shared rail is SPY 0x117c…4C0C only. Same Pons factory as STRATTON; different token, curve, and EOA deployer.", class: verified, observed_at: 2026-09-03T04:52:00Z, receipt_ids: [R-7, R-16], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "Gecko SPY/NORMIE pool 24h volume 1803835.54 USD and reserve_in_usd 29759.15 at 2026-09-03T04:52:30Z (Gecko pool slice; pool fdv_usd 13633335.54 is the SPY-as-base book, not the Gecko token fdv)", class: verified, observed_at: 2026-09-03T04:52:30Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 29635.03 volume.h24 1801288.6 fdv/marketCap 128678 at 2026-09-03T04:52:00Z", class: verified, observed_at: 2026-09-03T04:52:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 2408, class: verified, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() reverts; curve owner() reverts; deployer() 0x24Db8D…6199 has no code. PonsV2LaunchFactory owner() 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd (verified source is Ownable2Step).", class: verified, observed_at: 2026-09-03T04:52:00Z, receipt_ids: [R-5, R-6, R-20], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "deployer() / launchAndBuy from 0x24Db8D856f43B7855aD1103346dFF570cB6A6199; launchFactory 0x7eD5…EC7e; curve 0xB75ECc…bFa3; factory owner 0x263e…19Dd", class: verified, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is SPY 0x117cc2133c37B721F49dE2A7a74833232B3B4C0C (GET /rhj/assets active Robinhood Token); venue is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 pool 0x8ece5548…b2e6, Gecko dex id pons-v2-dex, DexScreener dexId uniswap labels v4", class: verified, observed_at: 2026-09-03T04:52:30Z, receipt_ids: [R-7, R-8, R-12, R-18], reproduction_ids: [REP-3, REP-4, REP-5], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash was empty on the token page this pass; launchFactory() and TokenLaunched name PonsV2LaunchFactory 0x7eD5…EC7e as the pad, not PairLaunchpadV5, STACKS factory 0x13ae…0a36, LONG, or stonks.fun", class: verified, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-1, R-2, R-5, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T04:46:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on normie-rh.xyz, DexScreener, Gecko, Blockscout, or X search this pass", class: unknown, observed_at: 2026-09-03T04:52:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: identity.domain, value: "https://normie-rh.xyz", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-7, R-13, R-14], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko token fdv_usd 138423.18; DexScreener fdv/marketCap 128678. Gecko pool fdv_usd 13633335.54 is the inverted SPY/NORMIE book. Gecko market_cap_usd null.", class: verified, observed_at: 2026-09-03T04:52:30Z, receipt_ids: [R-7, R-8, R-9], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x117cc2133c37B721F49dE2A7a74833232B3B4C0C", class: verified, observed_at: 2026-09-03T04:49:00Z, receipt_ids: [R-7, R-12, R-17], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0xB75ECc0B9D174738D680B416a5760d24162BbFa3", class: verified, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-5, R-6, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: communications.status, value: "copypasta-pattern / third-party-link: robinhood-main-dex-*.netlify.app vote pages posted with this CA; not on-chain socials() or the site JS this pass", class: claim, observed_at: 2026-09-03T04:46:00Z, receipt_ids: [R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: candidate, value: "normie | NORMIE | @RH_normie | https://normie-rh.xyz — discovery token not in census 49", class: claim, observed_at: 2026-09-03T04:53:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: other, value: "Gecko launchpad_details graduation_percentage 100 completed_at 2026-09-02T02:25:38Z migrated_destination_pool_address 0x8ece5548…b2e6, matching DexScreener pairCreatedAt and CurveCompleted timestamp", class: verified, observed_at: 2026-09-03T04:52:30Z, receipt_ids: [R-8, R-9, R-18], reproduction_ids: [REP-4], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "DexScreener NORMIE/SPY 24h volume $1.80M, liquidity $29.6K"
    summary: "DexScreener pair 0x8ece5548…b2e6 volume.h24 1801288.6 liquidity.usd 29635.03 fdv 128678. Gecko pool volume_usd.h24 1803835.54 reserve_in_usd 29759.15."
    occurred_at: 2026-09-03T04:52:00Z
    observed_at: 2026-09-03T04:52:30Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7, R-8]
  - id: EVT-2
    type: onchain
    title: "PonsV2LaunchAndBuy launchAndBuy minted normie / NORMIE"
    summary: "Tx 0x7fe993ff…a775 from 0x24Db8D…6199 at 2026-09-02T02:15:30Z; TokenLaunched curve 0xB75ECc…bFa3 pairToken SPY graduationThreshold 10.9e18."
    occurred_at: 2026-09-02T02:15:30Z
    observed_at: 2026-09-03T04:51:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-16]
  - id: EVT-3
    type: onchain
    title: "CurveCompleted / LaunchSwept into NORMIE/SPY Uniswap v4"
    summary: "Tx 0x79570acb…7acd at 2026-09-02T02:25:37Z; LaunchSwept token 0x92ef7C…1612 quoteOut 10.9e18. Gecko launchpad_details completed_at matches."
    occurred_at: 2026-09-02T02:25:37Z
    observed_at: 2026-09-03T04:51:00Z
    affected_fields: [lifecycle, product.mechanism, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-9, R-18]
  - id: EVT-4
    type: ct
    title: "@RH_normie bio embeds the CA; posts are SPY-saver bits"
    summary: "@RH_normie bio is 0x92ef7caa35f85f50311fa5ed7ade2d9786c61612. Latest posts (e.g. 2095364662565236989) are image bits about buying SPY."
    occurred_at: 2026-09-03T04:14:00Z
    observed_at: 2026-09-03T04:46:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: verified
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-11]
  - id: EVT-5
    type: ct
    title: "Netlify vote pages circulated with this CA"
    summary: "@soljackalNFT posted robinhood-main-dex-nqf.netlify.app/vote/<CA> as a Robinhood Top 100 Leaderboard vote. Pattern matches other *-dex-*.netlify.app vote URLs. Flag copypasta-pattern / third-party-link."
    occurred_at: 2026-09-03T03:24:18Z
    observed_at: 2026-09-03T04:46:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-19]
  - id: EVT-6
    type: ct
    title: "@_dbk_ posted first-hour NORMIE/SPY prints"
    summary: "Post: flagship pool against $SPY; first hour ~$3.4M volume, 2.1K traders, $100K liquidity. CA 0x92ef7caa…1612."
    occurred_at: 2026-09-02T03:25:01Z
    observed_at: 2026-09-03T04:46:00Z
    affected_fields: [activity.status, economics.metric]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-10]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x92ef7C…1612 normie / NORMIE", url: "https://robinhoodchain.blockscout.com/address/0x92ef7CaA35F85f50311Fa5eD7ADE2D9786C61612", published_at: null, accessed_at: 2026-09-03T04:46:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24], excerpt: "hash 0x92ef7CaA35F85f50311Fa5eD7ADE2D9786C61612 name normie is_contract true is_verified false proxy_type null creator_address_hash null. token symbol NORMIE decimals 18 total_supply 1000000000000000000000000000 holders_count 2408 type ERC-20." }
  - { id: R-2, publisher: Blockscout, title: "Address 0x7eD5…EC7e PonsV2LaunchFactory", url: "https://robinhoodchain.blockscout.com/address/0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", published_at: null, accessed_at: 2026-09-03T04:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-16], excerpt: "hash 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e name PonsV2LaunchFactory is_contract true is_verified true creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36. Compiler v0.8.35 file_path contracts/src/v2/PonsV2LaunchFactory.sol is_fully_verified true verified_at 2026-08-04T17:40:45Z." }
  - { id: R-3, publisher: Blockscout, title: "Address 0xe33E…2948 PonsV2LaunchAndBuy", url: "https://robinhoodchain.blockscout.com/address/0xe33E9E479dF8802cb0866d5d05258bEc4cF62948", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1], excerpt: "hash 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 name PonsV2LaunchAndBuy is_contract true is_verified true creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36." }
  - { id: R-4, publisher: Blockscout, title: "launchAndBuy tx 0x7fe993ff…a775", url: "https://robinhoodchain.blockscout.com/tx/0x7fe993ff12790a8edf40c7ed06c0c74a46d6296ced29497f571396f023d0a775", published_at: 2026-09-02T02:15:30Z, accessed_at: 2026-09-03T04:51:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-6, CLM-14, EVT-2], excerpt: "timestamp 2026-09-02T02:15:30.000000Z status ok block_number 52210302 from 0x24Db8D856f43B7855aD1103346dFF570cB6A6199 (is_contract false) to PonsV2LaunchAndBuy 0xe33E…2948 method launchAndBuy. params name normie symbol NORMIE description be a normie, invest in SPY twitter https://x.com/RH_normie pairToken 0x117cc2133c37B721F49dE2A7a74833232B3B4C0C quoteIn 0.9e18." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, launchFactory(), socials() on NORMIE", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-8, CLM-13, CLM-16, CLM-17, CLM-22], excerpt: "eth_chainId 0x1237. Token code 3248 B prefix 60806040. name normie symbol NORMIE decimals 18 totalSupply 1e27. owner()/factory() revert. deployer() 0x24Db8D…6199. launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. curve() 0xB75ECc0B9D174738D680B416a5760d24162BbFa3. socials() twitter https://x.com/RH_normie. description() be a normie, invest in SPY. Deployer code 0x." }
  - { id: R-6, publisher: Robinhood Chain RPC, title: "factory owner(), curve code, related getCode", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-13, CLM-14, CLM-22], excerpt: "block 53149796 then 53150502. Factory 0x7eD5…EC7e code 24177 B owner() 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd. Curve 0xB75ECc…bFa3 code 10229 B owner() reverts. PonsV2LaunchAndBuy 0xe33E…2948 code 4416 B. PonsV2LaunchDeployer 0x3711…1A42 code 20906 B. SPY 0x117c…4C0C code 283 B. V2LaunchLocker 0x267444…4952 code 1969 B." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens NORMIE", url: "https://api.dexscreener.com/latest/dex/tokens/0x92ef7CaA35F85f50311Fa5eD7ADE2D9786C61612", published_at: null, accessed_at: 2026-09-03T04:52:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-9, CLM-11, CLM-15, CLM-17, CLM-19, CLM-20, CLM-21, CLM-24, EVT-1], excerpt: "14 robinhood pairs. Top pairAddress 0x8ece55481e6dcca5393ce2246c51952ba5fd996ff0f620ab76a038856e8bb2e6 labels v4 dexId uniswap base normie / NORMIE quote SPDR S&P 500 ETF Trust • Robinhood Token / SPY 0x117c…4C0C liquidity.usd 29635.03 volume.h24 1801288.6 fdv 128678 marketCap 128678 pairCreatedAt 1788315938000. info.websites https://normie-rh.xyz/ info.socials https://x.com/RH_normie." }
  - { id: R-8, publisher: GeckoTerminal, title: "SPY/NORMIE pool (pons-v2-dex)", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x8ece55481e6dcca5393ce2246c51952ba5fd996ff0f620ab76a038856e8bb2e6", published_at: null, accessed_at: 2026-09-03T04:52:30Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-10, CLM-15, CLM-20, CLM-25, EVT-1], excerpt: "GET 200. name SPY / NORMIE pool_created_at 2026-09-02T02:25:38Z fdv_usd 13633335.54 market_cap_usd 13453706.03 volume_usd.h24 1803835.54 reserve_in_usd 29759.15. dex pons-v2-dex base robinhood_0x117cc2133c37b721f49de2a7a74833232b3b4c0c quote robinhood_0x92ef7caa35f85f50311fa5ed7ade2d9786c61612." }
  - { id: R-9, publisher: GeckoTerminal, title: "normie token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x92ef7CaA35F85f50311Fa5eD7ADE2D9786C61612", published_at: null, accessed_at: 2026-09-03T04:52:30Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-10, CLM-20, CLM-25, EVT-3], excerpt: "GET 200. name normie symbol NORMIE decimals 18 total_supply 1e27 price_usd 0.0001384231805 fdv_usd 138423.18 market_cap_usd null volume_usd.h24 1949123.00 total_reserve_in_usd 32590.94. launchpad_details graduation_percentage 100 completed true completed_at 2026-09-02T02:25:38Z migrated_destination_pool_address 0x8ece5548…b2e6." }
  - { id: R-10, publisher: "@_dbk_", title: "$NORMIE first-hour SPY pool prints", url: "https://x.com/_dbk_/status/2094989950710169965", published_at: 2026-09-02T03:25:01Z, accessed_at: 2026-09-03T04:46:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-6], excerpt: "$NORMIE’s thesis is simple: meme culture meets tokenized equities. Its flagship pool trades directly against $SPY. In its first hour, the pair attracted roughly $3.4M in volume, 2.1K traders and $100K in liquidity. CA: 0x92ef7caa35f85f50311fa5ed7ade2d9786c61612" }
  - { id: R-11, publisher: "@RH_normie", title: "instant ramen saves me 2$ a dinner", url: "https://x.com/RH_normie/status/2095364662565236989", published_at: 2026-09-03T04:14:00Z, accessed_at: 2026-09-03T04:46:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-8, EVT-4], excerpt: "instant ramen saves me 2$ a dinner, thats 1 SPY a year! Profile name normie handle @RH_normie bio 0x92ef7caa35f85f50311fa5ed7ade2d9786c61612." }
  - { id: R-12, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T04:49:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-15, CLM-21], excerpt: "HTTP 200. assets length 194. tokenSymbol SPY hit 1: tokenName SPDR S&P 500 ETF Trust • Robinhood Token deployments contractAddress 0x117cc2133c37B721F49dE2A7a74833232B3B4C0C chainId 4663 status ASSET_STATUS_ACTIVE. NORMIE scan 0 hits." }
  - { id: R-13, publisher: NORMIE, title: "normie-rh.xyz HTML", url: "https://normie-rh.xyz/", published_at: null, accessed_at: 2026-09-03T04:49:25Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-19], excerpt: "HTTP 200. title $NORMIE | Be a normie. Invest in SPY. meta description The most normal memecoin on the internet. $normie is paired with SPY. twitter:site @Lovable. script /assets/index-BUrauKmH.js. HTML has 0 hits for 0x92ef this pass." }
  - { id: R-14, publisher: NORMIE, title: "normie-rh.xyz JS bundle embeds CA", url: "https://normie-rh.xyz/assets/index-BUrauKmH.js", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-19], excerpt: "Ci={name:\"$NORMIE\",symbol:\"$NORMIE\",pairedWith:\"SPY\",contractAddress:\"0x92ef7caa35f85f50311fa5ed7ade2d9786c61612\",twitterUrl:\"https://x.com/RH_normie\"}. DexScreener embed https://dexscreener.com/robinhood/0x8ece55481e6dcca5393ce2246c51952ba5fd996ff0f620ab76a038856e8bb2e6." }
  - { id: R-15, publisher: Blockscout, title: "PonsV2LaunchDeployer 0x3711…1A42", url: "https://robinhoodchain.blockscout.com/address/0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42", published_at: null, accessed_at: 2026-09-03T04:51:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 name PonsV2LaunchDeployer is_contract true is_verified true creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36. RPC eth_getCode 20906 B." }
  - { id: R-16, publisher: Blockscout, title: "TokenLaunched log for NORMIE", url: "https://robinhoodchain.blockscout.com/tx/0x7fe993ff12790a8edf40c7ed06c0c74a46d6296ced29497f571396f023d0a775", published_at: 2026-09-02T02:15:30Z, accessed_at: 2026-09-03T04:51:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-9, CLM-16, EVT-2], excerpt: "TokenLaunched token 0x92ef7CaA35F85f50311Fa5eD7ADE2D9786C61612 curve 0xB75ECc0B9D174738D680B416a5760d24162BbFa3 deployer 0x24Db8D856f43B7855aD1103346dFF570cB6A6199 pairToken 0x117cc2133c37B721F49dE2A7a74833232B3B4C0C launchConfigId 0 graduationThreshold 10900000000000000000. Launched quoteSpent 0.9e18 tokensReceived 169681965339935250428489811." }
  - { id: R-17, publisher: Blockscout, title: "Token 0x117c…4C0C SPY Robinhood Token", url: "https://robinhoodchain.blockscout.com/token/0x117cc2133c37B721F49dE2A7a74833232B3B4C0C", published_at: null, accessed_at: 2026-09-03T04:49:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-15, CLM-21], excerpt: "address_hash 0x117cc2133c37B721F49dE2A7a74833232B3B4C0C name SPDR S&P 500 ETF Trust • Robinhood Token symbol SPY decimals 18 type ERC-20." }
  - { id: R-18, publisher: Blockscout, title: "CurveCompleted / LaunchSwept tx 0x79570acb…7acd", url: "https://robinhoodchain.blockscout.com/tx/0x79570acbc7a78f0889506eee59fe47500e6b884fde889178ab05830b83aa7acd", published_at: 2026-09-02T02:25:37Z, accessed_at: 2026-09-03T04:51:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-15, CLM-25, EVT-3], excerpt: "timestamp 2026-09-02T02:25:37.000000Z status ok block_number 52216323. CurveCompleted recipient 0x7eD5…EC7e quoteOut 10900000000000000100 tokenOut 285714285714285714285714285. LaunchSwept token 0x92ef7CaA35F85f50311Fa5eD7ADE2D9786C61612 quoteOut 10.9e18. PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 in the same tx path." }
  - { id: R-19, publisher: "@soljackalNFT", title: "NORMIE Robinhood Top 100 vote netlify", url: "https://x.com/soljackalNFT/status/2095352157687959975", published_at: 2026-09-03T03:24:18Z, accessed_at: 2026-09-03T04:46:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-23, EVT-5], excerpt: "Attention $NORMIE Family! YOUR vote matters! Less than 100 votes are needed to list $NORMIE on the Robinhood Top 100 Leaderboard. Listing ID: 9924 https://robinhood-main-dex-nqf.netlify.app/vote/0x92ef7CaA35F85f50311Fa5eD7ADE2D9786C61612" }
  - { id: R-20, publisher: Blockscout, title: "PonsV2LaunchFactory verified source", url: "https://robinhoodchain.blockscout.com/address/0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e?tab=contract", published_at: null, accessed_at: 2026-09-03T04:51:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-13], excerpt: "ContractName PonsV2LaunchFactory. Imports Ownable, Ownable2Step, IPoolManager, PonsV2BondingCurve, PonsV2LaunchLocker, PonsV2GraduationExecutor, PonsV2LaunchDeployer. Comments mention graduationThreshold, pairToken, and Permissionless executeCreatorFeeRecipientChange after timelock." }
  - { id: R-21, publisher: Blockscout, title: "V2LaunchLocker 0x267444…4952", url: "https://robinhoodchain.blockscout.com/address/0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952", published_at: null, accessed_at: 2026-09-03T04:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1], excerpt: "hash 0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952 name V2LaunchLocker is_contract true is_verified true. Token holders page lists this address among top NORMIE holders with PoolManager 0x8366…0951." }

gaps:
  - { priority: P0, question: "Does verified PonsV2LauncherToken source at a twin address (e.g. STRATTON 0xb7eae…8360) apply to this unverified 3248 B bytecode?", checked: "Token is_verified false; eth_getCode 3248 B prefix 60806040 matches STRATTON size/prefix but full bytecode not equal; owner() reverts, 2026-09-03", next: "diff runtime bytecode against the verified PonsV2LauncherToken implementation excluding immutables" }
  - { priority: P1, question: "What can PonsV2LaunchFactory owner 0x263e…19Dd change on an already-graduated NORMIE book?", checked: "owner() 0x263ed295…19Dd; source is Ownable2Step with executeCreatorFeeRecipientChange after timelock; token owner() reverts, 2026-09-03", next: "read setter modifiers in contracts/src/v2/PonsV2LaunchFactory.sol on the explorer" }
  - { priority: P1, question: "Is there an audit report for Pons V2 that covers this factory?", checked: "normie-rh.xyz HTML/JS, DexScreener, Gecko, Blockscout token/factory pages, X search this pass, 2026-09-03", next: "open ponsfamily.com docs / any auditor named on the Pons census row" }
  - { priority: P2, question: "Do the robinhood-main-dex-*.netlify.app vote pages bidirectionally link to @RH_normie or the CA in a way that would clear copypasta-pattern?", checked: "public posts use rotating netlify hosts with this CA; on-chain socials() and site JS do not embed those URLs, 2026-09-03", next: "leave as third-party-link unless the site or @RH_normie posts the same URL" }
  - { priority: P2, question: "Are ticker-only NORMIE ERC-20s (e.g. 0x6a4900…645C, 0xAd765F…120C beanormie.com) still live enough to confuse a card?", checked: "Blockscout tokens?q=NORMIE lists multiple ERC-20s; assigned CA is 0x92ef7C…1612 with the SPY book, 2026-09-03", next: "if a second NORMIE/SPY book appears, file ca-collision / ticker-only against this slug" }
---

# NORMIE — research packet

## What it is

A one-billion-supply ERC-20 launched through PonsV2LaunchAndBuy onto a bonding curve quoted against the Robinhood SPY Stock Token. CurveCompleted / LaunchSwept ten minutes later seeded a Uniswap v4 NORMIE/SPY book. Traders buy and sell NORMIE on that book. The quote leg is the live SPY rail.

Themes: memecoin, stock-paired:SPY, graduation

## Why it matters

The NORMIE/SPY Uniswap v4 book printed about $1.80M of 24h volume on DexScreener at collection, with the quote leg the live Robinhood SPY Stock Token. The same SPY rail also books PAIR, STACKS, and STRATTON as separate tokens. Gecko marks the Pons launchpad 100% complete into pool 0x8ece5548…b2e6.

## What could go wrong

USD liquidity figures on the NORMIE/SPY book count both sides, and the quote side is SPY, not USDG. PonsV2LaunchFactory is Ownable2Step; token owner() reverts. Token source is not verified at this address. Ticker-only NORMIE ERC-20s exist on the same explorer. Netlify vote pages with this CA are a copypasta-pattern / third-party-link.

## Product and mechanics

PonsV2LaunchAndBuy 0xe33E…2948 launchAndBuy from EOA 0x24Db8D…6199 at 2026-09-02T02:15:30Z minted name normie / symbol NORMIE supply 1e9*1e18 onto curve 0xB75ECc…bFa3 against pairToken SPY 0x117c…4C0C. TokenLaunched graduationThreshold 10.9e18. factory() on the token reverts; launchFactory() returns PonsV2LaunchFactory 0x7eD5…EC7e. [verified R-4 R-5 R-16]

CurveCompleted / LaunchSwept at 2026-09-02T02:25:37Z moved 10.9 SPY and remaining curve inventory to the factory and seeded Uniswap v4 pool 0x8ece5548…b2e6 via PoolManager 0x8366…0951. Gecko dex id pons-v2-dex; DexScreener dexId uniswap labels v4 on the same pool id. Secondary NORMIE/USDG and NORMIE/ETH books exist with far less liquidity than the SPY book. [verified R-7 R-8 R-18]

## Control and security

token owner() reverts. curve owner() reverts. Deployer 0x24Db8D…6199 has no code. PonsV2LaunchFactory owner() returns 0x263ed295…19Dd; verified source is Ownable2Step and documents a timelocked creator-fee-recipient change. [verified R-5 R-6 R-20]

Token is_verified false on Blockscout. Factory, LaunchAndBuy, LaunchDeployer, and V2LaunchLocker are verified. No audit report URL was located this pass. [verified R-1 R-2] [unknown]

## Team and provenance

@RH_normie bio embeds 0x92ef7caa…1612. token.socials() twitter is that URL; website field empty. normie-rh.xyz JS bundle embeds the same CA and twitterUrl. DexScreener info.websites and info.socials match. HTML twitter:site is @Lovable (builder meta), not the project handle. [verified R-5 R-11 R-14]

No GitHub org was located. Copypasta-pattern vote URLs on rotating robinhood-main-dex-*.netlify.app hosts are third-party-link. [claim R-19]

## Economics and activity

NORMIE/SPY Uniswap v4 24h volume is 1801288.6 USD and liquidity.usd is 29635.03 at 2026-09-03T04:52:00Z from DexScreener. fdv/marketCap is 128678. Blockscout holders_count 2408. Pair created 2026-09-02T02:25:38Z. [claim R-1 R-7]

Gecko same pool: volume_usd.h24 1803835.54 reserve_in_usd 29759.15. Gecko token fdv_usd 138423.18; token volume_usd.h24 1949123.00 is all pools, not the SPY book. Gecko pool fdv_usd 13633335.54 is the inverted SPY-as-base book. [claim R-8 R-9]

## Material risks

- Quote token SPY 0x117c…4C0C is the rhj rail; pool USD reserve is NORMIE plus SPY, not a USDG backstop. [verified R-7 R-12]
- PonsV2LaunchFactory is Ownable2Step; token source is not verified at this address. [verified R-1 R-6 R-20]
- Ticker-only NORMIE ERC-20s exist on Blockscout; this packet is the 0x92ef7C…1612 / SPY book only. [claim R-1]
- Copypasta-pattern netlify vote pages are third-party-link. [claim R-19]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/factory/launchAndBuy/SPY and both launch and graduation txs, RPC name/symbol/launchFactory/curve/socials/owner, DexScreener, Gecko pool/token (GET 200), /rhj/assets, normie-rh.xyz HTML/JS, @RH_normie, and the netlify vote post were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-7 R-8 R-12 R-14]
- Numbers: 1801288.6 is the DexScreener NORMIE/SPY pool 24h volume, not the 1949123.00 Gecko token all-pools figure. Reserve 29635.03 DexScreener / 29759.15 Gecko is that pool. Gecko pool fdv 13.6M is SPY-as-base. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that this CA is the PAIR/SPY or STRATTON/SPY book, or that SPY here is not the Robinhood Stock Token. PairLaunchpadV5 created PAIR 0x6b1d…66be, STRATTON is 0xb7eae…8360, STACKS is 0xD998…D94C, and GET /rhj/assets lists this SPY address as ASSET_STATUS_ACTIVE. [inference R-7 R-12 R-16]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no normie / NORMIE / 0x92ef7C…1612.
- Explorer: Blockscout api/v2 token, factory, launchAndBuy, LaunchDeployer, locker, SPY, launchAndBuy 0x7fe993ff…a775, CurveCompleted 0x79570acb…7acd, TokenLaunched / LaunchSwept logs, holders. RPC eth_getCode/eth_call with Chrome UA at blocks 53147633–53150502.
- Aggregators: DexScreener latest/dex/tokens (14 pairs). Gecko GET token and pool HTTP 200; used. Gecko pool dex pons-v2-dex vs DexScreener dexId uniswap labels v4 on the same pool id.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, SPY active at 0x117c…4C0C, 0 NORMIE.
- Social: X keyword Latest NORMIE SPY / $NORMIE; from:RH_normie; user search RH_normie. Site HTML + JS bundle.
- Failed: Blockscout token creator_address_hash null (launchFactory() / TokenLaunched used instead); token is_verified false; Gecko first pool GET at ~04:47Z showed reserve_in_usd 55626 / fdv_usd 379465 then 04:52:30Z aligned with DexScreener (~$29.7K / token fdv $138K) — packet uses the later GET.
- Time: collection 2026-09-03T04:45Z–2026-09-03T04:53Z.
