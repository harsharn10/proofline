import { createHash } from "node:crypto";
import { createMiddleware } from "@tanstack/react-start";
import { getResponseHeaders } from "@tanstack/react-start/server";

export const REVIEW_REPOSITORY = "harsharn10/proofline";
export const REVIEW_BRANCH = "main";
const REVIEW_OWNER = "harsharn10";
const CACHE_TTL_MS = 30_000;

export type ReviewPrincipal = {
  login: string;
  githubToken: string;
};

type CachedPrincipal = { login: string; expiresAt: number };
const successfulAuth = new Map<string, CachedPrincipal>();

export function githubHeaders(token: string): Record<string, string> {
  return {
    accept: "application/vnd.github+json",
    authorization: `Bearer ${token}`,
    "x-github-api-version": "2022-11-28",
    "user-agent": "proofline-review-controller",
  };
}

export async function githubJson<T>(url: string, token: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    ...init,
    headers: { ...githubHeaders(token), ...(init?.headers ?? {}) },
  });
  if (!response.ok) {
    const detail = (await response.text()).slice(0, 300);
    throw new Error(`GitHub rejected the review request (${response.status}): ${detail}`);
  }
  return (await response.json()) as T;
}

function basicCredential(request: Request): string | null {
  const header = request.headers.get("authorization");
  if (!header?.startsWith("Basic ")) return null;
  try {
    const decoded = Buffer.from(header.slice(6), "base64").toString("utf8");
    const separator = decoded.indexOf(":");
    if (separator < 0 || decoded.slice(0, separator) !== "github") return null;
    const token = decoded.slice(separator + 1).trim();
    if (
      token.length < 20 ||
      token.length > 500 ||
      !/^(?:gh[pousr]_|github_pat_)[A-Za-z0-9_]+$/.test(token)
    ) {
      return null;
    }
    return token;
  } catch {
    return null;
  }
}

function credentialHash(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

export async function authenticateReviewRequest(request: Request): Promise<ReviewPrincipal | null> {
  const githubToken = basicCredential(request);
  if (!githubToken) return null;

  const hash = credentialHash(githubToken);
  const cached = successfulAuth.get(hash);
  if (cached && cached.expiresAt > Date.now()) {
    return { login: cached.login, githubToken };
  }
  successfulAuth.delete(hash);

  try {
    const api = `https://api.github.com/repos/${REVIEW_REPOSITORY}`;
    const [user, repository] = await Promise.all([
      githubJson<{ login: string }>("https://api.github.com/user", githubToken),
      githubJson<{ full_name: string; permissions?: { push?: boolean } }>(api, githubToken),
    ]);
    if (
      user.login.toLowerCase() !== REVIEW_OWNER.toLowerCase() ||
      repository.full_name.toLowerCase() !== REVIEW_REPOSITORY.toLowerCase() ||
      repository.permissions?.push !== true
    ) {
      return null;
    }

    if (successfulAuth.size > 50) successfulAuth.clear();
    successfulAuth.set(hash, { login: user.login, expiresAt: Date.now() + CACHE_TTL_MS });
    return { login: user.login, githubToken };
  } catch {
    return null;
  }
}

export function reviewAuthChallenge(): Response {
  return new Response("Authentication required.", {
    status: 401,
    headers: {
      "cache-control": "private, no-store, max-age=0",
      "content-security-policy": "frame-ancestors 'none'",
      "content-type": "text/plain; charset=utf-8",
      "referrer-policy": "no-referrer",
      vary: "Authorization",
      "www-authenticate": 'Basic realm="Proofline Review", charset="UTF-8"',
      "x-content-type-options": "nosniff",
      "x-frame-options": "DENY",
      "x-robots-tag": "noindex, nofollow, noarchive",
    },
  });
}

function reviewOriginRejection(): Response {
  return new Response("Cross-origin moderation is forbidden.", {
    status: 403,
    headers: {
      "cache-control": "private, no-store, max-age=0",
      "content-security-policy": "frame-ancestors 'none'",
      "content-type": "text/plain; charset=utf-8",
      "referrer-policy": "no-referrer",
      vary: "Authorization, Origin",
      "x-content-type-options": "nosniff",
      "x-frame-options": "DENY",
      "x-robots-tag": "noindex, nofollow, noarchive",
    },
  });
}

function requestOrigins(request: Request): Set<string> {
  const origins = new Set([new URL(request.url).origin]);
  const forwardedProtocol = request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim();
  const protocol = forwardedProtocol === "http" || forwardedProtocol === "https"
    ? forwardedProtocol
    : new URL(request.url).protocol.slice(0, -1);
  const hosts = [
    request.headers.get("host"),
    request.headers.get("x-forwarded-host")?.split(",")[0]?.trim(),
  ];
  for (const host of hosts) {
    if (host) origins.add(`${protocol}://${host}`);
  }
  return origins;
}

export function applyReviewSecurityHeaders(headers: Headers): void {
  headers.set("cache-control", "private, no-store, max-age=0");
  headers.set("content-security-policy", "frame-ancestors 'none'");
  headers.set("referrer-policy", "no-referrer");
  headers.set("vary", "Authorization");
  headers.set("x-content-type-options", "nosniff");
  headers.set("x-frame-options", "DENY");
  headers.set("x-robots-tag", "noindex, nofollow, noarchive");
}

export const reviewFunctionProtection = createMiddleware().server(
  async ({ next, request }) => {
    if (request.method !== "GET") {
      const origin = request.headers.get("origin");
      if (!origin || !requestOrigins(request).has(origin)) return reviewOriginRejection();
    }

    const reviewPrincipal = await authenticateReviewRequest(request);
    if (!reviewPrincipal) return reviewAuthChallenge();

    applyReviewSecurityHeaders(getResponseHeaders() as unknown as Headers);
    return next({ context: { reviewPrincipal } });
  },
);
