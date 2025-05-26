import { PrismaClient } from '@/generated/prisma';

const prismaClientSingleton = () => {
  return new PrismaClient();
};

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || prismaClientSingleton();

export default prisma;
