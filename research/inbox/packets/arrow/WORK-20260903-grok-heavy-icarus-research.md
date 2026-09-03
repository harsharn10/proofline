---
# Packet v2 (docs/research-system.md §5). Collector full-tier for Icarus.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: arrow
name: Arrow Finance
packet_tier: full
as_of: 2026-09-02T23:15:00Z
prior_packet: null
supersedes: null
owned_slugs: [arrow]
allowed_paths:
  - research/inbox/packets/arrow/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Arrow Finance
  aliases: [Arrow, ArrowPad]
  symbols: [ARROW, aUSD]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://www.arrowfinance.io
  official_handle: "@ArrowFinanceio"
  repository: "NULL — github.com/arrowfinanceio returned 404; no repository URL on the site, docs, X bio or Linktree this pass"
  possible_matches:
    - slug: arrows
      signals: [other]
      contrary_signals:
        - "Census Arrows is an options protocol at arrows.finance / @arrowsonhood with token 0xD71b7b4e1dc16BD6938D3F235A68aa8ab1CF4F0e"
        - "Arrow Finance is a CDP minting aUSD at arrowfinance.io / @ArrowFinanceio with token 0xf2915d1e3C1B0c769d0c756Ec43F1c1f6c99cD03"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: credit/cdp
  secondary_leaves: [launch/bonding-curve]
  mechanism_tags: [lending, collateralized-debt, stablecoin, rwa, launchpad, bonding-curve]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: full
  evidence_state: partly-verified
  rationale: "Primary product is an overcollateralized CDP that mints aUSD against one approved asset per vault. ArrowPad is a second product under the same brand, not the identity. ARROW, aUSD and the Launchpad factory were opened on Blockscout 4663 this pass; eth_getCode is non-empty on all three. Vault-manager / stability-pool addresses are not published. [R-2] [R-8] [R-10] [R-12] [R-26]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-7, CLM-8], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-5, CLM-28], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-11, CLM-26, CLM-30], note: "" }

links:
  - { kind: site, url: "https://www.arrowfinance.io", authenticity: confirmed }
  - { kind: app, url: "https://app.arrowfinance.io", authenticity: confirmed }
  - { kind: app, url: "https://staking.arrowfinance.io", authenticity: confirmed }
  - { kind: app, url: "https://cdp.arrowfinance.io", authenticity: confirmed }
  - { kind: docs, url: "https://www.arrowfinance.io/docs", authenticity: confirmed }
  - { kind: docs, url: "https://app.arrowfinance.io/docs", authenticity: confirmed }
  - { kind: x, url: "https://x.com/ArrowFinanceio", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/arrowfinanceio", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/arrowfinanceupdates", authenticity: confirmed }

deployments:
  - label: ARROW token (ArrowToken)
    role: token
    address:
      value: "0xf2915d1e3C1B0c769d0c756Ec43F1c1f6c99cD03"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-8, R-9, R-26]
  - label: aUSD (Arrow USD)
    role: token
    address:
      value: "0x4f11d7603D1B0D0f021Db552D8A6d88d7fa38ecf"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-7, R-10, R-11]
  - label: ArrowPad launch factory (Launchpad)
    role: factory
    address:
      value: "0x1Badc838AAe6ac41829180744ea2e1C89b452aAe"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-12]
  - label: ARROW/WETH Uniswap v3 pool
    role: other
    address:
      value: "0xd1FAf86966b362626a91DDa50E6913c14c02Ef5f"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-13, R-15]
  - label: aUSD liquidity pool on up v3
    role: other
    address:
      value: "0x29e3f3d9891cacf213361bcbcb7728970d53baa8"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: null
    receipt_ids: [R-7, R-14, R-18]
  - label: CDP core (vault manager / stability pool)
    role: vault
    address:
      value: "NULL — no vault-manager, stability-pool or liquidator address on docs, site, buy page, Linktree or explorer labels this pass"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: null
      explorer_source_verified: null
    receipt_ids: [R-2, R-4]

