import { router } from "@/server/trpc/trpc"

import { productsRouter } from "./products"
import { usersRouter } from "./users"

export const appRouter = router({
  products: productsRouter,
  users: usersRouter,
})

export type AppRouter = typeof appRouter
