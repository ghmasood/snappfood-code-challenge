import Icon from './icon.svg?react';
import Logo from './logo.svg?react';

type IIconProps = {
  className?: string;
  variant: 'logo' | 'icon';
};

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
