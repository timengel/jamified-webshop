import React from 'react';
import Layout from '../components/layout/Layout';
import '../styles/Colors.scss';
import '../styles/App.scss';
import Head from 'next/head';
import {ClerkProvider, SignedIn, SignedOut} from '@clerk/nextjs';
import {useRouter} from 'next/router';
import Link from 'next/link';

const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API;

const publicPages = [
  '/',
  '/products',
  '/sign-in/[[...index]]',
  '/sign-up/[[...index]]'
];

const JamifiedWebshopApp = ({Component, pageProps}) => {

  const router = useRouter();

  /**
   * If the current route is listed as public, render it directly.
   * Otherwise, use Clerk to require authentication.
   */
  return (
      <ClerkProvider
          frontendApi={clerkFrontendApi}>
        {
          publicPages.includes(router.pathname)
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
                        <p>
                          Please{' '}
                          <Link href='/sign-in'>
                            <a>sign in</a>
                          </Link>{' '}
                          to access this page.
                        </p>
                      </Layout>
                    </SignedOut>
                  </>
              )
        }
      </ClerkProvider>
  );
};

export default JamifiedWebshopApp;
