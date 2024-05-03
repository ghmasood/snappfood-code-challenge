import clsx from 'clsx';

import strings from '../../../../strings.json';

import styles from './discountBadge.module.scss';

type DiscountBadgeProps = {
  className?: string;
  discount: number;
};

function DiscountBadge({ className = '', discount }: DiscountBadgeProps) {
  return (
    <span className={clsx([styles.badge, className])}>
      <span className={styles.badge__to}>{strings.to}</span>
      {discount}٪
    </span>
  );
}

export default DiscountBadge;
