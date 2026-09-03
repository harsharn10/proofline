---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: ouroboros
name: OUROBOROS
packet_tier: seed
as_of: 2026-09-03T03:35:00Z
prior_packet: null
supersedes: null
owned_slugs: [ouroboros]
allowed_paths:
  - research/inbox/packets/ouroboros/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: OUROBOROS
  aliases: [Ouroboros]
  symbols: [OUROBOROS]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: https://ouroborus.space/
  official_handle: "@OuroborosOOO"
  repository: "NULL — no GitHub org or repository URL on the site HTML, DexScreener, Gecko token info, Blockscout, or X profile this pass"
  possible_matches:
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at a LONG launch paired to NVDA, site artificialinu.com / @ArtificiallyInu"
        - "OUROBOROS is 0x87aF…80eB paired to CRCL 0xdF09…1CB5 via OuroborosHook 0x7bc2…2AEC, site ouroborus.space / @OuroborosOOO"
        - "No shared domain, handle, or reproduced address"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher"
        - "OUROBOROS was created by EOA 0x0130…4a90 in a plain create tx, not LongLauncher"
        - "No shared domain, handle, or reproduced address"
    - slug: l4va
      signals: [other]
      contrary_signals:
        - "Census L4VA is a vault factory issuing tokens backed by locked RWAs"
        - "OUROBOROS is a fixed-supply ERC-20 with a Uniswap v4 hook that pairs to CRCL"
        - "No shared domain, handle, or reproduced address"
    - slug: hookr
      signals: [other]
      contrary_signals:
        - "Census Hookr is a programmable-hook marketplace"
        - "OuroborosHook is a single verified hook for this token, not a Hookr listing surface"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: []
  mechanism_tags: [stock-paired, rwa, amm, fee-routing]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x87aF…80eB has non-empty code on 4663; name Ouroboros / symbol OUROBOROS; website() returns https://ouroborus.space/. OuroborosHook 0x7bc2…2AEC poolId() returns Uniswap v4 pool 0x6e18…590b quoted against CRCL 0xdF09…1CB5 (GET /rhj/assets hit). Handle @OuroborosOOO bio is the CA. Gecko 24h volume is an aggregator figure (~$71.1M vs ~$73.7k reserve) and is filed as claim only. [R-1] [R-4] [R-10] [R-12] [R-16] [R-17]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-8, CLM-16], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: site, url: "https://ouroborus.space/", authenticity: confirmed }
  - { kind: x, url: "https://x.com/OuroborosOOO", authenticity: confirmed }

deployments:
  - label: OUROBOROS token (verified ERC-20)
    role: token
    address:
      value: "0x87aF913718f73168D4566bBF51683792aC2680eB"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:10:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-2, R-4, R-23]
  - label: OuroborosHook (Uniswap v4 hook)
    role: other
    address:
      value: "0x7bc2AF6Fb9A989505e9629470869a19143532AEC"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:20:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6, R-10]
  - label: Hook deploy helper (unverified)
    role: factory
    address:
      value: "0x6dd59681d3Da8d0Ece6Fe9b92F88C50765f65b35"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:22:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-8, R-20]
  - label: CRCL Stock Token (pair quote)
    role: token
    address:
      value: "0xdF0992E440dD0be65BD8439b609d6D4366bf1CB5"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:12:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
    receipt_ids: [R-10, R-17, R-18]
  - label: Uniswap v4 PoolManager
    role: other
    address:
      value: "0x8366a39CC670B4001A1121B8F6A443A643e40951"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:22:00Z
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-8, R-10]

