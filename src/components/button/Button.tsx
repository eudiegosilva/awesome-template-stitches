import * as s from './button.styles';
import { modifyVariantsForStory, VariantProps } from 'styles/utils/type-utils';

type ButtonVariants = VariantProps<typeof s.ButtonWrapper>;
export type ButtonProps = ButtonVariants & {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
};

export const Button = ({
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

export const ButtonStory = modifyVariantsForStory<ButtonVariants, ButtonProps>(
  Button
);
