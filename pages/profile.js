import { withAuth } from "../components/shared/HOC/withAuth";
import Profile from "../components/authentication/Profile";
function ProfilePage() {
  return <Profile />;
}

export default withAuth(ProfilePage);