metrics:
  - { kind: volume_24h, value: 71093113.05, currency: USD, as_of: 2026-09-03T03:31:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x6e18a4a21cdc8d04fd35afe130e0b37f32db9a2edb1304911b4e5cda91e7590b volume_usd.h24 (aggregator figure; ~965x reserve_in_usd; not treated as organic turnover)", class: claim, receipt_ids: [R-12] }
  - { kind: tvl, value: 73684.75, currency: USD, as_of: 2026-09-03T03:31:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x6e18…590b reserve_in_usd (OUROBOROS/CRCL pool, not an all-pools figure)", class: claim, receipt_ids: [R-12] }
  - { kind: market_cap, value: 491103.57, currency: USD, as_of: 2026-09-03T03:31:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x6e18…590b fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-12] }
  - { kind: holders, value: 574, currency: null, as_of: 2026-09-03T03:10:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x87aF913718f73168D4566bBF51683792aC2680eB holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:10:00Z, receipt_ids: [R-4, R-21], result: "eth_blockNumber 0x32a41f3 (53101043). Token 0x87aF…80eB eth_getCode 3915 B (not EIP-1167). name Ouroboros, symbol OUROBOROS, decimals 18, totalSupply 959958124828552229982910 (~959958e18). owner() reverts. factory() reverts. website() https://ouroborus.space/. Creator 0x0130…4a90 eth_getCode 0x. CRCL 0xdF09…1CB5 eth_getCode non-empty beacon-style proxy." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:22:00Z, receipt_ids: [R-1, R-2, R-3, R-5, R-7, R-8, R-9, R-18, R-20, R-23], result: "Blockscout token 0x87aF…80eB name Ouroboros symbol OUROBOROS holders_count 574 total_supply 959960191214118038041115 is_verified true proxy_type null file_path src/Ouroboros.sol. Create tx 0xfb18…3f4b 2026-09-01T21:52:51Z block 52054360 from EOA 0x0130…4a90; Transfer mint 1e24 to that EOA. Same block: helper 0x6dd5…5b35 created; deploy(token 0x87aF…80eB, manager 0x8366…0951, router param 0xdF09…1CB5); transfer 999999999999999999999875 to hook 0x7bc2…2AEC; bootstrap(5800898166269581014816) on OuroborosHook (verified src/OuroborosHook.sol)." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T03:31:00Z, receipt_ids: [R-11, R-12, R-13, R-14], result: "Gecko pool OUROBOROS/CRCL uniswap-v4-robinhood pool_created_at 2026-09-01T21:52:51Z volume_usd.h24 71093113.0494652 reserve_in_usd 73684.7511 fdv_usd 491103.5693 market_cap_usd null txs h24 buys 20009 sells 16385. DexScreener pair liquidity.usd 73395.02 volume.h24 73339566.86 fdv/marketCap 455485 info.websites https://ouroborus.space/ info.socials x.com/ouroborosooo. Gecko token info holders.count 553 gt_score 42.16 websites [] twitter_handle null." }
  - { id: REP-4, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:28:00Z, receipt_ids: [R-10], result: "Hook 0x7bc2…2AEC code 11734 B. poolId() 0x6e18a4a21cdc8d04fd35afe130e0b37f32db9a2edb1304911b4e5cda91e7590b. crcl() 0xdF0992E440dD0be65BD8439b609d6D4366bf1CB5. ouroboros() 0x87aF913718f73168D4566bBF51683792aC2680eB. bootstrapped() 1. lockedLiquidity 5800898166269581014816. bootstrapper() 0x01302F7b6b994950b51bC6572c402cB5dc214a90. HOOK_FEE_PIPS 10000. cumulativeBuybackOuroborosBurned ~40055e18. cumulativeCrclFeesCaptured ~207.94e18. manager() 0x8366…0951. owner() reverts." }
  - { id: REP-5, method: official-crosslink, checked_at: 2026-09-03T03:20:00Z, receipt_ids: [R-15, R-16, R-21, R-23], result: "Token website() and verified source constant website = https://ouroborus.space/. Site title OUROBOROS — The Circle Feeds; og:url https://ouroborus.space; static HTML this pass has no 0x87aF…80eB and no ouroborosooo. @OuroborosOOO bio is 0x87aF913718f73168D4566bBF51683792aC2680eB. DexScreener lists the same site and x.com/ouroborosooo." }
  - { id: REP-6, method: api, checked_at: 2026-09-03T03:18:00Z, receipt_ids: [R-17, R-18], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one CRCL row tokenName Circle Internet Group • Robinhood Token deployments.contractAddress 0xdF0992E440dD0be65BD8439b609d6D4366bf1CB5 chainId 4663 status ASSET_STATUS_ACTIVE. Blockscout CRCL name matches; proxy_type eip1967_beacon implementation Stock 0xb354…5aE2." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Fixed-supply ERC-20 minted 1e6*1e18 to the deployer, then almost all of it transferred into OuroborosHook. The hook initializes Uniswap v4 pool 0x6e18…590b vs CRCL, takes HOOK_FEE_PIPS 10000 (1%) in CRCL, allocates cumulative fees * 4/5 to burnBudget and the rest to turnReserve, then automaticBuyAndBurn / automaticTurn. beforeAddLiquidity and beforeRemoveLiquidity revert ExternalLiquidityForbidden.", class: verified, observed_at: 2026-09-03T03:28:00Z, receipt_ids: [R-3, R-6, R-7, R-9, R-10, R-23], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Ouroboros", class: verified, observed_at: 2026-09-03T03:10:00Z, receipt_ids: [R-1, R-4, R-23], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "OUROBOROS", class: verified, observed_at: 2026-09-03T03:10:00Z, receipt_ids: [R-1, R-4, R-23], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x87aF913718f73168D4566bBF51683792aC2680eB", class: verified, observed_at: 2026-09-03T03:12:00Z, receipt_ids: [R-1, R-3, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x7bc2AF6Fb9A989505e9629470869a19143532AEC", class: verified, observed_at: 2026-09-03T03:22:00Z, receipt_ids: [R-5, R-7, R-10], reproduction_ids: [REP-2, REP-4], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:22:00Z, receipt_ids: [R-1, R-3, R-4, R-10], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T03:18:00Z, receipt_ids: [R-11, R-12, R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "@OuroborosOOO", class: claim, observed_at: 2026-09-03T03:20:00Z, receipt_ids: [R-11, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote CRCL 0xdF09…1CB5 is Circle Internet Group • Robinhood Token in GET /rhj/assets (194 assets, 1 CRCL row, chainId 4663). Distinct from census LONG / Artificial Inu / L4VA / Hookr.", class: verified, observed_at: 2026-09-03T03:18:00Z, receipt_ids: [R-17, R-18, R-10], reproduction_ids: [REP-4, REP-6], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "Gecko OUROBOROS/CRCL Uniswap v4 24h volume 71093113.05 USD and reserve_in_usd 73684.75 at 2026-09-03T03:31:00Z (~965x reserve). Aggregator figure only; not treated as organic turnover.", class: claim, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 73395.02 volume.h24 73339566.86 fdv/marketCap 455485 at 2026-09-03T03:30:00Z", class: claim, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 574, class: verified, observed_at: 2026-09-03T03:10:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() reverts; hook owner() reverts; verified Ouroboros.sol has no owner; hook bootstrap() is only bootstrapper 0x0130…4a90 and already bootstrapped()==true; add/remove liquidity revert ExternalLiquidityForbidden", class: verified, observed_at: 2026-09-03T03:28:00Z, receipt_ids: [R-4, R-6, R-10, R-23], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "bootstrapper() 0x01302F7b6b994950b51bC6572c402cB5dc214a90 equals the create/deploy/bootstrap EOA; hook has no owner() after bootstrap", class: verified, observed_at: 2026-09-03T03:28:00Z, receipt_ids: [R-3, R-7, R-10], reproduction_ids: [REP-2, REP-4], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is CRCL 0xdF0992E440dD0be65BD8439b609d6D4366bf1CB5; venue is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 poolId 0x6e18…590b; not a Pons/LONG/PAIR/LaunchpadFactory clone", class: verified, observed_at: 2026-09-03T03:28:00Z, receipt_ids: [R-2, R-8, R-10, R-11], reproduction_ids: [REP-2, REP-3, REP-4], supersedes: null }
  - { id: CLM-16, field: identity.domain, value: "https://ouroborus.space/", class: verified, observed_at: 2026-09-03T03:20:00Z, receipt_ids: [R-15, R-21, R-23], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T03:10:00Z, receipt_ids: [R-4, R-11], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, the site HTML, DexScreener, Gecko info, or the X profile this pass", class: unknown, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "@OuroborosOOO bio is the CA; DexScreener socials list x.com/ouroborosooo; site static HTML this pass has no handle or CA. Flag unconfirmed-official for site→handle.", class: claim, observed_at: 2026-09-03T03:20:00Z, receipt_ids: [R-15, R-16, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko fdv_usd 491103.57; DexScreener fdv/marketCap 455485. Gecko market_cap_usd null.", class: claim, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-12, R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0xdF0992E440dD0be65BD8439b609d6D4366bf1CB5", class: verified, observed_at: 2026-09-03T03:18:00Z, receipt_ids: [R-10, R-17, R-18], reproduction_ids: [REP-4, REP-6], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x6dd59681d3Da8d0Ece6Fe9b92F88C50765f65b35", class: verified, observed_at: 2026-09-03T03:22:00Z, receipt_ids: [R-8, R-20], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-23, field: identity.repository, value: "NULL — no GitHub URL on the site HTML, DexScreener, Gecko info, or X profile this pass", class: claim, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-11, R-13, R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: candidate, value: "ouroboros | OUROBOROS | @OuroborosOOO | https://ouroborus.space/ — discovery token not in census 49", class: claim, observed_at: 2026-09-03T03:35:00Z, receipt_ids: [R-1, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: other, value: "X posts from unrelated accounts linked netlify claim and vote URLs that embed CA 0x87aF…80eB. Flag copypasta-pattern, third-party-link.", class: claim, observed_at: 2026-09-03T03:25:00Z, receipt_ids: [R-24], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: company
    title: "@OuroborosOOO posted 77.7m volume and 3.9% burned"
    summary: "Account posted: 24 hours - 77.7m Volume. 3.9% Tokens burned. Ouroboros has no end and it's only the beginning."
    occurred_at: 2026-09-02T22:13:08Z
    observed_at: 2026-09-03T03:20:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-16]
  - id: EVT-2
    type: onchain
    title: "Gecko OUROBOROS/CRCL 24h volume $71.1M, reserve $73.7k"
    summary: "Gecko pool 0x6e18…590b volume_usd.h24 71093113 reserve_in_usd 73685 fdv_usd 491104. Aggregator figure only."
    occurred_at: 2026-09-03T03:31:00Z
    observed_at: 2026-09-03T03:31:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-12]
  - id: EVT-3
    type: ct
    title: "@scalper_news posted 260.2x volume versus pool liquidity"
    summary: "Post: $OUROBOROS / CRCL uniswap pool, $54k liquidity. Volume is running 260.2x the pool."
    occurred_at: 2026-09-02T02:55:53Z
    observed_at: 2026-09-03T03:22:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-19]
  - id: EVT-4
    type: company
    title: "@OuroborosOOO posted day-one 1e6 supply and 25 million volume"
    summary: "Account posted: 1,000,000 tokens. 3% burned. 25 million volume. Day one."
    occurred_at: 2026-09-02T05:26:12Z
    observed_at: 2026-09-03T03:20:00Z
    affected_fields: [economics.metric, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-22]
  - id: EVT-5
    type: onchain
    title: "EOA deployed OUROBOROS, hook helper, and CRCL pool"
    summary: "Block 52054360 2026-09-01T21:52:51Z: token 0x87aF…80eB, helper 0x6dd5…5b35, hook bootstrap poolId 0x6e18…590b."
    occurred_at: 2026-09-01T21:52:51Z
    observed_at: 2026-09-03T03:22:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-3, R-7, R-8]
  - id: EVT-6
    type: ct
    title: "X posts linked netlify claim and vote pages for the CA"
    summary: "Unrelated accounts posted crypto-*.netlify.app/claim and pons-voting-*.netlify.app/vote URLs that embed 0x87aF…80eB."
    occurred_at: 2026-09-02T20:10:21Z
    observed_at: 2026-09-03T03:25:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-24]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x87aF…80eB Ouroboros / OUROBOROS", url: "https://robinhoodchain.blockscout.com/address/0x87aF913718f73168D4566bBF51683792aC2680eB", published_at: null, accessed_at: 2026-09-03T03:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-24], excerpt: "hash 0x87aF913718f73168D4566bBF51683792aC2680eB name Ouroboros is_contract true is_verified true proxy_type null. token symbol OUROBOROS decimals 18 total_supply 959960191214118038041115 holders_count 574 type ERC-20. creator_address_hash 0x01302F7b6b994950b51bC6572c402cB5dc214a90 creation_transaction_hash 0xfb1838d5062997154f84084ddf7f581674749f13831b964fa1b63e93d0233f4b." }
  - { id: R-2, publisher: Blockscout, title: "Address 0x87aF…80eB creator and verification", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x87aF913718f73168D4566bBF51683792aC2680eB", published_at: null, accessed_at: 2026-09-03T03:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-15], excerpt: "hash 0x87aF913718f73168D4566bBF51683792aC2680eB is_contract true is_verified true name Ouroboros proxy_type null implementations []. creator_address_hash 0x01302F7b6b994950b51bC6572c402cB5dc214a90 creation_transaction_hash 0xfb1838d5062997154f84084ddf7f581674749f13831b964fa1b63e93d0233f4b creation_status success." }
  - { id: R-3, publisher: Blockscout, title: "Create tx 0xfb18…3f4b", url: "https://robinhoodchain.blockscout.com/tx/0xfb1838d5062997154f84084ddf7f581674749f13831b964fa1b63e93d0233f4b", published_at: 2026-09-01T21:52:51Z, accessed_at: 2026-09-03T03:12:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-6, CLM-14, EVT-5], excerpt: "timestamp 2026-09-01T21:52:51.000000Z status ok result success block_number 52054360 from 0x01302F7b6b994950b51bC6572c402cB5dc214a90 (is_contract false) to null created_contract Ouroboros 0x87aF913718f73168D4566bBF51683792aC2680eB is_verified true. Log Transfer from 0x0 to 0x0130…4a90 amount 1000000000000000000000000." }
  - { id: R-4, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, website() on OUROBOROS", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-13, CLM-16, CLM-17], excerpt: "eth_blockNumber 0x32a41f3 (53101043). Token code 3915 B. name Ouroboros symbol OUROBOROS decimals 18 totalSupply 959958124828552229982910. owner() reverts. factory() reverts. website() https://ouroborus.space/. Creator 0x0130…4a90 code 0x." }
  - { id: R-5, publisher: Blockscout, title: "Address 0x7bc2…2AEC OuroborosHook", url: "https://robinhoodchain.blockscout.com/address/0x7bc2AF6Fb9A989505e9629470869a19143532AEC", published_at: null, accessed_at: 2026-09-03T03:20:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5], excerpt: "hash 0x7bc2AF6Fb9A989505e9629470869a19143532AEC name OuroborosHook is_contract true is_verified true proxy_type null. Smart-contract compiler 0.8.36+commit.8a079791 file_path src/OuroborosHook.sol is_partially_verified false verified_at 2026-09-01T22:28:18Z." }
  - { id: R-6, publisher: Blockscout, title: "OuroborosHook verified source", url: "https://robinhoodchain.blockscout.com/address/0x7bc2AF6Fb9A989505e9629470869a19143532AEC?tab=contract", published_at: null, accessed_at: 2026-09-03T03:28:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-13], excerpt: "ContractName OuroborosHook. HOOK_FEE_PIPS 10_000 // 1%. beforeAddLiquidity/beforeRemoveLiquidity revert ExternalLiquidityForbidden. _allocateCrclFee: targetBurnAllocation = cumulativeCrclFeesCaptured * 4 / 5. automaticBuyAndBurn calls ouroboros.burn. bootstrap only bootstrapper, then bootstrapped=true." }
  - { id: R-7, publisher: Blockscout, title: "bootstrap tx 0x3d37…59bb", url: "https://robinhoodchain.blockscout.com/tx/0x3d374daf3dc043ffb654b497ce6520f0c52b38b1dc26f8a27024be880de059bb", published_at: 2026-09-01T21:52:51Z, accessed_at: 2026-09-03T03:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-14, EVT-5], excerpt: "timestamp 2026-09-01T21:52:51.000000Z status ok block_number 52054360 from 0x01302F7b6b994950b51bC6572c402cB5dc214a90 to OuroborosHook 0x7bc2AF6Fb9A989505e9629470869a19143532AEC method bootstrap. decoded bootstrap(uint128 liquidity) liquidity 5800898166269581014816." }
  - { id: R-8, publisher: Blockscout, title: "helper deploy tx 0xd136…098e", url: "https://robinhoodchain.blockscout.com/tx/0xd136827cc9e6cc4f22925da9aa3ca3c1d838fec1d93480529b802ac62557098e", published_at: 2026-09-01T21:52:51Z, accessed_at: 2026-09-03T03:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-15, CLM-22, EVT-5], excerpt: "timestamp 2026-09-01T21:52:51.000000Z to 0x6dd59681d3Da8d0Ece6Fe9b92F88C50765f65b35 method deploy. decoded deploy(bytes32 salt, address manager, address token, address router, address approvedInitializer, uint160 committedSqrtPriceX96) manager 0x8366a39CC670B4001A1121B8F6A443A643e40951 token 0x87aF…80eB router 0xdF09…1CB5 approvedInitializer 0x0130…4a90." }
  - { id: R-9, publisher: Blockscout, title: "transfer tx 0x70da…a3c8 to hook", url: "https://robinhoodchain.blockscout.com/tx/0x70da8536b2746dd74be6b62c920410cf80b5d3a548e56e3b09425bcf0140a3c8", published_at: 2026-09-01T21:52:51Z, accessed_at: 2026-09-03T03:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1], excerpt: "timestamp 2026-09-01T21:52:51.000000Z to Ouroboros 0x87aF913718f73168D4566bBF51683792aC2680eB method transfer. decoded transfer(address to, uint256 amount) to 0x7bc2AF6Fb9A989505e9629470869a19143532AEC amount 999999999999999999999875." }
  - { id: R-10, publisher: Robinhood Chain RPC, title: "OuroborosHook poolId, crcl, ouroboros, bootstrapped", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:28:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-9, CLM-13, CLM-14, CLM-15, CLM-21], excerpt: "poolId() 0x6e18a4a21cdc8d04fd35afe130e0b37f32db9a2edb1304911b4e5cda91e7590b. crcl() 0xdF0992E440dD0be65BD8439b609d6D4366bf1CB5. ouroboros() 0x87aF913718f73168D4566bBF51683792aC2680eB. bootstrapped() 1. bootstrapper() 0x01302F7b6b994950b51bC6572c402cB5dc214a90. HOOK_FEE_PIPS 10000. manager() 0x8366a39CC670B4001A1121B8F6A443A643e40951. owner() reverts." }
  - { id: R-11, publisher: DexScreener, title: "latest/dex/tokens OUROBOROS", url: "https://api.dexscreener.com/latest/dex/tokens/0x87aF913718f73168D4566bBF51683792aC2680eB", published_at: null, accessed_at: 2026-09-03T03:08:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-15, CLM-17, CLM-19, CLM-23, CLM-24], excerpt: "Top pairAddress 0x6e18a4a21cdc8d04fd35afe130e0b37f32db9a2edb1304911b4e5cda91e7590b labels v4 base Ouroboros / OUROBOROS quote Circle Internet Group • Robinhood Token / CRCL 0xdF0992E440dD0be65BD8439b609d6D4366bf1CB5 liquidity.usd 73006.09 volume.h24 73095757.26 fdv 450864 pairCreatedAt 1788299571000. info.websites https://ouroborus.space/ info.socials https://x.com/ouroborosooo." }
  - { id: R-12, publisher: GeckoTerminal, title: "OUROBOROS/CRCL Uniswap v4 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x6e18a4a21cdc8d04fd35afe130e0b37f32db9a2edb1304911b4e5cda91e7590b", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-10, CLM-20, EVT-2], excerpt: "name OUROBOROS / CRCL pool_created_at 2026-09-01T21:52:51Z fdv_usd 491103.5693 market_cap_usd null volume_usd.h24 71093113.0494652 reserve_in_usd 73684.7511. dex uniswap-v4-robinhood quote robinhood_0xdf0992e440dd0be65bd8439b609d6d4366bf1cb5. transactions.h24 buys 20009 sells 16385." }
  - { id: R-13, publisher: GeckoTerminal, title: "Ouroboros token info", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x87aF913718f73168D4566bBF51683792aC2680eB/info", published_at: null, accessed_at: 2026-09-03T03:12:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-23], excerpt: "name Ouroboros symbol OUROBOROS decimals 18 websites [] twitter_handle null telegram_handle null coingecko_coin_id null gt_score 42.158730158730165 gt_verified false holders.count 553 last_updated 2026-09-03T03:25:47Z." }
  - { id: R-14, publisher: DexScreener, title: "OUROBOROS/CRCL pair", url: "https://api.dexscreener.com/latest/dex/pairs/robinhood/0x6e18a4a21cdc8d04fd35afe130e0b37f32db9a2edb1304911b4e5cda91e7590b", published_at: null, accessed_at: 2026-09-03T03:30:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-11, CLM-20], excerpt: "pairAddress 0x6e18a4a21cdc8d04fd35afe130e0b37f32db9a2edb1304911b4e5cda91e7590b dexId uniswap labels v4. liquidity.usd 73395.02 volume.h24 73339566.86 fdv 455485 marketCap 455485 pairCreatedAt 1788299571000. quoteToken CRCL 0xdF0992E440dD0be65BD8439b609d6D4366bf1CB5." }
  - { id: R-15, publisher: OUROBOROS, title: "ouroborus.space", url: "https://ouroborus.space/", published_at: null, accessed_at: 2026-09-03T03:15:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-16, CLM-19, CLM-23], excerpt: "title OUROBOROS — The Circle Feeds. meta description: A fixed-supply protocol on Robinhood Chain. Every turn fuels autonomous buybacks, permanent burns, and the cycle that follows. og:url https://ouroborus.space. Body: The serpent feeds upon every turn. OUROBOROS was born finite. Route ETH → CRCL → OURO. Static HTML this pass has no 0x87aF and no ouroborosooo." }
  - { id: R-16, publisher: "@OuroborosOOO", title: "24 hours - 77.7m Volume", url: "https://x.com/OuroborosOOO/status/2095273846890746321", published_at: 2026-09-02T22:13:08Z, accessed_at: 2026-09-03T03:20:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-8, CLM-19, EVT-1], excerpt: "Profile name Ｏｕｒｏｂｏｒｏｓ handle @OuroborosOOO bio 0x87aF913718f73168D4566bBF51683792aC2680eB followers 172. Post: 24 hours - 77.7m Volume. 3.9% Tokens burned. Ouroboros has no end and it's only the beginning." }
  - { id: R-17, publisher: Robinhood, title: "GET /rhj/assets CRCL row", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T03:18:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-7, CLM-9, CLM-21], excerpt: "HTTP 200. assets length 194. One hit tokenSymbol CRCL tokenName Circle Internet Group • Robinhood Token deployments contractAddress 0xdF0992E440dD0be65BD8439b609d6D4366bf1CB5 chainId 4663 networkName Robinhood Chain status ASSET_STATUS_ACTIVE." }
  - { id: R-18, publisher: Blockscout, title: "Token 0xdF09…1CB5 CRCL", url: "https://robinhoodchain.blockscout.com/address/0xdF0992E440dD0be65BD8439b609d6D4366bf1CB5", published_at: null, accessed_at: 2026-09-03T03:12:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "hash 0xdF0992E440dD0be65BD8439b609d6D4366bf1CB5 name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon implementations Stock 0xb35490d6f9163DE4F80d88dc75C3516eb64C5aE2. token name Circle Internet Group • Robinhood Token symbol CRCL decimals 18 holders_count 7713 icon_url cdn.robinhood.com/ncw_assets/logos/0xdf0992e440dd0be65bd8439b609d6d4366bf1cb5.png." }
  - { id: R-19, publisher: "@scalper_news", title: "ELEVATED RISK · 60/100 $OUROBOROS", url: "https://x.com/scalper_news/status/2094982618580238482", published_at: 2026-09-02T02:55:53Z, accessed_at: 2026-09-03T03:22:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-3], excerpt: "ELEVATED RISK · 60/100. $OUROBOROS — a Robinhood-chain token. OUROBOROS/CRCL pool · uniswap · $54k liquidity. Volume is running 260.2x the pool — the same liquidity churning." }
  - { id: R-20, publisher: Blockscout, title: "Address 0x6dd5…5b35 hook helper", url: "https://robinhoodchain.blockscout.com/address/0x6dd59681d3Da8d0Ece6Fe9b92F88C50765f65b35", published_at: null, accessed_at: 2026-09-03T03:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "hash 0x6dd59681d3Da8d0Ece6Fe9b92F88C50765f65b35 is_contract true is_verified false name null creator_address_hash 0x01302F7b6b994950b51bC6572c402cB5dc214a90 creation_transaction_hash 0xd0e483a5d31c0de686d3a17fb63ad327cdb9155b6e1efaa73989e3600847d497. eth_getCode 15544 B." }
  - { id: R-21, publisher: Robinhood Chain RPC, title: "website() on OUROBOROS", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:15:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "eth_call website() 0xbeb0a416 → https://ouroborus.space/ (hex 68747470733a2f2f6f75726f626f7275732e73706163652f)." }
  - { id: R-22, publisher: "@OuroborosOOO", title: "Day one 1,000,000 tokens", url: "https://x.com/OuroborosOOO/status/2095020445930004956", published_at: 2026-09-02T05:26:12Z, accessed_at: 2026-09-03T03:20:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-4], excerpt: "1,000,000 tokens. 3% burned. 25 million volume. Day one." }
  - { id: R-23, publisher: Blockscout, title: "Ouroboros.sol verified source", url: "https://robinhoodchain.blockscout.com/address/0x87aF913718f73168D4566bBF51683792aC2680eB?tab=contract", published_at: null, accessed_at: 2026-09-03T03:14:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-13, CLM-16], excerpt: "ContractName Ouroboros compiler v0.8.36+commit.8a079791 file_path src/Ouroboros.sol is_verified true is_partially_verified false verified_at 2026-09-02T02:55:59Z. Source: string public constant website = \"https://ouroborus.space/\"; constructor(address recipient, uint256 supply) ERC20(\"Ouroboros\", \"OUROBOROS\", 18) { _mint(recipient, supply); } function burn(uint256 amount) external { _burn(msg.sender, amount); }" }
  - { id: R-24, publisher: "@MOGEETHA1", title: "$OUROBOROS portal is live netlify claim URL", url: "https://x.com/MOGEETHA1/status/2095242948669518085", published_at: 2026-09-02T20:10:21Z, accessed_at: 2026-09-03T03:25:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-25, EVT-6], excerpt: "Quick heads up. $OUROBOROS portal is live. CA: 0x87aF913718f73168D4566bBF51683792aC2680eB https://crypto-mll.netlify.app/claim?contract=0x87aF913718f73168D4566bBF51683792aC2680eB&cfg=evmdrop&pid=XzRuT. Same CA also appeared in pons-voting-*.netlify.app/vote posts. Flag copypasta-pattern, third-party-link." }

