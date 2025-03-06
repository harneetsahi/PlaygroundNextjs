import { PrismaClient } from "@prisma/client";

const prisma = globalThis.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;

export default prisma;

// this stops the rerendering of connection whenever there is a change in dev mode. basically stops hot module reloading from generating multiple db connections
