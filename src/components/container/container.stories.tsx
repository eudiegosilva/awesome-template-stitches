import { Story, Meta } from '@storybook/react/types-6-0';

import { Container, ContainerProps } from './Container';

const story: Meta<ContainerProps> = {
  title: '@Helpers/Container',
  component: Container,
  args: {},
  argTypes: {
    children: { description: 'Container content' }
  },
  parameters: { layout: 'fullscreen' }
};

export const ContainerExample: Story<ContainerProps> = args => (
  <div
    style={{
      backgroundColor: 'lightcoral',
      border: '4px solid darkred'
    }}
  >
    <Container {...args}>
      <p
        style={{
          backgroundColor: 'lightblue',
          lineHeight: '150%',
          border: '4px solid darkblue'
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus quae
        voluptate dignissimos sit, fugiat libero quidem iusto modi magni!
        Debitis laudantium fugit suscipit quod asperiores ipsum molestias quam
        nisi eum sint quis natus iusto praesentium nemo, quisquam vero
        accusantium tenetur est quia at amet omnis, aperiam qui explicabo.
        Recusandae officia commodi consequuntur. Necessitatibus tempora
        consequatur velit obcaecati delectus explicabo nobis quidem. Sequi,
        vitae quibusdam. Aut veritatis ea alias aliquam possimus adipisci
        laudantium, debitis dolorum repudiandae, earum mollitia veniam
        reprehenderit tenetur doloribus unde corporis est sint consequuntur
        culpa animi assumenda nobis excepturi dicta. Numquam ex soluta fugit
        alias delectus autem eos dolores veritatis qui debitis maiores corrupti
        nobis perspiciatis deleniti, ipsam velit? Officiis officia, quia debitis
        earum consectetur a error iste vitae nam temporibus quos ex? Qui est
        magni unde ea culpa neque, nihil pariatur. Maiores, est ipsa. Eveniet
        provident quisquam neque quos a nihil distinctio necessitatibus saepe
        fugiat optio. Aut similique quae deserunt facilis fuga, fugit quia,
        commodi consectetur quam repudiandae rerum dolores. Sapiente optio
        numquam illo omnis incidunt ad ullam quos enim laborum sit, amet esse
        earum quas nihil! Reiciendis amet adipisci maxime quo? Eligendi repellat
        ea provident dolorum unde laudantium quisquam, ipsum voluptates animi
        alias aliquid hic accusamus.
      </p>
    </Container>
  </div>
);

export default story;
