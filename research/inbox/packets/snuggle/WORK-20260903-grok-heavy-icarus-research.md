---
# Packet v2 (docs/research-system.md §5). Seed with full-shaped frontmatter.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: snuggle
name: Snuggle
packet_tier: seed
as_of: 2026-09-03T00:20:00Z
prior_packet: null
supersedes: null
owned_slugs: [snuggle]
allowed_paths:
  - research/inbox/packets/snuggle/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Snuggle
  aliases: [SnuggleFi]
  symbols: []
  entity_kind: protocol
  chain_scope: multichain
  official_domain: https://snuggle.fi
  official_handle: "@SnuggleFi"
  repository: "NULL — no GitHub org or repository URL on snuggle.fi, the @SnuggleFi bio, Llama, or the verified SnuggleVaultUpgradeable source this pass"
  possible_matches:
    - slug: maxfi
      signals: [shared-address, other]
      contrary_signals:
        - "Census MaxFi is maxfi.tech / @MAXFILABS; census Snuggle is snuggle.fi / @SnuggleFi"
        - "DefiLlama adapter ROBINHOOD_VAULTS labels 0x1195…6DCE as MaxFi Robinhood and methodology says MaxFi is a Snuggle whitelabel"
        - "snuggle.fi still lists Base and Arbitrum; Robinhood stock and meme pools are deposited through maxfi.tech"
        - "Keep both slugs; do not merge"
    - slug: delta
      signals: [other]
      contrary_signals:
        - "Census Delta is deltaliquidity.app / @deltaliquidity with Pons-launched token 0xe8ff…a791"
        - "Snuggle is snuggle.fi / @SnuggleFi with Robinhood vault 0x1195…6DCE"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: yield/lp-manager
  secondary_leaves: []
  mechanism_tags: [vault, amm, rwa]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: full
  evidence_state: partly-verified
  rationale: "No-swap concentrated-liquidity vault: a deposit opens a per-user Uniswap v3 NFT. Vault 0x1195…6DCE is a verified TransparentUpgradeableProxy to SnuggleVaultUpgradeable on chain 4663; owner() and ProxyAdmin owner() return EOA 0x6aC51A…. DefiLlama currentChainTvls Robinhood Chain is 4431613; all-chains last tvl is 9110436. The Robinhood vault in the Snuggle adapter is labeled MaxFi. [R-1] [R-4] [R-5] [R-6] [R-7] [R-11]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6, CLM-21], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-10, CLM-15, CLM-16], note: "" }

links:
  - { kind: site, url: "https://snuggle.fi", authenticity: confirmed }
  - { kind: app, url: "https://snuggle.fi/deposit", authenticity: confirmed }
  - { kind: docs, url: "https://www.snuggle.fi/security", authenticity: confirmed }
  - { kind: x, url: "https://x.com/SnuggleFi", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/SnuggleFi", authenticity: unconfirmed }
  - { kind: discord, url: "https://discord.gg/tfpsdwEe8e", authenticity: unconfirmed }

deployments:
  - label: MaxFi Robinhood vault (SnuggleVault proxy)
    role: vault
    address:
      value: "0x1195C074F898b7644bA732407619c9804dFE6DCE"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-5, R-6, R-11, R-12]
  - label: SnuggleVaultUpgradeable
    role: implementation
    address:
      value: "0x999A74ddFde1575C4db454A0300d5F0351A891dE"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-7, R-11]
  - label: ViewHelper
    role: other
    address:
      value: "0x71b55E366a0F43260b1138A32c312ba7bb7F30F7"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-8, R-11]
  - label: UniswapV3Adapter
    role: other
    address:
      value: "0x76bDb43d2EC3b190087076649224F47A58C44eF2"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-9, R-11]
  - label: ProxyAdmin
    role: admin
    address:
      value: "0x413Ca90D38D964546c2fE03cB103df57372630F6"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-10, R-11]

