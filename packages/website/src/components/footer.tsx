interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Footer({ ...props }: FooterProps) {
  return (
    <footer
      className="flex flex-col container border-x gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t"
      {...props}
    >
      <p className="text-sm text-foreground/70">
        © 2024 CreatorLink. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <a
          className="text-sm hover:underline underline-offset-4 text-foreground/70 hover:text-primary"
          href="/"
        >
          Terms of Service
        </a>
        <a
          className="text-sm hover:underline underline-offset-4 text-foreground/70 hover:text-primary"
          href="/"
        >
          Privacy
        </a>
      </nav>
    </footer>
  )
}
