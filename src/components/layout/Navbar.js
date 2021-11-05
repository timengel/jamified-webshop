import classes from './Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {

  return (
      <header className={classes.navBar}>
        <div className={classes.logo}>Jamified Webshop</div>
        <nav>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/products'>Product List</Link>
            </li>
          </ul>
        </nav>
      </header>
  );
};

export default Navbar;