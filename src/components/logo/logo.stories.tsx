import { Story, Meta } from '@storybook/react/types-6-0';

import { Logo, LogoProps } from './Logo';

const story: Meta<LogoProps> = {
  title: 'Atoms/Logo',
  component: Logo,
  args: {
    size: 24,
    color: '$primary-09'
  },
  argTypes: {
    size: { description: 'Logo size' },
    color: { description: 'Logo color' }
  },
  parameters: {}
};

export const LogoExample: Story<LogoProps> = args => <Logo {...args} />;

export default story;
