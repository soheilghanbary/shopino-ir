import { serverClient } from "@/server/trpc/serverClient"

export default async function HomePage() {
  const products = await serverClient.products.getProducts()
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-semibold">Home Page</h1>
      {JSON.stringify(products, null, 2)}
    </div>
  )
}
