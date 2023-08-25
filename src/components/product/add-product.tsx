"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { api } from "@/server/trpc/api"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"

const addProductSchema = z.object({
  name: z.string().trim().min(3),
})

export function AddProduct() {
  const [open, setOpen] = useState(false)
  const apiContext = api.useContext()
  const form = useForm<z.infer<typeof addProductSchema>>({
    resolver: zodResolver(addProductSchema),
  })
  const addProduct = api.products.addProduct.useMutation({
    onSettled: () => {
      apiContext.products.invalidate()
    },
  })
  const router = useRouter()
  const onSubmit = async (data: z.infer<typeof addProductSchema>) => {
    const { id } = await addProduct.mutateAsync(data.name)
    router.push(`/dashboard/products/${id}`)
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Icons.add_product className="mr-2 h-4 w-4" />
          New Product
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>Create New Product</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              size={"sm"}
              className="w-fit"
              disabled={addProduct.isLoading}
            >
              Create
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
