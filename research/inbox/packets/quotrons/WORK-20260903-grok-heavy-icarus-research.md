---
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: quotrons
name: Quotrons
packet_tier: full
as_of: 2026-09-03T00:45:00Z
prior_packet: null
supersedes: null
owned_slugs: [quotrons]
allowed_paths:
  - research/inbox/packets/quotrons/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Quotrons
  aliases: ["QUOTRONS", "QUOTRONS V2", "Quotrons404"]
  symbols: [QUOTRON]
  entity_kind: collection
  chain_scope: robinhood-native
  official_domain: https://quotrons.cash
  official_handle: "@Quotrons404"
  repository: https://github.com/mavrkofficial/quotrons-brand-kit
  possible_matches:
    - slug: stonkbroker
      signals: [other]
      contrary_signals:
        - "Quotrons is an ERC-404 terminal collection at quotrons.cash / @Quotrons404 with V2 core 0x5a86…0D7F"
        - "StonkBrokers is an ERC-721 + ERC-6551 collection at 0x539c…AbF0 / stonkbrokers.cash / @ClutchMarkets"
        - "V2 docs name the StonkBrokers NFT as a 1.25x reward-weight check and a 0.2125% buy-and-burn sink; that is a fee destination, not shared identity"
        - "No shared domain, handle, or reproduced address"
    - slug: index
      signals: [other]
      contrary_signals:
        - "The Index is a fee-funded Stock Token distributor at theindex.finance / @TheIndexFi / token 0x5691…9870"
        - "Quotrons pays Stock Tokens only to hardwired ERC-404 terminals from a 3% QUOTRON/WETH hook, not to a liquid ERC-20 holder set"
        - "No shared domain, handle, or reproduced address"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired token factory at long.cash / @longdotxyz"
        - "Quotrons is a 4,444-terminal ERC-404 collection; it is not a factory that mints stock-paired tickers"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: nft-treasury/token-bound-nft
  secondary_leaves: [rwa-products/stock-paired-token]
  mechanism_tags: [nft, rwa, fee-routing, amm, stock-paired]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: full
  evidence_state: partly-verified
  rationale: "V2 is a 4,444-unit ERC-404: one liquid QUOTRON materializes a dark terminal; hardwire(id) burns that unit into a permanent NFT that claims Stock Token rewards from a 3% Uniswap v4 QUOTRON/WETH hook. Token 0x5a86…0D7F, router, hook, mirror and the DexScreener v4 pool were reproduced on chain 4663 with verified source, isLaunched() true and live volume. Census lifecycle announced is stale. Ink xStocks and Sentry are related venues, not this slug. [R-2] [R-6] [R-12] [R-13]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-12], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-11], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-13, CLM-14, CLM-19, CLM-23], note: "" }

links:
  - { kind: site, url: "https://quotrons.cash", authenticity: confirmed }
  - { kind: docs, url: "https://quotrons.cash/llms-full.txt", authenticity: confirmed }
  - { kind: docs, url: "https://quotrons.cash/integration.md", authenticity: confirmed }
  - { kind: x, url: "https://x.com/Quotrons404", authenticity: confirmed }
  - { kind: github, url: "https://github.com/mavrkofficial/quotrons-brand-kit", authenticity: confirmed }
  - { kind: other, url: "https://opensea.io/collection/Quotrons404", authenticity: unconfirmed }
  - { kind: other, url: "https://www.sentry.trading/swap?chain=robinhood&token=0x5a86828Efd322bfb16d93cFeD16EE9BC14940D7F", authenticity: unconfirmed }

deployments:
  - label: QUOTRON V2 core (Quotron404V2)
    role: token
    address:
      value: "0x5a86828Efd322bfb16d93cFeD16EE9BC14940D7F"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-6, R-7, R-8, R-12]
  - label: V2 ERC-721 mirror (QuotronMirrorV2)
    role: other
    address:
      value: "0x027ACa2794E44f24950D81227DcD516FfBB49d6e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-11, R-12]
  - label: Canonical router (QuotronWethRouter)
    role: router
    address:
      value: "0x42024fCFdB4F3089Dd619A0cEF0Cd24E7b841C18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-9, R-12]
  - label: Canonical Uniswap v4 hook (QuotronWethHook)
    role: other
    address:
      value: "0x62E200Cc8e4D95cf622f40Dd70f407C883EcB0cc"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-10, R-12]
  - label: V2 reflections (QuotronReflectionsV2)
    role: other
    address:
      value: "0xe04fba61FD54Ba78Dd450A30d8Af40167aF5d3Ec"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-12, R-24]
  - label: View quoter (QuotronWethQuoter)
    role: other
    address:
      value: "0xb8960fdC8A0Be155d196C2795b75747763562df2"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-4, R-12]
  - label: Epoch converter (QuotronEpochConverter)
    role: other
    address:
      value: "0x24e62Dd5C7058CC41ad9c5375C137460ea1Da2FE"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-25]
  - label: Recovery Safe
    role: multisig
    address:
      value: "0x15277aA1ecC13734d57C519a2DAA1cc4A748bA89"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-12, R-23]
  - label: Owner / blacklist guardian (EIP-7702)
    role: admin
    address:
      value: "0x7171E64E979265aeD6588577D1c6b60A701d7866"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-6, R-8, R-12]
  - label: QUOTRON/USDG Uniswap v3 pair
    role: other
    address:
      value: "0xb77e03DF4CAe1752aa1E2b52C46794026b46873E"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-13]
  - label: V1 QUOTRON core (retired)
    role: token
    address:
      value: "0x40686524e56AfF0F1446958725dCF6e6dA5381E6"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-26]

