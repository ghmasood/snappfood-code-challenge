import React from 'react';
import clsx from 'clsx';
import styles from './header.module.scss';

interface IHeaderListProps {
  className?: string;
  openCount: number;
  allCount: number;
}

function HeaderList({ className = '', openCount, allCount }: IHeaderListProps) {
  return (
    <div className={clsx([styles.headerList, className])}>
      <span className={styles.headerList__count}>
        {openCount > 0 ? openCount : allCount}
      </span>{' '}
      <span>{openCount > 0 ? 'فروشنده‌ی باز' : 'فروشنده‌ی بسته'}</span>
    </div>
  );
}

export default React.memo(HeaderList);
