import { Story, Meta } from '@storybook/react/types-6-0';

import { Sphere, SphereProps } from './Sphere';

const story: Meta<SphereProps> = {
  title: 'Atoms/Sphere',
  component: Sphere,
  args: {
    size: 320,
    top: 0,
    left: -20,
    color: '$primary-03'
  },
  argTypes: {
    size: { description: 'Sphere size (width and height)' },
    top: { description: 'Distance from top' },
    left: { description: 'Distance from left' },
    bottom: { description: 'Distance from bottom' },
    right: { description: 'Distance from right' },
    color: { description: 'Sphere color' }
  },
  parameters: {}
};

export const SphereExample: Story<SphereProps> = args => <Sphere {...args} />;

export default story;
