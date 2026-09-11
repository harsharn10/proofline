---
slug: agent-name-service
coverage: stub
methodology_version: proofline-v1.0
---

# Agent Name Service — research record

## Identity

Agent Name Service is classified as Agent identity service.

A .agent namespace on Robinhood Chain. A name resolves to an agent identity (key, wallet, endpoint, capabilities), not a wallet. A controller wallet pays; only the agent's own key can register, signed offline. Users register or search names on agentsn.xyz. @RHAgentNS runs the site. $ANS is a Pons v2 token.

Themes: agent, tooling

TL;DR: .agent names resolve on 4663 to an agent key and wallet. Three of four registry contracts share one EOA owner; resolver owner() reverts.

## Deployment

AgentNames (registrar): 0x858D52Db9D8484b4921cd6c39Ab5D706BE2155c9 on robinhood-chain. [claim S29 S33]

AgentIdentity: 0xb7fC672671868e529dB8D123f21b655F9E819c2A on robinhood-chain. [claim S29 S34]

AgentResolver: 0x0713447f8e918A217762412005529E339f005f9f on robinhood-chain. [claim S29 S35]

AgentMarket: 0x7FcD3C337B6F9203db4287c46A1a607bE6d5357D on robinhood-chain. [claim S29 S36]

ANS token (PonsV2LauncherToken): 0xdB9Bc67f022d967C3a912Ebe3e6ffe25d5F70C24 on robinhood-chain. [claim S31 S32]

Pons v2 launch factory (token launchFactory): 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e on robinhood-chain. [claim S37]

PonsV2BondingCurve (token curve): 0x09eD966e77c02DDd1FF43948D284A85d8e92a0DE on robinhood-chain. [claim S38]

Token deployer EOA: 0x4B4BCA71E68E80130E477Ba831399A12A088Ed69 on robinhood-chain. [claim S39]

RobinhoodLocker (ANS lock): 0xD0f7d8c6e9f6D80c297bEbe4F7fD1B9C8125C32F on robinhood-chain. [claim S40]

Registry owner / deployer EOA: 0x35A95822889e73f54ffD06371AB53Dd0Fd646155 on robinhood-chain. [claim S33 S41]

## Control

owner() on AgentNames, AgentIdentity and AgentMarket is EOA 0x35A9…6155 with empty code. AgentResolver owner() reverts. No timelock address was located. [verified S33 S34 S35 S36 S41]

The $ANS token deployer 0x4B4B…Ed69 is a different empty-code EOA. Pons v2 factory owner() is 0x263e…19Dd, the Pons Safe, not the ANS registry owner. [verified S37 S39]

## Security

No audit report URL was found on the site, docs or X. [unknown]

## Engineering

_Research pending._

## Team

Site, docs and @RHAgentNS cross-link the same product. No legal name, GitHub org, or named maintainer is published. [claim S28 S30]

## Product and economics

A .agent name is leased, not owned. register is commit-and-reveal and needs an EIP-712 signature from the agent key; a designated wallet submits the transaction and pays. The resolver implements ENS-shaped addr/text/name reads. [claim S29]

A sale moves the name's controller, not the agent identity; pointing the name at a different agent still needs that agent's signature. [claim S29]

$ANS is a separate Pons v2 launcher token, not the registrar. [verified S31 S37]

DexScreener's ANS/ETH Uniswap v4 pair showed $5,290.49 liquidity and $1.07 of 24h volume on 2026-09-10. That is the token book, not registry fee revenue. [claim S32]

Docs say registration, renewal and marketplace fees are governance-configurable; the 4663 recipient was not printed. [claim S29]

## Communications

_Research pending._

## Findings

- Three registry contracts return the same owner address; that address has no code. [verified S33 S34 S36 S41]
- No audit report was located. [unknown]
- Registration ETH and any $ANS buyback sink are not printed on docs. [claim S29]

- Three registry owner() calls return the same address, which has no code; this does not establish all privileged paths. [verified S33 S34 S36 S41]
- Audit absence and unpublished fee sink leave revoke and treasury behaviour unread. [unknown]

- Receipts: collector reports opening site, docs, X and DexScreener on 2026-09-10 and recording RPC reads for the listed contracts; these are separate evidence types. [claim S28 S29 S30 S32 S33]
- Numbers: liquidity and 24h volume are the DexScreener v4 pair, not a registry TVL. [claim S32]
- Adversarial: a same-ticker ANS token or a Pons-launched memecoin could be confused with the registrar; the docs-named four-contract set and the X bio link to agentsn.xyz argue this row is the namespace, not the pad. [inference S29 S30]

## Sources

- S28 — Official site.
- S29 — Docs / contracts.
- S30 — @RHAgentNS profile and pinned post.
- S31 — eth_getCode ANS token.
- S32 — ANS/ETH Uniswap v4.
- S33 — eth_getCode/owner AgentNames.
- S34 — eth_getCode/owner AgentIdentity.
- S35 — eth_getCode/owner AgentResolver.
- S36 — eth_getCode/owner AgentMarket.
- S37 — eth_getCode Pons v2 factory.
- S38 — eth_getCode PonsV2BondingCurve.
- S39 — eth_getCode token deployer.
- S40 — eth_getCode RobinhoodLocker.
- S41 — eth_getCode registry owner EOA.

## Review metadata

Compiled from WORK-20260910-grok-heavy-agent-name-service by grok-heavy as of 2026-09-10T18:30:00Z; methodology_version: proofline-v1.0.