metrics:
  - { kind: volume_24h, value: 961782, currency: USD, as_of: 2026-09-03T00:35:00Z, window: 24h, method: "DexScreener latest/dex/tokens 0x5a86…0D7F Uniswap v4 QUOTRON/WETH pair 0x0b142aaf…d069 volume.h24; canonical-pool slice not all-pairs", class: claim, receipt_ids: [R-13] }
  - { kind: market_cap, value: 9776980, currency: USD, as_of: 2026-09-03T00:35:00Z, window: point, method: "DexScreener same v4 pair marketCap (equals fdv on that payload; tracks remaining liquid supply ~1652 * priceUsd 5918.29)", class: claim, receipt_ids: [R-13] }
  - { kind: holders, value: 3649, currency: null, as_of: 2026-09-03T00:32:00Z, window: point, method: "Blockscout GET /api/v2/tokens/0x5a86828Efd322bfb16d93cFeD16EE9BC14940D7F holders_count", class: claim, receipt_ids: [R-7] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T00:32:00Z, receipt_ids: [R-6, R-7, R-8, R-12], result: "eth_chainId 0x1237 (4663); eth_blockNumber 0x327fa07 (52951559). eth_getCode on 0x5a86…0D7F non-empty (len 37268). name() QUOTRONS; symbol() QUOTRON; decimals 18; totalSupply 1652e18; owner() 0x7171E64E979265aeD6588577D1c6b60A701d7866. isLaunched() true; transfersLocked() false; paused() false; metadataFrozen() true; emergencyControlsConfigured() true; launchedAt 1786637659 (2026-08-13T18:30:51Z); totalHardwired() 2792; economicUnits() 4444e18; canonicalRouter 0x4202…1C18; floorHook 0x62E2…B0cc; poolManager 0x8366a39cc670b4001a1121b8f6a443a643e40951; blacklistGuardian 0x7171…7866; recoveryAdmin 0x15277…Ba89. Blockscout is_contract true, is_verified true, name QUOTRONS / source Quotron404V2.sol, creator 0x7171…7866 (ENS cruelhand.eth), creation tx 0x222e4f…b13c block 35489899 at 2026-08-13T15:14:36Z, holders_count 3649, token type ERC-20." }
  - { id: REP-2, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T00:32:00Z, receipt_ids: [R-9, R-10, R-11, R-12], result: "eth_getCode non-empty on router 0x4202… (len 15646), hook 0x62E2… (len 17624), mirror 0x027A…. Blockscout is_verified true: QuotronWethRouter.sol, QuotronWethHook.sol, QuotronMirrorV2.sol. Router owner() reverts. Hook and mirror owner() 0x7171…7866. Mirror is ERC-721 QUOTRONS/QUOTRON, holders_count 863, created in the V2 core tx 0x222e4f… by the token itself. Hook created 2026-08-13T15:14:47Z via CREATE2 factory 0x4e59b44847b379578588920cA78FbF26c0B4956C." }
  - { id: REP-3, method: official-crosslink, checked_at: 2026-09-03T00:40:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-5, R-13, R-14], result: "X @Quotrons404 bio names ERC-404 collection on @RobinhoodCrypto and links quotrons.cash. Site llms.txt / llms-full.txt / integration.md / manifest.json publish V2 core 0x5a86…0D7F, router, hook, quoter and pool id 0x0b142aaf…d069 on chain 4663. DexScreener token info.websites https://quotrons.cash/ plus Docs and Opensea; socials x.com/quotrons404. GitHub mavrkofficial/quotrons-brand-kit README calls itself official brand assets for Quotrons and links quotrons.cash." }
  - { id: REP-4, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T00:33:00Z, receipt_ids: [R-12, R-23], result: "Owner 0x7171…7866 eth_getCode len 46 (23 bytes) 0xef010069007702764179f14f51cdce752f4f775d74e139; Blockscout proxy_type eip7702, implementation SemiModularAccount7702 0x69007702764179f14F51cdce752f4f775d74E139. Recovery Safe 0x15277…Ba89 is_verified true, name SafeProxy, implementation SafeL2 0x29fcB43b46531BcA003ddC8FCB67FFE91900C762. getThreshold() 2. getOwners() [0x7171…7866, 0xd1de50b724de2e243d3f6f3c3ef1806babd39e58]." }
  - { id: REP-5, method: api, chain_id: 4663, checked_at: 2026-09-03T00:35:00Z, receipt_ids: [R-13], result: "DexScreener latest/dex/tokens 0x5a86…0D7F: Uniswap v4 QUOTRON/WETH pairAddress 0x0b142aaf734f1b063355bfe854e282a13b26dcac86e2e564e74540f9b218d069 (matches docs pool id) quote WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73 liquidity.usd 408191.86 volume.h24 961782 priceUsd 5918.29 marketCap 9776980 fdv 9776980 pairCreatedAt 1786634200000 (2026-08-13T15:16:40Z). Extra Uniswap v3 QUOTRON/USDG 0xb77e…873E liq 69145.06 vol 554632.44 and Alandale QUOTRON/WETH 0xB2b4…bC8D liq 7130.57 vol 97992.26." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "4,444-terminal ERC-404. One whole liquid QUOTRON materializes one dark terminal; hardwire(id) burns 1e18 QUOTRON, totalSupply falls, and the terminal becomes a permanent ERC-721 that can claim promotional Stock Token rewards. Invariant: liquid ERC-20 supply + hardwired * 1e18 = 4444e18. No NFT mint sale.", class: claim, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://quotrons.cash", class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-1, R-5, R-13, R-14], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@Quotrons404", class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-5, R-13], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x5a86828Efd322bfb16d93cFeD16EE9BC14940D7F", class: verified, observed_at: 2026-09-03T00:32:00Z, receipt_ids: [R-1, R-4, R-6, R-13], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-5, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T00:32:00Z, receipt_ids: [R-6, R-12, R-13], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-6, field: taxonomy.primary-leaf, value: nft-treasury/token-bound-nft, class: inference, observed_at: 2026-09-03T00:42:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-7, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T00:32:00Z, receipt_ids: [R-2, R-6, R-13], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-8, field: taxonomy.entity-kind, value: collection, class: inference, observed_at: 2026-09-03T00:42:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: identity.symbol, value: QUOTRON, class: verified, observed_at: 2026-09-03T00:32:00Z, receipt_ids: [R-6, R-7, R-12], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-10, field: identity.name, value: QUOTRONS, class: verified, observed_at: 2026-09-03T00:32:00Z, receipt_ids: [R-6, R-7, R-12], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-11, field: product.mechanism, value: "Canonical market is one QUOTRON/WETH Uniswap v4 pool, pool id 0x0b142aaf734f1b063355bfe854e282a13b26dcac86e2e564e74540f9b218d069, quote WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73. Path user -> QuotronWethRouter -> registered pool. Ten stocks (NVDA AAPL TSLA GME SPCX SPY PLTR NFLX RDDT MSTR) are reward conversion routes, not ten QUOTRON pools. Permanent fee 3% of WETH-side volume: 2% rewards, 0.6375% locked LP, 0.2125% STONKBROKER buy/burn, 0.15% creator.", class: claim, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-1, R-2, R-3, R-13], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-12, field: relationship, value: "Not a launchpad token. V2 core was created 2026-08-13T15:14:36Z by 0x7171…7866 (cruelhand.eth) in tx 0x222e4f…b13c, not by PonsLaunchFactory. Pair asset on the canonical book is WETH. Liquidity venue is Uniswap v4 (DexScreener labels v4). Extra Uniswap v3 QUOTRON/USDG and Alandale QUOTRON/WETH books exist.", class: verified, observed_at: 2026-09-03T00:35:00Z, receipt_ids: [R-8, R-13], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "owner() on V2 core, hook, mirror and reflections is 0x7171E64E979265aeD6588577D1c6b60A701d7866 (ENS cruelhand.eth). Explorer marks it EIP-7702 delegated to SemiModularAccount7702 0x6900…e139. Verified source: owner can pause, ban non-EOA venue codehashes, transfer ownership, and (pre-launch only) wire routing.", class: verified, observed_at: 2026-09-03T00:33:00Z, receipt_ids: [R-6, R-8, R-12], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "blacklistGuardian() returns the same 0x7171…7866. Docs and source: guardian can freeze addresses and cannot unfreeze; recoveryAdmin can add or remove freezes and can adminTransferQuotron / adminTransferTerminal between non-protocol accounts.", class: verified, observed_at: 2026-09-03T00:33:00Z, receipt_ids: [R-2, R-12], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-15, field: control.threshold, value: "recoveryAdmin() 0x15277aA1ecC13734d57C519a2DAA1cc4A748bA89 is a SafeProxy (SafeL2). getThreshold() 2. getOwners() 0x7171…7866 and 0xd1de50b724de2e243d3f6f3c3ef1806babd39e58. Launch() requires getThreshold() >= 2. One of the two Safe owners is the same EIP-7702 owner key.", class: verified, observed_at: 2026-09-03T00:33:00Z, receipt_ids: [R-2, R-12, R-23], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-16, field: control.proxy, value: "V2 core, router, hook, mirror, reflections, quoter: Blockscout proxy_type null. Owner account proxy_type eip7702. Recovery admin is a Safe master_copy proxy.", class: verified, observed_at: 2026-09-03T00:32:00Z, receipt_ids: [R-6, R-9, R-10, R-23], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-17, field: control.timelock, value: "No timelock contract was named in docs or opened on the owner / guardian / Safe path this pass.", class: unknown, observed_at: 2026-09-03T00:42:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on the site, llms-full.txt, integration.md, X profile, DexScreener or GitHub brand-kit README.", class: unknown, observed_at: 2026-09-03T00:42:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: product.mechanism, value: "Docs: V1 retired after a stale-approval incident on its ERC-721 mirror. V2 is a new collection (mirror 0x027A…) with a snapshot zero-action distribution. OpenSea collection Quotrons404 is the V2 mirror; OpenSea collection quotrons is labelled QUOTRONS (Sunset).", class: claim, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-2, R-21, R-28], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "RPC totalSupply 1652e18 and totalHardwired 2792; 1652+2792=4444 and economicUnits() 4444e18. Burned share 2792/4444 = 62.83%. Blockscout holders_count 3649 (ERC-20) and 863 (ERC-721 mirror).", class: verified, observed_at: 2026-09-03T00:32:00Z, receipt_ids: [R-7, R-11, R-12], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-21, field: economics.metric, value: "DexScreener Uniswap v4 QUOTRON/WETH 0x0b142aaf…: liquidity.usd 408191.86, volume.h24 961782, priceUsd 5918.29, marketCap 9776980. That marketCap matches remaining liquid supply, not 4444 * price (about $26.3M).", class: claim, observed_at: 2026-09-03T00:35:00Z, receipt_ids: [R-13], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-22, field: identity.repository, value: "https://github.com/mavrkofficial/quotrons-brand-kit is the DexScreener-linked brand kit (README: official brand assets for Quotrons, links quotrons.cash). Solidity is explorer-verified under paths src/v2/*.sol; no public core repository was located this pass.", class: claim, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-13, R-14], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-23, field: relationship, value: "@cruelhandeth posted 2026-08-14 that the only two venues to trade $QUOTRONS are quotrons.cash Exchange and Sentry (sentry.trading swap URL with token 0x5a86…). Sentry is a separate launchpad name (@sentrylauncher), not in the census, and is not this slug.", class: claim, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: relationship, value: "Pond Street 2026-08-29: a Quotrons xStocks venue on Ink (quotrons.cash/xstocks) had run zero epochs and had not bridged the collection; lifetime Ink pool volume about $56,900. That is a second-chain venue, not the Robinhood V2 hook. @cruelhandeth bio reads shipping at @inkfndhq.", class: claim, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-18, R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: product.mechanism, value: "OpenSea collection overview for Quotrons404 still describes ten QUOTRON/stock Uniswap v4 pools and a 3% split of 2% / 0.425% / 0.425%. V2 docs and DexScreener show one canonical QUOTRON/WETH pool and a 2 / 0.6375 / 0.2125 / 0.15 split.", class: claim, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-2, R-13, R-22], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: other, value: "copypasta-pattern: OpenSea slug quotrons404 (lowercase) is a separate 10,000-item mint at 1.00 USDG (417 minted this pass), not the V2 mirror. OpenSea also lists PEPE QUOTRONS.", class: claim, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-27], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: activity.status, value: "isLaunched() true, paused() false on core and hook, transfersLocked() false at block 52951559. DexScreener v4 book 24h volume $961,782. Official account posted live OpenSea sales and hardwire/claim notices on 2026-09-02.", class: verified, observed_at: 2026-09-03T00:35:00Z, receipt_ids: [R-12, R-13, R-15], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-28, field: account.@Quotrons404.official, value: "Official X: @Quotrons404 bio links quotrons.cash; DexScreener token socials name x.com/quotrons404; site docs publish the same CA the handle's sale posts use.", class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-1, R-5, R-13], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-29, field: account.@QUOTRONGenesis.unconfirmed-official, value: "unconfirmed-official: @QUOTRONGenesis is a mint account; this pass treated @Quotrons404 as the official handle and did not use @QUOTRONGenesis as a primary surface.", class: claim, observed_at: 2026-09-03T00:42:00Z, receipt_ids: [R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-30, field: team.identity, value: "V2 creator and owner is 0x7171…7866, explorer ENS cruelhand.eth. GitHub org mavrkofficial publishes the brand kit. @cruelhandeth bio reads shipping at @inkfndhq. Legal entity Mavrk, Inc. was recorded in the 2026-08-31 intake and was not reproduced from a first-party legal page this pass.", class: claim, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-8, R-14, R-20], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-31, field: taxonomy.mechanism-tag, value: "nft, rwa, fee-routing, amm, stock-paired", class: inference, observed_at: 2026-09-03T00:42:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-32, field: taxonomy.secondary-leaf, value: rwa-products/stock-paired-token, class: inference, observed_at: 2026-09-03T00:42:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-33, field: communications.status, value: "2026-09-02 @Quotrons404 posted V2 #1087 sold for 8.5 ETH on OpenSea and that Pretovich claimed $955.01 from 73 hardwired terminals (USD from Blockscout marks).", class: claim, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-15, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-34, field: other, value: "@QuotronsDesktop was recorded in the 2026-08-31 intake as a 2026-09-01 mint at 0.20 USD; this pass's X user search did not return that handle's posts, so same-control-plane status stays open.", class: unknown, observed_at: 2026-09-03T00:42:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: product.mechanism
    claim_ids: [CLM-11, CLM-25]
    material_effect: "OpenSea overview still describes ten QUOTRON/stock pools (V1 copy). V2 docs, the integration manifest and DexScreener show one canonical QUOTRON/WETH Uniswap v4 pool and a different fee split. Mixing the two overstates how many books fund rewards."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: company
    title: "Account posts $955.01 claimed from 73 V2 terminals"
    summary: "@Quotrons404 posted Pretovich claimed $955.01 in tokenized-stock rewards from 73 V2 hardwired QUOTRONS."
    occurred_at: 2026-09-02T22:09:01Z
    observed_at: 2026-09-03T00:40:00Z
    affected_fields: [economics.metric, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-16]
  - id: EVT-2
    type: company
    title: "Account posts V2 #1087 sold for 8.5 ETH on OpenSea"
    summary: "@Quotrons404 posted QUOTRON V2 #1087 sold for 8.5 ETH on OpenSea to airdrop_please."
    occurred_at: 2026-09-02T21:09:32Z
    observed_at: 2026-09-03T00:40:00Z
    affected_fields: [activity.status, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-15]
  - id: EVT-3
    type: company
    title: "Account posts V2 terminal #3585 hardwired"
    summary: "@Quotrons404 posted QUOTRON V2 #3585 was hardwired and is eligible for tokenized-stock rewards."
    occurred_at: 2026-09-02T21:06:26Z
    observed_at: 2026-09-03T00:40:00Z
    affected_fields: [activity.status, product.mechanism]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-17]
  - id: EVT-4
    type: ct
    title: "cruelhandeth posts Sentry stock-pair launch path"
    summary: "@cruelhandeth posted that Sentry launcher has a stock-base-pair launch path, citing NFLX/CHILL on Robinhood."
    occurred_at: 2026-08-31T14:17:07Z
    observed_at: 2026-09-03T00:40:00Z
    affected_fields: [relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-20]
  - id: EVT-5
    type: ct
    title: "Pond Street: Ink xStocks venue at zero epochs"
    summary: "Pond Street wrote that Quotrons' xStocks venue on Ink had run zero epochs and had not bridged from Robinhood Chain."
    occurred_at: 2026-08-29T13:10:00Z
    observed_at: 2026-09-03T00:40:00Z
    affected_fields: [product.mechanism, relationship, lifecycle]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-18]
  - id: EVT-6
    type: company
    title: "cruelhandeth posts V1 Sunset collection retired"
    summary: "@cruelhandeth posted Sunset means the V1 collection was retired in the V1 to V2 migration."
    occurred_at: 2026-08-25T11:20:35Z
    observed_at: 2026-09-03T00:40:00Z
    affected_fields: [product.mechanism, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-28]
  - id: EVT-7
    type: company
    title: "cruelhandeth posts two official QUOTRON venues"
    summary: "@cruelhandeth posted the only two venues to trade $QUOTRONS are quotrons.cash Exchange and Sentry."
    occurred_at: 2026-08-14T02:17:17Z
    observed_at: 2026-09-03T00:40:00Z
    affected_fields: [relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-19]
  - id: EVT-8
    type: onchain
    title: "V2 core deployed and reports launched on 4663"
    summary: "Quotron404V2 0x5a86… was created 2026-08-13T15:14:36Z; isLaunched() is true with launchedAt 2026-08-13T18:30:51Z."
    occurred_at: 2026-08-13T15:14:36Z
    observed_at: 2026-09-03T00:32:00Z
    affected_fields: [deployment.address, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-6, R-8, R-12]

