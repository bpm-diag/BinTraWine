import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import z from 'zod'
import { LottoCreateArgsSchema, UserCreateArgsSchema } from 'prisma/generated/zod';

export const lottoRouter = createTRPCRouter({
    create: publicProcedure
        .input(LottoCreateArgsSchema)
        .mutation(async ({ input, ctx }) => {
            const newLotto = await ctx.prisma.lotto.create(input);

            return newLotto
        }),

    getLotto: publicProcedure
        .input(z.number())
        .query(async ({ input, ctx }) => {
            const lotto = await ctx.prisma.lotto.findUnique({
                where: {
                    id: input
                },
                include: {
                    creator: true,
                    collaborators: true
                }
            })
            return lotto
        }),

    addPerson: publicProcedure
        .input(z.object({
            lottoId: z.number(),
            user: z.number()
        }))
        .mutation(async ({ input, ctx }) => {
            const currentLotto = await ctx.prisma.lotto.findUnique({
                where: {
                    id: input.lottoId
                },
                include: {
                    collaborators: true
                }
            })

            const userCollaborator = await ctx.prisma.user.findUnique({
                where: {
                    id: input.user
                }
            })

            const collaborators = currentLotto?.collaborators.map(collaborator => collaborator)
            if (!collaborators && !userCollaborator) return

            collaborators!.push(userCollaborator!)

            const addPerson = ctx.prisma.lotto.update({
                where: {
                    id: input.lottoId
                },
                data: {
                    collaborators: {
                        set: collaborators
                    }
                }
            })
            return addPerson
        })
});