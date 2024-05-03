import { Link } from 'react-router-dom';

import BasicButton from 'components/BasicButton';
import Brand from 'components/Brand';

import styles from './notFound.module.scss';
import strings from './strings.json';

function NotFoundPage() {
  return (
    <div className={styles.main}>
      <div className={styles.main__oopsContainer}>
        {strings.oops}
        <Brand variant='icon' className={styles.main__icon} />
      </div>
      <span className={styles.main__404}>{strings._404}</span>
      <span className={styles.main__text}>{strings.description}</span>
      <Link to='/'>
        <BasicButton className={styles.main__button}>{strings.backHome}</BasicButton>
      </Link>
    </div>
  );
}

export default NotFoundPage;
