import clsx from 'clsx';
import styles from './couponsList.module.scss';
import CouponItem from './components/CouponItem';
import { icons } from 'utils/icons';

interface ICouponsListProps {
  className?: string;
  isEco: boolean;
  isCashback: boolean;
  couponCount: number;
  isFirstBuy: boolean;
}

function CouponsList({
  className = '',
  isEco,
  isCashback,
  couponCount,
  isFirstBuy,
}: ICouponsListProps) {
  if (!(isEco || isCashback || isFirstBuy || !!couponCount)) return;
  return (
    <div className={clsx([styles.list, className])}>
      {!!couponCount && <CouponItem title={`دارای ${couponCount} کوپن`} />}
      {isCashback && (
        <CouponItem title={'جایزه خرید'} icon={icons.cashback()} />
      )}
      {isEco && <CouponItem title={'خوش قیمت'} icon={icons.eco()} />}
      {isFirstBuy && <CouponItem title={'تخفیف سفارش اول'} />}
    </div>
  );
}

export default CouponsList;