metrics:
  - { kind: holders, value: 7328, currency: null, as_of: 2026-09-02T22:52:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xf2915d1e3C1B0c769d0c756Ec43F1c1f6c99cD03 holders_count", class: claim, receipt_ids: [R-9] }
  - { kind: volume_24h, value: 100896.87, currency: USD, as_of: 2026-09-02T22:52:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/pairs/robinhood/0xd1FAf86966b362626a91DDa50E6913c14c02Ef5f volume.h24 ARROW/WETH Uniswap v3", class: claim, receipt_ids: [R-15] }
  - { kind: market_cap, value: 6199196, currency: USD, as_of: 2026-09-02T22:52:00Z, window: point, method: "api.dexscreener.com/latest/dex/pairs/robinhood/0xd1FAf86966b362626a91DDa50E6913c14c02Ef5f marketCap", class: claim, receipt_ids: [R-15] }
  - { kind: tvl, value: 58257.41, currency: USD, as_of: 2026-09-02T23:00:00Z, window: point, method: "staking.arrowfinance.io/app read-only Total value locked, no wallet connected", class: claim, receipt_ids: [R-5] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-02T22:55:00Z, receipt_ids: [R-8, R-9, R-26], result: "api/v2/addresses/0xf2915d1e3C1B0c769d0c756Ec43F1c1f6c99cD03 is_contract true, is_verified true, name ArrowToken, proxy_type null, creator_address_hash 0xcCf14f0A63C2b19b17FAdF89ABE58a517cb90A2f (EOA), creation_transaction_hash 0x0abe3ca4bbc37aaa57297ca6c6efcefe3590d2479a49245ed1b5b8f6c6939735; token symbol ARROW, holders_count 7328, total_supply 1e25; eth_getCode non-empty (25000 hex chars); eth_call name() Arrow, symbol() ARROW, totalSupply() 10000000000000000000000000, owner() 0x0 at rpc.mainnet.chain.robinhood.com block 0x327cbde" }
  - { id: REP-2, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-02T22:55:00Z, receipt_ids: [R-10, R-11], result: "api/v2/addresses/0x4f11d7603D1B0D0f021Db552D8A6d88d7fa38ecf is_contract true, is_verified false, name Arrow USD, same creator 0xcCf14f0A63C2b19b17FAdF89ABE58a517cb90A2f; token symbol aUSD, holders_count 26, total_supply 42332575323870183336822; eth_getCode non-empty (12434 hex chars); eth_call name() Arrow USD, symbol() aUSD; owner() reverts" }
  - { id: REP-3, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-02T22:55:00Z, receipt_ids: [R-12], result: "api/v2/addresses/0x1Badc838AAe6ac41829180744ea2e1C89b452aAe is_contract true, is_verified true, name Launchpad, creator_address_hash 0xCB962B93BDCcC7156B683Cc01AD34306c2D67929; eth_getCode non-empty (32842 hex chars); eth_call owner() 0xcb962b93bdccc7156b683cc01ad34306c2d67929" }
  - { id: REP-4, method: api, chain_id: 4663, checked_at: 2026-09-02T22:52:00Z, receipt_ids: [R-15, R-16], result: "DexScreener pair 0xd1FAf86966b362626a91DDa50E6913c14c02Ef5f: dexId uniswap labels v3, chainId robinhood, base ARROW 0xf2915d1e3C1B0c769d0c756Ec43F1c1f6c99cD03, quote WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73, liquidity.usd 3787458.75, volume.h24 100896.87, priceUsd 0.6887, fdv 6887996, marketCap 6199196. V2 pair 0xE40d98D88038e0B844f844dce6Ae3c79ec01ec53 liquidity.usd 296487.25 volume.h24 422219.72" }
  - { id: REP-5, method: official-crosslink, checked_at: 2026-09-02T23:10:00Z, receipt_ids: [R-1, R-3, R-6, R-7], result: "@ArrowFinanceio bio links linktr.ee/arrowfinanceio; Linktree lists Website https://www.arrowfinance.io, Documentation https://arrowfinance.io/docs, $ARROW Contract 0xf2915d1e3c1b0c769d0c756ec43f1c1f6c99cd03, $aUSD Contract 0x4f11d7603d1b0d0f021db552d8a6d88d7fa38ecf, Telegram, and CDP Lending; buy page publishes the same ARROW address and Blockscout token link" }
  - { id: REP-6, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-02T22:55:00Z, receipt_ids: [R-13, R-14], result: "api/v2/addresses/0xd1FAf86966b362626a91DDa50E6913c14c02Ef5f is_contract true, is_verified true, name UniswapV3Pool, creator 0x1f7d7550B1b028f7571E69A784071F0205FD2EfA; eth_getCode non-empty (44286 hex chars). api/v2/addresses/0x29e3F3d9891cAcF213361Bcbcb7728970D53BaA8 is_contract true, is_verified true, proxy_type eip1167, implementation CLPool 0x11725976BF1F38c4aB78d1F480bc5883d70D9dc3" }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Overcollateralized CDP on Robinhood Chain: one vault holds one approved collateral asset against one aUSD debt; mint up to the market LTV, repay to release collateral; Stability Pool burns aUSD to clear liquidatable vaults", class: claim, observed_at: 2026-09-02T23:10:00Z, receipt_ids: [R-1, R-2, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://www.arrowfinance.io", class: verified, observed_at: 2026-09-02T23:10:00Z, receipt_ids: [R-1, R-6, R-7], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@ArrowFinanceio", class: verified, observed_at: 2026-09-02T23:10:00Z, receipt_ids: [R-6, R-7], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xf2915d1e3C1B0c769d0c756Ec43F1c1f6c99cD03", class: verified, observed_at: 2026-09-02T22:55:00Z, receipt_ids: [R-3, R-8, R-26], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-5, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-02T22:55:00Z, receipt_ids: [R-3, R-8, R-12, R-26], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-6, field: identity.symbol, value: "ARROW", class: verified, observed_at: 2026-09-02T22:55:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-7, field: deployment.address, value: "0x4f11d7603D1B0D0f021Db552D8A6d88d7fa38ecf", class: verified, observed_at: 2026-09-02T22:55:00Z, receipt_ids: [R-7, R-10], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-8, field: deployment.address, value: "0x1Badc838AAe6ac41829180744ea2e1C89b452aAe", class: verified, observed_at: 2026-09-02T22:55:00Z, receipt_ids: [R-4, R-12], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-9, field: control.owner, value: "0x0000000000000000000000000000000000000000", class: verified, observed_at: 2026-09-02T22:55:00Z, receipt_ids: [R-8, R-26], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-10, field: control.owner, value: "0xcb962b93bdccc7156b683cc01ad34306c2d67929", class: verified, observed_at: 2026-09-02T22:55:00Z, receipt_ids: [R-12], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: security.audit, value: "Official posts name a Sherlock / Blackthorn review of the CDP; no Sherlock report URL on site, docs, buy page or Linktree this pass", class: claim, observed_at: 2026-09-02T23:10:00Z, receipt_ids: [R-2, R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-12, field: security.audit, value: "In-app launchpad docs call the pad a permissioned fork of DegenX and link a PeckShield report on the original DegenX contracts, not an Arrow-scoped report", class: claim, observed_at: 2026-09-02T23:10:00Z, receipt_ids: [R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-13, field: taxonomy.primary-leaf, value: "credit/cdp", class: claim, observed_at: 2026-09-02T23:10:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-14, field: product.mechanism, value: "ArrowPad sells a 1 billion fixed-supply token along a bonding curve (docs: 800 million on the curve, 200 million seeds a locked Uniswap V3 pool at graduation); factory 0x1Badc838… is Ownable Launchpad, not the CDP", class: claim, observed_at: 2026-09-02T23:10:00Z, receipt_ids: [R-4, R-12], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-15, field: economics.metric, value: 7328, class: verified, observed_at: 2026-09-02T22:52:00Z, receipt_ids: [R-9], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-16, field: economics.metric, value: 3787458.75, class: verified, observed_at: 2026-09-02T22:52:00Z, receipt_ids: [R-15], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-17, field: economics.metric, value: 100896.87, class: verified, observed_at: 2026-09-02T22:52:00Z, receipt_ids: [R-15], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-18, field: identity.repository, value: "NULL — github.com/arrowfinanceio returned 404; no repository URL on site, docs, X bio or Linktree", class: claim, observed_at: 2026-09-02T23:10:00Z, receipt_ids: [R-22], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: relationship, value: "Distinct from census slug arrows (options, arrows.finance / @arrowsonhood / 0xD71b7b4e1dc16BD6938D3F235A68aa8ab1CF4F0e)", class: claim, observed_at: 2026-09-02T23:10:00Z, receipt_ids: [R-3, R-8], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-20, field: product.mechanism, value: "www.arrowfinance.io/docs §2.1: the current deployment runs 24 live markets (WETH, USDG, 11 Tier 1, 11 Tier 2)", class: claim, observed_at: 2026-09-02T23:10:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: product.mechanism, value: "staking.arrowfinance.io/app header All 24 collateral markets; funded rows this pass were WETH, USDG and AAPL; remaining equity rows displayed Coming soon", class: claim, observed_at: 2026-09-02T23:00:00Z, receipt_ids: [R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: product.mechanism, value: "Docs live LTV / liq threshold: WETH 75/82, USDG 90/95, Tier 1 55/65, Tier 2 40/52", class: claim, observed_at: 2026-09-02T23:10:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: product.mechanism, value: "Borrow app this pass: WETH 70% LTV / 80% liq, USDG 80/88, AAPL 50/62", class: claim, observed_at: 2026-09-02T23:00:00Z, receipt_ids: [R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: economics.metric, value: 42332.57532387018, class: verified, observed_at: 2026-09-02T22:55:00Z, receipt_ids: [R-11], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-25, field: economics.metric, value: 30435.19, class: claim, observed_at: 2026-09-02T23:00:00Z, receipt_ids: [R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: deployment.address, value: "NULL — CDP vault-manager, stability-pool and liquidator addresses not published", class: claim, observed_at: 2026-09-02T23:10:00Z, receipt_ids: [R-2, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: deployment.address, value: "Buy page and Linktree publish ARROW 0xf2915d1e3C1B0c769d0c756Ec43F1c1f6c99cD03 as the contract to trade", class: verified, observed_at: 2026-09-02T23:10:00Z, receipt_ids: [R-3, R-7], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-28, field: taxonomy.chain-scope, value: "robinhood-native", class: claim, observed_at: 2026-09-02T23:10:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-29, field: economics.metric, value: "DefiLlama has ArrowPad and ArrowPad.fun launchpad rows and no Arrow Finance CDP protocol row", class: claim, observed_at: 2026-09-02T23:05:00Z, receipt_ids: [R-21, R-27], reproduction_ids: [], supersedes: null }
  - { id: CLM-30, field: control.privileged-role, value: "Launchpad owner() is EOA 0xcb962b93bdccc7156b683cc01ad34306c2d67929; verified source exposes onlyOwner setters for implementations, curve, treasury, fees, creation cost and access registry, with no timelock", class: verified, observed_at: 2026-09-02T22:55:00Z, receipt_ids: [R-12, R-4], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-31, field: product.mechanism, value: "Verified ArrowToken source: 10M fixed supply, owner-settable buy/sell tax 0–15% (constructor 1%/1%), launch() seeds an ARROW/WETH Uniswap V2 pair; owner() is now the zero address so those setters cannot fire", class: verified, observed_at: 2026-09-02T22:55:00Z, receipt_ids: [R-26], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-32, field: identity.handle, value: "Linktree lists Telegram https://t.me/arrowfinanceio (Arrow Finance: Portal, 1285 subscribers) and Announcements https://t.me/arrowfinanceupdates", class: claim, observed_at: 2026-09-02T23:10:00Z, receipt_ids: [R-7, R-23], reproduction_ids: [], supersedes: null }
  - { id: CLM-33, field: "account.@ArrowFinanceio.official", value: "X bio links Linktree; Linktree lists the site, docs, CDP app, ARROW and aUSD addresses", class: verified, observed_at: 2026-09-02T23:10:00Z, receipt_ids: [R-6, R-7], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-34, field: product.mechanism, value: "@ArrowFinanceio posted syrupUSDG is live on Arrow as collateral, linking cdp.arrowfinance.io", class: claim, observed_at: 2026-09-02T23:10:00Z, receipt_ids: [R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-35, field: activity.status, value: "@ArrowFinanceio posted Arrow has officially been whitelisted on @uponrh with the aUSD/USDG gauge now approved, linking up v3 pool 0x29e3…", class: claim, observed_at: 2026-09-02T23:10:00Z, receipt_ids: [R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-36, field: product.mechanism, value: "In-app launchpad docs say token creation is permissionless; verified Launchpad source gates createLaunchpadToken through AccessRegistry.isTokenCreationAllowed", class: disputed, observed_at: 2026-09-02T23:10:00Z, receipt_ids: [R-4, R-12], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-37, field: identity.symbol, value: "aUSD", class: verified, observed_at: 2026-09-02T22:55:00Z, receipt_ids: [R-11], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-38, field: other, value: "ARROW was created by EOA 0xcCf14f0A63C2b19b17FAdF89ABE58a517cb90A2f, not by the ArrowPad factory; pair asset is WETH; venues are Uniswap V2 0xE40d98… (buy-page DexScreener link) and Uniswap V3 0xd1FA… (deeper book)", class: verified, observed_at: 2026-09-02T22:55:00Z, receipt_ids: [R-3, R-8, R-15, R-16], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-39, field: control.timelock, value: "Docs §6: veARROW Governor plus Timelock is planned, not live; until governance launches, the project states the team manages parameters", class: claim, observed_at: 2026-09-02T23:10:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-40, field: "account.@ArrowFinanceHQ.unconfirmed-official", value: "Prior source ledger flagged @ArrowFinanceHQ and @arrowfinances as unconfirmed; this pass treated only @ArrowFinanceio, which Linktree and the site loop confirm", class: claim, observed_at: 2026-09-02T23:10:00Z, receipt_ids: [R-6, R-7], reproduction_ids: [], supersedes: null }

conflicts:
  - { id: CON-1, field: product.mechanism, claim_ids: [CLM-20, CLM-21], material_effect: true, status: open, resolution: null }
  - { id: CON-2, field: product.mechanism, claim_ids: [CLM-22, CLM-23], material_effect: true, status: open, resolution: null }
  - { id: CON-3, field: economics.metric, claim_ids: [CLM-24, CLM-25], material_effect: true, status: open, resolution: null }
  - { id: CON-4, field: product.mechanism, claim_ids: [CLM-14, CLM-36], material_effect: "Docs call creation permissionless; verified factory source requires AccessRegistry allowance", status: open, resolution: null }

events:
  - id: EVT-1
    type: company
    title: "aUSD/USDG gauge approved on up"
    summary: "@ArrowFinanceio posted Arrow has officially been whitelisted on @uponrh with the aUSD/USDG gauge now approved."
    occurred_at: 2026-09-01T23:17:00Z
    observed_at: 2026-09-02T23:10:00Z
    affected_fields: [activity.status, relationship]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-18]
  - id: EVT-2
    type: company
    title: "syrupUSDG listed as Arrow collateral"
    summary: "@ArrowFinanceio posted syrupUSDG is live on Arrow as collateral, linking cdp.arrowfinance.io."
    occurred_at: 2026-09-01T19:17:00Z
    observed_at: 2026-09-02T23:10:00Z
    affected_fields: [product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-19]
  - id: EVT-3
    type: company
    title: "Rialto Swap API to be embedded in Arrow"
    summary: "@ArrowFinanceio posted it will embed @rialto_xyz Swap API in the Arrow interface."
    occurred_at: 2026-09-01T16:00:00Z
    observed_at: 2026-09-02T23:10:00Z
    affected_fields: [product.mechanism, relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-25]
  - id: EVT-4
    type: company
    title: "Official account posted Arrow CDP v1 is Now Live"
    summary: "@ArrowFinanceio posted Arrow CDP v1 is Now Live with a link to staking.arrowfinance.io."
    occurred_at: 2026-08-31T13:29:00Z
    observed_at: 2026-09-02T23:10:00Z
    affected_fields: [lifecycle, activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-17]
  - id: EVT-5
    type: onchain
    title: "ARROW/WETH Uniswap v3 pool ~$3.79M liquidity"
    summary: "DexScreener ARROW/WETH Uniswap v3 pair liquidity.usd 3787458.75, volume.h24 100896.87."
    occurred_at: 2026-09-02T22:52:00Z
    observed_at: 2026-09-02T22:52:00Z
    affected_fields: [economics.metric, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-15]
  - id: EVT-6
    type: risk
    title: "Docs 24 live markets versus app Coming soon rows"
    summary: "Docs section 2.1 lists 24 live markets; the borrow app lists most equity rows as Coming soon."
    occurred_at: 2026-09-02T23:00:00Z
    observed_at: 2026-09-02T23:10:00Z
    affected_fields: [product.mechanism]
    evidence_state: disputed
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-2, R-5]
  - id: EVT-7
    type: company
    title: "Sherlock review and 16-market open dated 8/31"
    summary: "@ArrowFinanceio posted mainnet 8/31 9:30 AM ET after a final review process with @sherlockdefi."
    occurred_at: 2026-08-30T22:15:00Z
    observed_at: 2026-09-02T23:10:00Z
    affected_fields: [security.audit, lifecycle]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-20]

receipts:
  - { id: R-1, publisher: Arrow Finance, title: "Homepage", url: "https://www.arrowfinance.io/", published_at: null, accessed_at: 2026-09-02T23:00:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-13], excerpt: "Overcollateralized CDP on Robinhood Chain. Borrow Live: Mint aUSD against Stock Tokens and other supported assets, without selling a share. Launch Live. Open a Vault and Mint aUSD in One Step. Liquidations Handled by the Stability Pool. ARROW is the fixed-supply governance token." }
  - { id: R-2, publisher: Arrow Finance, title: "Protocol documentation", url: "https://www.arrowfinance.io/docs", published_at: null, accessed_at: 2026-09-02T23:05:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-11, CLM-20, CLM-22, CLM-26, CLM-28, CLM-39, EVT-6], excerpt: "Single-chain overcollateralized CDP on Robinhood Chain. Users deposit approved collateral into a vault and mint aUSD. §2.1: 24 live markets; WETH 75/82, USDG 90/95, Tier 1 55/65, Tier 2 40/52. §4.2 market-hours handling planned, not yet active. §6 veARROW coming soon. §7 names Vault Manager, Stability Pool, Liquidator with no addresses. Risks table: audits, conservative debt ceilings; no auditor named." }
  - { id: R-3, publisher: Arrow Finance, title: "Get $ARROW", url: "https://www.arrowfinance.io/buy", published_at: null, accessed_at: 2026-09-02T23:05:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-4, CLM-27, CLM-38], excerpt: "Contract address 0xf2915d1e3C1B0c769d0c756Ec43F1c1f6c99cD03. View on Blockscout. Chain ID 4663. Dexscreener link https://dexscreener.com/robinhood/0xE40d98D88038e0B844f844dce6Ae3c79ec01ec53. Uniswap outputCurrency the same address. Pair ARROW / WETH. Supply Fixed." }
  - { id: R-4, publisher: Arrow Finance, title: "In-app documentation (CDP and launchpad)", url: "https://app.arrowfinance.io/docs", published_at: null, accessed_at: 2026-09-02T23:08:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-8, CLM-12, CLM-14, CLM-26, CLM-30, CLM-36], excerpt: "CDP stablecoin protocol where vaults mint aUSD, and a launchpad where tokens graduate onto Uniswap V3. Launchpad 0x1Badc838AAe6ac41829180744ea2e1C89b452aAe, ReferralRouter 0xC216662891De8eaf591cfc74E1b33ABc1779eaFb. Token creation is permissionless. Launchpad contracts are a permissioned fork of DegenX; PeckShield report linked for original DegenX. No CDP core addresses." }
  - { id: R-5, publisher: Arrow Finance, title: "Borrow app (read-only)", url: "https://staking.arrowfinance.io/app", published_at: null, accessed_at: 2026-09-02T23:00:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-21, CLM-23, CLM-25, EVT-6], excerpt: "Overcollateralized CDP · Robinhood Chain. Total value locked $58,257.41. aUSD outstanding 30,435.19. Collateral ratio 191%. Stability pool 22,256.33 aUSD. All 24 collateral markets. WETH $38,150.67 TVL, 70% LTV, 80% liq, 17,507.54 aUSD debt. USDG $10,346.49, 80/88. AAPL $9,760.24, 50/62. Remaining equity rows Coming soon." }
  - { id: R-6, publisher: "@ArrowFinanceio", title: "X profile", url: "https://x.com/ArrowFinanceio", published_at: null, accessed_at: 2026-09-02T23:10:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-3, CLM-33, CLM-40], excerpt: "Arrow Finance @ArrowFinanceio. Bio: The gateway for Robinhood DeFi. Trade, earn, borrow, launch, and manage your assets safely on Arrow Finance. Link linktr.ee/arrowfinanceio. Joined July 2026. 8,823 followers." }
  - { id: R-7, publisher: Linktree, title: "Arrow Finance Official: X | Linktree", url: "https://linktr.ee/arrowfinanceio", published_at: null, accessed_at: 2026-09-02T23:10:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-7, CLM-27, CLM-32, CLM-33, CLM-40], excerpt: "Website https://www.arrowfinance.io. CDP Lending https://app.arrowfinance.io. aUSD/USDG LP https://up33.xyz/liquidity/pool/v3/0x29e3f3d9891cacf213361bcbcb7728970d53baa8. Launchpad. Documentation https://arrowfinance.io/docs. $ARROW Contract 0xf2915d1e3c1b0c769d0c756ec43f1c1f6c99cd03. $aUSD Contract 0x4f11d7603d1b0d0f021db552d8a6d88d7fa38ecf. Telegram and Announcements." }
  - { id: R-8, publisher: Blockscout, title: "ARROW token 0xf2915d…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xf2915d1e3C1B0c769d0c756Ec43F1c1f6c99cD03", published_at: null, accessed_at: 2026-09-02T22:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-9, CLM-19, CLM-38], excerpt: "is_contract true, is_verified true, name ArrowToken, proxy_type null, creator_address_hash 0xcCf14f0A63C2b19b17FAdF89ABE58a517cb90A2f, creation_transaction_hash 0x0abe3ca4bbc37aaa57297ca6c6efcefe3590d2479a49245ed1b5b8f6c6939735, token symbol ARROW, holders_count 7328, total_supply 10000000000000000000000000." }
  - { id: R-9, publisher: Blockscout, title: "ARROW token object", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0xf2915d1e3C1B0c769d0c756Ec43F1c1f6c99cD03", published_at: null, accessed_at: 2026-09-02T22:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, CLM-15], excerpt: "address_hash 0xf2915d1e3C1B0c769d0c756Ec43F1c1f6c99cD03, name Arrow, symbol ARROW, decimals 18, holders_count 7328, total_supply 10000000000000000000000000, type ERC-20, circulating_market_cap 5076019.045943916, exchange_rate 0.564002." }
  - { id: R-10, publisher: Blockscout, title: "aUSD 0x4f11d760…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x4f11d7603D1B0D0f021Db552D8A6d88d7fa38ecf", published_at: null, accessed_at: 2026-09-02T22:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7], excerpt: "is_contract true, is_verified false, name Arrow USD, creator_address_hash 0xcCf14f0A63C2b19b17FAdF89ABE58a517cb90A2f, creation_transaction_hash 0x24ba628c1cff96c0a5a0d457595e6af93059bd11921f94fd3eb195fbd5edbe43, token symbol aUSD, holders_count 26." }
  - { id: R-11, publisher: Blockscout, title: "aUSD token object", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0x4f11d7603D1B0D0f021Db552D8A6d88d7fa38ecf", published_at: null, accessed_at: 2026-09-02T22:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-24, CLM-37], excerpt: "name Arrow USD, symbol aUSD, decimals 18, holders_count 26, total_supply 42332575323870183336822, type ERC-20, exchange_rate null, volume_24h null." }
  - { id: R-12, publisher: Blockscout, title: "ArrowPad Launchpad 0x1Badc838…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x1Badc838AAe6ac41829180744ea2e1C89b452aAe", published_at: null, accessed_at: 2026-09-02T22:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-8, CLM-10, CLM-14, CLM-30, CLM-36], excerpt: "is_contract true, is_verified true, name Launchpad, creator_address_hash 0xCB962B93BDCcC7156B683Cc01AD34306c2D67929, creation_transaction_hash 0x3a88c9929ed07bf7c176f6c68833915b3f2b4ec2f6e5fe7294d1b9c40265f235. Verified source contracts/Launchpad.sol Ownable; createLaunchpadToken gated by AccessRegistry." }
  - { id: R-13, publisher: Blockscout, title: "ARROW/WETH UniswapV3Pool 0xd1FA…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xd1FAf86966b362626a91DDa50E6913c14c02Ef5f", published_at: null, accessed_at: 2026-09-02T22:55:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "is_contract true, is_verified true, name UniswapV3Pool, creator_address_hash 0x1f7d7550B1b028f7571E69A784071F0205FD2EfA, creation_transaction_hash 0x028000df8a908fcfcd1e7cec0da2ab92292c4fae2cf6453a1989c4981da35f4f." }
  - { id: R-14, publisher: Blockscout, title: "aUSD up v3 pool 0x29e3…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x29e3f3d9891cacf213361bcbcb7728970d53baa8", published_at: null, accessed_at: 2026-09-02T22:55:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-35], excerpt: "is_contract true, is_verified true, proxy_type eip1167, implementation address_hash 0x11725976BF1F38c4aB78d1F480bc5883d70D9dc3 name CLPool, creator_address_hash 0x1ac9dB4a2608ba45D6127B1737949b51Bb54B7F3." }
  - { id: R-15, publisher: DexScreener, title: "ARROW/WETH Uniswap v3 pair", url: "https://api.dexscreener.com/latest/dex/pairs/robinhood/0xd1FAf86966b362626a91DDa50E6913c14c02Ef5f", published_at: null, accessed_at: 2026-09-02T22:52:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-16, CLM-17, CLM-38, EVT-5], excerpt: "chainId robinhood, dexId uniswap, labels v3, pairAddress 0xd1FAf86966b362626a91DDa50E6913c14c02Ef5f, base ARROW 0xf2915d1e3C1B0c769d0c756Ec43F1c1f6c99cD03, quote WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73, liquidity.usd 3787458.75, volume.h24 100896.87, priceUsd 0.6887, fdv 6887996, marketCap 6199196." }
  - { id: R-16, publisher: DexScreener, title: "ARROW token pairs", url: "https://api.dexscreener.com/latest/dex/tokens/0xf2915d1e3C1B0c769d0c756Ec43F1c1f6c99cD03", published_at: null, accessed_at: 2026-09-02T22:52:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-38], excerpt: "V2 Uniswap pair 0xE40d98D88038e0B844f844dce6Ae3c79ec01ec53 liquidity.usd 296487.25 volume.h24 422219.72. Info websites https://www.arrowfinance.io/ and https://arrowfinance.io/docs; socials https://x.com/arrowfinanceio and https://t.me/arrowfinanceio." }
  - { id: R-17, publisher: "@ArrowFinanceio", title: "Arrow CDP v1 is Now Live", url: "https://x.com/ArrowFinanceio/status/2094417284521431060", published_at: 2026-08-31T13:29:00Z, accessed_at: 2026-09-02T23:10:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-4], excerpt: "Arrow CDP v1 is Now Live. staking.arrowfinance.io. Share feedback in the replies below." }
  - { id: R-18, publisher: "@ArrowFinanceio", title: "aUSD/USDG gauge approved on up", url: "https://x.com/ArrowFinanceio/status/2094927670190506422", published_at: 2026-09-01T23:17:00Z, accessed_at: 2026-09-02T23:10:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-35, EVT-1], excerpt: "Arrow has officially been whitelisted on @uponrh with the aUSD/USDG gauge now approved. Starting next epoch, incentives will begin flowing to aUSD/USDG liquidity providers. Link up33.xyz/liquidity/pool/v3/0x29e3f3d9891cacf213361bcbcb7728970d53baa8. 11:17 PM · Sep 1, 2026." }
  - { id: R-19, publisher: "@ArrowFinanceio", title: "syrupUSDG is live on Arrow as collateral", url: "https://x.com/ArrowFinanceio/status/2094867193926193170", published_at: 2026-09-01T19:17:00Z, accessed_at: 2026-09-02T23:10:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-34, EVT-2], excerpt: "syrupUSDG is live on Arrow as collateral @maplefinance's dollar-denominated lending token. Post syrupUSDG as collateral, mint aUSD, keep both positions. Link cdp.arrowfinance.io. Yields are variable and not guaranteed. 7:17 PM · Sep 1, 2026." }
  - { id: R-20, publisher: "@ArrowFinanceio", title: "Mainnet dated Monday 8/31 after Sherlock review", url: "https://x.com/ArrowFinanceio/status/2094187230105354586", published_at: 2026-08-30T22:15:00Z, accessed_at: 2026-09-02T23:10:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-11, EVT-7], excerpt: "ARROW MAINNET GOES LIVE TOMORROW, MONDAY 8/31 AT 9:30 AM ET. After final review process with @sherlockdefi. 16 collateral markets; initial max LTVs 75-90%; about $1.6M aggregate aUSD borrow capacity; equity/index 9:30 AM-4:00 PM ET; WETH/stables unconstrained. No contract address in the post." }
  - { id: R-21, publisher: DefiLlama, title: "ArrowPad protocol", url: "https://api.llama.fi/protocol/arrowpad", published_at: null, accessed_at: 2026-09-02T23:05:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-29], excerpt: "name ArrowPad, category Launchpad, twitter RobinArrowPad, currentChainTvls Robinhood Chain 1.00565. Description: Token launchpad on Robinhood Chain. Not an Arrow Finance CDP row." }
  - { id: R-22, publisher: GitHub, title: "github.com/arrowfinanceio", url: "https://github.com/arrowfinanceio", published_at: null, accessed_at: 2026-09-02T23:10:00Z, kind: repository, authority: unknown, authenticity: unconfirmed, supports: [CLM-18], excerpt: "Page not found · GitHub. 404 This is not the web page you are looking for." }
  - { id: R-23, publisher: Telegram, title: "Arrow Finance: Portal", url: "https://t.me/arrowfinanceio", published_at: null, accessed_at: 2026-09-02T23:10:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-32], excerpt: "Arrow Finance: Portal. 1 285 subscribers. View in Telegram tg://resolve?domain=arrowfinanceio." }
  - { id: R-25, publisher: "@ArrowFinanceio", title: "Rialto Swap API integration", url: "https://x.com/ArrowFinanceio/status/2094652769206505708", published_at: 2026-09-01T16:00:00Z, accessed_at: 2026-09-02T23:10:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-3], excerpt: "We're excited to announce we will be integrating Rialto's Swap API to deliver a completely seamless user journey. By embedding @rialto_xyz directly into the Arrow interface, we are upgrading the entire capital deployment pipeline." }
  - { id: R-26, publisher: Blockscout, title: "ArrowToken verified source", url: "https://robinhoodchain.blockscout.com/api/v2/smart-contracts/0xf2915d1e3C1B0c769d0c756Ec43F1c1f6c99cD03", published_at: "2026-07-03T23:24:19.748081Z", accessed_at: 2026-09-02T22:55:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-9, CLM-31], excerpt: "file_path src/gov/ArrowToken.sol, is_verified true, compiler v0.8.17. 10M fixed supply. Owner-settable buy/sell tax 0–15%, both start at 1%. launch() adds held tokens plus ETH to ARROW/WETH Uniswap V2. Constructor ecosystemWallet 0xcCf14f0A63C2b19b17FAdF89ABE58a517cb90A2f, taxWallet 0x62AaCB46F53c74e8f577486B02352bcA86a7F5fa, router 0x89e5DB8B5aA49aA85AC63f691524311AEB649eba." }
  - { id: R-27, publisher: DefiLlama, title: "Chains snapshot", url: "https://api.llama.fi/v2/chains", published_at: null, accessed_at: 2026-09-02T23:05:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-29], excerpt: "Robinhood Chain chainId 4663, tvl 776522610.5736439. Protocol search this pass returned ArrowPad launchpad rows and no Arrow Finance CDP protocol object." }

