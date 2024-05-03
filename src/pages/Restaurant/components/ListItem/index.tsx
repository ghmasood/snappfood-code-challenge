import type { IVendorCardData } from 'store/api/schema';
import RestaurantCard from '../RestaurantCard';
import ListHeader from '../ListHeader';
import { forwardRef } from 'react';

interface IListItemProps {
  className?: string;
  data: IVendorCardData | undefined;
}

const ListItem = forwardRef<HTMLDivElement, IListItemProps>(({ data }, ref) => {
  if (data?.type === 'BANNER')
    return (
      <div ref={ref}>
        <img src={data.data.image} width={'100%'} />
      </div>
    );

  if (data?.type === 'TEXT')
    return <ListHeader ref={ref} headerText={data.data} />;

  if (data?.type === 'VENDOR')
    return <RestaurantCard ref={ref} data={data.data} />;

  return;
});

export default ListItem;
