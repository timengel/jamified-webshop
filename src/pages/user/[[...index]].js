import {UserProfile} from '@clerk/nextjs';
import Profile from '../../components/user/Profile';

const UserProfilePage = () => {
  return (
      <Profile>
        <UserProfile path='/user' routing='path'/>
      </Profile>
  )
}

export default UserProfilePage;