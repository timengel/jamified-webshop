import {UserProfile} from '@clerk/nextjs';

const UserProfilePage = () => {
  return (
      <UserProfile path='/user' routing='path'/>
  )
}

export default UserProfilePage;