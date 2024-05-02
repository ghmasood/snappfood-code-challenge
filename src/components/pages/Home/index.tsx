import BasicButton from 'components/UI/BasicButton';
import styles from './main.module.scss';
import { Link } from 'react-router-dom';
import Brand from 'components/UI/Brand';
import { icons } from 'utils/icons';

function HomePage() {
  return (
    <div className={styles.main}>
      <span className={styles.main__description}>
        برای مشاهده لیست رستوران‌ها، از طریق دکمه زیر به صفحه آن بروید.
      </span>
      <Link to={'/restaurant'}>
        <BasicButton className={styles.main__button}>
          دیدن رستوران‌ها
        </BasicButton>
      </Link>
      <Brand variant='icon' className={styles.main__icon} />
      <div className={styles.main__developer}>
        <a href='https://github.com/ghmasood'>
          {icons.github()}
          <span>Developed By ghmasood</span>
        </a>
      </div>
    </div>
  );
}

export default HomePage;
