import { initTRPC } from "@trpc/server"

import { getUserSession } from "@/lib/session"

const t = initTRPC.create()

type TUser = {
  id: string
}

// user logged middleware for prodcted routes
const isAuthed = t.middleware(async ({ next }) => {
  const user = await getUserSession()
  return next({
    ctx: user as TUser,
  })
})

export const router = t.router
export const publicProcedure = t.procedure
export const middleware = t.middleware
export const protectedProcedure = t.procedure.use(isAuthed)
