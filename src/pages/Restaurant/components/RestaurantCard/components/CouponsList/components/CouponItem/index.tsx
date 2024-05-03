import { ReactNode } from 'react';

import clsx from 'clsx';

import styles from './coupon.module.scss';

type ICouponItemProps = {
  className?: string;
  title: string;
  icon?: ReactNode;
};

function CouponItem({ className = '', title, icon }: ICouponItemProps) {
  return (
    <div className={clsx([styles.coupon, className])}>
      {icon}
      {title}
    </div>
  );
}

export default CouponItem;
