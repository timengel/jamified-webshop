import React from 'react';
import {contentContainer} from './Content.module.scss';

const Content = ({children}) => {
  return (
      <main className={contentContainer}>
        {
          children
        }
      </main>
  );
};

export default Content;
