import React from 'react';
import {useUser} from '@auth0/nextjs-auth0';
import {withPageAuthRequired} from '@auth0/nextjs-auth0';
import {profileJson} from './profile.module.scss'


const User = () => {
  const {user, isLoading, error} = useUser();
  return (
      <>
        {isLoading && <p>Loading profile...</p>}
        {user ?
            (
                <>
                  <p>{user.name}</p>
                  <a href='/api/auth/logout'>
                    Logout
                  </a>
                  <pre className={profileJson}
                       data-testid="profile">{JSON.stringify(user, null, 2)}</pre>
                </>
            )
            : (
                <>
                  <p>Please login!</p>
                  <a href='/api/auth/login'>
                    Login
                  </a>
                </>
            )
        }
      </>
  );
};

export default withPageAuthRequired(User);