metrics:
  - { kind: tvl, value: 4431613, currency: USD, as_of: 2026-09-02T23:57:59Z, window: point, method: "api.llama.fi/protocol/snuggle currentChainTvls['Robinhood Chain']", class: claim, receipt_ids: [R-4] }
  - { kind: fees_24h, value: 121834, currency: USD, as_of: 2026-09-02T00:00:00Z, window: 24h, method: "api.llama.fi/summary/fees/snuggle?dataType=dailyFees totalDataChartBreakdown Robinhood Chain", class: claim, receipt_ids: [R-13] }
  - { kind: revenue_24h, value: 16710, currency: USD, as_of: 2026-09-02T00:00:00Z, window: 24h, method: "api.llama.fi/summary/fees/snuggle?dataType=dailyRevenue totalDataChartBreakdown Robinhood Chain", class: claim, receipt_ids: [R-14] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T00:10:00Z, receipt_ids: [R-11], result: "eth_blockNumber 0x3299570 (53056880). eth_getCode non-empty: vault 1831 bytes, ViewHelper 3507, UniswapV3Adapter 5352, impl 24515, ProxyAdmin 1487, Uniswap V3 NPM 24384; owner 0x6aC51A…25FF code 0x. vault owner() 0x6ac51a70…25ff. ProxyAdmin owner() same. EIP-1967 impl 0x999a74dd…91de, admin 0x413ca90d…30f6. ViewHelper getActivePositionCount() 0x2345 (9029). NFT name Uniswap V3 Positions NFT-V1 / UNI-V3-POS, factory 0x1f7d7550…2efa." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T00:12:00Z, receipt_ids: [R-6, R-7, R-8, R-9, R-10, R-12], result: "Blockscout API v2: vault TransparentUpgradeableProxy is_verified true partially verified lib/openzeppelin-contracts/.../TransparentUpgradeableProxy.sol compiler v0.8.33 proxy_type eip1967 implementation SnuggleVaultUpgradeable 0x999A74dd…91dE creator 0x6aC51A…25FF tx 0x3ae0854d… 2026-07-22T23:11:26Z. Impl SnuggleVaultUpgradeable src/SnuggleVaultUpgradeable.sol. ViewHelper src/ViewHelper.sol. UniswapV3Adapter verified. ProxyAdmin verified. Owner is_contract false." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T00:05:00Z, receipt_ids: [R-4, R-13, R-14], result: "GET api.llama.fi/protocol/snuggle: currentChainTvls Arbitrum 19170.17748, Base 4659653.03444, Robinhood Chain 4431613.38741, sum 9110436.59933; tvl last {date 1788393479, totalLiquidityUSD 9110436}. dailyFees breakdown 1788307200 Robinhood Chain 121834; dailyRevenue breakdown Robinhood Chain 16710." }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-03T00:08:00Z, receipt_ids: [R-1, R-2, R-3], result: "@SnuggleFi bio website is snuggle.fi. www.snuggle.fi/security lists 𝕏 Twitter https://twitter.com/SnuggleFi, email snugglefi@gmail.com, Discord and Telegram." }
  - { id: REP-5, method: repository-crosslink, checked_at: 2026-09-03T00:06:00Z, receipt_ids: [R-5], result: "DefiLlama-Adapters projects/snuggle/index.js ROBINHOOD_VAULTS vault 0x1195C074…6DCE viewHelper 0x71b55E36…F30F7 comment MaxFi Robinhood; ROBINHOOD_ADAPTER_DEX 0x76bdb43d…4ef2 uniswap; UNI_NFT_ROBINHOOD 0x73991a25…E0D3; methodology Snuggle and MaxFi (Snuggle whitelabel) vaults on Base, Arbitrum, and Robinhood." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Deposit opens a per-user Uniswap v3 (or other CL) NFT. Rebalance mints a new range from existing balances with no swap. Site: 15% of earnings only; withdraw open. Robinhood stock and meme pools are deposited through maxfi.tech.", class: claim, observed_at: 2026-09-03T00:08:00Z, receipt_ids: [R-1, R-2, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://snuggle.fi", class: verified, observed_at: 2026-09-03T00:08:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@SnuggleFi", class: verified, observed_at: 2026-09-03T00:08:00Z, receipt_ids: [R-2, R-3], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x1195C074F898b7644bA732407619c9804dFE6DCE", class: verified, observed_at: 2026-09-03T00:12:00Z, receipt_ids: [R-5, R-6, R-11, R-12], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x999A74ddFde1575C4db454A0300d5F0351A891dE", class: verified, observed_at: 2026-09-03T00:12:00Z, receipt_ids: [R-7, R-11], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: deployment.address, value: "0x71b55E366a0F43260b1138A32c312ba7bb7F30F7", class: verified, observed_at: 2026-09-03T00:12:00Z, receipt_ids: [R-5, R-8, R-11], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-7, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T00:12:00Z, receipt_ids: [R-4, R-6, R-11, R-12], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-8, field: taxonomy.primary-leaf, value: yield/lp-manager, class: claim, observed_at: 2026-09-03T00:05:00Z, receipt_ids: [R-1, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: taxonomy.chain-scope, value: multichain, class: verified, observed_at: 2026-09-03T00:05:00Z, receipt_ids: [R-1, R-4], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-10, field: relationship, value: "Llama adapter counts MaxFi vaults as Snuggle whitelabel. ROBINHOOD_VAULTS is labeled MaxFi Robinhood 0x1195…6DCE. snuggle.fi lists Base and Arbitrum; maxfi.tech is the Robinhood deposit UI. Keep slug maxfi.", class: verified, observed_at: 2026-09-03T00:12:00Z, receipt_ids: [R-1, R-5, R-6, R-18, R-19], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "Robinhood Chain TVL 4431613 USD at 2026-09-02T23:57:59Z (currentChainTvls['Robinhood Chain'], not the all-chains total)", class: verified, observed_at: 2026-09-03T00:05:00Z, receipt_ids: [R-4], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: "All-chains TVL 9110436 USD at date 1788393479 (2026-09-02T23:57:59Z); Base 4659653, Arbitrum 19170. Not the Robinhood chain slice.", class: verified, observed_at: 2026-09-03T00:05:00Z, receipt_ids: [R-4], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "Robinhood Chain dailyFees 121834 USD for bar 1788307200 (2026-09-02). All-chains total24h 129993.", class: verified, observed_at: 2026-09-03T00:06:00Z, receipt_ids: [R-13], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: "Robinhood Chain dailyRevenue 16710 USD for bar 1788307200 (2026-09-02). All-chains total24h 17842.", class: verified, observed_at: 2026-09-03T00:06:00Z, receipt_ids: [R-14], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-15, field: control.owner, value: "vault owner() and ProxyAdmin owner() = 0x6aC51A706539D4F5A326dA2892520180858e25FF (no code). Same address created the proxy, impl, ViewHelper, adapter and ProxyAdmin.", class: verified, observed_at: 2026-09-03T00:12:00Z, receipt_ids: [R-6, R-10, R-11], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-16, field: security.audit, value: "snuggle.fi/security: V30 16 Feb 2026, 22 Solidity files, 0 critical/high/medium, 8 low accepted; Base contract table only. Transparency note: reviews used AI security analysis tools, not a traditional third-party firm. Llama audits 2, audit_links Abyss.pdf. No Robinhood address on the security table this pass.", class: claim, observed_at: 2026-09-03T00:08:00Z, receipt_ids: [R-2, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: "account.@SnuggleFi.role", value: project, class: claim, observed_at: 2026-09-03T00:08:00Z, receipt_ids: [R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: "account.@SnuggleFi.slug", value: snuggle, class: claim, observed_at: 2026-09-03T00:08:00Z, receipt_ids: [R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: product.mechanism, value: "15% performance fee on LP trading fees earned; deposits, withdrawals, harvest and compounding listed as free. Referral 3% paid from Snuggle's share.", class: claim, observed_at: 2026-09-03T00:08:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: activity.status, value: "ViewHelper getActivePositionCount() returned 9029 at block 53056880", class: verified, observed_at: 2026-09-03T00:10:00Z, receipt_ids: [R-8, R-11], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x76bDb43d2EC3b190087076649224F47A58C44eF2", class: verified, observed_at: 2026-09-03T00:12:00Z, receipt_ids: [R-5, R-9, R-11], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x413Ca90D38D964546c2fE03cB103df57372630F6", class: verified, observed_at: 2026-09-03T00:12:00Z, receipt_ids: [R-10, R-11], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: "account.@SnuggleFi.note", value: "Handle lists snuggle.fi. Robinhood deposits go through maxfi.tech / @MAXFILABS (census slug maxfi). Llama counts that vault under Snuggle.", class: claim, observed_at: 2026-09-03T00:08:00Z, receipt_ids: [R-3, R-5, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: control.proxy, value: "Vault is EIP-1967 TransparentUpgradeableProxy; implementation SnuggleVaultUpgradeable 0x999A74dd…91dE; ProxyAdmin 0x413Ca90D…30F6.", class: verified, observed_at: 2026-09-03T00:12:00Z, receipt_ids: [R-6, R-7, R-10, R-11], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-25, field: identity.alias, value: "SnuggleFi", class: claim, observed_at: 2026-09-03T00:08:00Z, receipt_ids: [R-3], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "DefiLlama Snuggle Robinhood TVL slice is $4.43M"
    summary: "api.llama.fi/protocol/snuggle currentChainTvls Robinhood Chain 4431613; all-chains last tvl 9110436."
    occurred_at: 2026-09-02T23:57:59Z
    observed_at: 2026-09-03T00:05:00Z
    affected_fields: [economics.metric, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-4]
  - id: EVT-2
    type: ct
    title: "@MAXFILABS posts MaxFi at $9.14M TVL"
    summary: "@MAXFILABS posted $9.14M TVL and $106,071 average daily payouts over seven days."
    occurred_at: 2026-09-02T19:30:38Z
    observed_at: 2026-09-03T00:15:00Z
    affected_fields: [economics.metric, relationship]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-15]
  - id: EVT-3
    type: company
    title: "@SnuggleFi posts $501,300 paid to LPs"
    summary: "@SnuggleFi posted Snuggle and MaxFi had paid $501,300 to LPs with $5.07M TVL."
    occurred_at: 2026-08-03T18:19:07Z
    observed_at: 2026-09-03T00:15:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-16]
  - id: EVT-4
    type: company
    title: "@SnuggleFi posts Snuggle+MaxFi above $5.03M TVL"
    summary: "@SnuggleFi posted $5.03M locked, $477.5K paid, and eighth-largest protocol on Robinhood Chain."
    occurred_at: 2026-08-02T21:08:48Z
    observed_at: 2026-09-03T00:15:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-17]
  - id: EVT-5
    type: company
    title: "@SnuggleFi posts MaxFi compact view powered by Snuggle"
    summary: "@SnuggleFi posted MaxFi compact view on Robinhood Chain and Uniswap, powered by @SnuggleFi."
    occurred_at: 2026-07-25T23:05:28Z
    observed_at: 2026-09-03T00:15:00Z
    affected_fields: [relationship, product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-18]
  - id: EVT-6
    type: onchain
    title: "SnuggleVault proxy deployed on Robinhood Chain"
    summary: "TransparentUpgradeableProxy 0x1195…6DCE created at 2026-07-22T23:11:26Z; implementation SnuggleVaultUpgradeable."
    occurred_at: 2026-07-22T23:11:26Z
    observed_at: 2026-09-03T00:12:00Z
    affected_fields: [deployment.address, lifecycle, control.proxy]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-6, R-12]