receipts:
  - { id: R-1, publisher: Quotrons, title: "QUOTRONS V2 llms.txt", url: "https://www.quotrons.cash/llms.txt", published_at: "2026-08-13T00:00:00Z", accessed_at: 2026-09-03T00:30:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-4, CLM-11, CLM-28], excerpt: "QUOTRONS is a 4,444-terminal ERC-404 collection on Robinhood Chain (chain id 4663). V2's supported market is one canonical QUOTRON/WETH Uniswap v4 pool. One whole liquid token materializes one dark terminal; burning its backing token hardwires that terminal into a permanent NFT. Hardwired terminals claim promotional rewards paid in one of ten tokenized stocks. V2 core: 0x5a86828Efd322bfb16d93cFeD16EE9BC14940D7F. Permanent base fee: 3%." }
  - { id: R-2, publisher: Quotrons, title: "QUOTRONS V2 complete reference", url: "https://www.quotrons.cash/llms-full.txt", published_at: "2026-08-13T00:00:00Z", accessed_at: 2026-09-03T00:31:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-6, CLM-7, CLM-11, CLM-14, CLM-15, CLM-19, CLM-25, CLM-31, CLM-32], excerpt: "V1 is permanently retired after a stale-approval exploit affecting its ERC-721 mirror. V2 is a separate collection. liquid ERC-20 supply + hardwired terminals x 1e18 = 4,444e18. Permanent base fee 3%: 2.0000% rewards, 0.6375% locked LP, 0.2125% STONKBROKERS buy and burn, 0.1500% creator. blacklist guardian 0x7171E64E979265aeD6588577D1c6b60A701d7866; recovery Safe 0x15277aA1ecC13734d57C519a2DAA1cc4A748bA89." }
  - { id: R-3, publisher: Quotrons, title: "Integrate QUOTRON swaps", url: "https://www.quotrons.cash/integration.md", published_at: "2026-08-14T00:00:00Z", accessed_at: 2026-09-03T00:31:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-11], excerpt: "Network Robinhood Chain, Chain ID 4663. QUOTRON 0x5a86828Efd322bfb16d93cFeD16EE9BC14940D7F. Canonical router 0x42024fCFdB4F3089Dd619A0cEF0Cd24E7b841C18. Canonical hook 0x62E200Cc8e4D95cf622f40Dd70f407C883EcB0cc. View quoter 0xb8960fdC8A0Be155d196C2795b75747763562df2. WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73. Pool ID 0x0b142aaf734f1b063355bfe854e282a13b26dcac86e2e564e74540f9b218d069." }
  - { id: R-4, publisher: Quotrons, title: "Integration manifest", url: "https://www.quotrons.cash/integration/manifest.json", published_at: "2026-08-14T00:00:00Z", accessed_at: 2026-09-03T00:31:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-4], excerpt: "schemaVersion 1, updatedAt 2026-08-14, chainId 4663. contracts.quotron 0x5a86828Efd322bfb16d93cFeD16EE9BC14940D7F, router 0x42024fCFdB4F3089Dd619A0cEF0Cd24E7b841C18, hook 0x62E200Cc8e4D95cf622f40Dd70f407C883EcB0cc, quoter 0xb8960fdC8A0Be155d196C2795b75747763562df2. canonicalPoolId 0x0b142aaf734f1b063355bfe854e282a13b26dcac86e2e564e74540f9b218d069." }
  - { id: R-5, publisher: Quotrons (@Quotrons404), title: "X profile @Quotrons404", url: "https://x.com/Quotrons404", published_at: "2026-08-14T09:46:39Z", accessed_at: 2026-09-03T00:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-28, CLM-29], excerpt: "Quotrons @Quotrons404. Bio: ERC-404 collection on @RobinhoodCrypto - 4,444 machines that carried stock prices through history. Trade. Hardwire. Print. Followers 5885. Verified Organization. Profile URL quotrons.cash. Joined 2026-08-14." }
  - { id: R-6, publisher: Blockscout, title: "Address 0x5a86…0D7F", url: "https://robinhoodchain.blockscout.com/address/0x5a86828Efd322bfb16d93cFeD16EE9BC14940D7F", published_at: null, accessed_at: 2026-09-03T00:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-9, CLM-10, CLM-13, CLM-16, EVT-8], excerpt: "hash 0x5a86828Efd322bfb16d93cFeD16EE9BC14940D7F, is_contract true, is_verified true, name QUOTRONS, proxy_type null, creator_address_hash 0x7171E64E979265aeD6588577D1c6b60A701d7866, creation_transaction_hash 0x222e4f9f70c27861cc7cde992d73f8ce19b1db1910978c27cdb99c3fd444b13c. Token QUOTRONS / QUOTRON, holders_count 3649, total_supply 1652000000000000000000, type ERC-20. Source Quotron404V2.sol, verified_at 2026-08-13T15:18:16Z." }
  - { id: R-7, publisher: Blockscout, title: "Token page QUOTRON V2", url: "https://robinhoodchain.blockscout.com/token/0x5a86828Efd322bfb16d93cFeD16EE9BC14940D7F", published_at: null, accessed_at: 2026-09-03T00:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-9, CLM-10, CLM-20], excerpt: "address_hash 0x5a86828Efd322bfb16d93cFeD16EE9BC14940D7F, name QUOTRONS, symbol QUOTRON, decimals 18, holders_count 3649, total_supply 1652000000000000000000, type ERC-20." }
  - { id: R-8, publisher: Blockscout, title: "V2 core creation tx 0x222e4f…", url: "https://robinhoodchain.blockscout.com/tx/0x222e4f9f70c27861cc7cde992d73f8ce19b1db1910978c27cdb99c3fd444b13c", published_at: "2026-08-13T15:14:36Z", accessed_at: 2026-09-03T00:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-12, CLM-13, CLM-30, EVT-8], excerpt: "status ok, timestamp 2026-08-13T15:14:36Z, block 35489899, from 0x7171E64E979265aeD6588577D1c6b60A701d7866 (ens_domain_name cruelhand.eth, proxy_type eip7702), created_contract 0x5a86828Efd322bfb16d93cFeD16EE9BC14940D7F name QUOTRONS." }
  - { id: R-9, publisher: Blockscout, title: "QuotronWethRouter 0x4202…", url: "https://robinhoodchain.blockscout.com/address/0x42024fCFdB4F3089Dd619A0cEF0Cd24E7b841C18", published_at: null, accessed_at: 2026-09-03T00:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "hash 0x42024fCFdB4F3089Dd619A0cEF0Cd24E7b841C18, is_contract true, is_verified true, name QuotronWethRouter, proxy_type null, creator_address_hash 0x7171E64E979265aeD6588577D1c6b60A701d7866, creation_transaction_hash 0x484a7ee76bedc75d7bb8351ab91f8e9d8a529f30e6bdd6a6d13c7a3ea7b14fe1, file_path src/v2/QuotronWethRouter.sol." }
  - { id: R-10, publisher: Blockscout, title: "QuotronWethHook 0x62E2…", url: "https://robinhoodchain.blockscout.com/address/0x62E200Cc8e4D95cf622f40Dd70f407C883EcB0cc", published_at: null, accessed_at: 2026-09-03T00:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "hash 0x62E200Cc8e4D95cf622f40Dd70f407C883EcB0cc, is_contract true, is_verified true, name QuotronWethHook, proxy_type null, creator_address_hash 0x4e59b44847b379578588920cA78FbF26c0B4956C, creation_transaction_hash 0x048c383f1cc346a29e53fce209a4c411224b4a8be25913b7ce60eda63152f2b5 timestamp 2026-08-13T15:14:47Z, file_path src/v2/QuotronWethHook.sol." }
  - { id: R-11, publisher: Blockscout, title: "QuotronMirrorV2 0x027A…", url: "https://robinhoodchain.blockscout.com/address/0x027ACa2794E44f24950D81227DcD516FfBB49d6e", published_at: null, accessed_at: 2026-09-03T00:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-20], excerpt: "hash 0x027ACa2794E44f24950D81227DcD516FfBB49d6e, is_contract true, is_verified true, name QuotronMirrorV2, creator_address_hash 0x5a86828Efd322bfb16d93cFeD16EE9BC14940D7F, creation_transaction_hash 0x222e4f9f70c27861cc7cde992d73f8ce19b1db1910978c27cdb99c3fd444b13c. Token QUOTRONS / QUOTRON type ERC-721, holders_count 863." }
  - { id: R-12, publisher: Robinhood Chain RPC, title: "eth_getCode, ERC-20 views, owner, launch gates, Safe", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T00:33:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-9, CLM-13, CLM-14, CLM-15, CLM-20, CLM-27, EVT-8], excerpt: "eth_chainId 0x1237. Token name QUOTRONS symbol QUOTRON totalSupply 1652e18 owner 0x7171…7866 isLaunched true paused false transfersLocked false launchedAt 1786637659 totalHardwired 2792 economicUnits 4444e18 blacklistGuardian 0x7171… recoveryAdmin 0x15277…. Hook paused false. Owner code 0xef0100…69007702764179f14f51cdce752f4f775d74e139. Safe getThreshold 2, owners 0x7171… and 0xd1de50b7…9e58." }
  - { id: R-13, publisher: DexScreener, title: "QUOTRON token pairs on Robinhood", url: "https://api.dexscreener.com/latest/dex/tokens/0x5a86828efd322bfb16d93cfed16ee9bc14940d7f", published_at: null, accessed_at: 2026-09-03T00:35:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-5, CLM-11, CLM-12, CLM-21, CLM-22, CLM-25, CLM-27, CLM-28], excerpt: "Uniswap v4 pair 0x0b142aaf734f1b063355bfe854e282a13b26dcac86e2e564e74540f9b218d069 QUOTRON/WETH liquidity.usd 408191.86 volume.h24 961782 priceUsd 5918.29 marketCap 9776980. info.websites https://quotrons.cash/ Docs Opensea Brand Kit github.com/mavrkofficial/quotrons-brand-kit. socials x.com/quotrons404. Extra v3 QUOTRON/USDG 0xb77e… vol 554632.44; Alandale QUOTRON/WETH vol 97992.26." }
  - { id: R-14, publisher: GitHub (mavrkofficial), title: "quotrons-brand-kit README", url: "https://github.com/mavrkofficial/quotrons-brand-kit", published_at: null, accessed_at: 2026-09-03T00:36:00Z, kind: repository, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-22, CLM-30], excerpt: "QUOTRONS Brand Kit. The official brand assets for Quotrons — 4444 machines, every price ever asked, on Robinhood Chain. The mark is the Quotron 800 terminal. These are the same files quotrons.cash ships. Usage: Use these files as they are, anywhere you're talking about Quotrons. quotrons.cash" }
  - { id: R-15, publisher: Quotrons (@Quotrons404), title: "V2 #1087 sold for 8.5 ETH", url: "https://x.com/Quotrons404/status/2095257843574116467", published_at: "2026-09-02T21:09:32Z", accessed_at: 2026-09-03T00:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-27, CLM-33, EVT-2], excerpt: "QUOTRON V2 #1087 sold for 8.5 ETH on OpenSea. Previous owner: 0x1d47…92f0 Recipient: airdrop_please https://opensea.io/collection/Quotrons404" }
  - { id: R-16, publisher: Quotrons (@Quotrons404), title: "Pretovich claimed $955.01", url: "https://x.com/Quotrons404/status/2095272811409338736", published_at: "2026-09-02T22:09:01Z", accessed_at: 2026-09-03T00:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-33, EVT-1], excerpt: "Pretovich claimed $955.01 in tokenized-stock rewards from 73 V2 hardwired QUOTRONS. USD estimate uses current Robinhood Chain Blockscout marks. https://opensea.io/collection/Quotrons404" }
  - { id: R-17, publisher: Quotrons (@Quotrons404), title: "V2 #3585 hardwired", url: "https://x.com/Quotrons404/status/2095257063844712866", published_at: "2026-09-02T21:06:26Z", accessed_at: 2026-09-03T00:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-3], excerpt: "QUOTRON V2 #3585 was hardwired by YauqjnaNkaoiqhbdkkxopapqlamanvc. It is permanently detached from its fungible backing and eligible for tokenized-stock rewards. https://opensea.io/collection/Quotrons404" }
  - { id: R-18, publisher: The Pond Street Ledger, title: "Quotrons burned 60% / Ink venue zero epochs", url: "https://www.pondstreetledger.com/quotrons-burned-supply-ink-stock-venue-zero-epochs", published_at: "2026-08-29T13:10:00Z", accessed_at: 2026-09-03T00:40:00Z, kind: news, authority: independent, authenticity: unconfirmed, supports: [CLM-24, EVT-5], excerpt: "The part worth reading twice is where the stocks actually trade. The collection is on Robinhood Chain. The tokenized equities are not. Quotrons runs eight Uniswap V4 pools there, pairing wrapped xStocks against USDG. The venue's page states that terminal fees are collecting onchain until the collection bridges to Ink. That bridge has not happened. The counter for epochs run reads zero, with zero WETH converted." }
  - { id: R-19, publisher: sergio (@cruelhandeth), title: "Build on QUOTRONS: two venues", url: "https://x.com/cruelhandeth/status/2088087531728306415", published_at: "2026-08-14T02:17:17Z", accessed_at: 2026-09-03T00:40:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-23, EVT-7], excerpt: "Today, the only two venues to trade the $QUOTRONS token are at quotrons.cash under the Exchange tab, and through Sentry. Network: Robinhood Chain. Chain ID: 4663. QUOTRON: 0x5a86828Efd322bfb16d93cFeD16EE9BC14940D7F. Canonical router: 0x42024fCFdB4F3089Dd619A0cEF0Cd24E7b841C18. Canonical pool ID: 0x0b142aaf734f1b063355bfe854e282a13b26dcac86e2e564e74540f9b218d069." }
  - { id: R-20, publisher: sergio (@cruelhandeth), title: "Sentry launcher stock-pair path", url: "https://x.com/cruelhandeth/status/2094429278058217776", published_at: "2026-08-31T14:17:07Z", accessed_at: 2026-09-03T00:40:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-24, CLM-30, EVT-4], excerpt: "sentry launcher (@sentrylauncher) has the first and only (afaik) launch path for tokens to deploy with stock base pairs that reward the tokens holders with dividends in the stock base pair. ex: NFLX/CHILL pair on @RobinhoodCrypto - ROTH/wSPYx on @inkonchain. Bio: shipping at @inkfndhq views, investments, and actions are my own." }
  - { id: R-21, publisher: OpenSea, title: "QUOTRONS collection Quotrons404", url: "https://opensea.io/collection/Quotrons404", published_at: null, accessed_at: 2026-09-03T00:40:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-19], excerpt: "QUOTRONS. By cruelhand. Robinhood Chain. 5% creator fee. Floor listings in ETH. Collection slug Quotrons404. Item pages resolve token contract robinhood/0x027aca2794e44f24950d81227dcd516ffbb49d6e." }
  - { id: R-22, publisher: OpenSea, title: "Quotrons404 overview (ten-pool copy)", url: "https://opensea.io/collection/Quotrons404/overview", published_at: null, accessed_at: 2026-09-03T00:40:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-25], excerpt: "QUOTRONS runs on Uniswap V4 hooks where the fee logic lives inside the pool itself. Every swap on any of the ten floors pays a 3% floor fee, and the hook splits it on the spot: 2% back to holders as reflections paid in that floor's real tokenized stock, 0.425% to buy and burn $STONKBROKERS, 0.425% compounded into permanently locked liquidity. Because $QUOTRON trades against ten different stocks in ten separate pools." }
  - { id: R-23, publisher: Blockscout, title: "Recovery Safe 0x15277…", url: "https://robinhoodchain.blockscout.com/address/0x15277aA1ecC13734d57C519a2DAA1cc4A748bA89", published_at: null, accessed_at: 2026-09-03T00:33:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-15, CLM-16], excerpt: "hash 0x15277aA1ecC13734d57C519a2DAA1cc4A748bA89, is_contract true, is_verified true, name SafeProxy, proxy_type master_copy, implementations SafeL2 0x29fcB43b46531BcA003ddC8FCB67FFE91900C762, creator_address_hash 0x4e1DCf7AD4e460CfD30791CCC4F9c8a4f820ec67." }
  - { id: R-24, publisher: Blockscout, title: "QuotronReflectionsV2 0xe04f…", url: "https://robinhoodchain.blockscout.com/address/0xe04fba61FD54Ba78Dd450A30d8Af40167aF5d3Ec", published_at: null, accessed_at: 2026-09-03T00:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [], excerpt: "hash 0xe04fba61FD54Ba78Dd450A30d8Af40167aF5d3Ec, is_contract true, is_verified true, name QuotronReflectionsV2, proxy_type null, creator_address_hash 0x7171E64E979265aeD6588577D1c6b60A701d7866, creation_transaction_hash 0x801cd3e38534b8a86f05466331ecadc81849db774929e3f1e0c07d6204bb4649 timestamp 2026-08-13T15:14:43Z." }
  - { id: R-25, publisher: Blockscout, title: "QuotronEpochConverter 0x24e6…", url: "https://robinhoodchain.blockscout.com/address/0x24e62Dd5C7058CC41ad9c5375C137460ea1Da2FE", published_at: null, accessed_at: 2026-09-03T00:33:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [], excerpt: "hash 0x24e62Dd5C7058CC41ad9c5375C137460ea1Da2FE, is_contract true, is_verified true, name QuotronEpochConverter, proxy_type null, creator_address_hash 0x7171E64E979265aeD6588577D1c6b60A701d7866." }
  - { id: R-26, publisher: Blockscout, title: "V1 QUOTRON 0x4068…", url: "https://robinhoodchain.blockscout.com/address/0x40686524e56AfF0F1446958725dCF6e6dA5381E6", published_at: null, accessed_at: 2026-09-03T00:33:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-19], excerpt: "hash 0x40686524e56AfF0F1446958725dCF6e6dA5381E6, is_contract true, is_verified true, name Quotron404, creator_address_hash 0x7171E64E979265aeD6588577D1c6b60A701d7866. Token QUOTRONS / QUOTRON type ERC-20, holders_count 526, total_supply 2323000000000000000000." }
  - { id: R-27, publisher: OpenSea, title: "Lowercase quotrons404 mint collection", url: "https://opensea.io/collection/quotrons404", published_at: null, accessed_at: 2026-09-03T00:40:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-26], excerpt: "QUOTRONS404 1.00 USDG. Minting now. Items minted 417 / 10,000. Public stage price $2.41, limit 10 total per wallet. Distinct from collection slug Quotrons404 (V2 mirror)." }
  - { id: R-28, publisher: sergio (@cruelhandeth), title: "Sunset means V1 retired", url: "https://x.com/cruelhandeth/status/2092210528194121745", published_at: "2026-08-25T11:20:35Z", accessed_at: 2026-09-03T00:40:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-19, EVT-6], excerpt: "Sunset means the collection has essentially been retired (since it was a V1 -> V2 migration). The 10 trading markets from the original design were paused as well." }

