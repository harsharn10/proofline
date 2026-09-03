---
# Packet v2 (docs/research-system.md §5). Collector full-tier for Icarus.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: longbow
name: Longbow
packet_tier: full
as_of: 2026-09-02T23:59:00Z
prior_packet: null
supersedes: null
owned_slugs: [longbow]
allowed_paths:
  - research/inbox/packets/longbow/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Longbow
  aliases: []
  symbols: [BOW]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://www.longbow.cash
  official_handle: "@longbowlend"
  repository: "NULL — no repository URL on www.longbow.cash, docs.longbow.cash or the @longbowlend bio this pass; github.com/LongbowFinance returned 404; github.com/longbowlend is not linked from those surfaces"
  possible_matches:
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired launchpad at app.long.xyz / @longdotxyz"
        - "Longbow is a Morpho Blue credit overlay at longbow.cash / @longbowlend with token 0x451b42A15100C340CA12F7c66DE06fac5EA2D751"
        - "No shared domain, handle or reproduced address"
    - slug: longshot
      signals: [other]
      contrary_signals:
        - "Census Longshot is a launch/fee-router at uselongshot.xyz / @uselongshot with token 0x8701E2C87ade58325601f4F9bf37ADF46Cb75745"
        - "Longbow is a Morpho Blue credit overlay at longbow.cash / @longbowlend with token 0x451b42A15100C340CA12F7c66DE06fac5EA2D751"
        - "No shared domain, handle or reproduced address"
    - slug: bankr
      signals: [ticker-only]
      contrary_signals:
        - "A second BOW ticker at 0xf56D9aDAA11dc278638adcDCA8Cf697DDC008ba3 is an EIP-1167 DopplerERC20V1 clone with 2 holders, created by 0x1B37D3a72082029c44B35B604Ea473617580b69a"
        - "Longbow BOW is PonsV2LauncherToken 0x451b42A15100C340CA12F7c66DE06fac5EA2D751, 5753 holders"
        - "Bankr official handle is @bankrbot; Longbow is @longbowlend"

classification:
  primary_leaf: credit/credit-overlay
  secondary_leaves: [credit/morpho-curator, credit/rwa-lending]
  mechanism_tags: [lending, vault, rwa, stock-paired, nft, oracle]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: full
  evidence_state: partly-verified
  rationale: "BOW 0x451b42… is a verified PonsV2LauncherToken on chain 4663 with live Uniswap v4 BOW/SPY liquidity; Longbow Core USDG vault 0x026df18… and Morpho Blue 0x9D53d5… have non-empty code. Census announced is below the mainnet bar. Overlay market ids, GLD LLTV and the fee split remain API or post claims. [R-5] [R-8] [R-9] [R-13] [R-16]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-16], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-9], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-6, CLM-14, CLM-19], note: "" }

links:
  - { kind: site, url: "https://www.longbow.cash", authenticity: confirmed }
  - { kind: docs, url: "https://docs.longbow.cash", authenticity: confirmed }
  - { kind: x, url: "https://x.com/longbowlend", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/longbowlend", authenticity: unconfirmed }

deployments:
  - label: BOW token (PonsV2LauncherToken)
    role: token
    address:
      value: "0x451b42A15100C340CA12F7c66DE06fac5EA2D751"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6, R-17]
  - label: Longbow Core USDG vault (lbcoreUSDG)
    role: vault
    address:
      value: "0x026df18fbd2A7639089D0a16293383ec687A5Ca1"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-9, R-11, R-13]
  - label: Longbow USDG MetaMorpho V1_1 vault
    role: vault
    address:
      value: "0x8cb8AA35228c96C1C4E956E69AbAEBCc2aA7Dcfe"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-10, R-14]
  - label: BOW StakingRewards
    role: other
    address:
      value: "0xEba502e1177f5fad9432c2deb273569D8381e01A"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-12, R-15]
  - label: Core vault owner Safe (SafeL2)
    role: multisig
    address:
      value: "0x396ae0BD5623c3750e15fd222770F1e972153ED4"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: false
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: null
    receipt_ids: [R-18, R-19]
  - label: Morpho Blue (settlement primitive; not Longbow-owned)
    role: other
    address:
      value: "0x9D53d5E3bd5E8d4Cbfa6DB1ca238AEA02E651010"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-16]
  - label: BOW/USDG Ramses v3 pool
    role: other
    address:
      value: "0x95D1b62891531b9207aD9C79a021bDf6BE452920"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-8, R-20]

