import { ReactNode } from 'react';

import classNames from 'classnames/bind';
import styles from './GNBLayout.module.scss';

const cx = classNames.bind(styles);

interface GNBLayoutProps {
  children: ReactNode;
}

export const GNBLayout = ({ children }: GNBLayoutProps) => {
  return <main className={cx('wrap')}>{children}</main>;
};
