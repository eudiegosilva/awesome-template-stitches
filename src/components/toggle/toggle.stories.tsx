import { SunIcon } from '@radix-ui/react-icons';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Toggle, ToggleProps } from './Toggle';

const story: Meta<ToggleProps> = {
  title: 'Atoms/Toggle',
  component: Toggle,
  args: {
    children: <SunIcon />
  },
  argTypes: {
    children: { description: 'Toggle content' },
    onClick: {
      description: 'Event executed when the toggle is clicked',
      action: 'toggle-clicked'
    }
  },
  parameters: {}
};

export const ToggleExample: Story<ToggleProps> = args => <Toggle {...args} />;

export default story;
