---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: maxfi
name: MaxFi
packet_tier: seed
as_of: 2026-09-03T01:30:00Z
prior_packet: null
supersedes: null
owned_slugs: [maxfi]
allowed_paths:
  - research/inbox/packets/maxfi/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: MaxFi
  aliases: [MAXFI]
  symbols: []
  entity_kind: protocol
  chain_scope: multichain
  official_domain: https://maxfi.tech
  official_handle: "@MAXFILABS"
  repository: "NULL — no GitHub org or repository URL on maxfi.tech, /security, /docs, the @MAXFILABS bio, or Llama github this pass"
  possible_matches:
    - slug: snuggle
      signals: [shared-address, other]
      contrary_signals:
        - "Census MaxFi is maxfi.tech / @MAXFILABS; census Snuggle is snuggle.fi / @SnuggleFi"
        - "DefiLlama adapter ROBINHOOD_VAULTS labels 0x1195…6DCE as MaxFi Robinhood and methodology says MaxFi is a Snuggle whitelabel"
        - "Verified implementation name is SnuggleVaultUpgradeable; maxfi.tech/security lists a Base contract table, not this Robinhood proxy"
        - "Keep both slugs; do not merge"
    - slug: delta
      signals: [other]
      contrary_signals:
        - "Census Delta is deltaliquidity.app / @deltaliquidity with Pons-launched token 0xe8ff…a791"
        - "MaxFi is maxfi.tech / @MAXFILABS with Robinhood vault 0x1195…6DCE"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: yield/lp-manager
  secondary_leaves: []
  mechanism_tags: [vault, amm, rwa, stock-paired]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: full
  evidence_state: partly-verified
  rationale: "No-swap concentrated-liquidity vault: a deposit opens a per-user Uniswap v3 NFT. Vault 0x1195…6DCE is a verified TransparentUpgradeableProxy to SnuggleVaultUpgradeable on chain 4663; owner() on the vault and on ProxyAdmin 0x413C…30F6 return EOA 0x6aC51A…. DefiLlama has no MaxFi protocol row; the Snuggle adapter's Robinhood chain slice is 4534836 and is the MaxFi-labeled vault. Site FAQ lists Robinhood, Base and Arbitrum. [R-1] [R-4] [R-5] [R-6] [R-11]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6, CLM-22], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-10, CLM-15, CLM-16], note: "" }

links:
  - { kind: site, url: "https://maxfi.tech", authenticity: confirmed }
  - { kind: app, url: "https://www.maxfi.tech/deposit", authenticity: confirmed }
  - { kind: docs, url: "https://www.maxfi.tech/security", authenticity: confirmed }
  - { kind: docs, url: "https://www.maxfi.tech/docs", authenticity: confirmed }
  - { kind: x, url: "https://x.com/MAXFILABS", authenticity: confirmed }
  - { kind: discord, url: "https://discord.gg/fjNY8UzYAc", authenticity: unconfirmed }

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
  - label: MaxFi Vault (Proxy) on Base
    role: vault
    address:
      value: "0x7d27cdfbfcc878f7e7349e216d44204bfd2afd55"
      chain: base
      source: docs
      seen: 2026-09-03
      exists_on_4663: false
      explorer_source_verified: null
    receipt_ids: [R-2, R-5, R-11]

