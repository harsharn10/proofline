---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: bow
name: BOW
packet_tier: seed
as_of: 2026-09-03T05:10:00Z
prior_packet: null
supersedes: null
owned_slugs: [bow]
allowed_paths:
  - research/inbox/packets/bow/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: BOW
  aliases: [Longbow]
  symbols: [BOW]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: https://longbow.cash
  official_handle: "@longbowlend"
  repository: "NULL — no GitHub org or repository URL on longbow.cash HTML/JS, docs.longbow.cash, DexScreener, Gecko, Blockscout, or the @longbowlend profile this pass"
  possible_matches:
    - slug: longbow
      signals: [same-normalized-name, shared-domain, shared-handle, shared-address]
      contrary_signals:
        - "Census Longbow is the Morpho Blue credit overlay protocol at longbow.cash / @longbowlend, entity_kind protocol, leaf credit/credit-overlay"
        - "This packet is the PonsV2LauncherToken ERC-20 at 0x451b42A15100C340CA12F7c66DE06fac5EA2D751, entity_kind token, ecosystem_role graduation, leaf launch/graduation-token"
        - "Same CA, site, and handle; the census row is the protocol, this row is the graduated token"
    - slug: pons
      signals: [shared-deployer]
      contrary_signals:
        - "Census Pons is the bonding-curve pad at ponsfamily.com / @ponsdotfamily with PonsV2LaunchFactory 0x7eD5…EC7e"
        - "BOW is the ERC-20 at 0x451b42…D751 created through that factory; entity_kind token, not protocol"
        - "No shared domain or handle; longbow.cash / @longbowlend do not operate the Pons pad"
    - slug: bankr
      signals: [ticker-only]
      contrary_signals:
        - "A second BOW ticker at 0xf56D9aDAA11dc278638adcDCA8Cf697DDC008ba3 is an EIP-1167 DopplerERC20V1 clone, 2 holders, creator 0x1B37…b69a"
        - "This BOW is verified PonsV2LauncherToken 0x451b42…D751, 5830 holders, launchFactory PonsV2LaunchFactory 0x7eD5…EC7e"
        - "Bankr official handle is @bankrbot; this token's DexScreener social is @longbowlend"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "BOW is a Pons graduation token at 0x451b42…D751 / longbow.cash / @longbowlend"
        - "No shared domain, handle, or reproduced address"
    - slug: longshot
      signals: [other]
      contrary_signals:
        - "Census Longshot is a launch/fee-router at uselongshot.xyz / @uselongshot"
        - "BOW is PonsV2LauncherToken 0x451b42…D751 paired to SPY 0x117c…4C0C"
        - "No shared domain, handle, or reproduced address"
    - slug: hoodfun
      signals: [other]
      contrary_signals:
        - "Census hood.fun is a bonding-curve pad at @hoodfunfamily; historical desk notes also name a separate bow.fun pad"
        - "This BOW is a Pons V2 graduation token, not a pad, at 0x451b42…D751 / longbow.cash"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: launch/graduation-token
  secondary_leaves: [rwa-products/stock-paired-token]
  mechanism_tags: [bonding-curve, amm, stock-paired, rwa, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census as slug bow (census longbow is the credit protocol). Token 0x451b42…D751 is a verified PonsV2LauncherToken with 3248 B of code on 4663; name Longbow symbol BOW totalSupply 1e27. PonsV2LaunchAndBuy.launchAndBuy at 2026-08-08T18:17:53Z minted it against pairToken SPY 0x117c…4C0C; CurveCompleted / LaunchSwept at 2026-08-08T21:00:32Z into Uniswap v4 pool 0xdba9…f4c2. Distinct from packed PAIR/SPY, STRATTON/SPY, STACKS/SPY, and NORMIE/SPY, and from the bow.fun pad. SPY is the rhj rail. Site JS this pass does not embed the CA. [R-1] [R-4] [R-5] [R-7] [R-8] [R-16]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-8], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: site, url: "https://longbow.cash", authenticity: confirmed }
  - { kind: docs, url: "https://docs.longbow.cash", authenticity: unconfirmed }
  - { kind: x, url: "https://x.com/longbowlend", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/longbowlend", authenticity: unconfirmed }

deployments:
  - label: BOW token (PonsV2LauncherToken)
    role: token
    address:
      value: "0x451b42A15100C340CA12F7c66DE06fac5EA2D751"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:08:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-2, R-5]
  - label: PonsV2LaunchDeployer (token creator)
    role: factory
    address:
      value: "0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:03:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-5]
  - label: PonsV2LaunchFactory (token launchFactory)
    role: factory
    address:
      value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:04:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6, R-15]
  - label: PonsV2BondingCurve
    role: other
    address:
      value: "0x29324A775D628bf3538Afdf92B4D148Cee6a8A61"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:04:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6, R-16]
  - label: PonsV2LaunchAndBuy (create tx to)
    role: router
    address:
      value: "0xe33E9E479dF8802cb0866d5d05258bEc4cF62948"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:03:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-15]
  - label: SPY Stock Token (pair quote / rhj rail)
    role: token
    address:
      value: "0x117cc2133c37B721F49dE2A7a74833232B3B4C0C"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:04:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-7, R-12, R-17]

