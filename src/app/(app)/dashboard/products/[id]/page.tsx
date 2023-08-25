import { serverClient } from "@/server/trpc/serverClient"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductDetailsForm } from "@/components/forms/product-details-form"
import { Icons } from "@/components/icons"
import { PageHeader } from "@/components/page-header"

export default async function ProductPage({
  params,
}: {
  params: { id: string }
}) {
  const product = await serverClient.products.getProduct(params.id)
  return (
    <div>
      <PageHeader title={product?.title!} description="" />
      <Tabs defaultValue="details" className="max-w-md">
        <TabsList>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="media">Media</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="details">
          <ProductDetailsForm {...product} />
        </TabsContent>
        <TabsContent value="media">
          <Dialog>
            <DialogTrigger>
              <Button size={"sm"} variant={"outline"} className="mb-2">
                <Icons.upload className="mr-2 h-4 w-4" />
                Upload Image
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Upload Your Image Product</DialogTitle>
              </DialogHeader>
              <MediaCard />
            </DialogContent>
          </Dialog>
          <div className="flex items-center gap-2">
            <div className="h-20 w-20 rounded-md bg-secondary"></div>
            <div className="h-20 w-20 rounded-md bg-secondary"></div>
            <div className="h-20 w-20 rounded-md bg-secondary"></div>
          </div>
        </TabsContent>
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Delete Product</CardTitle>
              <CardDescription>
                are you sure for delete this product?
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant={"destructive"}>Delete Product</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

const MediaCard = () => (
  <div className="flex h-48 cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-dashed text-center text-sm text-muted-foreground shadow-sm hover:border-blue-400">
    <Icons.image className="text-foreground" />
    <p>
      Drag your Product Image <br />
      MaxSize: 4MB
    </p>
  </div>
)