metrics:
  - { kind: tvl, value: 4534836, currency: USD, as_of: 2026-09-03T01:23:23Z, window: point, method: "api.llama.fi/protocol/snuggle currentChainTvls['Robinhood Chain'] (ROBINHOOD_VAULTS is the MaxFi-labeled vault; no protocol/maxfi row)", class: claim, receipt_ids: [R-4] }
  - { kind: fees_24h, value: 121834, currency: USD, as_of: 2026-09-02T00:00:00Z, window: 24h, method: "api.llama.fi/summary/fees/snuggle?dataType=dailyFees totalDataChartBreakdown Robinhood Chain (labeled Snuggle; adapter has only the MaxFi vault on that chain)", class: claim, receipt_ids: [R-13] }
  - { kind: revenue_24h, value: 16710, currency: USD, as_of: 2026-09-02T00:00:00Z, window: 24h, method: "api.llama.fi/summary/fees/snuggle?dataType=dailyRevenue totalDataChartBreakdown Robinhood Chain", class: claim, receipt_ids: [R-14] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T01:18:00Z, receipt_ids: [R-11], result: "eth_blockNumber 0x329f233 (53080627). eth_getCode non-empty: vault 1831 bytes, ViewHelper 3507, UniswapV3Adapter 5352, impl 24515, ProxyAdmin 1487, Uniswap V3 NPM 24384; owner 0x6aC51A…25FF code 0x; Base vault 0x7d27…fd55 and Base ViewHelper 0x2864…18bd code 0x. vault owner() 0x6ac51a70…25ff. ProxyAdmin owner() same. EIP-1967 impl 0x999a74dd…91de; admin slot 0x0. ViewHelper getActivePositionCount() 0x2376 (9078). NFT name Uniswap V3 Positions NFT-V1." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T01:20:00Z, receipt_ids: [R-6, R-7, R-8, R-9, R-10, R-12], result: "Blockscout API v2: vault TransparentUpgradeableProxy is_verified true partially verified lib/openzeppelin-contracts/.../TransparentUpgradeableProxy.sol compiler v0.8.33 proxy_type eip1967 implementation SnuggleVaultUpgradeable 0x999A74dd…91dE creator 0x6aC51A…25FF tx 0x3ae0854d… 2026-07-22T23:11:26Z. Impl SnuggleVaultUpgradeable src/SnuggleVaultUpgradeable.sol. ViewHelper src/ViewHelper.sol. UniswapV3Adapter src/adapters/UniswapV3Adapter.sol. ProxyAdmin verified. Owner is_contract false." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T01:12:00Z, receipt_ids: [R-4, R-13, R-14], result: "GET api.llama.fi/protocol/maxfi: Protocol not found. GET api.llama.fi/protocol/snuggle: currentChainTvls Arbitrum 19175.94392, Base 4641120.93433, Robinhood Chain 4534836.16408, tvl last {date 1788398603, totalLiquidityUSD 9195133}; methodology names MaxFi as a Snuggle whitelabel. dailyFees breakdown 1788307200 Robinhood Chain 121834; dailyRevenue breakdown Robinhood Chain 16710." }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-03T01:15:00Z, receipt_ids: [R-1, R-2, R-3], result: "@MAXFILABS profile URLs include https://www.maxfi.tech/. www.maxfi.tech/security lists 𝕏 Twitter https://x.com/MAXFILABS, email snugglefi@gmail.com, Discord https://discord.gg/fjNY8UzYAc." }
  - { id: REP-5, method: repository-crosslink, checked_at: 2026-09-03T01:14:00Z, receipt_ids: [R-5], result: "DefiLlama-Adapters projects/snuggle/index.js ROBINHOOD_VAULTS vault 0x1195C074…6DCE viewHelper 0x71b55E36…F30F7 comment MaxFi Robinhood; ROBINHOOD_ADAPTER_DEX 0x76bdb43d…4ef2 uniswap; BASE_VAULTS includes MaxFi 0x7d27cdfbfcc878f7e7349e216d44204bfd2afd55; methodology Snuggle and MaxFi (Snuggle whitelabel) vaults on Base, Arbitrum, and Robinhood." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Deposit opens a per-user Uniswap v3 (or other CL) NFT. Rebalance mints a new range from existing balances with no swap. Site: 15% of earnings only; withdraw open. FAQ: Robinhood Chain is where tokenized stocks and ETF pools run; Base and Arbitrum carry crypto pools.", class: claim, observed_at: 2026-09-03T01:15:00Z, receipt_ids: [R-1, R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://maxfi.tech", class: verified, observed_at: 2026-09-03T01:15:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@MAXFILABS", class: verified, observed_at: 2026-09-03T01:15:00Z, receipt_ids: [R-2, R-3], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x1195C074F898b7644bA732407619c9804dFE6DCE", class: verified, observed_at: 2026-09-03T01:20:00Z, receipt_ids: [R-5, R-6, R-11, R-12], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x999A74ddFde1575C4db454A0300d5F0351A891dE", class: verified, observed_at: 2026-09-03T01:20:00Z, receipt_ids: [R-7, R-11], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: deployment.address, value: "0x71b55E366a0F43260b1138A32c312ba7bb7F30F7", class: verified, observed_at: 2026-09-03T01:20:00Z, receipt_ids: [R-5, R-8, R-11], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-7, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T01:20:00Z, receipt_ids: [R-4, R-6, R-11, R-12], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-8, field: taxonomy.primary-leaf, value: yield/lp-manager, class: claim, observed_at: 2026-09-03T01:12:00Z, receipt_ids: [R-1, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: taxonomy.chain-scope, value: multichain, class: verified, observed_at: 2026-09-03T01:15:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-10, field: relationship, value: "Llama adapter counts MaxFi vaults as Snuggle whitelabel. ROBINHOOD_VAULTS is labeled MaxFi Robinhood 0x1195…6DCE. Verified implementation name is SnuggleVaultUpgradeable. @MAXFILABS bio says Powered By Snuggle. Keep slug snuggle.", class: verified, observed_at: 2026-09-03T01:20:00Z, receipt_ids: [R-3, R-5, R-6], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "Robinhood Chain TVL 4534836 USD at 2026-09-03T01:23:23Z (currentChainTvls['Robinhood Chain'] on protocol/snuggle; no protocol/maxfi row). Adapter ROBINHOOD_VAULTS is the MaxFi-labeled vault only.", class: verified, observed_at: 2026-09-03T01:12:00Z, receipt_ids: [R-4, R-5], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: "Snuggle all-chains TVL 9195133 USD at date 1788398603 (2026-09-03T01:23:23Z); Base 4641120, Arbitrum 19175. Combined Snuggle+MaxFi, not a MaxFi-only figure.", class: verified, observed_at: 2026-09-03T01:12:00Z, receipt_ids: [R-4], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "Robinhood Chain dailyFees 121834 USD for bar 1788307200 (2026-09-02), labeled Snuggle in the breakdown. Adapter has only the MaxFi vault on that chain.", class: verified, observed_at: 2026-09-03T01:12:00Z, receipt_ids: [R-13, R-5], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: "Robinhood Chain dailyRevenue 16710 USD for bar 1788307200 (2026-09-02).", class: verified, observed_at: 2026-09-03T01:12:00Z, receipt_ids: [R-14], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-15, field: control.owner, value: "vault owner() and ProxyAdmin owner() = 0x6aC51A706539D4F5A326dA2892520180858e25FF (no code). Same address created the proxy, impl, ViewHelper, adapter and ProxyAdmin.", class: verified, observed_at: 2026-09-03T01:20:00Z, receipt_ids: [R-6, R-10, R-11], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-16, field: security.audit, value: "maxfi.tech/security: V30 16 Feb 2026, 22 Solidity files, 0 critical/high/medium, 8 low accepted. Transparency note: reviews used AI security analysis tools, not a traditional third-party firm. Deployed-contract table is Base Mainnet only. Llama audits 2, audit_links Abyss.pdf on the Snuggle row.", class: claim, observed_at: 2026-09-03T01:16:00Z, receipt_ids: [R-2, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: security.audit, value: "Homepage hero block: Audited by Valves Security, with a link to valvessecurity.com.", class: claim, observed_at: 2026-09-03T01:15:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: "account.@MAXFILABS.role", value: project, class: claim, observed_at: 2026-09-03T01:15:00Z, receipt_ids: [R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: "account.@MAXFILABS.slug", value: maxfi, class: claim, observed_at: 2026-09-03T01:15:00Z, receipt_ids: [R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: product.mechanism, value: "15% performance fee on LP trading fees earned; deposits, withdrawals, harvest and compounding listed as free. Referral 3% paid from MaxFi's share.", class: claim, observed_at: 2026-09-03T01:16:00Z, receipt_ids: [R-1, R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: activity.status, value: "ViewHelper getActivePositionCount() returned 9078 at block 53080627", class: verified, observed_at: 2026-09-03T01:18:00Z, receipt_ids: [R-8, R-11], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x76bDb43d2EC3b190087076649224F47A58C44eF2", class: verified, observed_at: 2026-09-03T01:20:00Z, receipt_ids: [R-5, R-9, R-11], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-23, field: deployment.address, value: "0x413Ca90D38D964546c2fE03cB103df57372630F6", class: verified, observed_at: 2026-09-03T01:20:00Z, receipt_ids: [R-10, R-11], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-24, field: control.proxy, value: "Vault is EIP-1967 TransparentUpgradeableProxy; implementation SnuggleVaultUpgradeable 0x999A74dd…91dE. RPC admin slot 0x0 at block 53080627. ProxyAdmin contract 0x413Ca90D…30F6 exists and owner() returns the same EOA.", class: verified, observed_at: 2026-09-03T01:20:00Z, receipt_ids: [R-6, R-7, R-10, R-11], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-25, field: identity.alias, value: "MAXFI", class: claim, observed_at: 2026-09-03T01:15:00Z, receipt_ids: [R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: "account.@MAXFILABS.note", value: "Handle lists maxfi.tech. Bio states Powered By Snuggle and Over $8 Million TVL. Discord invite on the site is discord.gg/fjNY8UzYAc; the bio uses a different t.co Discord link.", class: claim, observed_at: 2026-09-03T01:15:00Z, receipt_ids: [R-2, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: deployment.address, value: "0x7d27cdfbfcc878f7e7349e216d44204bfd2afd55", class: claim, observed_at: 2026-09-03T01:18:00Z, receipt_ids: [R-2, R-5, R-11], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-28, field: economics.metric, value: "@MAXFILABS posted $9.14M TVL and $106,071 average daily payouts over seven days on 2026-09-02. That figure is a project post, not the Robinhood Llama slice.", class: claim, observed_at: 2026-09-03T01:22:00Z, receipt_ids: [R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-29, field: security.audit, value: "@MAXFILABS posted on 2026-09-02 that MaxFi been audited by Valve Security and named @ValvesSec.", class: claim, observed_at: 2026-09-03T01:22:00Z, receipt_ids: [R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-30, field: identity.symbol, value: "NULL — site, FAQ, @MAXFILABS bio and Llama list no native token; census symbol is null", class: unknown, observed_at: 2026-09-03T01:15:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: security.audit
    claim_ids: [CLM-16, CLM-17, CLM-29]
    material_effect: "Homepage and an official post name Valves/Valve Security; the same /security page states the V30 reviews used AI analysis tools, not a traditional third-party firm. Robinhood bytecode is not on the Base contract table."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "DefiLlama Snuggle Robinhood TVL slice is $4.53M"
    summary: "api.llama.fi/protocol/snuggle currentChainTvls Robinhood Chain 4534836; no protocol/maxfi row. All-chains last tvl 9195133."
    occurred_at: 2026-09-03T01:23:23Z
    observed_at: 2026-09-03T01:12:00Z
    affected_fields: [economics.metric, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-4]
  - id: EVT-2
    type: company
    title: "@MAXFILABS quotes an SGOV/USDG share link"
    summary: "@MAXFILABS quoted @cryptozone1013 on a USDG/SGOV Uniswap V3 position shared from maxfi.tech."
    occurred_at: 2026-09-02T19:31:37Z
    observed_at: 2026-09-03T01:22:00Z
    affected_fields: [activity.status, product.mechanism]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-18]
  - id: EVT-3
    type: company
    title: "@MAXFILABS posts MaxFi at $9.14M TVL"
    summary: "@MAXFILABS posted $9.14M TVL and $106,071 average daily payouts over seven days."
    occurred_at: 2026-09-02T19:30:38Z
    observed_at: 2026-09-03T01:22:00Z
    affected_fields: [economics.metric]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-15]
  - id: EVT-4
    type: company
    title: "@MAXFILABS posts Valve Security audit reply"
    summary: "@MAXFILABS replied that MaxFi been audited by Valve Security and named @ValvesSec."
    occurred_at: 2026-09-02T19:22:38Z
    observed_at: 2026-09-03T01:22:00Z
    affected_fields: [security.audit]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-17]
  - id: EVT-5
    type: company
    title: "@MAXFILABS quotes a Robinhood gold-rush post"
    summary: "@MAXFILABS quoted @LegendaryLFG calling MaxFi S-Tier and pointed to maxfi.tech."
    occurred_at: 2026-09-02T05:59:07Z
    observed_at: 2026-09-03T01:22:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-19]
  - id: EVT-6
    type: company
    title: "@MAXFILABS posts $128,324 paid to LPs in 24h"
    summary: "@MAXFILABS posted $128,324 paid out to LP farmers in the last 24 hours."
    occurred_at: 2026-08-30T08:07:17Z
    observed_at: 2026-09-03T01:22:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-16]
  - id: EVT-7
    type: onchain
    title: "MaxFi Robinhood vault proxy deployed"
    summary: "TransparentUpgradeableProxy 0x1195…6DCE created at 2026-07-22T23:11:26Z; implementation SnuggleVaultUpgradeable."
    occurred_at: 2026-07-22T23:11:26Z
    observed_at: 2026-09-03T01:20:00Z
    affected_fields: [deployment.address, lifecycle, control.proxy]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-6, R-12]