metrics:
  - { kind: volume_24h, value: 699131.07, currency: USD, as_of: 2026-09-03T05:08:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x451b42A15100C340CA12F7c66DE06fac5EA2D751 pair 0xdba909ac…f4c2 BOW/SPY volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 200091.31, currency: USD, as_of: 2026-09-03T05:08:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x451b42A15100C340CA12F7c66DE06fac5EA2D751 pair 0xdba909ac…f4c2 BOW/SPY liquidity.usd", class: claim, receipt_ids: [R-7] }
  - { kind: market_cap, value: 5865676, currency: USD, as_of: 2026-09-03T05:08:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x451b42A15100C340CA12F7c66DE06fac5EA2D751 pair 0xdba909ac…f4c2 BOW/SPY fdv/marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 5830, currency: null, as_of: 2026-09-03T05:08:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x451b42A15100C340CA12F7c66DE06fac5EA2D751 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:04:00Z, receipt_ids: [R-5], result: "rpc.mainnet.chain.robinhood.com Chrome UA eth_chainId 0x1237 (4663) eth_blockNumber 0x32b1c8e (53157006). Token 0x451b42…D751 eth_getCode 3248 B prefix 60806040, not EIP-1167. name Longbow, symbol BOW, decimals 18, totalSupply 1e27. owner() and factory() revert. deployer() 0x69C3eaDC15Cb2b505193D94e041299cA885A7DA9 (eth_getCode 0x). launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. curve() 0x29324A775D628bf3538Afdf92B4D148Cee6a8A61. socials() twitter https://x.com/l telegram https://t.me/longbowlend discord/website/farcaster empty." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T05:08:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-15, R-16], result: "Blockscout api/v2 token 0x451b42…D751 name Longbow symbol BOW holders_count 5830 total_supply 1e27 contract name PonsV2LauncherToken is_verified true is_partially_verified false file_path contracts/src/v2/PonsV2LauncherToken.sol compiler v0.8.35 verified_at 2026-08-08T18:18:40Z. creator_address_hash PonsV2LaunchDeployer 0x3711…1A42 creation_transaction_hash 0xc22c9f25…7dba. launchAndBuy tx 2026-08-08T18:17:53Z block 31282837 from EOA 0x69C3…7DA9 to PonsV2LaunchAndBuy 0xe33E…2948 pairToken SPY 0x117c…4C0C. TokenLaunched curve 0x29324A77…8A61 graduationThreshold 10.9e18. CurveCompleted tx 0xc6e9aa87…23a4 2026-08-08T21:00:32Z block 31380364 LaunchSwept quoteOut 10.9e18 tokenOut ~2.857e8*1e18." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T05:08:00Z, receipt_ids: [R-7], result: "DexScreener latest/dex/tokens/0x451b42…D751: 11 robinhood pairs; top BOW/SPY v4 0xdba909ac…f4c2 quote 0x117c…4C0C SPDR S&P 500 ETF Trust • Robinhood Token / SPY liquidity.usd 200091.31 volume.h24 699131.07 fdv/marketCap 5865676 pairCreatedAt 1786222845000 (2026-08-08T21:00:45Z) info.websites [https://longbow.cash/] info.socials [x.com/longbowlend, t.me/longbowlend]. Distinct DexScreener books vs packed PAIR/SPY, STRATTON/SPY 0xa2c4e1ca…9274, STACKS/SPY 0x77d0c2cf…5e32, NORMIE/SPY 0x8ece5548…b2e6." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T05:08:00Z, receipt_ids: [R-8, R-9], result: "Gecko first GET 200. Pool 0xdba909ac…f4c2 name SPY / BOW pool_created_at 2026-08-08T21:00:45Z volume_usd.h24 679139.49 reserve_in_usd 196526.94 fdv_usd 13637581.74 (pool base is SPY 0x117c…4C0C, quote is BOW 0x451b42…D751; dex pons-v2-dex). Gecko token name Longbow fdv_usd 5878261.18 market_cap_usd 5752017.87 volume_usd.h24 1591428.03 (all pools). launchpad_details graduation_percentage 100 completed true completed_at 2026-08-08T21:00:45Z migrated_destination_pool_address 0xdba909ac…f4c2." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T05:04:00Z, receipt_ids: [R-12], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; tokenSymbol SPY hit 1: tokenName SPDR S&P 500 ETF Trust • Robinhood Token deployments contractAddress 0x117cc2133c37B721F49dE2A7a74833232B3B4C0C chainId 4663 status ASSET_STATUS_ACTIVE." }
  - { id: REP-6, method: official-crosslink, checked_at: 2026-09-03T05:08:00Z, receipt_ids: [R-5, R-7, R-14, R-21], result: "token.socials() twitter https://x.com/l (truncated) telegram https://t.me/longbowlend website empty. DexScreener info.websites https://longbow.cash/ info.socials x.com/longbowlend and t.me/longbowlend. www.longbow.cash title Longbow — The RWA lending layer for Robinhood Chain; JS /assets/index-DBXRuHVN.js embeds https://x.com/longbowlend and SPY 0x117c…4C0C and 0 hits for 0x451b42. t.me/longbowlend og:title Longbow Protocol, 533 members, no CA in the preview." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "PonsV2LaunchAndBuy.launchAndBuy clones a 1e9-supply PonsV2LauncherToken onto a PonsV2BondingCurve quoted against pairToken SPY; CurveCompleted / LaunchSwept about 2h43m later seeds Uniswap v4 BOW/SPY via PoolManager 0x8366…0951 pool 0xdba9…f4c2 (Gecko dex pons-v2-dex). Verified token source: entire supply mints to the curve; deployer is immutable reference data with no token privileges.", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-2, R-4, R-5, R-6, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Longbow", class: verified, observed_at: 2026-09-03T05:04:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "BOW", class: verified, observed_at: 2026-09-03T05:04:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x451b42A15100C340CA12F7c66DE06fac5EA2D751", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", class: verified, observed_at: 2026-09-03T05:04:00Z, receipt_ids: [R-5, R-6, R-15], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-1, R-4, R-5, R-7], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-2, R-4, R-9, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "@longbowlend", class: claim, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-7, R-10, R-14], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Distinct from packed PAIR (PAIR token 0x6b1d…66be PAIR/SPY 0xf224a070…c001 via PairLaunchpadV5), STRATTON/SPY 0xb7eae…8360 pool 0xa2c4e1ca…9274, STACKS/SPY 0xD998…D94C pool 0x77d0c2cf…5e32, and NORMIE/SPY 0x92ef7C…1612 pool 0x8ece5548…b2e6. Shared rail is SPY 0x117c…4C0C only. Distinct from historical bow.fun pad notes and from Bankr BOW 0xf56D…8ba3.", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-7, R-20], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "Gecko SPY/BOW pool 24h volume 679139.49 USD and reserve_in_usd 196526.94 at 2026-09-03T05:08:00Z (Gecko pool slice; pool fdv_usd 13637581.74 is the SPY-as-base book, not the Gecko token fdv)", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 200091.31 volume.h24 699131.07 fdv/marketCap 5865676 at 2026-09-03T05:08:00Z", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 5830, class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() reverts; verified PonsV2LauncherToken source: deployer is immutable reference data and confers no privileges. Deployer 0x69C3…7DA9 has no code.", class: verified, observed_at: 2026-09-03T05:04:00Z, receipt_ids: [R-2, R-5], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "deployer() / launchAndBuy from 0x69C3eaDC15Cb2b505193D94e041299cA885A7DA9; launchFactory 0x7eD5…EC7e; curve 0x29324A77…8A61", class: verified, observed_at: 2026-09-03T05:04:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is SPY 0x117cc2133c37B721F49dE2A7a74833232B3B4C0C (GET /rhj/assets active Robinhood Token); venue is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 pool 0xdba9…f4c2, Gecko dex id pons-v2-dex. SPY is a rail, not the subject.", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-7, R-8, R-12, R-16], reproduction_ids: [REP-3, REP-4, REP-5], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash is PonsV2LaunchDeployer 0x3711…1A42; launchFactory() names PonsV2LaunchFactory 0x7eD5…EC7e, not PairLaunchpadV5, LONG, STACKS factory 0x13ae…0a36, or bow.fun", class: verified, observed_at: 2026-09-03T05:04:00Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T05:04:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on longbow.cash, docs.longbow.cash, DexScreener, Gecko, Blockscout, or X search this pass", class: unknown, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: identity.domain, value: "https://longbow.cash", class: claim, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-7, R-14], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko token fdv_usd 5878261.18 market_cap_usd 5752017.87; DexScreener fdv/marketCap 5865676. Gecko pool fdv_usd 13637581.74 is the inverted SPY/BOW book.", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-7, R-8, R-9], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x117cc2133c37B721F49dE2A7a74833232B3B4C0C", class: verified, observed_at: 2026-09-03T05:04:00Z, receipt_ids: [R-7, R-12, R-17], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x29324A775D628bf3538Afdf92B4D148Cee6a8A61", class: verified, observed_at: 2026-09-03T05:04:00Z, receipt_ids: [R-5, R-6, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: communications.status, value: "unconfirmed-official for this CA on the site: DexScreener lists longbow.cash and @longbowlend; token.socials twitter is truncated https://x.com/l; www.longbow.cash JS this pass has 0 hits for 0x451b42; t.me/longbowlend preview has no CA", class: claim, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-5, R-7, R-13, R-14, R-21], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-24, field: candidate, value: "bow | BOW | @longbowlend | https://longbow.cash — discovery token not in census 49; census longbow is the credit protocol row sharing this CA", class: claim, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: relationship, value: "Census longbow is the subject credit overlay; this graduation token is the Pons-launched BOW/SPY book. Same CA 0x451b42…D751. Do not merge the rows: protocol vs token, credit/credit-overlay vs launch/graduation-token.", class: verified, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-1, R-7, R-14], reproduction_ids: [REP-2, REP-6], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "DexScreener BOW/SPY 24h volume $699.1k, liq $200.1k"
    summary: "DexScreener pair 0xdba9…f4c2 volume.h24 699131 liquidity.usd 200091 fdv 5865676. Assignment lead was ~$741k / ~$192k."
    occurred_at: 2026-09-03T05:08:00Z
    observed_at: 2026-09-03T05:08:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7]
  - id: EVT-2
    type: company
    title: "@longbowlend posted TVL crossed $500,000"
    summary: "Official account: Longbow just crossed $500,000 in total value locked. Protocol TVL, not the BOW/SPY book."
    occurred_at: 2026-09-02T16:26:32Z
    observed_at: 2026-09-03T05:02:00Z
    affected_fields: [activity.status, economics.metric]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-10]
  - id: EVT-3
    type: ct
    title: "@gem_insider posted the BOW CA and Longbow lending copy"
    summary: "Post named Longbow lending on Robinhood Chain and CA 0x451b42a15100c340ca12f7c66de06fac5ea2d751."
    occurred_at: 2026-09-02T19:09:40Z
    observed_at: 2026-09-03T05:02:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-11]
  - id: EVT-4
    type: company
    title: "@longbowlend quoted Robinhood Crypto $3B Stock Token volume"
    summary: "Quote-post: Stock Token growth on Robinhood; Longbow as a place to borrow against NVDA and other collateral on Morpho."
    occurred_at: 2026-09-03T02:48:46Z
    observed_at: 2026-09-03T05:02:00Z
    affected_fields: [activity.status, product.mechanism]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-19]
  - id: EVT-5
    type: onchain
    title: "Pons curve completed; LaunchSwept BOW vs SPY"
    summary: "Tx 0xc6e9aa87…23a4 at 2026-08-08T21:00:32Z; quoteOut 10.9e18 SPY tokenOut ~2.857e8*1e18 into factory then Uniswap v4 pool 0xdba9…f4c2."
    occurred_at: 2026-08-08T21:00:32Z
    observed_at: 2026-09-03T05:06:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-16]
  - id: EVT-6
    type: onchain
    title: "PonsV2LaunchAndBuy minted Longbow / BOW"
    summary: "Tx 0xc22c9f25…7dba from 0x69C3…7DA9 at 2026-08-08T18:17:53Z; pairToken SPY 0x117c…4C0C; TokenLaunched graduationThreshold 10.9e18."
    occurred_at: 2026-08-08T18:17:53Z
    observed_at: 2026-09-03T05:03:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-6]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x451b42…D751 Longbow / BOW", url: "https://robinhoodchain.blockscout.com/address/0x451b42A15100C340CA12F7c66DE06fac5EA2D751", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24, CLM-25], excerpt: "hash 0x451b42A15100C340CA12F7c66DE06fac5EA2D751 name PonsV2LauncherToken is_contract true is_verified true. token name Longbow symbol BOW decimals 18 total_supply 1000000000000000000000000000 holders_count 5830 type ERC-20. creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 creation_transaction_hash 0xc22c9f253e7886f4d1f8dab3a44ebffc1071eaf4883fac7814a4c0b550607dba." }
  - { id: R-2, publisher: Blockscout, title: "PonsV2LauncherToken verified source", url: "https://robinhoodchain.blockscout.com/address/0x451b42A15100C340CA12F7c66DE06fac5EA2D751?tab=contract", published_at: null, accessed_at: 2026-09-03T05:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-7, CLM-13], excerpt: "ContractName PonsV2LauncherToken compiler v0.8.35+commit.47b9dedd is_verified true is_partially_verified false file_path contracts/src/v2/PonsV2LauncherToken.sol verified_at 2026-08-08T18:18:40Z. Comment: entire supply mints to the bonding curve; deployer is immutable reference data and confers no privileges over the token." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x3711…1A42 PonsV2LaunchDeployer", url: "https://robinhoodchain.blockscout.com/address/0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42", published_at: null, accessed_at: 2026-09-03T05:03:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 name PonsV2LaunchDeployer is_contract true is_verified true creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36." }
  - { id: R-4, publisher: Blockscout, title: "launchAndBuy tx 0xc22c9f25…7dba", url: "https://robinhoodchain.blockscout.com/tx/0xc22c9f253e7886f4d1f8dab3a44ebffc1071eaf4883fac7814a4c0b550607dba", published_at: 2026-08-08T18:17:53Z, accessed_at: 2026-09-03T05:03:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-14, EVT-6], excerpt: "timestamp 2026-08-08T18:17:53.000000Z status ok block_number 31282837 from 0x69C3eaDC15Cb2b505193D94e041299cA885A7DA9 (is_contract false) to PonsV2LaunchAndBuy 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 method launchAndBuy. params name Longbow symbol BOW pairToken 0x117cc2133c37B721F49dE2A7a74833232B3B4C0C." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, launchFactory() on BOW", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:04:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-13, CLM-16, CLM-17, CLM-22, CLM-23], excerpt: "eth_chainId 0x1237 (4663) eth_blockNumber 0x32b1c8e (53157006). Token code 3248 B prefix 60806040. name Longbow symbol BOW decimals 18 totalSupply 1e27. owner() and factory() revert. deployer() 0x69C3eaDC…7DA9. launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. curve() 0x29324A77…8A61. socials twitter https://x.com/l telegram https://t.me/longbowlend." }
  - { id: R-6, publisher: Blockscout, title: "TokenLaunched log for BOW", url: "https://robinhoodchain.blockscout.com/tx/0xc22c9f253e7886f4d1f8dab3a44ebffc1071eaf4883fac7814a4c0b550607dba", published_at: 2026-08-08T18:17:53Z, accessed_at: 2026-09-03T05:03:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-14, EVT-6], excerpt: "TokenLaunched token 0x451b42A15100C340CA12F7c66DE06fac5EA2D751 curve 0x29324A775D628bf3538Afdf92B4D148Cee6a8A61 deployer 0x69C3eaDC15Cb2b505193D94e041299cA885A7DA9 pairToken 0x117cc2133c37B721F49dE2A7a74833232B3B4C0C launchConfigId 0 graduationThreshold 10900000000000000000. Factory PonsV2LaunchFactory 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens BOW", url: "https://api.dexscreener.com/latest/dex/tokens/0x451b42A15100C340CA12F7c66DE06fac5EA2D751", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-8, CLM-9, CLM-11, CLM-15, CLM-17, CLM-19, CLM-20, CLM-21, CLM-23, CLM-24, CLM-25, EVT-1], excerpt: "11 robinhood pairs. Top pairAddress 0xdba909ac1600a59685928cf317fb953d518d405b4748371889e3cb2932adf4c2 labels v4 base Longbow / BOW quote SPDR S&P 500 ETF Trust • Robinhood Token / SPY 0x117cc213…4C0C liquidity.usd 200091.31 volume.h24 699131.07 fdv 5865676 marketCap 5865676 pairCreatedAt 1786222845000. info.websites https://longbow.cash/ info.socials x.com/longbowlend t.me/longbowlend." }
  - { id: R-8, publisher: GeckoTerminal, title: "SPY/BOW Pons V2 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0xdba909ac1600a59685928cf317fb953d518d405b4748371889e3cb2932adf4c2", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, CLM-15, CLM-20], excerpt: "name SPY / BOW pool_created_at 2026-08-08T21:00:45Z fdv_usd 13637581.74 market_cap_usd 13457896.28 volume_usd.h24 679139.49 reserve_in_usd 196526.94. dex pons-v2-dex base robinhood_0x117cc2133c37b721f49de2a7a74833232b3b4c0c quote robinhood_0x451b42a15100c340ca12f7c66de06fac5ea2d751." }
  - { id: R-9, publisher: GeckoTerminal, title: "Longbow token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x451b42A15100C340CA12F7c66DE06fac5EA2D751", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-10, CLM-20], excerpt: "HTTP 200. name Longbow symbol BOW decimals 18 total_supply 1e27 fdv_usd 5878261.18 market_cap_usd 5752017.87 volume_usd.h24 1591428.03 total_reserve_in_usd 270319.50 coingecko_coin_id longbow-2. launchpad_details graduation_percentage 100 completed true completed_at 2026-08-08T21:00:45Z migrated_destination_pool_address 0xdba909ac…f4c2." }
  - { id: R-10, publisher: "@longbowlend", title: "Longbow just crossed $500,000 in total value locked", url: "https://x.com/longbowlend/status/2095186622249566603", published_at: 2026-09-02T16:26:32Z, accessed_at: 2026-09-03T05:02:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-8, EVT-2], excerpt: "Longbow just crossed $500,000 in total value locked." }
  - { id: R-11, publisher: "@gem_insider", title: "Most of you are missing the setup on $BOW", url: "https://x.com/gem_insider/status/2095227676374310961", published_at: 2026-09-02T19:09:40Z, accessed_at: 2026-09-03T05:02:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-3], excerpt: "Longbow is bringing Aave-style lending to Robinhood Chain. CA: 0x451b42a15100c340ca12f7c66de06fac5ea2d751" }
  - { id: R-12, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T05:04:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-15, CLM-21], excerpt: "HTTP 200. assets length 194. tokenSymbol SPY hit 1: tokenName SPDR S&P 500 ETF Trust • Robinhood Token deployments contractAddress 0x117cc2133c37B721F49dE2A7a74833232B3B4C0C chainId 4663 status ASSET_STATUS_ACTIVE." }
  - { id: R-13, publisher: Telegram, title: "t.me/longbowlend", url: "https://t.me/longbowlend", published_at: null, accessed_at: 2026-09-03T05:07:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-23], excerpt: "HTTP 200. og:title Longbow Protocol. og:description The credit layer for Robinhood Chain. tgme_page_extra 533 members, 94 online. No contract address in the preview HTML this pass." }
  - { id: R-14, publisher: Longbow, title: "longbow.cash site", url: "https://www.longbow.cash/", published_at: null, accessed_at: 2026-09-03T05:07:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-19, CLM-23, CLM-25], excerpt: "HTTP 200. title Longbow — The RWA lending layer for Robinhood Chain. meta description The RWA lending layer for Robinhood Chain. Lend USDG, borrow against tokenized stocks, RWAs, and memecoins. canonical https://www.longbow.cash/. HTML this pass had 0 hits for 0x451b42." }
  - { id: R-15, publisher: Blockscout, title: "Address 0x7eD5…EC7e PonsV2LaunchFactory", url: "https://robinhoodchain.blockscout.com/address/0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", published_at: null, accessed_at: 2026-09-03T05:04:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-16], excerpt: "hash 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e name PonsV2LaunchFactory is_contract true is_verified true creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36. PonsV2LaunchAndBuy 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 is_verified true." }
  - { id: R-16, publisher: Blockscout, title: "CurveCompleted tx 0xc6e9aa87…23a4", url: "https://robinhoodchain.blockscout.com/tx/0xc6e9aa87b36e41cd91d47a3163194e4ab292b1e60823ec30da4b0c0f0ccc23a4", published_at: 2026-08-08T21:00:32Z, accessed_at: 2026-09-03T05:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-15, CLM-22, EVT-5], excerpt: "timestamp 2026-08-08T21:00:32.000000Z status ok block_number 31380364. CurveCompleted recipient 0x7eD598Bc…EC7e quoteOut 10900000000000000378 tokenOut 285714285714285714285714285. LaunchSwept token 0x451b42A15100C340CA12F7c66DE06fac5EA2D751 same quoteOut/tokenOut. PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951." }
  - { id: R-17, publisher: Blockscout, title: "Token 0x117c…4C0C SPY Robinhood Token", url: "https://robinhoodchain.blockscout.com/address/0x117cc2133c37B721F49dE2A7a74833232B3B4C0C", published_at: null, accessed_at: 2026-09-03T05:04:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "hash 0x117cc2133c37B721F49dE2A7a74833232B3B4C0C name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon implementations Stock 0xb35490d6f9163DE4F80d88dc75C3516eb64C5aE2. token name SPDR S&P 500 ETF Trust • Robinhood Token symbol SPY holders_count 51139." }
  - { id: R-18, publisher: Blockscout, title: "Bankr BOW 0xf56D…8ba3", url: "https://robinhoodchain.blockscout.com/address/0xf56D9aDAA11dc278638adcDCA8Cf697DDC008ba3", published_at: null, accessed_at: 2026-09-03T05:04:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9], excerpt: "hash 0xf56D9aDAA11dc278638adcDCA8Cf697DDC008ba3 name BOW is_contract true proxy_type eip1167 implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599. token name BOW symbol BOW holders_count 2 creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a." }
  - { id: R-19, publisher: "@longbowlend", title: "Stock Token growth on Robinhood is exploding", url: "https://x.com/longbowlend/status/2095343213053661255", published_at: 2026-09-03T02:48:46Z, accessed_at: 2026-09-03T05:02:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-4], excerpt: "Stock Token growth on Robinhood is exploding, and its users need a place to borrow against an expanding assortment of them without worrying whether their collateral is secure or not. With Longbow, that place is already here." }
  - { id: R-20, publisher: Blockscout, title: "Bankr BOW collision (same as R-18 address page)", url: "https://robinhoodchain.blockscout.com/token/0xf56D9aDAA11dc278638adcDCA8Cf697DDC008ba3", published_at: null, accessed_at: 2026-09-03T05:04:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9], excerpt: "Token page for 0xf56D9aDAA11dc278638adcDCA8Cf697DDC008ba3 name BOW symbol BOW holders_count 2 total_supply 100000000000000000000000000000. Distinct from Pons BOW 0x451b42…D751." }
  - { id: R-21, publisher: Longbow, title: "longbow.cash JS bundle", url: "https://www.longbow.cash/assets/index-DBXRuHVN.js", published_at: null, accessed_at: 2026-09-03T05:07:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-23], excerpt: "HTTP 200 size 715952. Embeds https://x.com/longbowlend, Morpho, Pons strings, SPY 0x117cc2133c37b721f49de2a7a74833232b3b4c0c, USDG 0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168. 0 hits for 0x451b42 this pass." }

