import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { TickSquare_Property1Linear } from '../TickSquare_Property1Linear/TickSquare_Property1Linear';
import classes from './Checkmark_Property1Default.module.css';
import { VuesaxLinearTickSquareIcon } from './VuesaxLinearTickSquareIcon';

interface Props {
  className?: string;
}
/* @figmaId 1:28975 */
export const Checkmark_Property1Default: FC<Props> = memo(function Checkmark_Property1Default(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <TickSquare_Property1Linear
        className={classes.tickSquare}
        swap={{
          vuesaxLinearTickSquare: <VuesaxLinearTickSquareIcon className={classes.icon} />,
        }}
      />
    </div>
  );
});
