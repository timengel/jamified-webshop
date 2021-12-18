import {
  SignedIn,
  SignedOut,
  UserProfile,
  RedirectToSignIn
} from '@clerk/nextjs';
import Profile from '../../components/user/Profile';

const UserProfilePage = () => {
  return (
      <>
        <SignedIn>
          <Profile>
            <UserProfile path='/user' routing='path'/>
          </Profile>
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn/>
        </SignedOut>
      </>
  )
}

export default UserProfilePage;