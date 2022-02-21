import React from 'react';
import {footer} from './Footer.module.scss';

const Footer = () => {
  const [didHydrate, setDidHydrate] = React.useState(false);
  React.useEffect(() => {
    setDidHydrate(true);
    console.log('Hydrated: ProductItem ' + slug)
  }, []);

  return (
      <div className={footer}
           style={{
             background: didHydrate
                 ? "#4beaa9"
                 : "#ff788c",
           }}>
        <a href='https://www.timengel.me/'>
          © Tim Engel
        </a>
      </div>
  );
};

export default Footer;
