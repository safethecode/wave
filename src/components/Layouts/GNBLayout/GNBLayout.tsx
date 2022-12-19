import { ReactNode } from 'react';
import { styled } from 'styles/stitches';

interface GNBLayoutProps {
  children: ReactNode;
}

const GNB = styled('main', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  flexFlow: 'column nowrap',
  margin: '0 auto',
});

export const GNBLayout = ({ children }: GNBLayoutProps) => {
  return <GNB>{children}</GNB>;
};
