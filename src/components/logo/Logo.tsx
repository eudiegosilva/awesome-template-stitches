import * as s from './logo.styles';
import { ColorTokensTypes } from 'styles/stitches.config';

export type LogoProps = {
  color?: ColorTokensTypes;
  size?: number;
};

const Logo = ({ color, size }: LogoProps) => (
  <s.Wrapper css={{ width: size, color }}>
    <svg
      width={size}
      height={size}
      viewBox={`0 0 400 400`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M200 365.714C291.521 365.714 365.714 291.521 365.714 200C365.714 108.478 291.521 34.2854 200 34.2854C108.478 34.2854 34.2855 108.478 34.2855 200C34.2855 291.521 108.478 365.714 200 365.714Z"
        stroke="currentColor"
        strokeWidth="22.8571"
      />
      <path
        d="M146.495 357.963L364.238 232.249"
        stroke="currentColor"
        strokeWidth="11.4286"
      />
      <path
        d="M37.9244 169.913L255.668 44.1992"
        stroke="currentColor"
        strokeWidth="11.4286"
      />
      <path
        d="M98.8948 332.659L296.843 218.373"
        stroke="currentColor"
        strokeWidth="11.4286"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M105.323 183.789L303.272 69.5037"
        stroke="currentColor"
        strokeWidth="11.4286"
        strokeLinecap="round"
      />
      <path
        d="M151.239 162.625L257.256 241.231"
        stroke="currentColor"
        strokeWidth="11.4286"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M190.826 139.774L296.841 218.375"
        stroke="currentColor"
        strokeWidth="11.4286"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M105.323 183.789L217.667 264.09"
        stroke="currentColor"
        strokeWidth="11.4286"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </s.Wrapper>
);

export { Logo };
