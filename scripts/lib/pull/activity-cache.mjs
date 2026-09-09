// Reusable finalized inbound history, keyed by chain/address rather than project identity.
// This is a disposable optimization, never an alternative source of published truth.
import { readFile, stat, mkdir, writeFile, rename, rm } from "node:fs/promises";
import { dirname } from "node:path";
import { randomUUID } from "node:crypto";

export const CACHE_PATH = "content/pulled/activity-cache/robinhood-chain.json";
export const CACHE_LIMITS = Object.freeze({ bytes: 1_000_000, addresses: 250, perAddress: 200,
  transactions: 5000, age: 26 * 3600_000, checkpoints: 8 });
const hash = value => typeof value === "string" && /^0x[0-9a-f]{64}$/.test(value);
const addressKey = value => /^0x[0-9a-fA-F]{40}$/.test(value ?? "") ? value.toLowerCase() : null;
const integer = value => Number.isSafeInteger(value) && value >= 0;
const fields = (value, keys) => value && Object.keys(value).every(key => keys.includes(key));

export function parseCheckpoint(block, now) {
  if (!block || !/^0x[0-9a-f]+$/i.test(block.number ?? "") || !/^0x[0-9a-f]+$/i.test(block.timestamp ?? "")) return null;
  const number = Number(block.number), timestamp = Number(block.timestamp) * 1000;
  const blockHash = typeof block.hash === "string" ? block.hash.toLowerCase() : null;
  return integer(number) && integer(timestamp) && timestamp <= now && hash(blockHash)
    ? { number, timestamp, hash: blockHash } : null;
}

export function validCacheRecord(record, now) {
  if (!fields(record, ["address", "observed_at", "covered_since", "checkpoint", "items"]) ||
      typeof record.address !== "string" || addressKey(record.address) !== record.address || !integer(record.observed_at) ||
      now < record.observed_at || now - record.observed_at > CACHE_LIMITS.age ||
      !integer(record.covered_since) || record.covered_since > record.observed_at ||
      !fields(record.checkpoint, ["number", "timestamp", "hash"]) ||
      !integer(record.checkpoint.number) || !integer(record.checkpoint.timestamp) ||
      record.checkpoint.timestamp > record.observed_at || !hash(record.checkpoint.hash) ||
      !Array.isArray(record.items) || !record.items.length || record.items.length > CACHE_LIMITS.perAddress) return false;
  const seen = new Set();
  let priorTime = Infinity, priorBlock = Infinity;
  for (const item of record.items) {
    const at = Date.parse(item?.timestamp);
    if (!fields(item, ["hash", "timestamp", "block_number", "method"]) || !hash(item.hash) || seen.has(item.hash) ||
        !integer(item.block_number) || item.block_number > record.checkpoint.number || item.block_number > priorBlock ||
        typeof item.timestamp !== "string" || !Number.isFinite(at) || at < record.covered_since || at > record.checkpoint.timestamp || at > priorTime ||
        !(item.method === null || typeof item.method === "string" && item.method.length <= 256)) return false;
    seen.add(item.hash); priorTime = at; priorBlock = item.block_number;
  }
  return true;
}

export function boundedCache(records, chain, now) {
  let total = 0;
  const entries = [...records].filter(record => validCacheRecord(record, now))
    .sort((a,b) => b.observed_at - a.observed_at || a.address.localeCompare(b.address))
    .filter(record => { if (total + record.items.length > CACHE_LIMITS.transactions) return false;
      total += record.items.length; return true; }).slice(0, CACHE_LIMITS.addresses);
  let text;
  do { text = `${JSON.stringify({ version: 1, chain, entries })}\n`;
    if (Buffer.byteLength(text) <= CACHE_LIMITS.bytes) return text;
    entries.pop();
  } while (entries.length);
  return `${JSON.stringify({ version: 1, chain, entries: [] })}\n`;
}

