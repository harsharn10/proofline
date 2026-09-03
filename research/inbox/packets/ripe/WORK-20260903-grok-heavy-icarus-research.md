---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: ripe
name: RIPE
packet_tier: seed
as_of: 2026-09-03T03:45:00Z
prior_packet: null
supersedes: null
owned_slugs: [ripe]
allowed_paths:
  - research/inbox/packets/ripe/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Ripe Protocol
  aliases: ["Ripe DAO Governance Token", "Ripe"]
  symbols: [RIPE]
  entity_kind: protocol
  chain_scope: multichain
  official_domain: https://www.ripe.finance
  official_handle: "@ripe_dao"
  repository: https://github.com/Ripe-Foundation/ripe-protocol
  possible_matches:
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "RIPE is RipeToken 0x4D3f…883b; ripe.finance API lists it as RipeToken and Llama ripe-protocol robinhood ripeToken is that same address"
        - "Same-stock NVDA rail 0xd060…9EEC, not an identity match; distinct from in-flight microduck/NVDA and ORBIO/NVDA pad books"
        - "No shared domain, handle, or reproduced address"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "RIPE was created 2026-08-04 by EOA 0x2944…9237 as verified RipeToken.vy; factory() on the token reverts"
        - "RIPE/NVDA is Uniswap v2 getPair at factory 0x8bcE…937f, not LongLauncher.create"
        - "No shared domain, handle, or reproduced address"
    - slug: pons
      signals: [other]
      contrary_signals:
        - "Census Pons is a bonding-curve pad at ponsfamily.com / @ponsdotfamily"
        - "RIPE is not a PonsV2LauncherToken; creator is an EOA, not PonsV2LaunchAndBuy / PonsLaunchFactory"
        - "Product is GREEN-minting credit against stock tokens, not a pad graduation"
        - "No shared domain, handle, or reproduced address"
    - slug: denar
      signals: [other]
      contrary_signals:
        - "Census Denar is an isolated Morpho money market at denar.markets / @DenarMarkets"
        - "Ripe is a GREEN CDP at ripe.finance / @ripe_dao with RipeHq 0xD4e8…0940 and RipeToken 0x4D3f…883b"
        - "Llama ripe-protocol is this token, not Denar"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: credit/rwa-lending
  secondary_leaves: [credit/cdp, credit/lending-primitive]
  mechanism_tags: [lending, collateralized-debt, rwa, stock-paired, stablecoin, amm]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x4D3f…883b is verified RipeToken.vy on 4663 with ripeHq() 0xD4e8…0940; api.ripe.finance lists that address as RipeToken; CoinGecko platforms.robinhood and Llama ripe-protocol robinhood ripeToken are the same CA. Uniswap v2 RIPE/NVDA 0x9b85…769D is Llama pool2, not a pad clone. Assignment expected a pad graduation; on-chain it is the lending protocol token. NVDA 0xd060…9EEC is the registry rail. [R-1] [R-5] [R-6] [R-8] [R-12] [R-14]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-8], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: site, url: "https://www.ripe.finance", authenticity: confirmed }
  - { kind: app, url: "https://app.ripe.finance/robinhood/leaderboard", authenticity: confirmed }
  - { kind: docs, url: "https://docs.ripe.finance", authenticity: confirmed }
  - { kind: x, url: "https://x.com/ripe_dao", authenticity: confirmed }
  - { kind: github, url: "https://github.com/Ripe-Foundation/ripe-protocol", authenticity: confirmed }
  - { kind: discord, url: "https://discord.gg/hightop", authenticity: unconfirmed }

deployments:
  - label: RIPE token (RipeToken.vy)
    role: token
    address:
      value: "0x4D3f37a965b21aB4122e92Dd41D2693E742c883b"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:36:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-5, R-14]
  - label: RipeHq registry
    role: other
    address:
      value: "0xD4e82AE1De673bba3B53386A2D2C630AE6630940"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03T03:41:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-6, R-14]
  - label: RipeGov (governance vault)
    role: vault
    address:
      value: "0xFa767a19c0C2B80D5A8d5b88be67de153Df1b2f2"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03T03:41:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-14]
  - label: RIPE/NVDA Uniswap v2 pair (Llama pool2)
    role: other
    address:
      value: "0x9b8537bE0FD5cf9B2AD495C5A85130D5bAe4769D"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:36:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-5, R-7, R-8]
  - label: NVIDIA • Robinhood Token (pair quote / collateral rail)
    role: token
    address:
      value: "0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:36:00Z
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-5, R-7, R-12, R-16]
  - label: GREEN token
    role: token
    address:
      value: "0x355bB7F0f6c730e4460d620420a300fa08FF82F3"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03T03:41:00Z
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-6, R-14]
  - label: UniswapV2Factory (pair.factory)
    role: factory
    address:
      value: "0x8bcEaA40B9AcdfAedF85AdF4FF01F5Ad6517937f"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:41:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-17]
  - label: CCIP admin Safe (token getCCIPAdmin / constructor)
    role: multisig
    address:
      value: "0xe488a42D33b3Af5d3E5Cd5680938d8369716D1bf"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:41:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-18]

