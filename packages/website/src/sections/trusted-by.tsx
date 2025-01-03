import { companies } from '@/data/companies'
import Marquee from 'react-fast-marquee'

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {}

export const TrustedBy = ({ ...props }: MarqueeProps) => {
  return (
    <section
      className="w-full flex flex-col gap-4 items-center container my-20"
      {...props}
    >
      <div className="bg-primary/5 dark:bg-primary/10 py-24 w-full rounded-2xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-6xl mx-auto px-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
              Trusted by Developers Worldwide
            </h2>
            <p className="max-w-[900px] text-foreground/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join the community of game developers and app creators using
              CreatorLink's JSON API.
            </p>
          </div>
        </div>
        <Marquee
          className="w-full mt-16"
          gradient
          gradientColor="var(--marquee-gradient)"
          loop={0}
          speed={20}
          direction="left"
          autoFill
        >
          {companies.map((company) => (
            <MarqueeItem
              key={company.name}
              name={company.name}
              logo={company.logo}
            />
          ))}
        </Marquee>
      </div>
    </section>
  )
}

interface MarqueeItemProps {
  name: string
  logo: string
}

const MarqueeItem = ({ name, logo }: MarqueeItemProps) => {
  return (
    <div className="flex flex-col items-center gap-6 mr-24">
      <img src={logo} alt={`${name} Logo`} className="flex-shrink-0 size-12" />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
    </div>
  )
}
