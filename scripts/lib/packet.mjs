// Packet v2 reader and validator (docs/research-system.md §5). One packet is one Markdown file at
// research/inbox/packets/<slug>/<work-id>.md: YAML frontmatter between the first two `---` lines is the
// dossier, the rest is the narrative. The schema (schema/packet.schema.json) covers shape and vocabulary;
// everything referential, path-based or role-based is here, because a JSON Schema cannot see the file's
// name, the census, or the body's headings.
import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import { parse } from "yaml";
import { validateAgainst } from "./schemas.mjs";
import { mainnetReceiptFromPulled, deploymentReceiptFromPulled } from "./checks.mjs";
import { leafLabel } from "./taxonomy.mjs";
import { conductWarnings, voiceWarnings } from "./voice.mjs";
import { REQUIRED_HEADINGS, PENDING_LINE } from "./research-md.mjs";
import { reviewKeyFor } from "./telegram.mjs";
import { enforceResearchMinimums } from "./research-minimums.mjs";
import { nextResearchState } from './research-state.mjs';
import { mergeWebsiteEvents } from './website-events.mjs';
import { reproducedAddressClaim } from './deployment-evidence.mjs';

/** Machine producer ids (research-system §2). Any of them, or a human GitHub id, may file a packet; none
 *  may resolve a conflict — that is a controller's call — so the resolver check rejects the whole list. */
export const PRODUCER_IDS = ["grok-heavy", "grok-bot", "supergrok", "codex", "claude"];
const MACHINE_RESOLVERS = new Set(PRODUCER_IDS.map((id) => normalizeIdentity(id)));

/** The ten body headings of §5, in order. */
export const BODY_SECTIONS = [
  "What it is",
  "Why it matters",
  "What could go wrong",
  "Product and mechanics",
  "Control and security",
  "Team and provenance",
  "Economics and activity",
  "Material risks",
  "Verification passes",
  "Operations log",
];

const PACKET_ROOT = "research/inbox/packets";
const TEMPLATE_ROOT = "docs/templates/";
const ZERO_SHA = "0".repeat(40);
const ICARUS_FIELDS_SINCE = "2026-09-03";

export function normalizeIdentity(value) {
  return String(value ?? "")
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "");
}

export function normalizeHandle(value) {
  return normalizeIdentity(String(value ?? "").replace(/^@/, ""));
}

/** Host of a URL without "www.", lowercased; "" when the value is not a URL. */
export function normalizeDomain(value) {
  const text = String(value ?? "").trim();
  if (!text) return "";
  try {
    return new URL(text.includes("://") ? text : `https://${text}`).host.toLowerCase().replace(/^www\./, "");
  } catch {
    return "";
  }
}

function duplicates(values) {
  const seen = new Set(), duplicate = new Set();
  for (const value of values) seen.has(value) ? duplicate.add(value) : seen.add(value);
  return [...duplicate];
}

/**
 * The link kinds that assert ownership of a domain. An `app` link is where a product is *used*, not a
 * claim on whoever runs it: every token launched through a pad links its page on the pad's app, and that
 * page is the pad's, not a second claim on the pad's identity (§7).
 */
const OWNED_LINK_KINDS = new Set(["site", "docs"]);
const ADDRESS_IN_URL_RE = /0x[0-9a-fA-F]{40}/g;

/** Domains an entity claims as its own: its official domain plus the hosts of its site and docs links. */
function ownedDomains(links, officialDomain) {
  const out = new Set();
  const add = (value) => { const host = normalizeDomain(value); if (host) out.add(host); };
  add(officialDomain);
  for (const link of links ?? []) if (OWNED_LINK_KINDS.has(link?.kind)) add(link.url);
  return out;
}

/**
 * The names a record answers to, normalized, keyed to the text they came from. Primary names — the
 * record's name and canonical name — always count. An alias counts unless it is one of the record's own
 * symbols: a ticker in the alias list is a ticker, and two records that agree only on a ticker are not
 * the same entity (§7).
 */
function identityNames(primary, aliases, symbols) {
  const symbolKeys = new Set((symbols ?? []).map(normalizeIdentity).filter(Boolean));
  const names = new Map();
  for (const value of primary) {
    const key = normalizeIdentity(value);
    if (key && !names.has(key)) names.set(key, String(value));
  }
  for (const value of aliases ?? []) {
    const key = normalizeIdentity(value);
    if (key && !names.has(key) && !symbolKeys.has(key)) names.set(key, String(value));
  }
  return names;
}

/** Addresses the packet says it reproduced on 4663 — the only ones strong enough to join two identities. */
function reproducedAddresses(record) {
  const out = new Set();
  for (const deployment of record.deployments ?? []) {
    const address = deployment?.address;
    if (address?.exists_on_4663 === true && typeof address.value === "string") out.add(address.value.toLowerCase());
  }
  return out;
}

/** Addresses a census row carries, including any written into the URLs it links. */
function censusAddresses(row) {
  const out = new Set();
  for (const value of row.addresses ?? []) if (typeof value === "string") out.add(value.toLowerCase());
  for (const link of row.official_links ?? [])
    for (const match of String(link?.url ?? "").match(ADDRESS_IN_URL_RE) ?? []) out.add(match.toLowerCase());
  return out;
}

/**
 * Every canonical row this packet's identity runs into, and how hard it runs into it.
 *
 * `strong` names the surface the two share — the same official handle, the same owned domain, or an
 * address one reproduced that the other already carries. Those are the only collisions that have to be
 * recorded under `identity.possible_matches`: they are evidence the two records may be one entity.
 * `strong` is null when all the two share is a *name*, which is not evidence of anything on a chain
 * where a launchpad lists its launches and a hundred tokens borrow a word. A ticker is never an
 * identity: an alias that is one of the record's own symbols is a ticker, not a second name (§7).
 */
export function identityCollisions(record, census = []) {
  const identity = record?.identity ?? {};
  const names = identityNames([record?.name, identity.canonical_name], identity.aliases, identity.symbols);
  const handle = normalizeHandle(identity.official_handle);
  const domains = ownedDomains(record?.links, identity.official_domain);
  const addresses = reproducedAddresses(record ?? {});

  const out = [];
  for (const row of census) {
    if (row.slug === record?.slug) continue;
    const rowNames = identityNames([row.name], row.identity?.aliases, row.identity?.symbols);
    const shared = [...names.keys()].filter((key) => rowNames.has(key));
    const rowHandle = normalizeHandle(row.handle);
    const rowDomains = ownedDomains(row.official_links, null);
    const rowAddresses = censusAddresses(row);

    let strong = null;
    if (handle && rowHandle && handle === rowHandle) strong = `the official handle ${row.handle}`;
    if (!strong) {
      const domain = [...domains].find((value) => rowDomains.has(value));
      if (domain) strong = `the official domain ${domain}`;
    }
    if (!strong) {
      const address = [...addresses].find((value) => rowAddresses.has(value));
      if (address) strong = `the reproduced address ${address}`;
    }
    if (!strong && !shared.length) continue;
    out.push({ row, strong, names: shared.map((key) => names.get(key)) });
  }
  return out;
}

/**
 * Split a packet file into its dossier, its narrative and the narrative's `## ` sections.
 * Frontmatter is the YAML between the first two `---` lines. Throws on malformed YAML.
 */
export function parsePacket(markdown) {
  const text = String(markdown ?? "").replace(/^﻿/, "");
  const match = /^---\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n([\s\S]*))?$/.exec(text);
  if (!match) throw new Error("no YAML frontmatter between the first two --- lines");
  const frontmatter = parse(match[1]) ?? null;
  const body = (match[2] ?? "").trim();

  const sections = [];
  let current = null;
  for (const line of body.split(/\r?\n/)) {
    const heading = /^##\s+(.+?)\s*$/.exec(line);
    if (heading && !line.startsWith("###")) {
      current = { heading: heading[1], lines: [] };
      sections.push(current);
    } else if (current) {
      current.lines.push(line);
    }
  }
  return {
    frontmatter,
    body,
    sections: sections.map((section) => ({ heading: section.heading, body: section.lines.join("\n").trim() })),
  };
}

/**
 * First paragraph of a named section as one line: whitespace collapsed (§8) and a trailing evidence
 * tag dropped, so it can be used as a summary. "" when the section is absent or empty.
 */
