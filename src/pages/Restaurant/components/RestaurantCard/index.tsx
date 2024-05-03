import React from 'react';
import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

import clsx from 'clsx';

import type { IVendorItem } from 'store/api/schema';

import { icons } from 'utils/icons';

import CouponsList from './components/CouponsList';
import RestaurantCover from './components/Cover';
import DiscountBadge from './components/DiscountBadge';
import RestaurantLogo from './components/Logo';
import Rating from './components/Rating';

import strings from '../../strings.json';

import styles from './restaurantCard.module.scss';

type IRestaurantCardProps = {
  className?: string;
  data: IVendorItem;
};

const RestaurantCard = forwardRef<HTMLDivElement, IRestaurantCardProps>(({ className = '', data }, ref) => {
  const isFullyClose = !(data.preOrderEnabled || data.isOpen);
  return (
    <div ref={ref} className={clsx([styles.card, className])}>
      <Link to={data.menuUrl}>
        <RestaurantCover
          coverSrc={data.backgroundImage}
          proText={data.is_pro ? data.best_coupon ?? '' : ''}
          isAd={data.bid}
          className={styles.card__cover}
          isFullyClose={isFullyClose}
        />

        <div className={styles.card__container}>
          <RestaurantLogo
            className={styles.card__logo}
            profileSrc={data.logo}
            isFullyClose={isFullyClose}
            isPro={data.is_pro}
          />

          <div className={styles.card__nameRating}>
            <div className={styles.card__nameDiscount}>
              <span>{data.title}</span>
              {!!data.discountValueForView && <DiscountBadge discount={data.discountValueForView} />}
            </div>

            <Rating voteCount={data.voteCount} rate={data.rate} isNew={data.rating === 0} />
          </div>
          <span className={styles.card__description}>{data.description}</span>
          {data.isOpen && (
            <div className={styles.card__delivery}>
              {data.isZFExpress && icons.driverHat()}
              <span>{data.isZFExpress ? strings.zfDeliver : strings.ownDelivery}</span>

              <span>{data?.deliveryFee ? data.deliveryFee.toLocaleString() + strings.toman : strings.free}</span>
            </div>
          )}

          <CouponsList
            isEco={data.is_eco}
            isCashback={data.has_cashback}
            couponCount={data.coupon_count}
            isFirstBuy={data.has_first_coupon}
          />

          {data.preOrderEnabled && (
            <div className={styles.card__preOrder}>
              {icons.clock()}
              <span>{strings.onlyPre}</span>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
});

export default React.memo(RestaurantCard, (prev, next) => {
  return prev.data.id === next.data.id;
});
