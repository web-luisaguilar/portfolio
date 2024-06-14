import { getAllArticles } from '@/actions/blog/mdxActions'
import ProyectCard from './ProyectCard'
import { MetadataPost } from '@/types'
import Modal from '../Modal'

const ProyectGrid = async () => {
  const proyects = await getAllArticles({ type: 'portfolio' })

  return (
    <section className="grid-mid">
      {proyects.map(({ mdxMetadata }, index) => {
        return (
          <>
            <ProyectCard
              mdxMetadata={mdxMetadata as MetadataPost}
              key={index.toString() + mdxMetadata.title + 'key-grid'}
            ></ProyectCard>
            <Modal />
          </>
        )
      })}
    </section>
  )
}

export default ProyectGrid
