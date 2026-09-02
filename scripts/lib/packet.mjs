import { createHash } from "node:crypto";
import { parse as parseYaml } from "yaml";
import { leafLabel } from "./taxonomy.mjs";
import { conductWarnings } from "./voice.mjs";
import { REQUIRED_HEADINGS, PENDING_LINE } from "./research-md.mjs";
import { reviewKeyFor } from "./telegram.mjs";

const REQUIRED_TOP = [
  "contract_version", "work_id", "producer", "role", "base_sha", "slug", "name", "packet_tier",
  "as_of", "prior_packet", "owned_slugs", "allowed_paths", "identity", "classification", "qualifying",
  "links", "deployments", "metrics", "claims", "reproductions", "conflicts", "events", "receipts", "gaps",
];
const QUALIFYING = ["deployed_on_chain", "native_play", "citable", "research_story"];
const PACKET_HEADINGS = [
  "What it is", "Why it matters", "What could go wrong", "Product and mechanics",
  "Control and security", "Team and provenance", "Economics and activity", "Material risks",
  "Verification passes", "Operations log",
];
const HASH_ID = (value) => createHash("sha1").update(value, "utf8").digest("hex").slice(0, 16);

export function normalizeUrl(raw) {
  try {
    const url = new URL(String(raw).trim());
    url.hash = "";
    for (const key of [...url.searchParams.keys()])
      if (/^utm_/i.test(key) || ["ref", "s", "t"].includes(key.toLowerCase())) url.searchParams.delete(key);
    const path = url.pathname.replace(/\/$/, "");
    const port = url.port ? `:${url.port}` : "";
    return `${url.protocol.toLowerCase()}//${url.hostname.toLowerCase()}${port}${path}${url.search}`;
  } catch { return String(raw ?? "").trim(); }
}

export const normalizeText = (value) => String(value ?? "").trim().replace(/\s+/g, " ");
export const sourceIdentity = (source) => HASH_ID(`${normalizeUrl(source.url)}|${normalizeText(source.claim)}`);
export const feedIdentity = ({ sourceUrl, slug, date, title }) =>
  HASH_ID(`${normalizeUrl(sourceUrl)}|${slug}|${date}|${normalizeText(title)}`);

export function parsePacket(text) {
  const normalized = String(text).replace(/\r\n/g, "\n");
  const match = normalized.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
  if (!match) throw new Error("packet frontmatter must be enclosed by leading --- fences");
  let frontmatter;
  try { frontmatter = parseYaml(match[1]); }
  catch (error) { throw new Error(`packet frontmatter: ${error.message.split("\n")[0]}`); }
  return { frontmatter, body: normalized.slice(match[0].length).trim() };
}

