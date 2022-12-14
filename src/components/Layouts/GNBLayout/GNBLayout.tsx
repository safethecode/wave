import { ReactNode } from 'react';
import { clsx } from 'clsx';

import styles from './GNBLayout.module.scss';

const cx = classNames.bind(styles);

interface GNBLayoutProps {
  children: ReactNode;
}

export const GNBLayout = ({ children }: GNBLayoutProps) => {
  return <main className={clsx(styles.wrap)}>{children}</main>;
};
