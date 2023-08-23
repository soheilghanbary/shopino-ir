import { tw } from "@/lib/tailwind-styled"
import { Button } from "@/components/ui/button"

const Section = tw.div`max-w-[64rem] mx-auto h-[32rem] flex flex-col justify-center items-center md:gap-6 gap-4`
const Title = tw.h1`md:text-6xl text-3xl font-black text-center leading-tight`
const Paragraph = tw.p`text-muted-foreground text-center md:text-base text-sm`

export default function HomePage() {
  return (
    <Section>
      <Title>Shopino a Next Generation User Store Builder for All</Title>
      <Paragraph>
        Shopino is a cutting-edge user-friendly platform designed for creating
        online stores with easy.
      </Paragraph>
      <div className="space-x-4">
        <Button>Create Store</Button>
        <Button variant={"outline"}>Explore</Button>
      </div>
    </Section>
  )
}