gaps:
  - { priority: P0, question: "Does longbow.cash or docs.longbow.cash later embed CA 0x451b42…D751 bidirectionally?", checked: "www.longbow.cash HTML and JS /assets/index-DBXRuHVN.js 0 hits for 0x451b42; docs.longbow.cash returned the same SPA shell; DexScreener lists the site; token.socials website empty, 2026-09-03", next: "re-read the JS bundle and any /docs routes after a deploy; search @longbowlend posts that embed the CA" }
  - { priority: P0, question: "Should the compiler keep census longbow as the protocol row and this bow graduation row as a separate token, given shared CA/handle/domain?", checked: "census 49 has longbow credit/credit-overlay, no slug bow; token is PonsV2LauncherToken; assignment ecosystem_role graduation, 2026-09-03", next: "controller decision; collector records possible_matches and does not merge" }
  - { priority: P1, question: "Is there an audit of PonsV2LauncherToken / PonsV2LaunchFactory covering this BOW deployment?", checked: "longbow.cash, docs.longbow.cash, DexScreener, Gecko, Blockscout verified source comment, X Latest from:longbowlend, 2026-09-03", next: "ask in public and record any report URL as a claim" }
  - { priority: P1, question: "Does t.me/longbowlend pin CA 0x451b42…D751?", checked: "public preview og:title Longbow Protocol, 533 members, no CA in HTML, 2026-09-03", next: "open the join page / first messages if they become public without joining" }
  - { priority: P2, question: "Which aggregator window printed assignment lead liq ~$192,107 vol ~$741,022?", checked: "Live DexScreener BOW/SPY liquidity.usd 200091.31 volume.h24 699131.07; Gecko pool reserve 196526.94 volume 679139.49, 2026-09-03T05:08Z", next: "archive a DexScreener screenshot if the lead figures return" }