receipts:
  - { id: R-1, publisher: Snuggle, title: "Snuggle homepage", url: "https://www.snuggle.fi/", published_at: null, accessed_at: 2026-09-03T00:08:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-8, CLM-9, CLM-10, CLM-19], excerpt: "Automated Crypto Yield on Base & Arbitrum. Deposit your Bitcoin, ETH, or stablecoins. Live on Base & Arbitrum • 5 DEXes • 58+ Pools. Uniswap V3 • Aerodrome • PancakeSwap • SushiSwap V3 • Camelot V3. 15% performance fee on earnings only. Verified on DefiLlama. FAQ: Which blockchains does Snuggle support? Snuggle is live on Base and Arbitrum." }
  - { id: R-2, publisher: Snuggle, title: "Security", url: "https://www.snuggle.fi/security", published_at: null, accessed_at: 2026-09-03T00:08:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-3, CLM-16], excerpt: "V30 Comprehensive Security Audit Complete. Latest audit: February 16, 2026 — 22 Solidity files, ~6,500 lines reviewed. 0 Critical, 0 High, 0 Medium, 8 Low (Accepted). Transparency Note: These audits were conducted using AI security analysis tools, not a traditional third-party audit firm. Deployed Contracts (Base Mainnet) SnuggleVault (Proxy) 0xd3923bec…d16b7470. 𝕏 Twitter https://twitter.com/SnuggleFi." }
  - { id: R-3, publisher: "@SnuggleFi", title: "SnuggleFi profile", url: "https://x.com/SnuggleFi", published_at: null, accessed_at: 2026-09-03T00:08:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-17, CLM-18, CLM-23, CLM-25], excerpt: "Display name SnuggleFi, handle @SnuggleFi. Bio: Zero-swap LP rebalancing on Base and Arbitrum. No swap fees. No slippage. Just yield and passive income. Uniswap | Aerodrome | PancakeSwap. Website https://snuggle.fi. Joined 2026-01-18. Followers 463." }
  - { id: R-4, publisher: DefiLlama, title: "Snuggle protocol row", url: "https://api.llama.fi/protocol/snuggle", published_at: null, accessed_at: 2026-09-03T00:05:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-7, CLM-8, CLM-9, CLM-11, CLM-12, CLM-16, EVT-1], excerpt: "name Snuggle category Liquidity Manager chains [Arbitrum, Base, Robinhood Chain] twitter SnuggleFi url https://snuggle.fi/ methodology TVL is the value of all concentrated liquidity positions managed by Snuggle and MaxFi (Snuggle whitelabel) vaults on Base, Arbitrum, and Robinhood. currentChainTvls Robinhood Chain 4431613.38741 Base 4659653.03444 Arbitrum 19170.17748. tvl last date 1788393479 totalLiquidityUSD 9110436. audits 2 audit_links Abyss.pdf." }
  - { id: R-5, publisher: DefiLlama, title: "snuggle adapter ROBINHOOD_VAULTS", url: "https://github.com/DefiLlama/DefiLlama-Adapters/blob/main/projects/snuggle/index.js", published_at: null, accessed_at: 2026-09-03T00:06:00Z, kind: repository, authority: aggregator, authenticity: unconfirmed, supports: [CLM-4, CLM-6, CLM-10, CLM-21, CLM-23], excerpt: "ROBINHOOD_VAULTS = [{ vault: '0x1195C074F898b7644bA732407619c9804dFE6DCE', viewHelper: '0x71b55E366a0F43260b1138A32c312ba7bb7F30F7' }, // MaxFi Robinhood]. UNI_NFT_ROBINHOOD = '0x73991a25C818Bf1f1128dEAaB1492D45638DE0D3'. ROBINHOOD_ADAPTER_DEX = { '0x76bdb43d2ec3b190087076649224f47a58c44ef2': 'uniswap' }. methodology: Snuggle and MaxFi (Snuggle whitelabel) vaults on Base, Arbitrum, and Robinhood." }
  - { id: R-6, publisher: Blockscout, title: "Address 0x1195…6DCE TransparentUpgradeableProxy", url: "https://robinhoodchain.blockscout.com/address/0x1195C074F898b7644bA732407619c9804dFE6DCE", published_at: null, accessed_at: 2026-09-03T00:12:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-7, CLM-10, CLM-15, CLM-24, EVT-6], excerpt: "hash 0x1195C074F898b7644bA732407619c9804dFE6DCE name TransparentUpgradeableProxy is_contract true is_verified true proxy_type eip1967 implementation SnuggleVaultUpgradeable 0x999A74ddFde1575C4db454A0300d5F0351A891dE creator 0x6aC51A706539D4F5A326dA2892520180858e25FF tx 0x3ae0854d…. Smart-contract compiler v0.8.33 is_partially_verified true file_path TransparentUpgradeableProxy.sol." }
  - { id: R-7, publisher: Blockscout, title: "Address 0x999A…91dE SnuggleVaultUpgradeable", url: "https://robinhoodchain.blockscout.com/address/0x999A74ddFde1575C4db454A0300d5F0351A891dE", published_at: null, accessed_at: 2026-09-03T00:12:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-24], excerpt: "hash 0x999A74ddFde1575C4db454A0300d5F0351A891dE name SnuggleVaultUpgradeable is_contract true is_verified true creator 0x6aC51A706539D4F5A326dA2892520180858e25FF. Smart-contract compiler v0.8.33+commit.64118f21 is_partially_verified true file_path src/SnuggleVaultUpgradeable.sol." }
  - { id: R-8, publisher: Blockscout, title: "Address 0x71b5…F30F7 ViewHelper", url: "https://robinhoodchain.blockscout.com/address/0x71b55E366a0F43260b1138A32c312ba7bb7F30F7", published_at: null, accessed_at: 2026-09-03T00:12:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, CLM-20], excerpt: "hash 0x71b55E366a0F43260b1138A32c312ba7bb7F30F7 name ViewHelper is_contract true is_verified true creator 0x6aC51A706539D4F5A326dA2892520180858e25FF creation_transaction_hash 0x1ac4f7f5210e4ef4841ff7fa0a98087ed6065ae75221f323928795fda69d0593. Smart-contract compiler v0.8.33 file_path src/ViewHelper.sol." }
  - { id: R-9, publisher: Blockscout, title: "Address 0x76bD…4eF2 UniswapV3Adapter", url: "https://robinhoodchain.blockscout.com/address/0x76bDb43d2EC3b190087076649224F47A58C44eF2", published_at: null, accessed_at: 2026-09-03T00:12:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-21], excerpt: "hash 0x76bDb43d2EC3b190087076649224F47A58C44eF2 name UniswapV3Adapter is_contract true is_verified true creator 0x6aC51A706539D4F5A326dA2892520180858e25FF creation_transaction_hash 0x72b5215436ea9932325cc2a07ff135b46ae031de76e069a94e4f6a39a4b8ac05." }
  - { id: R-10, publisher: Blockscout, title: "Address 0x413C…30F6 ProxyAdmin", url: "https://robinhoodchain.blockscout.com/address/0x413Ca90D38D964546c2fE03cB103df57372630F6", published_at: null, accessed_at: 2026-09-03T00:12:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-15, CLM-22, CLM-24], excerpt: "hash 0x413Ca90D38D964546c2fE03cB103df57372630F6 name ProxyAdmin is_contract true is_verified true creator 0x6aC51A706539D4F5A326dA2892520180858e25FF. Smart-contract compiler v0.8.33 file_path lib/openzeppelin-contracts/contracts/proxy/transparent/ProxyAdmin.sol." }
  - { id: R-11, publisher: Robinhood Chain RPC, title: "eth_getCode, owner, EIP-1967, getActivePositionCount", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T00:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-7, CLM-15, CLM-20, CLM-21, CLM-22, CLM-24], excerpt: "eth_blockNumber 0x3299570 (53056880). eth_getCode non-empty on vault, ViewHelper, adapter, impl, ProxyAdmin. owner 0x6aC51A…25FF code 0x. vault owner() 0x6ac51a70…25ff. ProxyAdmin owner() same. EIP-1967 impl 0x999a74dd…91de admin 0x413ca90d…30f6. ViewHelper getActivePositionCount() 9029. NFT name Uniswap V3 Positions NFT-V1." }
  - { id: R-12, publisher: Blockscout, title: "Vault creation tx 0x3ae0854d…", url: "https://robinhoodchain.blockscout.com/tx/0x3ae0854d1ac38f02b2a2bed84fcbe722c0b449726c57467d84bdd72473fef0c0", published_at: 2026-07-22T23:11:26Z, accessed_at: 2026-09-03T00:12:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-7, EVT-6], excerpt: "timestamp 2026-07-22T23:11:26.000000Z status ok result success from 0x6aC51A706539D4F5A326dA2892520180858e25FF block_number 16810524 created_contract 0x1195C074F898b7644bA732407619c9804dFE6DCE name TransparentUpgradeableProxy implementation SnuggleVaultUpgradeable." }
  - { id: R-13, publisher: DefiLlama, title: "Snuggle dailyFees", url: "https://api.llama.fi/summary/fees/snuggle?dataType=dailyFees", published_at: null, accessed_at: 2026-09-03T00:06:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-13], excerpt: "total24h 129993 total7d 814662 total30d 1715064. totalDataChartBreakdown last [1788307200, {Base: {Snuggle: 8118}, Robinhood Chain: {Snuggle: 121834}, Arbitrum: {Snuggle: 40.66}}]. Fees methodology: Trading fees and staking rewards earned by the concentrated liquidity positions the vaults manage, scaled up from the performance fee the vault moved to its treasury." }
  - { id: R-14, publisher: DefiLlama, title: "Snuggle dailyRevenue", url: "https://api.llama.fi/summary/fees/snuggle?dataType=dailyRevenue", published_at: null, accessed_at: 2026-09-03T00:06:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-14], excerpt: "total24h 17842 total7d 113555 total30d 241733. totalDataChartBreakdown last [1788307200, {Base: {Snuggle: 1126}, Robinhood Chain: {Snuggle: 16710}, Arbitrum: {Snuggle: 6.04}}]. Revenue methodology: The share of the 15% performance fee that lands in the vault treasury." }
  - { id: R-15, publisher: "@MAXFILABS", title: "MAXFI JUST HIT $9 MILLION TVL", url: "https://x.com/MAXFILABS/status/2095232956168327582", published_at: 2026-09-02T19:30:38Z, accessed_at: 2026-09-03T00:15:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-2], excerpt: "MAXFI JUST HIT $9 MILLION TVL! $106,071 A DAY average payouts over the last 7 days. $2.34M+ already distributed to LP farmers. $9.14M TVL. No-Swap Rebalancing. Self-Custody, no shared vaults. Crypto + Tokenized Stocks." }
  - { id: R-16, publisher: "@SnuggleFi", title: "HALF A MILLION DOLLARS PAID OUT", url: "https://x.com/SnuggleFi/status/2084343321355497775", published_at: 2026-08-03T18:19:07Z, accessed_at: 2026-09-03T00:15:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-3], excerpt: "Snuggle and MaxFi have now distributed over $500,000 to liquidity providers! $501,300 paid out to date. $5.07M in total value locked. No swap on rebalance, so no swap fee, no slippage, no price impact. @SnuggleFi @MAXFILABS @YaBonksOfficial." }
  - { id: R-17, publisher: "@SnuggleFi", title: "Snuggle + MaxFi just passed $5,000,000 in TVL", url: "https://x.com/SnuggleFi/status/2084023634742378962", published_at: 2026-08-02T21:08:48Z, accessed_at: 2026-09-03T00:15:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-4], excerpt: "Snuggle + MaxFi just passed $5,000,000 in TVL. $5.03M locked. $477.5K paid out to LPs. $10,000+ a day in rewards. 10th largest liquidity manager in all of DeFi. 8th largest protocol on all of Robinhood Chain." }
  - { id: R-18, publisher: "@SnuggleFi", title: "MaxFi compact view powered by SnuggleFi", url: "https://x.com/SnuggleFi/status/2081153890934780164", published_at: 2026-07-25T23:05:28Z, accessed_at: 2026-09-03T00:15:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-10, CLM-23, EVT-5], excerpt: "46 positions. 34 tokenized stocks, 9 memes, 3 alts. All on one screen. MaxFi's new Compact view: one row per position: value, APR, earnings, range status. @MAXFILABS on @RobinhoodCrypto & @Uniswap powered by @SnuggleFi." }
  - { id: R-19, publisher: MaxFi, title: "MaxFi homepage", url: "https://www.maxfi.tech/", published_at: null, accessed_at: 2026-09-03T00:09:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-10], excerpt: "MaxFi · Tokenized stocks & crypto on Robinhood Chain, Base & Arbitrum. FAQ: MaxFi is live on Robinhood Chain, Base and Arbitrum. Robinhood Chain is where the tokenized stocks and ETF pools run. Security contact email snugglefi@gmail.com. Twitter https://x.com/MAXFILABS." }

