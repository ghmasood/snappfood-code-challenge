import { useAppSelector } from 'store';
import { useGetVendorListQuery } from 'store/api/slices/vendorList';

function RestaurantPage() {
  const location = useAppSelector((store) => store.userInfo.location);
  const { data } = useGetVendorListQuery({
    page: 0,
    page_size: 10,
    ...location,
  });
  console.log(data?.data.finalResult);
  return <div>RestaurantPage</div>;
}

export default RestaurantPage;
