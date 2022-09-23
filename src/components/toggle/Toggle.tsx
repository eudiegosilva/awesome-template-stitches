import * as s from './toggle.styles';

export type ToggleProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const Toggle = ({ children, onClick }: ToggleProps) => (
  <s.Toggle onPressedChange={onClick}>{children}</s.Toggle>
);

export { Toggle };
