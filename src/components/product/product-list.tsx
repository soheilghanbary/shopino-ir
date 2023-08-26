"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { api } from "@/server/trpc/api"

import { tw } from "@/lib/tailwind-styled"

const ProductListStyled = tw.div`mt-4 grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4`
const ProductCardStyled = tw(
  Link
)`rounded-lg border shadow-sm hover:ring-2 ring-primary duration-100 cursor-pointer active:scale-90`
const Body = tw.div`px-4 py-3 border-t`
const Title = tw.h2`font-semibold text-base line-clamp-1`
const ProductImageStyled = tw.div`
  relative aspect-[4/4] rounded-md
  [&>img]:h-full [&>img]:w-full [&>img]:rounded-[inherit] [&>img]:object-cover [&>img]:duration-700
`

export function ProductList({ initialData }: { initialData: any[] }) {
  const getProducts = api.products.getProducts.useQuery(undefined, {
    initialData,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  })
  return (
    <ProductListStyled>
      {getProducts.data?.map((product) => <ProductCard {...product} />)}
    </ProductListStyled>
  )
}

const ProductCard = ({ id, title, price }: TProduct) => (
  <ProductCardStyled href={`/dashboard/products/${id}`} key={id}>
    <ProductImage />
    <Body>
      <Title>{title}</Title>
      <p className="text-sm text-muted-foreground">${price}</p>
    </Body>
  </ProductCardStyled>
)

const ProductImage = () => {
  const [loaded, setLoaded] = useState(false)
  const isLoaded = loaded ? "blur-none" : "blur-sm"
  return (
    <div className="p-2">
      <ProductImageStyled>
        <Image
          fill
          alt="hello world"
          src={"/images/t-shirt.webp"}
          className={isLoaded}
          onLoadingComplete={() => setLoaded(true)}
        />
      </ProductImageStyled>
    </div>
  )
}
