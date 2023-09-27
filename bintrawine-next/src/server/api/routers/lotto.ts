import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import z, { unknown } from 'zod'
import { LottoCreateArgsSchema, LottoIncludeSchema, UserUpdateWithWhereUniqueWithoutCollaboratorLottiInputSchema } from 'prisma/generated/zod';

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

    getAllLotti: publicProcedure
        .query(async ({ input, ctx }) => {
            const lotti = await ctx.prisma.lotto.findMany({
                include: {
                    collaborators: true
                }
            })

            const lottiCollaborators = lotti.map((lotto) => {
                return {
                    lottoId: lotto.id,
                    numberOfCollaborators: lotto.collaborators.length + 1
                }
            })

            return lottiCollaborators
        }),

    addPerson: publicProcedure
        .input(z.object({
            lottoId: z.number(),
            user: z.number()
        }))
        .mutation(async ({ input, ctx }) => {
            const addPerson = ctx.prisma.lotto.update({
                where: {
                    id: input.lottoId
                },
                data: {
                    collaborators: {
                        connect: {
                            id: input.user
                        }
                    }
                }
            })
            return addPerson
        }),

    deletePerson: publicProcedure
        .input(z.object({
            lottoId: z.number(),
            user: z.number()
        }))
        .mutation(async ({ input, ctx }) => {
            const addPerson = ctx.prisma.lotto.update({
                where: {
                    id: input.lottoId
                },
                data: {
                    collaborators: {
                        disconnect: {
                            id: input.user
                        }
                    }
                }
            })
            return addPerson
        }),
});