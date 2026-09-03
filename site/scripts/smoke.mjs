// Smoke test for the built site (final review recommendation 3, brief §Minors). Boots `vite
// preview` on :8081 against the last `npm run build` output, hits the routes that exercise
// every loader (directory, a full dossier, methodology, changelog, a dependency card), asserts
// each returns 200, and asserts the dossier HTML never leaks a raw/uncapped score field. Run
// this after `npm run build` — it does not build for you.
//   npm run build && npm run smoke

import { spawn } from "node:child_process";

const PORT = Number(process.env.SMOKE_PORT ?? 8081); // override when 8081 is taken by another worktree's server
const BASE = `http://localhost:${PORT}`;
const ROUTES = [
  "/",
  "/n/pons",
  "/n/pons?tab=evidence",
  "/n/pons?tab=feed",
  "/n/hoodfun",
  "/feed",
  "/methodology",
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

function startPreview() {
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
    env: { ...process.env, PORT: String(PORT) },
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
      const res = await fetch(`${BASE}/`);
      if (res.ok) return;
    } catch {
      // preview server not accepting connections yet
    }
    await new Promise((r) => setTimeout(r, READY_POLL_MS));
  }
  throw new Error(`preview server did not respond on ${BASE} within ${READY_TIMEOUT_MS}ms`);
}

async function main() {
  const { child, getOutput } = startPreview();
  const failures = [];

  try {
    await waitForServer();

    for (const route of ROUTES) {
      const res = await fetch(BASE + route);
      const ok = res.status === 200;
      console.log(`  ${ok ? "ok  " : "FAIL"} ${route} -> ${res.status}`);
      if (!ok) failures.push(`${route} returned ${res.status}, expected 200`);
      const csp = res.headers.get("content-security-policy") ?? "";
      if (!csp.includes("default-src 'self'") || !csp.includes("object-src 'none'") || !csp.includes("frame-ancestors 'none'"))
        failures.push(`${route} is missing the required Content-Security-Policy`);
    }

    const publicHtml = await fetch(`${BASE}/`).then((response) => response.text());
    const legalChecks = [
      ["/", publicHtml, ["Important.", "Read the full disclaimer.", 'href="/disclaimer"']],
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
