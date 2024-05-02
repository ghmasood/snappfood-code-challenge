import { useAppSelector } from 'store';
import type { IVendorItem } from 'store/api/schema';
import { useGetVendorListQuery } from 'store/api/slices/vendorList';
import HeaderList from './components/header';
import styles from './main.module.scss';
import RestaurantCard from './components/RestaurantCard';

function RestaurantPage() {
  //STORE
  const location = useAppSelector((store) => store.userInfo.location);

  //RTK QUERY
  const { data } = useGetVendorListQuery({
    page: 0,
    page_size: 10,
    ...location,
  });

  //VARIABLES
  const openVendorCount = data?.data.open_count;
  const allCount = data?.data.count;
  const vendorList = data?.data.finalResult
    .filter((i) => i.type === 'VENDOR')
    .map((i) => i?.data) as IVendorItem[];

  return (
    <div className={styles.main}>
      <HeaderList openCount={openVendorCount ?? 0} allCount={allCount ?? 0} />
      <div className={styles.main__cardsContainer}>
        {vendorList?.map((item) => (
          <RestaurantCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default RestaurantPage;
