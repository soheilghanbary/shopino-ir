import Image from "next/image"

import { PageHeader } from "@/components/page-header"

export default function ProductsPage() {
  return (
    <div>
      <PageHeader title="Products" description="manage your products" />
      <div className="mt-4 space-y-4">
        <h3 className="text-2xl font-bold">Products Futures</h3>
        <div className="grid grid-cols-4 gap-4">
          <ProductCard title="Mobile.ir" />
          <ProductCard title="Shopino" />
          <ProductCard title="PushakeMan" />
          <ProductCard title="PushakeMan" />
          <ProductCard title="PushakeMan" />
          <ProductCard title="PushakeMan" />
          <ProductCard title="PushakeMan" />
          <ProductCard title="PushakeMan" />
        </div>
      </div>
      <div className="mt-4 space-y-4">
        <h3 className="text-2xl font-bold">Products Futures</h3>
        <div className="grid grid-cols-4 gap-4">
          <ProductCard title="Mobile.ir" />
          <ProductCard title="Shopino" />
          <ProductCard title="PushakeMan" />
          <ProductCard title="PushakeMan" />
          <ProductCard title="PushakeMan" />
          <ProductCard title="PushakeMan" />
          <ProductCard title="PushakeMan" />
          <ProductCard title="PushakeMan" />
        </div>
      </div>
      <div className="mt-4 space-y-4">
        <h3 className="text-2xl font-bold">Products Futures</h3>
        <div className="grid grid-cols-4 gap-4">
          <ProductCard title="Mobile.ir" />
          <ProductCard title="Shopino" />
          <ProductCard title="PushakeMan" />
          <ProductCard title="PushakeMan" />
          <ProductCard title="PushakeMan" />
          <ProductCard title="PushakeMan" />
          <ProductCard title="PushakeMan" />
          <ProductCard title="PushakeMan" />
        </div>
      </div>
    </div>
  )
}

const ProductCard = ({ title = "" }) => (
  <div className="space-y-1 rounded-xl border p-4 shadow-sm">
    <div className="relative mb-4 aspect-[4/4] rounded-lg">
      <Image
        fill
        alt="hello world"
        src={"/images/t-shirt.webp"}
        className="h-full w-full rounded-[inherit] object-cover"
      />
    </div>
    <h2 className="text-lg font-bold">{title}</h2>
    <p className="text-sm text-muted-foreground">$34.99</p>
  </div>
)
