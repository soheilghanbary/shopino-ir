import { detailsSchema } from "@/schemas/product"
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
    .input(detailsSchema)
    .mutation(async ({ input }) => {
      return await db.product.update({
        where: { id: input.id },
        data: {
          ...input,
          price: parseFloat(input.price.toString()),
          inventory: parseFloat(input.inventory.toString()),
        },
      })
    }),
})
