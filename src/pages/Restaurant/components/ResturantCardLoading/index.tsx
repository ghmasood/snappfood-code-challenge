import { forwardRef } from 'react';

const RestaurantCardLoading = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className={'skeleton'} style={{ height: '220px' }}>
      Loading
    </div>
  );
});

export default RestaurantCardLoading;
