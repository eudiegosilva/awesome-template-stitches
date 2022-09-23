import { styled } from 'styles/stitches.config';

export const Container = styled('div', {
  width: '100%',
  mx: 'auto',
  '@less-sm': { maxWidth: '$container-sm', px: '$sm' },
  '@greater-sm': { maxWidth: '$container-md', px: '$md' },
  '@greater-md': { maxWidth: '$container-lg', px: '$lg' },
  '@greater-lg': { maxWidth: '$container-xl', px: '$xl' },
  '@greater-xl': { minWidth: '$container-xl', px: '$xx' }
});
