import {
  logoContainer,
  logoText,
  navbar,
  navSection,
  navSectionContainer,
} from './Navbar.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import logoPic from '../../../public/logo_jamified-webshop.png';
import React, {useState} from 'react';

const Navbar = () => {

  const [state, setState] = useState(false);

  const rerender = () => {
    setState(!state);
  }

  return (
      <header className={navbar}>
        <div className={logoContainer}><Image src={logoPic}
                                              alt='Jamified Webshop'
                                              height='45px'
                                              width='45px'
                                              layout='fixed'
                                              placeholder='blur'/><span
            className={logoText}>Jamified<br/>Webshop</span>
        </div>
        <nav className={navSectionContainer}>
          <div className={navSection}>
            <Link href='/'>
              <button>Home</button>
            </Link>
          </div>
          <div className={navSection}>
            <Link href='/products'>
              <button>Products</button>
            </Link>
          </div>
          <div className={navSection}>
            <Link href='/user'>
              <button>Profile</button>
            </Link>
          </div>
          <div className={navSection}>
            <Link href='/cart'
                  prefetch='false'>
              <button onClick={rerender}>Cart</button>
            </Link>
          </div>
          <div className={navSection}>
            <Link href='/about'>
              <button>About</button>
            </Link>
          </div>
        </nav>
      </header>
  );
};

export default Navbar;