gaps:
  - { priority: P0, question: "Does QuotronEpochConverter on 4663 actually convert WETH into Robinhood Stock Tokens for hardwired terminals, and what is the live epoch counter versus the Ink xStocks page at /xstocks?", checked: "docs name converter 0x24e6… and ten RH stock routes; Pond Street 2026-08-29 said Ink epochs were zero and the collection had not bridged; site SPA did not expose live epoch JSON this pass", next: "eth_call converter views and open quotrons.cash/xstocks rendered state" }
  - { priority: P0, question: "Can the EIP-7702 owner key, which is also Safe owner 1 of 2, pause the core and also satisfy recoveryAdmin (threshold 2) with the second key 0xd1de…9e58?", checked: "owner() and blacklistGuardian() both 0x7171…; Safe getOwners includes that same key; no timelock named, 2026-09-03", next: "read Safe tx history and whether 0xd1de… is a distinct operator" }
  - { priority: P1, question: "Is there an audit whose scope matches Quotron404V2, the hook, router and recovery path?", checked: "llms-full.txt, integration.md, X profile, DexScreener, brand-kit README, 2026-09-03", next: "record any report URL as a claim when published" }
  - { priority: P1, question: "Does @QuotronsDesktop share this control plane, and did the 2026-09-01 mint ship?", checked: "X user search QuotronsDesktop returned no matching official profile this pass; 2026-08-31 intake still the only note", next: "resolve the handle and compare collection contract to 0x027A…" }
  - { priority: P2, question: "Is there a public Solidity repository beyond the brand kit?", checked: "DexScreener Brand Kit github.com/mavrkofficial/quotrons-brand-kit; explorer source paths src/v2/*.sol with no github_repository_metadata this pass", next: "leave explorer-verified source as the code receipt unless a core repo appears" }
  - { priority: P2, question: "Are the lowercase OpenSea slug quotrons404 and PEPE QUOTRONS operated by this team?", checked: "slug collision and 10,000-item mint vs 4,444 V2 mirror, 2026-09-03", next: "leave unmerged unless a primary post links those collections" }