gaps:
  - { priority: P0, question: "What are the vault-manager, stability-pool, liquidator, surplus-buffer and aUSD minter addresses on 4663?", checked: "www.arrowfinance.io/docs §7, app.arrowfinance.io/docs, homepage, buy page, Linktree, X posts 2094417284521431060 and 2094867193926193170, Blockscout labels on ARROW and aUSD, 2026-09-02", next: "read the borrow app's contract config or a mint transaction's to-address and open those contracts on Blockscout" }
  - { priority: P0, question: "Does a published Sherlock report cover the deployed CDP bytecode, and at which commit?", checked: "site, both docs pages, buy page, Linktree, X posts naming @sherlockdefi, 2026-09-02; no report URL", next: "ask in public for the report URL and match bytecode to the reviewed commit" }
  - { priority: P0, question: "Which LTV and live-market set is on chain: docs 24 markets at 75/90/55/40, or the app's 70/80/50 with most equities Coming soon?", checked: "docs §2.1 and staking.arrowfinance.io/app 2026-09-02", next: "eth_call the unlabeled market contracts once addresses are known" }
  - { priority: P1, question: "Why is aUSD totalSupply 42332.58 while the borrow app showed 30435.19 outstanding?", checked: "Blockscout token total_supply and staking app aUSD outstanding, 2026-09-02", next: "split circulating, stability-pool, and unbacked supply from the minter once labeled" }
  - { priority: P1, question: "Is AccessRegistry currently allowing public createLaunchpadToken, or is the pad gated?", checked: "app.arrowfinance.io/docs says permissionless; verified Launchpad.sol requires isTokenCreationAllowed; launchpad UI Live trending — no tokens yet", next: "eth_call accessRegistry and isTokenCreationAllowed for a random caller; read getTokensCount" }
  - { priority: P1, question: "Are DefiLlama ArrowPad (@RobinArrowPad) and ArrowPad.fun (@Arrowpadfun) this factory 0x1Badc838… or separate pads?", checked: "api.llama.fi/protocol/arrowpad twitter RobinArrowPad; Arrow Finance official handle is @ArrowFinanceio", next: "diff Llama adapter addresses against 0x1Badc838…" }
  - { priority: P2, question: "Current buyTaxBps / sellTaxBps / taxWallet on ArrowToken after owner() went to zero", checked: "verified source constructor 100 bps; owner() 0x0 this pass; live tax getters not eth_called (no keccak helper)", next: "eth_call buyTaxBps(), sellTaxBps(), taxWallet(), pair(), tradingEnabled()" }