receipts:
  - { id: R-1, publisher: MaxFi, title: "MaxFi homepage", url: "https://www.maxfi.tech/", published_at: null, accessed_at: 2026-09-03T01:15:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-8, CLM-9, CLM-17, CLM-20], excerpt: "MaxFi · Tokenized stocks & crypto on Robinhood Chain, Base & Arbitrum. FAQ: MaxFi is an automated income platform that earns trading fees on tokenized stocks, ETFs, Bitcoin, ETH and stablecoins. 15% performance fee on earnings only. Withdraw anytime. Live on Robinhood Chain, Base and Arbitrum. Audited by Valves Security. Discord https://discord.gg/fjNY8UzYAc." }
  - { id: R-2, publisher: MaxFi, title: "Security", url: "https://www.maxfi.tech/security", published_at: null, accessed_at: 2026-09-03T01:16:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-3, CLM-16, CLM-26, CLM-27], excerpt: "V30 Comprehensive Security Audit Complete. Latest audit: February 16, 2026 — 22 Solidity files. 0 Critical, 0 High, 0 Medium, 8 Low (Accepted). Transparency Note: These audits were conducted using AI security analysis tools, not a traditional third-party audit firm. Deployed Contracts (Base Mainnet) MaxFi Vault (Proxy) 0x7d27cdfb…fd2afd55. 𝕏 Twitter https://x.com/MAXFILABS. Email snugglefi@gmail.com." }
  - { id: R-3, publisher: "@MAXFILABS", title: "MAXFI profile", url: "https://x.com/MAXFILABS", published_at: null, accessed_at: 2026-09-03T01:15:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-10, CLM-18, CLM-19, CLM-25, CLM-26], excerpt: "Display name MAXFI, handle @MAXFILABS. Bio: Smarter DeFi, Powered by AI. #1 LP Manager For Cryto and Stocks. Over $8 Million TVL. Powered By Snuggle. Discord t.co link. Website https://www.maxfi.tech/. Followers 9414. User ID 1879285685057654784." }
  - { id: R-4, publisher: DefiLlama, title: "Snuggle protocol row", url: "https://api.llama.fi/protocol/snuggle", published_at: null, accessed_at: 2026-09-03T01:12:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-7, CLM-8, CLM-9, CLM-11, CLM-12, CLM-16, EVT-1], excerpt: "name Snuggle category Liquidity Manager chains [Arbitrum, Base, Robinhood Chain] twitter SnuggleFi url https://snuggle.fi/ methodology TVL is the value of all concentrated liquidity positions managed by Snuggle and MaxFi (Snuggle whitelabel) vaults on Base, Arbitrum, and Robinhood. currentChainTvls Robinhood Chain 4534836.16408 Base 4641120.93433 Arbitrum 19175.94392. tvl last date 1788398603 totalLiquidityUSD 9195133. audits 2 audit_links Abyss.pdf. GET protocol/maxfi: Protocol not found." }
  - { id: R-5, publisher: DefiLlama, title: "snuggle adapter ROBINHOOD_VAULTS", url: "https://github.com/DefiLlama/DefiLlama-Adapters/blob/main/projects/snuggle/index.js", published_at: null, accessed_at: 2026-09-03T01:14:00Z, kind: repository, authority: aggregator, authenticity: unconfirmed, supports: [CLM-4, CLM-6, CLM-10, CLM-11, CLM-13, CLM-22, CLM-27], excerpt: "ROBINHOOD_VAULTS = [{ vault: '0x1195C074F898b7644bA732407619c9804dFE6DCE', viewHelper: '0x71b55E366a0F43260b1138A32c312ba7bb7F30F7' }, // MaxFi Robinhood]. BASE_VAULTS includes { vault: '0x7d27cdfbfcc878f7e7349e216d44204bfd2afd55' } // MaxFi. ROBINHOOD_ADAPTER_DEX = { '0x76bdb43d2ec3b190087076649224f47a58c44ef2': 'uniswap' }. methodology: Snuggle and MaxFi (Snuggle whitelabel) vaults on Base, Arbitrum, and Robinhood." }
  - { id: R-6, publisher: Blockscout, title: "Address 0x1195…6DCE TransparentUpgradeableProxy", url: "https://robinhoodchain.blockscout.com/address/0x1195C074F898b7644bA732407619c9804dFE6DCE", published_at: null, accessed_at: 2026-09-03T01:20:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-7, CLM-10, CLM-15, CLM-24, EVT-7], excerpt: "hash 0x1195C074F898b7644bA732407619c9804dFE6DCE name TransparentUpgradeableProxy is_contract true is_verified true proxy_type eip1967 implementation SnuggleVaultUpgradeable 0x999A74ddFde1575C4db454A0300d5F0351A891dE creator 0x6aC51A706539D4F5A326dA2892520180858e25FF tx 0x3ae0854d…. Smart-contract compiler v0.8.33 is_partially_verified true file_path TransparentUpgradeableProxy.sol." }
  - { id: R-7, publisher: Blockscout, title: "Address 0x999A…91dE SnuggleVaultUpgradeable", url: "https://robinhoodchain.blockscout.com/address/0x999A74ddFde1575C4db454A0300d5F0351A891dE", published_at: null, accessed_at: 2026-09-03T01:20:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-24], excerpt: "hash 0x999A74ddFde1575C4db454A0300d5F0351A891dE name SnuggleVaultUpgradeable is_contract true is_verified true creator 0x6aC51A706539D4F5A326dA2892520180858e25FF. Smart-contract compiler v0.8.33+commit.64118f21 is_partially_verified true file_path src/SnuggleVaultUpgradeable.sol." }
  - { id: R-8, publisher: Blockscout, title: "Address 0x71b5…F30F7 ViewHelper", url: "https://robinhoodchain.blockscout.com/address/0x71b55E366a0F43260b1138A32c312ba7bb7F30F7", published_at: null, accessed_at: 2026-09-03T01:20:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, CLM-21], excerpt: "hash 0x71b55E366a0F43260b1138A32c312ba7bb7F30F7 name ViewHelper is_contract true is_verified true creator 0x6aC51A706539D4F5A326dA2892520180858e25FF creation_transaction_hash 0x1ac4f7f5210e4ef4841ff7fa0a98087ed6065ae75221f323928795fda69d0593. Smart-contract compiler v0.8.33 file_path src/ViewHelper.sol." }
  - { id: R-9, publisher: Blockscout, title: "Address 0x76bD…4eF2 UniswapV3Adapter", url: "https://robinhoodchain.blockscout.com/address/0x76bDb43d2EC3b190087076649224F47A58C44eF2", published_at: null, accessed_at: 2026-09-03T01:20:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "hash 0x76bDb43d2EC3b190087076649224F47A58C44eF2 name UniswapV3Adapter is_contract true is_verified true creator 0x6aC51A706539D4F5A326dA2892520180858e25FF creation_transaction_hash 0x72b5215436ea9932325cc2a07ff135b46ae031de76e069a94e4f6a39a4b8ac05. file_path src/adapters/UniswapV3Adapter.sol." }
  - { id: R-10, publisher: Blockscout, title: "Address 0x413C…30F6 ProxyAdmin", url: "https://robinhoodchain.blockscout.com/address/0x413Ca90D38D964546c2fE03cB103df57372630F6", published_at: null, accessed_at: 2026-09-03T01:20:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-15, CLM-23, CLM-24], excerpt: "hash 0x413Ca90D38D964546c2fE03cB103df57372630F6 name ProxyAdmin is_contract true is_verified true creator 0x6aC51A706539D4F5A326dA2892520180858e25FF. Smart-contract compiler v0.8.33 file_path lib/openzeppelin-contracts/contracts/proxy/transparent/ProxyAdmin.sol." }
  - { id: R-11, publisher: Robinhood Chain RPC, title: "eth_getCode, owner, EIP-1967, getActivePositionCount", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T01:18:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-7, CLM-15, CLM-21, CLM-22, CLM-23, CLM-24, CLM-27], excerpt: "eth_blockNumber 0x329f233 (53080627). eth_getCode non-empty on vault, ViewHelper, adapter, impl, ProxyAdmin. owner 0x6aC51A…25FF code 0x. Base MaxFi vault 0x7d27…fd55 code 0x. vault owner() 0x6ac51a70…25ff. ProxyAdmin owner() same. EIP-1967 impl 0x999a74dd…91de admin slot 0x0. ViewHelper getActivePositionCount() 9078. NFT name Uniswap V3 Positions NFT-V1." }
  - { id: R-12, publisher: Blockscout, title: "Vault creation tx 0x3ae0854d…", url: "https://robinhoodchain.blockscout.com/tx/0x3ae0854d1ac38f02b2a2bed84fcbe722c0b449726c57467d84bdd72473fef0c0", published_at: 2026-07-22T23:11:26Z, accessed_at: 2026-09-03T01:20:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-7, EVT-7], excerpt: "timestamp 2026-07-22T23:11:26.000000Z status ok result success from 0x6aC51A706539D4F5A326dA2892520180858e25FF block_number 16810524 created_contract 0x1195C074F898b7644bA732407619c9804dFE6DCE name TransparentUpgradeableProxy implementation SnuggleVaultUpgradeable." }
  - { id: R-13, publisher: DefiLlama, title: "Snuggle dailyFees", url: "https://api.llama.fi/summary/fees/snuggle?dataType=dailyFees", published_at: null, accessed_at: 2026-09-03T01:12:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-13], excerpt: "total24h 129993 total7d 814662. totalDataChartBreakdown last [1788307200, {Base: {Snuggle: 8118}, Robinhood Chain: {Snuggle: 121834}, Arbitrum: {Snuggle: 40.66}}]." }
  - { id: R-14, publisher: DefiLlama, title: "Snuggle dailyRevenue", url: "https://api.llama.fi/summary/fees/snuggle?dataType=dailyRevenue", published_at: null, accessed_at: 2026-09-03T01:12:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-14], excerpt: "total24h 17842 total7d 113555. totalDataChartBreakdown last [1788307200, {Base: {Snuggle: 1126}, Robinhood Chain: {Snuggle: 16710}, Arbitrum: {Snuggle: 6.04}}]." }
  - { id: R-15, publisher: "@MAXFILABS", title: "MAXFI JUST HIT $9 MILLION TVL", url: "https://x.com/MAXFILABS/status/2095232956168327582", published_at: 2026-09-02T19:30:38Z, accessed_at: 2026-09-03T01:22:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-28, EVT-3], excerpt: "MAXFI JUST HIT $9 MILLION TVL! $106,071 A DAY average payouts over the last 7 days. $2.34M+ already distributed to LP farmers. $9.14M TVL. No-Swap Rebalancing. Self-Custody, no shared vaults. Crypto + Tokenized Stocks." }
  - { id: R-16, publisher: "@MAXFILABS", title: "$128,324 PAID OUT TO LP FARMERS IN THE LAST 24 HOURS", url: "https://x.com/MAXFILABS/status/2093973819409203686", published_at: 2026-08-30T08:07:17Z, accessed_at: 2026-09-03T01:22:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-6], excerpt: "$128,324 PAID OUT TO LP FARMERS IN THE LAST 24 HOURS! Actual LP farming payouts. No-Swap Rebalancing. AI-Powered LP Management. MaxFi - #1 LP Manager for Crypto & Tokenized Stocks." }
  - { id: R-17, publisher: "@MAXFILABS", title: "MaxFi been audited by Valve Security", url: "https://x.com/MAXFILABS/status/2095230942717850086", published_at: 2026-09-02T19:22:38Z, accessed_at: 2026-09-03T01:22:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-29, EVT-4], excerpt: "That’s wrong. MaxFi been audited by Valve Security. Valve’s feedback was: “We haven’t seen a protocol built this secure in a long time.” MaxFi’s no-swap architecture removes a major attack surface found in swap-heavy LP systems. @ValvesSec" }
  - { id: R-18, publisher: "@MAXFILABS", title: "Stable pair farming will never be the same", url: "https://x.com/MAXFILABS/status/2095233200520143313", published_at: 2026-09-02T19:31:37Z, accessed_at: 2026-09-03T01:22:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-2], excerpt: "Stable pair farming will never be the same, see what people are earning below. Quoted @cryptozone1013: @MAXFILABS is where I’m farming stables, or really LP bonds. $SGOV / $USDG. Share URL maxfi.tech/share?pool=USDG/SGOV protocol Uniswap V3 fee 0.30%." }
  - { id: R-19, publisher: "@MAXFILABS", title: "Gold Rush on Robinhood Chain for Uniswap LP farmers", url: "https://x.com/MAXFILABS/status/2095028729630126507", published_at: 2026-09-02T05:59:07Z, accessed_at: 2026-09-03T01:22:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-5], excerpt: "Gold Rush on Robinhood Chain for Uniswap LP farmers. Quoted @LegendaryLFG: @MAXFILABS is S-Tier. MaxFi’s No-Swap LP technology. https://www.maxfi.tech/ Discord t.co link. @RobinhoodCrypto." }
  - { id: R-20, publisher: MaxFi, title: "Documentation", url: "https://www.maxfi.tech/docs", published_at: null, accessed_at: 2026-09-03T01:17:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-20], excerpt: "MaxFi is an automated concentrated liquidity management protocol built on Base for Uniswap V3, Aerodrome, and PancakeSwap. Protocol fee 15% of earnings only. Referral 3% of referrals' earnings from MaxFi's share. Security & Audits links to /security." }
  - { id: R-21, publisher: MaxFi, title: "Risks & Disclaimers", url: "https://www.maxfi.tech/risks", published_at: null, accessed_at: 2026-09-03T01:17:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1], excerpt: "MaxFi is experimental DeFi software. MaxFi reduces impermanent loss by approximately 50% on each rebalance through DCA positioning, but it does NOT eliminate IL. No guaranteed returns. Protocol upgrades may change behavior." }