---

# BOW — research packet

## What it is

A one-billion-supply ERC-20 cloned onto a Pons V2 bonding curve quoted against SPY, then graduated into a Uniswap v4 BOW/SPY pool. PonsV2LaunchAndBuy deploys Longbow (BOW) in one launchAndBuy call; traders buy and sell BOW on the Pons curve until LaunchSwept seeds the SPY book. SPY is the rhj rail, not the subject. Census longbow is the credit protocol that uses this ticker.

Themes: memecoin, stock-paired:SPY, rwa

## Why it matters

The BOW/SPY Uniswap v4 book printed about $699k of 24h volume on DexScreener at collection, with the quote token the active Robinhood SPY Stock Token. Gecko marks the launch 100% graduated into pool 0xdba9…f4c2. The token is the Pons output of Longbow, distinct from packed PAIR/SPY, STRATTON/SPY, STACKS/SPY, and NORMIE/SPY, and from the bow.fun pad.

## What could go wrong

USD liquidity figures on the BOW/SPY book count both sides, and the quote side is SPY, not USDG. Site JS this pass does not embed the CA, so the longbow.cash surface is the protocol site rather than a bidirectional token profile. A second BOW ticker exists at 0xf56D…8ba3 (Doppler clone, 2 holders). Census longbow already occupies the protocol row.

