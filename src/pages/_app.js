import React from 'react';
import Layout from '../components/layout/Layout';
import '../styles/Colors.scss';
import '../styles/App.scss';
import Head from 'next/head';
import {ClerkProvider} from '@clerk/nextjs';

const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API;

const JamifiedWebshopApp = ({Component, pageProps}) => {
  return (
      <ClerkProvider
          frontendApi={clerkFrontendApi}>
        <Head>
          <title>Jamified Webshop</title>
          <link rel='icon' href='/favicon_jamified-webshop.ico'/>
          <link rel='shortcut icon'
                href='/favicon_jamified-webshop.ico'/>
        </Head>
        <Layout>
          <Component {...pageProps}/>
        </Layout>
      </ClerkProvider>
  );
};

export default JamifiedWebshopApp;