---

# Quotrons — research packet

## What it is

An ERC-404 collection of 4,444 terminals: one liquid QUOTRON materializes a dark NFT, and burning that token hardwires the NFT so it can claim Stock Token rewards from a 3% Uniswap v4 QUOTRON/WETH fee. Trade on quotrons.cash, hardwire a terminal, and claim NVDA, AAPL, TSLA, GME, SPCX, SPY, PLTR, NFLX, RDDT or MSTR. @Quotrons404 runs the app.

Themes: nft, rwa, stock-paired:NVDA, hook

## Why it matters

Quotrons is a live ERC-404 fee machine on chain 4663: hardwiring burns supply into a 4,444-unit NFT set, and the canonical Uniswap v4 QUOTRON/WETH book is the only supported swap path. [verified R-6 R-12 R-13]

That book printed about $0.41M of liquidity and $0.96M of 24h volume at fetch, with 2,792 of 4,444 units already hardwired. [claim R-13] [verified R-12]

The 0.2125% STONKBROKER buy-and-burn and the 1.25x Broker weight check sit next to StonkBrokers without sharing that collection's contracts. [claim R-2]

## What could go wrong

The V2 owner and blacklist guardian are the same EIP-7702 account, and that key is also one of two Safe owners on the recovery admin that can move user QUOTRON and terminals. [verified R-12 R-23]