## Product and mechanics

PonsV2LaunchFactory clones PonsV2LauncherToken via PonsV2LaunchDeployer. launchAndBuy from 0x69C3…7DA9 at 2026-08-08T18:17:53Z minted Longbow / BOW supply 1e9*1e18 onto curve 0x29324A77…8A61 against pairToken SPY 0x117c…4C0C. launchFactory() returns 0x7eD5…EC7e. TokenLaunched graduationThreshold is 10.9e18 SPY. [verified R-4 R-5 R-6]

CurveCompleted / LaunchSwept at 2026-08-08T21:00:32Z moved ~10.9 SPY and ~2.857e8 BOW to the factory. Gecko and DexScreener date the Uniswap v4 BOW/SPY pool 0xdba9…f4c2 at 2026-08-08T21:00:45Z, dex pons-v2-dex, PoolManager 0x8366…0951. Secondary BOW/USDG, BOW/DELTA, and BOW/WETH books exist with less liquidity than the SPY book. [verified R-7 R-8 R-16]

## Control and security

token owner() reverts. Verified source: deployer is immutable reference data and confers no privileges. Deployer 0x69C3…7DA9 has no code. [verified R-2 R-5]

PonsV2LauncherToken is fully verified on Blockscout (contracts/src/v2/PonsV2LauncherToken.sol, compiler v0.8.35). No audit report URL was located this pass. [verified R-2] [unknown]

