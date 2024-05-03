import BasicButton from 'components/BasicButton';
import styles from './main.module.scss';
import { Link } from 'react-router-dom';
import Brand from 'components/Brand';
import { icons } from 'utils/icons';
import strings from 'pages/Home/strings.json';

function HomePage() {
  return (
    <div className={styles.main}>
      <span className={styles.main__description}>
        {strings.goToRestaurants}
      </span>

      <Link to='/restaurant'>
        <BasicButton className={styles.main__button}>
          {strings.seeRestaurants}
        </BasicButton>
      </Link>

      <Brand variant='icon' className={styles.main__icon} />

      <div className={styles.main__developer}>
        <a href='https://github.com/ghmasood'>
          {icons.github()}
          <span>{strings.copyRight}</span>
        </a>
      </div>
    </div>
  );
}

export default HomePage;
