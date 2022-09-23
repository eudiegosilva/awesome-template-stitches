import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

import {
  colors,
  fonts,
  borders,
  sizes,
  shadows,
  spacings,
  transitions,
  zIndices,
  utils,
  medias
} from './tokens';

export type StichesConfigProps = Stitches.CSS<typeof config>;
export type ColorTokensTypes = `$${keyof typeof colors.dark}`;
export type ThemeTypes = 'dark' | 'light';
export type CreateThemeProps = ReturnType<typeof createTheme>;

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme: stitchesTheme
} = createStitches({
  theme: {
    borderStyles: {},
    borderWidths: {},
    colors: { ...colors.light },
    fonts: { ...fonts.families },
    fontSizes: { ...fonts.sizes },
    fontWeights: { ...fonts.weights },
    letterSpacings: { ...fonts.letterSpacings },
    lineHeights: { ...fonts.lineHeights },
    radii: { ...borders.radius },
    shadows: { ...shadows.light },
    sizes: { ...sizes },
    space: { ...spacings },
    transitions: { ...transitions },
    zIndices: { ...zIndices }
  },
  utils: { ...utils },
  media: { ...medias }
});

export const theme: {
  [key in ThemeTypes]: CreateThemeProps;
} = {
  dark: createTheme({
    colors: colors.dark,
    shadows: shadows.dark
  }),
  light: createTheme({
    colors: colors.light,
    shadows: shadows.light
  })
};
