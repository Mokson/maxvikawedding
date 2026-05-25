export type ThemePreset = "natural" | "editorial";

export type ColorPalette = "sage" | "rose" | "champagne" | "terra";

export type ThemeConfig = {
  preset: ThemePreset;
  palette: ColorPalette;
};

export type PresetDefinition = {
  key: ThemePreset;
  label: string;
  description: string;
};

export type PaletteDefinition = {
  key: ColorPalette;
  label: string;
  swatch: string;
};
