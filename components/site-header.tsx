"use client"

import Link from "next/link"

import { MenuIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const NAV_ITEMS = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
] as const

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" aria-label="Home">
          <h1 className="text-2xl font-bold text-primary font-[var(--font-playfair)]">Hello Word!</h1>
        </Link>

        <div className="flex items-center gap-2">
          <nav className="hidden md:flex space-x-6">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} className="text-foreground hover:text-primary transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                <MenuIcon className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0">
              <SheetHeader className="border-b border-border">
                <SheetTitle className="font-[var(--font-playfair)] text-primary">Menu</SheetTitle>
              </SheetHeader>
              <div className="px-2 py-2">
                <nav className="flex flex-col">
                  {NAV_ITEMS.map((item) => (
                    <SheetClose key={item.href} asChild>
                      <Link
                        href={item.href}
                        className="rounded-md px-3 py-2 text-base text-foreground hover:bg-muted transition-colors"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
