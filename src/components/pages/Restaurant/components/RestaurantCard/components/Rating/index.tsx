import clsx from 'clsx';

interface IRatingProps {
  className?: string;
  voteCount: number;
  rate: number;
  isNew: boolean;
}

function Rating({ className = '', isNew, rate, voteCount }: IRatingProps) {
  return isNew ? (
    <>جدید</>
  ) : (
    <>
      ({voteCount}) {rate}
    </>
  );
}

export default Rating;
