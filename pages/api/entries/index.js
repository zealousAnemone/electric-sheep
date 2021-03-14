import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(req, res) {
  const { dream, tags, userId } = req.body;
  const result = await prisma.dreams.create({
    data: {
      dream_content: dream,
      tags: tags,
      user_id: userId,
    },
  });
  res.json(result);
}
