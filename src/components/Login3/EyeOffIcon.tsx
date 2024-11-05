import { memo, SVGProps } from 'react';

const EyeOffIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M11.8455 9.36842L14.7273 12.1958V12.0526C14.7273 11.3407 14.4399 10.658 13.9285 10.1546C13.417 9.65122 12.7233 9.36842 12 9.36842H11.8455ZM7.93636 10.0842L9.34545 11.4711C9.3 11.6589 9.27273 11.8468 9.27273 12.0526C9.27273 12.7645 9.56006 13.4473 10.0715 13.9507C10.583 14.454 11.2767 14.7368 12 14.7368C12.2 14.7368 12.4 14.71 12.5909 14.6653L14 16.0521C13.3909 16.3474 12.7182 16.5263 12 16.5263C10.7945 16.5263 9.63832 16.055 8.78588 15.216C7.93344 14.377 7.45455 13.2391 7.45455 12.0526C7.45455 11.3458 7.63636 10.6837 7.93636 10.0842M2.90909 5.13632L4.98182 7.17632L5.39091 7.57895C3.89091 8.74211 2.70909 10.2632 2 12.0526C3.57273 15.9805 7.45455 18.7632 12 18.7632C13.4091 18.7632 14.7545 18.4947 15.9818 18.0116L16.3727 18.3874L19.0273 21L20.1818 19.8637L4.06364 4M12 7.57895C13.2055 7.57895 14.3617 8.05028 15.2141 8.88926C16.0666 9.72824 16.5455 10.8661 16.5455 12.0526C16.5455 12.6253 16.4273 13.18 16.2182 13.6811L18.8818 16.3026C20.2455 15.1842 21.3364 13.7168 22 12.0526C20.4273 8.12474 16.5455 5.34211 12 5.34211C10.7273 5.34211 9.50909 5.56579 8.36364 5.96842L10.3364 7.89211C10.8545 7.69526 11.4091 7.57895 12 7.57895Z'
      fill='#B2A6C5'
    />
  </svg>
);

const Memo = memo(EyeOffIcon);
export { Memo as EyeOffIcon };
