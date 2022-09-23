import { Story, Meta } from '@storybook/react/types-6-0';

import { Container, ContainerProps } from './Container';

const story: Meta<ContainerProps> = {
  title: 'Helpers/Container',
  component: Container,
  args: { children: 'Responsive content' },
  argTypes: { children: { description: 'Container content' } }
};

export const ContainerExample: Story<ContainerProps> = args => (
  <div
    style={{
      border: '2px solid #5746AF',
      backgroundColor: '#C4B8F3',
      borderRadius: '4px'
    }}
  >
    <Container {...args}>
      <p
        style={{
          backgroundColor: '#E4DEFC',
          lineHeight: '150%',
          fontWeight: '300'
        }}
      >
        {args.children}
      </p>
    </Container>
  </div>
);

export default story;
