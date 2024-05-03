import clsx from 'clsx';

import styles from './discountBadge.module.scss';

interface IDiscountBadgeProps {
  className?: string;
  discount: number;
}

function DiscountBadge({ className = '', discount }: IDiscountBadgeProps) {
  return (
    <span className={clsx([styles.badge, className])}>
      <span className={styles.badge__to}>تا </span>
      {discount}٪
    </span>
  );
}

export default DiscountBadge;
