import { prisma } from "lib/prisma";
export const resolvers = {
  Query: {
    links: async (_parent,_args,ctx) => {
      return await prisma.link.findMany();
    },
  },
};