gaps:
  - { priority: P0, question: "Can owner 0x6aC51A…25FF upgrade SnuggleVaultUpgradeable or move treasury without a timelock on the Robinhood ProxyAdmin? RPC admin slot was 0x0.", checked: "owner() on vault and ProxyAdmin via RPC at block 53080627; EIP-1967 admin slot 0x0; /security lists 24h timelocks for treasury/staking manager on the Base table, 2026-09-03", next: "read Ownable2Step and ProxyAdmin verified source modifiers; eth_call pending admin/timelock if present" }
  - { priority: P1, question: "Does Abyss.pdf / Valves V30 cover the Robinhood bytecode (impl 0x999A…91dE), or only the Base table on /security?", checked: "maxfi.tech/security Base table and Llama audit_links Abyss.pdf on the Snuggle row; PDF not opened line by line, 2026-09-03", next: "open Abyss.pdf and match compiler settings and file_path src/SnuggleVaultUpgradeable.sol" }
  - { priority: P1, question: "Homepage and @MAXFILABS name Valves/Valve Security while /security says the V30 reviews used AI tools, not a traditional third-party firm. Which artifact is the named-firm report?", checked: "homepage Valves Security block, /security transparency note, X post 2095230942717850086, 2026-09-03", next: "open valvessecurity.com and any linked report and match addresses" }
  - { priority: P2, question: "Do discord.gg/fjNY8UzYAc (site) and the bio Discord t.co (discord.gg/M3sBNhZVAJ in earlier bios) land on the same server?", checked: "site and /security list fjNY8UzYAc; bio uses a t.co Discord link; neither invite opened, 2026-09-03", next: "open both invites and compare the server" }
  - { priority: P2, question: "Where is the source repository for src/SnuggleVaultUpgradeable.sol used in the verified explorer upload?", checked: "maxfi.tech, @MAXFILABS bio, Llama github field empty, GitHub search maxfi snuggle returned 0 this pass", next: "search GitHub for SnuggleVaultUpgradeable and the Base proxy 0x7d27cdfb…" }
  - { priority: P2, question: "/docs still says the protocol is built on Base; FAQ and Llama put Robinhood stock pools on 4663. Is the docs page stale?", checked: "www.maxfi.tech/docs opening paragraph vs homepage FAQ, 2026-09-03", next: "diff /docs supported-pool table against live /deposit Robinhood pairs" }
