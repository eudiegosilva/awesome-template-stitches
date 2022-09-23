import {
  violet,
  teal,
  blue,
  mauve,
  violetDark,
  tealDark,
  blueDark,
  mauveDark,
  pink,
  pinkDark,
  blackA,
  whiteA
} from '@radix-ui/colors';

export type ColorCategoryTypes =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'quaternary'
  | 'natural';

export type PaletteTypes = {
  [key in ColorCategoryTypes]: {
    [key in string]: string;
  };
};

import { ThemeTypes } from 'styles/stitches.config';

const themes: { [key in ThemeTypes]: PaletteTypes } = {
  light: {
    primary: violet,
    secondary: teal,
    tertiary: blue,
    quaternary: pink,
    natural: mauve
  },
  dark: {
    primary: violetDark,
    secondary: tealDark,
    tertiary: blueDark,
    quaternary: pinkDark,
    natural: mauveDark
  }
};

const makePalette = (theme: ThemeTypes) => {
  const palette = themes[theme];

  const base = {
    'black-01': blackA.blackA1,
    'black-02': blackA.blackA2,
    'black-03': blackA.blackA3,
    'black-04': blackA.blackA4,
    'black-05': blackA.blackA5,
    'black-06': blackA.blackA6,
    'black-07': blackA.blackA7,
    'black-08': blackA.blackA8,
    'black-09': blackA.blackA9,
    'black-10': blackA.blackA10,
    'black-11': blackA.blackA11,
    'black-12': blackA.blackA12,

    'white-01': whiteA.whiteA1,
    'white-02': whiteA.whiteA2,
    'white-03': whiteA.whiteA3,
    'white-04': whiteA.whiteA4,
    'white-05': whiteA.whiteA5,
    'white-06': whiteA.whiteA6,
    'white-07': whiteA.whiteA7,
    'white-08': whiteA.whiteA8,
    'white-09': whiteA.whiteA9,
    'white-10': whiteA.whiteA10,
    'white-11': whiteA.whiteA11,
    'white-12': whiteA.whiteA12
  };

  const text = {
    'text-contrast-high': palette.natural.mauve12,
    'text-contrast-low': palette.natural.mauve11,
    'text-black': blackA.blackA12,
    'text-white': whiteA.whiteA12
  };

  const primary = {
    'primary-01': palette.primary.violet1,
    'primary-02': palette.primary.violet2,
    'primary-03': palette.primary.violet3,
    'primary-04': palette.primary.violet4,
    'primary-05': palette.primary.violet5,
    'primary-06': palette.primary.violet6,
    'primary-07': palette.primary.violet7,
    'primary-08': palette.primary.violet8,
    'primary-09': palette.primary.violet9,
    'primary-10': palette.primary.violet10,
    'primary-11': palette.primary.violet11,
    'primary-12': palette.primary.violet12
  };

  const secondary = {
    'secondary-01': palette.secondary.teal1,
    'secondary-02': palette.secondary.teal2,
    'secondary-03': palette.secondary.teal3,
    'secondary-04': palette.secondary.teal4,
    'secondary-05': palette.secondary.teal5,
    'secondary-06': palette.secondary.teal6,
    'secondary-07': palette.secondary.teal7,
    'secondary-08': palette.secondary.teal8,
    'secondary-09': palette.secondary.teal9,
    'secondary-10': palette.secondary.teal10,
    'secondary-11': palette.secondary.teal11,
    'secondary-12': palette.secondary.teal12
  };

  const tertiary = {
    'tertiary-01': palette.tertiary.blue1,
    'tertiary-02': palette.tertiary.blue2,
    'tertiary-03': palette.tertiary.blue3,
    'tertiary-04': palette.tertiary.blue4,
    'tertiary-05': palette.tertiary.blue5,
    'tertiary-06': palette.tertiary.blue6,
    'tertiary-07': palette.tertiary.blue7,
    'tertiary-08': palette.tertiary.blue8,
    'tertiary-09': palette.tertiary.blue9,
    'tertiary-10': palette.tertiary.blue10,
    'tertiary-11': palette.tertiary.blue11,
    'tertiary-12': palette.tertiary.blue12
  };

  const quaternary = {
    'quaternary-01': palette.quaternary.pink1,
    'quaternary-02': palette.quaternary.pink2,
    'quaternary-03': palette.quaternary.pink3,
    'quaternary-04': palette.quaternary.pink4,
    'quaternary-05': palette.quaternary.pink5,
    'quaternary-06': palette.quaternary.pink6,
    'quaternary-07': palette.quaternary.pink7,
    'quaternary-08': palette.quaternary.pink8,
    'quaternary-09': palette.quaternary.pink9,
    'quaternary-10': palette.quaternary.pink10,
    'quaternary-11': palette.quaternary.pink11,
    'quaternary-12': palette.quaternary.pink12
  };

  return {
    ...base,
    ...primary,
    ...secondary,
    ...tertiary,
    ...quaternary,
    ...text
  };
};

export const colors = {
  dark: makePalette('dark'),
  light: makePalette('light')
};