---

# Arrow Finance — research packet

## What it is

An overcollateralized CDP on Robinhood Chain. A user deposits one approved asset into a vault, mints aUSD against it, and repays to release the collateral. Docs list WETH, USDG and Stock Tokens as collateral. The same brand also runs ArrowPad, a bonding-curve launchpad. Official site arrowfinance.io and handle @ArrowFinanceio. Distinct from Arrows, the options protocol.

Themes: lending, rwa, launchpad

## Why it matters

This is a native credit surface for Stock Tokens already issued on chain 4663: the documented loop is deposit, mint aUSD, keep the underlying. ArrowPad sits under the same brand and handle, so a reader who only sees the pad will mis-file the protocol as a launchpad.

## What could go wrong

CDP vault-manager and stability-pool addresses are unpublished, so liquidation, oracle and cap paths cannot be read on chain from official docs. Launchpad owner is a single EOA with no timelock. Docs, the borrow app and pre-open posts disagree on how many markets are live and at which LTV.

## Product and mechanics

The documented CDP is one-asset, one-debt vaults. A user supplies an approved collateral, mints aUSD up to that market's LTV, and repays aUSD plus a stability fee to release collateral. aUSD is described as minted and burned only by Vault Managers. Docs list WETH, USDG, and two tiers of Stock Tokens and ETFs. [claim R-1 R-2 R-4]