metrics:
  - { kind: tvl, value: 588602.3, currency: USD, as_of: 2026-09-02T23:42:00Z, window: point, method: "www.longbow.cash/api/stats tvl on chainId 4663", class: claim, receipt_ids: [R-9] }
  - { kind: volume_24h, value: 832979.57, currency: USD, as_of: 2026-09-02T23:41:00Z, window: 24h, method: "api.dexscreener.com/token-pairs/v1/robinhood/0x451b42A15100C340CA12F7c66DE06fac5EA2D751 Uniswap v4 BOW/SPY volume.h24", class: claim, receipt_ids: [R-8] }
  - { kind: holders, value: 5753, currency: null, as_of: 2026-09-02T23:40:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x451b42A15100C340CA12F7c66DE06fac5EA2D751 holders_count", class: claim, receipt_ids: [R-6] }
  - { kind: market_cap, value: 4843328.84, currency: USD, as_of: 2026-09-02T23:40:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x451b42A15100C340CA12F7c66DE06fac5EA2D751 circulating_market_cap", class: claim, receipt_ids: [R-6] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-02T23:40:00Z, receipt_ids: [R-5, R-6, R-17], result: "api/v2/addresses/0x451b42A15100C340CA12F7c66DE06fac5EA2D751 is_contract true, is_verified true, name PonsV2LauncherToken, proxy_type null, creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 (PonsV2LaunchDeployer), creation_transaction_hash 0xc22c9f253e7886f4d1f8dab3a44ebffc1071eaf4883fac7814a4c0b550607dba to PonsV2LaunchAndBuy 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 method launchAndBuy at 2026-08-08T18:17:53Z; token name Longbow symbol BOW decimals 18 holders_count 5753 total_supply 1e27; eth_getCode non-empty (6498 hex chars) at rpc.mainnet.chain.robinhood.com; eth_call name/symbol decode to Longbow/BOW; owner() reverts" }
  - { id: REP-2, method: api, chain_id: 4663, checked_at: 2026-09-02T23:41:00Z, receipt_ids: [R-8], result: "DexScreener token-pairs/v1/robinhood/0x451b42A15100C340CA12F7c66DE06fac5EA2D751 returned 13 pairs; largest Uniswap v4 BOW/SPY poolId 0xdba909ac1600a59685928cf317fb953d518d405b4748371889e3cb2932adf4c2 quote 0x117cc2133c37B721F49dE2A7a74833232B3B4C0C liquidity.usd 182286.08 volume.h24 832979.57 priceUsd 0.004873 fdv 4873206; second Uniswap v4 BOW/USDG 0xd80658c9… liquidity.usd 122558.81; Ramses v3 BOW/USDG 0x95D1b62891531b9207aD9C79a021bDf6BE452920 liquidity.usd 54665.46" }
  - { id: REP-3, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-02T23:45:00Z, receipt_ids: [R-13, R-14, R-15, R-16, R-18, R-19], result: "eth_getCode non-empty on Core vault 0x026df18… (43618 hex), MetaMorpho V1_1 0x8cb8AA… (40362), StakingRewards 0xEba502… (9054), Morpho 0x9D53d5… (31166); owner() Core vault returns Safe 0x396ae0BD5623c3750e15fd222770F1e972153ED4; getThreshold 2; getOwners three EOAs 0x66478bd53319fdb573b75d0a1c52f5902bf1f93a, 0xa3ec1b475132420a739d1707863b1d70d6f95643, 0x68563d1f055ca6065b8245d8b9d23021beb26c8e; MetaMorpho and StakingRewards owner() 0x1bf704707e9F3f407EbC9364fDAeD08C39893770 (eth_getCode empty); Blockscout names 0x8cb8AA… MetaMorphoV1_1 verified, 0xEba502… StakingRewards verified, 0x9D53d5… Morpho verified, 0x026df18… unverified, Safe proxy_type master_copy implementation SafeL2" }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-02T23:35:00Z, receipt_ids: [R-1, R-2, R-3], result: "www.longbow.cash canonical and JS footer href https://x.com/longbowlend; @longbowlend bio URL field longbow.cash and t.co/MGNl5p08g7 refresh to t.me/longbowlend" }
  - { id: REP-5, method: api, chain_id: 4663, checked_at: 2026-09-02T23:42:00Z, receipt_ids: [R-9, R-10, R-11, R-12], result: "/api/stats chainId 4663 tvl 588602.3 totalBorrowed 261964.58 marketCount 53 curatorVaultAddress 0x026df18fbd2A7639089D0a16293383ec687A5Ca1; /api/markets 53 rows including PONS/USDG marketId 0xaba3ac50… lltv 0.385 oracleType twap collateral 0x39dBED3a2bd333467115dE45665cC57F813C4571 totalSupply=totalBorrow 51769.684941 utilization 1, GLD/USDG lltv 0.385, SPY/USDG lltv 0.625 oracleType chainlink; /api/v2/vaults core 0x026df18… asset USDG; /api/stats/rich bow.address 0x451b42a15100c340ca12f7c66de06fac5ea2d751 staking.address 0xeba502e1177f5fad9432c2deb273569d8381e01a" }
  - { id: REP-6, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-02T23:43:00Z, receipt_ids: [R-21, R-22], result: "eth_getCode 0x07f5b6823751c2e2cd4560f28af75ff887102241 empty (len 2); Blockscout is_contract false. 0xf56D9aDAA11dc278638adcDCA8Cf697DDC008ba3 is_contract true name BOW proxy_type eip1167 implementation DopplerERC20V1 holders_count 2, distinct from Longbow BOW" }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Isolated Morpho Blue markets on Robinhood Chain: post listed collateral (Stock Tokens, PONS, memecoins, NFTs per the site) and borrow USDG; suppliers deposit USDG into Longbow-curated vaults that allocate across those markets", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-1, R-2, R-10, R-11], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://www.longbow.cash", class: verified, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@longbowlend", class: verified, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-1, R-2, R-3], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x451b42A15100C340CA12F7c66DE06fac5EA2D751", class: verified, observed_at: 2026-09-02T23:40:00Z, receipt_ids: [R-5, R-6, R-12, R-23], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-5, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-02T23:40:00Z, receipt_ids: [R-5, R-6, R-8], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: control.owner, value: "0x396ae0BD5623c3750e15fd222770F1e972153ED4", class: verified, observed_at: 2026-09-02T23:45:00Z, receipt_ids: [R-13, R-18, R-19], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-7, field: control.threshold, value: "2-of-3 Safe (getThreshold 2; three getOwners) on the Core USDG vault", class: verified, observed_at: 2026-09-02T23:45:00Z, receipt_ids: [R-18, R-19], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-8, field: identity.symbol, value: "BOW", class: verified, observed_at: 2026-09-02T23:40:00Z, receipt_ids: [R-5, R-6], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-9, field: relationship, value: "BOW creator_address_hash is PonsV2LaunchDeployer 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42; creation tx launchAndBuy on PonsV2LaunchAndBuy 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948; primary book is Uniswap v4 BOW/SPY (quote 0x117cc2133c37B721F49dE2A7a74833232B3B4C0C)", class: verified, observed_at: 2026-09-02T23:40:00Z, receipt_ids: [R-5, R-8, R-17], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: 832979.57, class: verified, observed_at: 2026-09-02T23:41:00Z, receipt_ids: [R-8], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-11, field: security.audit, value: "No Longbow overlay audit report was linked from the site, docs, X bio or GitHub this pass", class: unknown, observed_at: 2026-09-02T23:36:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-12, field: security.audit, value: "Site copy states deposits settle on Morpho Blue, audited over 30 times by Cantina, Spearbit, Trail of Bits and ABDK, and that NFT escrow was reviewed by ChainSecurity and Halborn", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-13, field: product.mechanism, value: "GLD/USDG max LTV 62.5%, Uniswap V3 TWAP, isolated (official post 2026-08-24)", class: claim, observed_at: 2026-09-02T23:48:00Z, receipt_ids: [R-24], reproduction_ids: [], supersedes: null }
  - { id: CLM-14, field: product.mechanism, value: "GLD/USDG lltv 0.385, oracleType twap, cap 5000 USDG (www.longbow.cash/api/markets 2026-09-02)", class: claim, observed_at: 2026-09-02T23:42:00Z, receipt_ids: [R-10], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-15, field: economics.metric, value: 588602.3, class: claim, observed_at: 2026-09-02T23:42:00Z, receipt_ids: [R-9], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-16, field: deployment.address, value: "0x026df18fbd2A7639089D0a16293383ec687A5Ca1", class: verified, observed_at: 2026-09-02T23:45:00Z, receipt_ids: [R-9, R-11, R-13], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-17, field: control.owner, value: "0x1bf704707e9F3f407EbC9364fDAeD08C39893770 owns MetaMorpho V1_1 0x8cb8AA… and StakingRewards 0xEba502… (eth_getCode empty on that owner)", class: verified, observed_at: 2026-09-02T23:45:00Z, receipt_ids: [R-14, R-15], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-18, field: other, value: "Same-ticker BOW at 0xf56D9aDAA11dc278638adcDCA8Cf697DDC008ba3 is a DopplerERC20V1 clone with 2 holders, not the Longbow token; flag ticker-only", class: verified, observed_at: 2026-09-02T23:43:00Z, receipt_ids: [R-21], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-19, field: other, value: "Official posts used ethereum:0x07f5b6823751c2e2cd4560f28af75ff887102241 as PONS; that address has no code on 4663; 4663 PONS is 0x39dBED3a2bd333467115dE45665cC57F813C4571; flags wrong-chain, ca-collision", class: verified, observed_at: 2026-09-02T23:43:00Z, receipt_ids: [R-22, R-25, R-10], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-20, field: team.identity, value: "No legal entity or named operators on the site or docs this pass; public surfaces are @longbowlend and t.me/longbowlend", class: claim, observed_at: 2026-09-02T23:35:00Z, receipt_ids: [R-1, R-3, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: product.mechanism, value: "PONS/USDG marketId 0xaba3ac501ce4c6b80c08ed0dba19e1ac0de495f17af3ed692a38e92d176a6c9e lltv 0.385 twap, utilization 1, totalBorrow 51769.684941 USDG", class: claim, observed_at: 2026-09-02T23:42:00Z, receipt_ids: [R-10], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-22, field: product.mechanism, value: "Lending fee split posted 2026-08-06: 35% treasury, 30% USDG vault, 25% buyback and burn, 10% to the token", class: claim, observed_at: 2026-09-02T23:50:00Z, receipt_ids: [R-26], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: identity.repository, value: "NULL — no repository URL on official surfaces this pass", class: unknown, observed_at: 2026-09-02T23:36:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: other, value: "Census slugs long (app.long.xyz / @longdotxyz) and longshot (uselongshot.xyz / @uselongshot) are different products; no shared domain, handle or reproduced address with Longbow", class: claim, observed_at: 2026-09-02T23:30:00Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: deployment.address, value: "0x9D53d5E3bd5E8d4Cbfa6DB1ca238AEA02E651010", class: verified, observed_at: 2026-09-02T23:45:00Z, receipt_ids: [R-16], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-26, field: economics.metric, value: "Official account posted Longbow just crossed $500,000 in total value locked (2026-09-02)", class: claim, observed_at: 2026-09-02T23:48:00Z, receipt_ids: [R-27], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: other, value: "api.llama.fi/protocol/longbow returned HTTP 400; no DefiLlama protocol row named Longbow on Robinhood Chain this pass", class: claim, observed_at: 2026-09-02T23:38:00Z, receipt_ids: [R-28], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: control.timelock, value: "NULL — no timelock address on the site, docs, APIs or explorer labels this pass", class: unknown, observed_at: 2026-09-02T23:46:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: product.mechanism
    claim_ids: [CLM-13, CLM-14]
    material_effect: true
    status: open
    resolution: null

events:
  - id: EVT-1
    type: company
    title: "Greenwood integration posted for Longbow credit markets"
    summary: "@longbowlend posted that Greenwood is integrating Longbow markets so users can borrow without selling collateral."
    occurred_at: 2026-09-02T22:04:08Z
    observed_at: 2026-09-02T23:48:00Z
    affected_fields: [product.mechanism, relationship]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-25]
  - id: EVT-2
    type: company
    title: "Official account posted TVL crossed $500,000"
    summary: "@longbowlend posted Longbow just crossed $500,000 in total value locked."
    occurred_at: 2026-09-02T16:26:32Z
    observed_at: 2026-09-02T23:48:00Z
    affected_fields: [economics.metric]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-27]
  - id: EVT-3
    type: company
    title: "Builders program posted: 50% of fees to integrators"
    summary: "@longbowlend posted integrators get at least 50% of fees from volume they bring, plus their own fee."
    occurred_at: 2026-09-02T08:04:10Z
    observed_at: 2026-09-02T23:48:00Z
    affected_fields: [product.mechanism]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-29]
  - id: EVT-4
    type: company
    title: "NOTHING/USDG market posted with a dedicated vault"
    summary: "@longbowlend posted MonkeyHood NOTHING as USDG collateral, with a $25,000 dedicated vault seed."
    occurred_at: 2026-09-01T23:46:22Z
    observed_at: 2026-09-02T23:48:00Z
    affected_fields: [product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-30]
  - id: EVT-5
    type: company
    title: "AI/USDG market posted for Artificial Inu collateral"
    summary: "@longbowlend posted Artificial Inu as isolated USDG-borrow collateral, priced onchain and capped."
    occurred_at: 2026-09-01T15:50:38Z
    observed_at: 2026-09-02T23:48:00Z
    affected_fields: [product.mechanism]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-31]
  - id: EVT-6
    type: company
    title: "Official account posted TVL crossed $300,000"
    summary: "@longbowlend posted TVL crossed $300,000 and named PONS as the leading collateral/borrow market."
    occurred_at: 2026-09-01T08:16:37Z
    observed_at: 2026-09-02T23:48:00Z
    affected_fields: [economics.metric, product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-32]
  - id: EVT-7
    type: risk
    title: "Project post tagged an Ethereum address as PONS"
    summary: "Posts on 30 Aug and 2 Sep used ethereum:0x07f5b682… as PONS; that address has no code on 4663."
    occurred_at: 2026-08-30T17:19:59Z
    observed_at: 2026-09-02T23:48:00Z
    affected_fields: [deployment.address]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-22, R-25]
  - id: EVT-8
    type: onchain
    title: "BOW token live on chain 4663 as PonsV2LauncherToken"
    summary: "0x451b42… is a verified PonsV2LauncherToken; Uniswap v4 BOW/SPY liquidity was 182286.08 USD this pass."
    occurred_at: 2026-08-08T18:17:53Z
    observed_at: 2026-09-02T23:40:00Z
    affected_fields: [deployment.address, lifecycle, identity.symbol]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-5, R-6, R-8, R-17]

