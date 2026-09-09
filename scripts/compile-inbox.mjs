#!/usr/bin/env node
// Lift packets off producer branches, compile the valid ones into content/, and leave the result in the
// working tree for .github/workflows/compile.yml to commit. Nothing here merges a PR: producers keep
// their branches, this reads packet files off them.
//
//   node scripts/compile-inbox.mjs [--branch <name>]... [--dry] [--remote origin] [--no-fetch]
//
// Contract (docs/research-system.md §6 "Unattended compile"):
//   - a producer never writes content/**; the compiler is the only writer there;
//   - a packet compiles only if it validates — an invalid one is reverted and reported, never blocking
//     the rest of the batch;
//   - the content gates (validate --release, score) run after the batch; a red gate reverts everything
//     and exits 2, so a broken compile can never reach main;
//   - coverage never lowers and scoring is never touched — both are properties of compile() itself.
import { execFile } from "node:child_process";
import { mkdir, readFile, rm, rmdir, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { promisify } from "node:util";
import { parse } from "yaml";
import { parsePacket, validatePacketDirectory } from "./lib/packet.mjs";
import { runCompile } from "./compile-packet.mjs";
import { compileDisposition } from "./lib/pipeline-health.mjs";

const execFileAsync = promisify(execFile);
const SCRIPTS_DIR = fileURLToPath(new URL(".", import.meta.url));
const PACKET_ROOT = "research/inbox/packets";
const CONTENT_DIR = "content";
const REPORT_MD = "build/compile-report.md";
const REPORT_JSON = "build/compile-report.json";
/** Long-lived producer branch namespaces. A branch outside these is never read. */
export const PRODUCER_PREFIXES = ["grok-heavy/", "supergrok/", "grok/", "codex/"];
const MAX_BUFFER = 64 * 1024 * 1024;
/** Reverting one bad packet can clear a uniqueness error another packet was blamed for; revalidate. */
const VALIDATION_PASSES = 5;
/** How many times the batch is recompiled after dropping the packets a content gate blamed. */
const GATE_ATTEMPTS = 3;

async function git(args, { allowFail = false } = {}) {
  try {
    const { stdout } = await execFileAsync("git", args, { maxBuffer: MAX_BUFFER });
    return stdout;
  } catch (error) {
    if (allowFail) return null;
    throw new Error(`git ${args.join(" ")}: ${String(error.stderr || error.message).trim()}`);
  }
}

function argumentsFor(argv) {
  const branches = [];
  let dry = false, remote = "origin", fetch = true, base = null;
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--dry" || arg === "--dry-run") dry = true;
    else if (arg === "--no-fetch") fetch = false;
    else if (arg === "--branch") {
      const value = argv[++i];
      if (!value) throw new Error("--branch requires a branch name");
      branches.push(value);
    } else if (arg === "--remote") {
      remote = argv[++i];
      if (!remote) throw new Error("--remote requires a remote name");
    } else if (arg === "--base") {
      base = argv[++i];
      if (!base) throw new Error("--base requires a ref");
    } else throw new Error(`unexpected argument ${arg}`);
  }
  return { branches, dry, remote, fetch, base: base ?? `${remote}/main` };
}

/** A branch name as the producer wrote it, with any `<remote>/` prefix stripped. */
const bareBranch = (name, remote) => (name.startsWith(`${remote}/`) ? name.slice(remote.length + 1) : name);

/**
 * Every producer branch the remote carries that is not already merged into the base. A merged branch has
 * nothing left to lift: its packets are on main, so its files no longer differ.
 */
export async function discoverBranches(remote, base) {
  const listed = (await git(["for-each-ref", "--format=%(refname:short)", `refs/remotes/${remote}`]))
    .split("\n").map((line) => line.trim()).filter(Boolean)
    .filter((name) => name !== `${remote}/HEAD`)
    .map((name) => bareBranch(name, remote))
    .filter((name) => PRODUCER_PREFIXES.some((prefix) => name.startsWith(prefix)));
  const out = [];
  for (const name of listed) {
    const merged = await git(["merge-base", "--is-ancestor", `${remote}/${name}`, base], { allowFail: true });
    if (merged === null) out.push(name);
  }
  return out.sort();
}

