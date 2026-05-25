"use client";

import { useState, useEffect, useCallback } from "react";
import type { ThemePreset, ColorPalette, ThemeConfig } from "@/types/theme";
import { defaultTheme } from "@/config/theme";

const STORAGE_KEY = "maxvika-theme";

function loadTheme(): ThemeConfig {
  if (typeof window === "undefined") return defaultTheme;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored) as ThemeConfig;
  } catch {
    // ignore
  }
  return defaultTheme;
}

function applyTheme(config: ThemeConfig) {
  document.documentElement.setAttribute("data-preset", config.preset);
  document.documentElement.setAttribute("data-palette", config.palette);
}

export function useTheme() {
  const [theme, setThemeState] = useState<ThemeConfig>(defaultTheme);

  useEffect(() => {
    const loaded = loadTheme();
    applyTheme(loaded);
    // Defer state sync to avoid synchronous setState in effect
    const id = requestAnimationFrame(() => setThemeState(loaded));
    return () => cancelAnimationFrame(id);
  }, []);

  const setTheme = useCallback((update: Partial<ThemeConfig>) => {
    setThemeState((prev) => {
      const next = { ...prev, ...update };
      applyTheme(next);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const setPreset = useCallback(
    (preset: ThemePreset) => setTheme({ preset }),
    [setTheme],
  );

  const setPalette = useCallback(
    (palette: ColorPalette) => setTheme({ palette }),
    [setTheme],
  );

  return { theme, setPreset, setPalette };
}