metrics:
  - { kind: volume_24h, value: 1167264.78, currency: USD, as_of: 2026-09-03T03:37:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x9b8537be0fd5cf9b2ad495c5a85130d5bae4769d volume_usd.h24", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 304746.40, currency: USD, as_of: 2026-09-03T03:36:00Z, window: point, method: "api.llama.fi/tvl/ripe-protocol (protocol TVL, not the RIPE/NVDA pool reserve)", class: claim, receipt_ids: [R-13] }
  - { kind: market_cap, value: 935328.28, currency: USD, as_of: 2026-09-03T03:37:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x9b8537be0fd5cf9b2ad495c5a85130d5bae4769d fdv_usd (market_cap_usd 4108725 is a CoinGecko blend, not this pool FDV)", class: claim, receipt_ids: [R-8] }
  - { kind: holders, value: 966, currency: null, as_of: 2026-09-03T03:36:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x4D3f37a965b21aB4122e92Dd41D2693E742c883b holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:41:00Z, receipt_ids: [R-5], result: "eth_blockNumber 0x32a5deb (53108203). Token 0x4D3f…883b eth_getCode 7437 B, not EIP-1167. name Ripe DAO Governance Token, symbol RIPE, decimals 18, totalSupply 304165553306114401539158 (~304166e18). ripeHq() 0xD4e82AE1De673bba3B53386A2D2C630AE6630940. isPaused() false. VERSION v1.0.0. getCCIPAdmin() 0xe488a42D33b3Af5d3E5Cd5680938d8369716D1bf. owner() and factory() revert. RipeHq getAddr(3) returns the same token. Pair token0 0x4D3f…883b token1 0xd060…9EEC factory 0x8bcEaA40B9AcdfAedF85AdF4FF01F5Ad6517937f. Factory getPair(RIPE,NVDA) 0x9b8537bE0FD5cf9B2AD495C5A85130D5bAe4769D. NVDA name NVIDIA • Robinhood Token. Creator 0x2944…9237 eth_getCode 0x. RipeHq code 12979 B, RipeGov 24116 B, factory 13859 B, GREEN 7437 B." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:36:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-15, R-17, R-18], result: "Blockscout api/v2 token 0x4D3f…883b name Ripe DAO Governance Token symbol RIPE holders_count 966 total_supply 303834556775225683182210 is_verified true proxy_type null name RipeToken file_path contracts/tokens/RipeToken.vy compiler v0.4.3+commit.bff19ea2 language vyper. Creator EOA 0x2944Fb9511F2c703a3a3Bd88bb0F3b2d22A79237 tx 0x764bb807…9a4e 2026-08-04T19:19:21Z block 27870098. RipeHq 0xD4e8…0940 is_verified true is_partially_verified true file_path contracts/registries/RipeHq.vy created 2026-08-04T19:19:40Z block 27870288 same EOA. RipeGov 0xFa76…b2f2 is_verified true. Pair 0x9b85…769D name UniswapV2Pair is_verified true file_path contracts/UniswapV2Pair.sol. Factory 0x8bcE…937f name UniswapV2Factory is_verified true. Safe 0xe488…d1bf name SafeProxy implementation SafeL2." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T03:37:00Z, receipt_ids: [R-7, R-8, R-9], result: "DexScreener latest/dex/tokens/0x4D3f…883b: 10 robinhood uniswap pairs; top RIPE/NVDA v2 0x9b85…769D quote NVIDIA • Robinhood Token / NVDA 0xd060…9EEC liquidity.usd 221537.34 volume.h24 1168258.89 fdv 936687 marketCap 4082118 pairCreatedAt 1787950805000 (2026-08-28T21:00:05Z) info.websites ripe.finance, docs.ripe.finance, github.com/ripe-foundation/ripe-protocol info.socials x.com/ripe_dao and discord.gg/hightop. Gecko pool: volume_usd.h24 1167264.78 reserve_in_usd 221791.89 fdv_usd 935328.28 market_cap_usd 4108725.05 pool_created_at 2026-08-28T21:00:05Z dex uniswap-v2-robinhood. Gecko token volume_usd.h24 1242637.37 (all pools). Gecko token info coingecko_coin_id ripe-dao-governance-token twitter_handle ripe_dao gt_verified true." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T03:36:00Z, receipt_ids: [R-12], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; NVDA row tokenName NVIDIA • Robinhood Token deployments.contractAddress 0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC chainId 4663 status ASSET_STATUS_ACTIVE." }
  - { id: REP-5, method: official-crosslink, checked_at: 2026-09-03T03:42:00Z, receipt_ids: [R-10, R-11, R-14, R-19, R-20], result: "www.ripe.finance title Ripe: Borrow Against Your Tokenized Stocks; twitter:site and twitter:creator @ripe_dao; copy names Robinhood Chain and NVIDIA. GET api.ripe.finance/api/chains/addresses?chain=robinhood returns chainId 4663 RipeToken 0x4D3f37a965b21aB4122e92Dd41D2693E742c883b RipeHq 0xD4e82AE1De673bba3B53386A2D2C630AE6630940 RipeGov 0xFa767a19c0C2B80D5A8d5b88be67de153Df1b2f2 GreenToken 0x355bB7F0f6c730e4460d620420a300fa08FF82F3. Assets endpoint lists NVDA 0xd060…9EEC vaultId 3 ltv 7000 and UNI-V2 0x9b85…769D vaultId 2 (RipeGov). CoinGecko platforms.robinhood 0x4d3f37a965b21ab4122e92dd41d2693e742c883b. GitHub Ripe-Foundation/ripe-protocol contains contracts/tokens/RipeToken.vy. @ripe_dao bio: Tokenized stock as collateral on Robinhood Chain." }
  - { id: REP-6, method: api, checked_at: 2026-09-03T03:36:00Z, receipt_ids: [R-13, R-21], result: "Llama protocol ripe-protocol symbol RIPE category Lending chains Base and Robinhood Chain address base:0x2a0a59d6b975828e781ecac125dba40d7ee5ddc0 gecko_id ripe-dao-governance-token tvl 304746.40. currentChainTvls Robinhood Chain 200773.25 Base 103973.15 Robinhood Chain-pool2 139106.47. Adapter projects/ripe/index.js robinhood ripeToken 0x4d3f37a965b21ab4122e92dd41d2693e742c883b pool2Tokens include 0x9b8537be0fd5cf9b2ad495c5a85130d5bae4769d RIPE/NVDA and ripeHq 0xd4e82ae1de673bba3b53386a2d2c630ae6630940." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Ripe Protocol mints GREEN against deposited tokenized stocks and other collateral via RipeHq vaults. RH RIPE 0x4D3f…883b is verified RipeToken.vy (not a pad clone). Uniswap v2 RIPE/NVDA 0x9b85…769D is Llama pool2 / RipeGov vaultId 2, not a LongLauncher or Pons graduation.", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-1, R-5, R-6, R-14, R-21], reproduction_ids: [REP-1, REP-2, REP-5, REP-6], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Ripe DAO Governance Token", class: verified, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "RIPE", class: verified, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x4D3f37a965b21aB4122e92Dd41D2693E742c883b", class: verified, observed_at: 2026-09-03T03:41:00Z, receipt_ids: [R-1, R-5, R-14], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0xD4e82AE1De673bba3B53386A2D2C630AE6630940", class: verified, observed_at: 2026-09-03T03:41:00Z, receipt_ids: [R-2, R-5, R-6, R-14], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:41:00Z, receipt_ids: [R-1, R-5, R-8, R-13], reproduction_ids: [REP-1, REP-2, REP-3, REP-6], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: credit/rwa-lending, class: claim, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-10, R-13, R-14, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "@ripe_dao", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-10, R-11, R-19], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Llama ripe-protocol (lending, TVL 304746.40, RH ripeToken 0x4d3f…883b, pool2 0x9b85…769D) is this token, not a second name. CoinGecko platforms.robinhood is the same CA. Distinct from packed AI/NVDA (0x2E8c…1e18) and in-flight microduck/orbio NVDA books. NVDA 0xd060…9EEC is the rhj/assets rail, not a second product.", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-12, R-13, R-14, R-21], reproduction_ids: [REP-4, REP-5, REP-6], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "RIPE/NVDA Uniswap v2 24h volume 1167264.78 USD and reserve_in_usd 221791.89 at 2026-09-03T03:37:00Z (Gecko pool slice, not Gecko token all-pools 1242637.37)", class: verified, observed_at: 2026-09-03T03:37:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 221537.34 volume.h24 1168258.89 fdv 936687 marketCap 4082118 at 2026-09-03T03:36:00Z", class: verified, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 966, class: verified, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() reverts; ripeHq() 0xD4e8…0940; isPaused() false; hasPendingHqChange() false; getCCIPAdmin() Safe 0xe488…d1bf; deployer 0x2944…9237 has no code", class: verified, observed_at: 2026-09-03T03:41:00Z, receipt_ids: [R-5, R-15], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "RipeToken ABI includes pause, mint, setBlacklist, initiateHqChange/confirmHqChange with minHqTimeLock 7200 and maxHqTimeLock 50400; constructor sets initial admin 0x2944…9237 and Safe 0xe488…d1bf", class: verified, observed_at: 2026-09-03T03:41:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is NVDA 0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC (rhj/assets NVIDIA • Robinhood Token); venue is Uniswap v2 pair 0x9b85…769D via factory 0x8bcE…937f. NVDA is a rail, not this product.", class: verified, observed_at: 2026-09-03T03:41:00Z, receipt_ids: [R-5, R-7, R-8, R-12], reproduction_ids: [REP-1, REP-3, REP-4], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator is EOA 0x2944…9237, not Pons, LONG, PAIR, or hood.fun. Pad factory() reverts. Launchpad role does not apply.", class: verified, observed_at: 2026-09-03T03:41:00Z, receipt_ids: [R-1, R-5, R-15], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: multichain, class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-10, R-13, R-19], reproduction_ids: [REP-5, REP-6], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "docs.ripe.finance/resources/audits links ChainSecurity-Ripe.pdf and Anatomist-Ripe.pdf on hightop.com; PDF bodies and RH-deploy scope were not opened line by line this pass", class: claim, observed_at: 2026-09-03T03:43:00Z, receipt_ids: [R-22], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "Official: www.ripe.finance twitter:site @ripe_dao; @ripe_dao bio names Robinhood Chain; api.ripe.finance lists this CA. discord.gg/hightop is DexScreener/Gecko-linked, flag unconfirmed-official for Discord only", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-7, R-10, R-11, R-14], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko pool fdv_usd 935328.28 vs market_cap_usd 4108725.05; DexScreener fdv 936687 vs marketCap 4082118. Llama protocol TVL 304746.40. Pool reserve 221791.89 is not protocol TVL.", class: verified, observed_at: 2026-09-03T03:37:00Z, receipt_ids: [R-7, R-8, R-13], reproduction_ids: [REP-3, REP-6], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x9b8537bE0FD5cf9B2AD495C5A85130D5bAe4769D", class: verified, observed_at: 2026-09-03T03:41:00Z, receipt_ids: [R-4, R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC", class: verified, observed_at: 2026-09-03T03:41:00Z, receipt_ids: [R-5, R-12], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "https://www.ripe.finance", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-10, R-14], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-24, field: candidate, value: "ripe | Ripe Protocol | @ripe_dao | ripe.finance — discovery protocol token not in census 49; Llama ripe-protocol is this CA, not a merge target", class: claim, observed_at: 2026-09-03T03:45:00Z, receipt_ids: [R-1, R-10, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: identity.repository, value: "https://github.com/Ripe-Foundation/ripe-protocol", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-20], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-26, field: economics.metric, value: "Llama ripe-protocol TVL 304746.40 with Robinhood Chain 200773.25 and Base 103973.15; Robinhood Chain-pool2 139106.47 includes the RIPE/NVDA LP", class: verified, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [R-13, R-21], reproduction_ids: [REP-6], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: company
    title: "@ripe_dao posted Ripe ecosystem growing on Robinhood"
    summary: "Quote-tweet: the other half of the Base RIPE story; Ripe on Robinhood is growing."
    occurred_at: 2026-09-03T00:59:20Z
    observed_at: 2026-09-03T03:43:00Z
    affected_fields: [communications.status, activity.status]
    evidence_state: verified
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-23]
  - id: EVT-2
    type: onchain
    title: "Gecko RIPE/NVDA 24h volume $1.17M, reserve $222k"
    summary: "Gecko pool 0x9b85…769D volume_usd.h24 1167265 reserve_in_usd 221792 fdv_usd 935328."
    occurred_at: 2026-09-03T03:37:00Z
    observed_at: 2026-09-03T03:37:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-8]
  - id: EVT-3
    type: company
    title: "@ripe_dao posted Juice leaderboard for locked RIPE LP"
    summary: "Leaderboard at app.ripe.finance/robinhood/leaderboard; lock RIPE or RIPE LP to rank."
    occurred_at: 2026-09-02T20:29:42Z
    observed_at: 2026-09-03T03:43:00Z
    affected_fields: [product.mechanism, communications.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-24]
  - id: EVT-4
    type: ct
    title: "@PhilippInvest posted GREEN 7% above peg"
    summary: "Post: borrow GREEN against NVDA or SPCX while GREEN trades 7% over $1."
    occurred_at: 2026-09-01T11:30:19Z
    observed_at: 2026-09-03T03:43:00Z
    affected_fields: [activity.status, economics.metric]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-25]
  - id: EVT-5
    type: onchain
    title: "Uniswap v2 RIPE/NVDA pair created"
    summary: "Gecko pool_created_at 2026-08-28T21:00:05Z; factory getPair returns 0x9b85…769D."
    occurred_at: 2026-08-28T21:00:05Z
    observed_at: 2026-09-03T03:41:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-5, R-8]
  - id: EVT-6
    type: onchain
    title: "EOA deployed RipeToken on Robinhood Chain"
    summary: "Tx 0x764bb807…9a4e from 0x2944…9237 at 2026-08-04T19:19:21Z created RipeToken."
    occurred_at: 2026-08-04T19:19:21Z
    observed_at: 2026-09-03T03:36:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-15]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x4D3f…883b Ripe DAO Governance Token / RIPE", url: "https://robinhoodchain.blockscout.com/address/0x4D3f37a965b21aB4122e92Dd41D2693E742c883b", published_at: null, accessed_at: 2026-09-03T03:36:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-14, CLM-16, CLM-24], excerpt: "hash 0x4D3f37a965b21aB4122e92Dd41D2693E742c883b name RipeToken is_contract true is_verified true proxy_type null. token name Ripe DAO Governance Token symbol RIPE decimals 18 total_supply 303834556775225683182210 holders_count 966 type ERC-20. creator_address_hash 0x2944Fb9511F2c703a3a3Bd88bb0F3b2d22A79237. file_path contracts/tokens/RipeToken.vy language vyper compiler v0.4.3." }
  - { id: R-2, publisher: Blockscout, title: "Address 0xD4e8…0940 RipeHq", url: "https://robinhoodchain.blockscout.com/address/0xD4e82AE1De673bba3B53386A2D2C630AE6630940", published_at: null, accessed_at: 2026-09-03T03:41:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5], excerpt: "hash 0xD4e82AE1De673bba3B53386A2D2C630AE6630940 name RipeHq is_contract true is_verified true is_partially_verified true file_path contracts/registries/RipeHq.vy language vyper compiler v0.4.3 creator_address_hash 0x2944Fb9511F2c703a3a3Bd88bb0F3b2d22A79237 creation_transaction_hash 0x3609addd0fd285998fdd04e688b5c75dcbba0ad4f72153969a2fe7d9b9cb3380." }
  - { id: R-3, publisher: Blockscout, title: "Address 0xFa76…b2f2 RipeGov", url: "https://robinhoodchain.blockscout.com/address/0xFa767a19c0C2B80D5A8d5b88be67de153Df1b2f2", published_at: null, accessed_at: 2026-09-03T03:41:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1], excerpt: "hash 0xFa767a19c0C2B80D5A8d5b88be67de153Df1b2f2 name RipeGov is_contract true is_verified true creator_address_hash 0xEF3cB7750FF6158d9f9B27651BbBA2299096483B creation_transaction_hash 0xd39747efafa7b9506f4eb0440ec65934c60ec22f4491ac27b55e44432d072c00." }
  - { id: R-4, publisher: Blockscout, title: "Address 0x9b85…769D UniswapV2Pair", url: "https://robinhoodchain.blockscout.com/address/0x9b8537bE0FD5cf9B2AD495C5A85130D5bAe4769D", published_at: null, accessed_at: 2026-09-03T03:36:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-21], excerpt: "hash 0x9b8537bE0FD5cf9B2AD495C5A85130D5bAe4769D name UniswapV2Pair is_contract true is_verified true file_path contracts/UniswapV2Pair.sol compiler v0.5.16. token name Uniswap V2 symbol UNI-V2 holders_count 11." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, ripeHq(), pair token0/token1/getPair", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:41:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-13, CLM-14, CLM-15, CLM-16, CLM-21, CLM-22, EVT-5], excerpt: "block 53108203. Token code 7437 B name Ripe DAO Governance Token symbol RIPE ripeHq() 0xD4e82AE1De673bba3B53386A2D2C630AE6630940 isPaused false VERSION v1.0.0 getCCIPAdmin 0xe488…d1bf owner/factory revert. Pair token0 RIPE token1 NVDA factory 0x8bcE…937f. getPair returns 0x9b85…769D. NVDA name NVIDIA • Robinhood Token. Creator code 0x." }
  - { id: R-6, publisher: RipeHq RPC, title: "RipeHq getAddr registry ids", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:41:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5], excerpt: "getAddr(1) GreenToken 0x355bB7F0f6c730e4460d620420a300fa08FF82F3. getAddr(2) SavingsGreen 0x290a52380A88f743813B8C3e9F6B0e61DB5FDF73. getAddr(3) RipeToken 0x4D3f37a965b21aB4122e92Dd41D2693E742c883b. getAddr(4) Ledger 0x7E1d751D168f09761b88651A4c78C996354FaeB1. getAddr(7) PriceDesk 0x56Db9c2322e009189049bC57385751fc7922AAb0." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens RIPE", url: "https://api.dexscreener.com/latest/dex/tokens/0x4D3f37a965b21aB4122e92Dd41D2693E742c883b", published_at: null, accessed_at: 2026-09-03T03:36:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-11, CLM-15, CLM-19, CLM-20, CLM-21], excerpt: "10 robinhood uniswap pairs. Top pairAddress 0x9b8537bE0FD5cf9B2AD495C5A85130D5bAe4769D labels v2 base Ripe DAO Governance Token / RIPE quote NVIDIA • Robinhood Token / NVDA 0xd0601CE1…9EEC liquidity.usd 221537.34 volume.h24 1168258.89 fdv 936687 marketCap 4082118 pairCreatedAt 1787950805000. info.websites ripe.finance docs.ripe.finance github.com/ripe-foundation/ripe-protocol. socials x.com/ripe_dao discord.gg/hightop." }
  - { id: R-8, publisher: GeckoTerminal, title: "RIPE/NVDA Uniswap v2 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x9b8537be0fd5cf9b2ad495c5a85130d5bae4769d", published_at: null, accessed_at: 2026-09-03T03:37:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-10, CLM-15, CLM-20, EVT-2, EVT-5], excerpt: "name RIPE / NVDA pool_created_at 2026-08-28T21:00:05Z fdv_usd 935328.276 market_cap_usd 4108725.052 volume_usd.h24 1167264.781 reserve_in_usd 221791.885 transactions.h24 buys 1265 sells 1030. dex uniswap-v2-robinhood quote robinhood_0xd0601ce157db5bdc3162bbac2a2c8af5320d9eec." }
  - { id: R-9, publisher: GeckoTerminal, title: "Ripe DAO Governance Token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x4D3f37a965b21aB4122e92Dd41D2693E742c883b", published_at: null, accessed_at: 2026-09-03T03:37:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10], excerpt: "name Ripe DAO Governance Token symbol RIPE decimals 18 total_supply 304111740018045506080883 price_usd 3.0756072621 fdv_usd 935328.276 market_cap_usd 4226030.484 volume_usd.h24 1242637.374 coingecko_coin_id ripe-dao-governance-token. Top pool 0x9b85…769D." }
  - { id: R-10, publisher: Ripe, title: "ripe.finance homepage", url: "https://www.ripe.finance/", published_at: null, accessed_at: 2026-09-03T03:42:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-17, CLM-19, CLM-23, CLM-24], excerpt: "title Ripe: Borrow Against Your Tokenized Stocks Without Selling. meta description Deposit tokenized stock on Robinhood Chain and borrow GREEN against it. twitter:site @ripe_dao twitter:creator @ripe_dao. keywords tokenized stocks, Robinhood Chain, GREEN stablecoin. NVIDIA named in page copy." }
  - { id: R-11, publisher: "@ripe_dao", title: "Ripe Protocol X profile", url: "https://x.com/ripe_dao", published_at: null, accessed_at: 2026-09-03T03:43:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-19], excerpt: "Name Ripe Protocol handle @ripe_dao. Bio: The wealthy don't sell their stocks. They borrow against them. Now you can. Tokenized stock as collateral on Robinhood Chain. Borrow GREEN, keep the upside. Followers 3905." }
  - { id: R-12, publisher: Robinhood, title: "GET /rhj/assets NVDA Stock Token", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T03:41:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-15, CLM-22], excerpt: "HTTP 200. assets length 194. NVDA tokenName NVIDIA • Robinhood Token deployments.contractAddress 0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC chainId 4663 networkName Robinhood Chain status ASSET_STATUS_ACTIVE tokenDecimals 18 isin US67066G1040." }
  - { id: R-13, publisher: DefiLlama, title: "Ripe Protocol TVL", url: "https://api.llama.fi/protocol/ripe-protocol", published_at: null, accessed_at: 2026-09-03T03:36:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-9, CLM-20, CLM-24, CLM-26], excerpt: "name Ripe Protocol symbol RIPE category Lending chains Base, Robinhood Chain address base:0x2a0a59d6b975828e781ecac125dba40d7ee5ddc0 gecko_id ripe-dao-governance-token twitter ripe_dao url https://www.ripe.finance/ tvl 304746.40. currentChainTvls Robinhood Chain 200773.25 Base 103973.15 Robinhood Chain-pool2 139106.47. github Ripe-Foundation." }
  - { id: R-14, publisher: Ripe, title: "GET /api/chains/addresses?chain=robinhood", url: "https://api.ripe.finance/api/chains/addresses?chain=robinhood", published_at: null, accessed_at: 2026-09-03T03:41:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-5, CLM-9, CLM-19, CLM-23], excerpt: "chain robinhood chainId 4663. addresses.RipeToken 0x4D3f37a965b21aB4122e92Dd41D2693E742c883b RipeHq 0xD4e82AE1De673bba3B53386A2D2C630AE6630940 RipeGov 0xFa767a19c0C2B80D5A8d5b88be67de153Df1b2f2 GreenToken 0x355bB7F0f6c730e4460d620420a300fa08FF82F3. Assets NVDA 0xd060…9EEC vaultId 3 ltv 7000; UNI-V2 0x9b85…769D vaultId 2." }
  - { id: R-15, publisher: Blockscout, title: "RipeToken creation tx 0x764bb807…9a4e", url: "https://robinhoodchain.blockscout.com/tx/0x764bb807bd0c1219a0e408ecd8cf23713bb862cb042ca9d0364100af55cb9a4e", published_at: 2026-08-04T19:19:21Z, accessed_at: 2026-09-03T03:36:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13, CLM-16, EVT-6], excerpt: "timestamp 2026-08-04T19:19:21.000000Z status ok result success block_number 27870098 from 0x2944Fb9511F2c703a3a3Bd88bb0F3b2d22A79237 (is_contract false) created_contract RipeToken 0x4D3f37a965b21aB4122e92Dd41D2693E742c883b is_verified true." }
  - { id: R-16, publisher: Ripe, title: "GET /api/ripe/assets?chain=robinhood NVDA", url: "https://api.ripe.finance/api/ripe/assets?chain=robinhood", published_at: null, accessed_at: 2026-09-03T03:41:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-7, CLM-15], excerpt: "result includes symbol NVDA tokenAddress 0xd0601ce157db5bdc3162bbac2a2c8af5320d9eec name NVIDIA • Robinhood Token vaultId 3 ltv 7000; symbol UNI-V2 tokenAddress 0x9b8537be0fd5cf9b2ad495c5a85130d5bae4769d vaultAddress 0xfa767a19c0c2b80d5a8d5b88be67de153df1b2f2 vaultId 2; symbol RIPE tokenAddress 0x4d3f37…883b vaultId 2." }
  - { id: R-17, publisher: Blockscout, title: "Address 0x8bcE…937f UniswapV2Factory", url: "https://robinhoodchain.blockscout.com/address/0x8bcEaA40B9AcdfAedF85AdF4FF01F5Ad6517937f", published_at: null, accessed_at: 2026-09-03T03:41:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-15], excerpt: "hash 0x8bcEaA40B9AcdfAedF85AdF4FF01F5Ad6517937f name UniswapV2Factory is_contract true is_verified true creator_address_hash 0x9701fb0aDe1E269c8f64Ec0C7b3cfADB31A13A52." }
  - { id: R-18, publisher: Blockscout, title: "Address 0xe488…d1bf SafeProxy", url: "https://robinhoodchain.blockscout.com/address/0xe488a42D33b3Af5d3E5Cd5680938d8369716D1bf", published_at: null, accessed_at: 2026-09-03T03:41:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13], excerpt: "hash 0xe488a42D33b3Af5d3E5Cd5680938d8369716D1bf name SafeProxy is_contract true is_verified true proxy_type master_copy implementations SafeL2 0x29fcB43b46531BcA003ddC8FCB67FFE91900C762." }
  - { id: R-19, publisher: CoinGecko, title: "ripe-dao-governance-token platforms", url: "https://api.coingecko.com/api/v3/coins/ripe-dao-governance-token", published_at: null, accessed_at: 2026-09-03T03:37:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-8, CLM-17], excerpt: "id ripe-dao-governance-token symbol ripe name Ripe DAO Governance Token. platforms base 0x2a0a59d6b975828e781ecac125dba40d7ee5ddc0 robinhood 0x4d3f37a965b21ab4122e92dd41d2693e742c883b. links homepage https://www.ripe.finance twitter_screen_name ripe_dao repos_url github.com/ripe-foundation/ripe-protocol. categories include Robinhood Ecosystem." }
  - { id: R-20, publisher: GitHub, title: "Ripe-Foundation/ripe-protocol RipeToken.vy", url: "https://github.com/Ripe-Foundation/ripe-protocol/blob/master/contracts/tokens/RipeToken.vy", published_at: null, accessed_at: 2026-09-03T03:42:00Z, kind: repository, authority: primary, authenticity: confirmed, supports: [CLM-25], excerpt: "repo Ripe-Foundation/ripe-protocol default_branch master pushed_at 2026-09-02T19:30:25Z. contracts/tokens/RipeToken.vy HTTP 200 size 3664 contains Ripe DAO and ripeHq. Sibling GreenToken.vy and SavingsGreen.vy." }
  - { id: R-21, publisher: DefiLlama, title: "ripe adapter robinhood ripeToken and pool2", url: "https://raw.githubusercontent.com/DefiLlama/DefiLlama-Adapters/main/projects/ripe/index.js", published_at: null, accessed_at: 2026-09-03T03:36:00Z, kind: repository, authority: independent, authenticity: confirmed, supports: [CLM-1, CLM-9, CLM-26], excerpt: "config.robinhood ripeToken 0x4d3f37a965b21ab4122e92dd41d2693e742c883b pool2Tokens 0xba6f6cba1a4104000847d4fdccb676e99166cece RIPE/WETH and 0x9b8537be0fd5cf9b2ad495c5a85130d5bae4769d RIPE/NVDA ripeHq 0xd4e82ae1de673bba3b53386a2d2c630ae6630940 govVault 0xfa767a19c0c2b80d5a8d5b88be67de153df1b2f2 fromBlock 27870288." }
  - { id: R-22, publisher: Ripe, title: "Audits | Ripe Protocol", url: "https://docs.ripe.finance/resources/audits", published_at: null, accessed_at: 2026-09-03T03:43:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-18], excerpt: "title Audits | Ripe Protocol. Links https://www.hightop.com/docs/resources/audits/ChainSecurity-Ripe.pdf and https://www.hightop.com/docs/resources/audits/Anatomist-Ripe.pdf. PDF bodies not opened this pass." }
  - { id: R-23, publisher: "@ripe_dao", title: "Ripe ecosystem on Robinhood is growing", url: "https://x.com/ripe_dao/status/2095315675824963601", published_at: 2026-09-03T00:59:20Z, accessed_at: 2026-09-03T03:43:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-1], excerpt: "The other half of the base:0x2a0a59d6b975828e781ecac125dba40d7ee5ddc0 story: somewhere the assets go to earn. The Ripe ecosystem on Robinhood is growing." }
  - { id: R-24, publisher: "@ripe_dao", title: "Juice leaderboard is live", url: "https://x.com/ripe_dao/status/2095247818470609278", published_at: 2026-09-02T20:29:42Z, accessed_at: 2026-09-03T03:43:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-3], excerpt: "Something new is taking root in the Ripe ecosystem. You'll need base:0x2a0a59d6b975828e781ecac125dba40d7ee5ddc0. Thread 2/4: Juice leaderboard is live. Lock RIPE or RIPE LP. Leaderboard https://app.ripe.finance/robinhood/leaderboard" }
  - { id: R-25, publisher: "@PhilippInvest", title: "GREEN 7% above peg", url: "https://x.com/PhilippInvest/status/2094749690608902209", published_at: 2026-09-01T11:30:19Z, accessed_at: 2026-09-03T03:43:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-4], excerpt: "The stablecoin $GREEN from @ripe_dao is currently trading 7% above peg due to the high demand. If you want to leverage or borrow against $NVDA or $SPCX then now is the time to do it." }

