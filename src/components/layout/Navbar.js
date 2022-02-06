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
import Spinner from './Spinner';

const Navbar = () => {
  const [didHydrate, setDidHydrate] = React.useState(false);
  React.useEffect(() => {
    setTimeout(function () {
      setDidHydrate(true);
      console.log('(DELAY: 1500ms) Hydrated: Navbar');
    }, 1500);
  }, []);

  const [state, setState] = useState(false);
  const rerender = () => {
    setState(!state);
  }

  return (
      <React.Suspense fallback={<Spinner/>}>
        <header className={navbar}
                style={{
                  background: didHydrate
                      ? "#4beaa9"
                      : "#ff788c",
                }}>
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
              {/*<Link href='/'>*/}
              <button>Home</button>
              {/*</Link>*/}
            </div>
            <div className={navSection}>
              {/*<Link href='/products'>*/}
              <button
                  onClick={() => console.log('Click: Hydrated Navbar')}>Products
              </button>
              {/*</Link>*/}
            </div>
            <div className={navSection}>
              {/*<Link href='/user'>*/}
              <button>Profile</button>
              {/*</Link>*/}
            </div>
            <div className={navSection}>
              {/*<Link href='/cart'*/}
              {/*      prefetch='false'>*/}
              <button onClick={rerender}>Cart</button>
              {/*</Link>*/}
            </div>
            <div className={navSection}>
              {/*<Link href='/about'>*/}
              <button>About</button>
              {/*</Link>*/}
            </div>
          </nav>
        </header>
      </React.Suspense>
  );
};

export default Navbar;