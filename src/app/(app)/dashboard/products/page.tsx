import { serverClient } from "@/server/trpc/serverClient"

import { PageHeader } from "@/components/page-header"
import { AddProduct } from "@/components/product/add-product"
import { ProductList } from "@/components/product/product-list"

export default async function ProductsPage() {
  const products = await serverClient.products.getProducts()
  return (
    <div>
      <PageHeader title="Products" description="manage your products" />
      <AddProduct />
      <ProductList initialData={products} />
    </div>
  )
}
