import type { IVendorCardData } from 'store/api/schema';
import RestaurantCard from '../RestaurantCard';
import ListHeader from '../ListHeader';

interface IListItemProps {
  className?: string;
  data: IVendorCardData | undefined;
}

function ListItem({ data }: IListItemProps) {
  return (
    <>
      {data?.type === 'TEXT' ? (
        <ListHeader headerText={data.data} />
      ) : data?.type === 'VENDOR' ? (
        <RestaurantCard data={data.data} />
      ) : data?.type === 'BANNER' ? (
        <img src={data.data.image} width={'100%'} />
      ) : (
        <></>
      )}
    </>
  );
}

export default ListItem;
