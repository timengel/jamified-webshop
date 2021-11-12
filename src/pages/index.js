import Link from 'next/link';
import {home} from './Home.module.scss';
import LoginForm from '../components/login/LoginForm';

function Home() {
  return (
      <div className={home}>
        <h1>
          Welcome to the Jamified Webshop!
        </h1>
        <LoginForm/>
        <p>
          Please visit the <Link href='/products'>Products Page</Link>.
        </p>
      </div>
  );
}

export default Home;
