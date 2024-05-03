import { forwardRef } from 'react';

import clsx from 'clsx';

import styles from './loadingCard.module.scss';

const RestaurantCardLoading = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className={styles.card}>
      <div className={clsx('skeleton', styles.card__cover)} />

      <div className={styles.card__description} style={{}}>
        <div className={styles.card__logoContainer}>
          <div className={clsx('skeleton', styles.card__logo)} />
        </div>

        <div className={styles.card__titleRate}>
          <span className='skeleton'>Vendor Name</span>
          <span className='skeleton'>Vendor Rate</span>
        </div>

        <span className={clsx('skeleton', styles.fitWidth)}>Vendor Description</span>

        <span className={clsx('skeleton', styles.fitWidth)}>Vendor Delivery Type</span>
      </div>
    </div>
  );
});

export default RestaurantCardLoading;
