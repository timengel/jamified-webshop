import {
  logoText,
  navbar,
  navSection,
  navSectionContainer,
  loginContainer,
  userButton,
  websiteLogo,
} from './Navbar.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import logoPic from '../../../public/logo/logo_jamified-webshop.png';
import {SignedIn, SignedOut, UserButton} from '@clerk/nextjs';
import React from 'react';

const Navbar = () => {

  return (
      <header className={navbar}>
        <div className={websiteLogo}><Image src={logoPic}
                                            alt='Jamified Webshop'
                                            height='70px'
                                            width='70px'
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
            <a href='/user'>
              <button>Profile</button>
            </a>
          </div>
          <div className={navSection}>
            <Link href='/about'>
              <button>About</button>
            </Link>
          </div>
        </nav>
        <div className={loginContainer}>
          <SignedIn>
            <div className={userButton}>
              <UserButton/>
            </div>
          </SignedIn>
          <SignedOut>
            <Link href="/sign-in">
              <button>Sign in</button>
            </Link>
          </SignedOut>
        </div>
      </header>
  );
};

export default Navbar;