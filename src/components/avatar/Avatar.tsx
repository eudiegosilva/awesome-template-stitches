import * as s from './avatar.styles';

export type AvatarProps = {
  src: string;
  alt: string;
  fallbackContent: string;
  fallbackDelay?: number;
};

const Avatar = ({
  alt,
  fallbackContent,
  fallbackDelay = 600,
  src
}: AvatarProps) => (
  <s.Avatar>
    <s.Image src={src} alt={alt} />
    <s.Fallback delayMs={fallbackDelay}>{fallbackContent}</s.Fallback>
  </s.Avatar>
);

export { Avatar };
