"use client"

import { useParams, useRouter } from "next/navigation"
import { api } from "@/server/trpc/api"
import { useQueryClient } from "@tanstack/react-query"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function ProductSettingsTab() {
  const params = useParams() as { id: string }
  const apiContext = api.useContext()
  const queryClient = useQueryClient()
  const deleteProduct = api.products.deleteProduct.useMutation({
    onSettled: (data) => {},
  })
  const router = useRouter()
  return (
    <Card>
      <CardHeader>
        <CardTitle>Delete Product</CardTitle>
        <CardDescription>are you sure for delete this product?</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button
          variant={"destructive"}
          disabled={deleteProduct.isLoading}
          onClick={async () => {
            // console.log(queryClient.getQueryData(["products.getProducts"]))
            // const postListKey = getQueryKey(
            //   api.products.getProducts,
            //   undefined,
            //   "query"
            // )
            // await deleteProduct.mutate(params.id)
            // toast("Product Has Been Deleted!")
            // router.push("/dashboard/products")
          }}
        >
          Delete Product
        </Button>
      </CardFooter>
    </Card>
  )
}
