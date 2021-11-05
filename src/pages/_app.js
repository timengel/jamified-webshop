import React from 'react';
import Layout from '../components/layout/Layout';
import '../styles/Colors.css';

const JamifiedWebshopApp = ({Component, pageProps}) => {
  return (
      <Layout>
        <Component {...pageProps}/>
      </Layout>
  );
};

export default JamifiedWebshopApp;