gaps:
  - { priority: P0, question: "Why do Gecko/DexScreener marketCap (~$4.1M) exceed pool fdv (~$935k), and is that Base circulating mixed with RH supply?", checked: "Gecko pool fdv_usd 935328 market_cap_usd 4108725; DexScreener fdv 936687 marketCap 4082118; CoinGecko lists both Base and robinhood platforms, 2026-09-03", next: "read CoinGecko market_data circulating_supply vs each platform total_supply" }
  - { priority: P1, question: "Which addresses hold the RIPE/NVDA UNI-V2 LP, and how much sits in RipeGov vs others?", checked: "Blockscout pair holders_count 11; assets API vaultAddress RipeGov for UNI-V2 0x9b85…769D; Llama pool2 139106, 2026-09-03", next: "Blockscout token holders for 0x9b85…769D and balanceOf(RipeGov)" }
  - { priority: P1, question: "Who controls Safe 0xe488…d1bf (getCCIPAdmin) and can it mint or pause RIPE on 4663?", checked: "getCCIPAdmin() returns that Safe; ABI has pause and mint; owner() reverts; pendingHq empty, 2026-09-03", next: "Safe owners/threshold on Blockscout and mint/pause modifiers in RipeToken.vy" }
  - { priority: P1, question: "Do the ChainSecurity and Anatomist PDFs cover the Robinhood RipeHq/RipeToken deploy?", checked: "docs.ripe.finance/resources/audits links both PDFs; bodies not opened, 2026-09-03", next: "open both PDFs and match contract names/addresses to 4663" }
  - { priority: P2, question: "Is discord.gg/hightop linked from ripe.finance or only aggregators?", checked: "DexScreener and Gecko list it; homepage twitter tags @ripe_dao only this pass", next: "re-read ripe.finance footer and docs community page" }
