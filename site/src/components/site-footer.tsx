export function SiteFooter() {
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
        <a
          href="mailto:corrections@example.com"
          className="text-sm text-accent hover:underline"
        >
          Submit a correction
        </a>
      </div>
    </footer>
  );
}