Liquidation, as documented, runs through a Stability Pool: depositors place aUSD, and when a vault's health factor falls below 1 the pool burns the debt and takes collateral at a discount. Docs §4.2 describe US cash-hours handling for Stock Token collateral as planned, not yet active. A market redemption path at par is also documented as not live. [claim R-2]

ArrowPad is a separate factory at 0x1Badc838AAe6ac41829180744ea2e1C89b452aAe. In-app docs describe a 1 billion fixed supply, 800 million sold on a bonding curve, 200 million seeding a Uniswap V3 position locked in LpHolder at graduation. The same page says creation is permissionless; verified Launchpad.sol requires AccessRegistry.isTokenCreationAllowed. The launchpad UI this pass showed Live trending — no tokens yet. [disputed R-4 R-12]

ARROW is not a pad graduate. It was created by EOA 0xcCf14f0A63C2b19b17FAdF89ABE58a517cb90A2f. Verified ArrowToken.sol is a 10 million fixed-supply ERC-20 with owner-settable buy/sell tax; launch() seeds an ARROW/WETH Uniswap V2 pair. The buy page points DexScreener at that V2 pool; the deeper book this pass is Uniswap v3 pool 0xd1FA…. Pair asset is WETH. [verified R-3 R-8 R-15 R-26]