---

# MaxFi — research packet

## What it is

No-swap concentrated-liquidity manager on Robinhood Chain. A deposit opens a per-user Uniswap v3 NFT; the vault rebalances by minting a new range from existing balances with no swap. Users deposit tokenized-stock and meme pairs at maxfi.tech. @MAXFILABS runs the Robinhood UI; DefiLlama labels the vault a Snuggle whitelabel.

Themes: vault, rwa, memecoin, nft, stock-paired:NVDA

## Why it matters

Robinhood stock-token / USDG and meme pools are deposited through maxfi.tech, not snuggle.fi. DefiLlama has no MaxFi protocol row; the Snuggle adapter's Robinhood chain slice is the MaxFi-labeled vault 0x1195…6DCE. That slice is the live book for tokenized-stock LP on chain 4663.

## What could go wrong

Vault `owner()` and ProxyAdmin `owner()` return the same externally owned account, so upgrades sit with one key. Llama's Robinhood TVL and fees sit on the Snuggle module, so a MaxFi-only all-chains figure does not exist there. The security page states V30 used AI analysis tools, while the homepage and an official post name Valves/Valve Security.

## Product and mechanics

A deposit opens a per-user concentrated-liquidity NFT. The site says rebalance mints a new range from existing balances with no swap, and withdrawal is open at any time. Performance fee is 15% of earnings. Referral is 3% paid from MaxFi's share. [claim R-1 R-20]

