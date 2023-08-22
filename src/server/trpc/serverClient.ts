import { appRouter } from "@/server/routes"
import { httpBatchLink } from "@trpc/client"

// api caller for RSC & SA
export const serverClient = appRouter.createCaller({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/api/trpc",
    }),
  ],
})