/** Frontmatter `as_of` as a timestamp, or null when the file does not parse as a packet. */
function asOfMs(text) {
  try {
    const value = parsePacket(text).frontmatter?.as_of;
    const ms = Date.parse(value instanceof Date ? value.toISOString() : String(value ?? ""));
    return Number.isFinite(ms) ? ms : null;
  } catch { return null; }
}

/** A discovery round files one inventory of candidate names, not a project. It is never compiled. */
export function isInventoryPacket(frontmatter) {
  if (frontmatter?.slug === "discovery-inventory") return true;
  const identity = frontmatter?.identity ?? {};
  return identity.entity_kind === "unknown" && /inventory/i.test(String(identity.canonical_name ?? ""));
}

/** How many names an inventory packet carries: its operations-log count, else its possible matches. */
export function inventoryCandidateCount(packet) {
  const body = packet?.body ?? "";
  const listed = body.match(/candidates\s+listed:\s*(\d+)/i);
  if (listed) return Number(listed[1]);
  const matches = packet?.frontmatter?.identity?.possible_matches;
  if (Array.isArray(matches) && matches.length) return matches.length;
  const start = body.search(/^##[ \t]+Candidates?\b/m);
  if (start < 0) return 0;
  const rest = body.slice(start).split("\n").slice(1);
  const end = rest.findIndex((line) => /^##[ \t]/.test(line));
  const section = (end === -1 ? rest : rest.slice(0, end)).join("\n");
  return (section.match(/^[ \t]*[-*][ \t]+/gm) ?? []).length;
}

/**
 * Packet files on `ref` that differ from `base`, as { path, branchText, mainText }.
 * A file deleted on the branch is left alone — a producer does not delete from main.
 * A file main already carries with an `as_of` at least as new is left alone too: main's copy is the one
 * the compiler wrote and a controller may have corrected, and a packet that supersedes it must say so
 * with a newer `as_of`.
 */
export async function candidatesFor(ref, base) {
  const raw = await git(["diff", "--no-renames", "--name-status", "-z", base, ref, "--", PACKET_ROOT]);
  const fields = raw.split("\0").filter(Boolean);
  const out = [];
  for (let i = 0; i + 1 < fields.length; i += 2) {
    const status = fields[i][0];
    const path = fields[i + 1];
    if (status !== "A" && status !== "M") continue;
    if (!path.endsWith(".md")) continue;
    const branchText = await git(["show", `${ref}:${path}`]);
    const mainText = await git(["show", `${base}:${path}`], { allowFail: true });
    if (mainText !== null) {
      const mine = asOfMs(mainText), theirs = asOfMs(branchText);
      if (mine !== null && theirs !== null && mine >= theirs) {
        out.push({ path, skipped: `main already carries a copy dated ${new Date(mine).toISOString()}; the branch copy is not newer` });
        continue;
      }
    }
    out.push({ path, branchText, mainText });
  }
  return out;
}

/** Put a candidate back the way main has it (or remove it, when main has no such file). */
async function revertPacket(candidate) {
  if (candidate.mainText !== null && candidate.mainText !== undefined) {
    await writeFile(candidate.path, candidate.mainText);
    return;
  }
  await rm(candidate.path, { force: true });
  await rmdir(dirname(candidate.path)).catch(() => {});
}

async function restoreWorkingTree() {
  await git(["checkout", "--", CONTENT_DIR, PACKET_ROOT], { allowFail: true });
  await git(["clean", "-fdq", "--", CONTENT_DIR, PACKET_ROOT], { allowFail: true });
}

async function readJson(path) {
  try { return JSON.parse(await readFile(path, "utf8")); }
  catch { return null; }
}

async function censusNames() {
  try {
    const rows = parse(await readFile(join(CONTENT_DIR, "census.yaml"), "utf8")) ?? [];
    return new Map(rows.map((row) => [row.slug, row.name ?? row.slug]));
  } catch { return new Map(); }
}

/** Slugs currently above the share bar, read from the derived.json a score run just wrote. */
function shareBarSlugs(derived) {
  if (!derived?.shareBar) return null;
  return Object.entries(derived.shareBar).filter(([, above]) => above).map(([slug]) => slug).sort();
}

/**
 * One content gate. These are exactly what `npm run validate:release` and `npm run score` run, spawned by
 * absolute script path so the gate uses the compiler's own copy of the scripts whatever the cwd is.
 */
async function runGate(script, args = []) {
  try {
    const { stdout, stderr } = await execFileAsync(process.execPath, [join(SCRIPTS_DIR, script), ...args], { maxBuffer: MAX_BUFFER });
    return { ok: true, output: `${stdout}${stderr}` };
  } catch (error) {
    return { ok: false, output: `${error.stdout ?? ""}${error.stderr ?? error.message}` };
  }
}

const tail = (text, lines = 25) => String(text).trimEnd().split("\n").slice(-lines).join("\n");

/** The canonical file an error line names, mapped back to its slug. Order matters: packets before research. */
const SLUG_PATTERNS = [
  /^research\/inbox\/packets\/([a-z0-9][a-z0-9-]*)\//,
  /^projects\/([a-z0-9][a-z0-9-]*)\.yaml:/,
  /^sources\/([a-z0-9][a-z0-9-]*)(?:\.yaml)?:/,
  /^research\/([a-z0-9][a-z0-9-]*)\.md:/,
  /^feed\/([a-z0-9][a-z0-9-]*)\.yaml:/,
  /^census: ([a-z0-9][a-z0-9-]*) /,
  /^changelog\.yaml: \[\d+\] \S+ ([a-z0-9][a-z0-9-]*) /,
];

/** `<packet path>: identity matches canonical slug <slug> on <surface>; record it under …` */
const IDENTITY_MATCH_RE = /^research\/inbox\/packets\/([a-z0-9][a-z0-9-]*)\/[^:]+: identity matches canonical slug ([a-z0-9][a-z0-9-]*) on (.+?); record it under/;
/** `census identity "<name>" on <slug> collides with canonical slug <slug>` (scripts/lib/checks.mjs) */
const CENSUS_IDENTITY_RE = /^census identity "[^"]*" on ([a-z0-9][a-z0-9-]*) collides with canonical slug ([a-z0-9][a-z0-9-]*)$/;

/**
 * Which slugs a gate's output blames, which of them are duplicates of a name the registry already has,
 * the error lines behind each, and how many errors name no slug at all. A batch whose every gate error
 * points at a packet this run compiled can be retried without those packets; one error that names
 * site.yaml or a slug nobody touched cannot be fixed by dropping anything, and the run stops.
 *
 * An identity collision is the one error that names *two* slugs, and by default the wrong one: the line
 * is filed against the established packet — `research/inbox/packets/downto/…: identity matches canonical
 * slug dtf` — which this run never touched, so the whole batch used to abort over a newcomer that is
 * only a second name for something already covered. Whichever of the pair is new in this batch is the
 * duplicate: the established name keeps the slug, both lines are charged to the newcomer, and dropping
 * the newcomer clears them.
 */
export function failingSlugs(output, newcomers = new Set()) {
  const slugs = new Set();
  const duplicates = new Map();
  const lines = new Map();
  let unattributed = 0;
  const blame = (slug, message) => {
    slugs.add(slug);
    if (!lines.has(slug)) lines.set(slug, []);
    lines.get(slug).push(message);
  };

  for (const line of String(output).split("\n")) {
    if (!line.startsWith("error ")) continue;
    const message = line.slice("error ".length);

    const identity = message.match(IDENTITY_MATCH_RE);
    const registry = identity ? null : message.match(CENSUS_IDENTITY_RE);
    const pair = identity
      ? { a: identity[1], b: identity[2], surface: identity[3] }
      : registry ? { a: registry[1], b: registry[2], surface: null } : null;
    if (pair) {
      const newcomer = newcomers.has(pair.a) ? pair.a : newcomers.has(pair.b) ? pair.b : null;
      if (newcomer) {
        const other = newcomer === pair.a ? pair.b : pair.a;
        const known = duplicates.get(newcomer);
        if (!known) duplicates.set(newcomer, { other, surface: pair.surface });
        else if (pair.surface && !known.surface) known.surface = pair.surface;
        blame(newcomer, message);
        continue;
      }
      // Neither side is new: two established rows disagreeing is a controller's problem, not a batch's.
    }

    const match = SLUG_PATTERNS.reduce((found, pattern) => found ?? message.match(pattern), null);
    if (match) blame(match[1], message);
    else unattributed++;
  }
  return { slugs, unattributed, duplicates, lines };
}

/** How a skipped duplicate is explained to the producer on its PR. */
export const duplicateReason = ({ other, surface }) =>
  `duplicate of ${other} on ${surface ?? "the official handle/domain"}; write an update packet for ${other} instead of a new name`;

export async function compileInbox({ branches = [], dry = false, remote = "origin", fetch = true, base = `${remote}/main`, log = console.log } = {}) {
  const dirty = await git(["status", "--porcelain", "--", CONTENT_DIR, PACKET_ROOT]);
  if (dirty.trim()) throw new Error(`working tree is not clean under ${CONTENT_DIR}/ or ${PACKET_ROOT}/:\n${dirty.trim()}`);

  let names = branches.map((name) => bareBranch(name, remote));
  if (fetch) {
    if (names.length) {
      for (const name of names)
        await git(["fetch", "--no-tags", remote, `+refs/heads/${name}:refs/remotes/${remote}/${name}`]);
    } else {
      await git(["fetch", "--no-tags", "--prune", remote, `+refs/heads/*:refs/remotes/${remote}/*`]);
    }
  }
  if (!names.length) names = await discoverBranches(remote, base);
  log(`${names.length} producer branch(es): ${names.join(", ") || "none"}`);

  const report = {
    generated_at: new Date().toISOString(),
    dry, base, branches: [], compiled: [], inventory: [], notices: [],
    gates: {}, shareBar: null, packetPaths: [], preexistingErrors: [], packetWarnings: [], duplicates: [],
  };

  // 1. Collect. Every candidate lands in the working tree before anything is validated, so the
  //    per-(work_id, slug) uniqueness check sees the whole batch at once.
  const candidates = [];
  for (const name of names) {
    const ref = `${remote}/${name}`;
    const branchReport = { branch: name, compiled: [], skipped: [], inventory: [], unchanged: [] };
    report.branches.push(branchReport);
    let found;
    try { found = await candidatesFor(ref, base); }
    catch (error) { branchReport.skipped.push({ path: "(branch)", errors: [error.message] }); continue; }
    for (const candidate of found) {
      if (candidate.skipped) { branchReport.unchanged.push({ path: candidate.path, reason: candidate.skipped }); continue; }
      candidates.push({ ...candidate, branch: name, report: branchReport });
    }
    log(`${name}: ${found.length - branchReport.unchanged.length} candidate packet(s), ${branchReport.unchanged.length} left alone`);
  }

  // Resolve same-path candidates before touching disk. Equal-time conflicting copies need review.
  const byPath = new Map();
  for (const candidate of candidates) {
    if (!byPath.has(candidate.path)) byPath.set(candidate.path, []);
    byPath.get(candidate.path).push(candidate);
  }
  const selected = [];
  for (const rows of byPath.values()) {
    rows.sort((a,b) => (asOfMs(b.branchText) ?? 0) - (asOfMs(a.branchText) ?? 0) || a.branch.localeCompare(b.branch));
    const newest = rows[0];
    const conflict = rows.some(r => asOfMs(r.branchText) === asOfMs(newest.branchText) && r.branchText !== newest.branchText);
    for (const row of rows) {
      if (!conflict && row === newest) selected.push(row);
      else if (conflict) row.report.skipped.push({ path: row.path, errors: ["same path and date have conflicting producer copies; controller review required"] });
      else row.report.unchanged.push({ path: row.path, reason: "newer or identical packet selected from another branch" });
    }
  }
  if (!selected.length) {
    report.ok = true;
    report.gates = { validate: { ok: true, skipped: true, output: "No selected changes." }, score: { ok: true, skipped: true, output: "No selected changes." } };
    await writeReport(report);
    log("No selected packet changes; skipped compilation and scoring.");
    return report;
  }
  for (const candidate of selected) {
    await mkdir(dirname(candidate.path), { recursive: true });
    await writeFile(candidate.path, candidate.branchText);
  }

  // 2. Validate. A packet with errors goes back the way main has it and is reported against its branch;
  //    the rest of the batch carries on.
  const census = parse(await readFile(join(CONTENT_DIR, "census.yaml"), "utf8")) ?? [];
  // The registry as main has it, before anything in this batch is compiled: everything else is a newcomer.
  const existingSlugs = new Set(census.map((row) => row.slug));
  let live = selected;
  for (let pass = 0; pass < VALIDATION_PASSES; pass++) {
    const { errors, warnings } = await validatePacketDirectory(PACKET_ROOT, census);
    report.packetWarnings = warnings;
    const bad = new Map();
    const orphans = [];
    for (const error of errors) {
      const owner = live.find((candidate) => error.startsWith(`${candidate.path}: `));
      if (!owner) { orphans.push(error); continue; }
      if (!bad.has(owner)) bad.set(owner, []);
      bad.get(owner).push(error.slice(owner.path.length + 2));
    }
    report.preexistingErrors = orphans;
    if (!bad.size) break;
    for (const [candidate, messages] of bad) {
      await revertPacket(candidate);
      candidate.report.skipped.push({ path: candidate.path, errors: messages });
      log(`skip  ${candidate.path}: ${messages.length} validation error(s)`);
    }
    live = live.filter((candidate) => !bad.has(candidate));
  }

  // 3. Compile, oldest packet first so a later `as_of` supersedes an earlier one in the same batch.
  //    An inventory packet is a list of candidate names, not a project: it is kept as a record and
  //    never turned into a census row.
  const parsed = [];
  const kept = [];
  for (const candidate of live) {
    const packet = parsePacket(candidate.branchText);
    if (isInventoryPacket(packet.frontmatter)) {
      const count = inventoryCandidateCount(packet);
      const matches = packet.frontmatter?.identity?.possible_matches?.length ?? 0;
      const entry = { path: candidate.path, branch: candidate.branch, candidates: count, possibleMatches: matches };
      candidate.report.inventory.push(entry);
      report.inventory.push(entry);
      kept.push(candidate);
      log(`note  ${candidate.path}: inventory: ${count} candidates (${matches} possible match(es)) — kept as a record, never compiled`);
      continue;
    }
    parsed.push({ ...candidate, packet, asOf: asOfMs(candidate.branchText) ?? 0 });
  }
  parsed.sort((a, b) => a.asOf - b.asOf || a.path.localeCompare(b.path));

  // The share bar before anything is compiled, so the report can name what the batch added or removed.
  await runGate("score.mjs");
  const shareBarBefore = shareBarSlugs(await readJson("build/derived.json"));
  const namesBefore = await censusNames();

  // 4. Compile and gate. Nothing that fails a gate ever reaches main. When every gate error points at a
  //    packet this run compiled, those packets are dropped and the batch is rebuilt without them — one
  //    packet whose prose trips the release lint must not hold up the other thirty. An error naming a
  //    file nobody in this batch touched cannot be fixed that way, and the run stops.
  let batch = parsed;
  let validate, score;
  for (let attempt = 1; attempt <= GATE_ATTEMPTS; attempt++) {
    report.compiled = []; report.notices = []; report.packetPaths = [];
    for (const branch of report.branches) branch.compiled = [];
    if (attempt > 1) {
      for (const candidate of [...batch, ...kept]) {
        await mkdir(dirname(candidate.path), { recursive: true });
        await writeFile(candidate.path, candidate.branchText);
      }
    }
    const compiled = [];
    for (const candidate of batch) {
      try {
        const result = await runCompile({ packetPath: candidate.path, contentDir: CONTENT_DIR });
        candidate.report.compiled.push(candidate.packet.frontmatter.slug);
        report.compiled.push(candidate.packet.frontmatter.slug);
        report.packetPaths.push(candidate.path);
        const { autoTaggedParagraphs, skippedMetrics, skippedDeployments } = result.degraded;
        report.notices.push({
          slug: result.project.slug, path: candidate.path, branch: candidate.branch,
          messages: result.notices, autoTaggedParagraphs, skippedMetrics, skippedDeployments,
        });
        compiled.push(candidate);
      } catch (error) {
        await revertPacket(candidate);
        candidate.report.skipped.push({ path: candidate.path, errors: String(error.message).split("\n") });
        log(`skip  ${candidate.path}: compile refused it`);
      }
    }
    batch = compiled;
    log(`compiled ${report.compiled.length} packet(s)`);

    validate = await runGate("validate.mjs", ["--release"]);
    score = validate.ok ? await runGate("score.mjs") : { ok: false, output: "not run: validate --release failed" };
    if (validate.ok && score.ok) break;

    const failed = validate.ok ? score : validate;
    // A newcomer is a slug this batch compiled that the registry did not already have. Only a newcomer
    // can be a duplicate of an established name, and only a newcomer can be dropped to clear one.
    const newcomers = new Set(batch.map((candidate) => candidate.packet.frontmatter.slug).filter((slug) => !existingSlugs.has(slug)));
    const { slugs, unattributed, duplicates, lines } = failingSlugs(failed.output, newcomers);
    const offenders = batch.filter((candidate) => slugs.has(candidate.packet.frontmatter.slug));
    const fixable = slugs.size > 0 && unattributed === 0 && offenders.length === slugs.size;
    if (!fixable || attempt === GATE_ATTEMPTS) break;
    log(`gate failed on ${[...slugs].join(", ")} — dropping those packets and recompiling the rest`);
    await restoreWorkingTree();
    for (const candidate of offenders) {
      const slug = candidate.packet.frontmatter.slug;
      const duplicate = duplicates.get(slug);
      if (duplicate) report.duplicates.push({ slug, branch: candidate.branch, path: candidate.path, ...duplicate });
      candidate.report.skipped.push({
        path: candidate.path,
        errors: [
          duplicate ? duplicateReason(duplicate) : "the compiled content failed a content gate, so this packet was left out of the batch:",
          ...(lines.get(slug) ?? []),
        ],
      });
    }
    batch = batch.filter((candidate) => !offenders.includes(candidate));
  }
  report.gates.validate = { ok: validate.ok, output: tail(validate.output) };
  report.gates.score = { ok: score.ok, output: tail(score.output) };

  if (validate.ok && score.ok) {
    const after = shareBarSlugs(await readJson("build/derived.json"));
    const namesAfter = await censusNames();
    const label = (slug, map) => (map.get(slug) ? `${map.get(slug)} (${slug})` : slug);
    report.shareBar = {
      before: (shareBarBefore ?? []).map((slug) => label(slug, namesBefore)),
      after: (after ?? []).map((slug) => label(slug, namesAfter)),
      added: (after ?? []).filter((slug) => !(shareBarBefore ?? []).includes(slug)).map((slug) => label(slug, namesAfter)),
      removed: (shareBarBefore ?? []).filter((slug) => !(after ?? []).includes(slug)).map((slug) => label(slug, namesBefore)),
    };
  }

  report.ok = validate.ok && score.ok;
  if (!report.ok || dry) await restoreWorkingTree();
  await writeReport(report);
  log(renderReport(report));
  return report;
}

export function renderReport(report) {
  const lines = [];
  lines.push(`# Compile report — ${report.generated_at}${report.dry ? " (dry run)" : ""}`);
  lines.push("");
  lines.push(`Outcome: ${report.status ?? compileDisposition(report)}. Execution gates and research disposition are separate.`);
  lines.push(report.ok
    ? `Gates passed. ${report.compiled.length} packet(s) compiled from ${report.branches.length} branch(es).`
    : `Gates FAILED — content/ and ${PACKET_ROOT}/ were reverted, nothing is staged for main.`);
  lines.push("");
  for (const branch of report.branches) {
    lines.push(`## ${branch.branch}`);
    lines.push(`- compiled: ${branch.compiled.length ? branch.compiled.join(", ") : "none"}`);
    for (const entry of branch.inventory)
      lines.push(`- inventory: ${entry.candidates} candidates (${entry.possibleMatches} possible match(es)) in \`${entry.path}\` — kept as a record, never compiled`);
    for (const entry of branch.unchanged) lines.push(`- left alone: \`${entry.path}\` — ${entry.reason}`);
    if (branch.skipped.length) {
      lines.push(`- skipped: ${branch.skipped.length} packet(s)`);
      for (const entry of branch.skipped) {
        lines.push("");
        lines.push(`\`${entry.path}\``);
        lines.push("```text");
        for (const message of entry.errors) lines.push(message);
        lines.push("```");
      }
    }
    lines.push("");
  }
  const noisy = report.notices.filter((n) => n.messages.length || n.autoTaggedParagraphs || n.skippedMetrics || n.skippedDeployments);
  if (noisy.length) {
    lines.push("## Notices");
    for (const notice of noisy) {
      lines.push(`- **${notice.slug}** — ${notice.autoTaggedParagraphs} auto-tagged paragraph(s), ${notice.skippedMetrics} skipped metric(s), ${notice.skippedDeployments} skipped deployment(s)`);
      for (const message of notice.messages) lines.push(`  - ${message}`);
    }
    lines.push("");
  }
  if (report.shareBar) {
    lines.push("## Share bar");
    lines.push(`- before: ${report.shareBar.before.length} name(s)`);
    lines.push(`- after: ${report.shareBar.after.length} name(s)`);
    lines.push(`- added: ${report.shareBar.added.join(", ") || "none"}`);
    lines.push(`- removed: ${report.shareBar.removed.join(", ") || "none"}`);
    lines.push("");
  }
  if (report.duplicates.length) {
    lines.push("## Duplicate names (skipped, not compiled)");
    for (const entry of report.duplicates)
      lines.push(`- **${entry.slug}** — ${duplicateReason(entry)} (\`${entry.path}\`)`);
    lines.push("");
  }
  if (report.packetWarnings.length) {
    lines.push("## Packet warnings (a name collides, no official surface is shared — the alias is dropped)");
    lines.push("```text");
    lines.push(...report.packetWarnings);
    lines.push("```");
    lines.push("");
  }
  if (report.preexistingErrors.length) {
    lines.push("## Packet errors already on main (not from a producer branch)");
    lines.push("```text");
    lines.push(...report.preexistingErrors);
    lines.push("```");
    lines.push("");
  }
  lines.push("## Gates");
  for (const [name, gate] of Object.entries(report.gates)) {
    lines.push(`- \`${name}\`: ${gate.ok ? "pass" : "FAIL"}`);
    if (!gate.ok) { lines.push("```text"); lines.push(gate.output); lines.push("```"); }
  }
  lines.push("");
  lines.push(`Compiled slugs: ${report.compiled.join(", ") || "none"}`);
  return lines.join("\n");
}

async function writeReport(report) {
  report.status = compileDisposition(report);
  await mkdir("build", { recursive: true });
  await writeFile(REPORT_MD, `${renderReport(report)}\n`);
  await writeFile(REPORT_JSON, `${JSON.stringify(report, null, 2)}\n`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try {
    const report = await compileInbox(argumentsFor(process.argv.slice(2)));
    process.exit(report.ok ? 0 : 2);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}
