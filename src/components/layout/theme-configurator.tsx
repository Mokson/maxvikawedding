"use client";

import { useState } from "react";
import { useTheme } from "@/hooks/use-theme";
import { presets, palettes } from "@/config/theme";

export function ThemeConfigurator() {
  const { theme, setPreset, setPalette } = useTheme();
  const [open, setOpen] = useState(false);

  if (process.env.NODE_ENV !== "development") return null;

  return (
    <div className="fixed bottom-4 left-4 z-[9999]">
      {open && (
        <div className="bg-surface border-border-color mb-2 w-64 border p-4">
          {/* Presets */}
          <p className="text-fg-muted mb-2 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
            Preset
          </p>
          <div className="mb-4 flex flex-col gap-1">
            {presets.map((p) => (
              <button
                key={p.key}
                onClick={() => setPreset(p.key)}
                className="flex min-h-[44px] items-center gap-2 px-1 text-left"
              >
                <span
                  className={`border-border-color flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                    theme.preset === p.key ? "bg-fg" : ""
                  }`}
                >
                  {theme.preset === p.key && (
                    <span className="bg-surface block h-1.5 w-1.5 rounded-full" />
                  )}
                </span>
                <span className="text-fg font-sans text-xs leading-tight font-medium">
                  <span className="block">{p.label}</span>
                  <span className="text-fg-muted block text-[11px] font-normal">
                    {p.description}
                  </span>
                </span>
              </button>
            ))}
          </div>

          {/* Palettes */}
          <p className="text-fg-muted mb-2 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
            Palette
          </p>
          <div className="flex gap-3">
            {palettes.map((p) => (
              <button
                key={p.key}
                onClick={() => setPalette(p.key)}
                className="group flex min-h-[44px] min-w-[44px] flex-col items-center justify-center gap-1"
                aria-label={p.label}
              >
                <span
                  className={`block h-6 w-6 rounded-full border-2 ${
                    theme.palette === p.key ? "border-fg" : "border-transparent"
                  }`}
                  style={{ backgroundColor: p.swatch }}
                />
                <span className="text-fg-muted font-sans text-[10px] font-medium">
                  {p.label.split(" ")[0]}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="bg-surface border-border-color text-fg-muted hover:text-fg flex h-11 w-11 items-center justify-center border font-sans text-xs font-medium transition-colors"
        aria-label={open ? "Close theme configurator" : "Open theme configurator"}
      >
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        )}
      </button>
    </div>
  );
}
