// Smoke test for the built site (final review recommendation 3, brief §Minors). Boots `vite
// preview` on :8081 against the last `npm run build` output, hits the routes that exercise
// every loader (directory, a full dossier, methodology, changelog, a dependency card), asserts
// each returns 200, and asserts the dossier HTML never leaks a raw/uncapped score field. Run
// this after `npm run build` — it does not build for you.
//   npm run build && npm run smoke

import { spawn } from "node:child_process";
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import YAML from "yaml";
import { uniqueLaunches } from "../../scripts/lib/relationships.mjs";
import { formatKpi } from "../src/data/types.ts";
import { parse } from "yaml";

const PORT = Number(process.env.SMOKE_PORT ?? 8081); // override when 8081 is taken by another worktree's server
const BASE = `http://localhost:${PORT}`;
const ROUTES = [
  "/",
  "/n/pons",
  "/n/pons?tab=evidence",
  "/n/pons?tab=feed",
  "/n/hoodfun",
  "/n/cashcat?tab=control",
  "/feed",
  "/methodology",
  "/relationships",
  "/data/registry.json",
  "/data/health.json",
  "/disclaimer",
  "/terms",
  "/privacy",
  "/changelog",
  "/d/stock-tokens",
];
const READY_TIMEOUT_MS = 30_000;
const READY_POLL_MS = 300;
const BANNED_IN_DOSSIER = ["uncapped", "securityRaw"];

