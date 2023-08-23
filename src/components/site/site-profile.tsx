import Link from "next/link"
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Icons } from "../icons"

type User = {
  name: string
  avatar: string
}

export function SiteProfile({ name, avatar }: User) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={avatar} />
          <AvatarFallback></AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44">
        <DropdownMenuLabel>{name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link className="flex h-full w-full items-center" href={"/dashboard"}>
            <Icons.dashboard className="mr-2 h-4 w-4" />
            Dashboard
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            className="flex h-full w-full items-center"
            href={"/dashboard/stores"}
          >
            <Icons.store className="mr-2 h-4 w-4" />
            Stores
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center">
          <Link
            className="flex h-full w-full items-center"
            href={"/dashboard/settings"}
          >
            <Icons.settings className="mr-2 h-4 w-4" />
            Settings
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <LogoutLink>
          <DropdownMenuItem className="flex items-center text-pink-500">
            <Icons.logout className="mr-2 h-4 w-4" />
            Log Out
          </DropdownMenuItem>
        </LogoutLink>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
