"use client"

import { useState } from "react"
import Link from "next/link"
import { api } from "@/server/trpc/api"

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

export function SiteProfile(initialData: any) {
  const [open, setOpen] = useState(false)
  const getUsers = api.users.getUser.useQuery(undefined, {
    initialData,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  })
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={getUsers.data?.avatar} />
          <AvatarFallback></AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44">
        <DropdownMenuLabel>{getUsers.data?.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link
            onClick={() => setOpen(false)}
            className="flex h-full w-full items-center"
            href={"/dashboard"}
          >
            <Icons.dashboard className="mr-2 h-4 w-4" />
            Dashboard
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            onClick={() => setOpen(false)}
            className="flex h-full w-full items-center"
            href={"/dashboard/products"}
          >
            <Icons.store className="mr-2 h-4 w-4" />
            Products
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            onClick={() => setOpen(false)}
            className="flex h-full w-full items-center"
            href={"/dashboard/settings"}
          >
            <Icons.settings className="mr-2 h-4 w-4" />
            Settings
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link
            onClick={() => setOpen(false)}
            className="flex h-full w-full items-center text-pink-500"
            href={"/logout"}
          >
            <Icons.logout className="mr-2 h-4 w-4" />
            Log Out
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
