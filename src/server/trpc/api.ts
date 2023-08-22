import { AppRouter } from "@/server/routes"
import { createTRPCReact } from "@trpc/react-query"

// for call api routes on client
export const api = createTRPCReact<AppRouter>({})
