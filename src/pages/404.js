import React from 'react';
import {highlight, pageNotFound} from '../styles/Home.module.scss'

const NotFoundPage = () => {
  return (
      <div className={pageNotFound}>
        <span className={highlight}>404</span> | Not found
      </div>
  );
};

export default NotFoundPage;
