import type { AppProps } from 'next/app';
import { globalStyles } from 'styles/globalStyles';
import { RecoilRoot } from 'recoil';

function App({ Component, pageProps }: AppProps) {
  // Global styles defined in `styles/globalStyles.ts`
  globalStyles();
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
export default App;