FAQ: Robinhood Chain is where the tokenized stocks and ETF pools run; Base and Arbitrum carry the crypto pools. Homepage lists NVDA, GME, SPCX and other stock pairs against USDG, plus Robinhood meme pools such as CASHCAT/WETH. [claim R-1]

## Control and security

Vault 0x1195…6DCE is an EIP-1967 TransparentUpgradeableProxy. Implementation is SnuggleVaultUpgradeable 0x999A…91dE. ProxyAdmin is 0x413C…30F6. `owner()` on the vault and on ProxyAdmin returns 0x6aC51A…25FF, which has no code and created those contracts. RPC admin slot was 0x0 at block 53080627. [verified R-6 R-10 R-11]

maxfi.tech/security lists V30 (16 Feb 2026) with 0 critical/high/medium and a Base contract table including MaxFi Vault (Proxy) 0x7d27…fd55. The same page states the reviews used AI security analysis tools. The homepage and an official post name Valves/Valve Security. Llama lists Abyss.pdf on the Snuggle row. The PDF was not opened line by line. [claim R-1 R-2 R-4 R-17]

## Team and provenance

@MAXFILABS lists maxfi.tech. The security page links Twitter to @MAXFILABS. Bio states Powered By Snuggle. Security contact email is snugglefi@gmail.com. No repository URL was located on the site, the bio, or Llama. Discord on the site is discord.gg/fjNY8UzYAc; the bio uses a different Discord t.co. Neither invite was opened. [verified R-1 R-2 R-3]

