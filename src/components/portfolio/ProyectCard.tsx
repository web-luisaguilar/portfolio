'use client'
import { MetadataPost } from '@/types'
import Link from 'next/link'
import { useAppDispatch } from '@/lib/hooks'
import { setContent, toggle } from '@/lib/features/modal/modalSlice'

const ProyectCard = ({ mdxMetadata }: { mdxMetadata: MetadataPost }) => {
  const dispatch = useAppDispatch()
  const handleClick = () => {
    dispatch(setContent(<iframe src={mdxMetadata.preview} className="w-full h-full"></iframe>))
    dispatch(toggle())
  }
  return (
    <>
      <div className="card card-md opacity-80 hover:opacity-100">
        <div className=" overflow-hidden hover:cursor-pointer" onClick={handleClick}>
          <img
            className=" aspect-video w-full  scale-110 hover:scale-100 duration-200"
            src={mdxMetadata.img || '/default-article.png'}
            alt={mdxMetadata.title}
          />
        </div>
        <h2 className="hover:cursor-pointer hover:underline" onClick={handleClick}>
          {mdxMetadata.title || 'Titulo de Proyecto'}
        </h2>
        <p className="hover:cursor-pointer hover:underline" onClick={handleClick}>
          {' '}
          {mdxMetadata.description || 'Breve descripcion de el proyecto'}
        </p>
        <div className="flex justify-between">
          <button onClick={handleClick}>Vista Rapida</button>
          {mdxMetadata.preview && (
            <Link href={mdxMetadata.preview} className="btn hover:cursor-alias" target="_blank" rel="noreferrer">
              Visitar
            </Link>
          )}
          {mdxMetadata.github && (
            <Link href={mdxMetadata.github} className="btn" target="_blank" rel="noreferrer">
              Github
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default ProyectCard