OpenSea overview still describes the retired ten-pool V1 design. Pairing that copy with the live V2 router overstates how rewards are funded. [claim R-22 R-2]

A Pond Street piece dated 2026-08-29 said an Ink xStocks venue tied to the same operator had run zero epochs. That is a second chain, not a reason to merge this slug with Sentry. [claim R-18 R-20]

## Product and mechanics

QUOTRON is a 4,444-unit ERC-404 named QUOTRONS / QUOTRON, 18 decimals. Verified source is Quotron404V2.sol. One whole liquid token materializes a dark terminal; selling below a whole unit dissolves it; `hardwire(id)` burns 1e18 and leaves a permanent ERC-721. RPC at this pass: totalSupply 1,652, totalHardwired 2,792, economicUnits 4,444e18. [verified R-6 R-12] [claim R-2]

The supported market is one Uniswap v4 QUOTRON/WETH pool (pool id 0x0b142aaf…d069, quote WETH 0x0Bd7…AD73). Swaps go user -> QuotronWethRouter 0x4202… -> that pool; the hook rejects other senders. Docs set a 3% WETH-side fee: 2% stock rewards, 0.6375% locked LP, 0.2125% STONKBROKER buy-and-burn, 0.15% creator. Ten stocks are conversion routes, not ten QUOTRON pools. Extra Uniswap v3 QUOTRON/USDG and Alandale QUOTRON/WETH books exist outside that canonical path. [claim R-2 R-3] [verified R-13]

