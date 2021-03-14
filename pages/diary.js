import { PrismaClient } from '@prisma/client';
// import { useSession } from 'next-auth';
import Header from '../components/Header';

const Diary = ({ entries }) => {
  return (
    <>
      <Header />
      <h1>Diary</h1>
      {entries.map((entry) => (
        <div>
          <h3>{entry.title}</h3>
          <p>{entry.dream_content}</p>
        </div>
      ))}
    </>
  );
};

const prisma = new PrismaClient();
export const getStaticProps = async () => {
  // const [session, loading] = useSession();
  const entries = await prisma.dreams.findMany({
    where: { user_id: 1 },
    select: {
      dream_content: true,
      tags: true,
      // date: true, (Not serializable. Need to fix this)
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
