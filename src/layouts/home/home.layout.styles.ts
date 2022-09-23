import { styled } from 'styles/stitches.config';

export const Container = styled('div', {
  position: 'relative',
  zIndex: '$root',
  backgroundColor: '$primary-01'
});

export const Wrapper = styled('main', {
  height: '100vh',
  zIndex: '$base',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  overflow: 'hidden'
});

export const Section = styled('section', {
  textAlign: 'center',
  maxWidth: '$container-md',
  px: '$3x',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
});

export const Title = styled('h1', {
  fontFamily: '$heading',
  fontSize: '$3x',
  lineHeight: '$100',
  color: '$text-contrast-high',
  fontWeight: '$700',
  marginBottom: '$lg'
});

export const Strong = styled('strong', {});

export const Description = styled('p', {
  fontFamily: '$body',
  fontSize: '$lg',
  lineHeight: '$100',
  color: '$text-contrast-low',
  fontWeight: '$400',
  marginBottom: '$lg'
});
