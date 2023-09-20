import { createTRPCRouter } from "@/server/api/trpc";
import { userRouter } from "@/server/api/routers/blockChain/filiera/user";

import { agronomoRouter } from "@/server/api/routers/blockChain/filiera/agronomo";
import { viticoltoreRouter } from "@/server/api/routers/blockChain/filiera/viticoltore";
import { produttoreRouter } from "@/server/api/routers/blockChain/filiera/produttore";
import { imbottigliatoreRouter } from "@/server/api/routers/blockChain/filiera/imbottigliatore";
import { distributoreRouter } from "@/server/api/routers/blockChain/filiera/distributore";
import { rivenditoreRouter } from "@/server/api/routers/blockChain/filiera/rivenditore";
import { enteCertificatoreRouter } from "@/server/api/routers/blockChain/filiera/enteCertificatore";
import { blockChainRouter } from "@/server/api/routers/blockChain/blockChain";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  users: userRouter,
  agronomo: agronomoRouter,
  viticoltore: viticoltoreRouter,
  produttore: produttoreRouter,
  imbottigliatore: imbottigliatoreRouter,
  distributore: distributoreRouter,
  rivenditore: rivenditoreRouter,
  enteCertificatore: enteCertificatoreRouter,
  blockChainRouter: blockChainRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
