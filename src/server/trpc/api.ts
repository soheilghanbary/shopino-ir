import { AppRouter } from "@/server/trpc/root"
import { createTRPCReact } from "@trpc/react-query"

// for call api routes on client
export const api = createTRPCReact<AppRouter>({})
