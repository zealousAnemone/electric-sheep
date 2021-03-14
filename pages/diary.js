import { PrismaClient } from '@prisma/client';
import { useSession } from 'next-auth';
import Header from '../components/Header';

const Diary = ({ entries }) => {
  return (
    <>
      <Header />
      <h1>Diary</h1>
      <ul>
        {entries.map((entry) => (
          <li>{entry.dream_content}</li>
        ))}
      </ul>
    </>
  );
};

const prisma = new PrismaClient();
export const getStaticProps = async () => {
  const [session, loading] = useSession();
  const entries = await prisma.dreams.findMany({
    where: { user_id: session.user.user_id },
    select: {
      dream_content: true,
      tags: true,
      date: true,
      title: true,
    },
  });
  return {
    props: {
      entries,
    },
  };
};

export default Diary;
