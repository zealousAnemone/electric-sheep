import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

export default function Home() {
  let loggedIn = false; // for testing
  return (
    <div className={styles.container}>
      <Head>
        <title>Electric Sheep</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header loggedIn={loggedIn} />
    </div>
  );
}
