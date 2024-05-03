import { useEffect, useRef } from 'react';

import RestaurantCardLoading from '../ResturantCardLoading';

interface IEndPageObserverProps {
  onView: () => void;
  isEnable: boolean;
}

function EndPageObserver({ onView, isEnable }: IEndPageObserverProps) {
  const loadingCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isEnable) return;
    const refEl = loadingCardRef?.current;
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) onView();
    });
    if (refEl) observer.observe(refEl);
    return () => {
      if (refEl) observer.disconnect();
    };
  }, [loadingCardRef, isEnable, onView]);

  return <RestaurantCardLoading ref={loadingCardRef} />;
}

export default EndPageObserver;
