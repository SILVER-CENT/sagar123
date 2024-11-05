import { memo, SVGProps } from 'react';

const Frame14Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 352 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={4} cy={6} r={4} fill='#463460' />
    <circle cx={16} cy={6} r={4} fill='#463460' />
    <circle cx={28} cy={6} r={4} fill='#463460' />
    <circle cx={40} cy={6} r={4} fill='#463460' />
    <circle cx={52} cy={6} r={4} fill='#463460' />
    <circle cx={64} cy={6} r={4} fill='#463460' />
    <circle cx={76} cy={6} r={4} fill='#463460' />
    <circle cx={88} cy={6} r={4} fill='#463460' />
  </svg>
);

const Memo = memo(Frame14Icon);
export { Memo as Frame14Icon };