receipts:
  - { id: R-1, publisher: Longbow, title: "longbow.cash home HTML", url: "https://www.longbow.cash/", published_at: null, accessed_at: 2026-09-02T23:35:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-20, CLM-24], excerpt: "title Longbow — The RWA lending layer for Robinhood Chain; meta description The RWA lending layer for Robinhood Chain. Lend USDG, borrow against tokenized stocks, RWAs, and memecoins.; link rel=canonical href=https://www.longbow.cash/; script /assets/index-DBXRuHVN.js" }
  - { id: R-2, publisher: Longbow, title: "App bundle index-DBXRuHVN.js", url: "https://www.longbow.cash/assets/index-DBXRuHVN.js", published_at: null, accessed_at: 2026-09-02T23:35:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-3, CLM-12], excerpt: "footer href https://x.com/longbowlend aria-label Longbow on X; YS=https://longbow.cash; docs.longbow.cash hostname routes /docs; copy: Deposits settle on Morpho Blue… Audited over 30 times… Cantina, Spearbit, Trail of Bits and ABDK; NFT escrow… ChainSecurity and Halborn; API paths /api/stats /api/markets /api/v2/vaults; YL=0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168" }
  - { id: R-3, publisher: X, title: "@longbowlend profile", url: "https://x.com/longbowlend", published_at: "2026-07-29T15:57:40Z", accessed_at: 2026-09-02T23:35:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-20, CLM-24], excerpt: "Name Longbow. Handle @longbowlend. Bio: The credit layer for Robinhood Chain. Lend, borrow and leverage against stocks, memes, RWAs and NFTs. Powered by @Morpho & @Ponsdotfamily | t.co/MGNl5p08g7. URLs: http://longbow.cash" }
  - { id: R-4, publisher: Telegram, title: "t.me/longbowlend preview", url: "https://t.me/longbowlend", published_at: null, accessed_at: 2026-09-02T23:36:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-20], excerpt: "Telegram: View @longbowlend. Longbow Protocol. 529 members, 109 online. The credit layer for Robinhood Chain. Lend, borrow and leverage against stocks, memes, RWAs and NFTs. Powered by Morpho Blue and Pons." }
  - { id: R-5, publisher: Blockscout, title: "Address 0x451b42A15100C340CA12F7c66DE06fac5EA2D751", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x451b42A15100C340CA12F7c66DE06fac5EA2D751", published_at: null, accessed_at: 2026-09-02T23:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-8, CLM-9, CLM-24, EVT-8], excerpt: "hash 0x451b42A15100C340CA12F7c66DE06fac5EA2D751 is_contract true is_verified true name PonsV2LauncherToken proxy_type null creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 creation_transaction_hash 0xc22c9f253e7886f4d1f8dab3a44ebffc1071eaf4883fac7814a4c0b550607dba" }
  - { id: R-6, publisher: Blockscout, title: "Token Longbow (BOW)", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0x451b42A15100C340CA12F7c66DE06fac5EA2D751", published_at: null, accessed_at: 2026-09-02T23:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-8, EVT-8], excerpt: "name Longbow symbol BOW decimals 18 holders_count 5753 total_supply 1000000000000000000000000000 type ERC-20 circulating_market_cap 4843328.843676517 exchange_rate 0.00484334" }
  - { id: R-8, publisher: DexScreener, title: "BOW token-pairs on robinhood", url: "https://api.dexscreener.com/token-pairs/v1/robinhood/0x451b42A15100C340CA12F7c66DE06fac5EA2D751", published_at: null, accessed_at: 2026-09-02T23:41:00Z, kind: third-party-data, authority: primary, authenticity: confirmed, supports: [CLM-5, CLM-9, CLM-10, EVT-8], excerpt: "13 pairs. Uniswap v4 BOW/SPY pairAddress 0xdba909ac1600a59685928cf317fb953d518d405b4748371889e3cb2932adf4c2 quote SPY 0x117cc2133c37B721F49dE2A7a74833232B3B4C0C liquidity.usd 182286.08 volume.h24 832979.57 priceUsd 0.004873 fdv 4873206. Ramses v3 BOW/USDG 0x95D1b62891531b9207aD9C79a021bDf6BE452920 liquidity.usd 54665.46" }
  - { id: R-9, publisher: Longbow, title: "/api/stats", url: "https://www.longbow.cash/api/stats", published_at: null, accessed_at: 2026-09-02T23:42:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-15, CLM-16], excerpt: "tvl 588602.3 totalBorrowed 261964.58 marketCount 53 chain Robinhood Chain chainId 4663 curatorVaultAddress 0x026df18fbd2A7639089D0a16293383ec687A5Ca1 tvlWithCollateral 623318.95 bowStaked 141056716.62284768 depositorCount 32 recentLiquidations 0" }
  - { id: R-10, publisher: Longbow, title: "/api/markets", url: "https://www.longbow.cash/api/markets", published_at: null, accessed_at: 2026-09-02T23:42:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-14, CLM-19, CLM-21], excerpt: "53 markets. PONS/USDG marketId 0xaba3ac501ce4c6b80c08ed0dba19e1ac0de495f17af3ed692a38e92d176a6c9e lltv 0.385 oracleType twap collateralAddress 0x39dBED3a2bd333467115dE45665cC57F813C4571 totalSupply 51769.684941 totalBorrow 51769.684941 utilization 1. GLD/USDG lltv 0.385. SPY/USDG lltv 0.625 oracleType chainlink." }
  - { id: R-11, publisher: Longbow, title: "/api/v2/vaults", url: "https://www.longbow.cash/api/v2/vaults", published_at: null, accessed_at: 2026-09-02T23:42:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-16], excerpt: "vaults[core] address 0x026df18fbd2A7639089D0a16293383ec687A5Ca1 adapter 0xDA803813Cd8424e4643c7C912b98A6021616bd02 name Longbow Core USDG symbol lbcoreUSDG asset 0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168 tvl 25888.74 performanceFee 0.1 marketCount 36 status live" }
  - { id: R-12, publisher: Longbow, title: "/api/stats/rich", url: "https://www.longbow.cash/api/stats/rich", published_at: null, accessed_at: 2026-09-02T23:42:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-4], excerpt: "chainId 4663. bow.address 0x451b42a15100c340ca12f7c66de06fac5ea2d751 decimals 18 totalSupply 1000000000. staking.address 0xeba502e1177f5fad9432c2deb273569d8381e01a bowStaked 141056716.62. protocol.markets 53 liquidations 0. vault.feeRecipient 0xa4c8e4ed1d6a85b68032f4b921b20a664ea36413" }
  - { id: R-13, publisher: Blockscout, title: "Core USDG vault 0x026df18…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x026df18fbd2A7639089D0a16293383ec687A5Ca1", published_at: null, accessed_at: 2026-09-02T23:45:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, CLM-16], excerpt: "hash 0x026df18fbd2A7639089D0a16293383ec687A5Ca1 is_contract true is_verified false name null proxy_type null; eth_getCode non-empty (43618 hex chars); owner() 0x396ae0BD5623c3750e15fd222770F1e972153ED4" }
  - { id: R-14, publisher: Blockscout, title: "MetaMorphoV1_1 0x8cb8AA…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x8cb8AA35228c96C1C4E956E69AbAEBCc2aA7Dcfe", published_at: null, accessed_at: 2026-09-02T23:45:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-17], excerpt: "hash 0x8cb8AA35228c96C1C4E956E69AbAEBCc2aA7Dcfe is_contract true is_verified true name MetaMorphoV1_1 creator_address_hash 0x0A1B840210C47Ab452DA111D462A1e5De300aC1A; owner() 0x1bf704707e9F3f407EbC9364fDAeD08C39893770" }
  - { id: R-15, publisher: Blockscout, title: "StakingRewards 0xEba502…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xEba502e1177f5fad9432c2deb273569D8381e01A", published_at: null, accessed_at: 2026-09-02T23:45:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-17], excerpt: "hash 0xEba502e1177f5fad9432c2deb273569D8381e01A is_contract true is_verified true name StakingRewards creator_address_hash 0x1bf704707e9F3f407EbC9364fDAeD08C39893770; owner() 0x1bf704707e9F3f407EbC9364fDAeD08C39893770" }
  - { id: R-16, publisher: Blockscout, title: "Morpho 0x9D53d5…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x9D53d5E3bd5E8d4Cbfa6DB1ca238AEA02E651010", published_at: null, accessed_at: 2026-09-02T23:45:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-25], excerpt: "hash 0x9D53d5E3bd5E8d4Cbfa6DB1ca238AEA02E651010 is_contract true is_verified true name Morpho creator_address_hash 0xC67335D90Eb297407f998bFb75DbAAC8bebDdd2b; eth_getCode non-empty (31166 hex chars)" }
  - { id: R-17, publisher: Blockscout, title: "BOW creation tx launchAndBuy", url: "https://robinhoodchain.blockscout.com/api/v2/transactions/0xc22c9f253e7886f4d1f8dab3a44ebffc1071eaf4883fac7814a4c0b550607dba", published_at: "2026-08-08T18:17:53.000000Z", accessed_at: 2026-09-02T23:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-9, EVT-8], excerpt: "hash 0xc22c9f25… status ok timestamp 2026-08-08T18:17:53.000000Z from 0x69C3eaDC15Cb2b505193D94e041299cA885A7DA9 to 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 name PonsV2LaunchAndBuy method launchAndBuy result success" }
  - { id: R-18, publisher: Blockscout, title: "Core vault owner Safe 0x396ae0…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x396ae0BD5623c3750e15fd222770F1e972153ED4", published_at: null, accessed_at: 2026-09-02T23:45:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, CLM-7], excerpt: "hash 0x396ae0BD5623c3750e15fd222770F1e972153ED4 is_contract true is_verified false proxy_type master_copy implementation SafeL2 0x29fcB43b46531BcA003ddC8FCB67FFE91900C762 creator_address_hash 0x4e1DCf7AD4e460CfD30791CCC4F9c8a4f820ec67" }
  - { id: R-19, publisher: Robinhood Chain RPC, title: "Safe getThreshold / getOwners", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-02T23:45:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, CLM-7], excerpt: "eth_call getThreshold 0xe75235b8 on 0x396ae0BD5623c3750e15fd222770F1e972153ED4 returns 2; getOwners 0xa0e67e2b returns three addresses 0x66478bd53319fdb573b75d0a1c52f5902bf1f93a, 0xa3ec1b475132420a739d1707863b1d70d6f95643, 0x68563d1f055ca6065b8245d8b9d23021beb26c8e; eth_blockNumber 52956821 chainId 4663" }
  - { id: R-20, publisher: Blockscout, title: "RamsesV3Pool 0x95D1b628…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x95D1b62891531b9207aD9C79a021bDf6BE452920", published_at: null, accessed_at: 2026-09-02T23:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [], excerpt: "hash 0x95D1b62891531b9207aD9C79a021bDf6BE452920 is_contract true is_verified true name RamsesV3Pool creator_address_hash 0x4b37359BF291AbE8453692DB58d515a8b013Dca9" }
  - { id: R-21, publisher: Blockscout, title: "Same-ticker BOW 0xf56D9aDA…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xf56D9aDAA11dc278638adcDCA8Cf697DDC008ba3", published_at: null, accessed_at: 2026-09-02T23:43:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-18], excerpt: "is_contract true is_verified true name BOW proxy_type eip1167 implementation DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 creator 0x1B37D3a72082029c44B35B604Ea473617580b69a; token holders_count 2 name BOW symbol BOW" }
  - { id: R-22, publisher: Blockscout, title: "0x07f5b682… on chain 4663", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x07f5b6823751c2e2cd4560f28af75ff887102241", published_at: null, accessed_at: 2026-09-02T23:43:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-19, EVT-7], excerpt: "hash 0x07f5B6823751C2E2cd4560f28aF75ff887102241 is_contract false is_verified false name null creator_address_hash null; eth_getCode empty" }
  - { id: R-23, publisher: Longbow, title: "Longbow is live (BOW CA)", url: "https://x.com/longbowlend/status/2087057059342622763", published_at: "2026-08-11T06:02:33Z", accessed_at: 2026-09-02T23:48:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-4], excerpt: "Longbow is live. Onchain credit for every asset - borrow USDG against tokenized stocks, RWAs & crypto on Robinhood Chain. $BOW: 0x451b42a15100c340ca12f7c66de06fac5ea2d751" }
  - { id: R-24, publisher: Longbow, title: "GLD/USDG market post", url: "https://x.com/longbowlend/status/2091906124236656883", published_at: "2026-08-24T15:11:00Z", accessed_at: 2026-09-02T23:48:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-13], excerpt: "New market on Longbow: $GLD / USDG. Tokenized gold is now collateral. Max LTV 62.5%, Uniswap V3 TWAP oracle, isolated like every market." }
  - { id: R-25, publisher: Longbow, title: "Greenwood integration post", url: "https://x.com/longbowlend/status/2095271583401013630", published_at: "2026-09-02T22:04:08Z", accessed_at: 2026-09-02T23:48:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-19, EVT-1, EVT-7], excerpt: "Longbow 🤝 Greenwood (@GwoodFinance). Greenwood is integrating Longbow's credit markets… Greenwood users will be able to borrow against assets like $NET, ethereum:0x07f5b6823751c2e2cd4560f28af75ff887102241 and other RHC-native collateral through our markets" }
  - { id: R-26, publisher: Longbow, title: "BOW live on TradePools (fee split)", url: "https://x.com/longbowlend/status/2085230002157617542", published_at: "2026-08-06T05:02:28Z", accessed_at: 2026-09-02T23:50:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-22], excerpt: "Quoted 2026-08-06 04:39:16 post: Borrow USDG against tokenized stocks… Of the fees from lending activity: 35% funds the treasury… 30% flows into the USDG vault… Live post itself: $BOW is live on @TradePools. Contract: 0xad9e5fb798d12663911388a8d25eba21d6141401" }
  - { id: R-27, publisher: Longbow, title: "TVL crossed $500,000", url: "https://x.com/longbowlend/status/2095186622249566603", published_at: "2026-09-02T16:26:32Z", accessed_at: 2026-09-02T23:48:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-26, EVT-2], excerpt: "Longbow just crossed $500,000 in total value locked." }
  - { id: R-28, publisher: DefiLlama, title: "protocol/longbow", url: "https://api.llama.fi/protocol/longbow", published_at: null, accessed_at: 2026-09-02T23:38:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-27], excerpt: "HTTP 400 Bad Request. Protocols search returned ArcherSwap (symbol BOW, chain CORE) and BowStop (symbol BOW, chain Robinhood Chain, twitter BowStopApp, address robinhood:0x507B757cf2157f6357DC385b8096d7daFAefDaAA), neither matching longbow.cash." }
  - { id: R-29, publisher: Longbow, title: "Builders fee share post", url: "https://x.com/longbowlend/status/2095060201187512715", published_at: "2026-09-02T08:04:10Z", accessed_at: 2026-09-02T23:48:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-3], excerpt: "Calling all Robinhood Chain builders: if you integrate Longbow's credit lines into your project, you get at minimum 50% of all fees generated from volume you bring, and can add your own fee on top with 100% kept by you. Check out the docs here: https://www.longbow.cash/builders" }
  - { id: R-30, publisher: Longbow, title: "NOTHING/USDG market post", url: "https://x.com/longbowlend/status/2094934923954073791", published_at: "2026-09-01T23:46:22Z", accessed_at: 2026-09-02T23:48:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-4], excerpt: "New market on Longbow: $NOTHING / USDG. We've opened a dedicated Longbow vault for MonkeyHood, seeded with $25,000 by their team… Post NOTHING, draw USDG, keep your position." }
  - { id: R-31, publisher: Longbow, title: "AI/USDG market post", url: "https://x.com/longbowlend/status/2094815202063626426", published_at: "2026-09-01T15:50:38Z", accessed_at: 2026-09-02T23:48:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-5], excerpt: "New market on Longbow: $AI / USDG. Artificial Inu is now live as collateral on Robinhood Chain. Post AI, draw USDG, keep your position. Isolated market, conservatively capped, priced onchain." }
  - { id: R-32, publisher: Longbow, title: "TVL crossed $300,000; PONS leads", url: "https://x.com/longbowlend/status/2094700946316009665", published_at: "2026-09-01T08:16:37Z", accessed_at: 2026-09-02T23:48:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-6], excerpt: "Total value locked on Longbow has crossed $300,000, up from $100,000 just 36 hours ago. The PONS market leads activity: $115,000 of PONS posted as collateral against $46,000 borrowed." }

