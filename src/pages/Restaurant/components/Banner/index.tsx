import { forwardRef, useState } from 'react';

import clsx from 'clsx';

import styles from './banner.module.scss';

const Banner = forwardRef<HTMLDivElement, { imageSrc: string }>(({ imageSrc }, ref) => {
  //STATES
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={styles.banner} ref={ref}>
      <img
        className={clsx(styles.banner__image, loaded && styles['banner__image-loaded'])}
        src={imageSrc}
        loading='lazy'
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
});

export default Banner;
forwardRef<HTMLDivElement>;
