import * as s from './sphere.styles';
import { ColorTokensTypes } from 'styles/stitches.config';

export type SphereProps = {
  size: number;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  color?: ColorTokensTypes;
};

const Sphere = ({
  size,
  color = '$primary-03',
  left,
  top,
  bottom,
  right
}: SphereProps) => (
  <s.Sphere
    css={{
      width: size,
      height: size,
      backgroundColor: color,
      left,
      top,
      bottom,
      right
    }}
  />
);

export { Sphere };