gaps:
  - { priority: P0, question: "Do the /api/markets Morpho marketIds (PONS 0xaba3ac50…, SPY 0x50bc39b5…, GLD 0x6c12c025…) match Morpho.idToMarketParams on 0x9D53d5…, and is GLD 38.5% a new market or a relabel of the 62.5% post?", checked: "Longbow /api/markets and /api/v2/vaults, Blockscout Morpho contract, 2026-09-02; no idToMarketParams eth_call this pass", next: "eth_call idToMarketParams for those bytes32 keys and compare lltv, oracle, loan and collateral" }
  - { priority: P0, question: "What is the verified source and allocator path of Core vault 0x026df18… and adapter 0xDA803813…?", checked: "Blockscout address pages: Core vault and adapter is_verified false; owner() is the 2-of-3 Safe", next: "read bytecode/selectors or wait for explorer verification; map adapter allocations to Morpho markets" }
  - { priority: P1, question: "Is there a Longbow overlay audit, or only the Morpho Blue and NFT-escrow reviews named in site copy?", checked: "site HTML/JS, docs.longbow.cash, X bio, github.com/LongbowFinance 404, 2026-09-02", next: "open any report URL the project posts and match commit/address scope" }
  - { priority: P1, question: "Is the 35/30/25/10 lending fee split still encoded, and which contract enforces it?", checked: "2026-08-06 X post; current JS bundle has no 35% treasury copy; /api/stats/rich buybackBurnAllTime 0", next: "read StakingRewards and vault feeRecipient 0xa4c8e4ed… transfers" }
  - { priority: P2, question: "Who are the three Safe owners, and is there a timelock in front of market creation or vault allocation?", checked: "getOwners on 0x396ae0…; no timelock address on site, docs or explorer labels", next: "label the three EOAs if they appear in verified source or a project post" }