gaps:
  - { priority: P0, question: "Does ouroborus.space client JS embed CA 0x87aF…80eB or @OuroborosOOO so the site→handle/CA link is bidirectional?", checked: "Static HTML title/og tags and string scan, 2026-09-03; no 0x87aF, no ouroborosooo; contract website() and X bio already link the other way", next: "fetch Next.js chunks listed on the homepage and search for the CA and handle" }
  - { priority: P1, question: "What is unverified helper 0x6dd5…5b35 beyond deploy() — any remaining privileged path?", checked: "is_verified false; deploy() decoded with manager/token/CRCL/initializer; code 15544 B, 2026-09-03", next: "wait for Blockscout verification or disassemble deploy() and any owner/pause selectors" }
  - { priority: P1, question: "Is there an audit report for Ouroboros.sol or OuroborosHook.sol?", checked: "site HTML, DexScreener, Gecko info, X profile, Blockscout contract pages, 2026-09-03", next: "re-read docs/site if an audit URL is added" }
  - { priority: P2, question: "Why do Gecko fdv_usd 491104 and DexScreener fdv 455485 differ on the same pool?", checked: "both endpoints opened 2026-09-03T03:30–03:31Z; Gecko market_cap_usd null", next: "compare circulating vs total supply inputs each aggregator uses" }
  - { priority: P2, question: "Do the netlify claim/vote hosts resolve to this project's site or an unrelated page?", checked: "public X text only; URLs not opened beyond the post, 2026-09-03", next: "open one URL in a throwaway fetch and record the title if it still embeds the CA" }
