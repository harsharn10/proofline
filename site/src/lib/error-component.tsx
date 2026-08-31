import type { ErrorComponentProps } from "@tanstack/react-router";

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="wrap" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <p className="eyebrow">Something went wrong</p>
      <h1 style={{ fontSize: 24, fontWeight: 750, letterSpacing: "-0.015em" }}>
        This page hit an error.
      </h1>
      <p className="honest" style={{ marginTop: 12, maxWidth: "60ch", overflowWrap: "break-word" }}>
        {error.message || "An unexpected error occurred. Try reloading the page."}
      </p>
    </main>
  );
}
