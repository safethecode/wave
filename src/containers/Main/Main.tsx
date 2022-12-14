import { GNBLayout } from 'components/Layouts';
import { clsx } from 'clsx';

import styles from './Main.module.scss';

export const Main = () => {
  return (
    <GNBLayout>
      <div className={clsx(styles.wrap)}>
        <h1>Hello World</h1>
      </div>
    </GNBLayout>
  );
};
