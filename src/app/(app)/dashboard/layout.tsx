import { PropsWithChildren } from "react"
import Link from "next/link"

import { tw } from "@/lib/tailwind-styled"
import { Icons } from "@/components/icons"
import { ToastProvider } from "@/components/providers/toast-provider"

const SidebarContainer = tw.aside`w-60 border-r min-h-[90dvh]`
const Sidebar = tw.aside`top-0 sticky space-y-2 pr-4 pt-4`
const SidebarItem = tw(
  Link
)`flex cursor-pointer items-center rounded-md px-3 py-2 font-medium hover:bg-secondary text-foreground/70 hover:text-foreground transition-colors`

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <section className="flex gap-8">
      <SidebarContainer>
        <Sidebar>
          <SidebarItem href={"/dashboard"}>
            <Icons.dashboard className="mr-3 h-5 w-5" />
            Dashboard
          </SidebarItem>
          <SidebarItem href={"/dashboard/products"}>
            <Icons.store className="mr-3 h-5 w-5" />
            Products
          </SidebarItem>
          <SidebarItem href={"/dashboard/billing"}>
            <Icons.card className="mr-3 h-5 w-5" />
            Billing
          </SidebarItem>
          <SidebarItem href={"/dashboard/settings"}>
            <Icons.settings className="mr-3 h-5 w-5" />
            Settings
          </SidebarItem>
          <SidebarItem href={"/dashboard/account"}>
            <Icons.user className="mr-3 h-5 w-5" />
            Account
          </SidebarItem>
        </Sidebar>
      </SidebarContainer>
      <main className="flex-1 py-4">{children}</main>
      <ToastProvider />
    </section>
  )
}
