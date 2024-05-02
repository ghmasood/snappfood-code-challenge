import { HTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './basicButtom.module.scss';

interface IBasicButtonProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, 'className'> {
  children: React.ReactNode;
  className?: string;
}

function BasicButton({ children, className }: IBasicButtonProps) {
  return <button className={clsx(styles.button, className)}>{children}</button>;
}

export default BasicButton;
