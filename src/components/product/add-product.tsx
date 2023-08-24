"use client"

import { api } from "@/server/trpc/api"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"

export function AddProduct() {
  const apiContext = api.useContext()
  const addProduct = api.products.addProduct.useMutation({
    onSettled: () => {
      apiContext.products.invalidate()
    },
  })
  return (
    <Dialog>
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
        <div className="mb-2 space-y-2">
          <Label>Name</Label>
          <Input type="text" />
        </div>
        <Button
          onClick={() => addProduct.mutate("tony")}
          size={"sm"}
          className="w-fit"
        >
          Create
        </Button>
      </DialogContent>
    </Dialog>
  )
}
