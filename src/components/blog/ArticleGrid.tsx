'use client'
import { MetadataPost } from '@/types'
import ArticleCard from './ArticleCard'

export interface propTypes {
  metadataPosts: MetadataPost[]
}
const ArticleGrid = ({ metadataPosts }: propTypes) => {
  return (
    <section className="grid grid-cols-[repeat(auto-fill,325px)] gap-4 items-center justify-center lg:justify-between">
      {metadataPosts.map((metadataPost, index) => (
        <ArticleCard metadataPost={metadataPost} key={index.toString() + metadataPost.title + '-key-grid'} />
      ))}
    </section>
  )
}

export default ArticleGrid
