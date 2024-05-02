import { useState } from 'react';
import clsx from 'clsx';
import styles from './cover.module.scss';
import { icons } from 'utils/icons';

interface IRestaurantCoverProps {
  className?: string;
  coverSrc: string;
  proText: string;
  isAd: boolean;
}

function RestaurantCover({
  className = '',
  coverSrc,
  proText,
  isAd,
}: IRestaurantCoverProps) {
  //STATES
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={clsx([styles.cover, className])}>
      {proText && (
        <div className={styles.cover__proText}>
          {icons.pro(styles.cover__proIcon)}
          {proText}
        </div>
      )}
      {isAd && (
        <div className={styles.cover__ad}>
          آگهی
          {icons.ad()}
        </div>
      )}
      <div className={styles.cover__imageContainer}>
        <img
          src={coverSrc}
          className={clsx(
            styles.cover__image,
            loaded && styles['cover__image-loaded']
          )}
          loading='lazy'
          onLoad={() => setLoaded(true)}
        />
      </div>
    </div>
  );
}

export default RestaurantCover;
