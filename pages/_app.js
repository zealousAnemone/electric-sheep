import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'next-auth/client';

function MyApp({ Component, pageProps }) {
  const { session } = pageProps;
  return (
    <Provider options={{ site: process.env.SITE }} session={session}>
      <Component {...pageProps} session={session} />
    </Provider>
  );
}

export default MyApp;