---

# Longbow — research packet

## What it is

Isolated Morpho Blue markets on Robinhood Chain: a user posts Stock Tokens, PONS or other collateral and borrows USDG without selling the position. Suppliers deposit USDG into Longbow-curated vaults that allocate across those markets. BOW is the protocol token, launched through Pons v2 and paired to SPY on Uniswap v4. @longbowlend runs longbow.cash.

Themes: lending, rwa, vault, nft, stock-paired:SPY

## Why it matters

Longbow is a live credit overlay on the chain's Morpho Blue primitive: Stock Tokens and Pons graduates become borrowable without a sale. Census still says announced; a verified PonsV2LauncherToken and a Uniswap v4 BOW/SPY book on 4663 meet the mainnet bar. It is not LONG (stock-paired factory at long.xyz) and not Longshot (Hyperliquid fee-router at uselongshot.xyz).

## What could go wrong

Isolated Morpho markets inherit the oracle and LLTV chosen at creation; the official API now lists GLD/USDG at 38.5% LLTV after a 62.5% post. PONS/USDG is fully utilized on the API. Official posts have tagged an Ethereum cashtag as PONS that has no code on 4663. Core vault source is unverified; v1 MetaMorpho and staking are owned by one EOA.

## Product and mechanics

Borrowers post listed collateral into isolated Morpho Blue markets and draw USDG (or, on a few rows, WETH). The official `/api/markets` list this pass had 53 rows. Stock rows such as SPY/USDG use Chainlink and 62.5% LLTV; PONS, GLD, RDDT, AI and NOTHING use TWAP oracles and 38.5% LLTV. PONS/USDG marketId `0xaba3ac50…` showed utilization 1 with 51769.68 USDG supplied and borrowed. [claim R-10]

