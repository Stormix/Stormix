import type { AppProps } from 'next/app';
import Layout from '../components/layout/main';
import { Suspense } from 'react';

import '../styles/globals.scss';
import '../i18n';
import { useTranslation } from 'react-i18next';

function MyApp({ Component, pageProps }: AppProps) {
  const { i18n } = useTranslation();
  const font = i18n.language == 'ar-ma' ? 'font-arabic' : 'font-sans';

  return (
    <>
      <Layout>
        <Suspense fallback="loading">
          <Component {...pageProps} className={font} />
        </Suspense>
      </Layout>
    </>
  );
}

export default MyApp;
