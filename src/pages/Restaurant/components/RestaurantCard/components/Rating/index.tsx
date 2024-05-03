import { icons } from 'utils/icons';

import strings from '../../../../strings.json';

import styles from './rating.module.scss';

type RatingProps = {
  className?: string;
  voteCount: number;
  rate: number;
  isNew: boolean;
};

function Rating({ isNew, rate, voteCount }: RatingProps) {
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
          strings.new
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