Suppliers deposit USDG into Longbow-curated vaults. `/api/v2/vaults` names Longbow Core USDG (`lbcoreUSDG`) at `0x026df18fbd2A7639089D0a16293383ec687A5Ca1`, asset USDG `0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168`, with a 10% performance fee and allocations across named Morpho marketIds (ETH, SPY, NVDA and others). A smaller MetaMorpho V1_1 USDG vault sits at `0x8cb8AA35228c96C1C4E956E69AbAEBCc2aA7Dcfe`. [claim R-11 R-14]

BOW is a Pons v2 launch token. `creator_address_hash` is PonsV2LaunchDeployer `0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42`; the creation transaction is `launchAndBuy` on PonsV2LaunchAndBuy `0xe33E9E479dF8802cb0866d5d05258bEc4cF62948` at 2026-08-08T18:17:53Z. The deepest book this pass is Uniswap v4 BOW/SPY (poolId `0xdba909ac…`, quote SPY `0x117cc2133c37B721F49dE2A7a74833232B3B4C0C`). A Ramses v3 BOW/USDG pool exists at `0x95D1b62891531b9207aD9C79a021bDf6BE452920`. [verified R-5 R-8 R-17]

Site copy also names zero-fee flash loans, NFT lending with escrow, BOW staking for USDG, and an MCP endpoint. Those paths were not reproduced as contracts this pass beyond StakingRewards `0xEba502e1177f5fad9432c2deb273569D8381e01A`. [claim R-2 R-12 R-15]