gaps:
  - { priority: P0, question: "Can owner 0x6aC51A…25FF upgrade SnuggleVaultUpgradeable or move treasury without a timelock on the Robinhood ProxyAdmin?", checked: "owner() on vault and ProxyAdmin via RPC at block 53056880; security page lists 24h timelocks for treasury/staking manager on the Base table, 2026-09-03", next: "read Ownable2Step and ProxyAdmin verified source modifiers; eth_call pending admin/timelock if present" }
  - { priority: P1, question: "Is there a Snuggle-branded vault on 4663 besides MaxFi Robinhood 0x1195…6DCE, or is every Robinhood position MaxFi-fronted?", checked: "Llama ROBINHOOD_VAULTS is one row labeled MaxFi Robinhood; snuggle.fi pool list is Base and Arbitrum only, 2026-09-03", next: "search Blockscout for other SnuggleVaultUpgradeable proxies created by 0x6aC51A…" }
  - { priority: P1, question: "Does Abyss.pdf / Valves V30 cover the Robinhood bytecode (impl 0x999A…91dE), or only the Base table on /security?", checked: "snuggle.fi/security Base table and Llama audit_links Abyss.pdf listed but PDF not opened line by line, 2026-09-03", next: "open Abyss.pdf and match compiler settings and file_path src/SnuggleVaultUpgradeable.sol" }
  - { priority: P2, question: "Do t.me/SnuggleFi and discord.gg/tfpsdwEe8e cross-link snuggle.fi?", checked: "listed on /security; Telegram and Discord profiles not opened, 2026-09-03", next: "open both profiles and compare the linked domain" }
  - { priority: P2, question: "Where is the source repository for src/SnuggleVaultUpgradeable.sol used in the verified explorer upload?", checked: "snuggle.fi, @SnuggleFi bio, Llama github field empty, 2026-09-03", next: "search GitHub for SnuggleVaultUpgradeable and the Base proxy 0xd3923bec…" }
