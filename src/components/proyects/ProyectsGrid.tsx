import { getAllArticles } from '@/actions/blog/mdxActions'
import React from 'react'
import ProyectCard from './ProyectCard'

const ProyectsGrid = async () => {
  const metadataPosts = await getAllArticles({ type: 'proyects' })
  return (
    <section className="grid grid-cols-[repeat(auto-fill,400px)] gap-4 items-center justify-center lg:justify-between">
      {metadataPosts.map(({ mdxMetadata }, index) => {
        return <ProyectCard key={mdxMetadata.title} />
      })}
    </section>
  )
}

export default ProyectsGrid