Snuggle (snuggle.fi / @SnuggleFi) is a separate census slug. Llama labels the Robinhood vault MaxFi and calls MaxFi a Snuggle whitelabel. Keep both rows. [verified R-5 R-6]

## Economics and activity

Robinhood Chain TVL is 4534836 USD at 2026-09-03T01:23:23Z from `currentChainTvls['Robinhood Chain']` on protocol/snuggle. GET protocol/maxfi returned Protocol not found. All-chains last tvl on the Snuggle row is 9195133 USD (Base 4641120, Arbitrum 19175). That all-chains figure is Snuggle plus MaxFi, not a MaxFi-only chain slice. [claim R-4]

Robinhood dailyFees for 2026-09-02 are 121834 USD; dailyRevenue 16710 USD, labeled Snuggle in the breakdown. The adapter's only Robinhood vault is the MaxFi-labeled one. ViewHelper `getActivePositionCount()` returned 9078 at block 53080627. @MAXFILABS posted $9.14M TVL on 2026-09-02; that is a project post, not the Robinhood Llama slice. [claim R-13 R-14 R-15] [verified R-11]

## Material risks

- One EOA owns the vault and the ProxyAdmin. [verified R-11]
- Robinhood TVL in the Snuggle Llama module is the MaxFi-labeled vault; there is no protocol/maxfi row. [verified R-4 R-5]
- Security page states V30 used AI analysis tools; homepage and an official post name Valves/Valve Security; Abyss.pdf was not matched to the Robinhood bytecode this pass. [claim R-1 R-2 R-17]
- No-swap rebalance still leaves range and impermanent-loss path risk; /risks says IL is reduced, not eliminated. [claim R-21]
- /docs still describes the protocol as built on Base. [claim R-20]

