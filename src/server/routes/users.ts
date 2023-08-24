import { updateUserSchema } from "@/schemas/user-schema"
import { protectedProcedure, publicProcedure, router } from "@/server/trpc/trpc"

import { db } from "@/lib/db"

export const usersRouter = router({
  getUser: protectedProcedure.query(async ({ ctx }) => {
    return await db.user.findFirst({ where: { id: ctx.id } })
  }),
  updateUser: protectedProcedure
    .input(updateUserSchema)
    .mutation(async ({ ctx, input }) => {
      return await db.user.update({ where: { id: ctx.id }, data: input })
    }),
})