export function sectionParagraph(sections, heading) {
  const section = sections.find((item) => item.heading.toLowerCase() === heading.toLowerCase());
  if (!section) return "";
  const paragraph = section.body.split(/\r?\n\s*\r?\n/).map((part) => part.trim()).find(Boolean) ?? "";
  return paragraph
    .replace(/\s*\[(verified|claim|inference|disputed|unknown)(\s+[^\]]*)?\]\s*$/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Deep walk: every object key in the frontmatter, so an editorial key cannot hide inside a nested block. */
function everyKey(value, out = []) {
  if (Array.isArray(value)) for (const item of value) everyKey(item, out);
  else if (value && typeof value === "object") {
    for (const [key, item] of Object.entries(value)) {
      out.push(key);
      everyKey(item, out);
    }
  }
  return out;
}

/**
 * Validate one parsed packet. `packet` is the result of parsePacket().
 * `path` is the repo-relative path the packet is filed at; `source` is the file it was read from
 * (they differ only when a template is checked against the path it would be filed at).
 * Returns [] when the packet is clean, else one message per problem.
 */
export function validatePacket(packet, { census = [], path = "", source = path, warnings = [] } = {}) {
  const record = packet?.frontmatter;
  if (!record || typeof record !== "object" || Array.isArray(record)) return ["frontmatter is not a YAML mapping"];

  const errors = validateAgainst("packet", record);
  const err = (message) => errors.push(message);
  // Warnings are collected into the caller's array when it passes one; they never fail a packet.
  const warn = (message) => warnings.push(message);
  const fromTemplate = String(source).startsWith(TEMPLATE_ROOT);

  // A placeholder base SHA is a template's business only; a filed packet names the main commit it read.
  if (record.base_sha === ZERO_SHA && !fromTemplate) err("base_sha is a placeholder; name the 40-character main SHA the packet was collected from");
  if (errors.length && !Array.isArray(record.receipts)) return errors; // shape is too broken for the referential passes

  const receipts = Array.isArray(record.receipts) ? record.receipts : [];
  const claims = Array.isArray(record.claims) ? record.claims : [];
  const reproductions = Array.isArray(record.reproductions) ? record.reproductions : [];
  const conflicts = Array.isArray(record.conflicts) ? record.conflicts : [];
  const events = Array.isArray(record.events) ? record.events : [];
  const metrics = Array.isArray(record.metrics) ? record.metrics : [];
  const deployments = Array.isArray(record.deployments) ? record.deployments : [];

  const receiptById = new Map(receipts.map((receipt) => [receipt.id, receipt]));
  const claimById = new Map(claims.map((claim) => [claim.id, claim]));
  const reproductionById = new Map(reproductions.map((item) => [item.id, item]));

  // 1. Ids are packet-local, start at 1 and are never reused (§5).
  for (const [label, ids] of [
    ["receipt", receipts.map((r) => r.id)],
    ["claim", claims.map((c) => c.id)],
    ["reproduction", reproductions.map((r) => r.id)],
    ["conflict", conflicts.map((c) => c.id)],
    ["event", events.map((e) => e.id)],
  ]) for (const id of duplicates(ids)) err(`duplicate ${label} id ${id}`);

  const receiptRefs = (ids, where) => {
    for (const id of ids ?? []) if (!receiptById.has(id)) err(`${where} references missing receipt ${id}`);
  };
  const reproductionRefs = (ids, where) => {
    for (const id of ids ?? []) if (!reproductionById.has(id)) err(`${where} references missing reproduction ${id}`);
  };
  const claimRefs = (ids, where) => {
    for (const id of ids ?? []) if (!claimById.has(id)) err(`${where} references missing claim ${id}`);
  };

  // 2. Every id a claim, metric, deployment, event, receipt or reproduction cites resolves inside the packet.
  for (const claim of claims) {
    receiptRefs(claim.receipt_ids, `claim ${claim.id}`);
    reproductionRefs(claim.reproduction_ids, `claim ${claim.id}`);
    if (claim.class === "verified" && !(claim.reproduction_ids ?? []).length)
      err(`verified claim ${claim.id} needs at least one reproduction id`);
  }
  for (const item of reproductions) receiptRefs(item.receipt_ids, `reproduction ${item.id}`);
  metrics.forEach((metric, index) => {
    receiptRefs(metric.receipt_ids, `metrics[${index}]`);
    if (metric.class === "verified") err(`metrics[${index}] is verified but a metric carries no reproduction id; file it as a claim`);
  });
  deployments.forEach((deployment, index) => receiptRefs(deployment.receipt_ids, `deployments[${index}]`));
  for (const event of events) receiptRefs(event.receipt_ids, `event ${event.id}`);
  for (const receipt of receipts) {
    for (const id of receipt.supports ?? []) {
      if (id.startsWith("CLM-") && !claimById.has(id)) err(`receipt ${receipt.id} supports missing claim ${id}`);
      if (id.startsWith("EVT-") && !events.some((event) => event.id === id)) err(`receipt ${receipt.id} supports missing event ${id}`);
    }
  }
  if (record.qualifying && typeof record.qualifying === "object")
    for (const [name, test] of Object.entries(record.qualifying)) claimRefs(test?.claim_ids, `qualifying.${name}`);

  // 3. Conflicts join claims that exist, over one field, and only a controller resolves one.
  for (const conflict of conflicts) {
    claimRefs(conflict.claim_ids, `conflict ${conflict.id}`);
    const fields = new Set((conflict.claim_ids ?? []).map((id) => claimById.get(id)?.field).filter(Boolean));
    if (fields.size && !(fields.size === 1 && fields.has(conflict.field)))
      err(`conflict ${conflict.id} must compare claims for its own field ${conflict.field}`);
    if (conflict.resolution) {
      claimRefs(conflict.resolution.winning_claim_ids, `conflict ${conflict.id} resolution`);
      reproductionRefs(conflict.resolution.reproduction_ids, `conflict ${conflict.id} resolution`);
      for (const id of conflict.resolution.winning_claim_ids ?? [])
        if (!(conflict.claim_ids ?? []).includes(id)) err(`conflict ${conflict.id} winner ${id} is not one of its claims`);
      if (MACHINE_RESOLVERS.has(normalizeIdentity(conflict.resolution.resolver)))
        err(`conflict ${conflict.id} must be resolved by a controller, not a producer`);
    }
  }

  // 4. lifecycle: mainnet needs evidence beyond the project's own post (§5).
  if (record.classification?.lifecycle === "mainnet") {
    const strongKinds = new Set(["explorer", "repository", "docs"]);
    const lifecycleClaim = claims.some(
      (claim) => claim.field === "lifecycle" && (claim.receipt_ids ?? []).some((id) => strongKinds.has(receiptById.get(id)?.kind)),
    );
    const anchoredMetric = metrics.some((metric) =>
      (metric.receipt_ids ?? []).some((id) => ["onchain", "primary"].includes(receiptById.get(id)?.authority)),
    );
    if (!lifecycleClaim && !anchoredMetric)
      err("lifecycle mainnet needs a lifecycle claim receipted by an explorer, repository or docs source, or a metric from an onchain or primary source");
  }

  // 5. Identity collisions with the canonical census. A shared official surface — handle, owned domain,
  //    reproduced address — is evidence the two records may be one entity and must be disclosed. A shared
  //    name alone is not: a launchpad that lists its launches as aliases collides with every one of them
  //    and is none of them. That is a warning, and the compiler drops the colliding alias (§7).
  const recorded = new Set((record.identity?.possible_matches ?? []).map((match) => match.slug));
  const censusSlugs = new Set(census.map((row) => row.slug));
  for (const slug of recorded) if (!censusSlugs.has(slug)) err(`possible match ${slug} is not in the canonical census`);
  for (const { row, strong, names } of identityCollisions(record, census)) {
    if (recorded.has(row.slug)) continue;
    if (strong) err(`identity matches canonical slug ${row.slug} on ${strong}; record it under identity.possible_matches`);
    else warn(`name "${names[0]}" also names canonical slug ${row.slug}, and the two share no handle, domain or reproduced address; the alias is dropped when this compiles`);
  }

  // 6. The file's own path, the slugs it owns and the paths it declared.
  if (path && !fromTemplate) {
    const expected = `${PACKET_ROOT}/${record.slug}/${record.work_id}.md`;
    if (path !== expected) err(`packet must be filed at ${expected}, not ${path}`);
    if (!(record.allowed_paths ?? []).includes(expected)) err(`allowed_paths must list ${expected}`);
  }
  if (!(record.owned_slugs ?? []).includes(record.slug)) err(`owned_slugs must contain ${record.slug}`);

  // 7. Role and producer boundaries (research-system §2 and §3).
  if (record.producer === "supergrok" && record.role !== "verifier")
    err("producer supergrok files verifier packets only");
  if (record.role === "collector" || record.role === "verifier") {
    for (const conflict of conflicts)
      if (conflict.resolution) err(`conflict ${conflict.id}: a ${record.role} leaves resolution empty; a controller resolves it`);
    for (const key of new Set(everyKey(record)))
      if (key === "approver" || key === "channel" || key.endsWith("_approver") || (key.startsWith("channel") && key !== "channel_recommendation"))
        err(`a ${record.role} does not write ${key}; approval and channel decisions are the controller's`);
  }

  // 8. The body. Tier full carries all ten headings in order; a seed body may be absent.
  const headings = packet.sections.map((section) => section.heading);
  if (record.packet_tier === "full") {
    const present = headings.filter((heading) => BODY_SECTIONS.includes(heading));
    for (const heading of BODY_SECTIONS) if (!present.includes(heading)) err(`full packet is missing body section "${heading}"`);
    const ordered = BODY_SECTIONS.filter((heading) => present.includes(heading));
    if (present.join("|") !== ordered.join("|")) err(`full packet body sections must run in the order ${BODY_SECTIONS.join(" · ")}`);
  } else if (record.packet_tier === "seed") {
    if (packet.body && !headings.includes("What it is")) err('a seed packet with a body needs at least "## What it is"');
  } else if (record.packet_tier === "update") {
    const allowed = new Set(["Verification passes", "Operations log"]);
    for (const heading of headings) if (!allowed.has(heading)) err(`an update packet body holds only Verification passes and Operations log, not "${heading}"`);
  }

  // Packets collected for Icarus carry the reader-facing card fields. This is deliberately a
  // date-gated library check, not a schema requirement, so older packet-v2 files remain valid.
  if (["seed", "full"].includes(record.packet_tier) && String(record.as_of).slice(0, 10) >= ICARUS_FIELDS_SINCE) {
    if (!sectionParagraph(packet.sections, "What it is")) err('packet needs a paragraph under "## What it is"');
    const themes = themesFromBody(packet.body);
    if (!themes.length) err('packet needs a "Themes: a, b" line directly after the "## What it is" paragraph');
    for (const message of themeErrors(themes)) err(message);
    if (!events.length) err("packet needs at least one dated event with a receipt URL");
    for (const event of events) {
      const hasReceiptUrl = (event.receipt_ids ?? []).some((id) => {
        const url = receiptById.get(id)?.url;
        return typeof url === "string" && /^https?:\/\//i.test(url);
      });
      if (!hasReceiptUrl) err(`event ${event.id} needs a receipt with a URL`);
      if (!event.title) err(`event ${event.id} needs a title`);
      if (!event.summary) err(`event ${event.id} needs a summary containing what was posted`);
      if (String(event.title ?? "").length > 80) err(`event ${event.id} title must be 80 characters or fewer`);
    }
  }

  return errors;
}

/** Walk research/inbox/packets/<slug>/*.md and validate every packet in it. */
export async function validatePacketDirectory(root = PACKET_ROOT, census = []) {
  const errors = [];
  const warnings = [];
  let count = 0;
  let slugs;
  try {
    slugs = (await readdir(root, { withFileTypes: true })).filter((entry) => entry.isDirectory()).map((entry) => entry.name).sort();
  } catch (error) {
    if (error.code === "ENOENT") return { errors, warnings, files: 0 };
    throw error;
  }

  const seenWorkIds = new Map();
  for (const slug of slugs) {
    const files = (await readdir(join(root, slug))).filter((file) => file.endsWith(".md")).sort();
    for (const file of files) {
      const where = join(root, slug, file);
      count++;
      let packet;
      try {
        packet = parsePacket(await readFile(where, "utf8"));
      } catch (error) {
        errors.push(`${where}: ${error.message.split("\n")[0]}`);
        continue;
      }
      const packetWarnings = [];
      for (const message of enforceResearchMinimums(packet)) errors.push(`${where}: ${message}`);
      for (const message of validatePacket(packet, { census, path: where, warnings: packetWarnings })) errors.push(`${where}: ${message}`);
      for (const message of packetWarnings) warnings.push(`${where}: ${message}`);
      // One assignment (one work id) legitimately covers many slugs — a batch files one packet per slug
      // under the same work id. What is never legitimate is two packets for the *same* slug carrying the
      // same work id, so uniqueness is per (work_id, slug), not per work_id.
      const workId = packet.frontmatter?.work_id;
      if (typeof workId === "string") {
        const key = `${slug} ${workId}`;
        if (seenWorkIds.has(key)) errors.push(`${where}: work_id ${workId} also appears in ${seenWorkIds.get(key)} for slug ${slug}`);
        else seenWorkIds.set(key, where);
      }
    }
  }
  return { errors, warnings, files: count };
}

/** Newest packet for a slug by work id, parsed. Returns null when the slug has none. */
export async function readLatestPacket(slug, root = PACKET_ROOT) {
  let files;
  try {
    files = (await readdir(join(root, slug))).filter((file) => file.endsWith(".md")).sort();
  } catch (error) {
    if (error.code === "ENOENT") return null;
    throw error;
  }
  if (!files.length) return null;
  const where = join(root, slug, files[files.length - 1]);
  return { path: where, ...parsePacket(await readFile(where, "utf8")) };
}

// Pure packet-to-canonical compiler. File I/O remains in scripts/compile-packet.mjs.
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
// Every kind the schemas accept, so a compile adds links and never quietly deletes a stored one.
const PROJECT_LINK_KINDS = new Set(["site", "app", "docs", "whitepaper", "x", "github", "telegram", "discord", "explorer", "dexscreener", "other"]);
const CENSUS_LINK_KINDS = new Set(["site", "app", "docs", "whitepaper", "x", "github", "telegram", "discord"]);
/** The card carries five theme tags; schema/project.schema.json enforces the shape of each. */
const MAX_THEMES = 5;
const THEME_RE = /^[a-z0-9][a-z0-9:-]*$/;
/** schema/census.schema.json handle pattern — an unresolved "NULL — …" is not a handle. */
const CENSUS_HANDLE_RE = /^@[A-Za-z0-9_]{1,15}$/;
/** schema/shared.schema.json address pattern, plus the literal the canonical files use for "not read yet". */
const CANONICAL_ADDRESS_RE = /^(0x[0-9a-fA-F]{40}|[1-9A-HJ-NP-Za-km-z]{32,44}|not-verified)$/;
/** A research-document evidence tag closing a line, in the grammar checkResearch accepts. */
const RESEARCH_TAG_END_RE = /\[(?:verified|claim|inference|disputed|unknown)(?:\s+S[1-9][0-9]*)*\]\s*$/;
/** Weakest-wins ordering for a tag derived from several claims: never assert more than the weakest one. */
const EVIDENCE_RANK = { unknown: 0, disputed: 1, inference: 2, claim: 3, verified: 4 };

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
/**
 * A feed item's identity is the event that produced it: slug, the packet's work id and the packet-local
 * event id. Hashing the title instead made an edited or over-long title mint a second item for the same
 * event on the next compile; keyed this way a recompile replaces the item it already wrote.
 */
export const feedIdentity = ({ slug, workId, eventId }) => HASH_ID(`${slug}|${workId}|${eventId}`);

/**
 * The declared themes line: the first line of the paragraph directly after the "## What it is"
 * summary, which is where §5 puts it. A "Themes:" line further down the narrative is prose, and one
 * inside a fenced block is an example, so neither is read as a declaration.
 */
function themesLine(body) {
  const section = [];
  let fenced = false, inSection = false;
  for (const raw of String(body ?? "").replace(/\r\n/g, "\n").split("\n")) {
    if (/^\s*(?:```|~~~)/.test(raw)) { fenced = !fenced; continue; }
    if (fenced) continue;
    const heading = /^##\s+(.+?)\s*$/.exec(raw);
    if (heading) { inSection = heading[1].trim().toLowerCase() === "what it is"; continue; }
    if (inSection) section.push(raw);
  }
  const blocks = section.join("\n").split(/\n\s*\n/).map((block) => block.trim()).filter(Boolean);
  const match = /^Themes:\s*(.+?)\s*$/i.exec(String(blocks[1] ?? "").split("\n")[0]);
  return match ? match[1] : null;
}

export function themesFromBody(body) {
  const line = themesLine(body);
  if (!line) return [];
  return [...new Set(line.split(",").map((tag) => normalizeText(tag).toLowerCase()).filter(Boolean))];
}

/** Lines in one H2 section, with fenced examples removed. */
function unfencedSectionLines(body, wanted) {
  const out = [];
  let fenced = false, active = false;
  for (const raw of String(body ?? "").replace(/\r\n/g, "\n").split("\n")) {
    if (/^\s*(?:```|~~~)/.test(raw)) { fenced = !fenced; continue; }
    if (fenced) continue;
    const heading = /^##\s+(.+?)\s*$/.exec(raw);
    if (heading) { active = heading[1].trim().toLowerCase() === wanted.toLowerCase(); continue; }
    if (active) out.push(raw);
  }
  return out;
}

/** TL;DR is a declaration immediately after the Themes declaration, not prose elsewhere. */
export function tldrFromBody(body) {
  const lines = unfencedSectionLines(body, "What it is");
  const at = lines.findIndex((line) => /^\s*Themes:\s*.+/i.test(line));
  if (at < 0) return "";
  const next = lines.slice(at + 1).find((line) => line.trim());
  const match = /^\s*TL;DR:\s*(.+?)\s*$/i.exec(next ?? "");
  return normalizeText(match?.[1]);
}

/** Markdown bullets in one section, including indented continuation lines. */
function sectionBullets(body, heading) {
  const out = [];
  let current = null;
  for (const line of unfencedSectionLines(body, heading)) {
    const bullet = /^\s*[-*]\s+(.+?)\s*$/.exec(line);
    if (bullet) {
      if (current) out.push(normalizeText(current));
      current = bullet[1];
    } else if (current && /^\s+\S/.test(line)) current += ` ${line.trim()}`;
    else if (!line.trim() && current) { out.push(normalizeText(current)); current = null; }
  }
  if (current) out.push(normalizeText(current));
  return out;
}

const CANONICAL_SOURCE_TAG_RE = /\[(?:verified|claim|inference|disputed)\s+S[1-9][0-9]*(?:\s+S[1-9][0-9]*)*\]\s*$/i;
const PACKET_TAGS_END_RE = /(?:\s*\[(?:verified|claim|inference|disputed|unknown)(?:\s+R-[1-9][0-9]*)*\])+\s*$/i;

// Card budgets. The TL;DR is one line under the name; a bullet is one line in a list, so it gets more.
const MAX_TLDR = 160;
const MAX_BULLET = 200;

/** Markdown inline-code marks are packet notation. The card renders reader copy, so they never survive. */
function stripCodeMarks(value) {
  return String(value ?? "").replace(/`+/g, "");
}

// Every consecutive closing tag, not just the last one: a paragraph often closes
// "[verified S39] [claim S36]" and dropping the first group would drop a receipt.
const CANONICAL_TAGS_END_RE = /(?:\s*\[(?:(?:verified|claim|inference|disputed)\s+S[1-9][0-9]*(?:\s+S[1-9][0-9]*)*|unknown)\])+\s*$/i;

/** Split "prose [verified S1] [claim S3]" into its parts; an untagged bullet keeps an empty tag. */
function splitTrailingTag(value) {
  const text = String(value ?? "");
  const match = CANONICAL_TAGS_END_RE.exec(text);
  if (!match) return { prose: text.trim(), tag: "" };
  return { prose: text.slice(0, match.index).trim(), tag: match[0].trim() };
}

// A sentence break needs a full stop and something that is not lowercase after it, so "cube.family
// timed out" and "lunch.fun's launcher" stay whole while "... owner(). @RHDaily__ listed ..." splits.
function sentencesOf(text) {
  return String(text ?? "").split(/(?<=[.!?])\s+(?=[^a-z\s])/).map((part) => part.trim()).filter(Boolean);
}

/**
 * Fit a bullet inside the card budget without ever losing it. First choice is the whole paragraph,
 * then its first sentence, then the longest clause that fits, marked with an ellipsis so the reader
 * can see it was cut. Evidence tags always survive, including an explicit unknown without a source.
 * An unknown must never borrow the packet's primary receipt just to fill a card.
 */
function fitBullet(value, limit) {
  const { prose, tag } = splitTrailingTag(value);
  const withTag = (text) => (tag ? `${text} ${tag}` : text);
  const budget = tag ? limit - tag.length - 1 : limit;
  if (budget <= 0) return null;
  if (prose.length <= budget) return withTag(prose);
  const sentence = sentencesOf(prose)[0] ?? prose;
  if (sentence.length && sentence.length <= budget) return withTag(sentence);
  const head = prose.slice(0, budget - 1);
  const clause = Math.max(...[", ", "; ", ": ", " — ", " – ", " - "].map((mark) => head.lastIndexOf(mark)));
  const word = head.lastIndexOf(" ");
  // A clause break reads better, but only when it is not throwing away most of the line; otherwise
  // stop at the last whole word. Either way the reader sees an ellipsis where the sentence was cut.
  const cut = clause >= budget * 0.85 ? clause : word;
  const kept = (cut > 0 ? head.slice(0, cut) : head).replace(/[\s,;:—–-]+$/, "");
  if (!kept) return null;
  return withTag(`${kept}…`);
}

/** Whole sentences from the summary paragraph, as many as the TL;DR budget holds. Never mid-word. */
function tldrFromSummary(body, limit = MAX_TLDR) {
  const first = paragraphs(unfencedSectionLines(body, "What it is").join("\n"))[0];
  if (!first) return "";
  const prose = normalizeText(stripCodeMarks(String(first).replace(PACKET_TAGS_END_RE, "")));
  if (!prose) return "";
  const sentences = sentencesOf(prose);
  let out = "";
  for (const sentence of sentences) {
    const candidate = out ? `${out} ${sentence}` : sentence;
    if (candidate.length > limit) break;
    out = candidate;
  }
  if (out) return out;
  const head = prose.slice(0, limit - 1);
  const cut = head.lastIndexOf(" ");
  const kept = (cut > 0 ? head.slice(0, cut) : head).replace(/[\s,;:—–-]+$/, "");
  return kept ? `${kept}…` : "";
}

/** Paragraphs of a section, each carrying its own trailing packet tags on every sentence it holds. */
function taggedSentences(body, heading) {
  return paragraphs(unfencedSectionLines(body, heading).join("\n")).flatMap((paragraph) => {
    const match = paragraph.match(PACKET_TAGS_END_RE);
    const tags = match?.[0]?.trim() ?? "";
    const prose = normalizeText(match ? paragraph.slice(0, paragraph.length - match[0].length) : paragraph);
    return sentencesOf(prose).map((sentence) => `${sentence}${tags ? ` ${tags}` : ""}`);
  });
}

/**
 * Sentences of already-tagged paragraphs, one round per paragraph: the first sentence of every
 * paragraph, then the second of every paragraph, and so on. A section written as one long paragraph
 * still fills three slots, and a two-paragraph section never spends both on the first paragraph.
 */
function roundRobinSentences(entries) {
  const lanes = entries.map((entry) => {
    const match = entry.match(PACKET_TAGS_END_RE);
    const tags = match?.[0]?.trim() ?? "";
    const prose = match ? entry.slice(0, entry.length - match[0].length) : entry;
    return sentencesOf(prose).map((sentence) => `${sentence}${tags ? ` ${tags}` : ""}`);
  });
  const deepest = Math.max(0, ...lanes.map((lane) => lane.length));
  const out = [];
  for (let round = 0; round < deepest; round++)
    for (const lane of lanes) if (lane[round]) out.push(lane[round]);
  return out;
}

/** Paragraphs of a section as single candidates, tags kept at the end. */
function taggedParagraphs(body, heading) {
  return paragraphs(unfencedSectionLines(body, heading).join("\n")).flatMap((paragraph) => {
    const match = paragraph.match(PACKET_TAGS_END_RE);
    const tags = match?.[0]?.trim() ?? "";
    const prose = normalizeText(match ? paragraph.slice(0, paragraph.length - match[0].length) : paragraph);
    return prose ? [`${prose}${tags ? ` ${tags}` : ""}`] : [];
  });
}

function v3FieldsFromBody(frontmatter, body, receiptToSource, notice) {
  const fallbackReceiptId = primaryOfficialReceiptId(frontmatter);
  const shape = (value, label, limit = MAX_BULLET) => {
    const mapped = normalizeText(stripCodeMarks(mappedTag(value, receiptToSource)));
    if (mapped.length <= limit) return mapped;
    notice(`${label}: skipped; ${mapped.length} characters exceeds the ${limit}-character card limit`);
    return null;
  };
  // Same mapping, but a long line is trimmed rather than dropped and an untagged line is closed with
  // the packet's own receipt — used where the field is derived from prose the researcher did not
  // write to a length limit or to the bullet contract.
  const shapeFit = (value, limit = MAX_BULLET) => {
    let mapped = normalizeText(stripCodeMarks(mappedTag(value, receiptToSource)));
    if (!CANONICAL_TAGS_END_RE.test(mapped))
      mapped = `${mapped} ${derivedTag(frontmatter, value, receiptToSource, fallbackReceiptId)}`;
    return fitBullet(mapped, limit);
  };

  const rawTldr = tldrFromBody(body);
  let tldrSource = null;
  let tldr = rawTldr ? shape(rawTldr, "tldr", MAX_TLDR) : null;
  if (!tldr) {
    const derived = tldrFromSummary(body);
    if (derived) {
      tldr = normalizeText(derived);
      tldrSource = "derived";
      notice("tldr derived from summary");
    }
  }
  if (!tldr) notice("tldr: empty; the packet has no TL;DR line and no summary sentence to derive one from");

  let rawWhy = sectionBullets(body, "Why it matters");
  let whyDerived = false;
  if (!rawWhy.length) {
    // Machine-chosen prose still has to pass the site's voice rules, so a sentence carrying a banned
    // word is stepped over rather than published as a reason and failing validate afterwards.
    const sentences = taggedSentences(body, "Why it matters").filter((sentence) => {
      if (!voiceWarnings(sentence, "why").length) return true;
      notice(`why_people_care: stepped over a derived sentence for its wording - "${sentence.slice(0, 60)}"`);
      return false;
    });
    if (sentences.length >= 3) {
      rawWhy = sentences.slice(0, 3);
      whyDerived = true;
      notice("why_people_care derived from paragraphs");
    }
  }
  let whyPeopleCare = null;
  if (rawWhy.length && rawWhy.length !== 3)
    notice(`why_people_care: skipped; expected exactly 3 bullets and found ${rawWhy.length}`);
  else if (rawWhy.length === 3) {
    const mapped = whyDerived
      ? rawWhy.map((item) => shapeFit(item))
      : rawWhy.map((item, index) => shape(item, `why_people_care bullet ${index + 1}`));
    if (mapped.every(Boolean) && mapped.every((item) => CANONICAL_SOURCE_TAG_RE.test(item))) whyPeopleCare = mapped;
    else notice("why_people_care: skipped; every bullet needs a source id in its closing evidence tag");
  }
  if (!whyPeopleCare) notice("why_people_care: empty; the packet has no three sourced reasons to publish");

  const riskBullets = sectionBullets(body, "What could go wrong");
  let candidates = riskBullets;
  if (!riskBullets.length) {
    const paras = taggedParagraphs(body, "What could go wrong");
    if (paras.length) notice(`risks: no bullets found; read the section's ${paras.length} paragraphs as bullets`);
    candidates = paras.length >= 3 ? paras : roundRobinSentences(paras);
    candidates = candidates.filter((paragraph) => {
      if (!voiceWarnings(paragraph, "risks").length) return true;
      notice(`risks: stepped over a derived paragraph for its wording - "${paragraph.slice(0, 60)}"`);
      return false;
    });
  }
  // Fill three slots from the candidates in order. A long candidate is trimmed, never skipped, so
  // the first risk the researcher wrote is always the first risk the card shows.
  const risks = [];
  for (const item of candidates) {
    if (risks.length === 3) { notice(`risks: kept the first 3 of ${candidates.length} entries`); break; }
    let mapped = normalizeText(stripCodeMarks(mappedTag(item, receiptToSource)));
    if (!CANONICAL_TAGS_END_RE.test(mapped))
      mapped = `${mapped} ${derivedTag(frontmatter, item, receiptToSource, fallbackReceiptId)}`;
    const fitted = fitBullet(mapped, MAX_BULLET);
    if (fitted) risks.push(fitted);
    else notice(`risks: dropped one entry; nothing was left after its source tag`);
  }
  return { tldr, tldrSource, whyPeopleCare, risks: risks.length ? risks : null };
}

function themeErrors(themes) {
  const errors = [];
  if (themes.length > 5) errors.push("Themes must contain no more than 5 tags");
  for (const theme of themes)
    if (!/^[a-z0-9][a-z0-9:-]*$/.test(theme)) errors.push(`invalid theme ${theme}; use lowercase letters, numbers, colon or hyphen`);
  return errors;
}

function bodySections(body) {
  const sections = new Map();
  let current = null, fence = null;
  for (const line of String(body ?? "").replace(/\r\n/g, "\n").split("\n")) {
    const marker = /^\s{0,3}(`{3,}|~{3,})/.exec(line);
    if (fence || marker) {
      if (current) sections.get(current).push(line);
      if (!fence) fence = marker[1];
      else if (marker && marker[1][0] === fence[0] && marker[1].length >= fence.length) fence = null;
      continue;
    }
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
    if (![undefined, "none", "not-evaluated", "pending"].includes(event.channel_recommendation))
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
  if (["seed", "full"].includes(frontmatter.packet_tier) && String(frontmatter.as_of).slice(0, 10) >= ICARUS_FIELDS_SINCE) {
    if (!normalizeText(paragraphs(bodySections(body).get("What it is"))[0]))
      errors.push('packet needs a paragraph under "## What it is"');
    const themes = themesFromBody(body);
    if (!themes.length) errors.push('packet needs a "Themes: a, b" line directly after the "## What it is" paragraph');
    errors.push(...themeErrors(themes));
    const receipts = new Map(rows("receipts").map((receipt) => [receipt.id, receipt]));
    if (!rows("events").length) errors.push("packet needs at least one dated event with a receipt URL");
    for (const event of rows("events")) {
      if (!(event.receipt_ids ?? []).some((id) => typeof receipts.get(id)?.url === "string" && /^https?:\/\//i.test(receipts.get(id).url)))
        errors.push(`${event.id}: event needs a receipt with a URL`);
      if (!event.title) errors.push(`${event.id}: event needs a title`);
      if (!event.summary) errors.push(`${event.id}: event needs a summary containing what was posted`);
      if (String(event.title ?? "").length > 80) errors.push(`${event.id}: title must be 80 characters or fewer`);
    }
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

/**
 * Merge stored official links with the packet's. A stored link is kept whatever its kind — a compile
 * adds surfaces, it never deletes one a controller put there — while an incoming link has to be a kind
 * the target schema accepts. Two links with the same normalized URL are one link.
 */
/**
 * Merge stored deployments with the packet's, keyed by chain and address. A row that is already there
 * keeps the evidence it has: `verified` is never lowered — someone reproduced that address and wrote
 * it down — and its source ids stay alongside whatever the packet cites. Everything else the packet
 * brings updates the row, so a re-listed address gains detail and never loses proof.
 */
function mergeDeployments(existing, incoming) {
  const key = (row) => `${row.chain}|${String(row.address).toLowerCase()}`;
  const out = [...(existing ?? [])];
  const positions = new Map(out.map((row, index) => [key(row), index]));
  for (const row of incoming ?? []) {
    const at = positions.get(key(row));
    if (at === undefined) { positions.set(key(row), out.length); out.push(row); continue; }
    const prior = out[at];
    out[at] = {
      ...prior,
      ...row,
      verified: prior.verified === true || row.verified === true,
      sources: [...new Set([...(prior.sources ?? []), ...(row.sources ?? [])])],
    };
  }
  return out;
}

function officialLinks(existing, incoming, kinds) {
  const out = [], positions = new Map();
  const rows = [
    ...(existing ?? []).filter((link) => link && typeof link.url === "string"),
    ...(incoming ?? []).filter((link) => kinds.has(link.kind) && typeof link.url === "string" && /^https?:\/\//i.test(link.url)),
  ].map(({ kind, url }) => ({ kind, url }));
  for (const row of rows) {
    const key = normalizeUrl(row.url);
    if (positions.has(key)) out[positions.get(key)] = row;
    else { positions.set(key, out.length); out.push(row); }
  }
  return out;
}

function accountFromUrl(raw) {
  try {
    const url = new URL(raw);
    if (!["x.com", "twitter.com", "www.x.com", "www.twitter.com"].includes(url.hostname.toLowerCase())) return null;
    const handle = url.pathname.split("/").filter(Boolean)[0];
    return /^[A-Za-z0-9_]{1,32}$/.test(handle ?? "") ? `@${handle}` : null;
  } catch { return null; }
}

function eventFeedKind(event, receipt, officialHandle) {
  if (event.flagged === true || event.type === "risk") return "risk";
  const host = (() => { try { return new URL(receipt.url).hostname.toLowerCase(); } catch { return ""; } })();
  if (event.type === "onchain" || /(?:blockscout|etherscan|defillama)\./.test(host) || host === "api.llama.fi") return "onchain";
  const account = event.account ?? accountFromUrl(receipt.url);
  if (account && normalizeHandle(account) === normalizeHandle(officialHandle)) return "company";
  if (event.type === "company" && !account) return "company";
  return "ct";
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
  return reproducedAddressClaim(frontmatter, address);
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
    return address && deployment.address?.chain === "robinhood-chain" &&
      deployment.address?.exists_on_4663 === true && (claimForAddress(frontmatter, address) || docsReceipt);
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
  const match = String(text).match(PACKET_TAGS_END_RE);
  if (!match) return { text: normalizeText(text), cls: "unknown", receipts: [] };
  const tags = [...match[0].matchAll(/\[(verified|claim|inference|disputed|unknown)((?:\s+R-[1-9][0-9]*)*)\]/gi)];
  const cls = tags.map(tag => tag[1].toLowerCase())
    .reduce((weakest, next) => EVIDENCE_RANK[next] < EVIDENCE_RANK[weakest] ? next : weakest);
  return {
    text: normalizeText(String(text).slice(0, match.index).replace(/^[-*]\s+/, "")),
    cls,
    receipts: [...new Set(tags.flatMap(tag => tag[2].trim().split(/\s+/).filter(Boolean)))],
  };
}

/** Paragraphs and individual Markdown list items, never a whole list under its last item's tag. */
function findingStatements(text) {
  const out = [];
  let current = [], listItem = false, fence = null;
  const flush = () => { if (current.length) out.push(current.join(" ")); current = []; listItem = false; };
  for (const line of String(text ?? "").replace(/\r\n/g, "\n").split("\n")) {
    const marker = /^\s{0,3}(`{3,}|~{3,})/.exec(line);
    if (fence) {
      if (marker && marker[1][0] === fence[0] && marker[1].length >= fence.length) fence = null;
      continue;
    }
    if (marker) { flush(); fence = marker[1]; continue; }
    if (!line.trim() || /^\s*#{1,6}\s/.test(line)) { flush(); continue; }
    const bullet = /^\s*(?:[-*+]|\d+[.)])\s+(.+)$/.exec(line);
    if (bullet) { flush(); current = [bullet[1].trim()]; listItem = true; }
    else {
      if (listItem && /^\S/.test(line)) flush();
      current.push(line.trim());
    }
  }
  flush();
  return out;
}

function findingsFromBody(frontmatter, body, receiptToSource, priorProject, extraGaps = [], effectiveLifecycle) {
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
  for (const paragraph of findingStatements(sections.get("Verification passes"))) {
    const parsed = stripTag(paragraph);
    addFinding(["verified", "claim"].includes(parsed.cls) ? positive : risk, paragraph);
  }
  for (const paragraph of findingStatements(sections.get("Material risks"))) addFinding(risk, paragraph);
  for (const conflict of frontmatter.conflicts ?? [])
    if (conflict.status !== "resolved") unresolved.push({ text: `${conflict.field} remains unresolved (${conflict.id}).` });
  const missing = [
    ...(frontmatter.gaps ?? []).map((gap) => ({ text: [gap.question, gap.next ? `Next: ${gap.next}` : null].filter(Boolean).join(" ") })),
    ...extraGaps.map((text) => ({ text: normalizeText(text) })),
  ];
  if (frontmatter.classification.lifecycle === "mainnet" && effectiveLifecycle !== "mainnet" && !mainnetAllowed(frontmatter))
    missing.push({ text: "Mainnet status was not promoted because the packet did not meet the explorer, RPC, docs-address or supported-metric bar." });
  return {
    positive: mergeUnique(priorProject?.findings?.positive, positive, (row) => row.text),
    risk: mergeUnique(priorProject?.findings?.risk, risk, (row) => row.text),
    missing: mergeUnique(priorProject?.findings?.missing, missing, (row) => row.text),
    unresolved: mergeUnique(priorProject?.findings?.unresolved, unresolved, (row) => row.text),
  };
}

/** Sections of the research record whose paragraphs must carry an evidence tag (checkResearch rule 3b). */
const MATERIAL_RESEARCH_SECTIONS = new Set(REQUIRED_HEADINGS.slice(1, 9));

/** The receipt a paragraph falls back to when it cites no claim: the packet's primary official source. */
function primaryOfficialReceiptId(frontmatter) {
  const receipts = frontmatter.receipts ?? [];
  const domain = normalizeDomain(frontmatter.identity?.official_domain);
  const onDomain = (receipt) => Boolean(domain) && normalizeDomain(receipt.url) === domain;
  return (
    receipts.find((receipt) => receipt.authority === "primary" && onDomain(receipt)) ??
    receipts.find((receipt) => receipt.authority === "primary") ??
    receipts.find(onDomain) ??
    receipts[0]
  )?.id ?? null;
}

/**
 * The tag a paragraph gets when the packet body left it untagged. Claim ids named in the paragraph
 * decide it: the class is the weakest of those claims and the ids are their receipts' ledger ids, so
 * the record never asserts more than the packet did. A paragraph that names no claim is a `claim`
 * against the packet's primary official receipt — the lowest class that still carries a source.
 */
function derivedTag(frontmatter, text, receiptToSource, fallbackReceiptId) {
  const referenced = [...new Set([...String(text).matchAll(/\bCLM-[1-9][0-9]*\b/g)].map((match) => match[0]))];
  const claims = referenced.map((id) => (frontmatter.claims ?? []).find((claim) => claim.id === id)).filter(Boolean);
  if (claims.length) {
    const cls = claims
      .map((claim) => claim.class)
      .reduce((weakest, next) => ((EVIDENCE_RANK[next] ?? 0) < (EVIDENCE_RANK[weakest] ?? 0) ? next : weakest));
    const sources = sourceIds(claims.flatMap((claim) => claim.receipt_ids ?? []), receiptToSource);
    return cls !== "unknown" && sources.length ? `[${cls} ${sources.join(" ")}]` : "[unknown]";
  }
  const sources = sourceIds(fallbackReceiptId ? [fallbackReceiptId] : [], receiptToSource);
  return sources.length ? `[claim ${sources.join(" ")}]` : "[unknown]";
}

/**
 * Close every untagged paragraph of a material section with a derived tag. Mirrors the paragraph rule
 * in checkResearch: paragraphs split on blank lines, a leading `###` line is not a statement, and the
 * pending line stands alone. `report` sees each paragraph that was tagged.
 */
function autoTagged(text, derive, report) {
  return String(text ?? "")
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => {
      const lines = block.split("\n");
      const heading = /^#{3,}\s/.test(lines[0]) ? lines.shift() : null;
      const statement = lines.join("\n").trim();
      if (!statement || statement === PENDING_LINE) return block;
      if (RESEARCH_TAG_END_RE.test(lines[lines.length - 1])) return block;
      const tag = derive(statement);
      report(statement, tag);
      lines[lines.length - 1] = `${lines[lines.length - 1].replace(/\s+$/, "")} ${tag}`;
      return [heading, ...lines].filter((line) => line !== null).join("\n");
    })
    .join("\n\n");
}

