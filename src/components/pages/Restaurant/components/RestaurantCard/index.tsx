import type { IVendorItem } from 'store/api/schema';
import styles from './restaurantCard.module.scss';
import clsx from 'clsx';
import Rating from './components/Rating';

interface IRestaurantCardProps {
  className?: string;
  data: IVendorItem;
}

function RestaurantCard({ className = '', data }: IRestaurantCardProps) {
  return (
    <div className={clsx([styles.card, className])}>
      <img src={data.backgroundImage} className={styles.card__cover} />
      <div className={styles.card__container}>
        <img src={data.logo} className={styles.card__logo} />
        <div className={styles.card__nameRating}>
          <div>
            {' '}
            {data.title}{' '}
            {data.discountValueForView ? data.discountValueForView : ''}
          </div>
          <Rating
            voteCount={data.voteCount}
            rate={data.rate}
            isNew={data.rating === 0}
          />
        </div>
        <span className={styles.card__description}>{data.description}</span>
        <div className={styles.card__delivery}>
          <span>{data.isZFExpress ? 'پیک اسنپ فود:' : 'پیک فروشنده:'}</span>
          <span>{data.deliveryFee.toLocaleString()}</span>
          <span>تومان</span>
        </div>
        <div>coupens</div>
      </div>
    </div>
  );
}

export default RestaurantCard;