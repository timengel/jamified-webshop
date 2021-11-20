import Link from 'next/link';
import {home} from '../styles/Home.module.scss';

function Home() {
  return (
      <div className={home}>
        <h1>
          Welcome to the Jamified Webshop!
        </h1>
        <p>
          Please visit the <Link href='/products'>Products Page</Link>.
        </p>
      </div>
  );
}

export default Home;
