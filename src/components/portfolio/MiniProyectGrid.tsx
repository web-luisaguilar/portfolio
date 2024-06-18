import { getAllArticles } from '@/actions/blog/mdxActions'
import ProyectCard from './ProyectCard'
import { MetadataPost } from '@/types'
import Modal from '../Modal'

const MiniProyectGrid = async () => {
  const proyects = await getAllArticles({ type: 'mini-projects' })
  return (
    <section className="grid-mid">
      {proyects.map(({ mdxMetadata }, index) => {
        return (
          <div key={index.toString() + mdxMetadata.title + 'key-grid'}>
            <ProyectCard mdxMetadata={mdxMetadata as MetadataPost}></ProyectCard>
            <Modal />
          </div>
        )
      })}
    </section>
  )
}

export default MiniProyectGrid
