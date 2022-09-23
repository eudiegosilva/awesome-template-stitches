import { globalCss } from '../stitches.config';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },
  'html, body': {
    fontFamily: '$body',
    WebkitFontSmoothing: 'antialiased',
    '&::-webkit-scrollbar': {
      backgroundColor: 'transparent',
      width: 4
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'transparent'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '$brand-primary-09'
    }
  }
});
