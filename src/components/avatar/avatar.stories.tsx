import { Story, Meta } from '@storybook/react/types-6-0';

import stitchesLogo from '../../../public/assets/images/stitches-logo.png';
import { Avatar, AvatarProps } from './Avatar';

const story: Meta<AvatarProps> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  args: {
    src: stitchesLogo.src,
    alt: 'Stitches Logo',
    fallbackContent: 'ST',
    fallbackDelay: 600
  },
  argTypes: {
    src: { description: 'Picture path' },
    alt: { description: 'Picture description' },
    fallbackContent: {
      description:
        'Useful for delaying rendering so it only appears for those with slower connections.'
    },
    fallbackDelay: {
      description:
        'Useful for delaying rendering so it only appears for those with slower connections.'
    }
  },
  parameters: {}
};

export const AvatarExample: Story<AvatarProps> = args => <Avatar {...args} />;

export default story;
