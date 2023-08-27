type TProduct = {
  id: string
  title: string
  price: number
  category: string
  inventory: number
  description: string
  images: [{ url: string; key: string }]
  createdAt: Date | string
  userId: string
}