function researchDocument(frontmatter, body, receiptToSource, ledger, options = {}) {
  const { coverage = "stub", priorResearch = null, notice = () => {}, onAutoTag = () => {} } = options;
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
  ]);

  // A record that already reads at full depth is never written back down to "_Research pending._" by a
  // packet that has nothing for that section; the existing prose stands until something replaces it.
  const prior = bodySections(priorResearch ?? "");
  if (coverage === "full")
    for (const [heading, text] of sectionBody) {
      if (text && text !== PENDING_LINE) continue;
      const kept = prior.get(heading);
      if (!kept || kept === PENDING_LINE) continue;
      sectionBody.set(heading, kept);
      notice(`research ${heading}: kept the existing full-profile section; this packet carries nothing for it`);
    }

  const fallbackReceiptId = primaryOfficialReceiptId(frontmatter);
  for (const [heading, text] of sectionBody) {
    if (!MATERIAL_RESEARCH_SECTIONS.has(heading)) continue;
    sectionBody.set(heading, autoTagged(
      text,
      (statement) => derivedTag(frontmatter, statement, receiptToSource, fallbackReceiptId),
      (statement, tag) => onAutoTag(heading, statement, tag),
    ));
  }

  const usedIds = new Set();
  for (const value of sectionBody.values())
    for (const match of String(value).matchAll(/\bS[1-9][0-9]*\b/g)) usedIds.add(match[0]);
  const byId = new Map(ledger.sources.map((row) => [row.id, row]));
  sectionBody.set("Sources", [...usedIds].sort((a, b) => Number(a.slice(1)) - Number(b.slice(1)))
    .map((id) => `- ${id} — ${byId.get(id)?.title ?? byId.get(id)?.claim ?? byId.get(id)?.url ?? "Source receipt"}.`).join("\n") || "No source receipts were compiled.");
  sectionBody.set("Review metadata", `Compiled from ${frontmatter.work_id} by ${frontmatter.producer} as of ${frontmatter.as_of}; methodology_version: proofline-v1.0.`);
  return `---\nslug: ${frontmatter.slug}\ncoverage: ${coverage}\nmethodology_version: proofline-v1.0\n---\n\n# ${frontmatter.name} — research record\n\n${REQUIRED_HEADINGS.map((heading) => `## ${heading}\n\n${sectionBody.get(heading)}`).join("\n\n")}\n`;
}

