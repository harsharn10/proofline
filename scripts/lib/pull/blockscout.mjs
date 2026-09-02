// Blockscout API v2 reads: verified-source flag, contract name, creation block and timestamp, and
// the token holder count. The instance sits behind Cloudflare for plain HTTP clients, so every
// request carries a browser User-Agent; a challenge page still comes back as an error the caller
// records under step "blockscout" and continues past. See the header of scripts/pull.mjs.

import { requestJson, BROWSER_UA } from "./http.mjs";

export const BLOCKSCOUT_BASE = "https://robinhoodchain.blockscout.com";

const HEADERS = { "User-Agent": BROWSER_UA, Accept: "application/json" };

/** Blockscout returns counts as strings; anything unparseable becomes null rather than NaN. */
export function toInt(value) {
  if (value === null || value === undefined) return null;
  const n = typeof value === "number" ? value : Number(String(value).trim());
  return Number.isInteger(n) && n >= 0 ? n : null;
}

/** Normalises Blockscout's microsecond timestamps to a plain ISO-8601 instant. */
export function toIsoOrNull(value) {
  if (!value) return null;
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : d.toISOString();
}

/** Maps an /api/v2/addresses/<addr> body onto the pulled-address fields it owns. */
export function parseAddressResponse(body) {
  if (!body || typeof body !== "object") {
    return { is_contract: null, source_verified: null, contract_name: null, creation_tx: null, is_token: false };
  }
  return {
    is_contract: typeof body.is_contract === "boolean" ? body.is_contract : null,
    source_verified: typeof body.is_verified === "boolean" ? body.is_verified : null,
    contract_name: typeof body.name === "string" && body.name.length > 0 ? body.name : null,
    creation_tx: body.creation_transaction_hash ?? body.creation_tx_hash ?? null,
    is_token: body.token !== null && body.token !== undefined,
  };
}

/** Maps an /api/v2/tokens/<addr> body to a holder count. Non-token addresses 404 and give null. */
export function parseTokenResponse(body) {
  if (!body || typeof body !== "object") return null;
  return toInt(body.holders_count ?? body.holders);
}

/** Maps an /api/v2/transactions/<hash> body to the creation block and its timestamp. */
export function parseTransactionResponse(body) {
  if (!body || typeof body !== "object") return { created_block: null, created_at: null };
  return {
    created_block: toInt(body.block_number ?? body.block),
    created_at: toIsoOrNull(body.timestamp),
  };
}

export function createBlockscoutClient({ base = BLOCKSCOUT_BASE, deps = {} } = {}) {
  const get = (path) => requestJson(`${base}${path}`, { headers: HEADERS }, deps);
  return {
    address: (addr) => get(`/api/v2/addresses/${addr}`),
    token: (addr) => get(`/api/v2/tokens/${addr}`),
    tokenHolders: (addr) => get(`/api/v2/tokens/${addr}/holders`),
    smartContract: (addr) => get(`/api/v2/smart-contracts/${addr}`),
    transaction: (hash) => get(`/api/v2/transactions/${hash}`),
  };
}

/**
 * Reads every Blockscout fact for one address. Never throws. A 403 or HTML challenge lands in
 * `errors` with step "blockscout" and the caller keeps the RPC-only result.
 */
export async function readAddress(client, address, { isToken = false } = {}) {
  const errors = [];
  const record = (message) => errors.push({ step: "blockscout", message });

  let core = { is_contract: null, source_verified: null, contract_name: null, creation_tx: null, is_token: false };
  try {
    core = parseAddressResponse(await client.address(address));
  } catch (e) {
    record(`addresses/${address}: ${e.message}`);
  }

  let holders = null;
  if (isToken || core.is_token) {
    try {
      holders = parseTokenResponse(await client.token(address));
    } catch (e) {
      // A non-token address answers 404; that is expected, not a failure worth recording.
      if (!/HTTP 404/.test(e.message)) record(`tokens/${address}: ${e.message}`);
    }
  }

  let created = { created_block: null, created_at: null };
  if (core.creation_tx) {
    try {
      created = parseTransactionResponse(await client.transaction(core.creation_tx));
    } catch (e) {
      record(`transactions/${core.creation_tx}: ${e.message}`);
    }
  }

  return {
    is_contract: core.is_contract,
    source_verified: core.source_verified,
    contract_name: core.contract_name,
    created_block: created.created_block,
    created_at: created.created_at,
    holders,
    errors,
  };
}
