import { createMiddleware, createStart } from "@tanstack/react-start";
import {
  applyReviewSecurityHeaders,
  authenticateReviewRequest,
  reviewAuthChallenge,
} from "@/data/review-auth";

const reviewProtection = createMiddleware().server(
  async ({ next, request, pathname }) => {
    const protectsPage = pathname === "/review" || pathname.startsWith("/review/");
    if (!protectsPage) return next();

    const reviewPrincipal = await authenticateReviewRequest(request);
    if (!reviewPrincipal) return reviewAuthChallenge();

    const result = await next({ context: { reviewPrincipal } });
    applyReviewSecurityHeaders(result.response.headers);
    return result;
  },
);

export const startInstance = createStart(() => ({
  requestMiddleware: [reviewProtection],
}));