function changedFields(prior, next) {
  if (!prior) return { prior: null, next: { coverage: next.coverage, lifecycle: next.lifecycle } };
  const before = {}, after = {};
  for (const key of ["name", "category", "lifecycle", "summary", "tldr", "why_people_care", "risks", "themes", "official_links", "deployments", "metrics"]) {
    if (JSON.stringify(prior[key] ?? null) !== JSON.stringify(next[key] ?? null)) {
      before[key] = prior[key] ?? null;
      after[key] = next[key] ?? null;
    }
  }
  return { prior: Object.keys(before).length ? before : null, next: Object.keys(after).length ? after : null };
}

/**
 * Map one packet onto the canonical files. Anything the packet got wrong that a controller could not
 * have prevented — an unparseable metric, an address that is a sentence, six themes — is dropped from
 * the compiled record and reported in `notices` rather than refusing the whole packet: a batch of
 * fifty collector packets must land, minus the parts that are not usable, and say what it dropped.
 */
export function compile(packet, priorProject = null, priorCensusRow = null, priorSources = null, priorFeed = null, options = {}) {
  const { pulled = null, priorResearch = null, census = [] } = options;
  const frontmatter = packet.frontmatter ?? packet;
  const body = packet.body ?? "";
  const errors = checkPacket(frontmatter, body);
  if (errors.length) throw new Error(errors.join("\n"));
  const notices = [];
  const notice = (message) => notices.push(message);
  let autoTaggedParagraphs = 0;
  const { ledger, receiptToSource } = sourceLedger(frontmatter, priorSources);

  // A chain read the puller already made is a source in its own right. It joins the same ledger the
  // packet receipts land in, keyed by URL and claim like every other entry, so one address has one
  // entry however many times it is compiled; a later pull refreshes what that entry says it read.
  const ledgerByIdentity = new Map(ledger.sources.map((source) => [sourceIdentity(source), source]));
  let nextLedgerId = Math.max(0, ...ledger.sources.map((source) => Number(String(source.id).slice(1))).filter(Number.isFinite)) + 1;
  const recordPulledSource = (chainRead, slug) => {
    const candidate = {
      url: chainRead.url,
      publisher: chainRead.publisher,
      kind: chainRead.kind,
      accessed_at: chainRead.pulledAt,
      claim: `Contract record for ${chainRead.address} on Robinhood Chain (4663), read into content/pulled/${slug}.yaml.`,
      excerpt: `${chainRead.receipt}: ${chainRead.detail}.`,
      hash: null,
      archive_url: null,
      researcher: "pull",
      available: true,
    };
    const existing = ledgerByIdentity.get(sourceIdentity(candidate));
    if (existing) {
      if (existing.researcher === "pull") Object.assign(existing, { accessed_at: candidate.accessed_at, excerpt: candidate.excerpt });
      return existing.id;
    }
    const source = { id: `S${nextLedgerId++}`, ...candidate };
    ledgerByIdentity.set(sourceIdentity(source), source);
    ledger.sources.push(source);
    return source.id;
  };

  // Coverage only ever rises. A collector packet compiled onto a full profile leaves the profile full
  // and leaves its scoring block — owned by editorial review — exactly where it was.
  const priorCoverage = priorProject?.coverage ?? priorCensusRow?.coverage ?? null;
  const coverage = priorCoverage === "full" ? "full" : "stub";
  if (coverage === "full") notice("coverage: stays full; a collector packet never lowers coverage and never touches scoring");

  let lifecycle = canonicalLifecycle(frontmatter, priorCensusRow);
  const priorLifecycle = priorProject?.lifecycle ?? priorCensusRow?.lifecycle ?? null;
  const pulledReceipt = mainnetReceiptFromPulled(pulled);
  if (priorLifecycle === "mainnet" && lifecycle !== "mainnet" && pulledReceipt) {
    notice(`lifecycle: kept mainnet; the packet says ${lifecycle} but the pulled chain read shows contract ${pulledReceipt.address} with a market pair on 4663`);
    lifecycle = "mainnet";
  }
  const primaryLeaf = frontmatter.classification.primary_leaf;
  const identityConflicts = (frontmatter.conflicts ?? []).filter((row) => row.status !== "resolved" && String(row.field).startsWith("identity"));
  // Evidence class is not controller identity approval. Preserve holds until explicitly resolved.
  const priorIdentity = priorCensusRow?.identity;
  const identityStatus = identityConflicts.length || priorIdentity?.status === "conflicted"
    ? "conflicted" : priorIdentity?.status === "verified" ? "verified" : "provisional";
  const conflictIds = [...new Set([...(priorIdentity?.conflict_ids ?? []), ...identityConflicts.map(row => row.id)])];
  // An alias that is only another canonical name — the launchpad that lists its launches, the token that
  // borrows a word — is dropped rather than written into the registry, where it would make two names look
  // like one. The disclosure rule that produced the warning is validatePacket §5.
  const weakAliases = new Map();
  for (const { row, strong, names } of identityCollisions(frontmatter, census))
    if (!strong) for (const name of names) weakAliases.set(normalizeIdentity(name), row.slug);
  const identity = {
    aliases: (frontmatter.identity.aliases ?? []).filter((alias) => {
      const slug = weakAliases.get(normalizeIdentity(alias));
      if (slug === undefined) return true;
      notice(`alias ${alias} is another name's slug (${slug}); dropped`);
      return false;
    }),
    symbols: frontmatter.identity.symbols ?? [],
    entity_kind: frontmatter.identity.entity_kind,
    chain_scope: frontmatter.identity.chain_scope,
    status: identityStatus,
    ...(conflictIds.length ? { conflict_ids: conflictIds } : {}),
  };
  const projectLinks = officialLinks(priorProject?.official_links, frontmatter.links, PROJECT_LINK_KINDS);
  // The census schema intentionally has a smaller link vocabulary; explorer and DexScreener links
  // live on the project card, while the registry keeps its existing official-surface kinds.
  const censusLinks = officialLinks(priorCensusRow?.official_links, frontmatter.links, CENSUS_LINK_KINDS);
  const qualifying = Object.fromEntries(QUALIFYING.map((key) => {
    const test = frontmatter.qualifying[key];
    const claims = (test.claim_ids ?? []).map((id) => (frontmatter.claims ?? []).find((claim) => claim.id === id));
    return [key, { value: test.status === "pass", note: test.note || `${key.replaceAll("_", " ")} ${test.status}.`, verified: claims.length > 0 && claims.every((claim) => claim?.class === "verified") }];
  }));
  const packetHandle = frontmatter.identity.official_handle;
  const handle = CENSUS_HANDLE_RE.test(String(packetHandle ?? "")) ? packetHandle : priorCensusRow?.handle;
  if (packetHandle && handle !== packetHandle)
    notice(`handle: skipped "${normalizeText(packetHandle).slice(0, 60)}"; it is not an @handle the census accepts`);
  const censusRow = {
    ...(priorCensusRow ?? {}),
    slug: frontmatter.slug,
    name: frontmatter.identity.canonical_name ?? frontmatter.name,
    identity,
    category: leafLabel(primaryLeaf),
    lifecycle,
    coverage,
    official_links: censusLinks,
    discovery_source: priorCensusRow?.discovery_source ?? `${frontmatter.producer} packet ${frontmatter.work_id}`,
    ...(handle ? { handle } : {}),
    tree: { primary: primaryLeaf, ...((frontmatter.classification.secondary_leaves ?? []).length ? { secondary: frontmatter.classification.secondary_leaves } : {}) },
    qualifying,
  };

  // A "NULL — <reason>" address is a sentence, not an address. It is never written into the canonical
  // record (the schema would reject the whole file); the packet still carries the reason.
  const deployments = (frontmatter.deployments ?? []).flatMap((deployment) => {
    const address = deployment.address?.value ?? "not-verified";
    if (!CANONICAL_ADDRESS_RE.test(String(address))) {
      notice(`deployment "${normalizeText(deployment.label)}": skipped; address is not an address — ${normalizeText(address).slice(0, 90)}`);
      return [];
    }
    const chain = deployment.address?.chain ?? "other";
    const claimed = Boolean(address !== "not-verified" && deployment.address?.exists_on_4663 === true && claimForAddress(frontmatter, address));
    const sources = sourceIds(deployment.receipt_ids, receiptToSource);
    // Our own chain read is a reproduction. When the puller has already found this contract on 4663
    // with verified source, the deployment is verified and cites that read; an address the puller has
    // not reached stays unverified, waiting for someone to reproduce it.
    const chainRead = chain === "robinhood-chain" && !claimed ? deploymentReceiptFromPulled(pulled, address) : null;
    if (chainRead) {
      notice(`deployment "${normalizeText(deployment.label)}": verified from the chain read — ${chainRead.receipt}`);
      sources.push(recordPulledSource(chainRead, frontmatter.slug));
    }
    return [{
      label: deployment.label,
      chain,
      address,
      role: deployment.role,
      verified: claimed || Boolean(chainRead),
      sources: [...new Set(sources)],
    }];
  });
  // A metric is a number a reader can compare. A value the collector could not establish, or one that
  // came back negative, is not published as a figure — it is filed as an open gap in its own words.
  const metricGaps = [];
  const metrics = (frontmatter.metrics ?? []).flatMap((metric) => {
    const value = metric.value;
    if (typeof value !== "number" || !Number.isFinite(value) || value < 0) {
      const reason = typeof value === "number" ? `the packet reported ${value}` : normalizeText(value).slice(0, 160);
      notice(`metric ${metric.kind}: skipped and filed as a gap — ${reason}`);
      metricGaps.push(`${metric.kind} is not published as a figure: ${reason}`);
      return [];
    }
    return [{
      kind: metric.kind,
      value,
      ...(metric.kind === "holders" ? {} : { currency: "USD" }),
      as_of: String(metric.as_of).slice(0, 10),
      class: "claim",
      sources: sourceIds(metric.receipt_ids, receiptToSource),
    }];
  }).filter((metric) => metric.sources.length);
  const relationships = (frontmatter.claims ?? []).filter((claim) => claim.field === "relationship" && claim.value?.kind === "depends-on").map((claim) => claim.value.slug);
  const sections = bodySections(body);
  const compiledSummary = normalizeText(paragraphs(sections.get("What it is"))[0] ?? frontmatter.classification.rationale ?? priorProject?.summary);
  // The theme-count and shape rules are date-gated in the packet check, so a backdated packet can still
  // arrive with six themes or a tag the card cannot render. Clamp rather than throw on the schema.
  const declaredThemes = themesFromBody(body);
  const shapedThemes = declaredThemes.filter((theme) => {
    if (THEME_RE.test(theme)) return true;
    notice(`theme "${theme}": dropped; a theme tag is lowercase letters, numbers, colon or hyphen`);
    return false;
  });
  if (shapedThemes.length > MAX_THEMES)
    notice(`themes: kept the first ${MAX_THEMES} of ${shapedThemes.length}; the card carries ${MAX_THEMES} (dropped ${shapedThemes.slice(MAX_THEMES).join(", ")})`);
  const compiledThemes = shapedThemes.slice(0, MAX_THEMES);
  const controllerEdited = priorProject?.controller_edited === true;
  const summary = controllerEdited ? priorProject.summary : compiledSummary;
  const themes = controllerEdited ? priorProject.themes : (compiledThemes.length ? compiledThemes : priorProject?.themes);
  const compiledV3 = v3FieldsFromBody(frontmatter, body, receiptToSource, notice);
  const tldr = controllerEdited ? priorProject?.tldr : (compiledV3.tldr ?? priorProject?.tldr);
  // A derived TL;DR is a placeholder: the tag says so, and a real "TL;DR:" line in a later packet
  // replaces it silently because the compiled value wins and the tag is dropped with it.
  const tldrSource = controllerEdited
    ? priorProject?.tldr_source
    : (compiledV3.tldr ? compiledV3.tldrSource : priorProject?.tldr_source);
  const whyPeopleCare = controllerEdited ? priorProject?.why_people_care : (compiledV3.whyPeopleCare ?? priorProject?.why_people_care);
  const risks = controllerEdited ? priorProject?.risks : (compiledV3.risks ?? priorProject?.risks);
  const project = {
    ...(priorProject ?? {}),
    slug: frontmatter.slug,
    name: censusRow.name,
    symbol: frontmatter.identity.symbols?.[0] ?? priorProject?.symbol ?? null,
    category: censusRow.category,
    lifecycle,
    coverage,
    summary,
    ...(tldr ? { tldr } : {}),
    ...(tldr && tldrSource ? { tldr_source: tldrSource } : {}),
    ...(whyPeopleCare?.length ? { why_people_care: whyPeopleCare } : {}),
    ...(risks?.length ? { risks } : {}),
    ...(themes?.length ? { themes } : {}),
    official_links: projectLinks,
    dependencies: [...new Set([...(priorProject?.dependencies ?? []), ...relationships])],
    deployments: mergeDeployments(priorProject?.deployments, deployments),
    ...(metrics.length || priorProject?.metrics ? { metrics: mergeUnique(priorProject?.metrics, metrics, (row) => row.kind) } : {}),
    review: priorProject?.review ?? { researcher: frontmatter.producer, approver: "pending", methodology_version: "proofline-v1.0", reviewed_at: frontmatter.as_of.slice(0, 10), published_at: null },
    research_state: nextResearchState(priorProject?.research_state, frontmatter),
    findings: findingsFromBody(frontmatter, body, receiptToSource, priorProject, metricGaps, lifecycle),
  };
  if (!(tldr && tldrSource)) delete project.tldr_source;
  const receiptsById = new Map((frontmatter.receipts ?? []).map((receipt) => [receipt.id, receipt]));
  const feedItems = (frontmatter.events ?? []).map((event) => {
    // Profile-only and internal evidence are not feed announcements.
    if (!["feed", "both"].includes(event.site_recommendation)) return null;
    const receipt = (event.receipt_ids ?? []).map((id) => receiptsById.get(id))
      .find((row) => typeof row?.url === "string" && /^https?:\/\//i.test(row.url));
    if (!receipt) return null;
    const sources = sourceIds(event.receipt_ids, receiptToSource);
    const sourceUrl = receipt.url;
    const date = String(event.occurred_at ?? event.observed_at ?? frontmatter.as_of).slice(0, 10);
    const title = normalizeText(event.title ?? receipt.title ?? `${event.type} update`).slice(0, 80).trim();
    const account = event.account ?? accountFromUrl(sourceUrl)
      ?? (event.type === "company" ? frontmatter.identity.official_handle : null);
    return {
      id: feedIdentity({ slug: frontmatter.slug, workId: frontmatter.work_id, eventId: event.id }),
      date,
      kind: eventFeedKind(event, receipt, frontmatter.identity.official_handle),
      ...(event.tag ? { tag: event.tag } : {}),
      title,
      body: normalizeText(event.summary ?? receipt.excerpt ?? "Update recorded from the cited source."),
      ...(account && /^@[A-Za-z0-9_]{1,32}$/.test(account) ? { account } : {}),
      sourceUrl,
      sources,
    };
  }).filter((item) => item?.sources.length);
  const feed = { slug: frontmatter.slug, items: mergeWebsiteEvents(priorFeed?.items, feedItems, {
    correction: frontmatter.update_reason === 'correction' && (frontmatter.claims ?? []).some(c => c.supersedes),
  }) };
  const research = researchDocument(frontmatter, body, receiptToSource, ledger, {
    coverage,
    priorResearch,
    notice,
    onAutoTag: (heading, statement, tag) => {
      autoTaggedParagraphs++;
      notice(`research ${heading}: auto-tagged an untagged paragraph ${tag} — "${statement.replace(/\s+/g, " ").slice(0, 70)}…"`);
    },
  });
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
  return {
    project, censusRow, sources: ledger, feed, research, changelog, receiptToSource, notices,
    degraded: {
      autoTaggedParagraphs,
      skippedMetrics: metricGaps.length,
      skippedDeployments: (frontmatter.deployments ?? []).length - deployments.length,
    },
  };
}
