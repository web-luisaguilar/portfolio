import { getAllArticles, getAllArticlesSlug, getArticle } from '@/actions/blog/mdxActions'
import NotFound from '@/app/not-found'
import Article from '@/components/Article'

interface propTypes {
  params: { slug: string }
}
const ArticleBlog = async ({ params }: propTypes) => {
  const slug = decodeURIComponent(params.slug)
  try {
    const { mdxContent } = await getArticle({ slug, type: 'blog' })
    return (
      <main>
        <Article mdxSource={mdxContent} />
      </main>
    )
  } catch (err) {
    return <NotFound />
  }
}

export async function generateStaticParams() {
  const slugs = await getAllArticlesSlug({ type: 'blog' })
  return slugs.map((slug) => ({
    slug: decodeURIComponent(slug.replace('.mdx', '')),
  }))
}

export default ArticleBlog
