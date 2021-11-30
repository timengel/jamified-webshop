import Link from 'next/link';
import {
  highlight,
  home,
  logo,
  navigation,
  title,
} from '../styles/Home.module.scss';
import logoPic from '../../public/logo_jamified-webshop.png';
import Image from 'next/image';
import {animatedBtnSalmon} from '../styles/_globals.module.scss'

const Home = () => {
  return (
      <div className={home}>
        <div className={title}>
          Welcome to the
          <div className={logo}>
            <Image src={logoPic}
                   alt='Jamified Webshop'
                   height='120px'
                   width='120px'
                   layout='fixed'
                   placeholder='blur'/><span
              className={highlight}>Jamified Webshop</span>
          </div>
        </div>
        <div className={navigation}>
          Please visit the <Link href='/products'>
          <button className={animatedBtnSalmon}>Products Page</button>
        </Link>
        </div>
      </div>
  );
}

export default Home;
