// JSON-RPC reads against the Robinhood Chain node. Decoders are pure so scripts/test-pull.mjs can
// exercise them without a network; the client takes its transport by argument for the same reason.

import { requestJson } from "./http.mjs";

export const RPC_URL = "https://rpc.mainnet.chain.robinhood.com";

/** EIP-1967: keccak256("eip1967.proxy.implementation") - 1, and the matching admin slot. */
export const EIP1967_IMPLEMENTATION_SLOT =
  "0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc";
export const EIP1967_ADMIN_SLOT =
  "0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103";

export const SELECTOR = {
  owner: "0x8da5cb5b", // owner()
  getThreshold: "0xe75235b8", // getThreshold()
  getOwners: "0xa0e67e2b", // getOwners()
};

export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

const strip = (hex) => (typeof hex === "string" && hex.startsWith("0x") ? hex.slice(2) : hex ?? "");

export const isZeroAddress = (addr) => typeof addr === "string" && addr.toLowerCase() === ZERO_ADDRESS;

/**
 * Decodes a single ABI-encoded address word. Returns null for empty returndata (a reverted or
 * missing `owner()`), for a short word, or for a word whose top 12 bytes are not zero padding.
 */
export function decodeAddress(data) {
  const raw = strip(data);
  if (raw.length < 64) return null;
  const word = raw.slice(0, 64);
  if (!/^[0-9a-fA-F]{64}$/.test(word)) return null;
  if (word.slice(0, 24) !== "0".repeat(24)) return null; // not a clean address word
  return `0x${word.slice(24).toLowerCase()}`;
}

/** Decodes a 32-byte storage word holding an address. A zero word means "slot not set". */
export function decodeStorageAddress(word) {
  const addr = decodeAddress(word);
  if (addr === null) return null;
  return isZeroAddress(addr) ? null : addr;
}

/** Decodes a uint256 return word to a Number. Null on empty or oversized values. */
export function decodeUint(data) {
  const raw = strip(data);
  if (raw.length < 64) return null;
  const word = raw.slice(0, 64);
  if (!/^[0-9a-fA-F]{64}$/.test(word)) return null;
  const value = BigInt(`0x${word}`);
  if (value > BigInt(Number.MAX_SAFE_INTEGER)) return null;
  return Number(value);
}

/** Decodes an ABI-encoded `address[]` (offset word, length word, then one word per entry). */
export function decodeAddressArray(data) {
  const raw = strip(data);
  if (raw.length < 128) return null; // needs at least offset + length
  const offset = Number(BigInt(`0x${raw.slice(0, 64)}`));
  const head = offset * 2;
  if (!Number.isFinite(head) || raw.length < head + 64) return null;
  const length = Number(BigInt(`0x${raw.slice(head, head + 64)}`));
  if (!Number.isFinite(length) || raw.length < head + 64 + length * 64) return null;
  const out = [];
  for (let i = 0; i < length; i++) {
    const word = raw.slice(head + 64 + i * 64, head + 128 + i * 64);
    const addr = decodeAddress(word);
    if (addr === null) return null;
    out.push(addr);
  }
  return out;
}

/** True when eth_getCode returned real bytecode rather than "0x" / "0x0". */
export function hasCode(code) {
  const raw = strip(code);
  return raw.length > 0 && /[1-9a-fA-F]/.test(raw);
}

/**
 * Classifies proxy storage: an implementation word that is set means EIP-1967, both words clear
 * means no proxy, and a failed read means unknown.
 */
export function classifyProxy({ implementation, admin, failed = false }) {
  if (failed) return { type: "unknown", implementation: implementation ?? null, admin: admin ?? null };
  if (implementation) return { type: "eip1967", implementation, admin: admin ?? null };
  return { type: "none", implementation: null, admin: admin ?? null };
}

/** Classifies an owner from the three probes. `safe` is non-null only when both Safe reads decoded. */
export function classifyOwner({ owner, ownerHasCode, threshold, signers }) {
  if (owner === null) return { owner: null, owner_type: "none", safe: null };
  if (isZeroAddress(owner)) return { owner, owner_type: "none", safe: null }; // renounced
  if (ownerHasCode === null || ownerHasCode === undefined) return { owner, owner_type: "unknown", safe: null };
  if (!ownerHasCode) return { owner, owner_type: "eoa", safe: null };
  if (threshold !== null && threshold !== undefined && Array.isArray(signers)) {
    return { owner, owner_type: "safe", safe: { threshold, signers } };
  }
  return { owner, owner_type: "contract", safe: null };
}

/** Minimal JSON-RPC client. `deps` is forwarded to requestJson (fetchImpl, sleepImpl, pace, ...). */
export function createRpcClient({ url = RPC_URL, deps = {} } = {}) {
  let id = 0;
  async function call(method, params) {
    const payload = { jsonrpc: "2.0", id: ++id, method, params };
    const body = await requestJson(
      url,
      { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload) },
      deps,
    );
    if (body?.error) throw new Error(`${method}: ${body.error.message ?? JSON.stringify(body.error)}`);
    return body?.result ?? null;
  }

  return {
    call,
    blockNumber: () => call("eth_blockNumber", []),
    transactionCount: (address) => call("eth_getTransactionCount", [address, "latest"]),
    getCode: (address) => call("eth_getCode", [address, "latest"]),
    getStorageAt: (address, slot) => call("eth_getStorageAt", [address, slot, "latest"]),
    ethCall: (to, data) => call("eth_call", [{ to, data }, "latest"]),
  };
}

/**
 * Reads every RPC fact for one address. Never throws: each failed probe lands in `errors` and the
 * corresponding field stays null, so one dead contract cannot sink the run.
 */
export async function readAddress(client, address) {
  const errors = [];
  const record = (message) => errors.push({ step: "rpc", message });

  let isContract = null;
  try {
    isContract = hasCode(await client.getCode(address));
  } catch (e) {
    record(`eth_getCode ${address}: ${e.message}`);
  }

  let implementation = null;
  let admin = null;
  let slotsFailed = false;
  try {
    implementation = decodeStorageAddress(await client.getStorageAt(address, EIP1967_IMPLEMENTATION_SLOT));
  } catch (e) {
    slotsFailed = true;
    record(`eth_getStorageAt implementation ${address}: ${e.message}`);
  }
  try {
    admin = decodeStorageAddress(await client.getStorageAt(address, EIP1967_ADMIN_SLOT));
  } catch (e) {
    slotsFailed = true;
    record(`eth_getStorageAt admin ${address}: ${e.message}`);
  }

  let owner = null;
  if (isContract) {
    try {
      owner = decodeAddress(await client.ethCall(address, SELECTOR.owner));
    } catch {
      owner = null; // a revert means the contract has no owner(); that is a fact, not an error
    }
  }

  let ownerHasCode = null;
  let threshold = null;
  let signers = null;
  if (owner && !isZeroAddress(owner)) {
    try {
      ownerHasCode = hasCode(await client.getCode(owner));
    } catch (e) {
      record(`eth_getCode owner ${owner}: ${e.message}`);
    }
    if (ownerHasCode) {
      try {
        threshold = decodeUint(await client.ethCall(owner, SELECTOR.getThreshold));
      } catch {
        threshold = null; // not a Safe
      }
      try {
        signers = decodeAddressArray(await client.ethCall(owner, SELECTOR.getOwners));
      } catch {
        signers = null;
      }
    }
  }

  return {
    is_contract: isContract,
    proxy: classifyProxy({ implementation, admin, failed: slotsFailed }),
    ...classifyOwner({ owner, ownerHasCode, threshold, signers }),
    errors,
  };
}
