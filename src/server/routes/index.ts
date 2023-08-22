import { router } from "@/server/trpc/trpc"

import { productsRouter } from "./products"

export const appRouter = router({
  products: productsRouter,
})

export type AppRouter = typeof appRouter
