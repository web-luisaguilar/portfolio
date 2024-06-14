import { MetadataPost } from '@/types'
import ArticleCard from './ArticleCard'
import { getAllArticles } from '@/actions/blog/mdxActions'

const ArticleGrid = async () => {
  const metadataPosts = await getAllArticles({ type: 'blog' })

  return (
    <section className="grid-small">
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
