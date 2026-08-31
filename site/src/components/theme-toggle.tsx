import { useEffect, useState } from "react";

const KEY = "proofline.theme";

// Eregion's dual-mode toggle, ported: dark is the default terminal, light the professional
// read. The saved choice is applied before first paint by the inline snippet in
// __root.tsx's head; this button only flips and persists it. localStorage failures
// (private mode) fall through silently — the flip still applies for the session.
export function ThemeToggle() {
  const [theme, setTheme] = useState<string | null>(null);
  useEffect(() => {
    setTheme(document.documentElement.getAttribute("data-theme") ?? "dark");
  }, []);
  const flip = () => {
    const next = (document.documentElement.getAttribute("data-theme") ?? "dark") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(KEY, next);
    } catch {
      /* private mode — theme flips for this page only */
    }
    setTheme(next);
  };
  return (
    <button type="button" className="themetoggle" onClick={flip} title="Toggle light / dark">
      {theme === "light" ? "☾ dark" : "☀ light"}
    </button>
  );
}
