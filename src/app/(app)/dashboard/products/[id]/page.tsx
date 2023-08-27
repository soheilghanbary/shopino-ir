import { serverClient } from "@/server/trpc/serverClient"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductDetailsForm } from "@/components/forms/product-details-form"
import { ProductMediaTab } from "@/components/product/product-media-tab"
import { ProductSettingsTab } from "@/components/product/product-settings-tab"
import { SingleProductHeader } from "@/components/product/single-product-header"

export default async function ProductPage({
  params,
}: {
  params: { id: string }
}) {
  const product = await serverClient.products.getProduct(params.id)
  return (
    <div>
      <SingleProductHeader {...product} />
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
          <ProductMediaTab />
        </TabsContent>
        <TabsContent value="settings">
          <ProductSettingsTab />
        </TabsContent>
      </Tabs>
    </div>
  )
}
