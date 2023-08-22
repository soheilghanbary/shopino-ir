import { publicProcedure, router } from "@/server/trpc/trpc"

import { db } from "@/lib/db"

export const productsRouter = router({
  getProducts: publicProcedure.query(async () => {
    return await db.product.findMany()
  }),
})
