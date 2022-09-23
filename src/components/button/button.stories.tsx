import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './Button';

const story: Meta<ButtonProps> = {
  title: 'Atoms/Button',
  component: Button,
  args: {
    variant: 'primary',
    children: 'Button',
    type: 'button',
    isFullWidth: false
  },
  argTypes: {
    children: {
      description: 'Button label',
      table: { defaultValue: { summary: '' } }
    },
    type: { description: 'Specifies the type of component' },
    isFullWidth: { description: 'Defines if the component is full width' },
    variant: { description: 'Main visual variations of the component' },
    onClick: {
      description: 'Event executed when the component is clicked',
      action: 'button-clicked'
    }
  },
  parameters: {}
};

export const ButtonExample: Story<ButtonProps> = args => {
  const { children } = args;
  return <Button {...args}>{children}</Button>;
};

export default story;
