import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ButtonStory } from './Button';

const story: ComponentMeta<typeof ButtonStory> = {
  title: 'Atoms/Button',
  component: ButtonStory,
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

export const ButtonExample: ComponentStory<typeof ButtonStory> = args => {
  const { children } = args;
  return <ButtonStory {...args}>{children}</ButtonStory>;
};

export default story;