## Control and security

owner() on ArrowToken returns the zero address, so setBuyTax, setSellTax, setTaxWallet and the other onlyOwner paths cannot fire unless ownership is later accepted back — the verified source has no reclaim. Constructor tax is 1% buy and 1% sell, ceiling 15%. Live tax getters were not eth_called this pass. [verified R-8 R-26]

owner() on Launchpad returns EOA 0xcb962b93bdccc7156b683cc01ad34306c2d67929, the same address that created the factory. Verified source lets that owner set token/gauge implementations, curve, treasury, LP receiver, creation cost, fees and the access registry, with no timelock. [verified R-12]

CDP admin, oracle, cap and listing keys were not located. Docs §6 say veARROW Governor plus Timelock is not live and that until governance launches the project manages parameters. [claim R-2]

Official posts name a Sherlock / Blackthorn review of the CDP; site and docs do not link a report. In-app launchpad docs link a PeckShield report on original DegenX contracts and call the pad a permissioned fork of that code. [claim R-2 R-4 R-20]

## Team and provenance

Official identity is bidirectional through Linktree: @ArrowFinanceio bio links linktr.ee/arrowfinanceio, which lists https://www.arrowfinance.io, docs, the CDP app, Telegram, and both token addresses. The buy page repeats the ARROW address and a Blockscout token link. github.com/arrowfinanceio returned 404. [verified R-1 R-3 R-6 R-7]

