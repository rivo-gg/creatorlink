import { ModeToggle } from './mode-toggle'
import { MobileMenu } from './mobile-menu'

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Navbar = ({ ...props }: NavbarProps) => {
  return (
    <header
      className="w-full flex container border-x border-b gap-4 justify-between items-center px-6 py-4 bg-background/80 backdrop-blur-md fixed z-50"
      {...props}
    >
      <a
        href="/"
        className="flex items-center text-2xl sm:text-3xl font-inter font-semibold"
      >
        <span>Creator</span>
        <span className="text-primary">link</span>
      </a>
      <div className="flex gap-4 items-center">
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <a href="/" className="hover:text-primary transition">
            Features
          </a>
          <a href="/" className="hover:text-primary transition">
            Pricing
          </a>
          <a href="/" className="hover:text-primary transition">
            Docs
          </a>
          <a href="/" className="hover:text-primary transition">
            Blog
          </a>
        </nav>
        <ModeToggle />
        <MobileMenu />
      </div>
    </header>
  )
}
