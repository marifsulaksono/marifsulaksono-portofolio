import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" aria-label="Home">
          <h1 className="text-2xl font-bold text-primary font-[var(--font-playfair)]">Hello Word!</h1>
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link href="/#about" className="text-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/#experience" className="text-foreground hover:text-primary transition-colors">
            Experience
          </Link>
          <Link href="/#skills" className="text-foreground hover:text-primary transition-colors">
            Skills
          </Link>
          <Link href="/#projects" className="text-foreground hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="/#contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
          <Link href="/blog" className="text-foreground hover:text-primary transition-colors">
            Blog
          </Link>
        </nav>
      </div>
    </header>
  )
}
