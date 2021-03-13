import Header from '../components/Header';

const Account = () => {
  return (
    <div>
      <Header />
      <h1>Account</h1>
      <p>On this page, you will be able to view & change acct info</p>
      <ul>
        <li>email</li>
        <li>preferences re: tracking</li>
        <li>Whether acct is publically available</li>
      </ul>
    </div>
  );
};

export default Account;
