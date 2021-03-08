import { PrismaClient } from '@prisma/client';
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
  const entries = await prisma.dreams.findMany({
    where: { user_id: 1 },
    select: {
      dream_content: true,
    },
  });
  return {
    props: {
      entries,
    },
  };
};

export default Diary;