ARROW and aUSD share creator 0xcCf14f0A63C2b19b17FAdF89ABE58a517cb90A2f, an EOA. ArrowToken constructor names that address as ecosystemWallet. No named legal entity appeared on the pages opened this pass. [verified R-8 R-10 R-26]

Census slug arrows is a different product: options at arrows.finance / @arrowsonhood / token 0xD71b7b4e1dc16BD6938D3F235A68aa8ab1CF4F0e. DefiLlama ArrowPad twitter field is RobinArrowPad, not @ArrowFinanceio. [claim R-8 R-21]

## Economics and activity

The ARROW/WETH Uniswap v3 pair 0xd1FA… showed liquidity 3787458.75 USD and 24h volume 100896.87 USD at fetch, with DexScreener marketCap 6199196 USD. The V2 pair linked from the buy page showed liquidity 296487.25 USD and 24h volume 422219.72 USD. Blockscout holders_count on ARROW was 7328. [verified R-9 R-15 R-16]

The borrow app, no wallet connected, showed TVL 58257.41 USD, aUSD outstanding 30435.19, collateral ratio 191%, stability pool 22256.33 aUSD, with funded WETH, USDG and AAPL rows. aUSD totalSupply on Blockscout was 42332.58. Those two aUSD figures are not the same quantity. [claim R-5 R-11]

