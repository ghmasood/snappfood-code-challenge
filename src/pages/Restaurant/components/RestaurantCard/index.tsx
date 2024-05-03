import type { IVendorItem } from 'store/api/schema';
import styles from './restaurantCard.module.scss';
import clsx from 'clsx';
import Rating from './components/Rating';
import DiscountBadge from './components/DiscountBadge';
import CouponsList from './components/CouponsList';
import { icons } from 'utils/icons';
import RestaurantCover from './components/Cover';
import { forwardRef } from 'react';

interface IRestaurantCardProps {
  className?: string;
  data: IVendorItem;
}

const RestaurantCard = forwardRef<HTMLDivElement, IRestaurantCardProps>(
  ({ className = '', data }, ref) => {
    //VARIABLE
    const isFullyClose = !(data.preOrderEnabled || data.isOpen);
    return (
      <div ref={ref} className={clsx([styles.card, className])}>
        <RestaurantCover
          coverSrc={data.backgroundImage}
          proText={data.is_pro ? data.best_coupon ?? '' : ''}
          isAd={data.bid}
          className={styles.card__cover}
          isFullyClose={isFullyClose}
        />

        <div className={styles.card__container}>
          <img src={data.logo} className={styles.card__logo} />
          <div className={styles.card__nameRating}>
            <div className={styles.card__nameDiscount}>
              <span>{data.title}</span>
              {!!data.discountValueForView && (
                <DiscountBadge discount={data.discountValueForView} />
              )}
            </div>

            <Rating
              voteCount={data.voteCount}
              rate={data.rate}
              isNew={data.rating === 0}
            />
          </div>
          <span className={styles.card__description}>{data.description}</span>
          {data.isOpen && (
            <div className={styles.card__delivery}>
              {data.isZFExpress && icons.driverHat()}
              <span>{data.isZFExpress ? 'پیک اسنپ فود:' : 'پیک رستوران:'}</span>

              <span>
                {data?.deliveryFee
                  ? data.deliveryFee.toLocaleString() + ' تومان'
                  : 'رایگان'}
              </span>
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
              <span>فقط پیش سفارش</span>
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default RestaurantCard;
