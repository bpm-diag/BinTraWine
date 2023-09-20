import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { UserCreateArgsSchema, UserFindManyArgsSchema } from 'prisma/generated/zod';
import bcrypt from 'bcrypt';

export const userRouter = createTRPCRouter({
    create: publicProcedure
        .input(UserCreateArgsSchema)
        .mutation(async ({ input, ctx }) => {
            const hasedPassword = await bcrypt.hash(input.data.hashedPassword, 10);
            input.data.hashedPassword = hasedPassword;

            const user = await ctx.prisma.user.create(input);

            return user;
        }),

    getAllUsers: publicProcedure
        .input(UserFindManyArgsSchema)
        .query(async ({ input, ctx }) => {
            const users = await ctx.prisma.user.findMany(input);

            return users;
        })
});

/*
const createUser = api.users.getAllUsers.useQuery({
}, {
    onSuccess: (data) => {
        console.log('success', data);
    },
    select: (data) => {
        return data;
    }
});
*/