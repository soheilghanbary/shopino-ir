"use client"

import { api } from "@/server/trpc/api"

import { PageHeader } from "@/components/page-header"

export function SingleProductHeader(initialData: any) {
  const getProduct = api.products.getProduct.useQuery(initialData.id, {
    initialData,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  })
  return <PageHeader title={getProduct.data?.title!} description="" />
}