---

# Snuggle — research packet

## What it is

No-swap concentrated-liquidity manager: a deposit opens a per-user Uniswap v3 NFT that the vault rebalances by minting a new range from existing balances, with no swap. Users deposit at snuggle.fi on Base and Arbitrum, or through maxfi.tech for Robinhood Chain stock and meme pools. The engine is @SnuggleFi; DefiLlama's Robinhood vault is labeled MaxFi.

Themes: vault, rwa, memecoin, nft

## Why it matters

DefiLlama's Snuggle row is the liquidity-manager book that includes MaxFi as a whitelabel. The Robinhood chain slice is $4.43M; the all-chains last tvl is $9.11M. That slice sits in Uniswap v3 NFTs, including tokenized-stock pairs, behind one upgradeable vault.

## What could go wrong

Vault `owner()` and ProxyAdmin `owner()` return the same externally owned account, so upgrades sit with one key. Llama's Robinhood TVL is the MaxFi-labeled vault, so a Snuggle-only chain-slice does not exist in that adapter. The security page states the V30 reviews used AI analysis tools, not a traditional third-party firm.

## Product and mechanics

A deposit opens a per-user concentrated-liquidity NFT. The site says rebalance mints a new range from existing balances with no swap, and withdrawal is open at any time. Performance fee is 15% of earnings. [claim R-1]

