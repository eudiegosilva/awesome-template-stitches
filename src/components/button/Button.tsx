import * as s from './button.styles';

export type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
  isFullWidth?: boolean;
  onClick?: () => void;
};

const Button = ({
  children,
  variant = 'primary',
  type = 'button',
  isFullWidth = false,
  onClick
}: ButtonProps) => {
  return (
    <s.ButtonWrapper
      type={type}
      variant={variant}
      isFullWidth={isFullWidth}
      onClick={onClick}
    >
      {children}
    </s.ButtonWrapper>
  );
};

export { Button };
