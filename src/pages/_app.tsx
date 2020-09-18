import React from 'react';
import { AppProps } from 'next/app';
import { CacheProvider } from '@emotion/react';
import { cache } from '@emotion/css';
import { globalStyles } from '../styles/styles';
import { Provider } from 'next-auth/client';

import '../styles/index.css';

const getSite = () => {
  if (process.env.NODE_ENV === 'production') {
    return 'https://skunkies.soluble.vercel.app';
  }
  return process.env.SITE;
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { session } = pageProps;
  return (
    <Provider options={{ site: getSite() }} session={session}>
      <CacheProvider value={cache}>
        {globalStyles}
        <h1>Using site {getSite()}</h1>
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
