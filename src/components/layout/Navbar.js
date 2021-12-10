import {
  loginBtn,
  loginContainer,
  logoText,
  navbar,
  navSection,
  navSectionContainer,
  userButton,
  logoContainer,
} from './Navbar.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import logoPic from '../../../public/logo_jamified-webshop.png';
import {SignedIn, SignedOut, UserButton} from '@clerk/nextjs';
import React from 'react';
import {animatedBtnNavy} from '../../styles/_globals.module.scss'

const Navbar = () => {

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
            <Link href='/cart'>
              <button>Cart</button>
            </Link>
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
            <Link href='/sign-in'>
              <button className={`${animatedBtnNavy} ${loginBtn}`}>Sign in
              </button>
            </Link>
          </SignedOut>
        </div>
      </header>
  );
};

export default Navbar;