---

# RIPE — research packet

## What it is

A lending protocol that mints GREEN against tokenized stocks. Users deposit NVIDIA • Robinhood Token and other registry assets into Ripe vaults and borrow GREEN. Token 0x4D3f…883b is verified RipeToken on chain 4663; Uniswap v2 RIPE/NVDA 0x9b85…769D is protocol pool2, not a pad graduation. ripe.finance and @ripe_dao operate it.

Themes: lending, rwa, stock-paired:NVDA, stablecoin

## Why it matters

The DexScreener RIPE/NVDA book is the visible print (~$1.17M 24h volume, ~$222k reserve on Gecko), but the name is Ripe Protocol's Robinhood-chain governance token, not a Long/Pons graduation. Llama ripe-protocol TVL ~$305k uses this CA as robinhood ripeToken and this pair as pool2. NVDA 0xd060…9EEC is the official Stock Token rail.

## What could go wrong

Aggregator marketCap (~$4.1M) is not the pool FDV (~$935k) and likely blends Base RIPE 0x2A0a…dDC0 with this RH token. Pool USD reserve is RIPE plus NVDA, not USDG. Privileged pause/mint paths exist on RipeToken even though owner() reverts. Discord is aggregator-linked only this pass.

## Product and mechanics

RipeToken 0x4D3f…883b is a 7437-byte Vyper contract (contracts/tokens/RipeToken.vy), created 2026-08-04T19:19:21Z by EOA 0x2944…9237. ripeHq() returns 0xD4e8…0940. RipeHq getAddr(3) returns the same token. api.ripe.finance lists RipeToken, GreenToken, RipeGov and NVDA collateral (vaultId 3, ltv 7000). [verified R-1 R-5 R-6 R-14 R-16]

