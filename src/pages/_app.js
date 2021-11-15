import React from 'react';
import Layout from '../components/layout/Layout';
import '../styles/Colors.scss';
import '../styles/App.scss';
import Head from 'next/head';

const JamifiedWebshopApp = ({Component, pageProps}) => {
  return (
      <Layout>
        <Head>
          <title>Jamified Webshop</title>
          <link rel='icon' href='/favicon-t.svg'/>
        </Head>
        <Component {...pageProps}/>
      </Layout>
  );
};

export default JamifiedWebshopApp;
