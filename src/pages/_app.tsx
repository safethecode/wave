import { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { RecoilRoot } from 'recoil';
import 'styles/global.scss';

function App({ Component, pageProps }: AppProps) {
  const [root, setRoot] = useState<HTMLElement>();

  const RecoilizeDebugger = dynamic(
    () => {
      return import('react-recoilize');
    },
    { ssr: false },
  );

  useEffect(() => {
    if (typeof window.document !== 'undefined') {
      setRoot(document.getElementById('__next') as HTMLElement);
    }
  }, [root]);
  return (
    <RecoilRoot>
      <RecoilizeDebugger root={root} />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
export default App;
