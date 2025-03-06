import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export default prisma;

// this stops the rerendering of connection whenever there is a change in dev mode. basically stops hot module reloading from generating multiple db connections
