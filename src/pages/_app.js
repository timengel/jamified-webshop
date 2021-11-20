import React from 'react';
import Layout from '../components/layout/Layout';
import '../styles/Colors.scss';
import '../styles/App.scss';
import Head from 'next/head';
import {UserProvider} from '@auth0/nextjs-auth0';

const JamifiedWebshopApp = ({Component, pageProps}) => {
  return (
      <UserProvider>
        <Layout>
          <Head>
            <title>Jamified Webshop</title>
            <link rel='icon' href='/favicon-t.svg'/>
          </Head>
          <Component {...pageProps}/>
        </Layout>
      </UserProvider>
  );
};

export default JamifiedWebshopApp;
