import clsx from 'clsx';

import { icons } from 'utils/icons';

import CouponItem from './components/CouponItem';

import strings from '../../../../strings.json';

import styles from './couponsList.module.scss';

type CouponsListProps = {
  className?: string;
  isEco: boolean;
  isCashback: boolean;
  couponCount: number;
  isFirstBuy: boolean;
};

function CouponsList({ className = '', isEco, isCashback, couponCount, isFirstBuy }: CouponsListProps) {
  if (!(isEco || isCashback || isFirstBuy || !!couponCount)) return;
  return (
    <div className={clsx([styles.list, className])}>
      {!!couponCount && <CouponItem title={strings.haveCoupon.replace('$$$', couponCount.toString())} />}
      {isCashback && <CouponItem title={strings.cashback} icon={icons.cashback()} />}
      {isEco && <CouponItem title={strings.goodPrice} icon={icons.eco()} />}
      {isFirstBuy && <CouponItem title={strings.firstOrder} />}
    </div>
  );
}

export default CouponsList;
