// Packet v2 reader and validator (docs/research-system.md §5). One packet is one Markdown file at
// research/inbox/packets/<slug>/<work-id>.md: YAML frontmatter between the first two `---` lines is the
// dossier, the rest is the narrative. The schema (schema/packet.schema.json) covers shape and vocabulary;
// everything referential, path-based or role-based is here, because a JSON Schema cannot see the file's
// name, the census, or the body's headings.
import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import { parse } from "yaml";
import { validateAgainst } from "./schemas.mjs";

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
export function validatePacket(packet, { census = [], path = "", source = path } = {}) {
  const record = packet?.frontmatter;
  if (!record || typeof record !== "object" || Array.isArray(record)) return ["frontmatter is not a YAML mapping"];

  const errors = validateAgainst("packet", record);
  const err = (message) => errors.push(message);
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

  // 5. Identity collisions with the canonical census are recorded, never silently dropped.
  const recorded = new Set((record.identity?.possible_matches ?? []).map((match) => match.slug));
  const packetNames = new Set([record.name, record.identity?.canonical_name, ...(record.identity?.aliases ?? [])].map(normalizeIdentity).filter(Boolean));
  const packetHandle = normalizeHandle(record.identity?.official_handle);
  const packetDomain = normalizeDomain(record.identity?.official_domain);
  const censusSlugs = new Set(census.map((row) => row.slug));
  for (const slug of recorded) if (!censusSlugs.has(slug)) err(`possible match ${slug} is not in the canonical census`);
  for (const row of census) {
    if (row.slug === record.slug) continue;
    const names = [row.name, ...(row.identity?.aliases ?? [])].map(normalizeIdentity).filter(Boolean);
    const handle = normalizeHandle(row.handle);
    const domains = (row.official_links ?? []).map((link) => normalizeDomain(link.url)).filter(Boolean);
    const hit =
      names.some((name) => packetNames.has(name)) ||
      (packetHandle && handle === packetHandle) ||
      (packetDomain && domains.includes(packetDomain));
    if (hit && !recorded.has(row.slug))
      err(`identity matches canonical slug ${row.slug}; record it under identity.possible_matches`);
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

  return errors;
}

/** Walk research/inbox/packets/<slug>/*.md and validate every packet in it. */
export async function validatePacketDirectory(root = PACKET_ROOT, census = []) {
  const errors = [];
  let count = 0;
  let slugs;
  try {
    slugs = (await readdir(root, { withFileTypes: true })).filter((entry) => entry.isDirectory()).map((entry) => entry.name).sort();
  } catch (error) {
    if (error.code === "ENOENT") return { errors, files: 0 };
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
      for (const message of validatePacket(packet, { census, path: where })) errors.push(`${where}: ${message}`);
      const workId = packet.frontmatter?.work_id;
      if (typeof workId === "string") {
        if (seenWorkIds.has(workId)) errors.push(`${where}: work_id ${workId} also appears in ${seenWorkIds.get(workId)}`);
        else seenWorkIds.set(workId, where);
      }
    }
  }
  return { errors, files: count };
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
