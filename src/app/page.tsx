import { serverClient } from "@/server/trpc/serverClient"

export default async function HomePage() {
  const products = await serverClient.products.getProducts()
  return (
    <div>
      <h1 className="text-4xl font-semibold">عالی نیست!</h1>
      {JSON.stringify(products, null, 2)}
    </div>
  )
}
