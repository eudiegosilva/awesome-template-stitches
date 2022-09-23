import * as s from './container.styles';

export type ContainerProps = {
  children?: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => (
  <s.Container>{children}</s.Container>
);

export { Container };
