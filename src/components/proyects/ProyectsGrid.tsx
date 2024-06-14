import { getAllArticles } from '@/actions/blog/mdxActions'
import React from 'react'
import ProyectCard from './ProyectCard'
import { MetadataPost } from '@/types'

const ProyectsGrid = async () => {
  const metadataPosts = await getAllArticles({ type: 'proyects' })

  return (
    <section className="grid-mid">
      {metadataPosts.map(({ mdxMetadata }, index) => {
        return <ProyectCard metadataPost={mdxMetadata as MetadataPost} key={mdxMetadata.title + index.toString()} />
      })}
    </section>
  )
}

export default ProyectsGrid
