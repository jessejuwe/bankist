import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { NavWrapper } from '../exports/exports';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NavWrapper>
      <Component {...pageProps} />
    </NavWrapper>
  );
}
