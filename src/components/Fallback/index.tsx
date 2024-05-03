import clsx from 'clsx';
import Brand from 'components/Brand';

import styles from './fallBack.module.scss';

function FallBackPage() {
  return (
    <div className={styles.fallback}>
      <Brand variant={'logo'} className={styles.fallback__logo} />
      <div className={clsx('lds-ring', styles.fallback__spinner)}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default FallBackPage;
