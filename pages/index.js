import { useContext } from 'react';
import Header from '../components/Header';
import UserContext from '../components/UserContext';

export default function Home() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <Header />
      <h1>{user}</h1>
    </div>
  );
}
