import { forwardRef } from 'react';

import type { VendorCardData } from 'store/api/schema';

import Banner from '../Banner';
import ListHeader from '../ListHeader';
import RestaurantCard from '../RestaurantCard';

type ListItemProps = {
  className?: string;
  data: VendorCardData | undefined;
};

const ListItem = forwardRef<HTMLDivElement, ListItemProps>(({ data }, ref) => {
  if (data?.type === 'BANNER') return <Banner ref={ref} imageSrc={data.data.image} />;

  if (data?.type === 'TEXT') return <ListHeader ref={ref} headerText={data.data} />;

  if (data?.type === 'VENDOR') return <RestaurantCard ref={ref} data={data.data} />;

  return;
});

export default ListItem;
