import * as s from './flex.styles';
import { StichesConfigProps } from 'styles/stitches.config';

export type FlexProps = {
  children: React.ReactNode;
  css?: StichesConfigProps;
};

const Flex = ({ children, css }: FlexProps) => (
  <s.Flex css={css}>{children}</s.Flex>
);

export { Flex };