Uniswap v2 factory 0x8bcE…937f getPair(RIPE, NVDA) returns 0x9b85…769D, created 2026-08-28T21:00:05Z. Llama adapter pool2Tokens include that pair. Assets API maps the UNI-V2 LP to RipeGov vaultId 2. Secondary RIPE/USDG and RIPE/WETH books exist with far less liquidity. [verified R-5 R-7 R-8 R-21]

## Control and security

token owner() reverts. isPaused() is false. getCCIPAdmin() is Safe 0xe488…d1bf. ABI includes pause, mint, setBlacklist and a RipeHq change timelock (7200–50400 seconds). Deployer 0x2944…9237 has no code and also created RipeHq in the next block. [verified R-5 R-15 R-18]

RipeToken and RipeHq are verified Vyper on Blockscout (RipeHq partially verified). Docs link ChainSecurity and Anatomist PDFs on hightop.com; those PDFs were not opened this pass. [verified R-1 R-2] [claim R-22]

## Team and provenance

Official domain https://www.ripe.finance with twitter:site @ripe_dao. @ripe_dao bio names Robinhood Chain. GitHub Ripe-Foundation/ripe-protocol hosts RipeToken.vy. CoinGecko platforms.robinhood is this CA. discord.gg/hightop is DexScreener/Gecko-linked; flag unconfirmed-official for Discord only. [verified R-10 R-11 R-19 R-20]

