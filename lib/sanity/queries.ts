export const postsListQuery = /* groq */ `
*[_type == "post" && status == "published"]
| order(publishedAt desc) {
  _id,
  title,
  excerpt,
  publishedAt,
  "slug": slug.current,
  "coverImageUrl": coverImage.asset->url,
  "coverImageAlt": coalesce(coverImage.alt, title)
}
`

export const postBySlugQuery = /* groq */ `
*[_type == "post" && status == "published" && slug.current == $slug][0] {
  _id,
  title,
  excerpt,
  publishedAt,
  "slug": slug.current,
  "coverImageUrl": coverImage.asset->url,
  "coverImageAlt": coalesce(coverImage.alt, title),
  content,
  "author": author->{
    _id,
    "name": coalesce(name, title)
  },
  "tags": tags[]->{
    _id,
    "name": coalesce(title, name),
    "slug": slug.current
  }
}
`