## Control and security

`owner()` on Core USDG vault `0x026df18…` returns Safe `0x396ae0BD5623c3750e15fd222770F1e972153ED4`. `getThreshold` is 2; `getOwners` returns three addresses. The explorer names the shell a SafeL2 `master_copy` proxy; the shell itself is not source-verified. No timelock address appeared on the site, docs or explorer labels. [verified R-13 R-18 R-19]

`owner()` on MetaMorpho V1_1 `0x8cb8AA…` and StakingRewards `0xEba502…` returns EOA `0x1bf704707e9F3f407EbC9364fDAeD08C39893770`, which also created the staking contract. `/api/stats/rich` names feeRecipient `0xa4c8e4ed1d6a85b68032f4b921b20a664ea36413`, an address with no code. BOW `owner()` reverts. [verified R-14 R-15]

Site copy attributes Morpho Blue's audit set (Cantina, Spearbit, Trail of Bits, ABDK) and NFT-escrow reviews (ChainSecurity, Halborn) to the settlement and escrow layers. No Longbow overlay audit report was linked from the site, docs, X bio or GitHub this pass. Morpho Blue at `0x9D53d5E3bd5E8d4Cbfa6DB1ca238AEA02E651010` is Morpho's verified primitive, not a Longbow-owned contract. [claim R-2] [verified R-16] [unknown]

