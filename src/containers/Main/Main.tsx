import { GNBLayout } from 'components/Layouts';
import classNames from 'classnames/bind';
import styles from './Main.module.scss';

const cx = classNames.bind(styles);

export const Main = () => {
  return (
    <GNBLayout>
      <div className={cx('wrapper')}>
        <h1>Hello World</h1>
      </div>
    </GNBLayout>
  );
};
