import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import z from 'zod'
import { LottoCreateArgsSchema } from 'prisma/generated/zod';

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
                    collaborators: {
                        include: {
                            user: true
                        }
                    }
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
            const newAddPerson = ctx.prisma.lottiOnUsers.create({
                data: {
                    lottoId: input.lottoId,
                    userId: input.user
                }
            })
            /*const addPerson = ctx.prisma.lotto.update({
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
            })*/
            return newAddPerson
        }),

    deletePerson: publicProcedure
        .input(z.number())
        .mutation(async ({ input, ctx }) => {
            const deletePerson = ctx.prisma.lottiOnUsers.delete({
                where: {
                    id: input
                }
            })
            /*const addPerson = ctx.prisma.lotto.update({
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
            })*/
            return deletePerson
        }),
});