import { Separator } from "./ui/separator"
import { Skeleton } from "./ui/skeleton"

interface Props {
  title: string
  description: string
}

export function PageHeader({ title, description }: Props) {
  return (
    <header className="mb-4 space-y-2">
      <h1 className="text-lg font-extrabold md:text-2xl lg:text-3xl">
        {title}
      </h1>
      <p className="text-sm text-muted-foreground">{description}</p>
    </header>
  )
}

export const PageHeaderSkeleton = () => (
  <div className="mb-4 space-y-2">
    <Skeleton className="h-6 w-36" />
    <Skeleton className="h-4 w-40" />
  </div>
)
