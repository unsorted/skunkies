import React from 'react';
import { AppProps } from 'next/app';
import { CacheProvider } from '@emotion/react';
import { cache } from '@emotion/css';
import { globalStyles } from '../styles/styles';
import { Provider } from 'next-auth/client';

import '../styles/index.css';
import '../styles/blog/global.scss';

import { siteConfig } from '@/config/site.config';

const { siteUrl } = siteConfig;

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { session } = pageProps;
  console.debug(`Using siteUrl: ${siteUrl}`);
  return (
    <Provider options={{ baseUrl: siteUrl }} session={session}>
      <CacheProvider value={cache}>
        {globalStyles}
        <Component {...pageProps} />
      </CacheProvider>
    </Provider>
  );
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async appContext => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext)

//   return { ...appProps }
// }

export default MyApp;
