import { initTRPC } from "@trpc/server";
import { httpBatchLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";

const t = initTRPC.create();
export const router = t.router;
export const publicProcedure = t.procedure;

// backend routes -> api/trpc/[...]
export const appRouter = router({
  getTodos: publicProcedure.query(async () => {
    return [];
  }),
});

// type routes with intractions
export type AppRouter = typeof appRouter;

// api caller for RSC & SA
export const serverClient = appRouter.createCaller({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/api/trpc",
    }),
  ],
});

export const api = createTRPCReact<AppRouter>({});
