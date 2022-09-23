import * as s from './box.styles';
import { StichesConfigProps } from 'styles/stitches.config';

export type BoxProps = {
  children: React.ReactNode;
  css?: StichesConfigProps;
};

const Box = ({ children, css }: BoxProps) => (
  <s.Box css={css}>{children}</s.Box>
);

export { Box };