Llama ripe-protocol is this token (same RH CA and pool2 pair), not a second census name. Distinct from packed AI/NVDA and in-flight microduck/orbio. [verified R-13 R-21]

## Economics and activity

RIPE/NVDA Uniswap v2 24h volume is 1167264.78 USD and reserve_in_usd is 221791.89 at 2026-09-03T03:37:00Z from the Gecko pool endpoint. fdv_usd is 935328.28. Gecko token volume_usd.h24 is 1242637.37 across all pools. [claim R-8 R-9]

DexScreener same pair: liquidity.usd 221537.34, volume.h24 1168258.89, fdv 936687, marketCap 4082118. Blockscout holders_count 966. Pair created 2026-08-28T21:00:05Z. [claim R-1 R-7]

Llama ripe-protocol TVL is 304746.40 (Robinhood Chain 200773.25, Base 103973.15). That is protocol TVL, not the $222k pool reserve. [claim R-13]

## Material risks

- Gecko/DexScreener marketCap (~$4.1M) is not pool FDV (~$935k) and may mix Base RIPE. [verified R-7 R-8 R-19]
- Pool USD reserve is RIPE plus NVDA, not a USDG backstop. [claim R-7 R-8]
- RipeToken pause/mint and Safe CCIP admin were not fully mapped. [verified R-5]
- Audit PDF scope vs the 4663 deploy was not opened. [claim R-22]
- Discord is aggregator-linked only. [claim R-7]

