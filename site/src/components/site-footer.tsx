import { useLoaderData } from "@tanstack/react-router";
import { correctionsLink } from "@/data/types";

// Site-wide corrections config comes from the root route's own loader — see __root.tsx
// (`loader: () => getSiteMeta()`) — the same pattern SiteHeader uses, rather than this
// component fetching the content bundle itself. correctionsLink() (data/types.ts) is the
// same helper the dossier page's own "Corrections" section uses, so the rule is identical
// everywhere it appears: an "@" destination is a mailto: link, an "http" destination is a
// direct link, and the "TODO" sentinel renders as plain pending text with no link.
export function SiteFooter() {
  const meta = useLoaderData({ from: "__root__" });
  const correction = correctionsLink(meta.corrections.destination);

  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 sm:px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">
          Research the launch. Ignore the hype.
        </p>
        <p className="max-w-prose text-sm leading-relaxed text-muted">
          Proofline publishes research, not advice. Profiles are not audits, safety ratings, or
          recommendations.
        </p>
        {correction.href ? (
          <a href={correction.href} className="text-sm text-accent hover:underline">
            {correction.label}
          </a>
        ) : (
          <p className="text-sm text-muted">{correction.label}</p>
        )}
      </div>
    </footer>
  );
}
