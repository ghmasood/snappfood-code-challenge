import { useState } from 'react';

import clsx from 'clsx';

import { icons } from 'utils/icons';

import strings from '../../../../strings.json';

import styles from './cover.module.scss';

type RestaurantCoverProps = {
  className?: string;
  coverSrc: string;
  proText: string;
  isAd: boolean;
  isFullyClose: boolean;
};

function RestaurantCover({ className = '', coverSrc, proText, isAd, isFullyClose }: RestaurantCoverProps) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={clsx([styles.cover, className])}>
      {proText && !isFullyClose && (
        <div className={styles.cover__proText}>
          {icons.pro(styles.cover__proIcon)}
          {proText}
        </div>
      )}

      {isAd && !isFullyClose && (
        <div className={styles.cover__ad}>
          {strings.ad}
          {icons.ad()}
        </div>
      )}
      {isFullyClose && <div className={styles.cover__closedText}>{strings.closed}</div>}
      <div className={styles.cover__imageContainer}>
        <img
          src={coverSrc}
          className={clsx(
            styles.cover__image,
            loaded && styles['cover__image-loaded'],
            isFullyClose && styles['cover__image-closed']
          )}
          loading='lazy'
          onLoad={() => setLoaded(true)}
        />
      </div>
    </div>
  );
}

export default RestaurantCover;
