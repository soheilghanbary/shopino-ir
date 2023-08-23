import Link from "next/link"
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/server"

import { db } from "@/lib/db"
import { getId } from "@/lib/session"
import { tw } from "@/lib/tailwind-styled"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

import { SiteNav } from "./site-nav"
import { SiteProfile } from "./site-profile"

const LogoStyled = tw(
  Link
)`flex items-center gap-2 [&>svg]:h-5 [&>svg]]:w-5 [&>h3]:text-lg [&>h3]:font-extrabold`
const HeaderStyled = tw.header`z-50 py-4 border-b bg-background`
const NavbarStyled = tw.nav`container mx-auto flex items-center justify-between gap-8`
const RightSideStyled = tw.div`flex items-center gap-4`

export const Logo = () => {
  return (
    <LogoStyled href={"/"}>
      <Icons.logo />
      <h3>Shopino</h3>
    </LogoStyled>
  )
}

export async function SiteHeader() {
  return (
    <HeaderStyled>
      <NavbarStyled>
        <Logo />
        <Nav />
        <RightSide />
      </NavbarStyled>
    </HeaderStyled>
  )
}

const RightSide = async () => {
  const id = await getId()
  const user = await db.user.findFirst({ where: { id } })

  const Render = () => (user ? <SiteProfile {...user} /> : <SignInButton />)

  return (
    <RightSideStyled>
      <Button variant={"outline"} size={"icon"}>
        <Icons.cart className="h-4 w-4" />
      </Button>
      <ThemeToggle />
      <Render />
    </RightSideStyled>
  )
}

const Nav = () => (
  <section className="z-50 hidden flex-1 lg:inline">
    <SiteNav />
  </section>
)

const SignInButton = () => (
  <LoginLink>
    <Button size={"sm"}>Sign in</Button>
  </LoginLink>
)
