import { withAuth } from "../components/shared/HOC/withAuth";
import Profile from "../components/authentication/Profile";
import Head from "next/head";
function ProfilePage() {
  return (
    <>
      <Head>
        <title>Simnoor Yazdan | Profile</title>
      </Head>
      <Profile />
    </>
  );
}

export default withAuth(ProfilePage);
