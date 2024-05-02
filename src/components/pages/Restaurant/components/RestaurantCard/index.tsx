import type { IVendorItem } from 'store/api/schema';
import styles from './restaurantCard.module.scss';
import clsx from 'clsx';
import Rating from './components/Rating';
import DiscountBadge from './components/DiscountBadge';
import CouponsList from './components/CouponsList';
import { icons } from 'utils/icons';
import RestaurantCover from './components/Cover';

interface IRestaurantCardProps {
  className?: string;
  data: IVendorItem;
}

function RestaurantCard({ className = '', data }: IRestaurantCardProps) {
  return (
    <div className={clsx([styles.card, className])}>
      <RestaurantCover
        coverSrc={data.backgroundImage}
        proText={data.is_pro ? data.best_coupon ?? '' : ''}
        isAd={data.bid}
        className={styles.card__cover}
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
        <div className={styles.card__delivery}>
          {data.isZFExpress && icons.driverHat()}
          <span>{data.isZFExpress ? 'پیک اسنپ فود:' : 'پیک رستوران:'}</span>
          <span>
            {data?.deliveryFee
              ? data.deliveryFee.toLocaleString() + ' تومان'
              : 'رایگان'}
          </span>
        </div>
        <CouponsList
          isEco={data.is_eco}
          cashback={data.has_cashback}
          couponCount={data.coupon_count}
          firstBuy={data.has_first_coupon}
        />
      </div>
    </div>
  );
}

export default RestaurantCard;
