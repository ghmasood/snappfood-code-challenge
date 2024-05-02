import { icons } from 'utils/icons';
import styles from './rating.module.scss';
interface IRatingProps {
  className?: string;
  voteCount: number;
  rate: number;
  isNew: boolean;
}

function Rating({ isNew, rate, voteCount }: IRatingProps) {
  return (
    <div className={styles.main}>
      {!isNew && (
        <div className={styles.main__vote}>
          <span>(</span>
          <span>{voteCount.toLocaleString()}</span>
          <span>)</span>
        </div>
      )}

      <div className={styles.main__rate}>
        {isNew ? (
          'جدید'
        ) : (
          <>
            {icons.star()}
            <div>{rate}</div>
          </>
        )}
      </div>
    </div>
  );
}

export default Rating;