---

# OUROBOROS — research packet

## What it is

A fixed-supply ERC-20 on Robinhood Chain quoted against the CRCL Stock Token. OuroborosHook takes a 1% CRCL fee on Uniswap v4 swaps, forbids outside LP, and burns tokens from CRCL buybacks. A user buys or sells OUROBOROS on that pool. EOA 0x0130…4a90 deployed the token and hook; owner() reverts on both.

Themes: memecoin, stock-paired:CRCL

## Why it matters

OUROBOROS/CRCL is a live Uniswap v4 book against a GET /rhj/assets CRCL Stock Token, not a synthetic ticker. The hook is verified and locks LP. Gecko 24h volume is about $71.1M on about $73.7k reserve; that ratio is recorded as an aggregator figure only.

## What could go wrong

USD reserve counts OUROBOROS plus CRCL, not a USDG backstop. 24h volume is ~965× reserve on Gecko, so the turnover number is not treated as organic flow. Site HTML this pass does not embed the CA or handle. Unrelated X posts pointed at netlify claim/vote URLs that embed the same CA.

## Product and mechanics

EOA 0x0130…4a90 created token 0x87aF…80eB at 2026-09-01T21:52:51Z with constructor mint 1e6*1e18 to itself. The same block created helper 0x6dd5…5b35, called deploy() with Uniswap v4 PoolManager 0x8366…0951, token 0x87aF…80eB, and CRCL 0xdF09…1CB5, transferred 999999999999999999999875 tokens to OuroborosHook 0x7bc2…2AEC, then bootstrap(5800898166269581014816). [verified R-3 R-7 R-8 R-9]

