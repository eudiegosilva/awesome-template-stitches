import { Container } from 'components/container/container.styles';
import { styled } from 'styles/stitches.config';

export const Header = styled('header', {
  height: 75,
  position: 'fixed',
  top: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center'
});

export const HeaderContainer = styled(Container, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
});
