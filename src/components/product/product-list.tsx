"use client"

import { useState } from "react"
import Image from "next/image"
import { api } from "@/server/trpc/api"

import { cn } from "@/lib/utils"

export function ProductList({ initialData }: { initialData: any[] }) {
  const getProducts = api.products.getProducts.useQuery(undefined, {
    initialData,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  })
  return (
    <div className="mt-4 space-y-4">
      <h3 className="text-2xl font-bold">Products Futures</h3>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {getProducts.data?.map((product) => <ProductCard {...product} />)}
      </div>
    </div>
  )
}

const ProductCard = ({ id, title, price }: TProduct) => (
  <div key={id} className="space-y-1 rounded-xl border p-4 shadow-sm">
    <ProductImage />
    <h2 className="text-lg font-bold">{title}</h2>
    <p className="text-sm text-muted-foreground">${price}</p>
  </div>
)

const ProductImage = () => {
  const [loaded, setLoaded] = useState(false)
  const isLoaded = loaded ? "blur-none" : "blur-sm"
  return (
    <div className="relative mb-4 aspect-[4/4] rounded-lg">
      <Image
        fill
        alt="hello world"
        src={"/images/t-shirt.webp"}
        className={cn(
          `h-full w-full rounded-[inherit] object-cover duration-700`,
          isLoaded
        )}
        onLoadingComplete={() => setLoaded(true)}
      />
    </div>
  )
}
