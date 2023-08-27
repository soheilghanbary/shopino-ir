"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { api } from "@/server/trpc/api"

import { tw } from "@/lib/tailwind-styled"

import { Icons } from "../icons"

const ProductListStyled = tw.div`
  mt-4 
  grid 
  gap-4 
  grid-cols-2 
  md:grid-cols-2 
  lg:grid-cols-4
`
const ProductCardStyled = tw(Link)`
  rounded-lg 
  border 
  shadow-sm 
  hover:ring-2 
  ring-primary 
  duration-100 
  cursor-pointer 
  active:scale-90
`
const Body = tw.div`
  px-4 
  py-3 
  border-t
`
const Title = tw.h2`
  font-semibold 
  text-base 
  line-clamp-1
`
const Price = tw.p`
  text-sm 
  text-muted-foreground 
  font-medium
`
const ProductImageStyled = tw.div`
  relative 
  aspect-[4/4] 
  rounded-md 
  flex 
  items-center 
  justify-center 
  bg-secondary
  
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
      {getProducts.data?.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </ProductListStyled>
  )
}

const ProductCard = ({ id, title, price, images }: TProduct) => (
  <ProductCardStyled href={`/dashboard/products/${id}`}>
    <ProductImage images={images} />
    <Body>
      <Title>{title}</Title>
      <Price>${price}</Price>
    </Body>
  </ProductCardStyled>
)

const ProductImage = ({
  images,
}: {
  images: [{ url: string; key: string }]
}) => {
  const [loaded, setLoaded] = useState(false)
  const isLoaded = loaded ? "blur-none" : "blur-sm"
  return (
    <div className="p-2">
      <ProductImageStyled>
        {images.length ? (
          <Image
            fill
            alt="hello world"
            src={images[0].url}
            className={isLoaded}
            onLoadingComplete={() => setLoaded(true)}
          />
        ) : (
          <Icons.image className="text-muted-foreground" />
        )}
      </ProductImageStyled>
    </div>
  )
}
