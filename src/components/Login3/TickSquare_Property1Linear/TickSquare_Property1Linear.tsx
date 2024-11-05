import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './TickSquare_Property1Linear.module.css';
import { VuesaxLinearTickSquareIcon } from './VuesaxLinearTickSquareIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    vuesaxLinearTickSquare?: ReactNode;
  };
}
/* @figmaId 1:141 */
export const TickSquare_Property1Linear: FC<Props> = memo(function TickSquare_Property1Linear(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vuesaxLinearTickSquare}>
        {props.swap?.vuesaxLinearTickSquare || <VuesaxLinearTickSquareIcon className={classes.icon} />}
      </div>
    </div>
  );
});