V1 at 0x4068… is a separate Quotron404 deployment. Docs and @cruelhandeth call it Sunset after a stale-approval incident on the V1 mirror; V2 mirror 0x027A… is a new ERC-721. Launchpad is none: the V2 core was created by 0x7171…7866, not a pad factory. Pair asset on the canonical book is WETH. Venue is Uniswap v4. [claim R-2 R-28] [verified R-8 R-13]

## Control and security

`owner()` on the V2 core, hook, mirror and reflections is 0x7171E64E979265aeD6588577D1c6b60A701d7866 (cruelhand.eth). Blockscout marks it EIP-7702, delegating to SemiModularAccount7702. Verified source lets that owner pause, ban non-EOA venue codehashes and transfer ownership. `paused()` was false on core and hook. No timelock was opened. [verified R-6 R-12]

`blacklistGuardian()` returns the same 0x7171… key. `recoveryAdmin()` is SafeProxy 0x15277…Ba89, threshold 2, owners 0x7171… and 0xd1de50b7…9e58. Docs and source: the guardian can freeze and cannot unfreeze; the Safe can move eligible user balances and terminals. Those are disclosed trust assumptions, not a second independent owner. [verified R-2 R-12 R-23]

Metadata is frozen (`metadataFrozen()` true). Routing addresses match the docs (canonicalRouter, floorHook, Uniswap v4 PoolManager 0x8366…). No audit report URL was located. [verified R-12] [unknown]

