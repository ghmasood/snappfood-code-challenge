import React, { forwardRef } from 'react';

import clsx from 'clsx';

import Brand from 'components/Brand';

import styles from './header.module.scss';

type IListHeaderProps = {
  className?: string;
  headerText: string;
};

const ListHeader = forwardRef<HTMLDivElement, IListHeaderProps>(({ className = '', headerText }, ref) => {
  return (
    <div ref={ref} className={clsx([styles.listHeader, className])}>
      <span>{headerText}</span>
      <Brand variant='logo' className={styles.listHeader__logo} />
    </div>
  );
});

export default React.memo(ListHeader);
