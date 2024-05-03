import { useEffect, useRef } from 'react';

import { useVirtualizer } from '@tanstack/react-virtual';

import { setLocation, setPage, useAppDispatch, useAppSelector } from 'store';
import { useGetVendorListQuery } from 'store/api/slices/vendorList';

import useLocation from 'hooks/useLocation';

import EndPageObserver from './components/EndPageObserver';
import ListItem from './components/ListItem';
import RestaurantCardLoading from './components/ResturantCardLoading';

import styles from './main.module.scss';

function RestaurantPage() {
  //LOCATION HOOK
  const { lat, long, loading: isGeoLoading } = useLocation();

  //STORE
  const apiQuery = useAppSelector((store) => store.apiQuery);
  const vendorList = useAppSelector((store) => store.vendors.vendors);
  const dispatch = useAppDispatch();

  //LIFE CYCLE METHODS
  useEffect(() => {
    if (!isGeoLoading && lat && long) {
      dispatch(setLocation({ lat: lat, long: long }));
    }
  }, [lat, long, isGeoLoading]);

  //RTK QUERY
  const { isLoading, isFetching } = useGetVendorListQuery(apiQuery, { skip: isGeoLoading });

  //REF
  const parentRef = useRef<HTMLDivElement>(null);

  //VIRTUAL LIST HOOK
  const count = vendorList?.length || 10;
  const virtualizer = useVirtualizer({
    count,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 252,
    overscan: 2,
  });

  const virtualizedVendorList = virtualizer.getVirtualItems();

  //LOGICS
  const onView = () => {
    if (!isFetching) dispatch(setPage(apiQuery.page + 1));
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
            isLoading || isGeoLoading ? (
              <RestaurantCardLoading
                key={virtualRow.key}
                data-index={virtualRow.index}
                ref={virtualizer.measureElement}
              />
            ) : (
              <ListItem
                key={virtualRow.key}
                data-index={virtualRow.index}
                ref={virtualizer.measureElement}
                data={vendorList?.[virtualRow.index]}
              />
            )
          )}

          <EndPageObserver onView={onView} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}

export default RestaurantPage;
