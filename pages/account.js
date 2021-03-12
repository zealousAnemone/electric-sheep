import Header from '../components/Header';
import { getSession } from 'next-auth/client';

async function getUser() {
  const session = await getSession();
  return session;
}
const Account = () => {
  const user = getUser();
  return (
    <div>
      <Header />
      <h1>Account</h1>
      <p>On this page, you will be able to view & change acct info</p>
      <ul>
        <li>{user.email}</li>
        <li>preferences re: tracking</li>
        <li>Whether acct is publically available</li>
      </ul>
    </div>
  );
};

export default Account;
