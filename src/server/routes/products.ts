import { protectedProcedure, publicProcedure, router } from "@/server/trpc/trpc"
import { z } from "zod"

import { db } from "@/lib/db"

export const productsRouter = router({
  getProducts: publicProcedure.query(async () => {
    return (await db.product.findMany()) as TProduct[]
  }),
  addProduct: protectedProcedure
    .input(z.string())
    .mutation(async ({ input: title, ctx }) => {
      return await db.product.create({ data: { title, userId: ctx.id } })
    }),
})
