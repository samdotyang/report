import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') global.prisma = prisma

// let prisma

// if (process.env.NODE_ENV === 'production') {
//   prisma = new PrismaClient()
// } else {
//   // Ensure the prisma instance is re-used during hot-reloading
//   // Otherwise, a new client will be created on every reload
//   globalThis.prisma = globalThis.prisma || new PrismaClient()
//   prisma = globalThis.prisma
// }

// export default prisma
