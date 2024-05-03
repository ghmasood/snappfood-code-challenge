import { useEffect, useRef } from 'react';
import RestaurantCardLoading from '../ResturantCardLoading';

interface IEndPageObserverProps {
  onView: () => void;
  isLoading: boolean;
}

function EndPageObserver({ onView, isLoading }: IEndPageObserverProps) {
  const loadingCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLoading) return;
    const refEl = loadingCardRef?.current;
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) onView();
    });
    if (refEl) observer.observe(refEl);
    return () => {
      if (refEl) observer.disconnect();
    };
  }, [loadingCardRef, isLoading, onView]);

  return <RestaurantCardLoading ref={loadingCardRef} />;
}

export default EndPageObserver;
