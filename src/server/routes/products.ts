import { publicProcedure, router } from "@/server/trpc/trpc"

export const productsRouter = router({
  getProducts: publicProcedure.query(async () => {
    return ["products"]
  }),
})
