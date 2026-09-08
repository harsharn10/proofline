// Shared transport for the pull modules: one timeout, one retry policy, one per-host pacer.
// Every function takes its `fetch` and `sleep` by argument so the unit tests can stub both.

export const DEFAULT_TIMEOUT_MS = 10_000;
export const DEFAULT_ATTEMPTS = 3;

/** Blockscout serves a Cloudflare challenge to plain HTTP clients; a browser UA gets JSON. */
export const BROWSER_UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36";

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** Retryable: 429 and any 5xx. Everything else is a final answer, good or bad. */
export function isRetryableStatus(status) {
  return status === 429 || (status >= 500 && status <= 599);
}

/** Exponential backoff with a fixed base: attempt 1 -> 500ms, 2 -> 1000ms, 3 -> 2000ms. */
export function backoffMs(attempt, base = 500) {
  return base * 2 ** (attempt - 1);
}

/** A short random pause keeps challenge retries from making every scheduled worker knock together. */
export function challengeDelayMs(random = Math.random, min = 500, max = 1500) {
  return Math.round(min + Math.max(0, Math.min(1, random())) * (max - min));
}

/**
 * The fingerprints Cloudflare's managed challenge leaves in the page it serves: the interstitial
 * title, the `cf-chl-*` element ids, the /cdn-cgi/challenge-platform script, and the `_cf_chl_opt`
 * options object the loader is configured with. A gateway's own error page carries none of them.
 */
export const CHALLENGE_MARKERS = [
  /<title[^>]*>\s*Just a moment(?:\.{3}|…)?\s*<\/title>/i,
  /\bJust a moment(?:\.{3}|…)?\b/i,
  /cf-chl/i,
  /challenge-platform/i,
  /_cf_chl_opt/i,
];

/**
 * Cloudflare's managed challenge is HTML even when the requested endpoint is JSON — but so is a
 * 502 from a gateway in front of it. An HTML body alone is therefore not enough: a challenge has to
 * carry one of Cloudflare's own markers. Everything else stays an ordinary transport error, retried
 * by the normal 5xx policy and recorded as the error it is, so a gateway blip is never reported as
 * a bot wall or counted toward the >50% challenge gate.
 */
export function isBotChallenge(body, contentType = "") {
  const value = String(body ?? "");
  if (!looksLikeHtml(value, contentType)) return false;
  return CHALLENGE_MARKERS.some((marker) => marker.test(value));
}

/**
 * Serialises calls to one host so no host sees more than 1/`minIntervalMs` requests per second.
 * 250ms is the 4 req/s ceiling the assignment sets.
 */
export function createPacer(minIntervalMs = 250, sleepImpl = sleep) {
  const last = new Map();
  const queue = new Map();
  return function pace(host) {
    const prev = queue.get(host) ?? Promise.resolve();
    const next = prev.then(async () => {
      const since = Date.now() - (last.get(host) ?? 0);
      if (since < minIntervalMs) await sleepImpl(minIntervalMs - since);
      last.set(host, Date.now());
    });
    queue.set(host, next.catch(() => {}));
    return next;
  };
}

/**
 * One HTTP call with a timeout, `attempts` tries and backoff on 429/5xx.
 * Resolves to { ok, status, body, contentType } — it throws only when every attempt failed to
 * produce a response at all (network error or timeout), so callers can record and continue.
 */
export async function requestWithRetry(url, options = {}, deps = {}) {
  const {
    fetchImpl = globalThis.fetch,
    sleepImpl = sleep,
    attempts = DEFAULT_ATTEMPTS,
    timeoutMs = DEFAULT_TIMEOUT_MS,
    pace = null,
    backoff = backoffMs,
    defaultHeaders = null,
    beforeRequest = null,
    onRequest = null,
    onChallenge = null,
    challengeRetries = 1,
    randomImpl = Math.random,
  } = deps;

  let lastError = null;
  let attempt = 1;
  let challengeRetriesUsed = 0;
  while (attempt <= attempts) {
    // Budget reservation happens before pacing and before the physical request. A budget error is
    // deliberately not retried; the caller records a deferred read and continues keyless work.
    beforeRequest?.(url);
    if (pace) await pace(hostOf(url));
    onRequest?.(url);
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const requestOptions = {
        ...options,
        headers: { ...(defaultHeaders ?? {}), ...(options.headers ?? {}) },
        signal: controller.signal,
      };
      const res = await fetchImpl(url, requestOptions);
      const body = await res.text();
      const challenge = isBotChallenge(body, res.headers?.get?.("content-type") ?? "");
      if (challenge) {
        onChallenge?.(url);
        if (challengeRetriesUsed < challengeRetries) {
          challengeRetriesUsed++;
          await sleepImpl(challengeDelayMs(randomImpl));
          continue;
        }
        return {
          ok: false,
          status: res.status,
          body,
          contentType: res.headers?.get?.("content-type") ?? "",
          challenge: true,
        };
      }
      if (isRetryableStatus(res.status) && attempt < attempts) {
        lastError = new Error(`HTTP ${res.status}`);
        await sleepImpl(backoff(attempt));
        attempt++;
        continue;
      }
      return {
        ok: res.ok,
        status: res.status,
        body,
        contentType: res.headers?.get?.("content-type") ?? "",
        challenge: false,
      };
    } catch (e) {
      lastError = e.name === "AbortError" ? new Error(`timeout after ${timeoutMs}ms`) : e;
      if (attempt < attempts) {
        await sleepImpl(backoff(attempt));
        attempt++;
      } else {
        break;
      }
    } finally {
      clearTimeout(timer);
    }
  }
  throw new Error(`${lastError?.message ?? "request failed"} after ${attempts} attempts`);
}

/** JSON wrapper. A non-JSON body (Cloudflare's challenge page is HTML) is an error, not a parse crash. */
export async function requestJson(url, options, deps) {
  const res = await requestWithRetry(url, options, deps);
  if (res.challenge) throw new Error("explorer served a bot challenge");
  if (looksLikeHtml(res.body, res.contentType)) {
    throw new Error(`HTTP ${res.status} returned HTML, not JSON (bot challenge or error page)`);
  }
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.body.slice(0, 160)}`);
  try {
    return JSON.parse(res.body);
  } catch {
    throw new Error(`HTTP ${res.status} body is not JSON: ${res.body.slice(0, 160)}`);
  }
}

export function looksLikeHtml(body, contentType = "") {
  if (/text\/html/i.test(contentType)) return true;
  return /^\s*(<!doctype html|<html)/i.test(body ?? "");
}

export function hostOf(url) {
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
}

/** Runs `worker` over `items` with at most `limit` in flight. Never rejects: workers own their errors. */
export async function mapWithConcurrency(items, limit, worker) {
  const results = new Array(items.length);
  let cursor = 0;
  const runners = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (cursor < items.length) {
      const i = cursor++;
      results[i] = await worker(items[i], i);
    }
  });
  await Promise.all(runners);
  return results;
}
