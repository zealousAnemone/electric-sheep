import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(req, res) {
  const { dream_content, tags } = req.body;
  const result = await prisma.dreams.create({
    data: {
      dream_content,
      tags,
    },
  });
  res.json(result);
}
