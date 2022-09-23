import * as RadixToggle from '@radix-ui/react-toggle';

import { styled } from 'styles/stitches.config';

export const Toggle = styled(RadixToggle.Root, {
  all: 'unset',
  backgroundColor: 'transparent',
  color: '$text-contrast-high',
  height: 35,
  width: 35,
  borderRadius: '$xs',
  display: 'flex',
  fontSize: '$sm',
  lineHeight: '$100',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': { backgroundColor: '$primary-03' },
  '&[data-state=on]': {
    color: '$text-contrast-high'
  },
  '&:focus': { boxShadow: '$focus' }
});
