import assert from "node:assert/strict";
import { test } from "node:test";
import { registerHooks } from "node:module";
import { createHash } from "node:crypto";
import { createReviewReader } from "../site/src/data/review-snapshot.ts";

const sha = n => n.toString(16).padStart(40, "0");
const api = "https://api.github.test/repos/owner/repo";
function fixture(count = 182, options = {}) {
  let revision = sha(9000), active = 0, peak = 0;
  const calls = [];
  let files = Array.from({ length: count }, (_, i) => ({
    name: `${i}.yaml`, path: `content/changelog/${i}.yaml`, type: "file", sha: sha(i + 1),
  }));
  const request = async url => {
    calls.push(url); active++; peak = Math.max(peak, active);
    try {
      await new Promise(resolve => setTimeout(resolve, 1));
      if (url.includes("/commits/")) return { sha: revision };
      const parsed = new URL(url);
      const path = parsed.pathname.split("/contents/")[1];
      assert.match(parsed.searchParams.get("ref"), /^[a-f0-9]{40}$/);
      if (path === "content/changelog") return files.map(file => ({ ...file }));
      if (options.fail?.(path)) throw new Error("fixture unavailable");
      const file = files.find(file => file.path === path);
      const text = file ? `- title: ${file.sha}\n` : "{}";
      return { sha: file?.sha ?? sha(8000), encoding: "base64", content: Buffer.from(text).toString("base64") };
    } finally { active--; }
  };
  return {
    reader: createReviewReader(request, options), calls,
    get peak() { return peak; }, get files() { return files; },
    set files(value) { files = value; },
    advance() { revision = sha(9001); },
    load(includeSent = true) { return this.reader.load(api, "main", "fixture-token", includeSent); },
  };
}

test("182-file cold/warm/changed snapshots: 186 / 4 / 5 API reads", async () => {
  const f = fixture();
  const cold = await f.load();
  assert.equal(cold.changelog.length, 182);
  assert.equal(f.calls.length, 186);
  assert.ok(f.peak <= 4);
  f.calls.length = 0;
  assert.deepEqual(await f.load(), cold);
  assert.equal(f.calls.length, 4);
  f.calls.length = 0;
  f.files[0].sha = sha(7000); f.advance();
  const changed = await f.load();
  assert.equal(f.calls.length, 5);
  assert.notEqual(changed.changelog[0], cold.changelog[0]);
  assert.equal(changed.changelog[1], cold.changelog[1]);
  assert.equal(changed.revision, sha(9001));
});

test("overlapping requests share a four-request ceiling", async () => {
  const f = fixture(20);
  await Promise.all([f.load(), f.load(), f.load()]);
  assert.ok(f.peak <= 4, `peak=${f.peak}`);
});

test("all decision inputs use the resolved commit, never a moving branch", async () => {
  const f = fixture(2);
  await f.load(false);
  assert.equal(f.calls.length, 5); // commit, directory, ledger, two bodies; no sent state
  for (const url of f.calls.filter(url => url.includes("/contents/")))
    assert.equal(new URL(url).searchParams.get("ref"), sha(9000));
  assert.ok(!f.calls.some(url => url.includes("telegram-state")));
});

test("deleted files and reordered directory rows never return stale membership", async () => {
  const f = fixture(3);
  const cold = await f.load();
  f.files = [f.files[2], f.files[0]]; f.advance(); f.calls.length = 0;
  const next = await f.load();
  assert.deepEqual(next.changelog, [cold.changelog[2], cold.changelog[0]]);
  assert.equal(f.calls.length, 4);
});

test("read failure rejects the snapshot; recovery fetches failed bodies again", async () => {
  let fail = true;
  const f = fixture(4, { fail: path => fail && path === "content/changelog/0.yaml" });
  await assert.rejects(f.load(), /fixture unavailable/);
  fail = false;
  const recovered = await f.load();
  assert.equal(recovered.changelog.length, 4);
  assert.equal(f.calls.filter(url => url.includes("/0.yaml?")).length, 2);
});

test("entry and byte bounds evict bodies without changing results", async () => {
  for (const limits of [{ maxEntries: 1 }, { maxBytes: 1 }, { maxEntries: 0 }]) {
    const f = fixture(4, limits);
    const cold = await f.load(); f.calls.length = 0;
    assert.deepEqual(await f.load(), cold);
    assert.ok(f.calls.length > 4, "bounded cache must refetch evicted bodies");
  }
});

