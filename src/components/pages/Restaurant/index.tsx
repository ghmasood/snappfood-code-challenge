import { useAppSelector } from 'store';
import { useGetVendorListQuery } from 'store/api/slices/vendorList';
import styles from './main.module.scss';
import { useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import ListItem from './components/ListItem';

function RestaurantPage() {
  //STORE
  const location = useAppSelector((store) => store.userInfo.location);

  //RTK QUERY
  const { data } = useGetVendorListQuery({
    page: 0,
    page_size: 80,
    ...location,
  });

  //VARIABLES
  const resultArr = data?.data.finalResult;

  //REF
  const parentRef = useRef<HTMLDivElement>(null);

  //VIRTUAL LIST HOOK
  const resCount = resultArr?.length ?? 0;
  const virtualizer = useVirtualizer({
    count: resCount,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 10,
  });

  const virtualizedVendorList = virtualizer.getVirtualItems();

  return (
    <div className={styles.main} ref={parentRef}>
      <div
        className={styles.main__container}
        style={{
          height: virtualizer.getTotalSize(),
        }}
      >
        <div
          className={styles.main__container__l2}
          style={{
            transform: `translateY(${virtualizedVendorList[0]?.start ?? 0}px)`,
          }}
        >
          {virtualizedVendorList?.map((virtualRow) => (
            <div
              key={virtualRow.key}
              data-index={virtualRow.index}
              ref={virtualizer.measureElement}
            >
              <ListItem data={resultArr?.[virtualRow.index]} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RestaurantPage;
