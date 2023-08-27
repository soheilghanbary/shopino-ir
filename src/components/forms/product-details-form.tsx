"use client"

import { detailsSchema, TDetailsSchema } from "@/schemas/product"
import { api } from "@/server/trpc/api"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { Icons } from "../icons"

export function ProductDetailsForm(initialData: any) {
  const getProduct = api.products.getProduct.useQuery(initialData.id, {
    initialData,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  })
  return (
    <Card className="max-w-md ">
      <CardHeader>
        <CardTitle>Product Details</CardTitle>
      </CardHeader>
      <CardContent>
        <DetailsForm {...getProduct.data} />
      </CardContent>
    </Card>
  )
}

const DetailsForm = (initial: any) => {
  const form = useForm<TDetailsSchema>({
    defaultValues: initial,
    resolver: zodResolver(detailsSchema),
  })
  const apiContext = api.useContext()
  const updateProduct = api.products.updateProduct.useMutation()
  const onSubmit = async (values: TDetailsSchema) => {
    await updateProduct.mutateAsync(values)
    toast.success("Product Updated!")
    apiContext.products.getProduct.invalidate()
  }
  return (
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
          name="inventory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Inventory</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={updateProduct.isLoading}>
          {updateProduct.isLoading ? (
            <Icons.loader className="mr-2 h-4 w-4 animate-spin" />
          ) : null}
          Update
        </Button>
      </form>
    </Form>
  )
}
