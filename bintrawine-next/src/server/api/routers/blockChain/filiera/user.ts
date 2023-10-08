import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { UserCreateArgsSchema, UserFindManyArgsSchema } from 'prisma/generated/zod';

export const userRouter = createTRPCRouter({
    create: publicProcedure
        .input(UserCreateArgsSchema)
        .mutation(async ({ input, ctx }) => {

            const user = await ctx.prisma.user.create(input);

            return user;
        }),

    getAllUsers: publicProcedure
        .query(async ({ input, ctx }) => {
            const users = await ctx.prisma.user.findMany();

            return users;
        })
});