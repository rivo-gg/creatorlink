import { Button } from '@/components/ui/button'

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Hero = ({ ...props }: HeroProps) => {
  return (
    <section
      className="w-full flex flex-col gap-4 items-center text-center container my-20"
      {...props}
    >
      <span className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
        Creator Usernames
        <span className="text-primary"> JSON API</span>
      </span>
      <span className="mx-auto max-w-[700px] text-foreground/70 md:text-xl">
        Creatorlink provides a powerful JSON dataset for game developers and app
        creators to manage and reserve usernames across multiple platforms.
      </span>
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <Button className="px-8">Get API Key</Button>
        <Button variant="outline" className="px-8">
          View Docs
        </Button>
      </div>
    </section>
  )
}
