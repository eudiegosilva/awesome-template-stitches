import { Story, Meta } from '@storybook/react/types-6-0';

import { Header, HeaderProps } from './Header';

const story: Meta<HeaderProps> = {
  title: 'Molecules/Header',
  component: Header,
  args: {},
  argTypes: {},
  parameters: { controls: { disable: true }, layout: 'fullscreen' }
};

export const HeaderExample: Story<HeaderProps> = args => <Header {...args} />;

export default story;
