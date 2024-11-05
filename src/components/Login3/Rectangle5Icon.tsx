import { memo, SVGProps } from 'react';

const Rectangle5Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 796 1080' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M164 0H796V1080H164V1080C57.0778 727.939 57.0778 352.061 164 0V0Z' fill='white' />
  </svg>
);

const Memo = memo(Rectangle5Icon);
export { Memo as Rectangle5Icon };
