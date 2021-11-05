import Head from 'next/head';
import Link from 'next/link';

function Home() {
  return (
      <div className='container'>
        <Head>
          <title>Create Next App</title>
          <link rel='icon' href='/favicon-t.svg'/>
        </Head>

        <main>
          <h1>
            Welcome to the Jamified Webshop!
          </h1>

          <p>
            Please visit the <Link href='/products'>Products Page</Link>.
          </p>
        </main>

        <footer>
          <a
              href='https://timengel.me/'
              target='_blank'
              rel='noopener noreferrer'
          >
            Powered by{' '}
            <img src='/vercel.svg' alt='Tim'/>
          </a>
        </footer>
      </div>
  );
}

export default Home;
