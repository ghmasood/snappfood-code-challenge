import React, { forwardRef } from 'react';

import clsx from 'clsx';

import Brand from 'components/Brand';

import styles from './header.module.scss';

type ListHeaderProps = {
  className?: string;
  headerText: string;
};

const ListHeader = forwardRef<HTMLDivElement, ListHeaderProps>(({ className = '', headerText }, ref) => {
  return (
    <div ref={ref} className={clsx([styles.listHeader, className])}>
      <span>{headerText}</span>
      <Brand variant='logo' className={styles.listHeader__logo} />
    </div>
  );
});

export default React.memo(ListHeader);
