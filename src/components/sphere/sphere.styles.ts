import { styled } from 'styles/stitches.config';

export const Sphere = styled('div', {
  position: 'fixed',
  zIndex: '$behind',
  borderRadius: '$circular',
  backgroundColor: '$primary-03',
  filter: 'blur(60px)'
});