test("malformed revision, truncated listing and blob mismatch fail closed", async () => {
  await assert.rejects(createReviewReader(async () => ({ sha: "main" })).load(api, "main", "t"), /revision/);
  const f = fixture(1000);
  await assert.rejects(f.load(), /complete, bounded/);
  const reader = createReviewReader(async url => {
    if (url.includes("/commits/")) return { sha: sha(1) };
    if (url.includes("/content/changelog?")) return [{ name: "a.yaml", path: "content/changelog/a.yaml", type: "file", sha: sha(2) }];
    return { sha: sha(3), content: "W10=", encoding: "base64" };
  });
  await assert.rejects(reader.load(api, "main", "t"), /revision mismatch/);
});

test("cache keys isolate repositories even for matching file paths and hashes", async () => {
  const f = fixture(1);
  await f.load(); f.calls.length = 0;
  await f.reader.load("https://api.github.test/repos/owner/other", "main", "other-token");
  assert.equal(f.calls.length, 5);
});

test("actual review handlers retain principal, fingerprint and ledger write-conflict gates", async () => {
  const dataUrl = source => `data:text/javascript,${encodeURIComponent(source)}`;
  const calls = [];
  const publication = { event: "research-update", delivery: "same-day", headline: "Update", summary: "Evidence" };
  const entry = { date: "2026-09-09", slug: "fixture", type: "finding", title: "Update", channel: publication };
  const encode = (value, id) => ({ sha: sha(id), encoding: "base64", content: Buffer.from(JSON.stringify(value)).toString("base64") });
  let rejectWrite = false;
  globalThis.__reviewRequest = async (url, token, init) => {
    calls.push({ url, token, init });
    assert.equal(token, "fixture-token");
    if (init?.method === "PUT") {
      if (rejectWrite) throw new Error("409 conflict");
      return { commit: { sha: sha(9002) } };
    }
    if (url.includes("/commits/")) return { sha: sha(9000) };
    if (url.includes("/content/changelog?")) return [{ name: "fixture.yaml", path: "content/changelog/fixture.yaml", type: "file", sha: sha(1) }];
    if (url.includes("/content/changelog/")) return encode([entry], 1);
    if (url.includes("telegram-review")) return encode({ version: 2, channel_enabled: false, decisions: {} }, 2);
    if (url.includes("telegram-state")) return encode({ sent_keys: [] }, 3);
    throw new Error(`Unexpected URL ${url}`);
  };
  const hooks = registerHooks({
    resolve(specifier, context, next) {
      const mocks = {
        "@tanstack/react-start": "export function createServerFn(){const chain={middleware(){return chain},validator(){return chain},handler(fn){return fn}};return chain}",
        "virtual:proofline-content": 'export default {derived:"{}",census:"[]"}',
        "./review-auth": 'export const REVIEW_BRANCH="main",REVIEW_REPOSITORY="owner/repo",reviewFunctionProtection={};export const githubJson=(...args)=>globalThis.__reviewRequest(...args);',
      };
      if (Object.hasOwn(mocks, specifier)) return { url: dataUrl(mocks[specifier]), shortCircuit: true };
      if (specifier === "./review-snapshot") return { url: new URL("../site/src/data/review-snapshot.ts", import.meta.url).href, shortCircuit: true };
      return next(specifier, context);
    },
  });
  try {
    const { getReviewQueue, moderateTelegram } = await import("../site/src/data/review-server.ts");
    await assert.rejects(getReviewQueue({ context: {} }), /authentication/);
    assert.equal(calls.length, 0);
    const context = { reviewPrincipal: { login: "owner", githubToken: "fixture-token" } };
    const queue = await getReviewQueue({ context });
    assert.equal(queue.channelEnabled, false);
    const key = queue.items[0].key;
    const data = { action: "hold", items: [{ key, copy: publication }] };
    await moderateTelegram({ context, data });
    const write = calls.find(call => call.init?.method === "PUT");
    const body = JSON.parse(write.init.body);
    assert.equal(body.sha, sha(2));
    assert.equal(body.branch, "main");
    const ledger = JSON.parse(Buffer.from(body.content, "base64").toString());
    assert.equal(ledger.channel_enabled, false);
    assert.equal(ledger.decisions[key].status, "held");
    assert.equal(ledger.decisions[key].source_fingerprint, createHash("sha256").update(JSON.stringify(publication)).digest("hex"));
    assert.equal(ledger.decisions[key].copy_fingerprint, ledger.decisions[key].source_fingerprint);
    rejectWrite = true;
    await assert.rejects(moderateTelegram({ context, data }), /409 conflict/);
    await assert.rejects(moderateTelegram({ context, data: { ...data, items: [{ key: "missing", copy: publication }] } }), /no longer current/);
  } finally { hooks.deregister(); delete globalThis.__reviewRequest; }
});