Robinhood stock and meme pools are deposited through maxfi.tech. @SnuggleFi posted the MaxFi compact view as powered by @SnuggleFi. snuggle.fi still lists Base and Arbitrum. [claim R-1 R-18 R-19]

## Control and security

Vault 0x1195…6DCE is an EIP-1967 TransparentUpgradeableProxy. Implementation is SnuggleVaultUpgradeable 0x999A…91dE. ProxyAdmin is 0x413C…30F6. `owner()` on the vault and on ProxyAdmin returns 0x6aC51A…25FF, which has no code and created those contracts. [verified R-6 R-10 R-11]

snuggle.fi/security lists V30 (16 Feb 2026) with 0 critical/high/medium and a Base contract table. The same page states the reviews used AI security analysis tools. Llama lists Abyss.pdf. The PDF was not opened line by line. [claim R-2 R-4]

## Team and provenance

@SnuggleFi lists snuggle.fi. The security page links Twitter to @SnuggleFi. No repository URL was located on the site, the bio, or Llama. Telegram and Discord URLs on the security page were not opened. [verified R-1 R-2 R-3]

MaxFi (maxfi.tech / @MAXFILABS) is a separate census slug. Llama labels the Robinhood vault MaxFi and calls MaxFi a Snuggle whitelabel. Keep both rows. [verified R-5 R-6]

