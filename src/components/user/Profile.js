import React from 'react';
import {profileContainer} from './Profile.module.scss'

const Profile = ({children}) => {
  return (
      <div className={profileContainer}>
        {
          children
        }
      </div>
  );
};

export default Profile;
