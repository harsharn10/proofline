import { readFile, readdir } from "node:fs/promises";
import { isAbsolute, join, relative, sep } from "node:path";
import { parse } from "yaml";

export const REQUIRED_PACKET_SECTIONS = [
  "Assignment and disposition",
  "Canonical identity",
  "Classification",
  "Snapshot",
  "Product and mechanics",
  "Deployments",
  "Control and security",
  "Team and provenance",
  "Economics and activity",
  "Relationships and dependencies",
  "Atomic claims",
  "Conflicts",
  "Updates and events",
  "Material risks and caveats",
  "Gaps and next checks",
  "Receipts",
  "Verification passes",
  "Operations log",
];

const ROLES = new Set(["collector", "verifier", "compiler"]);
const TIERS = new Set(["seed", "full", "update"]);
const WORK_ID = /^WORK-(\d{8})-[a-z0-9]+(?:-[a-z0-9]+)*$/;
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const SHA = /^[0-9a-f]{40}$/;

function repoPath(value) {
  return String(value ?? "").replaceAll(sep, "/").replace(/^\.\//, "");
}

function validDateTime(value) {
  return typeof value === "string" && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/.test(value) && !Number.isNaN(Date.parse(value));
}

function parseFrontmatter(text) {
  if (!text.startsWith("---\n") && !text.startsWith("---\r\n"))
    return { error: "packet must start with YAML frontmatter delimited by ---" };
  const lines = text.split(/\r?\n/);
  const end = lines.findIndex((line, index) => index > 0 && line === "---");
  if (end < 0) return { error: "packet frontmatter has no closing --- delimiter" };
  try {
    const header = parse(lines.slice(1, end).join("\n"));
    if (!header || typeof header !== "object" || Array.isArray(header))
      return { error: "packet frontmatter must be a YAML mapping" };
    return { header, body: lines.slice(end + 1).join("\n") };
  } catch (error) {
    return { error: `packet frontmatter is invalid YAML: ${error.message.split("\n")[0]}` };
  }
}

function allowedForRole(path, role) {
  if (role === "verifier") return path.startsWith("research/inbox/");
  if (role === "collector")
    return path.startsWith("research/inbox/") || path.startsWith("content/feed/") ||
      path.startsWith("content/sources/") || path === "content/accounts.yaml";
  if (role === "compiler") return path.startsWith("research/inbox/") || path.startsWith("content/");
  return false;
}

function checkPath(path, label, errors) {
  if (!path) return errors.push(`${label} must be a non-empty repository-relative path`);
  if (isAbsolute(path) || path.startsWith("/") || path.split("/").includes("..") || path.includes("\\"))
    errors.push(`${label} must be a normalized repository-relative path`);
  if (/[*?[\]{}]/.test(path)) errors.push(`${label} must be exact; glob patterns are not allowed`);
}

/** Validate one lossless Markdown research packet against the v1 coordination contract. */
export function validateResearchPacket(text, filePath) {
  const errors = [];
  const parsed = parseFrontmatter(text);
  if (parsed.error) return [parsed.error];
  const { header, body } = parsed;
  const where = repoPath(filePath);
  const required = [
    "contract_version", "work_id", "producer", "role", "base_sha", "slug", "name", "packet_tier",
    "as_of", "prior_packet", "owned_slugs", "allowed_paths",
  ];
  for (const field of required) if (!(field in header)) errors.push(`frontmatter is missing ${field}`);

  if (header.contract_version !== "proofline-research-v1") errors.push("contract_version must be proofline-research-v1");
  const workMatch = typeof header.work_id === "string" ? header.work_id.match(WORK_ID) : null;
  if (!workMatch) errors.push("work_id must match WORK-YYYYMMDD-lowercase-id");
  if (typeof header.producer !== "string" || !SLUG.test(header.producer)) errors.push("producer must be a lowercase kebab-case id");
  if (!ROLES.has(header.role)) errors.push("role must be collector, verifier, or compiler");
  if (typeof header.base_sha !== "string" || !SHA.test(header.base_sha)) errors.push("base_sha must be a full lowercase 40-character commit SHA");
  if (typeof header.slug !== "string" || !SLUG.test(header.slug)) errors.push("slug must be lowercase kebab-case");
  if (typeof header.name !== "string" || !header.name.trim()) errors.push("name must be a non-empty string");
  if (!TIERS.has(header.packet_tier)) errors.push("packet_tier must be seed, full, or update");
  if (!validDateTime(header.as_of)) errors.push("as_of must be an ISO-8601 timestamp with timezone");
  if (workMatch && validDateTime(header.as_of) && workMatch[1] !== header.as_of.slice(0, 10).replaceAll("-", ""))
    errors.push("work_id date must match the as_of date");

  if (!Array.isArray(header.owned_slugs) || header.owned_slugs.length === 0) {
    errors.push("owned_slugs must be a non-empty array");
  } else {
    const seen = new Set();
    for (const slug of header.owned_slugs) {
      if (typeof slug !== "string" || !SLUG.test(slug)) errors.push(`owned_slugs contains invalid slug ${String(slug)}`);
      if (seen.has(slug)) errors.push(`owned_slugs contains duplicate slug ${slug}`);
      seen.add(slug);
    }
    if (!header.owned_slugs.includes(header.slug)) errors.push(`owned_slugs must include packet slug ${header.slug}`);
  }

  const expectedPath = header.slug && header.work_id
    ? `research/inbox/packets/${header.slug}/${header.work_id}.md`
    : null;
  if (expectedPath && where !== expectedPath) errors.push(`packet path must be ${expectedPath}`);

  if (!Array.isArray(header.allowed_paths) || header.allowed_paths.length === 0) {
    errors.push("allowed_paths must be a non-empty array");
  } else {
    const seen = new Set();
    for (const rawPath of header.allowed_paths) {
      const path = repoPath(rawPath);
      checkPath(path, `allowed path ${String(rawPath)}`, errors);
      if (seen.has(path)) errors.push(`allowed_paths contains duplicate path ${path}`);
      seen.add(path);
      if (ROLES.has(header.role) && !allowedForRole(path, header.role))
        errors.push(`${header.role} does not own allowed path ${path}`);
      const packetMatch = path.match(/^research\/inbox\/packets\/([a-z0-9-]+)\/([^/]+)\.md$/);
      if (packetMatch && Array.isArray(header.owned_slugs) && !header.owned_slugs.includes(packetMatch[1]))
        errors.push(`packet allowed path ${path} is outside owned_slugs`);
      if (packetMatch && header.work_id && packetMatch[2] !== header.work_id)
        errors.push(`packet allowed path ${path} must use work_id ${header.work_id}`);
      const contentMatch = path.match(/^content\/(?:feed|sources|projects|research)\/([a-z0-9-]+)\.(?:yaml|md)$/);
      if (contentMatch && Array.isArray(header.owned_slugs) && !header.owned_slugs.includes(contentMatch[1]))
        errors.push(`content allowed path ${path} is outside owned_slugs`);
    }
    if (expectedPath && !seen.has(expectedPath)) errors.push(`allowed_paths must include this packet path ${expectedPath}`);
  }

  const hasPrior = typeof header.prior_packet === "string" && header.prior_packet.length > 0;
  if (header.prior_packet !== null && !hasPrior) errors.push("prior_packet must be null, a packet path, or a full commit SHA");
  if (hasPrior) {
    const prior = repoPath(header.prior_packet);
    if (!SHA.test(prior) && !/^research\/inbox\/packets\/[a-z0-9-]+\/WORK-\d{8}-[a-z0-9-]+\.md$/.test(prior))
      errors.push("prior_packet must be a packet path or full lowercase 40-character commit SHA");
  }
  if (header.role === "verifier" && !hasPrior) errors.push("verifier packets require prior_packet");
  if (header.packet_tier === "update" && !hasPrior) errors.push("update packets require prior_packet");
  if (header.producer === "grok-bot" && header.role !== "collector") errors.push("grok-bot may only produce collector packets");
  if (typeof header.producer === "string" && header.producer.includes("supergrok") && header.role !== "verifier")
    errors.push("SuperGrok producers may only produce verifier packets");

  const headings = [...body.matchAll(/^## (\d+)\. (.+)$/gm)].map((match) => ({
    number: Number(match[1]), title: match[2].trim(), index: match.index,
  }));
  for (let i = 0; i < REQUIRED_PACKET_SECTIONS.length; i++) {
    const number = i + 1, title = REQUIRED_PACKET_SECTIONS[i];
    const matches = headings.filter((heading) => heading.number === number && heading.title === title);
    if (matches.length === 0) errors.push(`missing required section ## ${number}. ${title}`);
    if (matches.length > 1) errors.push(`duplicate required section ## ${number}. ${title}`);
  }
  const canonicalHeadings = headings.filter((heading) =>
    heading.number >= 1 && heading.number <= REQUIRED_PACKET_SECTIONS.length &&
    heading.title === REQUIRED_PACKET_SECTIONS[heading.number - 1]);
  for (let i = 1; i < canonicalHeadings.length; i++)
    if (canonicalHeadings[i].number <= canonicalHeadings[i - 1].number) {
      errors.push("required sections must appear once in numeric order");
      break;
    }
  for (const heading of canonicalHeadings) {
    const next = headings.find((candidate) => candidate.index > heading.index)?.index ?? body.length;
    const section = body.slice(heading.index + 1, next).replace(/^.*\n/, "").trim();
    if (!section) errors.push(`section ${heading.number} (${heading.title}) must not be empty`);
  }

  if (["collector", "verifier"].includes(header.role)) {
    const controller = body.match(/^- Controller disposition:[ \t]*(.*)$/m)?.[1]?.trim();
    if (controller && !/^NULL\s*[—-]/.test(controller)) errors.push(`${header.role} cannot set Controller disposition`);
    const channel = body.match(/^- Channel disposition:[ \t]*`?([^`\n]+)`?[ \t]*$/m)?.[1]?.trim();
    if (channel && !["not-evaluated", "pending"].includes(channel)) errors.push(`${header.role} cannot set final Channel disposition`);
  }

  return errors;
}

async function markdownFiles(directory) {
  let entries;
  try { entries = await readdir(directory, { withFileTypes: true }); }
  catch (error) { if (error.code === "ENOENT") return []; throw error; }
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await markdownFiles(path));
    else if (entry.isFile() && entry.name.endsWith(".md") && entry.name !== "README.md") files.push(path);
  }
  return files.sort();
}

/** Validate every packet and keep multi-slug packets under one work ID on an identical assignment. */
export async function validateResearchPacketDirectory(
  directory = "research/inbox/packets",
  { logicalRoot = "research/inbox/packets" } = {},
) {
  const files = await markdownFiles(directory);
  const errors = [], workIds = new Map();
  for (const file of files) {
    const text = await readFile(file, "utf8");
    const where = repoPath(join(logicalRoot, relative(directory, file)));
    for (const message of validateResearchPacket(text, where)) errors.push(`${where}: ${message}`);
    const parsed = parseFrontmatter(text);
    const header = parsed.header, workId = header?.work_id;
    if (!workId) continue;
    const fingerprint = JSON.stringify({
      producer: header.producer,
      role: header.role,
      base_sha: header.base_sha,
      packet_tier: header.packet_tier,
      as_of: header.as_of,
      prior_packet: header.prior_packet,
      owned_slugs: [...(header.owned_slugs ?? [])].sort(),
      allowed_paths: [...(header.allowed_paths ?? [])].map(repoPath).sort(),
    });
    if (workIds.has(workId) && workIds.get(workId).fingerprint !== fingerprint)
      errors.push(`${where}: work_id ${workId} has an assignment header inconsistent with ${workIds.get(workId).where}`);
    else if (!workIds.has(workId)) workIds.set(workId, { where, fingerprint });
  }
  return { errors, files: files.length };
}