## Verification passes

- Receipts: maxfi.tech, /security, /docs, /risks, @MAXFILABS profile and posts, Llama protocol/fees/revenue, the Snuggle adapter, Blockscout vault/impl/helper/adapter/ProxyAdmin/create tx, and RPC were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-4 R-6 R-11]
- Numbers: TVL 4534836 is the Robinhood chain slice on protocol/snuggle, not the 9195133 all-chains last tvl and not the $9.14M project post. Fees 121834 and revenue 16710 are the Robinhood bars for 2026-09-02. [claim R-4 R-13 R-14 R-15]
- Adversarial: the strongest contrary reading is that MaxFi is only a frontend on Snuggle and has no distinct deployment. Adapter comment MaxFi Robinhood, verified name SnuggleVaultUpgradeable, @MAXFILABS bio Powered By Snuggle, and the separate maxfi.tech / @MAXFILABS surface argue they share the engine; they remain separate slugs. [inference R-3 R-5 R-6]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census maxfi, content/projects/maxfi.yaml, content/feed/maxfi.yaml, content/sources/maxfi.yaml, content/research/maxfi.md, content/changelog/maxfi.yaml, content/accounts.yaml @MAXFILABS. No content/pulled/maxfi.yaml. docs/templates/research-packet-v2.md and schema/packet.schema.json read before collection.
- Official: www.maxfi.tech, /security, /docs, /risks, /deposit (HTTP 200).
- Explorer: Blockscout api/v2 with a Chrome User-Agent. Vault, impl, ViewHelper, UniswapV3Adapter, ProxyAdmin, create tx. RPC eth_getCode/eth_call/eth_getStorageAt at block 53080627.
- Third party: api.llama.fi/protocol/snuggle, protocol/maxfi (not found), summary/fees dailyFees and dailyRevenue, DefiLlama-Adapters projects/snuggle/index.js raw.
- X: @MAXFILABS profile, 2 Sep $9.14M, SGOV/USDG quote, Valve Security reply, gold-rush quote; 30 Aug $128,324.
- Failed: GET protocol/maxfi returned Protocol not found. GitHub search maxfi snuggle returned 0 unauthenticated. Discord invites not opened. Abyss.pdf not opened. Historical eth_getStorageAt at block 53056880 returned metadata is not found.
- Time: collection 2026-09-03T01:10Z–2026-09-03T01:30Z.