Verified hook source: HOOK_FEE_PIPS 10000 (1%) in CRCL, _allocateCrclFee sends cumulative fees * 4/5 to burnBudget and the rest to turnReserve, automaticBuyAndBurn calls ouroboros.burn, beforeAddLiquidity/beforeRemoveLiquidity revert ExternalLiquidityForbidden. poolId() matches Gecko/DexScreener 0x6e18…590b. Secondary OUROBOROS/USDG and OUROBOROS/ETH books exist on DexScreener with far less liquidity than the CRCL book. [verified R-6 R-10 R-11]

## Control and security

token owner() reverts. hook owner() reverts. bootstrap() is only bootstrapper 0x0130…4a90 and bootstrapped() is already true. Deployer EOA has no code. Helper 0x6dd5…5b35 is unverified. [verified R-4 R-10 R-20]

Ouroboros.sol and OuroborosHook.sol are fully verified on Blockscout (compiler 0.8.36, src/Ouroboros.sol, src/OuroborosHook.sol). No audit report URL was located this pass. [verified R-5 R-23] [unknown]

## Team and provenance

Token website() and the verified constant return https://ouroborus.space/. @OuroborosOOO bio is 0x87aF913718f73168D4566bBF51683792aC2680eB. Site static HTML this pass has no CA and no handle, so site→handle is unconfirmed-official. DexScreener lists the site and x.com/ouroborosooo. No GitHub URL this pass. [claim R-11 R-15 R-16]

