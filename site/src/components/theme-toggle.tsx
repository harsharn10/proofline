import { useEffect, useState } from "react";

const KEY = "icarus.theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<string | null>(null);
  useEffect(() => {
    const selected = document.documentElement.getAttribute("data-theme");
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    setTheme(selected ?? system);
  }, []);
  const flip = () => {
    const selected = document.documentElement.getAttribute("data-theme");
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const next = (selected ?? system) === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(KEY, next);
    } catch {
      /* private mode — theme flips for this page only */
    }
    setTheme(next);
  };
  return (
    <button type="button" className="themetoggle" onClick={flip} title="Toggle light or dark theme">
      {theme === "light" ? "dark" : "light"}
    </button>
  );
}