## Team and provenance

DexScreener lists https://longbow.cash/ and @longbowlend. On-chain socials() twitter is truncated to https://x.com/l; telegram is https://t.me/longbowlend; website field is empty. www.longbow.cash JS this pass does not embed 0x451b42. Flag unconfirmed-official for the CA on the site. t.me/longbowlend titles Longbow Protocol with 533 members and no CA in the public preview. [claim R-5 R-7 R-13 R-14 R-21]

Census longbow is the Morpho credit overlay at the same domain and handle. This packet is the graduated token. [verified R-1 R-14]

## Economics and activity

BOW/SPY Uniswap v4 24h volume is 699131.07 USD and liquidity.usd is 200091.31 at 2026-09-03T05:08:00Z from DexScreener. fdv/marketCap is 5865676. Assignment lead of ~$741,022 / ~$192,107 was not reproduced at this as_of. [claim R-7]

Gecko same pool (named SPY / BOW, base SPY): volume_usd.h24 679139.49 reserve_in_usd 196526.94. Gecko pool fdv_usd 13637581.74 is the inverted SPY-as-base book, not the token fdv. Gecko token fdv_usd 5878261.18 market_cap_usd 5752017.87 volume_usd.h24 1591428.03 across all pools. Blockscout holders_count 5830. Pair created 2026-08-08T21:00:45Z. [claim R-1 R-8 R-9]