DefiLlama this pass had ArrowPad TVL about 1 USD and ArrowPad.fun about 532 USD on Robinhood Chain, and no Arrow Finance CDP protocol row. Llama launchpad TVL is not CDP TVL. [claim R-21 R-27]

## Material risks

- CDP core contracts are unlabeled, so liquidation, oracle, pause and cap paths are not reproduced. [claim R-2 R-4]
- Launchpad owner is one EOA with no timelock on factory setters. [verified R-12]
- Docs, the borrow app and the 8/30 post disagree on live market count and LTV. [disputed R-2 R-5 R-20]
- aUSD explorer source is not verified; owner() on aUSD reverts. [verified R-10]
- Sherlock is named in posts; no report is linked from official properties. [claim R-2 R-20]
- ArrowToken source documents a buy/sell tax; owner is now zero, so the last on-chain tax setting is frozen and was not re-read. [verified R-26]

## Verification passes

- Receipts: site, both docs pages, buy page, borrow app, X profile and named status URLs, Linktree, Telegram preview, GitHub 404, DexScreener pair and token APIs, DefiLlama protocol and chains APIs, and Blockscout address/token/source APIs were opened on 2026-09-02; excerpts are copied from those responses. [verified R-1 R-2 R-3 R-5 R-8 R-15]
- Numbers: holders 7328 is the Blockscout ARROW token field; 24h volume 100896.87 USD and liquidity 3787458.75 USD are the DexScreener ARROW/WETH Uniswap v3 pair slice, not an all-pairs or all-chains total; borrow-app TVL 58257.41 USD is a site readout, not an on-chain sum of vaults; DefiLlama ArrowPad TVL is the pad adapter, not CDP TVL. [claim R-5 R-9 R-15 R-21]
- Adversarial: the strongest contrary reading is that Arrow Finance is the launchpad (ArrowPad / ArrowPad.fun / Llama @RobinArrowPad) or that it is Arrows the options protocol. Official copy leads with the CDP; the Launchpad contract name is Launchpad, not a vault manager; token CAs, domain and handle do not match arrows.finance. [inference R-1 R-8 R-12]

## Operations log

- Read content/census.yaml arrow row, content/projects/arrow.yaml, content/pulled/arrow.yaml, content/sources/arrow.yaml, content/feed/arrow.yaml, content/projects/arrows.yaml, docs/taxonomy.md, schema/packet.schema.json, docs/templates/research-packet-v2.md.
- Opened https://www.arrowfinance.io/, /docs, /buy; https://app.arrowfinance.io/docs; https://staking.arrowfinance.io/app; https://x.com/ArrowFinanceio and named status URLs; https://linktr.ee/arrowfinanceio; https://t.me/arrowfinanceio; https://github.com/arrowfinanceio (404).
- GET Blockscout /api/v2/addresses for ARROW, aUSD, Launchpad, Uniswap v3 pool, aUSD LP, creator EOA; /api/v2/tokens for ARROW and aUSD; /api/v2/smart-contracts for ArrowToken and Launchpad.
- GET DexScreener latest/dex/pairs/robinhood/0xd1FA… and latest/dex/tokens/0xf2915d…; GET api.llama.fi/protocol/arrowpad, /protocol/arrowpad.fun, /v2/chains.
- RPC https://rpc.mainnet.chain.robinhood.com with a browser User-Agent: eth_blockNumber 0x327cbde, eth_getCode on token/aUSD/pad/v3 pair, eth_call name/symbol/totalSupply/owner.
- First RPC attempt without User-Agent returned HTTP 403. Time on this slug: one collector pass.
