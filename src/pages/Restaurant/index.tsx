import { useEffect, useRef } from 'react';

import { useVirtualizer } from '@tanstack/react-virtual';

import { clearVendors, setPage, useAppDispatch, useAppSelector } from 'store';
import { useGetVendorListQuery } from 'store/api/slices/vendorList';

import useLocation from 'hooks/useLocation';

import EndPageObserver from './components/EndPageObserver';
import ListItem from './components/ListItem';
import RestaurantCardLoading from './components/ResturantCardLoading';

import styles from './main.module.scss';

function RestaurantPage() {
  const { lat, long, loading: isGeoLoading } = useLocation();

  const apiQuery = useAppSelector((store) => store.apiQuery);
  const vendorList = useAppSelector((store) => store.vendors.vendors);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isGeoLoading) {
      dispatch(clearVendors());
    }
  }, [lat, long, isGeoLoading, dispatch]);

  const { isLoading, isFetching, isError } = useGetVendorListQuery(
    { ...apiQuery, lat, long },
    {
      skip: isGeoLoading,
    }
  );
  const parentRef = useRef<HTMLDivElement>(null);

  const count = vendorList?.length || 10;
  const virtualizer = useVirtualizer({
    count,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 219,
    overscan: 2,
  });

  const virtualizedVendorList = virtualizer.getVirtualItems();

  const isEnableObserver = isLoading || isFetching || isError || isGeoLoading;

  const onView = () => {
    dispatch(setPage(apiQuery.page + 1));
  };

  return (
    <div className={styles.main} ref={parentRef}>
      <div
        className={styles.main__container}
        style={{
          height: virtualizer.getTotalSize(),
        }}
      >
        <div
          className={styles.main__virtualScroll}
          style={{
            transform: `translateY(${virtualizedVendorList[0]?.start ?? 0}px)`,
          }}
        >
          {virtualizedVendorList?.map((virtualRow) =>
            isLoading ? (
              <RestaurantCardLoading key={virtualRow.key} data-index={virtualRow.index} />
            ) : (
              <div key={virtualRow.key} data-index={virtualRow.index} ref={virtualizer.measureElement}>
                <ListItem data={vendorList?.[virtualRow.index]} />
              </div>
            )
          )}

          <EndPageObserver onView={onView} isEnable={isEnableObserver} />
        </div>
      </div>
    </div>
  );
}

export default RestaurantPage;
