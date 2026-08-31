// Smoke test for the built site (final review recommendation 3, brief §Minors). Boots `vite
// preview` on :8081 against the last `npm run build` output, hits the routes that exercise
// every loader (directory, a full dossier, methodology, changelog, a dependency card), asserts
// each returns 200, and asserts the dossier HTML never leaks a raw/uncapped score field. Run
// this after `npm run build` — it does not build for you.
//   npm run build && npm run smoke

import { spawn } from "node:child_process";

const PORT = 8081;
const BASE = `http://localhost:${PORT}`;
const ROUTES = ["/", "/n/pons", "/methodology", "/changelog", "/d/stock-tokens"];
const READY_TIMEOUT_MS = 30_000;
const READY_POLL_MS = 300;
const BANNED_IN_DOSSIER = ["uncapped", "securityRaw"];

function startPreview() {
  const child = spawn("npm", ["run", "preview", "--", "--port", String(PORT), "--strictPort"], {
    stdio: ["ignore", "pipe", "pipe"],
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
    }

    const dossierRes = await fetch(`${BASE}/n/pons`);
    const dossierHtml = await dossierRes.text();
    for (const banned of BANNED_IN_DOSSIER) {
      if (dossierHtml.includes(banned)) {
        failures.push(`/n/pons HTML contains "${banned}" — a raw/uncapped score field leaked to the page`);
      } else {
        console.log(`  ok   /n/pons has no "${banned}" in the HTML`);
      }
    }
  } catch (err) {
    failures.push(err instanceof Error ? err.message : String(err));
    const output = getOutput().trim();
    if (output) console.error(output);
  } finally {
    child.kill();
  }

  if (failures.length > 0) {
    console.error("\nsmoke: FAILED");
    for (const f of failures) console.error(`  - ${f}`);
    process.exit(1);
  }
  console.log("\nsmoke: ok — every route is 200, no uncapped leakage on /n/pons");
}

main();