## Verification passes

- Receipts: Blockscout token/hq/gov/pair/factory/Safe and the create tx, RPC name/ripeHq/getAddr/getPair, DexScreener, Gecko pool/token, Llama protocol+adapter, ripe.finance + addresses API, /rhj/assets, CoinGecko platforms, GitHub RipeToken.vy, docs audits page, and @ripe_dao posts were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-8 R-12 R-14]
- Numbers: 1167264.78 is the Gecko RIPE/NVDA pool 24h volume, not the 1242637.37 token all-pools figure. Reserve 221791.89 is that pool. Llama 304746.40 is protocol TVL. DexScreener 1168258.89 / 221537.34 is the same pair, different aggregator. [claim R-7 R-8 R-9 R-13]
- Adversarial: the assignment read this as a pad graduation vs a separate Llama Ripe Protocol. On-chain, CoinGecko, ripe.finance API and the Llama adapter use the same RH CA; this packet stays slug ripe and does not invent a second census row. [inference R-14 R-19 R-21]

## Operations log

- Base: assignment base_sha 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no ripe / Ripe Protocol / 0x4D3f…883b.
- Explorer: Blockscout api/v2 token, RipeHq, RipeGov, pair, factory, Safe, create tx 0x764bb807…9a4e, RipeHq create 0x3609addd…3380. RPC eth_getCode/eth_call with Mozilla UA at block 53108203.
- Aggregators: DexScreener latest/dex/tokens and pair; Gecko token, token/info, pool, token/pools (Mozilla UA).
- Registry: GET api.robinhood.com/rhj/assets 194 assets, NVDA 0xd060…9EEC.
- Protocol: GET api.ripe.finance/api/chains/addresses?chain=robinhood and /api/ripe/assets?chain=robinhood; Llama protocol + tvl + adapter index.js.
- Social: X Latest RIPE NVDA; from:ripe_dao; user search ripe_dao.
- Docs: ripe.finance homepage, docs.ripe.finance/resources/audits, GitHub RipeToken.vy.
- Failed: Gecko search/pools?query=RIPE returned empty this pass (direct pool URL worked); pair creation_transaction_hash null on Blockscout (factory getPair + Gecko pool_created_at used); audit PDFs not opened.
- Time: collection 2026-09-03T03:35Z–2026-09-03T03:45Z.
