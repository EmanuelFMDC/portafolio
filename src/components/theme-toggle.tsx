"use client";

import { Moon, Sun } from "@phosphor-icons/react";

// El tema inicial lo fija el script de layout.tsx antes del primer render,
// así que aquí solo se alterna y se guarda la preferencia.
export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Cambiar entre modo claro y oscuro"
      className="press grid size-9 place-items-center rounded-full text-muted hover:bg-surface hover:text-fg"
    >
      <Sun size={18} weight="regular" className="hidden [[data-theme=dark]_&]:block" />
      <Moon size={18} weight="regular" className="[[data-theme=dark]_&]:hidden" />
    </button>
  );
}
