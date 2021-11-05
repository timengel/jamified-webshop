import React from 'react';
import Layout from '../components/layout/Layout';
import colors from '../styles/colors.css'; // Must stay

const JamifiedWebshopApp = ({Component, pageProps}) => {
  return (
      <Layout>
        <Component {...pageProps}/>
      </Layout>
  );
};

export default JamifiedWebshopApp;