Unrelated accounts posted netlify claim and vote URLs that embed this CA. Flag copypasta-pattern, third-party-link. [claim R-24]

## Economics and activity

Gecko OUROBOROS/CRCL Uniswap v4 24h volume is 71093113.05 USD and reserve_in_usd is 73684.75 at 2026-09-03T03:31:00Z. fdv_usd is 491103.57. market_cap_usd is null. Volume/reserve is ~965. That volume figure is an aggregator claim, not treated as organic turnover. [claim R-12]

DexScreener same pair: liquidity.usd 73395.02, volume.h24 73339566.86, fdv/marketCap 455485. Blockscout holders_count 574. Gecko token info holders.count 553. Pair created 2026-09-01T21:52:51Z. Hook cumulativeBuybackOuroborosBurned ~40055e18 versus constructor supply 1e6*1e18. [claim R-1 R-10 R-13 R-14]

@OuroborosOOO posted 77.7m volume and 3.9% burned at 2026-09-02T22:13:08Z. @scalper_news posted 260.2x volume versus $54k liquidity earlier that day. [claim R-16 R-19]

## Material risks

- 24h Gecko volume is ~965× pool reserve; the number is filed as claim only. [claim R-12]
- Pool USD reserve is OUROBOROS plus CRCL, not a USDG backstop. [claim R-12 R-14]
- Site HTML this pass does not embed the CA or handle. [claim R-15]
- Helper 0x6dd5…5b35 is unverified. [verified R-20]
- No audit report URL this pass. [unknown]
- Third-party netlify claim/vote URLs embed this CA. [claim R-24]

