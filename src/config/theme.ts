import type { PresetDefinition, PaletteDefinition } from "@/types/theme";

export const presets: PresetDefinition[] = [
  {
    key: "natural",
    label: "Natural",
    description: "Sage-filled CTAs, full-border inputs, soft radius",
  },
  {
    key: "editorial",
    label: "Editorial",
    description: "Outlined CTAs, bottom-border inputs, near-zero radius",
  },
];

export const palettes: PaletteDefinition[] = [
  { key: "sage", label: "Sage Green", swatch: "oklch(58% 0.09 155)" },
  { key: "rose", label: "Rose Gold", swatch: "#d4a88c" },
  { key: "champagne", label: "Champagne", swatch: "#c9a96e" },
  { key: "terra", label: "Terracotta", swatch: "#c08b6e" },
];

export const defaultTheme = {
  preset: "natural" as const,
  palette: "sage" as const,
};