@longbowlend posted protocol TVL $500,000 on 2026-09-02; that figure is the credit overlay, not this pool. [claim R-10]

## Material risks

- Quote token SPY 0x117c…4C0C is the rhj rail; pool USD reserve is BOW plus SPY, not a USDG backstop on this book. [verified R-7 R-8 R-12]
- Site JS this pass does not embed CA 0x451b42; on-chain twitter is truncated. [claim R-5 R-14 R-21]
- Ticker collision with Bankr BOW 0xf56D…8ba3 (2 holders). [verified R-18]
- Shared CA/handle/domain with census longbow protocol row. [verified R-1 R-14]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/source/deployer/factory/SPY/Bankr BOW, launchAndBuy 0xc22c…7dba, CurveCompleted 0xc6e9…23a4, RPC name/symbol/launchFactory/curve/socials, DexScreener, Gecko pool/token (first GET 200), /rhj/assets, longbow.cash HTML/JS, Telegram preview, and @longbowlend / @gem_insider posts were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-7 R-8 R-12]
- Numbers: 699131.07 is the DexScreener BOW/SPY pool 24h volume, not the Gecko token all-pools 1591428.03. Reserve 200091.31 is that DexScreener pair; Gecko pool reserve 196526.94 is the same book, inverted name SPY/BOW. Gecko pool fdv 13.6M is not the token fdv. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that this slug is census longbow and should not be a second row, or that BOW is the bow.fun pad token. launchFactory is Pons V2 0x7eD5…EC7e, the pair is SPY 0x117c…4C0C, and Bankr BOW is a different CA. The assignment asks for a graduation token row; possible_matches records the protocol collision. [inference R-5 R-7 R-18]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no bow; longbow is the credit protocol with this CA. GET packet path on PR 59 branch returned 404.
- Explorer: Blockscout api/v2 token, source, deployer, factory, curve, LaunchAndBuy, SPY, Bankr BOW, launchAndBuy 0xc22c…7dba, CurveCompleted 0xc6e9…23a4, TokenLaunched / LaunchSwept logs, holders. RPC eth_getCode/eth_call with Chrome UA at block 53157006.
- Aggregators: DexScreener latest/dex/tokens (11 pairs). Gecko first GET 200 on token then pool.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 SPY hit at 0x117c…4C0C.
- Social: X keyword $BOW / BOW SPY Latest; from:longbowlend; user search longbowlend. t.me/longbowlend preview.
- Site: longbow.cash / www.longbow.cash / docs.longbow.cash SPA; JS bundle index-DBXRuHVN.js.
- Failed: token.socials twitter truncated https://x.com/l; site JS 0 hits for 0x451b42; docs.longbow.cash same SPA shell; assignment lead ~$192k / ~$741k not live at this as_of.
- Time: collection 2026-09-03T05:02Z–2026-09-03T05:10Z.