## Team and provenance

@Quotrons404 bio links quotrons.cash and names an ERC-404 collection on Robinhood. DexScreener token socials name the same handle and site. GitHub org mavrkofficial publishes the brand kit that the README calls official and that DexScreener lists. [verified R-5 R-13 R-14]

The V2 deployer and owner is cruelhand.eth. @cruelhandeth bio reads shipping at @inkfndhq and posted that Sentry and quotrons.cash Exchange are the two QUOTRON venues. That is a relationship, not a merge: Sentry is a launchpad handle, not in the census, and is not this slug. [claim R-8 R-19 R-20]

unconfirmed-official: @QUOTRONGenesis is a mint account not used as official here. @QuotronsDesktop was not resolved this pass. [claim R-5] [unknown]

Census StonkBrokers, The Index and LONG share stock-reward wording only. [inference R-2]

## Economics and activity

DexScreener Uniswap v4 QUOTRON/WETH 0x0b142aaf… at 2026-09-03T00:35:00Z: liquidity.usd 408191.86; volume.h24 961782; priceUsd 5918.29; marketCap 9776980. That marketCap tracks remaining liquid supply (~1,652 × price), not 4,444 × price (~$26.3M). Extra pair 24h volume is not included in the $961,782 figure. [claim R-13]

On-chain inventory: 1,652 liquid, 2,792 hardwired, invariant 4,444. ERC-20 holders_count 3,649; ERC-721 mirror holders_count 863. [verified R-7 R-11 R-12]

@Quotrons404 posted an 8.5 ETH OpenSea sale of V2 #1087 and a $955.01 claim from 73 hardwired terminals on 2026-09-02. Those USD marks were not summed from logs this pass. DefiLlama has no quotrons protocol row. [claim R-15 R-16]

## Material risks

- Owner, blacklist guardian and Safe signer 1 are the same EIP-7702 key; recovery can move user terminals. [verified R-12 R-23]

- OpenSea overview still describes ten QUOTRON/stock pools (V1). [claim R-22]

- Ink xStocks venue and Sentry swap are related surfaces, not this collection's 4663 contracts. [claim R-18 R-19]

- No audit report was located. [unknown]

- Lowercase OpenSea slug quotrons404 is a different 10,000-item mint. [claim R-27]

## Verification passes

- Receipts: llms.txt, llms-full.txt, integration.md, manifest.json, X profile and four posts, Pond Street, OpenSea V2 / overview / lowercase mint, GitHub brand kit, Blockscout token/tx/router/hook/mirror/reflections/converter/Safe/V1, DexScreener token API, and RPC calls were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-2 R-6 R-12 R-13]

- Numbers: DexScreener volume and marketCap are Uniswap v4 QUOTRON/WETH 0x0b142aaf…, not all QUOTRON pairs. Holders 3649 is the ERC-20 token. Hardwired 2792 and liquid 1652 are RPC views that satisfy the 4,444 invariant. Site dashboard census figures were not copied from the SPA shell. [claim R-7 R-13] [verified R-12]

- Adversarial: the strongest contrary reading is that Quotrons is the Ink xStocks venue, or Sentry, or StonkBrokers, because @cruelhandeth ships at Ink, posted Sentry as a QUOTRON venue, and V2 fees buy STONKBROKER. The 4663 collection, router and Uniswap v4 pool id are distinct from Sentry and from StonkBrokers 0x539c…; Pond Street itself splits the Ink venue from the Robinhood collection. A weaker contrary reading is that V2 still trades ten stock pools: OpenSea overview says that, DexScreener and the manifest show one WETH pool. [inference R-13 R-18 R-19 R-22]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census row quotrons (lifecycle announced), content/projects/quotrons.yaml, content/pulled/quotrons.yaml (pulled_at 2026-09-02T21:05:36Z, head 52877457, token 0x5a86… holders 3653, v4 pair liq 419412 vol 1005708), feed/quotrons.yaml, sources/quotrons.yaml and research/quotrons.md read before collection.
- Lifecycle: census announced; pulled file already had a 4663 pool. This packet reproduces the token, router, hook and DexScreener v4 book and sets lifecycle mainnet.
- Site: https://quotrons.cash → https://www.quotrons.cash/ (SPA shell 1786 bytes). llms.txt, llms-full.txt, integration.md, manifest.json, migration/v1-historical-rewards.json opened. /xstocks is the same SPA; Pond Street used as the Ink-venue receipt.
- X: profile @Quotrons404 (5885 followers); posts 2095272811409338736, 2095257843574116467, 2095257063844712866; @cruelhandeth 2088087531728306415, 2092210528194121745, 2094429278058217776. User search QuotronsDesktop returned no matching profile this pass.
- Explorer: Blockscout api/v2 with a browser User-Agent. Token, token page, creation tx, router, hook, mirror, reflections, quoter, epoch converter, V1 token, Safe, owner implementation.
- RPC: https://rpc.mainnet.chain.robinhood.com eth_chainId, eth_getCode, name/symbol/decimals/totalSupply/owner/isLaunched/paused/totalHardwired/economicUnits/blacklistGuardian/recoveryAdmin/launchedAt/canonicalRouter/floorHook/poolManager/metadataFrozen/emergencyControlsConfigured/transfersLocked; Safe getThreshold/getOwners. Chain head at first read: 52951559.
- DexScreener latest/dex/tokens for 0x5a86…. api.llama.fi/protocol/quotrons → Protocol not found.
- GitHub mavrkofficial/quotrons-brand-kit README. OpenSea Quotrons404, overview, lowercase quotrons404.
- Sentry is not a census slug, so it is not in possible_matches; recorded as a relationship only. Ink xStocks is a related venue, not merged.
- Possible matches recorded: stonkbroker, index, long.
