import Link from "next/link"
import { PortableText, type PortableTextComponents } from "@portabletext/react"

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-primary mt-8 mb-3 font-[var(--font-playfair)]">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-primary mt-8 mb-3 font-[var(--font-playfair)]">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-primary mt-6 mb-2">{children}</h3>
    ),
    h4: ({ children }) => <h4 className="text-lg font-semibold mt-5 mb-2">{children}</h4>,
    normal: ({ children }) => <p className="leading-relaxed text-foreground/90">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary/30 pl-4 italic text-foreground/80">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 space-y-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6 space-y-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  marks: {
    link: ({ children, value }) => {
      const href = (value as { href?: string } | undefined)?.href
      if (!href) return <>{children}</>

      const isExternal = href.startsWith("http://") || href.startsWith("https://")
      if (isExternal) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 text-primary">
            {children}
          </a>
        )
      }

      return (
        <Link href={href} className="underline underline-offset-4 text-primary">
          {children}
        </Link>
      )
    },
  },
}

export function SanityPortableText({ value }: { value: unknown }) {
  if (!value) return null
  return <PortableText value={value} components={components} />
}
