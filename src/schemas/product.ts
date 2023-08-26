import { z } from "zod"

export const detailsSchema = z.object({
  id: z.string(),
  title: z.string().trim(),
  price: z.union([z.string(), z.number()]),
  category: z.string().trim(),
  inventory: z.union([z.string(), z.number()]),
})

export type TDetailsSchema = z.infer<typeof detailsSchema>
