import "@/styles/globals.css"

import type { Metadata } from "next"
import { irsans } from "@/assets/fonts"
import NextTopLoader from "nextjs-toploader"

import { siteConfig } from "@/config/site"
import { StyledComponentsRegistry } from "@/components/providers/styled-provider"
import { ThemeProvider } from "@/components/providers/theme-provider"
import TRPCProvider from "@/components/providers/trpc-provider"
import SiteFooter from "@/components/site/site-footer"
import { SiteHeader } from "@/components/site/site-header"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="theme-color" href="#14B8A6" />
      </head>
      <body className={irsans.className}>
        <TRPCProvider>
          <StyledComponentsRegistry>
            <NextTopLoader
              color="hsl(var(--primary))"
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              showSpinner={true}
              easing="ease"
              speed={200}
              shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            />
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableColorScheme
              disableTransitionOnChange
            >
              <SiteHeader />
              <main className="container mx-auto">{children}</main>
              <SiteFooter />
            </ThemeProvider>
          </StyledComponentsRegistry>
        </TRPCProvider>
      </body>
    </html>
  )
}
