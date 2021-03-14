import { useSession } from 'next-auth/client';
import Header from '../components/Header';

const Account = () => {
  const [session, loading] = useSession();
  return (
    <div>
      <Header />
      <h1>Account</h1>
      <p>On this page, you will be able to view & change acct info</p>
      {session && <p>{session.user.email}</p>}
    </div>
  );
};

export default Account;
