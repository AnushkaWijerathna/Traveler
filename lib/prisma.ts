//Create type saftey for different tables, models, projects
import { PrismaClient } from "@prisma/client";

//for type definition for prisma client

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
