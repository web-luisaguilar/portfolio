import { MetadataPost } from '@/types'
import ArticleCard from './ArticleCard'
import { getAllArticles } from '@/actions/blog/mdxActions'

const ArticleGrid = async () => {
  const metadataPosts = await getAllArticles({ type: 'blog' })

  return (
    <section className="grid grid-cols-[repeat(auto-fill,325px)] gap-4 items-center justify-center lg:justify-between">
      {metadataPosts.map(({ mdxMetadata }, index) => {
        return (
          <ArticleCard
            metadataPost={mdxMetadata as MetadataPost}
            key={index.toString() + mdxMetadata.title + '-key-grid'}
          />
        )
      })}
    </section>
  )
}

export default ArticleGrid
