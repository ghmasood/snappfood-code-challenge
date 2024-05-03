import { useState } from 'react';

import clsx from 'clsx';

import { icons } from 'utils/icons';

import styles from './logo.module.scss';

interface IRestaurantLogoProps {
  className?: string;
  profileSrc: string;
  isPro: boolean;
  isFullyClose: boolean;
}

function RestaurantLogo({ className = '', profileSrc, isFullyClose, isPro }: IRestaurantLogoProps) {
  //STATES
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={clsx(styles.main, className)}>
      <div className={clsx(isPro && styles.main__container)}>
        <div className={clsx(styles.main__imageContainer, isPro && styles['main__imageContainer-pro'])}>
          {isPro && icons.pro(styles.main__proIcon)}
          <img
            src={profileSrc}
            className={clsx(
              styles.main__image,
              loaded && styles['main__image-loaded'],
              isFullyClose && styles['main__image-closed']
            )}
            loading='lazy'
            onLoad={() => setLoaded(true)}
          />
        </div>
      </div>
    </div>
  );
}

export default RestaurantLogo;
