import { initTRPC } from "@trpc/server"

import { getUserSession } from "@/lib/session"

const t = initTRPC.create()
// user logged middleware for prodcted routes
const isAuthed = t.middleware(async ({ next }) => {
  const user = await getUserSession()
  const id = user ? user.id : ""
  return next({
    ctx: {
      id: id as string,
    },
  })
})

export const router = t.router
export const publicProcedure = t.procedure
export const middleware = t.middleware
export const protectedProcedure = t.procedure.use(isAuthed)
