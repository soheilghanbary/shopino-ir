import { PropsWithChildren } from "react"

import { tw } from "@/lib/tailwind-styled"
import { Icons } from "@/components/icons"

const SidebarContainer = tw.aside`w-60 border-r min-h-[90dvh]`
const Sidebar = tw.aside`top-0 sticky space-y-2 pr-4 pt-4`
const SidebarItem = tw.div`flex cursor-pointer items-center rounded-md px-3 py-2 font-medium hover:bg-secondary text-foreground/70 hover:text-foreground transition-colors`

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <section className="flex gap-8">
      <SidebarContainer>
        <Sidebar>
          <SidebarItem>
            <Icons.dashboard className="mr-3 h-5 w-5" />
            Dashboard
          </SidebarItem>
          <SidebarItem>
            <Icons.store className="mr-3 h-5 w-5" />
            Products
          </SidebarItem>
          <SidebarItem>
            <Icons.card className="mr-3 h-5 w-5" />
            Billing
          </SidebarItem>
          <SidebarItem>
            <Icons.settings className="mr-3 h-5 w-5" />
            Settings
          </SidebarItem>
          <SidebarItem>
            <Icons.user className="mr-3 h-5 w-5" />
            Account
          </SidebarItem>
        </Sidebar>
      </SidebarContainer>
      <main className="flex-1 py-4">{children}</main>
    </section>
  )
}
