import Link from "next/link"

import { Icons } from "./icons"

export const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center space-x-2">
      <Icons.logo className="h-5 w-5" />
      <h3 className="text-lg font-bold">Shopino v2</h3>
    </Link>
  )
}