async function reviewServerFunctions() {
  const html = await fetch(`${BASE}/`).then((response) => response.text());
  const asset = html.match(/src="(\/assets\/index-[^"]+\.js)"/)?.[1];
  if (!asset) throw new Error("built client entry was not found");
  const compiled = await fetch(BASE + asset).then((response) => response.text());
  const marker = Math.max(compiled.indexOf("`/review`"), compiled.indexOf('"/review"'));
  if (marker < 0) throw new Error("built review route was not found");
  const reviewPrefix = compiled.slice(Math.max(0, marker - 2_000), marker);
  const definitions = [
    ...reviewPrefix.matchAll(/method:[`'"](GET|POST)[`'"][\s\S]{0,400}?([a-f0-9]{64})/g),
  ];
  return definitions.slice(-2).map((match) => ({
    method: match[1],
    id: match[2],
    name: match[1] === "GET" ? "getReviewQueue" : "moderateTelegram",
  }));
}

function startPreview(extraEnv = {}) {
  const runtime = process.env.SMOKE_RUNTIME;
  const command = runtime === "node-server" ? "node" : "npm";
  const args = runtime === "cloudflare"
    ? ["run", "cloudflare:dev", "--", "--port", String(PORT)]
    : runtime === "node-server"
      ? [".output/server/index.mjs"]
      : ["run", "preview", "--", "--port", String(PORT), "--strictPort"];
  const child = spawn(command, args, {
    stdio: ["ignore", "pipe", "pipe"],
    detached: true, // own process group, so we can kill vite (npm's grandchild) too
    env: { ...process.env, PORT: String(PORT), ...extraEnv },
  });
  let output = "";
  child.stdout.on("data", (d) => (output += d));
  child.stderr.on("data", (d) => (output += d));
  return { child, getOutput: () => output };
}

async function waitForServer() {
  const deadline = Date.now() + READY_TIMEOUT_MS;
  while (Date.now() < deadline) {
    try {
      const res = await fetch(`${BASE}/disclaimer`);
      if (res.ok) return;
    } catch {
      // preview server not accepting connections yet
    }
    await new Promise((r) => setTimeout(r, READY_POLL_MS));
  }
  throw new Error(`preview server did not respond on ${BASE} within ${READY_TIMEOUT_MS}ms`);
}

async function main() {
  // Exercise a cold runtime with a local provider spy: static/meta pages must not
  // fetch Pulse, while the dashboard still can. No real provider traffic in this test.
  let pulseReads = 0;
  const pulseSpy = process.env.SMOKE_RUNTIME === "node-server" ? createServer((_req, res) => {
    pulseReads++;
    res.setHeader("content-type", "application/json");
    res.end(JSON.stringify({ at: new Date().toISOString(), ticks: 0, alerts: [], hot: [] }));
  }) : null;
  if (pulseSpy) await new Promise(resolve => pulseSpy.listen(0, "127.0.0.1", resolve));
  const pulseAddress = pulseSpy?.address();
  const { child, getOutput } = startPreview(pulseAddress && typeof pulseAddress === "object"
    ? { PULSE_URL: `http://127.0.0.1:${pulseAddress.port}` } : {});
  const failures = [];

  try {
    await waitForServer();

    if (pulseSpy) {
      for (const path of ["/feed", "/methodology", "/n/pons", "/n/cashcat", "/relationships", "/terms", "/privacy"]) {
        const response = await fetch(BASE + path);
        await response.text();
        if (response.status !== 200) failures.push(`cold ${path} returned ${response.status}`);
      }
      console.log(`  ${pulseReads === 0 ? "ok  " : "FAIL"} metadata/feed/dossier pages made ${pulseReads} Pulse reads (expected 0)`);
      if (pulseReads !== 0) failures.push("shared metadata must not trigger live Pulse reads");
      await fetch(`${BASE}/`).then(response => response.text());
      if (pulseReads !== 1) failures.push(`dashboard should make one cached Pulse read, got ${pulseReads}`);
    }

    for (const route of ROUTES) {
      const res = await fetch(BASE + route);
      const ok = res.status === 200;
      console.log(`  ${ok ? "ok  " : "FAIL"} ${route} -> ${res.status}`);
      if (!ok) failures.push(`${route} returned ${res.status}, expected 200`);
      if (route === "/data/health.json") {
        if (!res.headers.get("content-type")?.includes("application/json")) failures.push("measurement health must be JSON");
        const health = await res.json();
        if (health.version !== 1 || !/^[a-f0-9]{40}$/.test(health.base_sha ?? "") || !Array.isArray(health.projects) || !health.projects.length) failures.push("measurement health artifact is incomplete");
        if (JSON.stringify(health).length > 2_000_000) failures.push("measurement health exceeded its reader bound");
        continue;
      }
      if (route === "/data/registry.json") {
        if (!res.headers.get("content-type")?.includes("application/json")) failures.push("registry artifact must be JSON, not HTML");
        const registry = await res.json();
        if (registry.version !== 1 || !registry.base_sha || !Array.isArray(registry.relationships?.addresses)) failures.push("registry artifact is incomplete");
        if (registry.grok?.updates?.length > 20) failures.push("daily research worklist exceeded its cap");
        continue; // Static JSON assets do not pass through HTML security middleware.
      }
      const csp = res.headers.get("content-security-policy") ?? "";
      if (!csp.includes("default-src 'self'") || !csp.includes("object-src 'none'") || !csp.includes("frame-ancestors 'none'"))
        failures.push(`${route} is missing the required Content-Security-Policy`);
    }

    const publicHtml = await fetch(`${BASE}/`).then((response) => response.text());
    // /feed has a wire-only loader. Even a filtered deep link must not hydrate the
    // directory's histories/KPIs; filters still work in SSR before client JavaScript.
    const feedHtml = await fetch(`${BASE}/feed`).then(response => response.text());
    const filteredFeed = await fetch(`${BASE}/feed?name=pons`).then(response => response.text());
    const emptyFeed = await fetch(`${BASE}/feed?name=not-a-name`).then(response => response.text());
    const secondFeed = await fetch(`${BASE}/feed?page=2`).then(response => response.text());
    const feedMain = html => html.match(/<main\b[\s\S]*?<\/main>/)?.[0] ?? "";
    const visibleRows = html => (feedMain(html).match(/<li\b/g) ?? []).length;
    for (const [label, passed] of [
      ["feed pages have bounded rows", visibleRows(feedHtml) === 50 && visibleRows(secondFeed) === 50 && visibleRows(filteredFeed) > 0 && visibleRows(filteredFeed) <= 50],
      ["older feed pages are real links with different content", feedMain(feedHtml).includes('href="/feed?page=2"') && feedMain(secondFeed).includes("Newer") && feedMain(feedHtml) !== feedMain(secondFeed)],
      ["feed first response stays under 300KB decoded", Buffer.byteLength(feedHtml) < 300_000],
      ["feed name deep link is filtered before hydration", feedMain(filteredFeed).includes('value="pons" selected=""') && !feedMain(filteredFeed).includes('>CASHCAT</button>')],
      ["unknown feed name has an honest empty state", visibleRows(emptyFeed) === 0 && feedMain(emptyFeed).includes("No wire items match these filters yet.")],
      ["feed response excludes directory history/KPI payload", !feedHtml.includes('"histories"') && !feedHtml.includes('"holdersDelta7d"')],
    ]) {
      console.log(`  ${passed ? "ok  " : "FAIL"} ${label}`);
      if (!passed) failures.push(label);
    }
    console.log(`  feed response: ${Buffer.byteLength(feedHtml)} decoded bytes; filtered: ${Buffer.byteLength(filteredFeed)}`);
    const legalChecks = [
      [
        "/",
        publicHtml,
        [
          "Icarus is an independent, automated information service",
          "Full disclaimer.",
          'href="/disclaimer"',
        ],
      ],
      [
        "/disclaimer",
        await fetch(`${BASE}/disclaimer`).then((response) => response.text()),
        ["No endorsement, approval, or affiliation", "rug pull", "Verify independently"],
      ],
      [
        "/terms",
        await fetch(`${BASE}/terms`).then((response) => response.text()),
        ["Terms of Use", "No advice, endorsement, or reliance", "Prohibited use"],
      ],
      [
        "/privacy",
        await fetch(`${BASE}/privacy`).then((response) => response.text()),
        [
          "Privacy Policy",
          "Information handled",
          "does not currently sell visitor personal information",
        ],
      ],
    ];
    for (const [route, html, expected] of legalChecks) {
      for (const phrase of expected) {
        const present = html.includes(phrase);
        console.log(`  ${present ? "ok  " : "FAIL"} ${route} includes legal copy: ${phrase}`);
        if (!present) failures.push(`${route} is missing required legal copy: ${phrase}`);
      }
    }

    const reviewRes = await fetch(`${BASE}/review`, { redirect: "manual" });
    const reviewBody = await reviewRes.text();
    const reviewPrivate =
      reviewRes.status === 401 &&
      reviewRes.headers.get("www-authenticate")?.startsWith("Basic ") &&
      reviewRes.headers.get("cache-control")?.includes("no-store") &&
      reviewRes.headers.get("x-robots-tag")?.includes("noindex") &&
      reviewRes.headers.get("content-security-policy")?.includes("default-src 'self'") &&
      !reviewBody.includes("Channel review");
    console.log(
      `  ${reviewPrivate ? "ok  " : "FAIL"} /review -> ${reviewRes.status} with auth challenge`,
    );
    if (!reviewPrivate) failures.push("/review must challenge without returning private content");

    const functions = await reviewServerFunctions();
    if (functions.length !== 2) failures.push("expected both review server functions in the build");
    for (const serverFunction of functions) {
      const res = await fetch(`${BASE}/_serverFn/${serverFunction.id}`, {
        method: serverFunction.method,
        redirect: "manual",
        headers: {
          origin: BASE,
          "sec-fetch-site": "same-origin",
          "x-tsr-serverFn": "true",
        },
      });
      const body = await res.text();
      const isPrivate =
        res.status === 401 &&
        res.headers.get("www-authenticate")?.startsWith("Basic ") &&
        !body.includes("channelEnabled");
      console.log(
        `  ${isPrivate ? "ok  " : "FAIL"} ${serverFunction.name} -> ${res.status} with auth challenge`,
      );
      if (!isPrivate) failures.push(`${serverFunction.name} must reject unauthenticated requests`);

      if (serverFunction.method === "POST") {
        const crossOrigin = await fetch(`${BASE}/_serverFn/${serverFunction.id}`, {
          method: "POST",
          redirect: "manual",
          headers: {
            origin: "https://attacker.invalid",
            "sec-fetch-site": "cross-site",
            "x-tsr-serverFn": "true",
          },
        });
        const rejectsCrossOrigin = crossOrigin.status === 403;
        console.log(
          `  ${rejectsCrossOrigin ? "ok  " : "FAIL"} ${serverFunction.name} rejects cross-origin writes`,
        );
        if (!rejectsCrossOrigin) failures.push("moderation must reject cross-origin writes");
      }
    }

    const dossierRes = await fetch(`${BASE}/n/pons`);
    const dossierHtml = await dossierRes.text();
    const ponsRead = YAML.parse(await readFile(new URL('../../content/pulled/pons.yaml',import.meta.url),'utf8'));
    const launches = uniqueLaunches([ponsRead],Date.now());
    if (launches.value !== null) {
      const expected = formatKpi('launches24h',launches.value,launches.partial);
      const visible = dossierHtml.includes(expected) && dossierHtml.includes('launch calls 24h');
      console.log(`  ${visible ? 'ok  ' : 'FAIL'} Pons factory-window KPI is ${expected}`);
      if (!visible) failures.push('Pons fresh factory KPI must survive unrelated retained activity and label partial counts');
    }
    for (const slug of ['stonkbroker', 'longbow', 'sight', 'arc', 'alandale']) {
      const response = await fetch(`${BASE}/n/${slug}`);
      const html = await response.text();
      const project = parse(await readFile(new URL(`../../content/projects/${slug}.yaml`, import.meta.url), 'utf8'));
      const header = html.split('name-card-header')[1]?.split('</header>')[0] ?? '';
      const expectedDepth = project.research_state?.full_as_of ? 'Detailed research' : 'Initial research';
      const honest = response.ok && header.includes(expectedDepth) &&
        (project.review.approver !== 'pending' || header.includes('Independent review pending')) &&
        !header.includes('links confirmed') &&
        (project.lifecycle !== 'announced' || header.includes('Announced'));
      console.log(`  ${honest ? 'ok  ' : 'FAIL'} /n/${slug} separates accepted research, review and product lifecycle`);
      if (!honest) failures.push(`/n/${slug}: research-state/lifecycle header mismatch`);
      const observations = await readFile(new URL(`../../content/pulled/${slug}.yaml`, import.meta.url), 'utf8')
        .then(raw => parse(raw)).catch(error => { if (error.code === 'ENOENT') return null; throw error; });
      if (!observations && ['mainnet','beta'].includes(project.lifecycle) && !header.includes('Activity unmeasured'))
        failures.push(`/n/${slug}: absent machine reads must not imply Announced, Quiet or Live`);
      const earliest = (observations?.addresses ?? []).filter(row => row.is_contract === true && row.created_at && Number.isFinite(Date.parse(row.created_at)))
        .sort((a,b) => Date.parse(a.created_at) - Date.parse(b.created_at))[0];
      if (earliest) {
        const tag = (header.match(/<a\b[^>]*>[\s\S]*?<\/a>/g) ?? []).find(anchor => anchor.includes('Contract created')) ?? '';
        const sourced = tag.toLowerCase().includes(`/address/${earliest.address.toLowerCase()}`) && !header.includes('>Mainnet<');
        console.log(`  ${sourced ? 'ok  ' : 'FAIL'} /n/${slug} contract date cites its own address, not product launch`);
        if (!sourced) failures.push(`/n/${slug}: contract creation date source/label mismatch`);
      }
    }
    const tokenHtml = await fetch(`${BASE}/n/cashcat?tab=control`).then(response => response.text());
    const structureHtml = tokenHtml.slice(tokenHtml.indexOf(">Structure</h2>"));
    const pulled = parse(await readFile(new URL("../../content/pulled/cashcat.yaml", import.meta.url), "utf8"));
    const checkedLock = pulled.structure?.lp?.find(row => row.locked_share !== null || row.holder_kind !== null);
    for (const [label, present, at] of [
      ["Mint", ["owner-can-mint", "no-mint-function"].includes(pulled.structure?.mint), pulled.structure?.mint_as_of],
      ["Liquidity", Boolean(checkedLock), checkedLock?.as_of],
      ["Top-10 hold, pools out", pulled.market?.top10_share != null || pulled.market?.top10_share_ex_pools != null, pulled.market?.top10_as_of],
    ]) {
      if (!present) continue;
      const start = structureHtml.indexOf(`<span>${label}</span>`);
      const row = start < 0 ? "" : structureHtml.slice(start, structureHtml.indexOf("</div>", start));
      const expected = at ? at.slice(0, 10) : "measurement date unknown";
      const honest = row.includes(expected) && (at ? row.includes("<time") : true);
      console.log(`  ${honest ? "ok  " : "FAIL"} /n/cashcat ${label} exposes its measurement date`);
      if (!honest) failures.push(`/n/cashcat ${label} did not render measurement freshness: ${expected}`);
    }
    for (const banned of BANNED_IN_DOSSIER) {
      if (dossierHtml.includes(banned)) {
        failures.push(
          `/n/pons HTML contains "${banned}" — a raw/uncapped score field leaked to the page`,
        );
      } else {
        console.log(`  ok   /n/pons has no "${banned}" in the HTML`);
      }
    }
  } catch (err) {
    failures.push(err instanceof Error ? err.message : String(err));
    const output = getOutput().trim();
    if (output) console.error(output);
  } finally {
    if (pulseSpy) await new Promise(resolve => pulseSpy.close(resolve));
    // Kill the whole process group: child.kill() would stop npm but orphan vite, whose open
    // stdio pipe keeps a CI step alive indefinitely (the 2026-08-31 Validate hang).
    try {
      process.kill(-child.pid, "SIGTERM");
    } catch {
      child.kill("SIGTERM");
    }
    await new Promise((r) => setTimeout(r, 1500));
    try {
      process.kill(-child.pid, "SIGKILL");
    } catch {
      /* already gone */
    }
  }

  if (failures.length > 0) {
    console.error("\nsmoke: FAILED");
    for (const f of failures) console.error(`  - ${f}`);
    process.exit(1);
  }
  console.log("\nsmoke: ok — public routes work and private review surfaces reject anonymous access");
}

main();
