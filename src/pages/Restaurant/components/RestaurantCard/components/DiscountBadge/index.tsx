import clsx from 'clsx';

import strings from '../../../../strings.json';

import styles from './discountBadge.module.scss';

type IDiscountBadgeProps = {
  className?: string;
  discount: number;
};

function DiscountBadge({ className = '', discount }: IDiscountBadgeProps) {
  return (
    <span className={clsx([styles.badge, className])}>
      <span className={styles.badge__to}>{strings.to}</span>
      {discount}٪
    </span>
  );
}

export default DiscountBadge;
