interface IIconProps {
  className?: string;
}

function Icon({ className = '' }: IIconProps) {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='149.58 0.97 17.65 37.37'
    >
      <g id='Layer_2' data-name='Layer 2'>
        <g id='Layer_1-2' data-name='Layer 1'>
          <path d='M155.28,24.53c-.75,0-1.51,0-2.26,0s-.74-.17-.58-.76c.75-2.8,1.45-5.61,2.17-8.42,1.15-4.51,2.32-9,3.45-13.53.15-.6.36-.86,1-.85,2.52.05,5,0,7.54,0,.57,0,.72.12.57.72-1.58,6.18-3.12,12.37-4.7,18.56A5.33,5.33,0,0,1,157,24.53Z'></path>
          <path d='M160.93,32.9a5.68,5.68,0,0,1-11.35,0,5.46,5.46,0,0,1,5.71-5.68A5.34,5.34,0,0,1,160.93,32.9Z'></path>
        </g>
      </g>
    </svg>
  );
}

export default Icon;
