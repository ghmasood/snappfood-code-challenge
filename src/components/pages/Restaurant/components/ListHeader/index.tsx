import React from 'react';
import clsx from 'clsx';
import styles from './header.module.scss';
import Brand from 'components/UI/Brand';

interface IListHeaderProps {
  className?: string;
  headerText: string;
}

function ListHeader({ className = '', headerText }: IListHeaderProps) {
  return (
    <div className={clsx([styles.listHeader, className])}>
      <span>{headerText}</span>
      <Brand variant='logo' className={styles.listHeader__logo} />
    </div>
  );
}

export default React.memo(ListHeader);
