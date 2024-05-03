import { HTMLAttributes } from 'react';

import clsx from 'clsx';

import styles from './basicButton.module.scss';

function BasicButton({ children, className, ...rest }: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={clsx(styles.button, className)} {...rest}>
      {children}
    </button>
  );
}

export default BasicButton;
