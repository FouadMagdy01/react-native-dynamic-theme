export type TonalColorPalette = {
  0: string;
  5: string;
  10: string;
  15: string;
  20: string;
  25: string;
  30: string;
  35: string;
  40: string;
  50: string;
  60: string;
  70: string;
  80: string;
  90: string;
  95: string;
  98: string;
  99: string;
  100: string;
};

export type TonalColorPaletteKeys = keyof TonalColorPalette;

export interface ExtendedTonalPalettes {
  primary: TonalColorPalette;
  secondary: TonalColorPalette;
  tertiary: TonalColorPalette;
  neutral: TonalColorPalette;
  neutralVariant: TonalColorPalette;
  error: TonalColorPalette;
}
