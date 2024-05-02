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
            <svg
              width='10'
              height='10'
              viewBox='0 0 12 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g>
                <path
                  d='M5.55159 0.9086C5.735 0.536977 6.26492 0.536977 6.44833 0.9086L7.76331 3.57306L10.7037 4.00032C11.1138 4.05991 11.2776 4.5639 10.9808 4.85317L8.85313 6.92716L9.35541 9.85568C9.42546 10.2641 8.99675 10.5756 8.62993 10.3828L5.99996 9.00011L3.36998 10.3828C3.00317 10.5756 2.57445 10.2641 2.64451 9.85568L3.14679 6.92716L1.01909 4.85317C0.722336 4.5639 0.88609 4.05991 1.2962 4.00032L4.2366 3.57306L5.55159 0.9086Z'
                  fill='currentColor'
                ></path>
                <path
                  d='M5.55159 0.9086C5.735 0.536977 6.26492 0.536977 6.44833 0.9086L7.76331 3.57306L10.7037 4.00032C11.1138 4.05991 11.2776 4.5639 10.9808 4.85317L8.85313 6.92716L9.35541 9.85568C9.42546 10.2641 8.99675 10.5756 8.62993 10.3828L5.99996 9.00011L3.36998 10.3828C3.00317 10.5756 2.57445 10.2641 2.64451 9.85568L3.14679 6.92716L1.01909 4.85317C0.722336 4.5639 0.88609 4.05991 1.2962 4.00032L4.2366 3.57306L5.55159 0.9086Z'
                  fill='currentColor'
                ></path>
              </g>
            </svg>
            <div>{rate}</div>
          </>
        )}
      </div>
    </div>
  );
}

export default Rating;
