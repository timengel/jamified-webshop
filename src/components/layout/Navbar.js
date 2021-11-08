import {
  navBar,
  websiteLogo,
  navCell,
  navCellContainer,
  logoText,
} from './Navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logoPic from '../../../public/png/logo_jamified-webshop.png';

const Navbar = () => {

  return (
      <header className={navBar}>
        <div className={websiteLogo}><Image src={logoPic}
                                            alt='Jamified Webshop'
                                            height='100px'
                                            width='100px'
                                            placeholder='blur'/><span
            className={logoText}>Jamified<br/>Webshop</span>
        </div>
        <nav className={navCellContainer}>
          <div className={navCell}>
            <Link href='/'>
              <button>Home</button>
            </Link>
          </div>
          <div className={navCell}>
            <Link href='/products'>
              <button>Products</button>
            </Link>
          </div>
        </nav>
      </header>
  );
};

export default Navbar;