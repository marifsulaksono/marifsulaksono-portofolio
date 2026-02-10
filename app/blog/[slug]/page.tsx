import Link from "next/link"
import { notFound } from "next/navigation"
import { format } from "date-fns"

import { Badge } from "@/components/ui/badge"
import { sanityClient } from "@/lib/sanity/client"
import { postBySlugQuery } from "@/lib/sanity/queries"
import { SanityPortableText } from "@/components/sanity-portable-text"

export const revalidate = 900

type PostDetail = {
  _id: string
  title?: string
  excerpt?: string
  publishedAt?: string
  slug: string
  coverImageUrl?: string
  coverImageAlt?: string
  content?: unknown
  author?: { _id: string; name?: string }
  tags?: Array<{ _id: string; name?: string; slug?: string }>
}

async function getPost(slug: string): Promise<PostDetail | null> {
  return sanityClient.fetch(postBySlugQuery, { slug })
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post?._id) notFound()

  const publishedLabel = post.publishedAt ? format(new Date(post.publishedAt), "dd MMM yyyy") : undefined

  return (
    <main className="container mx-auto px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <Link href="/blog" className="text-sm text-primary hover:underline underline-offset-4">
            ← Back to Blog
          </Link>
        </div>

        <article className="space-y-6">
          <header className="space-y-3">
            <h1 className="text-4xl font-bold text-primary font-[var(--font-playfair)] leading-tight">
              {post.title ?? "Untitled"}
            </h1>

            <div className="text-sm text-muted-foreground">
              {post.author?.name ? <span>{post.author.name}</span> : null}
              {post.author?.name && publishedLabel ? <span> • </span> : null}
              {publishedLabel ? <span>{publishedLabel}</span> : null}
            </div>
          </header>

          {post.coverImageUrl ? (
            <img
              src={post.coverImageUrl}
              alt={post.coverImageAlt ?? post.title ?? "Cover image"}
              className="w-full rounded-lg border border-border object-cover"
            />
          ) : null}

          <div className="space-y-4">
            <SanityPortableText value={post.content} />
          </div>

          {post.tags && post.tags.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag._id} variant="secondary">
                  {tag.name ?? "Tag"}
                </Badge>
              ))}
            </div>
          ) : null}
          
        </article>
      </div>
    </main>
  )
}
