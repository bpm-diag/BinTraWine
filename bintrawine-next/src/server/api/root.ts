import { createTRPCRouter } from "@/server/api/trpc";
import { userRouter } from "@/server/api/routers/user";

import { agronomoRouter } from "@/server/api/routers/agronomo";
import { viticoltoreRouter } from "@/server/api/routers/viticoltore";
import { produttoreRouter } from "@/server/api/routers/produttore";
import { imbottigliatoreRouter } from "@/server/api/routers/imbottigliatore";
import { distributoreRouter } from "@/server/api/routers/distributore";
import { rivenditoreRouter } from "@/server/api/routers/rivenditore";
import { enteCertificatoreRouter } from "@/server/api/routers/enteCertificatore";

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
  enteCertificatoreRouter: enteCertificatoreRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
