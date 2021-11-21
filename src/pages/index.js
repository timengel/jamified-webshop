import Link from 'next/link';
import {home} from '../styles/Home.module.scss';
import {fetchApi} from '../../lib/api';

const Home = ({global}) => {
  return (
      <div className={home}>
        <h1>
          Welcome to the {global.siteName}!
        </h1>
        <p>
          Please visit the <Link href='/products'>Products Page</Link>.
        </p>
      </div>
  );
}

export async function getStaticProps() {
  const global = await fetchApi('/global');
  // const faviconUrl = getStrapiMedia(global.favicon);
  return {
    props: {
      global: global,
    }
  };
}

export default Home;
