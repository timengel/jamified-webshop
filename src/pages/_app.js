import React from 'react';
import Layout from '../components/layout/Layout';
import '../styles/Colors.scss';
import '../styles/App.scss';
import Head from 'next/head';
import {ClerkProvider, SignedIn, SignedOut} from '@clerk/nextjs';
import Link from 'next/link';
import {animatedBtnNavy} from '../styles/_globals.module.scss';
import {PUBLIC_PAGES} from '../../lib/constants';
import {useRouter} from 'next/router';

const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API;

const JamifiedWebshopApp = ({Component, pageProps}) => {

  const router = useRouter();

  return (
      <ClerkProvider
          frontendApi={clerkFrontendApi}>
        {
          PUBLIC_PAGES.includes(router.pathname)
              ? (
                  <>
                    <Head>
                      <title>Jamified Webshop</title>
                      <link rel='icon' href='/favicon_jamified-webshop.ico'/>
                      <link rel='shortcut icon'
                            href='/favicon_jamified-webshop.ico'/>
                    </Head>
                    <Layout>
                      <Component {...pageProps}/>
                    </Layout>
                  </>
              )
              : (
                  /**
                   * The SignedIn and SignedOut components are used to control rendering
                   * depending on whether or not a visitor is signed in.
                   */
                  <>
                    <Head>
                      <title>Jamified Webshop</title>
                      <link rel='icon' href='/favicon_jamified-webshop.ico'/>
                      <link rel='shortcut icon'
                            href='/favicon_jamified-webshop.ico'/>
                    </Head>
                    <SignedIn>
                      <Layout>
                        <Component {...pageProps}/>
                      </Layout>
                    </SignedIn>
                    <SignedOut>
                      <Layout>
                        <div className='signInNavigationContainer'>
                          <p>
                            Please{' '}
                            <Link href='/sign-in'>
                              <button className={animatedBtnNavy}>Sign In
                              </button>
                            </Link>{' '}
                            to access this page.
                          </p>
                        </div>
                      </Layout>
                    </SignedOut>
                  </>
              )
        }
      </ClerkProvider>
  );
};

export default JamifiedWebshopApp;
