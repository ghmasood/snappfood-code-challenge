// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Icon from './icon.svg?react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Logo from './logo.svg?react';

interface IIconProps {
  className?: string;
  variant: 'logo' | 'icon';
}

function Brand({ className = '', variant }: IIconProps) {
  return variant === 'icon' ? (
    <Icon className={className} />
  ) : variant === 'logo' ? (
    <Logo className={className} />
  ) : (
    <></>
  );
}

export default Brand;
