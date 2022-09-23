import { colors } from './colors';

const shadows = {
  dark: {
    normal: `0 2px 10px ${colors.dark['primary-03']}`,
    focus: `0 0 0 2px ${colors.dark['primary-09']}`
  },
  light: {
    normal: `0 2px 10px ${colors.light['primary-03']}`,
    focus: `0 0 0 2px ${colors.light['primary-09']}`
  }
};

export { shadows };
