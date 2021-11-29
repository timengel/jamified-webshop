import Link from 'next/link';
import {home, homeHighlight} from '../styles/Home.module.scss';

const Home = () => {
  return (
      <div className={home}>
        <h1>
          Welcome to the <span
            className={homeHighlight}>Jamified Webshop!</span>
        </h1>
        <p>
          Please visit the <Link href='/products'>Products Page</Link>.
        </p>
      </div>
  );
}

export default Home;