export async function openActivityCache({ rpc, chain = "robinhood-chain", path = CACHE_PATH,
  now = Date.now(), disabled = false } = {}) {
  const records = new Map(), checks = new Map();
  const stats = { enabled: false, eligible: 0, reused: 0, reused_transactions: 0,
    saved: 0, checkpoint_checks: 0, rejected: 0, reason: disabled ? "explicit bypass" : null };
  let original = null, checkpoint = null;
  if (!disabled) {
    try {
      if ((await stat(path)).size > CACHE_LIMITS.bytes) throw Error("cache exceeds size bound");
      original = await readFile(path, "utf8");
      if (Buffer.byteLength(original) > CACHE_LIMITS.bytes) throw Error("cache exceeds size bound");
      const stored = JSON.parse(original);
      if (stored.version !== 1 || stored.chain !== chain || !Array.isArray(stored.entries) ||
          stored.entries.length > CACHE_LIMITS.addresses) throw Error("invalid cache envelope");
      let retained = 0;
      for (const record of stored.entries) {
        if (validCacheRecord(record, now) && retained + record.items.length <= CACHE_LIMITS.transactions) {
          records.set(record.address, record); retained += record.items.length;
        }
        else stats.rejected++;
      }
    } catch (error) { if (error.code !== "ENOENT") stats.rejected++; }
    try { checkpoint = parseCheckpoint(await rpc.call("eth_getBlockByNumber", ["finalized", false]), now); }
    catch { /* Unsupported finality disables the optimization, not collection. */ }
    stats.enabled = Boolean(checkpoint);
    if (!checkpoint) stats.reason = "finalized checkpoint unavailable";
  }
  return {
    async get(address, since) {
      const record = records.get(addressKey(address));
      if (!checkpoint || !record || since < record.covered_since ||
          Date.parse(record.items[0].timestamp) < since || record.checkpoint.number > checkpoint.number) return null;
      const key = `${record.checkpoint.number}:${record.checkpoint.hash}`;
      if (!checks.has(key)) {
        if (checks.size >= CACHE_LIMITS.checkpoints) return null;
        stats.checkpoint_checks++;
        checks.set(key, (async () => {
          try {
            const block = parseCheckpoint(await rpc.call("eth_getBlockByNumber", [`0x${record.checkpoint.number.toString(16)}`, false]), now);
            return block?.hash === record.checkpoint.hash && block.number === record.checkpoint.number &&
              block.timestamp === record.checkpoint.timestamp;
          } catch { return false; }
        })());
      }
      if (!await checks.get(key)) { stats.rejected++; records.delete(record.address); return null; }
      stats.eligible++;
      return record;
    },
    record(address, recent, since) {
      if (!checkpoint) return;
      if (recent.cache_hit) { stats.reused++; stats.reused_transactions += recent.reused; }
      // Incomplete walks cannot establish a reusable suffix. Unfinalized rows are always re-read.
      if (!recent.complete || recent.errors.length || recent.items.length > CACHE_LIMITS.perAddress ||
          recent.items.some(item => !integer(item.block_number) || !hash(item.hash))) return;
      const record = { address: addressKey(address), observed_at: now, covered_since: since, checkpoint,
        items: recent.items.filter(item => item.block_number <= checkpoint.number).map(item => ({
          hash: item.hash, timestamp: item.timestamp, block_number: item.block_number, method: item.method,
        })) };
      if (validCacheRecord(record, now)) { records.set(record.address, record); stats.saved++; }
    },
    snapshot: () => ({ ...stats, addresses: records.size }),
    async flush({ dry = false } = {}) {
      if (dry || !checkpoint) return;
      const text = boundedCache(records.values(), chain, now);
      if (text === original) return;
      await mkdir(dirname(path), { recursive: true });
      const temporary = `${path}.${randomUUID()}.tmp`;
      try { await writeFile(temporary, text); await rename(temporary, path); }
      finally { await rm(temporary, { force: true }); }
    },
  };
}
