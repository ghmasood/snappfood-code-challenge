import { Link } from 'react-router-dom';

import BasicButton from 'components/BasicButton';
import Brand from 'components/Brand';

import styles from './notFound.module.scss';

function NotFoundPage() {
  return (
    <div className={styles.main}>
      <div className={styles.main__oopsContainer}>
        oops
        <Brand variant='icon' className={styles.main__icon} />
      </div>
      <span className={styles.main__404}>404</span>
      <span className={styles.main__text}>به نظر می‌آید شما گم شده اید :(</span>
      <Link to='/'>
        <BasicButton className={styles.main__button}>برگشت به خانه</BasicButton>
      </Link>
    </div>
  );
}

export default NotFoundPage;
