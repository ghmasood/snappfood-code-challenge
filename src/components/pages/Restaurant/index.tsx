import { useAppSelector } from 'store';
import type { IVendorItem } from 'store/api/schema';
import { useGetVendorListQuery } from 'store/api/slices/vendorList';
import HeaderList from './components/header';
import styles from './main.module.scss';
import RestaurantCard from './components/RestaurantCard';
import { useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';

function RestaurantPage() {
  //STORE
  const location = useAppSelector((store) => store.userInfo.location);

  //RTK QUERY
  const { data } = useGetVendorListQuery({
    page: 0,
    page_size: 1000,
    ...location,
  });

  //REF
  const parentRef = useRef<HTMLDivElement>(null);

  //RES VARIABLES
  const openVendorCount = data?.data.open_count;
  const vendorCount = data?.data.count;
  const vendorList = data?.data.finalResult
    .filter((i) => i.type === 'VENDOR')
    .map((i) => i?.data) as IVendorItem[];

  //VIRTUAL LIST HOOK
  const resCount = vendorList?.length;
  const virtualizer = useVirtualizer({
    count: resCount,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 20,
  });

  const virtualizedVendorList = virtualizer.getVirtualItems();

  return (
    <div className={styles.main}>
      <div
        ref={parentRef}
        style={{
          height: '100%',
          width: '100%',
          overflowY: 'auto',
          contain: 'strict',
        }}
      >
        <HeaderList
          openCount={openVendorCount ?? 0}
          vendorCount={vendorCount ?? 0}
        />
        <div
          style={{
            height: virtualizer.getTotalSize(),
            width: '100%',
            position: 'relative',
            marginTop: '0.5rem',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              transform: `translateY(${
                virtualizedVendorList[0]?.start ?? 0
              }px)`,
            }}
            className={styles.main__cardsContainer}
          >
            {virtualizedVendorList?.map((virtualRow) => (
              <div
                key={virtualRow.key}
                data-index={virtualRow.index}
                ref={virtualizer.measureElement}
              >
                <RestaurantCard data={vendorList[virtualRow.index]} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantPage;
