import { MetadataPost } from '@/types'
import Link from 'next/link'
import React from 'react'

const ProyectCard = ({ metadataPost }: { metadataPost: MetadataPost }) => {
  return (
    <div className=" card-md">
      <div className="">
        <div className="flex items-center justify-center w-full aspect-video ">
          <img className=" " src="" alt="img" />
        </div>
        <h2>{metadataPost.title}</h2>
        <p className="text-base md:line-clamp-4 line-clamp-2">{metadataPost.description}</p>
      </div>
      <div className="flex gap-4 justify-between">
        <Link href={''} className="btn">
          Visita el sitio web
        </Link>
        <Link href={''} className="btn">
          Leer mas
        </Link>
      </div>
    </div>
  )
}

export default ProyectCard
