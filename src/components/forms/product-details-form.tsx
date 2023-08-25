"use client"

import { api } from "@/server/trpc/api"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { Button } from "../ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"

const schema = z.object({
  title: z.string().trim(),
  price: z.string().trim(),
  category: z.string().trim(),
  description: z.string().trim().min(5),
})
export function ProductDetailsForm(initial: any) {
  const form = useForm<z.infer<typeof schema>>({
    defaultValues: initial,
    resolver: zodResolver(schema),
  })
  const updateProduct = api.products.updateProduct.useMutation({
    onSettled() {
      toast.success("Product Updated!")
    },
  })
  const onSubmit = (data: z.infer<typeof schema>) =>
    updateProduct.mutate({ id: initial.id, ...data })
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-bold">Update Details</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button>Update</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