function bodySections(body) {
  const sections = new Map();
  let current = null;
  for (const line of String(body ?? "").replace(/\r\n/g, "\n").split("\n")) {
    const heading = line.match(/^## (.+?)\s*$/);
    if (heading) { current = heading[1]; sections.set(current, []); }
    else if (current) sections.get(current).push(line);
  }
  return new Map([...sections].map(([heading, lines]) => [heading, lines.join("\n").trim()]));
}

function paragraphs(text) {
  return String(text ?? "").split(/\n\s*\n/).map((part) => part.trim()).filter(Boolean);
}

function definedIds(frontmatter) {
  const rows = (key) => Array.isArray(frontmatter[key]) ? frontmatter[key] : [];
  return {
    CLM: new Set(rows("claims").map((row) => row.id)),
    CON: new Set(rows("conflicts").map((row) => row.id)),
    EVT: new Set(rows("events").map((row) => row.id)),
    R: new Set(rows("receipts").map((row) => row.id)),
    REP: new Set(rows("reproductions").map((row) => row.id)),
  };
}

export function checkPacket(frontmatter, body) {
  const errors = [];
  if (!frontmatter || typeof frontmatter !== "object" || Array.isArray(frontmatter)) return ["frontmatter must be an object"];
  const rows = (key) => Array.isArray(frontmatter[key]) ? frontmatter[key] : [];
  for (const key of REQUIRED_TOP) if (!(key in frontmatter)) errors.push(`missing required field ${key}`);
  if (frontmatter.contract_version !== "proofline-research-v2") errors.push("contract_version must be proofline-research-v2");
  if (!/^WORK-[0-9]{8}-[a-z-]+$/.test(frontmatter.work_id ?? "")) errors.push("work_id must match WORK-YYYYMMDD-name");
  if (!/^[a-f0-9]{40}$/.test(frontmatter.base_sha ?? "")) errors.push("base_sha must be 40 lowercase hex characters");
  if (!/^[a-z0-9-]+$/.test(frontmatter.slug ?? "")) errors.push("slug must match ^[a-z0-9-]+$");
  if (!['seed', 'full', 'update'].includes(frontmatter.packet_tier)) errors.push("packet_tier must be seed, full or update");
  if (!['collector', 'verifier', 'compiler'].includes(frontmatter.role)) errors.push("role must be collector, verifier or compiler");
  if (!Array.isArray(frontmatter.owned_slugs) || !frontmatter.owned_slugs.includes(frontmatter.slug)) errors.push("owned_slugs must include slug");
  if (!Array.isArray(frontmatter.allowed_paths) || !frontmatter.allowed_paths.length) errors.push("allowed_paths must be a non-empty array");
  if (!frontmatter.identity || !frontmatter.classification || !frontmatter.qualifying) errors.push("identity, classification and qualifying blocks are required");
  for (const key of QUALIFYING) if (!frontmatter.qualifying?.[key]) errors.push(`qualifying.${key} is required`);
  if (!leafLabel(frontmatter.classification?.primary_leaf)) errors.push(`classification.primary_leaf ${frontmatter.classification?.primary_leaf} is not in schema/taxonomy.json`);

  for (const list of ["links", "deployments", "metrics", "claims", "reproductions", "conflicts", "events", "receipts", "gaps"])
    if (!Array.isArray(frontmatter[list])) errors.push(`${list} must be an array`);
  const ids = definedIds(frontmatter);
  for (const [kind, values] of Object.entries(ids)) {
    const rows = kind === "CLM" ? frontmatter.claims : kind === "CON" ? frontmatter.conflicts : kind === "EVT" ? frontmatter.events : kind === "R" ? frontmatter.receipts : frontmatter.reproductions;
    if (Array.isArray(rows) && values.size !== rows.length) errors.push(`${kind} ids must be unique`);
    for (const id of values) if (!new RegExp(`^${kind}-[1-9][0-9]*$`).test(id ?? "")) errors.push(`invalid ${kind} id ${id}`);
  }

  const allText = `${JSON.stringify(frontmatter)}\n${body ?? ""}`;
  for (const match of allText.matchAll(/\b(CLM|CON|EVT|REP|R)-[1-9][0-9]*\b/g))
    if (!ids[match[1]].has(match[0])) errors.push(`${match[0]} is referenced but not defined in this packet`);

  for (const claim of rows("claims")) {
    if (!['verified', 'claim', 'inference', 'disputed', 'unknown'].includes(claim.class)) errors.push(`${claim.id}: invalid claim class ${claim.class}`);
    if (claim.class === "verified" && !(claim.reproduction_ids?.length)) errors.push(`${claim.id}: verified claims require a reproduction_id`);
  }
  for (const reproduction of rows("reproductions"))
    if (!(reproduction.receipt_ids?.length)) errors.push(`${reproduction.id}: reproduction requires at least one receipt_id`);
  for (const deployment of rows("deployments"))
    if (!(deployment.receipt_ids?.length)) errors.push(`deployment ${deployment.label ?? "(unnamed)"} requires at least one receipt_id`);
  for (const metric of rows("metrics"))
    if (!(metric.receipt_ids?.length)) errors.push(`metric ${metric.kind ?? "(unnamed)"} requires at least one receipt_id`);
  for (const event of rows("events"))
    if (!(event.receipt_ids?.length)) errors.push(`${event.id}: event requires at least one receipt_id`);

  if (frontmatter.scoring !== undefined) errors.push("scoring is owned by editorial review and is not accepted from packets");
  if (frontmatter.review?.approver && frontmatter.review.approver !== "pending") errors.push("review.approver is owned by the controller");
  for (const event of rows("events"))
    if (![undefined, "not-evaluated", "pending"].includes(event.channel_recommendation))
      errors.push(`${event.id}: channel_recommendation is outside packet ownership`);

  for (const warning of conductWarnings(allText, "packet")) errors.push(warning);
  if (frontmatter.packet_tier === "full") {
    const sections = bodySections(body);
    for (const heading of PACKET_HEADINGS) if (!sections.has(heading)) errors.push(`full packet body is missing ## ${heading}`);
    for (const heading of ["Product and mechanics", "Control and security", "Team and provenance", "Economics and activity", "Material risks", "Verification passes"])
      for (const paragraph of paragraphs(sections.get(heading)))
        if (!/\[(?:verified|claim|inference|disputed|unknown)(?:\s+R-[1-9][0-9]*)*\]\s*$/.test(paragraph))
          errors.push(`${heading}: paragraph must end with a packet evidence tag`);
  }
  return [...new Set(errors)];
}

function mergeUnique(existing, incoming, identity) {
  const out = [...(existing ?? [])];
  const positions = new Map(out.map((row, index) => [identity(row), index]));
  for (const row of incoming ?? []) {
    const key = identity(row);
    if (positions.has(key)) out[positions.get(key)] = row;
    else { positions.set(key, out.length); out.push(row); }
  }
  return out;
}

function sourceLedger(frontmatter, priorSources) {
  const existing = priorSources?.sources ?? [];
  const usedIds = existing.map((source) => Number(String(source.id).slice(1))).filter(Number.isFinite);
  let next = Math.max(0, ...usedIds) + 1;
  const byIdentity = new Map(existing.map((source) => [sourceIdentity(source), source]));
  const receiptToSource = new Map();
  const additions = [];
  for (const receipt of frontmatter.receipts ?? []) {
    const candidate = {
      url: receipt.url,
      publisher: receipt.publisher,
      kind: receipt.kind,
      accessed_at: receipt.accessed_at,
      claim: receipt.title,
      excerpt: receipt.excerpt ?? "",
      hash: null,
      archive_url: null,
      researcher: frontmatter.producer,
      available: true,
    };
    const key = sourceIdentity(candidate);
    let source = byIdentity.get(key);
    if (!source) {
      source = { id: `S${next++}`, ...candidate };
      byIdentity.set(key, source);
      additions.push(source);
    }
    receiptToSource.set(receipt.id, source.id);
  }
  return { ledger: { slug: frontmatter.slug, sources: [...existing, ...additions] }, receiptToSource };
}

function sourceIds(receiptIds, receiptToSource) {
  return [...new Set((receiptIds ?? []).map((id) => receiptToSource.get(id)).filter(Boolean))];
}

function claimForAddress(frontmatter, address) {
  return (frontmatter.claims ?? []).find((claim) =>
    claim.class === "verified" && claim.reproduction_ids?.length &&
    normalizeText(typeof claim.value === "object" ? claim.value?.address ?? claim.value?.value : claim.value).toLowerCase() === normalizeText(address).toLowerCase(),
  );
}

function mainnetAllowed(frontmatter) {
  const receipts = new Map((frontmatter.receipts ?? []).map((receipt) => [receipt.id, receipt]));
  const verifiedDeployment = (frontmatter.deployments ?? []).some((deployment) => {
    const address = deployment.address?.value;
    const docsReceipt = (deployment.receipt_ids ?? []).some((id) => {
      const receipt = receipts.get(id);
      const published = `${receipt?.url ?? ""} ${receipt?.title ?? ""} ${receipt?.excerpt ?? ""}`.toLowerCase();
      return receipt?.kind === "docs" && published.includes(String(address).toLowerCase());
    });
    return address && deployment.address?.exists_on_4663 === true && (claimForAddress(frontmatter, address) || docsReceipt);
  });
  const supportedMetric = (frontmatter.metrics ?? []).some((metric) =>
    (metric.receipt_ids ?? []).some((id) => ["onchain", "aggregator"].includes(receipts.get(id)?.authority)),
  );
  return verifiedDeployment || supportedMetric;
}

function canonicalLifecycle(frontmatter, priorCensusRow) {
  const requested = frontmatter.classification.lifecycle;
  if (requested === "unknown") return priorCensusRow?.lifecycle ?? "announced";
  if (requested === "mainnet" && !mainnetAllowed(frontmatter)) return priorCensusRow?.lifecycle ?? "announced";
  return requested;
}

function mappedTag(text, receiptToSource) {
  return String(text).replace(/\[(verified|claim|inference|disputed|unknown)((?:\s+R-[1-9][0-9]*)*)\]/g, (_all, cls, rawIds) => {
    if (cls === "unknown") return "[unknown]";
    const ids = sourceIds(rawIds.trim().split(/\s+/).filter(Boolean), receiptToSource);
    return ids.length ? `[${cls} ${ids.join(" ")}]` : "[unknown]";
  });
}

function stripTag(text) {
  const match = String(text).match(/\[(verified|claim|inference|disputed|unknown)((?:\s+R-[1-9][0-9]*)*)\]\s*$/);
  if (!match) return { text: normalizeText(text), cls: "unknown", receipts: [] };
  return {
    text: normalizeText(String(text).slice(0, match.index).replace(/^[-*]\s+/, "")),
    cls: match[1],
    receipts: match[2].trim().split(/\s+/).filter(Boolean),
  };
}

function findingsFromBody(frontmatter, body, receiptToSource, priorProject) {
  const sections = bodySections(body);
  const positive = [], risk = [], unresolved = [];
  const addFinding = (bucket, paragraph) => {
    const parsed = stripTag(paragraph);
    if (!parsed.text) return;
    const sources = sourceIds(parsed.receipts, receiptToSource);
    const finding = { text: parsed.text, class: parsed.cls, ...(parsed.cls === "unknown" ? {} : { sources }) };
    bucket.push(finding);
    if (parsed.cls === "disputed") unresolved.push({ text: parsed.text });
  };
  for (const paragraph of paragraphs(sections.get("Verification passes"))) {
    const parsed = stripTag(paragraph);
    addFinding(["verified", "claim"].includes(parsed.cls) ? positive : risk, paragraph);
  }
  for (const paragraph of paragraphs(sections.get("Material risks"))) addFinding(risk, paragraph);
  for (const conflict of frontmatter.conflicts ?? [])
    if (conflict.status !== "resolved") unresolved.push({ text: `${conflict.field} remains unresolved (${conflict.id}).` });
  const missing = (frontmatter.gaps ?? []).map((gap) => ({ text: [gap.question, gap.next ? `Next: ${gap.next}` : null].filter(Boolean).join(" ") }));
  if (frontmatter.classification.lifecycle === "mainnet" && !mainnetAllowed(frontmatter))
    missing.push({ text: "Mainnet status was not promoted because the packet did not meet the explorer, RPC, docs-address or supported-metric bar." });
  return {
    positive: mergeUnique(priorProject?.findings?.positive, positive, (row) => row.text),
    risk: mergeUnique(priorProject?.findings?.risk, risk, (row) => row.text),
    missing: mergeUnique(priorProject?.findings?.missing, missing, (row) => row.text),
    unresolved: mergeUnique(priorProject?.findings?.unresolved, unresolved, (row) => row.text),
  };
}

function researchDocument(frontmatter, body, receiptToSource, ledger) {
  const source = bodySections(body);
  const mapped = (heading) => mappedTag(source.get(heading) ?? "", receiptToSource);
  const identity = [
    frontmatter.identity.canonical_name ? `${frontmatter.identity.canonical_name} is classified as ${leafLabel(frontmatter.classification.primary_leaf)}.` : null,
    mapped("What it is"),
  ].filter(Boolean).join("\n\n") || PENDING_LINE;

  const deploymentParagraphs = (frontmatter.deployments ?? []).map((deployment) => {
    const address = deployment.address?.value ?? "not-verified";
    const claim = claimForAddress(frontmatter, address);
    const cls = claim && deployment.address?.exists_on_4663 === true ? "verified" : "claim";
    const sources = sourceIds(deployment.receipt_ids, receiptToSource);
    return `${deployment.label}: ${address} on ${deployment.address?.chain ?? "other"}. ${sources.length ? `[${cls} ${sources.join(" ")}]` : "[unknown]"}`;
  });
  const controlSecurity = paragraphs(source.get("Control and security")).map((paragraph) => mappedTag(paragraph, receiptToSource));
  const securityWords = /\b(audit|security|bounty|incident|exploit|vulnerab)/i;
  const control = controlSecurity.filter((paragraph) => !securityWords.test(paragraph));
  const security = controlSecurity.filter((paragraph) => securityWords.test(paragraph));
  const product = [mapped("Product and mechanics"), mapped("Economics and activity")].filter(Boolean).join("\n\n");
  const communications = (frontmatter.events ?? []).filter((event) => ["company", "ct"].includes(event.type)).map((event) => {
    const sources = sourceIds(event.receipt_ids, receiptToSource);
    return `${event.title ?? event.summary ?? "Communication recorded."} ${sources.length ? `[${event.evidence_state === "verified" ? "verified" : "claim"} ${sources.join(" ")}]` : "[unknown]"}`;
  });
  const findings = [mapped("What could go wrong"), mapped("Material risks"), mapped("Verification passes")].filter(Boolean).join("\n\n");
  const usedIds = new Set();
  for (const value of [identity, ...deploymentParagraphs, ...control, ...security, product, ...communications, findings])
    for (const match of String(value).matchAll(/\bS[1-9][0-9]*\b/g)) usedIds.add(match[0]);
  const byId = new Map(ledger.sources.map((row) => [row.id, row]));
  const sources = [...usedIds].sort((a, b) => Number(a.slice(1)) - Number(b.slice(1)))
    .map((id) => `- ${id} — ${byId.get(id)?.title ?? byId.get(id)?.claim ?? byId.get(id)?.url ?? "Source receipt"}.`).join("\n") || "No source receipts were compiled.";
  const sectionBody = new Map([
    ["Identity", identity],
    ["Deployment", deploymentParagraphs.join("\n\n") || PENDING_LINE],
    ["Control", control.join("\n\n") || PENDING_LINE],
    ["Security", security.join("\n\n") || PENDING_LINE],
    ["Engineering", PENDING_LINE],
    ["Team", mapped("Team and provenance") || PENDING_LINE],
    ["Product and economics", product || PENDING_LINE],
    ["Communications", communications.join("\n\n") || PENDING_LINE],
    ["Findings", findings || PENDING_LINE],
    ["Sources", sources],
    ["Review metadata", `Compiled from ${frontmatter.work_id} by ${frontmatter.producer} as of ${frontmatter.as_of}; methodology_version: proofline-v1.0.`],
  ]);
  return `---\nslug: ${frontmatter.slug}\ncoverage: stub\nmethodology_version: proofline-v1.0\n---\n\n# ${frontmatter.name} — research record\n\n${REQUIRED_HEADINGS.map((heading) => `## ${heading}\n\n${sectionBody.get(heading)}`).join("\n\n")}\n`;
}

function changedFields(prior, next) {
  if (!prior) return { prior: null, next: { coverage: next.coverage, lifecycle: next.lifecycle } };
  const before = {}, after = {};
  for (const key of ["name", "category", "lifecycle", "summary", "deployments", "metrics"]) {
    if (JSON.stringify(prior[key] ?? null) !== JSON.stringify(next[key] ?? null)) {
      before[key] = prior[key] ?? null;
      after[key] = next[key] ?? null;
    }
  }
  return { prior: Object.keys(before).length ? before : null, next: Object.keys(after).length ? after : null };
}

export function compile(packet, priorProject = null, priorCensusRow = null, priorSources = null, priorFeed = null) {
  const frontmatter = packet.frontmatter ?? packet;
  const body = packet.body ?? "";
  const errors = checkPacket(frontmatter, body);
  if (errors.length) throw new Error(errors.join("\n"));
  const { ledger, receiptToSource } = sourceLedger(frontmatter, priorSources);
  const lifecycle = canonicalLifecycle(frontmatter, priorCensusRow);
  const primaryLeaf = frontmatter.classification.primary_leaf;
  const identityConflicts = (frontmatter.conflicts ?? []).filter((row) => row.status !== "resolved" && String(row.field).startsWith("identity"));
  const identityStatus = identityConflicts.length ? "conflicted" : frontmatter.classification.evidence_state === "verified" ? "verified" : "provisional";
  const identity = {
    aliases: frontmatter.identity.aliases ?? [],
    symbols: frontmatter.identity.symbols ?? [],
    entity_kind: frontmatter.identity.entity_kind,
    chain_scope: frontmatter.identity.chain_scope,
    status: identityStatus,
    ...(identityConflicts.length ? { conflict_ids: identityConflicts.map((row) => row.id) } : {}),
  };
  const links = (frontmatter.links ?? []).map(({ kind, url }) => ({ kind, url }));
  const qualifying = Object.fromEntries(QUALIFYING.map((key) => {
    const test = frontmatter.qualifying[key];
    const claims = (test.claim_ids ?? []).map((id) => (frontmatter.claims ?? []).find((claim) => claim.id === id));
    return [key, { value: test.status === "pass", note: test.note || `${key.replaceAll("_", " ")} ${test.status}.`, verified: claims.length > 0 && claims.every((claim) => claim?.class === "verified") }];
  }));
  const censusRow = {
    ...(priorCensusRow ?? {}),
    slug: frontmatter.slug,
    name: frontmatter.identity.canonical_name ?? frontmatter.name,
    identity,
    category: leafLabel(primaryLeaf),
    lifecycle,
    coverage: "stub",
    official_links: mergeUnique(priorCensusRow?.official_links, links, (row) => `${row.kind}|${normalizeUrl(row.url)}`),
    discovery_source: priorCensusRow?.discovery_source ?? `${frontmatter.producer} packet ${frontmatter.work_id}`,
    ...(frontmatter.identity.official_handle ? { handle: frontmatter.identity.official_handle } : {}),
    tree: { primary: primaryLeaf, ...((frontmatter.classification.secondary_leaves ?? []).length ? { secondary: frontmatter.classification.secondary_leaves } : {}) },
    qualifying,
  };

  const deployments = (frontmatter.deployments ?? []).map((deployment) => {
    const address = deployment.address?.value ?? "not-verified";
    const sources = sourceIds(deployment.receipt_ids, receiptToSource);
    return {
      label: deployment.label,
      chain: deployment.address?.chain ?? "other",
      address,
      role: deployment.role,
      verified: Boolean(address !== "not-verified" && deployment.address?.exists_on_4663 === true && claimForAddress(frontmatter, address)),
      sources,
    };
  });
  const metrics = (frontmatter.metrics ?? []).map((metric) => ({
    kind: metric.kind,
    value: metric.value,
    ...(metric.kind === "holders" ? {} : { currency: "USD" }),
    as_of: metric.as_of,
    class: "claim",
    sources: sourceIds(metric.receipt_ids, receiptToSource),
  })).filter((metric) => metric.sources.length);
  const relationships = (frontmatter.claims ?? []).filter((claim) => claim.field === "relationship" && claim.value?.kind === "depends-on").map((claim) => claim.value.slug);
  const sections = bodySections(body);
  const summary = normalizeText(paragraphs(sections.get("What it is"))[0] ?? frontmatter.classification.rationale ?? priorProject?.summary);
  const project = {
    ...(priorProject ?? {}),
    slug: frontmatter.slug,
    name: censusRow.name,
    symbol: frontmatter.identity.symbols?.[0] ?? priorProject?.symbol ?? null,
    category: censusRow.category,
    lifecycle,
    coverage: "stub",
    summary,
    official_links: mergeUnique(priorProject?.official_links, links, (row) => `${row.kind}|${normalizeUrl(row.url)}`),
    dependencies: [...new Set([...(priorProject?.dependencies ?? []), ...relationships])],
    deployments: mergeUnique(priorProject?.deployments, deployments, (row) => `${row.chain}|${String(row.address).toLowerCase()}`),
    ...(metrics.length || priorProject?.metrics ? { metrics: mergeUnique(priorProject?.metrics, metrics, (row) => row.kind) } : {}),
    review: priorProject?.review ?? { researcher: frontmatter.producer, approver: "pending", methodology_version: "proofline-v1.0", reviewed_at: frontmatter.as_of.slice(0, 10), published_at: null },
    findings: findingsFromBody(frontmatter, body, receiptToSource, priorProject),
  };
  const feedItems = (frontmatter.events ?? []).filter((event) => ["feed", "profile", "both"].includes(event.site_recommendation)).map((event) => {
    const sources = sourceIds(event.receipt_ids, receiptToSource);
    // Packet events do not currently carry sourceUrl, so the first cited receipt is the canonical fallback.
    const sourceUrl = event.sourceUrl ?? (frontmatter.receipts ?? []).find((receipt) => event.receipt_ids?.includes(receipt.id))?.url;
    const date = String(event.occurred_at ?? event.observed_at ?? frontmatter.as_of).slice(0, 10);
    const title = event.title ?? `${event.type} update`;
    return {
      id: feedIdentity({ sourceUrl, slug: frontmatter.slug, date, title }),
      date,
      kind: event.type,
      title,
      body: event.summary ?? event.impact ?? "Update recorded from the cited source.",
      ...(sourceUrl ? { sourceUrl } : {}),
      sources,
    };
  }).filter((item) => item.sources.length);
  const feed = { slug: frontmatter.slug, items: mergeUnique(priorFeed?.items, feedItems, (row) => row.id) };
  const research = researchDocument(frontmatter, body, receiptToSource, ledger);
  const changes = changedFields(priorProject, project);
  const hasCorrection = (frontmatter.claims ?? []).some((claim) => claim.supersedes) || (frontmatter.conflicts ?? []).some((conflict) => conflict.status === "resolved");
  const isNewPacket = !frontmatter.prior_packet;
  const openConflictIds = (frontmatter.conflicts ?? []).filter((conflict) => conflict.status !== "resolved").map((conflict) => conflict.id);
  const hasMaterialRisk = project.findings.risk.some((finding) => finding.class && finding.class !== "unknown");
  const changelog = {
    date: frontmatter.as_of.slice(0, 10),
    slug: frontmatter.slug,
    type: isNewPacket ? "coverage" : (hasCorrection ? "correction" : "finding"),
    severity: (frontmatter.events ?? []).some((event) => event.impact === "urgent") ? "Risk" : hasMaterialRisk || (frontmatter.events ?? []).some((event) => event.impact === "material") ? "Material" : "Info",
    title: isNewPacket ? "Initial research compiled" : (hasCorrection ? "Research correction compiled" : "Research record updated"),
    detail: isNewPacket
      ? "Identity, evidence, deployments and open questions were compiled into an initial research record."
      : `New packet evidence was mapped into the canonical record; unresolved conflicts and evidence gaps remain explicit.${openConflictIds.length ? ` Open conflicts: ${openConflictIds.join(", ")}.` : ""}`,
    prior: changes.prior,
    new: changes.next,
    reviewer: frontmatter.producer,
    methodology_version: "proofline-v1.0",
  };
  changelog.review_key = reviewKeyFor(changelog);
  return { project, censusRow, sources: ledger, feed, research, changelog, receiptToSource };
}