## Economics and activity

Robinhood Chain TVL is 4431613 USD at 2026-09-02T23:57:59Z from `currentChainTvls['Robinhood Chain']`. All-chains last tvl is 9110436 USD. Base is 4659653; Arbitrum is 19170. The $9.1M figure is all-chains, not the chain slice. [claim R-4]

Robinhood dailyFees for 2026-09-02 are 121834 USD; dailyRevenue 16710 USD. ViewHelper `getActivePositionCount()` returned 9029 at block 53056880. [claim R-13 R-14] [verified R-11]

## Material risks

- One EOA owns the vault and the ProxyAdmin. [verified R-11]
- Robinhood TVL in the Snuggle Llama module is the MaxFi-labeled vault. [verified R-5]
- Security page states V30 used AI analysis tools; Abyss.pdf was not matched to the Robinhood bytecode this pass. [claim R-2]
- No-swap rebalance still leaves range and impermanent-loss path risk. [claim R-1]

## Verification passes

- Receipts: snuggle.fi, /security, @SnuggleFi profile and posts, maxfi.tech, Llama protocol/fees/revenue, the Snuggle adapter, Blockscout vault/impl/helper/adapter/ProxyAdmin/create tx, and RPC were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-4 R-6 R-11]
- Numbers: TVL 4431613 is the Robinhood chain slice, not the 9110436 all-chains last tvl. Fees 121834 and revenue 16710 are the Robinhood bars for 2026-09-02. [claim R-4 R-13 R-14]
- Adversarial: the strongest contrary reading is that Snuggle has no Robinhood product and the Llama row is only MaxFi. Adapter comment, verified name SnuggleVaultUpgradeable, and @SnuggleFi posts that MaxFi is powered by SnuggleFi argue they share the engine; they remain separate slugs. [inference R-5 R-6 R-18]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census snuggle and maxfi, content/projects/snuggle.yaml, content/pulled/snuggle.yaml (TVL 4298833 at 2026-09-02T19:20:11Z), content/feed/snuggle.yaml, content/sources/snuggle.yaml, content/research/snuggle.md, docs/templates/research-packet-v2.md and schema/packet.schema.json read before collection.
- Official: www.snuggle.fi, /security, /videos (RH “coming to Snuggle very soon” still in the catalogue), maxfi.tech and /security.
- Explorer: Blockscout api/v2 with a Chrome User-Agent. Vault, impl, ViewHelper, UniswapV3Adapter, ProxyAdmin, create txs. RPC eth_getCode/eth_call/eth_getStorageAt at block 53056880.
- Third party: api.llama.fi/protocol/snuggle, summary/fees dailyFees and dailyRevenue, DefiLlama-Adapters projects/snuggle/index.js.
- X: @SnuggleFi profile, 2 Aug $5.03M, 3 Aug $501,300, 25 Jul MaxFi compact view; @MAXFILABS 2 Sep $9.14M.
- Failed: RPC eth_call via Python urllib without a browser User-Agent returned HTTP 403; curl with Chrome UA succeeded. t.me/SnuggleFi and Discord not opened. Abyss.pdf not opened.
- Time: collection 2026-09-02T23:57Z–2026-09-03T00:20Z.
