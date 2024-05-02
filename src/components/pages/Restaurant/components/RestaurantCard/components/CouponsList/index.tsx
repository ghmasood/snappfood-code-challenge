import clsx from 'clsx';
import styles from './couponsList.module.scss';
import CouponItem from './components/CouponItem';
import { icons } from 'utils/icons';

interface ICouponsListProps {
  className?: string;
  isEco: boolean;
  cashback: boolean;
  couponCount: number;
  firstBuy: boolean;
}

function CouponsList({
  className = '',
  isEco,
  cashback,
  couponCount,
  firstBuy,
}: ICouponsListProps) {
  return (
    <div className={clsx([styles.list, className])}>
      {!!couponCount && <CouponItem title={`دارای ${couponCount} کوپن`} />}
      {cashback && <CouponItem title={'جایزه خرید'} icon={icons.cashback()} />}
      {isEco && <CouponItem title={'خوش قیمت'} icon={icons.eco()} />}
      {firstBuy && <CouponItem title={'تخفیف سفارش اول'} />}
    </div>
  );
}

export default CouponsList;
