import { z } from "zod"

export const updateUserSchema = z.object({
  name: z.string().trim().nonempty(),
  website: z.string().trim(),
  bio: z.string().min(5).trim().nonempty(),
})