## Verification passes

- Receipts: Blockscout token/hook/helper/CRCL and the create/deploy/transfer/bootstrap txs, RPC name/symbol/website/poolId/crcl/bootstrapped, DexScreener token and pair, Gecko pool and token info, /rhj/assets, ouroborus.space, @OuroborosOOO posts, and @scalper_news were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-4 R-10 R-12 R-17]
- Numbers: 71093113.05 is the Gecko OUROBOROS/CRCL pool 24h volume, not a DexScreener figure and not an all-pools total. Reserve 73684.75 is that pool. DexScreener 73339566.86 / 73395.02 is the same pair, different aggregator. Volume is class claim. [claim R-12 R-14]
- Adversarial: the strongest contrary reading is that OUROBOROS is the ourolayer.com $OURO fee-layer token or a LONG/PAIR factory clone. website() is ouroborus.space, the CA is 0x87aF…80eB, factory() reverts, and create was a plain EOA create plus a custom hook. [inference R-4 R-15 R-23]

## Operations log

- Base: `git rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no ouroboros / OUROBOROS / 0x87aF…80eB. content/dependencies/stock-tokens.yaml lists CRCL at 0xdF09…1CB5.
- Explorer: Blockscout api/v2 token, address, hook, helper, CRCL, create 0xfb18…3f4b, deploy 0xd136…098e, transfer 0x70da…a3c8, bootstrap 0x3d37…59bb, verified sources. RPC eth_getCode/eth_call at block 53101043.
- Aggregators: DexScreener latest/dex/tokens and latest/dex/pairs; Gecko pool (twice) and token info. Gecko token (non-info) returned 429.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 CRCL row matching 0xdF09…1CB5.
- Social: X user search ouroborosooo; from:OuroborosOOO; keyword OUROBOROS CRCL; @scalper_news post; netlify claim/vote posts.
- Site: GET https://ouroborus.space/ static HTML.
- Failed: Gecko networks/robinhood/tokens (non-info) 429; eth_getLogs for poolId over a wide block range timed out; Blockscout creator txs filter=to|from returned empty (unfiltered list used).
- Time: collection 2026-09-03T03:05Z–2026-09-03T03:35Z.
