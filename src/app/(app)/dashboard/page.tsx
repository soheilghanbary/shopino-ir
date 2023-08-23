import Image from "next/image"

import { Icons } from "@/components/icons"
import { PageHeader } from "@/components/page-header"

export default function DashboardPage() {
  return (
    <>
      <PageHeader title="Dashboard" description="manage your dashboard page" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card title="Total Revenue" />
        <Card title="Subscriptions" />
        <Card title="Sales" />
        <Card title="Active Now" />
      </div>
      <div className="mt-4 space-y-4">
        <h3 className="text-2xl font-bold">Stores</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <StoreCard title="Mobile.ir" />
          <StoreCard title="Shopino" />
          <StoreCard title="PushakeMan" />
        </div>
      </div>
      <div className="mt-4 space-y-4">
        <h3 className="text-2xl font-bold">Products Futures</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
    </>
  )
}

const Card = ({ title = "" }) => (
  <div className="space-y-2 rounded-xl border p-4 shadow-sm">
    <div className="flex items-center justify-between text-sm font-medium">
      <p>{title}</p>
      <Icons.dollar className="h-4 w-4 text-teal-500 dark:text-teal-300" />
    </div>
    <div>
      <p className="text-lg font-bold leading-relaxed md:text-xl lg:text-xl xl:text-2xl">
        $45,231.89
      </p>
      <p className="text-xs text-muted-foreground">+20.1% from last month</p>
    </div>
  </div>
)

const StoreCard = ({ title = "" }) => (
  <div className="space-y-1 rounded-xl border p-4 shadow-sm">
    <div className="relative mb-4 aspect-video rounded-lg">
      <Image
        fill
        alt="hello world"
        src={"/images/pattern-3.gif"}
        className="h-full w-full rounded-[inherit] object-cover"
      />
    </div>
    <div className="flex items-center justify-between text-sm font-medium">
      <h2 className="text-lg font-bold">{title}</h2>
      <Icons.store className="h-4 w-4 text-blue-500 dark:text-blue-300" />
    </div>
    <p className="text-sm text-muted-foreground">Products: 1223</p>
  </div>
)

const ProductCard = ({ title = "" }) => (
  <div className="cursor-pointer space-y-1 rounded-xl border p-4 shadow-sm">
    <div className="group relative mb-4 aspect-[4/4] overflow-hidden rounded-lg">
      <Image
        fill
        alt="hello world"
        src={"/images/t-shirt.webp"}
        className="h-full w-full rounded-[inherit] object-cover transition group-hover:scale-110"
      />
    </div>
    <h2 className="text-lg font-bold">{title}</h2>
    <p className="text-sm text-muted-foreground">$34.99</p>
  </div>
)
