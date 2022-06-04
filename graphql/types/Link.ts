import { nonNull, objectType, stringArg, extendType } from 'nexus';

export const Link = objectType({
  name: 'Link',
  definition(t) {
    t.string('id');
    t.int('index');
    t.string('title');
    t.string('url');
    t.string('description');
    t.string('imageUrl');
    t.string('category');
  },
});

export const LinksQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('links',{
      type:"Link",
      resolve(_parent, args, ctx){
        return ctx.prisma.link.findMany()
      }
    })
  },
});