## Team and provenance

Public identity is the site and `@longbowlend`. The home page canonical is `https://www.longbow.cash/`; the JS footer links `https://x.com/longbowlend`. The X bio URL field is `longbow.cash` and `t.co/MGNl5p08g7` refreshes to `t.me/longbowlend`. Telegram preview title is Longbow Protocol. No legal name, repository or named operator appeared on those pages. github.com/LongbowFinance returned 404. [verified R-1 R-2 R-3] [claim R-4]

Census LONG (`app.long.xyz`, `@longdotxyz`) and Longshot (`uselongshot.xyz`, `@uselongshot`) share a name stem only. A second BOW ticker `0xf56D9aDAA11dc278638adcDCA8Cf697DDC008ba3` is a DopplerERC20V1 clone with two holders. [claim R-1 R-3] [verified R-21]

## Economics and activity

Official `/api/stats` on chainId 4663 this pass: TVL 588602.3 USD, totalBorrowed 261964.58 USD, 53 markets, 32 depositors, 0 recentLiquidations, 141056716.62 BOW staked. That is the project's own API, not a DefiLlama chain slice. api.llama.fi/protocol/longbow returned HTTP 400. [claim R-9 R-28]

DexScreener Uniswap v4 BOW/SPY (not an all-pairs total): liquidity 182286.08 USD, 24h volume 832979.57 USD, price 0.004873 USD, fdv 4873206 USD. Blockscout token: 5753 holders, circulating_market_cap 4843328.84 USD, total supply 1e9 BOW. [verified R-6 R-8]

`@longbowlend` posted TVL figures of 300000 USD on 2026-09-01 and 500000 USD on 2026-09-02. Those posts are not the same observation as `/api/stats` 588602.3 USD later the same day. [claim R-27 R-32]

## Material risks

- Official `/api/markets` lists GLD/USDG at 38.5% LLTV after the 24 Aug post said 62.5%; Morpho market parameters are immutable, so this may be a different marketId. [disputed R-10 R-24]

- PONS/USDG utilization is 1 on the API (51769.68 USDG borrowed against the same supply). [claim R-10]

- Official posts tagged `ethereum:0x07f5b682…` as PONS; that address has no code on 4663. Flag: wrong-chain, ca-collision. [verified R-22 R-25]

- Core USDG vault source is unverified; v1 MetaMorpho and staking are owned by one EOA with no timelock found. [verified R-13 R-14 R-15]

- No Longbow overlay audit report was located; Morpho Blue audits named in site copy cover the settlement primitive. [claim R-2] [unknown]

- Same-ticker BOW `0xf56D9aDA…` is a different contract. Flag: ticker-only. [verified R-21]

## Verification passes

- Receipts: www.longbow.cash HTML and JS, docs.longbow.cash, X profile and named status URLs, t.me/longbowlend, Blockscout address/token/tx APIs, DexScreener token-pairs, Longbow `/api/stats` `/api/markets` `/api/v2/vaults` `/api/stats/rich`, DefiLlama protocol/longbow (400), github.com/LongbowFinance (404), and RPC eth_getCode/eth_call were opened on 2026-09-02; excerpts are copied from those responses. [verified R-1 R-5 R-8 R-9]

- Numbers: 588602.3 USD is `/api/stats` tvl on chainId 4663, not a DefiLlama row; 832979.57 USD is DexScreener Uniswap v4 BOW/SPY volume.h24, not an all-pairs or all-chains total; 5753 is Blockscout holders_count; 500000 USD is an official post, not the API print. [claim R-6 R-8 R-9 R-27]

- Adversarial: the strongest contrary reading is that Longbow is LONG, Longshot, bow.fun or the Doppler BOW clone, or that census `announced` still holds because Morpho marketIds were not eth_called. Token name Longbow, PonsV2LauncherToken source, Uniswap v4 BOW/SPY book, and site↔handle cross-link argue against a merge; the pool and token on 4663 meet the mainnet bar even while market-id params stay API claims. [inference R-3 R-5 R-8 R-21]

## Operations log

- Read content/census.yaml longbow/long/longshot/bankr rows, content/projects/longbow.yaml, content/pulled/longbow.yaml, content/feed/longbow.yaml, content/sources/longbow.yaml, content/changelog/longbow.yaml, docs/templates/research-packet-v2.md, schema/packet.schema.json.
- Opened https://www.longbow.cash/, /docs, /builders, /stake, /mcp; https://docs.longbow.cash/; JS `/assets/index-DBXRuHVN.js`; https://x.com/longbowlend and named status URLs; https://t.me/longbowlend; github.com/longbow, github.com/longbowlend, github.com/LongbowFinance (404).
- GET www.longbow.cash/api/stats, /api/stats/rich, /api/markets, /api/vaults, /api/v2/vaults, /api/vault/allocation, /api/activity.
- GET Blockscout /api/v2/addresses for BOW, Bankr BOW, 0x07f5b682…, Core vault, MetaMorpho V1_1, StakingRewards, Morpho, Safe, Ramses pool, PonsV2LaunchDeployer, PonsV2LaunchFactory; /api/v2/tokens for both BOW tickers; /api/v2/transactions for the launchAndBuy hash.
- GET api.dexscreener.com/token-pairs/v1/robinhood/0x451b42…; GET api.llama.fi/protocol/longbow (400) and protocols search.
- RPC https://rpc.mainnet.chain.robinhood.com: eth_chainId 0x1237 (4663), eth_blockNumber 52956821, eth_getCode, eth_call name/symbol/decimals/totalSupply/owner/getThreshold/getOwners. Blockscout API 403 without a browser User-Agent.
- Time on this slug: one collector pass.
