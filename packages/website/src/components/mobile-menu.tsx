import { MenuIcon } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

export const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button type="button" className="p-1 hover:text-primary transition">
          <MenuIcon className="size-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </button>
      </SheetTrigger>
      <SheetContent side="right">
        <nav className="flex flex-col gap-4 sm:gap-6">
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
      </SheetContent>
    </Sheet>
  )
}
