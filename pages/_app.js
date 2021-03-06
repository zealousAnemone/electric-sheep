import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import UserContext from '../components/UserContext';

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
