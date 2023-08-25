import { protectedProcedure, publicProcedure, router } from "@/server/trpc/trpc"
import { z } from "zod"

import { db } from "@/lib/db"

export const productsRouter = router({
  getProduct: protectedProcedure.input(z.string()).query(async ({ input }) => {
    return await db.product.findFirst({ where: { id: input } })
  }),
  getProducts: publicProcedure.query(async () => {
    return (await db.product.findMany()) as TProduct[]
  }),
  addProduct: protectedProcedure
    .input(z.string())
    .mutation(async ({ input: title, ctx }) => {
      return await db.product.create({ data: { title, userId: ctx.id } })
    }),
  updateProduct: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        title: z.string().trim(),
        price: z.string().trim(),
        category: z.string().trim(),
        description: z.string().trim(),
      })
    )
    .mutation(async ({ input }) => {
      return await db.product.update({
        where: { id: input.id },
        data: { ...input, price: parseFloat(input.price) },
      })
    }),
})
