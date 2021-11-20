import {
  navbar,
  websiteLogo,
  navSection,
  navSectionContainer,
  logoText,
  login,
} from './Navbar.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import logoPic from '../../../public/logo/logo_jamified-webshop.png';
import {useEffect, useState} from 'react';

const Navbar = () => {

  return (
      <header className={navbar}>
        <div className={websiteLogo}><Image src={logoPic}
                                            alt='Jamified Webshop'
                                            height='100px'
                                            width='100px'
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
            <a href='/profile'>
              <button>Profile</button>
            </a>
          </div>
          <div className={navSection}>
            <Link href='/about'>
              <button>About</button>
            </Link>
          </div>
        </nav>
        <div className={login}>
          <a href='/auth'>
            <button>Login</button>
          </a>
        </div>
      </header>
  );
};

export default Navbar;