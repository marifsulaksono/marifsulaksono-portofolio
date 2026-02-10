import Link from "next/link"
import { format } from "date-fns"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { sanityClient } from "@/lib/sanity/client"
import { postsListQuery } from "@/lib/sanity/queries"

export const revalidate = 900

type PostListItem = {
  _id: string
  title?: string
  excerpt?: string
  publishedAt?: string
  slug: string
  coverImageUrl?: string
  coverImageAlt?: string
}

async function getPosts(): Promise<PostListItem[]> {
  return sanityClient.fetch(postsListQuery)
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <main className="container mx-auto px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-primary font-[var(--font-playfair)]">Blog</h1>
          <p className="text-muted-foreground mt-2">Artikel, catatan belajar, dan insight seputar hal yang telah aku pelajari.</p>
        </header>

        {posts.length === 0 ? (
          <div className="text-muted-foreground">Belum ada post yang dipublish.</div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => {
              const href = `/blog/${post.slug}`
              const publishedLabel = post.publishedAt ? format(new Date(post.publishedAt), "dd MMM yyyy") : undefined

              return (
                <Link key={post._id} href={href} className="block">
                  <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                    {post.coverImageUrl ? (
                      <img
                        src={post.coverImageUrl}
                        alt={post.coverImageAlt ?? post.title ?? "Cover image"}
                        className="w-full h-48 object-cover"
                        loading="lazy"
                      />
                    ) : null}
                    <CardHeader>
                      <CardTitle className="text-xl leading-snug">{post.title ?? "Untitled"}</CardTitle>
                      {publishedLabel ? <CardDescription>{publishedLabel}</CardDescription> : null}
                    </CardHeader>
                    {post.excerpt ? (
                      <CardContent>
                        <p className="text-sm text-foreground/80 leading-relaxed line-clamp-4">{post.excerpt}</p>
                      </CardContent>
                    ) : null}
                  </Card>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </main>
  )
}
