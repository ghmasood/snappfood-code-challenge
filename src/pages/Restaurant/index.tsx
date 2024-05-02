import { useAppSelector } from 'store';
import type { IVendorItem } from 'store/api/schema';
import { useGetVendorListQuery } from 'store/api/slices/vendorList';

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
  const vendorList = data?.data.finalResult
    .filter((i) => i.type === 'VENDOR')
    .map((i) => i?.data) as IVendorItem[];

  return (
    <div>
      {vendorList?.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}

export default RestaurantPage;
