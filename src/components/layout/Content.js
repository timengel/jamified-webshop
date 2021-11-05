import React from 'react';
import {contentContainer} from './Content.module.css';

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
