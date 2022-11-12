import Head from 'next/head';

import { Main } from '../exports/exports';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bankist</title>
        <meta name="Bankist" content="When Banking meets Minimalist" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <Main />
    </div>
  );
}
